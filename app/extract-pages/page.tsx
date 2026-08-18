"use client";


import ToolLayout from "@/components/ToolLayout";
import FileUpload from "@/components/FileUpload";
import Alert from "@/components/Alert";
import FileInfo from "@/components/FileInfo";
import { useState, useEffect } from "react";


export default function ExtractPagesPage() {
  const [file, setFile] = useState<File | null>(null);
  const [pages, setPages] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [countdown, setCountdown] = useState<number | null>(null);
  

  const handleExtract = async () => {
    try {
      setError("");
      setSuccess("");

      if (!file) {
        setError("Please select a PDF.");
        return;
      }

      if (!pages.trim()) {
        setError("Enter page numbers.");
        return;
      }

      setLoading(true);

      const formData = new FormData();

      formData.append("file", file);
      formData.append("pages", pages);

      const res = await fetch("/api/extract-pages", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        let errorMsg = "Failed to extract pages.";
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
    `${file.name.replace(".pdf", "")}-extracted.pdf`
  );

  // FIXED: Add a success message so the user knows it worked!
  setSuccess("PDF pages extracted successfully! Download starting...");
  setLoading(false);
  setCountdown(5);
};

reader.readAsDataURL(blob);
      } catch (err: any) {
      setError(err.message || "Failed to extract pages.");
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
      title="Extract PDF Pages"
      description="Create a new PDF from selected pages."
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

        {error && (
          <Alert
            type="error"
            message={error}
          />
        )}

        {success && (
          <Alert
            type="success"
            message={success}
          />
        )}

        <input
          type="text"
          placeholder="1,3,5"
          value={pages}
          onChange={(e) =>
            setPages(e.target.value)
          }
          className="w-full rounded-xl border p-3"
        />

       <button
  onClick={handleExtract}
  disabled={loading || countdown !== null}
  className="rounded-xl bg-red-500 px-6 py-3 text-white hover:bg-red-600 disabled:opacity-50"
>
  {countdown !== null
    ? `Opening download page in ${countdown}s`
    : loading
    ? "Processing..."
    : "Extract Pages"}
</button>
      </div>
     

<section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">
  <h2 className="mb-5 text-3xl font-bold">
    Extract PDF Pages Online
  </h2>

  <p className="mb-5 leading-8 text-gray-700">
    Extract specific pages from any PDF document quickly and securely with our
    free online PDF extractor. Whether you need a single page, multiple pages,
    or selected sections from a large document, this tool helps you create a
    brand-new PDF in just a few clicks.
  </p>

  <p className="mb-5 leading-8 text-gray-700">
    Simply upload your PDF, enter the page numbers you want to extract (for
    example 1,3,5), and click the Extract Pages button. Your new PDF is
    generated while preserving the original layout, fonts, images, and page
    quality.
  </p>

  <p className="leading-8 text-gray-700">
    The tool works directly in your browser on Windows, macOS, Linux,
    Android, and iPhone without installing any software.
  </p>
</section>



<section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">
  <h2 className="mb-6 text-3xl font-bold">
    How to Extract PDF Pages
  </h2>

  <div className="grid gap-5 md:grid-cols-2">

    <div className="rounded-lg border p-5">
      <h3 className="mb-2 text-lg font-semibold">Step 1</h3>
      <p className="text-gray-600">
        Upload your PDF document.
      </p>
    </div>

    <div className="rounded-lg border p-5">
      <h3 className="mb-2 text-lg font-semibold">Step 2</h3>
      <p className="text-gray-600">
        Enter the page numbers you want to extract.
      </p>
    </div>

    <div className="rounded-lg border p-5">
      <h3 className="mb-2 text-lg font-semibold">Step 3</h3>
      <p className="text-gray-600">
        Click the Extract Pages button.
      </p>
    </div>

    <div className="rounded-lg border p-5">
      <h3 className="mb-2 text-lg font-semibold">Step 4</h3>
      <p className="text-gray-600">
        Download your new PDF containing only the selected pages.
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
✅ Extract Individual Pages
</div>

<div className="rounded-lg border p-4">
✅ Extract Multiple Pages
</div>

<div className="rounded-lg border p-4">
✅ Preserve Original Quality
</div>

<div className="rounded-lg border p-4">
✅ Fast Processing
</div>

<div className="rounded-lg border p-4">
✅ Secure File Processing
</div>

<div className="rounded-lg border p-4">
✅ No Watermark
</div>

<div className="rounded-lg border p-4">
✅ Mobile Friendly
</div>

<div className="rounded-lg border p-4">
✅ Browser Based
</div>

<div className="rounded-lg border p-4">
✅ Completely Free
</div>

</div>

</section>



<section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">

<h2 className="mb-5 text-3xl font-bold">
Why Use Our Extract PDF Tool?
</h2>

<p className="mb-5 leading-8 text-gray-700">
Instead of sharing an entire PDF document, you can extract only the pages you
need. This is useful for reports, invoices, contracts, assignments,
presentations, books, manuals, and many other documents.
</p>

<p className="mb-5 leading-8 text-gray-700">
The extracted PDF keeps the same formatting, fonts, images, and layout as
the original document. Only the selected pages are included in the final
file.
</p>

<p className="leading-8 text-gray-700">
Everything works directly in your browser, making the extraction process
quick, simple, and convenient without installing desktop software.
</p>

</section>



<section className="mt-12 rounded-xl bg-blue-50 p-8">

<h2 className="mb-4 text-3xl font-bold">
Privacy & Security
</h2>

<p className="leading-8 text-gray-700">
Your privacy matters. Uploaded PDF files are processed securely and are
automatically removed after processing. Your documents are not permanently
stored, helping keep your personal and business files safe.
</p>

</section>



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
Yes. You can extract PDF pages online at no cost.
</p>
</div>

<div>
<h3 className="font-semibold text-lg">
Can I extract multiple pages?
</h3>

<p className="mt-2 text-gray-600">
Yes. Enter multiple page numbers separated by commas, such as 1,3,5.
</p>
</div>

<div>
<h3 className="font-semibold text-lg">
Will formatting change?
</h3>

<p className="mt-2 text-gray-600">
No. Fonts, images, layouts, and page quality remain unchanged.
</p>
</div>

<div>
<h3 className="font-semibold text-lg">
Are my PDF files secure?
</h3>

<p className="mt-2 text-gray-600">
Yes. Files are processed securely and automatically deleted after processing.
</p>
</div>

</div>

</section>
    </ToolLayout>
  );
}