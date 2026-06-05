"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import FileUpload from "@/components/FileUpload";
import Alert from "@/components/Alert";
import FileInfo from "@/components/FileInfo";

export default function RemovePagesPage() {
  const [file, setFile] = useState<File | null>(null);
  const [pages, setPages] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRemove = async () => {
    try {
      setError("");
      setSuccess("");

      if (!file) {
        setError("Please select a PDF file.");
        return;
      }

      if (!pages.trim()) {
        setError("Enter pages to remove. Example: 2,5,7");
        return;
      }

      setLoading(true);

      const formData = new FormData();
      formData.append("file", file);
      formData.append("pages", pages);

      const res = await fetch("/api/remove-pages", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error();

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "pages-removed.pdf";
      a.click();

      URL.revokeObjectURL(url);

      setSuccess("Pages removed successfully!");
    } catch {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ToolLayout
      title="Remove PDF Pages"
      description="Remove unwanted pages from your PDF."
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
          placeholder="Pages to remove (e.g. 2,5,7)"
          value={pages}
          onChange={(e) => setPages(e.target.value)}
          className="w-full rounded-xl border p-3"
        />

        <button
          onClick={handleRemove}
          disabled={loading}
          className="rounded-xl bg-red-500 px-6 py-3 text-white hover:bg-red-600 disabled:opacity-50"
        >
          {loading ? "Processing..." : "Remove Pages"}
        </button>
      </div>
    </ToolLayout>
  );
}