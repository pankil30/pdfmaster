"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import FileUpload from "@/components/FileUpload";
import { Loader2 } from "lucide-react";

export default function RotatePdfPage() {
    const [file, setFile] = useState<File | null>(null);
    const [rotation, setRotation] = useState("90");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleRotate = async () => {
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
            formData.append("rotation", rotation);

            const res = await fetch("/api/rotate-pdf", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) {
                throw new Error("Failed to rotate PDF");
            }

            const blob = await res.blob();
            const url = URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = url;
            a.download = "rotated.pdf";
            a.click();

            URL.revokeObjectURL(url);

            // ✅ Success yaha aayega
            setSuccess("PDF rotated successfully!");
        } catch {
            // ❌ Error yaha
            setError("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <ToolLayout
            title="Rotate PDF"
            description="Rotate all pages in your PDF."
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
                <select
                    value={rotation}
                    onChange={(e) => setRotation(e.target.value)}
                    className="w-full rounded-xl border p-3"
                >
                    <option value="90">90°</option>
                    <option value="180">180°</option>
                    <option value="270">270°</option>
                </select>

                <button
                    onClick={handleRotate}
                    disabled={loading}
                    className="rounded-xl bg-red-500 px-6 py-3 text-white hover:bg-red-600 disabled:opacity-50"
                >
                        {loading ? "Rotating..." : "Rotate PDF"}
                </button>
            </div>
        </ToolLayout>
    );
}