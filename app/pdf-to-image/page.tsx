"use client";

import { useState } from "react";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export default function PdfToImagePage() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleFile = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setLoading(true);
    setImages([]);

    const buffer = await file.arrayBuffer();

    const pdf = await pdfjsLib.getDocument({
      data: buffer,
    }).promise;

    const output: string[] = [];

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);

      const viewport = page.getViewport({
        scale: 2,
      });

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d")!;

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      await page.render({
        canvasContext: ctx,
        viewport,
      }).promise;

      output.push(canvas.toDataURL("image/png"));
    }

    setImages(output);
    setLoading(false);
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-bold">
        PDF to Image
      </h1>

      <p className="mt-2 text-gray-600">
        Convert PDF pages into PNG images.
      </p>

      <input
        type="file"
        accept=".pdf"
        onChange={handleFile}
        className="mt-8"
      />

      {loading && (
        <p className="mt-4">
          Converting...
        </p>
      )}

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {images.map((src, index) => (
          <div
            key={index}
            className="rounded-xl border bg-white p-4"
          >
            <img
              src={src}
              alt={`Page ${index + 1}`}
              className="w-full"
            />

            <a
              href={src}
              download={`page-${index + 1}.png`}
              className="mt-4 inline-block rounded-lg bg-red-500 px-4 py-2 text-white"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}