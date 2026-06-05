"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import FileUpload from "@/components/FileUpload";
import { Loader2 } from "lucide-react";

export default function MergePdfPage() {
    const [files, setFiles] = useState<FileList | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const handleMerge = async () => {
        try {
            setError("");

            if (!files || files.length < 2) {
                setError("Please select at least 2 PDF files.");
                return;
            }

            setLoading(true);

            const formData = new FormData();

            Array.from(files).forEach((file) => {
                formData.append("files", file);
            });

            const res = await fetch("/api/merge-pdf", {
                method: "POST",
                body: formData,
            });


            
            if (!res.ok) {
                throw new Error("Failed to merge PDF");
            }

            const blob = await res.blob();

            const url = URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = url;
            a.download = "merged.pdf";
            a.click();

            URL.revokeObjectURL(url);
            setSuccess("PDF merged successfully!");
        } catch {
            // ❌ Error yaha
            setError("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <ToolLayout
            title="Merge PDF"
            description="Combine multiple PDF files into one document."
        >
            <div className="space-y-5">
                <FileUpload
                    accept=".pdf"
                    onChange={(files) => {
                        setFiles(files);
                        setError("");
                        setSuccess("");
                    }}
                />
                {success && (
                    <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-green-700">
                        ✅ {success}
                    </div>
                )}

                {error && (
                    <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
                        ❌ {error}
                    </div>
                )}

                <button
                    onClick={handleMerge}
                    disabled={loading}
                    className="rounded-xl bg-red-500 px-6 py-3 font-medium text-white hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
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