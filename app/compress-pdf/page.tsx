"use client";

import { useEffect, useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import FileUpload from "@/components/FileUpload";
import Alert from "@/components/Alert";
import FileInfo from "@/components/FileInfo";

export default function CompressPdfPage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [countdown, setCountdown] = useState<number | null>(null);

  const handleCompress = async () => {
    try {
      setError("");

      if (!file) {
        setError("Please select a PDF file.");
        return;
      }

      setLoading(true);

      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/compress-pdf", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        // FIXED: Try to read the actual error message from the backend
        let errorMsg = "Failed to compress PDF.";
        try {
          const errData = await res.json();
          if (errData?.error) errorMsg = errData.error;
        } catch {}
        throw new Error(errorMsg);
      }

      const blob = await res.blob();

      const blobUrl = URL.createObjectURL(blob);
      const downloadName = `${file.name.replace(
        ".pdf",
        ""
      )}-compressed.pdf`;

      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = downloadName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // Release blob URL after download starts
      setTimeout(() => URL.revokeObjectURL(blobUrl), 60_000);

      setLoading(false);
      
      // FIXED: Start the 5-second countdown so the user gets redirected to /download!
      setCountdown(5); 
    } catch (err: any) {
      setError(err.message || "Failed to compress PDF.");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (countdown === null || countdown <= 0) return;

    const timer = setTimeout(() => {
      setCountdown((prev) => {
        if (prev === 1) {
        window.open("/download", "_blank");
          return 0;
        }

        return prev! - 1;
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <ToolLayout
      title="Compress PDF"
      description="Reduce PDF file size without losing quality."
    >
      <div className="space-y-5">
        <FileUpload
          accept=".pdf"
          onChange={(files) =>
            setFile(files?.[0] || null)
          }
        />

        {file && <FileInfo file={file} />}

        {error && (
          <Alert
            type="error"
            message={error}
          />
        )}

        <button
          onClick={handleCompress}
          disabled={loading || countdown !== null}
          className="rounded-xl bg-red-500 px-6 py-3 text-white disabled:opacity-50"
        >
          {countdown !== null
            ? `Opening download page in ${countdown}s`
            : loading
              ? "Compressing..."
              : "Compress PDF"}
        </button>
      </div>

<section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">
  <h2 className="mb-5 text-3xl font-bold">
    Compress PDF Online
  </h2>

  <p className="mb-5 leading-8 text-gray-700">
    Compress PDF files online to reduce file size while maintaining excellent
    document quality. Whether you're sharing files by email, uploading
    documents to websites, or saving storage space, our free PDF compressor
    makes it fast and easy.
  </p>

  <p className="mb-5 leading-8 text-gray-700">
    Upload your PDF, click the <strong>Compress PDF</strong> button, and let
    our tool optimize your document. The compression process keeps text,
    images, fonts, and formatting as close to the original as possible while
    reducing the overall file size.
  </p>

  <p className="leading-8 text-gray-700">
    The tool works directly in your browser and supports Windows, macOS,
    Linux, Android, and iPhone. No software installation or registration is
    required.
  </p>
</section>


<section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">

<h2 className="mb-6 text-3xl font-bold">
How to Compress a PDF
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
Click the Compress PDF button.
</p>
</div>

<div className="rounded-lg border p-5">
<h3 className="mb-2 text-lg font-semibold">
Step 3
</h3>

<p className="text-gray-600">
Wait while the file is optimized.
</p>
</div>

<div className="rounded-lg border p-5">
<h3 className="mb-2 text-lg font-semibold">
Step 4
</h3>

<p className="text-gray-600">
Download your compressed PDF.
</p>
</div>

</div>

</section>


<section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">

<h2 className="mb-6 text-3xl font-bold">
Features
</h2>

<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

<div className="rounded-lg border p-4">
✅ Reduce PDF File Size
</div>

<div className="rounded-lg border p-4">
✅ Preserve Text Quality
</div>

<div className="rounded-lg border p-4">
✅ Keep Images Clear
</div>

<div className="rounded-lg border p-4">
✅ Fast Compression
</div>

<div className="rounded-lg border p-4">
✅ Browser Based
</div>

<div className="rounded-lg border p-4">
✅ No Watermark
</div>

<div className="rounded-lg border p-4">
✅ Secure Processing
</div>

<div className="rounded-lg border p-4">
✅ Mobile Friendly
</div>

<div className="rounded-lg border p-4">
✅ Free to Use
</div>

</div>

</section>


<section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">

<h2 className="mb-5 text-3xl font-bold">
Why Compress PDF Files?
</h2>

<p className="mb-5 leading-8 text-gray-700">
Large PDF files can be difficult to email, upload, or share through messaging
platforms. Compressing your PDF reduces its size, making it easier to send,
store, and manage while maintaining readability and document quality.
</p>

<p className="mb-5 leading-8 text-gray-700">
Students, businesses, teachers, government offices, and professionals use PDF
compression to save storage space and meet file size limits on websites and
email services.
</p>

<p className="leading-8 text-gray-700">
Our tool automatically optimizes your document while preserving fonts,
graphics, tables, and page formatting, providing an excellent balance between
quality and file size.
</p>

</section>


<section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">

<h2 className="mb-5 text-3xl font-bold">
Common Uses
</h2>

<ul className="list-disc space-y-2 pl-6 leading-8 text-gray-700">
<li>Email PDF documents with attachment size limits.</li>
<li>Upload PDFs to websites with maximum file size restrictions.</li>
<li>Reduce storage space on your computer or cloud storage.</li>
<li>Share documents faster using messaging apps.</li>
<li>Optimize reports, invoices, contracts, resumes, and presentations.</li>
</ul>

</section>


<section className="mt-12 rounded-xl bg-blue-50 p-8">

<h2 className="mb-4 text-3xl font-bold">
Privacy & Security
</h2>

<p className="leading-8 text-gray-700">
Your privacy is important to us. Uploaded PDF files are processed securely
and automatically removed after processing. We do not permanently store your
documents, helping keep your personal and business information protected.
</p>

</section>


<section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">

<h2 className="mb-6 text-3xl font-bold">
Frequently Asked Questions
</h2>

<div className="space-y-6">

<div>
<h3 className="font-semibold text-lg">
Is this PDF compressor free?
</h3>

<p className="mt-2 text-gray-600">
Yes. You can compress PDF documents online without any cost.
</p>
</div>

<div>
<h3 className="font-semibold text-lg">
Will my PDF quality decrease?
</h3>

<p className="mt-2 text-gray-600">
Our compression process is designed to reduce file size while maintaining
good readability and preserving document formatting.
</p>
</div>

<div>
<h3 className="font-semibold text-lg">
Can I compress large PDF files?
</h3>

<p className="mt-2 text-gray-600">
Yes. Large PDF files can be compressed, subject to your site's upload limits.
</p>
</div>

<div>
<h3 className="font-semibold text-lg">
Are my files secure?
</h3>

<p className="mt-2 text-gray-600">
Yes. Files are processed securely and automatically removed after processing.
</p>
</div>

</div>

</section>
    </ToolLayout>
  );
}