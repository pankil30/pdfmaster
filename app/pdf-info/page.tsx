"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import ToolLayout from "@/components/ToolLayout";
import FileUpload from "@/components/FileUpload";

export default function PdfInfoPage() {
  const [info, setInfo] = useState<{
    name: string;
    size: string;
    pages: number;
  } | null>(null);

  const handleFile = async (file: File) => {
    const bytes = await file.arrayBuffer();

    const pdf = await PDFDocument.load(bytes);

    setInfo({
      name: file.name,
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      pages: pdf.getPageCount(),
    });
  };

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

        {info && (
          <div className="rounded-xl border bg-gray-50 p-5">
            <p>📄 {info.name}</p>
            <p>📦 Size: {info.size}</p>
            <p>📑 Pages: {info.pages}</p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}