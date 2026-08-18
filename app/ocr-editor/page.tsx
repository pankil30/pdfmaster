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
  

        <section className="mt-12 rounded-2xl border bg-white p-8 shadow-sm dark:bg-zinc-900 dark:border-zinc-800">
          <h2 className="mb-5 text-3xl font-bold text-gray-900 dark:text-white">
            OCR Image to Text Converter
          </h2>

          <p className="mb-5 leading-8 text-gray-700 dark:text-gray-300">
            Our free OCR (Optical Character Recognition) tool allows you to extract
            editable text from images within seconds. Simply upload a photo,
            screenshot, scanned document, receipt, invoice, business card, book page,
            or handwritten note, and the OCR engine automatically detects and converts
            the text into editable content.
          </p>

          <p className="mb-5 leading-8 text-gray-700 dark:text-gray-300">
            After extraction, you can edit the recognized text directly in the editor,
            copy it to the clipboard, or download it as a TXT or Microsoft Word (DOCX)
            file. Everything happens in your browser, making the process fast,
            convenient, and easy.
          </p>

          <p className="leading-8 text-gray-700 dark:text-gray-300">
            The OCR editor works on Windows, macOS, Linux, Android, and iPhone without
            requiring software installation.
          </p>
        </section>

  

        <section className="mt-12 rounded-2xl border bg-white p-8 shadow-sm dark:bg-zinc-900 dark:border-zinc-800">

          <h2 className="mb-6 text-3xl font-bold dark:text-white">
            How to Extract Text from an Image
          </h2>

          <div className="grid gap-5 md:grid-cols-2">

            <div className="rounded-xl border p-5 dark:border-zinc-700">
              <h3 className="mb-2 text-lg font-semibold dark:text-white">
                Step 1
              </h3>

              <p className="text-gray-600 dark:text-gray-400">
                Upload, drag & drop, or paste an image.
              </p>
            </div>

            <div className="rounded-xl border p-5 dark:border-zinc-700">
              <h3 className="mb-2 text-lg font-semibold dark:text-white">
                Step 2
              </h3>

              <p className="text-gray-600 dark:text-gray-400">
                The OCR engine scans and recognizes the text.
              </p>
            </div>

            <div className="rounded-xl border p-5 dark:border-zinc-700">
              <h3 className="mb-2 text-lg font-semibold dark:text-white">
                Step 3
              </h3>

              <p className="text-gray-600 dark:text-gray-400">
                Review and edit the extracted text.
              </p>
            </div>

            <div className="rounded-xl border p-5 dark:border-zinc-700">
              <h3 className="mb-2 text-lg font-semibold dark:text-white">
                Step 4
              </h3>

              <p className="text-gray-600 dark:text-gray-400">
                Copy the text or download it as TXT or DOCX.
              </p>
            </div>

          </div>

        </section>


        <section className="mt-12 rounded-2xl border bg-white p-8 shadow-sm dark:bg-zinc-900 dark:border-zinc-800">

          <h2 className="mb-6 text-3xl font-bold dark:text-white">
            Features
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-lg border p-4 dark:border-zinc-700">
              ✅ OCR Image Recognition
            </div>

            <div className="rounded-lg border p-4 dark:border-zinc-700">
              ✅ Drag & Drop Upload
            </div>

            <div className="rounded-lg border p-4 dark:border-zinc-700">
              ✅ Paste Screenshots
            </div>

            <div className="rounded-lg border p-4 dark:border-zinc-700">
              ✅ Live Text Editor
            </div>

            <div className="rounded-lg border p-4 dark:border-zinc-700">
              ✅ Copy to Clipboard
            </div>

            <div className="rounded-lg border p-4 dark:border-zinc-700">
              ✅ Download TXT
            </div>

            <div className="rounded-lg border p-4 dark:border-zinc-700">
              ✅ Download DOCX
            </div>

            <div className="rounded-lg border p-4 dark:border-zinc-700">
              ✅ Fast OCR Processing
            </div>

            <div className="rounded-lg border p-4 dark:border-zinc-700">
              ✅ Free to Use
            </div>

          </div>

        </section>



        <section className="mt-12 rounded-2xl border bg-white p-8 shadow-sm dark:bg-zinc-900 dark:border-zinc-800">

          <h2 className="mb-5 text-3xl font-bold dark:text-white">
            Supported Image Types
          </h2>

          <p className="leading-8 text-gray-700 dark:text-gray-300">
            This OCR tool works with screenshots, scanned documents, invoices, receipts,
            books, newspapers, business cards, forms, letters, identity documents,
            certificates, presentations, whiteboards, and many other image types. Clear,
            high-resolution images generally produce more accurate text recognition.
          </p>

        </section>

   

        <section className="mt-12 rounded-2xl border bg-white p-8 shadow-sm dark:bg-zinc-900 dark:border-zinc-800">

          <h2 className="mb-5 text-3xl font-bold dark:text-white">
            Why Use OCR?
          </h2>

          <p className="mb-5 leading-8 text-gray-700 dark:text-gray-300">
            OCR technology saves time by converting printed or scanned text into editable
            digital text. Instead of manually typing documents, you can instantly extract
            content for editing, searching, translating, or archiving.
          </p>

          <p className="leading-8 text-gray-700 dark:text-gray-300">
            Students, teachers, researchers, businesses, government offices, and
            professionals use OCR every day to digitize paperwork and improve productivity.
          </p>

        </section>

      

        <section className="mt-12 rounded-2xl bg-blue-50 p-8 dark:bg-zinc-800">

          <h2 className="mb-4 text-3xl font-bold dark:text-white">
            Privacy & Security
          </h2>

          <p className="leading-8 text-gray-700 dark:text-gray-300">
            Your images are processed securely. We do not permanently store uploaded
            files, helping protect your personal and confidential information during OCR
            processing.
          </p>

        </section>

      

        <section className="mt-12 rounded-2xl border bg-white p-8 shadow-sm dark:bg-zinc-900 dark:border-zinc-800">

          <h2 className="mb-6 text-3xl font-bold dark:text-white">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="text-lg font-semibold dark:text-white">
                Is this OCR tool free?
              </h3>

              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Yes. You can extract text from images without paying anything.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold dark:text-white">
                Can I edit the extracted text?
              </h3>

              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Yes. The recognized text appears in the editor where you can modify it before downloading.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold dark:text-white">
                Which image formats are supported?
              </h3>

              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Most common image formats including JPG, JPEG, PNG, BMP, GIF, and WebP are supported.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold dark:text-white">
                Can I download the extracted text?
              </h3>

              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Yes. You can copy the text or download it as a TXT or DOCX file.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold dark:text-white">
                Are my images secure?
              </h3>

              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Yes. Uploaded files are processed securely and are not permanently stored.
              </p>
            </div>

          </div>

        </section>
      </div>

    </div>
  );
}