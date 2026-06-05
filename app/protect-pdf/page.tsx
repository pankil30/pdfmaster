"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import FileUpload from "@/components/FileUpload";
import Alert from "@/components/Alert";
import FileInfo from "@/components/FileInfo";

export default function ProtectPdfPage() {
  const [file, setFile] = useState<File | null>(null);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleProtect = async () => {
    try {
      setError("");
      setSuccess("");

      if (!file) {
        setError("Please select a PDF file.");
        return;
      }

      if (!password.trim()) {
        setError("Enter password.");
        return;
      }

      setLoading(true);

      const formData = new FormData();
      formData.append("file", file);
      formData.append("password", password);

      const res = await fetch("/api/protect-pdf", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error();

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;

      const name = file.name.replace(".pdf", "");
      a.download = `${name}-protected.pdf`;

      a.click();

      URL.revokeObjectURL(url);

      setSuccess("PDF processed (protected mode)!");
    } catch {
      setError("Failed to protect PDF.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ToolLayout
      title="Protect PDF"
      description="Add password protection to your PDF file."
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
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl border p-3"
        />

        <button
          onClick={handleProtect}
          disabled={loading}
          className="rounded-xl bg-red-500 px-6 py-3 text-white hover:bg-red-600 disabled:opacity-50"
        >
          {loading ? "Processing..." : "Protect PDF"}
        </button>
      </div>
    </ToolLayout>
  );
}