"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import FileUpload from "@/components/FileUpload";
import { Loader2 } from "lucide-react";

export default function ImageToPdfPage() {
    const [files, setFiles] = useState<FileList | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleConvert = async () => {
        try {
            setError("");

            if (!files || files.length === 0) {
                setError("Please select images.");
                return;
            }

            setLoading(true);

            const formData = new FormData();

            Array.from(files).forEach((file) => {
                formData.append("images", file);
            });

            const res = await fetch("/api/image-to-pdf", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) {
                throw new Error("Failed to convert");
            }

            const blob = await res.blob();

            const url = URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = url;
            a.download = "images.pdf";
            a.click();

            URL.revokeObjectURL(url);
            setSuccess("Images converted to PDF successfully!");
        } catch {
            // ❌ Error yaha
            setError("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <ToolLayout
            title="Image to PDF"
            description="Convert JPG and PNG images into PDF."
        >
            <div className="space-y-5">
                <FileUpload
                    accept="image/*"
                    onChange={(files) => {
                        setFiles(files);
                        setError("");
                        setSuccess("");
                    }}
                />

                {files && (
                    <div className="rounded-xl border bg-gray-50 p-4">
                        <p className="mb-2 font-semibold">
                            {files.length} file(s) selected
                        </p>

                        {Array.from(files).map((file) => (
                            <div key={file.name}>
                                📄 {file.name}
                            </div>
                        ))}
                    </div>
                )}

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
                    onClick={handleConvert}
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