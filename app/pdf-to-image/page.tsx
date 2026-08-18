


"use client";

export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { FileImage, Loader2, Upload } from "lucide-react";

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

      const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
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
          canvas,
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
     

      <section className="mt-12 rounded-2xl border bg-white p-8 shadow-sm">
        <h2 className="mb-5 text-3xl font-bold">
          Convert PDF to Images Online
        </h2>

        <p className="mb-5 leading-8 text-gray-700">
          Our PDF to Image Converter allows you to convert every page of a PDF
          document into high-quality PNG images in just a few seconds. The tool is
          completely free and works directly in your browser without installing any
          software.
        </p>

        <p className="mb-5 leading-8 text-gray-700">
          Whether you need images for presentations, websites, social media,
          printing, or document sharing, our converter preserves the original
          quality, fonts, graphics, and layout of every PDF page.
        </p>

        <p className="leading-8 text-gray-700">
          Simply upload your PDF, wait a few seconds while the pages are processed,
          and download each page as a separate PNG image.
        </p>
      </section>

     
      <section className="mt-12 rounded-2xl border bg-white p-8 shadow-sm">
        <h2 className="mb-6 text-3xl font-bold">
          How to Convert PDF to Images
        </h2>

        <div className="grid gap-5 md:grid-cols-2">

          <div className="rounded-xl border p-5">
            <h3 className="mb-2 font-semibold text-lg">
              Step 1
            </h3>

            <p className="text-gray-600">
              Select the PDF file from your device.
            </p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="mb-2 font-semibold text-lg">
              Step 2
            </h3>

            <p className="text-gray-600">
              Upload the document to start processing.
            </p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="mb-2 font-semibold text-lg">
              Step 3
            </h3>

            <p className="text-gray-600">
              Every PDF page will be converted into a PNG image.
            </p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="mb-2 font-semibold text-lg">
              Step 4
            </h3>

            <p className="text-gray-600">
              Download all converted images instantly.
            </p>
          </div>

        </div>
      </section>

    

      <section className="mt-12 rounded-2xl border bg-white p-8 shadow-sm">

        <h2 className="mb-6 text-3xl font-bold">
          Features
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-lg border p-4">
            ✅ High Resolution PNG Images
          </div>

          <div className="rounded-lg border p-4">
            ✅ Fast Conversion
          </div>

          <div className="rounded-lg border p-4">
            ✅ Original Layout Preserved
          </div>

          <div className="rounded-lg border p-4">
            ✅ Secure Processing
          </div>

          <div className="rounded-lg border p-4">
            ✅ No Watermark
          </div>

          <div className="rounded-lg border p-4">
            ✅ Browser Based
          </div>

          <div className="rounded-lg border p-4">
            ✅ Mobile Friendly
          </div>

          <div className="rounded-lg border p-4">
            ✅ Unlimited Usage
          </div>

          <div className="rounded-lg border p-4">
            ✅ Free Forever
          </div>

        </div>

      </section>

     

      <section className="mt-12 rounded-2xl border bg-white p-8 shadow-sm">

        <h2 className="mb-5 text-3xl font-bold">
          Why Use PDF to Image?
        </h2>

        <p className="mb-5 leading-8 text-gray-700">
          Converting PDF pages into images is useful when you want to share content on
          social media, include pages in presentations, upload graphics to websites,
          or print individual pages. Images are also easier to preview and edit with
          most graphic software.
        </p>

        <p className="mb-5 leading-8 text-gray-700">
          Our converter keeps each page clear and sharp while preserving text,
          illustrations, charts, and photographs. The generated PNG files are suitable
          for both digital viewing and printing.
        </p>

        <p className="leading-8 text-gray-700">
          Since everything runs inside your browser, there is no need to install any
          desktop applications. Upload your PDF, convert it, and download the images
          within seconds.
        </p>

      </section>

   

      <section className="mt-12 rounded-2xl bg-blue-50 p-8">

        <h2 className="mb-4 text-3xl font-bold">
          Safe & Secure
        </h2>

        <p className="leading-8 text-gray-700">
          Your privacy is important. Uploaded PDF files are processed securely and are
          not permanently stored. After conversion, files are automatically removed to
          help keep your information private.
        </p>

      </section>
    </div>
  );
}