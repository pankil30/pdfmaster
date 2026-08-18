"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import FileUpload from "@/components/FileUpload";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";

export default function ImageToPdfPage() {
    const [files, setFiles] = useState<FileList | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [countdown, setCountdown] = useState<number | null>(null);

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
                // FIXED: Attempt to read the backend's specific error message
                let errorMsg = "Failed to convert";
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
                    "images.pdf"
                );

                setSuccess("Images converted to PDF successfully!");
                setLoading(false);
                setCountdown(5);
            };

            reader.readAsDataURL(blob);

            return;
        } catch (err: any) {
            // FIXED: Read actual error message and stop loading
            setError(err.message || "Something went wrong.");
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
            setCountdown((prev) => (prev ?? 1) - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [countdown]);
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
                    disabled={loading || countdown !== null}
                    className="rounded-xl bg-red-500 px-6 py-3 text-white hover:bg-red-600 disabled:opacity-50"
                >
                    {countdown !== null ? (
                        `Opening download page in ${countdown}s`
                    ) : loading ? (
                        <span className="flex items-center gap-2">
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Processing...
                        </span>
                    ) : (
                        "Convert to PDF"
                    )}
                </button>

               

<section className="mt-12 rounded-xl border bg-white p-6 shadow-sm">
  <h2 className="mb-4 text-3xl font-bold">
    Free Image to PDF Converter Online
  </h2>

  <p className="mb-4 text-gray-700 leading-8">
    Convert JPG, PNG, WEBP, BMP, and GIF images into a single PDF document
    online for free. Our Image to PDF Converter is fast, secure, and works
    directly in your browser without installing any software.
  </p>

  <p className="mb-4 text-gray-700 leading-8">
    Whether you're creating assignments, invoices, reports, scanned
    documents, or photo albums, our tool lets you merge multiple images into
    one professional PDF in just a few clicks.
  </p>

  <p className="text-gray-700 leading-8">
    All uploaded files are processed securely. We do not permanently store
    your files, making this tool ideal for personal, educational, and
    business use.
  </p>
</section>



<section className="mt-12 rounded-xl border bg-white p-6 shadow-sm">
  <h2 className="mb-6 text-3xl font-bold">
    How to Convert Images to PDF
  </h2>

  <div className="grid gap-5 md:grid-cols-2">

    <div className="rounded-lg border p-5">
      <h3 className="font-semibold text-lg mb-2">
        Step 1
      </h3>

      <p className="text-gray-600">
        Upload one or multiple JPG, PNG, WEBP, GIF, or BMP images.
      </p>
    </div>

    <div className="rounded-lg border p-5">
      <h3 className="font-semibold text-lg mb-2">
        Step 2
      </h3>

      <p className="text-gray-600">
        Select the order by choosing files in the sequence you want them to appear.
      </p>
    </div>

    <div className="rounded-lg border p-5">
      <h3 className="font-semibold text-lg mb-2">
        Step 3
      </h3>

      <p className="text-gray-600">
        Click the Convert button to generate your PDF.
      </p>
    </div>

    <div className="rounded-lg border p-5">
      <h3 className="font-semibold text-lg mb-2">
        Step 4
      </h3>

      <p className="text-gray-600">
        Download your newly created PDF instantly.
      </p>
    </div>

  </div>
</section>



<section className="mt-12 rounded-xl border bg-white p-6 shadow-sm">

<h2 className="mb-6 text-3xl font-bold">
Features
</h2>

<div className="grid gap-4 md:grid-cols-2">

<div className="rounded-lg border p-4">
✅ Supports JPG
</div>

<div className="rounded-lg border p-4">
✅ Supports PNG
</div>

<div className="rounded-lg border p-4">
✅ Supports WEBP
</div>

<div className="rounded-lg border p-4">
✅ Supports BMP
</div>

<div className="rounded-lg border p-4">
✅ Supports GIF
</div>

<div className="rounded-lg border p-4">
✅ High Quality PDF
</div>

<div className="rounded-lg border p-4">
✅ Fast Conversion
</div>

<div className="rounded-lg border p-4">
✅ Mobile Friendly
</div>

<div className="rounded-lg border p-4">
✅ No Watermark
</div>

<div className="rounded-lg border p-4">
✅ Unlimited Usage
</div>

<div className="rounded-lg border p-4">
✅ Secure Processing
</div>

<div className="rounded-lg border p-4">
✅ Completely Free
</div>

</div>

</section>



<section className="mt-12 rounded-xl border bg-white p-6 shadow-sm">

<h2 className="mb-4 text-3xl font-bold">
Why Use Our Image to PDF Tool?
</h2>

<p className="leading-8 text-gray-700 mb-4">
Creating PDF files from images has never been easier. Whether you need to
combine scanned documents, create printable reports, organize receipts, or
share multiple photos as a single document, this tool helps you complete the
task in seconds.
</p>

<p className="leading-8 text-gray-700 mb-4">
Unlike many online converters, our tool preserves image quality while
producing compact PDF files that are easy to share by email or messaging
apps.
</p>

<p className="leading-8 text-gray-700">
Our converter works directly from your browser, meaning there's no software
installation required. It supports desktops, tablets, and smartphones for a
smooth experience across devices.
</p>

</section>
            </div>
        </ToolLayout>
    );
}