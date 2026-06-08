"use client";

import { useRef, useState } from "react";
import Tesseract from "tesseract.js";
import { Document, Packer, Paragraph } from "docx";
import { saveAs } from "file-saver";

export default function OcrEditorPage() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [error, setError] = useState("");

  const dropRef = useRef<HTMLDivElement>(null);

  const processFile = async (file: File) => {
    try {
      setLoading(true);
      setProgress(0);
      setError("");
      setText("");

      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);

      const result = await Tesseract.recognize(
        file,
        "eng",
        {
          logger: (m) => {
            if (m.status === "recognizing text") {
              setProgress(Math.round(m.progress * 100));
            }
          },
        }
      );

      const extractedText = result.data.text || "";

      setText(
        extractedText.trim()
          ? extractedText
          : "No text detected in image."
      );
    } catch (err) {
      console.error(err);
      setError("OCR failed. Please try another image.");
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (file) {
      processFile(file);
    }
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>
  ) => {
    e.preventDefault();

    const file = e.dataTransfer.files?.[0];

    if (file) {
      processFile(file);
    }
  };

  const handleDragOver = (
    e: React.DragEvent<HTMLDivElement>
  ) => {
    e.preventDefault();
  };

  const handlePaste = (
    e: React.ClipboardEvent<HTMLDivElement>
  ) => {
    const items = e.clipboardData.items;

    for (let i = 0; i < items.length; i++) {
      if (items[i].type.includes("image")) {
        const file = items[i].getAsFile();

        if (file) {
          processFile(file);
        }
      }
    }
  };

  const copyText = async () => {
    if (!text) return;

    await navigator.clipboard.writeText(text);
    alert("Text copied successfully");
  };

  const downloadTxt = () => {
    const blob = new Blob([text], {
      type: "text/plain;charset=utf-8",
    });

    saveAs(blob, "ocr-text.txt");
  };

  const downloadDocx = async () => {
    const doc = new Document({
      sections: [
        {
          children: [new Paragraph(text)],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);

    saveAs(blob, "ocr-text.docx");
  };

  const clearAll = () => {
    setText("");
    setImagePreview("");
    setProgress(0);
    setError("");
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-950 py-10 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-xl border border-gray-200 dark:border-zinc-800 p-8">

          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
            OCR Text Editor
          </h1>

          <p className="text-center text-gray-500 mt-3 mb-8">
            Upload an image and extract editable text instantly
          </p>

          <div
            ref={dropRef}
            tabIndex={0}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onPaste={handlePaste}
            className="
              border-2
              border-dashed
              border-blue-500
              rounded-2xl
              p-12
              text-center
              bg-blue-50
              dark:bg-zinc-800
              hover:border-blue-700
              transition-all
              cursor-pointer
            "
          >
            <div className="text-5xl mb-4">📄</div>

            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Drag & Drop Image Here
            </h2>

            <p className="text-gray-500 mt-2">
              Or Press Ctrl + V To Paste Screenshot
            </p>

            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="mt-5 block mx-auto"
            />
          </div>

          {imagePreview && (
            <div className="mt-8">
              <h3 className="font-semibold mb-3 text-gray-800 dark:text-white">
                Image Preview
              </h3>

              <img
                src={imagePreview}
                alt="Preview"
                className="
                  max-h-[400px]
                  rounded-xl
                  border
                  shadow-md
                  mx-auto
                "
              />
            </div>
          )}

          {loading && (
            <div className="mt-8">
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-blue-600 h-4 transition-all duration-300"
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>

              <p className="text-center mt-3 text-sm text-gray-600 dark:text-gray-300">
                OCR Processing... {progress}%
              </p>
            </div>
          )}

          {error && (
            <div className="mt-6 p-4 rounded-lg bg-red-100 text-red-700">
              {error}
            </div>
          )}

          <div className="flex justify-between items-center mt-8 mb-3">
            <h3 className="font-semibold text-gray-800 dark:text-white">
              Extracted Text
            </h3>

            <span className="text-sm text-gray-500">
              Characters: {text.length}
            </span>
          </div>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="OCR text will appear here..."
            className="
              w-full
              h-[500px]
              p-5
              rounded-2xl
              border
              border-gray-300
              bg-white
              text-black
              dark:bg-zinc-950
              dark:text-white
              resize-none
              shadow-sm
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />

          <div className="flex flex-wrap gap-4 mt-8">

            <button
              onClick={copyText}
              className="
                px-5 py-3
                bg-blue-600
                hover:bg-blue-700
                text-white
                rounded-xl
              "
            >
              Copy Text
            </button>

            <button
              onClick={downloadTxt}
              className="
                px-5 py-3
                bg-green-600
                hover:bg-green-700
                text-white
                rounded-xl
              "
            >
              Download TXT
            </button>

            <button
              onClick={downloadDocx}
              className="
                px-5 py-3
                bg-purple-600
                hover:bg-purple-700
                text-white
                rounded-xl
              "
            >
              Download DOCX
            </button>

            <button
              onClick={clearAll}
              className="
                px-5 py-3
                bg-red-600
                hover:bg-red-700
                text-white
                rounded-xl
              "
            >
              Clear
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}