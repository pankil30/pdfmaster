"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import FileUpload from "@/components/FileUpload";
import Alert from "@/components/Alert";
import FileInfo from "@/components/FileInfo";
import { useEffect } from "react";

export default function ProtectPdfPage() {
  const [file, setFile] = useState<File | null>(null);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [countdown, setCountdown] = useState<number | null>(null);

  const handleProtect = async () => {
    try {
      setError("");
      setSuccess("");

      if (!file) {
        setError("Please select a PDF file.");
        return;
      }

      if (!password.trim()) {
        setError("Enter password.");
        return;
      }

      setLoading(true);

      const formData = new FormData();
      formData.append("file", file);
      formData.append("password", password);

      const res = await fetch("/api/protect-pdf", {
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
          `${file.name.replace(".pdf", "")}-protected.pdf`
        );

        setLoading(false);
        setCountdown(5);
      };

      reader.readAsDataURL(blob);
    } catch {
      setError("Failed to protect PDF.");
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
      title="Protect PDF"
      description="Add password protection to your PDF file."
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
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl border p-3"
        />

        <button
          onClick={handleProtect}
          disabled={loading || countdown !== null}
          className="rounded-xl bg-red-500 px-6 py-3 text-white hover:bg-red-600 disabled:opacity-50"
        >
          {countdown !== null
            ? `Opening download page in ${countdown}s`
            : loading
              ? "Processing..."
              : "Protect PDF"}
        </button>
      </div>
  

<section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">
  <h2 className="mb-5 text-3xl font-bold">
    Protect PDF with a Password Online
  </h2>

  <p className="mb-5 leading-8 text-gray-700">
    Protect your PDF documents by adding a password with our free online PDF
    protection tool. Password protection helps prevent unauthorized users from
    opening confidential files and adds an extra layer of security to sensitive
    documents.
  </p>

  <p className="mb-5 leading-8 text-gray-700">
    Simply upload your PDF, enter a strong password, and click
    <strong> Protect PDF</strong>. Your document will be encrypted and can only
    be opened by users who know the password.
  </p>

  <p className="leading-8 text-gray-700">
    Our PDF password protection tool works entirely in your browser and is
    compatible with Windows, macOS, Linux, Android, and iPhone without
    requiring software installation.
  </p>
</section>



<section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">

<h2 className="mb-6 text-3xl font-bold">
How to Password Protect a PDF
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
Enter a secure password for your PDF.
</p>
</div>

<div className="rounded-lg border p-5">
<h3 className="mb-2 text-lg font-semibold">
Step 3
</h3>

<p className="text-gray-600">
Click the Protect PDF button.
</p>
</div>

<div className="rounded-lg border p-5">
<h3 className="mb-2 text-lg font-semibold">
Step 4
</h3>

<p className="text-gray-600">
Download your password-protected PDF file.
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
✅ Password Protection
</div>

<div className="rounded-lg border p-4">
✅ Encrypt PDF Documents
</div>

<div className="rounded-lg border p-4">
✅ Preserve Original Quality
</div>

<div className="rounded-lg border p-4">
✅ Fast Processing
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
✅ No Software Required
</div>

<div className="rounded-lg border p-4">
✅ Free to Use
</div>

</div>

</section>



<section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">

<h2 className="mb-5 text-3xl font-bold">
Why Protect a PDF?
</h2>

<p className="mb-5 leading-8 text-gray-700">
Password-protecting a PDF helps keep confidential information safe. Whether
you're sharing contracts, invoices, financial statements, reports, resumes,
legal documents, or personal records, adding a password ensures only
authorized users can open the file.
</p>

<p className="mb-5 leading-8 text-gray-700">
Businesses, students, teachers, healthcare professionals, and government
organizations commonly use password-protected PDFs to secure sensitive
documents before sending them by email or uploading them online.
</p>

<p className="leading-8 text-gray-700">
Your document's formatting, fonts, images, and layout remain unchanged while
adding password protection.
</p>

</section>



<section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">

<h2 className="mb-5 text-3xl font-bold">
Tips for Creating a Strong Password
</h2>

<ul className="list-disc space-y-2 pl-6 leading-8 text-gray-700">
<li>Use at least 8–12 characters.</li>
<li>Include uppercase and lowercase letters.</li>
<li>Add numbers and special characters.</li>
<li>Avoid common words or personal information.</li>
<li>Store your password safely because it may not be recoverable.</li>
</ul>

</section>



<section className="mt-12 rounded-xl bg-blue-50 p-8">

<h2 className="mb-4 text-3xl font-bold">
Privacy & Security
</h2>

<p className="leading-8 text-gray-700">
Your files are processed securely and automatically removed after processing.
We do not permanently store your PDF documents, helping protect your personal
and business information.
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
Yes. You can password-protect PDF files online completely free.
</p>
</div>

<div>
<h3 className="font-semibold text-lg">
Will my PDF content change?
</h3>

<p className="mt-2 text-gray-600">
No. The tool only adds password protection while preserving your document's
content, formatting, and quality.
</p>
</div>

<div>
<h3 className="font-semibold text-lg">
Can I share the protected PDF?
</h3>

<p className="mt-2 text-gray-600">
Yes. Anyone with the correct password can open the protected PDF.
</p>
</div>

<div>
<h3 className="font-semibold text-lg">
Are my files secure?
</h3>

<p className="mt-2 text-gray-600">
Yes. Your documents are processed securely and automatically removed after
processing.
</p>
</div>

</div>

</section>
    </ToolLayout>
  );
}