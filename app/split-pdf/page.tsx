"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import FileUpload from "@/components/FileUpload";
import { Loader2 } from "lucide-react";


export default function SplitPdfPage() {
    const [file, setFile] = useState<File | null>(null);
    const [startPage, setStartPage] = useState("");
    const [endPage, setEndPage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSplit = async () => {
        try {
            setError("");

            if (!file) {
                setError("Please select a PDF file.");
                return;
            }

            if (!startPage || !endPage) {
                setError("Please enter page range.");
                return;
            }

            setLoading(true);

            const formData = new FormData();
            formData.append("file", file);
            formData.append("startPage", startPage);
            formData.append("endPage", endPage);

            const res = await fetch("/api/split-pdf", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) {
                throw new Error("Failed to split PDF");
            }

            const blob = await res.blob();
            const url = URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = url;
            a.download = "split.pdf";
            a.click();

            URL.revokeObjectURL(url);
            setSuccess("PDF split successfully!");
        } catch {
            // ❌ Error yaha
            setError("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <ToolLayout
            title="Split PDF"
            description="Extract specific pages from a PDF file."
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

                {file && (
                    <div className="rounded-xl border bg-gray-50 p-4">
                        <p>📄 {file.name}</p>
                        <p className="text-sm text-gray-500">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                    </div>
                )}

                {error && (
  <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
    ❌ {error}
  </div>
)}
{success && (
  <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-green-700">
    ✅ {success}
  </div>
)}

                <div className="grid gap-4 md:grid-cols-2">
                    <input
                        type="number"
                        placeholder="Start Page"
                        value={startPage}
                        onChange={(e) => setStartPage(e.target.value)}
                        className="rounded-xl border p-3"
                    />

                    <input
                        type="number"
                        placeholder="End Page"
                        value={endPage}
                        onChange={(e) => setEndPage(e.target.value)}
                        className="rounded-xl border p-3"
                    />
                </div>

                <button
                    onClick={handleSplit}
                    disabled={loading}
                    className="rounded-xl bg-red-500 px-6 py-3 text-white hover:bg-red-600 disabled:opacity-50"
                >
                   {loading ? (
  <span className="flex items-center gap-2">
    <Loader2 className="h-4 w-4 animate-spin" />
    Rotating...
  </span>
) : (
  "Rotate PDF"
)}
                </button>
            </div>
        </ToolLayout>
    );
}