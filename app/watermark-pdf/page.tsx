"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import FileUpload from "@/components/FileUpload";
import Alert from "@/components/Alert";
import FileInfo from "@/components/FileInfo";
import { useEffect } from "react";

export default function WatermarkPdfPage() {
  const [file, setFile] = useState<File | null>(null);
  const [watermark, setWatermark] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [countdown, setCountdown] = useState<number | null>(null);

  const handleWatermark = async () => {
    try {
      setError("");
      setSuccess("");

      if (!file) {
        setError("Please select a PDF file.");
        return;
      }

      if (!watermark.trim()) {
        setError("Please enter watermark text.");
        return;
      }

      setLoading(true);

      const formData = new FormData();
      formData.append("file", file);
      formData.append("watermark", watermark);

      const res = await fetch("/api/watermark-pdf", {
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
          )}-watermarked.pdf`
        );

        setSuccess("Watermark added successfully!");
        setCountdown(5);
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
      title="Watermark PDF"
      description="Add text watermark to all PDF pages."
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

        {file && <FileInfo file={file} />}

        {error && <Alert type="error" message={error} />}
        {success && <Alert type="success" message={success} />}

        <input
          type="text"
          placeholder="Enter watermark text"
          value={watermark}
          onChange={(e) => setWatermark(e.target.value)}
          className="w-full rounded-xl border p-3"
        />

        <button
          onClick={handleWatermark}
          disabled={loading || countdown !== null}
          className="rounded-xl bg-red-500 px-6 py-3 text-white hover:bg-red-600 disabled:opacity-50"
        >
          {loading
            ? "Processing..."
            : countdown !== null
              ? `Opening download page in ${countdown}s`
              : "Add Watermark"}
        </button>
      </div>
      {/* ================= About Watermark PDF ================= */}

<section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">
  <h2 className="mb-5 text-3xl font-bold">
    Add Watermark to PDF Online
  </h2>

  <p className="mb-5 leading-8 text-gray-700">
    Add a professional text watermark to every page of your PDF document with
    our free online Watermark PDF tool. Whether you want to protect your
    document, identify ownership, or mark files as confidential, this tool
    lets you apply a custom watermark in just a few clicks.
  </p>

  <p className="mb-5 leading-8 text-gray-700">
    Upload your PDF, enter the watermark text, and click <strong>Add
    Watermark</strong>. The watermark is applied to every page while keeping
    the original layout, fonts, images, and formatting intact.
  </p>

  <p className="leading-8 text-gray-700">
    Our online PDF watermark tool works directly in your browser on Windows,
    macOS, Linux, Android, and iPhone without requiring any software
    installation or registration.
  </p>
</section>

{/* ================= How It Works ================= */}

<section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">

<h2 className="mb-6 text-3xl font-bold">
How to Add a Watermark to PDF
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
Enter the text you want to use as the watermark.
</p>
</div>

<div className="rounded-lg border p-5">
<h3 className="mb-2 text-lg font-semibold">
Step 3
</h3>

<p className="text-gray-600">
Click the Add Watermark button.
</p>
</div>

<div className="rounded-lg border p-5">
<h3 className="mb-2 text-lg font-semibold">
Step 4
</h3>

<p className="text-gray-600">
Download your newly watermarked PDF instantly.
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
✅ Add Text Watermarks
</div>

<div className="rounded-lg border p-4">
✅ Watermark Every Page
</div>

<div className="rounded-lg border p-4">
✅ Preserve PDF Quality
</div>

<div className="rounded-lg border p-4">
✅ Fast Processing
</div>

<div className="rounded-lg border p-4">
✅ No Watermark Added by Us
</div>

<div className="rounded-lg border p-4">
✅ Browser Based
</div>

<div className="rounded-lg border p-4">
✅ Mobile Friendly
</div>

<div className="rounded-lg border p-4">
✅ Secure Processing
</div>

<div className="rounded-lg border p-4">
✅ Free to Use
</div>

</div>

</section>

{/* ================= Benefits ================= */}

<section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">

<h2 className="mb-5 text-3xl font-bold">
Why Use Our Watermark PDF Tool?
</h2>

<p className="mb-5 leading-8 text-gray-700">
Adding a watermark is one of the easiest ways to protect important documents.
You can label files with text such as "Confidential", "Draft", "Sample",
"Internal Use Only", or your company name to clearly indicate ownership or
document status.
</p>

<p className="mb-5 leading-8 text-gray-700">
Businesses, students, teachers, legal professionals, designers, and
organizations use watermarks to prevent unauthorized distribution and to make
documents easier to identify.
</p>

<p className="leading-8 text-gray-700">
Our tool applies your watermark while preserving the original document's
quality, including fonts, images, tables, charts, and page formatting.
</p>

</section>

{/* ================= Common Uses ================= */}

<section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">

<h2 className="mb-5 text-3xl font-bold">
Common Watermark Examples
</h2>

<ul className="list-disc space-y-2 pl-6 text-gray-700 leading-8">
<li>Confidential</li>
<li>Draft</li>
<li>Sample Copy</li>
<li>Approved</li>
<li>For Review</li>
<li>Internal Use Only</li>
<li>Company Name</li>
<li>Copyright Notice</li>
<li>Personal Copy</li>
</ul>

</section>

{/* ================= Security ================= */}

<section className="mt-12 rounded-xl bg-blue-50 p-8">

<h2 className="mb-4 text-3xl font-bold">
Privacy & Security
</h2>

<p className="leading-8 text-gray-700">
Your privacy is important. Uploaded PDF documents are processed securely and
removed after processing. Your files are not permanently stored, helping keep
your personal and business documents safe.
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
Is this tool free?
</h3>

<p className="mt-2 text-gray-600">
Yes. You can add text watermarks to PDF documents completely free.
</p>
</div>

<div>
<h3 className="font-semibold text-lg">
Will the PDF quality change?
</h3>

<p className="mt-2 text-gray-600">
No. The original formatting, fonts, images, and layout are preserved.
</p>
</div>

<div>
<h3 className="font-semibold text-lg">
Can I watermark every page?
</h3>

<p className="mt-2 text-gray-600">
Yes. The watermark is automatically applied to all pages of your PDF.
</p>
</div>

<div>
<h3 className="font-semibold text-lg">
Are my files secure?
</h3>

<p className="mt-2 text-gray-600">
Yes. Your files are processed securely and automatically removed after processing.
</p>
</div>

</div>

</section>
    </ToolLayout>
  );
}