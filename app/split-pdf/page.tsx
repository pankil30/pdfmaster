"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import FileUpload from "@/components/FileUpload";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";


export default function SplitPdfPage() {
    const [file, setFile] = useState<File | null>(null);
    const [startPage, setStartPage] = useState("");
    const [endPage, setEndPage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [countdown, setCountdown] = useState<number | null>(null);

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
    )}-split.pdf`
  );

  setSuccess("PDF split successfully!");
  setCountdown(5);
};

reader.readAsDataURL(blob)
        } catch {
            // ❌ Error yaha
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
  disabled={loading || countdown !== null}
  className="rounded-xl bg-red-500 px-6 py-3 text-white hover:bg-red-600 disabled:opacity-50"
>
  {loading ? (
    <span className="flex items-center gap-2">
      <Loader2 className="h-4 w-4 animate-spin" />
      Splitting...
    </span>
  ) : countdown !== null ? (
    `Opening download page in ${countdown}s`
  ) : (
    "Split PDF"
  )}
</button>
            </div>
            {/* ================= About Split PDF ================= */}

<section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">
  <h2 className="mb-5 text-3xl font-bold">
    Split PDF Files Online
  </h2>

  <p className="mb-5 leading-8 text-gray-700">
    Split large PDF documents into smaller files in seconds. Whether you need
    to extract a few pages from a report, remove unnecessary pages from a
    document, or create separate PDF files for sharing, our online Split PDF
    tool makes the process simple and fast.
  </p>

  <p className="mb-5 leading-8 text-gray-700">
    Upload your PDF, enter the page range you want to extract, and click the
    Split PDF button. Your new PDF will be generated instantly while keeping
    the original formatting, images, fonts, and layout intact.
  </p>

  <p className="leading-8 text-gray-700">
    Our tool works directly in your browser and supports Windows, macOS,
    Linux, Android, and iPhone devices without requiring any software
    installation.
  </p>
</section>

{/* ================= How It Works ================= */}

<section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">
  <h2 className="mb-6 text-3xl font-bold">
    How to Split a PDF
  </h2>

  <div className="grid gap-5 md:grid-cols-2">

    <div className="rounded-lg border p-5">
      <h3 className="font-semibold text-lg mb-2">
        Step 1
      </h3>
      <p className="text-gray-600">
        Upload your PDF document.
      </p>
    </div>

    <div className="rounded-lg border p-5">
      <h3 className="font-semibold text-lg mb-2">
        Step 2
      </h3>
      <p className="text-gray-600">
        Enter the starting page number.
      </p>
    </div>

    <div className="rounded-lg border p-5">
      <h3 className="font-semibold text-lg mb-2">
        Step 3
      </h3>
      <p className="text-gray-600">
        Enter the ending page number.
      </p>
    </div>

    <div className="rounded-lg border p-5">
      <h3 className="font-semibold text-lg mb-2">
        Step 4
      </h3>
      <p className="text-gray-600">
        Click Split PDF and download your extracted pages.
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
✅ Extract Specific Pages
</div>

<div className="rounded-lg border p-4">
✅ Preserve PDF Quality
</div>

<div className="rounded-lg border p-4">
✅ Fast Processing
</div>

<div className="rounded-lg border p-4">
✅ Secure Upload
</div>

<div className="rounded-lg border p-4">
✅ No Watermark
</div>

<div className="rounded-lg border p-4">
✅ Mobile Friendly
</div>

<div className="rounded-lg border p-4">
✅ Unlimited Usage
</div>

<div className="rounded-lg border p-4">
✅ Browser Based
</div>

<div className="rounded-lg border p-4">
✅ Completely Free
</div>

</div>

</section>

{/* ================= Benefits ================= */}

<section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">

<h2 className="mb-5 text-3xl font-bold">
Why Use Our Split PDF Tool?
</h2>

<p className="mb-5 leading-8 text-gray-700">
Many PDF documents contain hundreds of pages, but sometimes you only need a
small section. Our Split PDF tool allows you to extract exactly the pages you
need without editing the original file.
</p>

<p className="mb-5 leading-8 text-gray-700">
This is useful for students, teachers, office workers, legal professionals,
and businesses that frequently share reports, invoices, contracts, manuals,
and presentations.
</p>

<p className="leading-8 text-gray-700">
Your extracted PDF keeps the same layout, fonts, images, and formatting as
the original document, ensuring professional-quality results every time.
</p>

</section>

{/* ================= Security ================= */}

<section className="mt-12 rounded-xl border bg-blue-50 p-8">

<h2 className="mb-4 text-3xl font-bold">
Secure PDF Processing
</h2>

<p className="leading-8 text-gray-700">
Your privacy is important to us. Uploaded files are processed securely and
deleted automatically after processing. We never permanently store your PDF
documents, helping protect your personal and business information.
</p>

</section>
        </ToolLayout>
    );
}