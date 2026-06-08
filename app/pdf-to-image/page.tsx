"use client";

import { useEffect, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import {
  FileImage,
  Loader2,
  Upload,
} from "lucide-react";


pdfjsLib.GlobalWorkerOptions.workerSrc =
  "/pdf.worker.min.mjs";

export default function PdfToImagePage() {
  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [countdown, setCountdown] =
    useState<number | null>(null);

const handleFile = async (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  try {
    setError("");
    setLoading(true);

    const file = e.target.files?.[0];

    if (!file) {
      setLoading(false);
      return;
    }

    const pdfjs = await import("pdfjs-dist");

    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
      "pdfjs-dist/build/pdf.worker.min.mjs",
      import.meta.url
    ).toString();

    const buffer = await file.arrayBuffer();

    const pdf = await pdfjs.getDocument({
      data: buffer,
    }).promise;

    const output: string[] = [];

    for (
      let pageNum = 1;
      pageNum <= pdf.numPages;
      pageNum++
    ) {
      const page = await pdf.getPage(pageNum);

      const viewport = page.getViewport({
        scale: 2,
      });

      const canvas =
        document.createElement("canvas");

      const context =
        canvas.getContext("2d");

      if (!context) continue;

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      await page.render({
        canvasContext: context,
        viewport,
      }).promise;

      output.push(
        canvas.toDataURL("image/png")
      );
    }

    sessionStorage.setItem(
      "downloadImages",
      JSON.stringify(output)
    );

    sessionStorage.setItem(
      "downloadName",
      `${file.name.replace(
        ".pdf",
        ""
      )}-images`
    );

    setLoading(false);
    setCountdown(5);
  } catch (err) {
    console.error(err);

    setLoading(false);

    setError(
      err instanceof Error
        ? err.message
        : "Failed to convert PDF."
    );
  }
};

  useEffect(() => {
    if (countdown === null) return;

    if (countdown === 0) {
      window.location.href =
        "/download";
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) =>
        prev !== null
          ? prev - 1
          : null
      );
    }, 1000);

    return () =>
      clearTimeout(timer);
  }, [countdown]);

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <div className="rounded-3xl border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">
          PDF to Image
        </h1>

        <p className="mt-2 text-gray-600">
          Convert PDF pages into
          high-quality PNG images.
        </p>

        <label className="mt-8 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 p-10 transition hover:bg-gray-50">
          <FileImage className="mb-4 h-14 w-14 text-gray-400" />

          <p className="font-semibold">
            Select PDF File
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Upload a PDF to convert
            into images
          </p>

          <input
            type="file"
            accept=".pdf"
            onChange={handleFile}
            className="hidden"
          />
        </label>

        {loading && (
          <div className="mt-6 rounded-2xl border bg-blue-50 p-6 text-center">
            <Loader2 className="mx-auto mb-3 h-6 w-6 animate-spin" />

            <p className="font-medium">
              Converting PDF...
            </p>

            <p className="mt-1 text-sm text-gray-600">
              Please wait while we
              generate images.
            </p>
          </div>
        )}

        {countdown !== null && (
          <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6 text-center">
            <Upload className="mx-auto mb-3 h-8 w-8 text-green-600" />

            <h2 className="text-lg font-semibold text-green-700">
              Images Ready
            </h2>

            <p className="mt-3 text-4xl font-bold text-green-700">
              {countdown}
            </p>

            <p className="mt-2 text-gray-600">
              Opening download page...
            </p>
          </div>
        )}

        {error && (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-700">
            ❌ {error}
          </div>
        )}
      </div>
    </div>
  );
}