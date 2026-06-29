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
            {/* ================= About Rotate PDF ================= */}

<section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">
  <h2 className="mb-5 text-3xl font-bold">
    Rotate PDF Pages Online
  </h2>

  <p className="mb-5 leading-8 text-gray-700">
    Rotate PDF pages online quickly and securely without installing any
    software. Whether your scanned document appears sideways or upside down,
    our Rotate PDF tool lets you rotate every page by 90°, 180°, or 270° in
    just a few clicks.
  </p>

  <p className="mb-5 leading-8 text-gray-700">
    Upload your PDF, choose the desired rotation angle, and download the
    corrected document instantly. The original text, images, formatting, and
    layout remain unchanged after rotation.
  </p>

  <p className="leading-8 text-gray-700">
    The tool works directly in your browser on Windows, macOS, Linux,
    Android, and iPhone. No registration or software installation is
    required.
  </p>
</section>

{/* ================= How It Works ================= */}

<section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">
  <h2 className="mb-6 text-3xl font-bold">
    How to Rotate a PDF
  </h2>

  <div className="grid gap-5 md:grid-cols-2">

    <div className="rounded-lg border p-5">
      <h3 className="mb-2 text-lg font-semibold">
        Step 1
      </h3>

      <p className="text-gray-600">
        Upload your PDF document.
      </p>
    </div>

    <div className="rounded-lg border p-5">
      <h3 className="mb-2 text-lg font-semibold">
        Step 2
      </h3>

      <p className="text-gray-600">
        Select a rotation angle of 90°, 180°, or 270°.
      </p>
    </div>

    <div className="rounded-lg border p-5">
      <h3 className="mb-2 text-lg font-semibold">
        Step 3
      </h3>

      <p className="text-gray-600">
        Click the Rotate PDF button.
      </p>
    </div>

    <div className="rounded-lg border p-5">
      <h3 className="mb-2 text-lg font-semibold">
        Step 4
      </h3>

      <p className="text-gray-600">
        Download your rotated PDF instantly.
      </p>
    </div>

  </div>
</section>

{/* ================= Features ================= */}

<section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">

<h2 className="mb-6 text-3xl font-bold">
Features
</h2>

<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

<div className="rounded-lg border p-4">
✅ Rotate by 90°
</div>

<div className="rounded-lg border p-4">
✅ Rotate by 180°
</div>

<div className="rounded-lg border p-4">
✅ Rotate by 270°
</div>

<div className="rounded-lg border p-4">
✅ Preserve PDF Quality
</div>

<div className="rounded-lg border p-4">
✅ Fast Processing
</div>

<div className="rounded-lg border p-4">
✅ Browser Based
</div>

<div className="rounded-lg border p-4">
✅ No Watermark
</div>

<div className="rounded-lg border p-4">
✅ Secure File Processing
</div>

<div className="rounded-lg border p-4">
✅ Free Forever
</div>

</div>

</section>

{/* ================= Benefits ================= */}

<section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">

<h2 className="mb-5 text-3xl font-bold">
Why Use Our Rotate PDF Tool?
</h2>

<p className="mb-5 leading-8 text-gray-700">
Scanned documents often appear sideways or upside down because of incorrect
scanner settings or camera orientation. Our Rotate PDF tool fixes those
documents in seconds while preserving their original quality.
</p>

<p className="mb-5 leading-8 text-gray-700">
Students, teachers, businesses, offices, and professionals can easily rotate
PDF reports, contracts, invoices, books, presentations, manuals, and other
documents before sharing or printing them.
</p>

<p className="leading-8 text-gray-700">
Since everything runs in your browser, there's no need to install desktop
software. Upload your PDF, choose the rotation angle, and download the
corrected document within seconds.
</p>

</section>

{/* ================= Security ================= */}

<section className="mt-12 rounded-xl bg-blue-50 p-8">

<h2 className="mb-4 text-3xl font-bold">
Privacy & Security
</h2>

<p className="leading-8 text-gray-700">
Your files are processed securely. Uploaded PDF documents are automatically
removed after processing, helping protect your privacy and confidential
information.
</p>

</section>

{/* ================= FAQ ================= */}

<section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">

<h2 className="mb-6 text-3xl font-bold">
Frequently Asked Questions
</h2>

<div className="space-y-6">

<div>
<h3 className="font-semibold text-lg">
Is this Rotate PDF tool free?
</h3>

<p className="mt-2 text-gray-600">
Yes. You can rotate PDF documents online without paying any fees.
</p>
</div>

<div>
<h3 className="font-semibold text-lg">
Will the PDF quality change?
</h3>

<p className="mt-2 text-gray-600">
No. The document quality, fonts, and layout remain unchanged after rotation.
</p>
</div>

<div>
<h3 className="font-semibold text-lg">
Can I rotate scanned PDFs?
</h3>

<p className="mt-2 text-gray-600">
Yes. This tool works perfectly with scanned documents.
</p>
</div>

<div>
<h3 className="font-semibold text-lg">
Is my PDF secure?
</h3>

<p className="mt-2 text-gray-600">
Yes. Files are processed securely and removed after conversion.
</p>
</div>

</div>

</section>
        </ToolLayout>
    );
}