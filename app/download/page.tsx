"use client";

import { useEffect, useState } from "react";

export default function DownloadPage() {
  const [countdown, setCountdown] =
    useState(5);

  const [pdfData, setPdfData] =
    useState("");

  const [fileName, setFileName] =
    useState("output.pdf");

  useEffect(() => {
    return () => {
      if (pdfData.startsWith("blob:")) {
        URL.revokeObjectURL(pdfData);
      }
    };
  }, [pdfData]);

  useEffect(() => {
    const pdf = sessionStorage.getItem("downloadPdf");
    const name = sessionStorage.getItem("downloadName");

    Promise.resolve().then(() => {
      if (pdf) setPdfData(pdf);
      if (name) setFileName(name);
    });
  }, []);

  useEffect(() => {
    if (countdown <= 0) return;

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  const handleDownload = () => {
    if (!pdfData) {
      alert("PDF not found.");
      return;
    }

    const a =
      document.createElement("a");

    a.href = pdfData;
    a.download = fileName;

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="rounded-3xl border bg-white p-8 shadow-sm">
        <h1 className="text-center text-3xl font-bold">
          Your PDF is Ready
        </h1>

        <p className="mt-3 text-center text-gray-600">
          Choose your download option
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border-2 border-yellow-400 p-6">
            <h2 className="text-2xl font-bold">
              ⚡ Premium
            </h2>

            <p className="mt-3 text-gray-600">
              Instant download
            </p>

            <button
              onClick={handleDownload}
              className="mt-6 w-full rounded-xl bg-yellow-500 py-3 text-white"
            >
              Download Now
            </button>
          </div>

          <div className="rounded-2xl border p-6">
            <h2 className="text-2xl font-bold">
              🆓 Free
            </h2>

            <p className="mt-3 text-gray-600">
              Wait 5 seconds before
              download
            </p>

            <button
              onClick={handleDownload}
              disabled={countdown > 0}
              className="mt-6 w-full rounded-xl bg-red-500 py-3 text-white disabled:opacity-50"
            >
              {countdown > 0
                ? `Download in ${countdown}s`
                : "Download PDF"}
            </button>
          </div>
        </div>

        <div className="mt-8 rounded-xl border p-6 text-center">
          Ad Space
        </div>
      </div>
    </div>
  );
}