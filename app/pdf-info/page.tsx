"use client";

import { useEffect, useState } from "react";
import { PDFDocument } from "pdf-lib";
import ToolLayout from "@/components/ToolLayout";
import FileUpload from "@/components/FileUpload";

export default function PdfInfoPage() {
  const [info, setInfo] = useState<{
    name: string;
    size: string;
    pages: number;
  } | null>(null);

  const [countdown, setCountdown] = useState<number | null>(null);
  const [pendingInfo, setPendingInfo] = useState<{
    name: string;
    size: string;
    pages: number;
  } | null>(null);

  const handleFile = async (file: File) => {
    const bytes = await file.arrayBuffer();

    const pdf = await PDFDocument.load(bytes);

    setPendingInfo({
      name: file.name,
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      pages: pdf.getPageCount(),
    });

    setCountdown(5);
  };

  useEffect(() => {
    if (countdown === null) return;

    if (countdown === 0 && pendingInfo) {
      const data = pendingInfo;

      setTimeout(() => {
        setInfo(data);
        setPendingInfo(null);
        setCountdown(null);
      }, 0);

      return;
    }
    const timer = setTimeout(() => {
      setCountdown((prev) => (prev ?? 1) - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, pendingInfo]);
  return (
    <ToolLayout
      title="PDF Information"
      description="View PDF details instantly."
    >
      <div className="space-y-5">
        <FileUpload
          accept=".pdf"
          onChange={(files) => {
            if (files?.[0]) {
              handleFile(files[0]);
            }
          }}
        />
        {countdown !== null && countdown > 0 && (
          <div className="rounded-xl border bg-blue-50 p-5 text-center">
            <p className="text-lg font-semibold">
              Reading PDF Information...
            </p>
            <p className="mt-2 text-2xl font-bold">
              {countdown}s
            </p>
          </div>
        )}
        {info && (
          <div className="rounded-xl border bg-gray-50 p-5">
            <p>📄 {info.name}</p>
            <p>📦 Size: {info.size}</p>
            <p>📑 Pages: {info.pages}</p>
          </div>
        )}
      </div>
   

<section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">
  <h2 className="mb-5 text-3xl font-bold">
    View PDF Information Online
  </h2>

  <p className="mb-5 leading-8 text-gray-700">
    Our PDF Information tool lets you instantly view important details about
    any PDF document without installing software. Upload a PDF file to see
    basic document information such as file name, file size, and total number
    of pages within seconds.
  </p>

  <p className="mb-5 leading-8 text-gray-700">
    Whether you're checking a report, ebook, invoice, contract, presentation,
    or any other PDF document, this tool provides quick information before
    editing, printing, sharing, or converting your file.
  </p>

  <p className="leading-8 text-gray-700">
    Everything works directly in your browser, making it fast, secure, and
    convenient on Windows, macOS, Linux, Android, and iPhone.
  </p>
</section>



<section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">
  <h2 className="mb-6 text-3xl font-bold">
    How to View PDF Information
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
        Wait a few seconds while the file is analyzed.
      </p>
    </div>

    <div className="rounded-lg border p-5">
      <h3 className="mb-2 text-lg font-semibold">
        Step 3
      </h3>
      <p className="text-gray-600">
        View file name, size, and total page count.
      </p>
    </div>

    <div className="rounded-lg border p-5">
      <h3 className="mb-2 text-lg font-semibold">
        Step 4
      </h3>
      <p className="text-gray-600">
        Use the information before editing or sharing your PDF.
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
✅ View File Name
</div>

<div className="rounded-lg border p-4">
✅ Check File Size
</div>

<div className="rounded-lg border p-4">
✅ Count Total Pages
</div>

<div className="rounded-lg border p-4">
✅ Fast Analysis
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
✅ No Upload Limits
</div>

<div className="rounded-lg border p-4">
✅ Completely Free
</div>

</div>

</section>



<section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">

<h2 className="mb-5 text-3xl font-bold">
Why Use Our PDF Information Tool?
</h2>

<p className="mb-5 leading-8 text-gray-700">
Before editing or sharing a PDF, it's often useful to know its basic
properties. Our PDF Information tool quickly displays important details
without changing the original file.
</p>

<p className="mb-5 leading-8 text-gray-700">
Students, teachers, office workers, designers, and businesses use this tool
to verify document size and page count before printing, emailing, uploading,
or converting PDF files.
</p>

<p className="leading-8 text-gray-700">
Everything happens locally in your browser, providing a fast experience while
keeping your files secure and private.
</p>

</section>



<section className="mt-12 rounded-xl bg-blue-50 p-8">

<h2 className="mb-4 text-3xl font-bold">
Privacy & Security
</h2>

<p className="leading-8 text-gray-700">
Your PDF documents are processed securely. Files are not permanently stored,
helping protect your personal and confidential information while you inspect
your document details.
</p>

</section>



<section className="mt-12 rounded-xl border bg-white p-8 shadow-sm">

<h2 className="mb-6 text-3xl font-bold">
Frequently Asked Questions
</h2>

<div className="space-y-6">

<div>
<h3 className="font-semibold text-lg">
Is this PDF Information tool free?
</h3>

<p className="mt-2 text-gray-600">
Yes. You can check PDF information online without paying anything.
</p>
</div>

<div>
<h3 className="font-semibold text-lg">
What information can I view?
</h3>

<p className="mt-2 text-gray-600">
The tool displays the file name, file size, and total number of pages in your PDF.
</p>
</div>

<div>
<h3 className="font-semibold text-lg">
Will my PDF be modified?
</h3>

<p className="mt-2 text-gray-600">
No. The tool only reads information from your PDF and does not change the file.
</p>
</div>

<div>
<h3 className="font-semibold text-lg">
Are my files secure?
</h3>

<p className="mt-2 text-gray-600">
Yes. Your PDF is processed securely, and no permanent copy of your document is stored.
</p>
</div>

</div>

</section>
    </ToolLayout>
  );
}