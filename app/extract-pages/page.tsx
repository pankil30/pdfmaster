"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import FileUpload from "@/components/FileUpload";
import Alert from "@/components/Alert";
import FileInfo from "@/components/FileInfo";

export default function ExtractPagesPage() {
  const [file, setFile] = useState<File | null>(null);
  const [pages, setPages] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleExtract = async () => {
    try {
      setError("");
      setSuccess("");

      if (!file) {
        setError("Please select a PDF.");
        return;
      }

      if (!pages.trim()) {
        setError("Enter page numbers.");
        return;
      }

      setLoading(true);

      const formData = new FormData();

      formData.append("file", file);
      formData.append("pages", pages);

      const res = await fetch("/api/extract-pages", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error();
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");

      a.href = url;
      a.download = `${file.name.replace(
        ".pdf",
        ""
      )}-extracted.pdf`;

      a.click();

      URL.revokeObjectURL(url);

      setSuccess("Pages extracted successfully!");
    } catch {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ToolLayout
      title="Extract PDF Pages"
      description="Create a new PDF from selected pages."
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

        {error && (
          <Alert
            type="error"
            message={error}
          />
        )}

        {success && (
          <Alert
            type="success"
            message={success}
          />
        )}

        <input
          type="text"
          placeholder="1,3,5"
          value={pages}
          onChange={(e) =>
            setPages(e.target.value)
          }
          className="w-full rounded-xl border p-3"
        />

        <button
          onClick={handleExtract}
          disabled={loading}
          className="rounded-xl bg-red-500 px-6 py-3 text-white hover:bg-red-600"
        >
          {loading
            ? "Processing..."
            : "Extract Pages"}
        </button>
      </div>
    </ToolLayout>
  );
}