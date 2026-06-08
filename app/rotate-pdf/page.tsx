"use client";

import { useEffect, useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import FileUpload from "@/components/FileUpload";
import { Loader2 } from "lucide-react";

export default function RotatePdfPage() {
    const [file, setFile] = useState<File | null>(null);
    const [rotation, setRotation] = useState("90");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const [countdown, setCountdown] = useState<number | null>(null);

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
                    )}-rotated.pdf`
                );

                setCountdown(5);
                setSuccess("PDF rotated successfully!");
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
                {countdown !== null && countdown > 0 && (
                    <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-center">
                        <p className="font-semibold text-green-700">
                            PDF Ready
                        </p>

                        <p className="mt-2 text-3xl font-bold text-green-700">
                            {countdown}s
                        </p>

                        <p className="text-sm text-gray-600">
                            Opening download page...
                        </p>
                    </div>
                )}
                <button
                    onClick={handleRotate}
                    disabled={loading || countdown !== null}
                    className="rounded-xl bg-red-500 px-6 py-3 text-white hover:bg-red-600 disabled:opacity-50"
                >
                    {loading
                        ? "Rotating..."
                        : countdown !== null
                            ? `Opening download page in ${countdown}s`
                            : "Rotate PDF"}
                </button>
            </div>
        </ToolLayout>
    );
}