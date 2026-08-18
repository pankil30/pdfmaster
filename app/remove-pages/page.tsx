"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import FileUpload from "@/components/FileUpload";
import Alert from "@/components/Alert";
import FileInfo from "@/components/FileInfo";
import { useEffect } from "react";

export default function RemovePagesPage() {
  const [file, setFile] = useState<File | null>(null);
  const [pages, setPages] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [countdown, setCountdown] = useState<number | null>(null);

  const handleRemove = async () => {
    try {
      setError("");
      setSuccess("");

      if (!file) {
        setError("Please select a PDF file.");
        return;
      }

      if (!pages.trim()) {
        setError("Enter pages to remove. Example: 2,5,7");
        return;
      }

      setLoading(true);

      const formData = new FormData();
      formData.append("file", file);
      formData.append("pages", pages);

      const res = await fetch("/api/remove-pages", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error();
      const blob = await res.blob();

      const reader = new FileReader();

      reader.onloadend = () => {
        sessionStorage.setItem(
          "downloadPdf",
          reader.result as string
        );

        sessionStorage.setItem(
          "downloadName",
          `${file.name.replace(".pdf", "")}-pages-removed.pdf`
        );

        setLoading(false);
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
      title="Remove PDF Pages"
      description="Remove unwanted pages from your PDF."
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
          placeholder="Pages to remove (e.g. 2,5,7)"
          value={pages}
          onChange={(e) => setPages(e.target.value)}
          className="w-full rounded-xl border p-3"
        />

        <button
          onClick={handleRemove}
          disabled={loading || countdown !== null}
          className="rounded-xl bg-red-500 px-6 py-3 text-white hover:bg-red-600 disabled:opacity-50"
        >
          {countdown !== null
            ? `Opening download page in ${countdown}s`
            : loading
              ? "Processing..."
              : "Remove Pages"}
        </button>
      </div>
  

<section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">
  <h2 className="mb-5 text-3xl font-bold">
    Remove Pages from PDF Online
  </h2>

  <p className="mb-5 leading-8 text-gray-700">
    Remove unwanted pages from PDF documents quickly and securely with our
    free online PDF page remover. Whether you need to delete blank pages,
    advertisements, cover pages, or unnecessary sections, our tool makes the
    process simple and fast without requiring any software installation.
  </p>

  <p className="mb-5 leading-8 text-gray-700">
    Simply upload your PDF, enter the page numbers you want to remove, and
    click the Remove Pages button. Your new PDF will be generated while
    preserving the original formatting, fonts, images, and layout.
  </p>

  <p className="leading-8 text-gray-700">
    This tool works on Windows, macOS, Linux, Android, and iPhone using any
    modern web browser. No registration is required and there are no
    watermarks added to your files.
  </p>
</section>



<section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">
  <h2 className="mb-6 text-3xl font-bold">
    How to Remove PDF Pages
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
        Enter the page numbers you want to remove.
      </p>
    </div>

    <div className="rounded-lg border p-5">
      <h3 className="mb-2 text-lg font-semibold">Step 3</h3>
      <p className="text-gray-600">
        Click the Remove Pages button.
      </p>
    </div>

    <div className="rounded-lg border p-5">
      <h3 className="mb-2 text-lg font-semibold">Step 4</h3>
      <p className="text-gray-600">
        Download your updated PDF instantly.
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
✅ Delete Specific Pages
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
✅ Works on Mobile
</div>

<div className="rounded-lg border p-4">
✅ Browser Based
</div>

<div className="rounded-lg border p-4">
✅ Unlimited Usage
</div>

<div className="rounded-lg border p-4">
✅ Completely Free
</div>

</div>

</section>



<section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">

<h2 className="mb-5 text-3xl font-bold">
Why Use Our Remove PDF Pages Tool?
</h2>

<p className="mb-5 leading-8 text-gray-700">
Sometimes PDF files contain pages that are no longer needed, such as blank
pages, duplicate pages, advertisements, covers, or outdated information.
Removing those pages helps reduce file size and keeps your document clean and
professional.
</p>

<p className="mb-5 leading-8 text-gray-700">
Our tool allows you to remove only the pages you don't need while keeping the
rest of the document exactly as it was. Fonts, images, formatting, and page
quality remain unchanged.
</p>

<p className="leading-8 text-gray-700">
Everything happens in your browser, so there's no need to install software.
Upload your PDF, remove unwanted pages, and download the new document within
seconds.
</p>

</section>



<section className="mt-12 rounded-xl bg-blue-50 p-8">

<h2 className="mb-4 text-3xl font-bold">
Safe & Secure PDF Processing
</h2>

<p className="leading-8 text-gray-700">
Your privacy is important to us. Uploaded PDF documents are processed
securely and automatically removed after processing. We never permanently
store your files, helping protect your personal and business information.
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
Yes. You can remove PDF pages online completely free.
</p>
</div>

<div>
<h3 className="font-semibold text-lg">
Can I remove multiple pages?
</h3>

<p className="mt-2 text-gray-600">
Yes. Enter page numbers separated by commas, such as 2,5,7.
</p>
</div>

<div>
<h3 className="font-semibold text-lg">
Will the PDF quality change?
</h3>

<p className="mt-2 text-gray-600">
No. The original quality, fonts, images, and formatting are preserved.
</p>
</div>

<div>
<h3 className="font-semibold text-lg">
Are my files secure?
</h3>

<p className="mt-2 text-gray-600">
Yes. Files are processed securely and removed automatically after processing.
</p>
</div>

</div>

</section>
    </ToolLayout>
  );
}