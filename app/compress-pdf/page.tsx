"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import FileUpload from "@/components/FileUpload";
import Alert from "@/components/Alert";
import FileInfo from "@/components/FileInfo";

export default function CompressPdfPage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleCompress = async () => {
    try {
      setError("");
      setSuccess("");

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

      if (!res.ok) throw new Error();

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;

      const name = file.name.replace(".pdf", "");
      a.download = `${name}-compressed.pdf`;

      a.click();

      URL.revokeObjectURL(url);

      setSuccess("PDF compressed successfully!");
    } catch {
      setError("Failed to compress PDF.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ToolLayout
      title="Compress PDF"
      description="Reduce PDF file size without losing quality."
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

        <button
          onClick={handleCompress}
          disabled={loading}
          className="rounded-xl bg-red-500 px-6 py-3 text-white hover:bg-red-600 disabled:opacity-50"
        >
          {loading ? "Compressing..." : "Compress PDF"}
        </button>
      </div>
    </ToolLayout>
  );
}