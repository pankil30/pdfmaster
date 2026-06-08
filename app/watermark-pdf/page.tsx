"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import FileUpload from "@/components/FileUpload";
import Alert from "@/components/Alert";
import FileInfo from "@/components/FileInfo";
import { useEffect } from "react";

export default function WatermarkPdfPage() {
  const [file, setFile] = useState<File | null>(null);
  const [watermark, setWatermark] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [countdown, setCountdown] = useState<number | null>(null);

  const handleWatermark = async () => {
    try {
      setError("");
      setSuccess("");

      if (!file) {
        setError("Please select a PDF file.");
        return;
      }

      if (!watermark.trim()) {
        setError("Please enter watermark text.");
        return;
      }

      setLoading(true);

      const formData = new FormData();
      formData.append("file", file);
      formData.append("watermark", watermark);

      const res = await fetch("/api/watermark-pdf", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error();
      }

      const blob = await res.blob();

      const reader = new FileReader();

      reader.onloadend = () => {
        sessionStorage.setItem(
          "downloadPdf",
          reader.result as string
        );

        sessionStorage.setItem(
          "downloadName",
          `${file.name.replace(
            ".pdf",
            ""
          )}-watermarked.pdf`
        );

        setSuccess("Watermark added successfully!");
        setCountdown(5);
      };

      reader.readAsDataURL(blob);
    } catch {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (countdown === null) return;

    if (countdown === 0) {
      window.location.href = "/download";
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) =>
        prev !== null ? prev - 1 : null
      );
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);
  return (
    <ToolLayout
      title="Watermark PDF"
      description="Add text watermark to all PDF pages."
    >
      <div className="space-y-5">
        <FileUpload
          accept=".pdf"
          onChange={(files) => {
            setFile(files?.[0] || null);
            setError("");
            setSuccess("");
          }}
        />

        {file && <FileInfo file={file} />}

        {error && <Alert type="error" message={error} />}
        {success && <Alert type="success" message={success} />}

        <input
          type="text"
          placeholder="Enter watermark text"
          value={watermark}
          onChange={(e) => setWatermark(e.target.value)}
          className="w-full rounded-xl border p-3"
        />

        <button
          onClick={handleWatermark}
          disabled={loading || countdown !== null}
          className="rounded-xl bg-red-500 px-6 py-3 text-white hover:bg-red-600 disabled:opacity-50"
        >
          {loading
            ? "Processing..."
            : countdown !== null
              ? `Opening download page in ${countdown}s`
              : "Add Watermark"}
        </button>
      </div>
    </ToolLayout>
  );
}