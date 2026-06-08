"use client";

import { useEffect, useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import FileUpload from "@/components/FileUpload";
import Alert from "@/components/Alert";
import FileInfo from "@/components/FileInfo";

export default function CompressPdfPage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [countdown, setCountdown] = useState<number | null>(null);

  const handleCompress = async () => {
    try {
      setError("");

      if (!file) {
        setError("Please select a PDF file.");
        return;
      }

      setLoading(true);

      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/compress-pdf", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error();
      }

      const blob = await res.blob();

      const blobUrl = URL.createObjectURL(blob);
      const downloadName = `${file.name.replace(
        ".pdf",
        ""
      )}-compressed.pdf`;

      // Trigger download immediately to avoid relying on sessionStorage/blob URLs
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = downloadName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // Release blob URL after download starts
      setTimeout(() => URL.revokeObjectURL(blobUrl), 60_000);

      setLoading(false);
      setCountdown(null);
    } catch {
      setError("Failed to compress PDF.");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (countdown === null || countdown <= 0) return;

    const timer = setTimeout(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          window.location.href = "/download";
          return 0;
        }

        return prev! - 1;
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <ToolLayout
      title="Compress PDF"
      description="Reduce PDF file size without losing quality."
    >
      <div className="space-y-5">
        <FileUpload
          accept=".pdf"
          onChange={(files) =>
            setFile(files?.[0] || null)
          }
        />

        {file && <FileInfo file={file} />}

        {error && (
          <Alert
            type="error"
            message={error}
          />
        )}

        <button
          onClick={handleCompress}
          disabled={loading || countdown !== null}
          className="rounded-xl bg-red-500 px-6 py-3 text-white disabled:opacity-50"
        >
          {countdown !== null
            ? `Opening download page in ${countdown}s`
            : loading
              ? "Compressing..."
              : "Compress PDF"}
        </button>
      </div>
    </ToolLayout>
  );
}