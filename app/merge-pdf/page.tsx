"use client";

import { useState, useEffect } from "react";
import ToolLayout from "@/components/ToolLayout";
import FileUpload from "@/components/FileUpload";
import { Loader2 } from "lucide-react";


export default function MergePdfPage() {
    const [files, setFiles] = useState<FileList | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [countdown, setCountdown] = useState<number | null>(null);
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
                let errorMsg = "Failed to merge PDF.";
                try {
                    const errData = await res.json();
                    if (errData?.error) errorMsg = errData.error;
                } catch {}
                throw new Error(errorMsg);
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
                    "merged.pdf"
                );

                setSuccess("PDF merged successfully!");
                setLoading(false);
                setCountdown(5);
            };

            reader.readAsDataURL(blob);

            return;
        } catch {
            setError("Something went wrong.");
            setLoading(false);
        }
    };
    useEffect(() => {
        if (countdown === null) return;

            if (countdown === 0) {
            window.open("/download", "_blank"); 
            return;
        }

        const timer = setTimeout(() => {
            setCountdown((prev) => (prev ?? 1) - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [countdown]);
    return (
        <ToolLayout
            title="Merge PDF"
            description="Combine multiple PDF files into one document."
        >
            <div className="space-y-5">
                              {files && files.length > 0 && (
                    <div className="rounded-xl border bg-gray-50 p-4">
                        <p className="mb-2 font-semibold text-gray-800">
                            {files.length} file(s) selected:
                        </p>
                        <div className="flex flex-col gap-1 max-h-40 overflow-y-auto pr-2">
                            {Array.from(files).map((file, index) => (
                                <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className="text-red-500">📄</span>
                                    {file.name}
                                </div>
                            ))}
                        </div>
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
                    onClick={handleMerge}
                    disabled={loading || countdown !== null}
                    className="rounded-xl bg-red-500 px-6 py-3 font-medium text-white hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {countdown !== null ? (
                        `Opening download page in ${countdown}s`
                    ) : loading ? (
                        <span className="flex items-center gap-2">
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Processing...
                        </span>
                    ) : (
                        "Merge PDF"
                    )}
                </button>

            </div>
    

            <section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">
                <h2 className="mb-5 text-3xl font-bold text-gray-900">
                    Merge PDF Files Online for Free
                </h2>

                <p className="mb-5 leading-8 text-gray-700">
                    Our Merge PDF tool lets you combine multiple PDF documents into a single
                    PDF file in just a few clicks. Whether you need to merge invoices,
                    reports, contracts, scanned documents, study notes, or presentations,
                    this tool provides a quick and reliable solution without installing any
                    software.
                </p>

                <p className="mb-5 leading-8 text-gray-700">
                    Simply upload two or more PDF files, click the Merge PDF button, and
                    download the combined document. The original formatting, fonts, images,
                    and page quality are preserved throughout the process.
                </p>

                <p className="leading-8 text-gray-700">
                    Our online PDF merger works on Windows, macOS, Linux, Android, and iPhone
                    using any modern web browser. There is no registration required, no
                    watermark added, and the service is completely free to use.
                </p>
            </section>

         

            <section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">
                <h2 className="mb-6 text-3xl font-bold">
                    How to Merge PDF Files
                </h2>

                <div className="grid gap-5 md:grid-cols-2">

                    <div className="rounded-lg border p-5">
                        <h3 className="mb-2 text-lg font-semibold">
                            Step 1
                        </h3>

                        <p className="text-gray-600">
                            Select two or more PDF files from your computer or mobile device.
                        </p>
                    </div>

                    <div className="rounded-lg border p-5">
                        <h3 className="mb-2 text-lg font-semibold">
                            Step 2
                        </h3>

                        <p className="text-gray-600">
                            Upload the files to the PDF merger tool.
                        </p>
                    </div>

                    <div className="rounded-lg border p-5">
                        <h3 className="mb-2 text-lg font-semibold">
                            Step 3
                        </h3>

                        <p className="text-gray-600">
                            Click the Merge PDF button to combine all selected documents.
                        </p>
                    </div>

                    <div className="rounded-lg border p-5">
                        <h3 className="mb-2 text-lg font-semibold">
                            Step 4
                        </h3>

                        <p className="text-gray-600">
                            Download your merged PDF instantly.
                        </p>
                    </div>

                </div>
            </section>

          

            <section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">

                <h2 className="mb-6 text-3xl font-bold">
                    Features
                </h2>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                    <div className="rounded-lg border p-4">✅ Merge Unlimited PDF Files</div>

                    <div className="rounded-lg border p-4">✅ Preserve Original Quality</div>

                    <div className="rounded-lg border p-4">✅ Fast Processing</div>

                    <div className="rounded-lg border p-4">✅ No Watermark</div>

                    <div className="rounded-lg border p-4">✅ Secure File Processing</div>

                    <div className="rounded-lg border p-4">✅ Works on Mobile</div>

                    <div className="rounded-lg border p-4">✅ Supports Large PDF Files</div>

                    <div className="rounded-lg border p-4">✅ Browser Based</div>

                    <div className="rounded-lg border p-4">✅ Free Forever</div>

                </div>

            </section>



            <section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">

                <h2 className="mb-5 text-3xl font-bold">
                    Why Use Our Merge PDF Tool?
                </h2>

                <p className="mb-5 leading-8 text-gray-700">
                    Combining PDF files makes document management much easier. Instead of sending
                    multiple files separately, you can organize everything into one professional
                    PDF document. This is useful for students submitting assignments, businesses
                    sharing reports, legal documents, invoices, contracts, or personal records.
                </p>

                <p className="mb-5 leading-8 text-gray-700">
                    Our Merge PDF tool keeps your files in their original quality while combining
                    them into a single downloadable document. Fonts, images, layouts, and page
                    sizes remain unchanged after merging.
                </p>

                <p className="leading-8 text-gray-700">
                    The tool works entirely online, so you don't need to install desktop
                    software. Simply upload your PDF files, merge them in seconds, and download
                    the final document whenever you need it.
                </p>

            </section>

      

            <section className="mt-12 rounded-xl border bg-blue-50 p-8">

                <h2 className="mb-4 text-3xl font-bold">
                    Your Privacy Matters
                </h2>

                <p className="leading-8 text-gray-700">
                    We value your privacy. Uploaded PDF files are processed securely and are not
                    shared with anyone. Files are automatically removed from the server after
                    processing to help protect your personal information and confidential
                    documents.
                </p>

            </section>
        </ToolLayout>
    );
}