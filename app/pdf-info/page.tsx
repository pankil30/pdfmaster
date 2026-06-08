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
    </ToolLayout>
  );
}