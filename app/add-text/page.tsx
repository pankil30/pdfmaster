"use client";

import { useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface TextItem {
  id: string;
  x: number;
  y: number;
  text: string;
  page: number;
  fontSize: number;
}

export default function AddTextPage() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pdfBytes, setPdfBytes] = useState<ArrayBuffer | null>(null);
  const [numPages, setNumPages] = useState(0);
  const [pageNum, setPageNum] = useState(1);
  const [pageSize, setPageSize] = useState({ width: 0, height: 0 });
  const [textItems, setTextItems] = useState<TextItem[]>([]);
  const pageRef = useRef<HTMLDivElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPdfFile(file);
    setPdfBytes(await file.arrayBuffer());
    setTextItems([]);
    setPageNum(1);
  };

  const handlePageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!pageRef.current) return;
    const rect = pageRef.current.getBoundingClientRect();
    const newItem: TextItem = {
      id: crypto.randomUUID(),
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      text: "New text",
      page: pageNum,
      fontSize: 16,
    };
    setTextItems((prev) => [...prev, newItem]);
  };

  const updateText = (id: string, text: string) =>
    setTextItems((prev) => prev.map((i) => (i.id === id ? { ...i, text } : i)));

  const removeText = (id: string) =>
    setTextItems((prev) => prev.filter((i) => i.id !== id));

  const handleDownload = async () => {
    if (!pdfBytes) return;
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const pages = pdfDoc.getPages();

    textItems.forEach((item) => {
      const page = pages[item.page - 1];
      if (!page) return;
      const scaleX = page.getWidth() / pageSize.width;
      const scaleY = page.getHeight() / pageSize.height;
      page.drawText(item.text, {
        x: item.x * scaleX,
        y: page.getHeight() - item.y * scaleY,
        size: item.fontSize,
        font,
        color: rgb(0, 0, 0),
      });
    });


    const outBytes = await pdfDoc.save();

    const arrayBuffer = outBytes.slice().buffer as ArrayBuffer;

    const blob = new Blob([arrayBuffer], {
      type: "application/pdf",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "edited.pdf";
    a.click();
    URL.revokeObjectURL(url);
  };

  const currentItems = textItems.filter((i) => i.page === pageNum);

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-xl font-bold">PDF Text Editor</h1>

      <input type="file" accept="application/pdf" onChange={handleFileChange} />

      {pdfFile && (
        <>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPageNum((p) => Math.max(1, p - 1))}
              className="rounded border px-3 py-1"
            >
              Prev
            </button>
            <span>
              Page {pageNum} / {numPages}
            </span>
            <button
              onClick={() => setPageNum((p) => Math.min(numPages, p + 1))}
              className="rounded border px-3 py-1"
            >
              Next
            </button>
            <button
              onClick={handleDownload}
              className="rounded bg-blue-600 px-4 py-1 text-white"
            >
              Download PDF
            </button>
          </div>

          <div
            ref={pageRef}
            onClick={handlePageClick}
            className="relative border shadow"
            style={{ cursor: "crosshair" }}
          >
            <Document file={pdfFile} onLoadSuccess={(d) => setNumPages(d.numPages)}>
              <Page
                pageNumber={pageNum}
                onLoadSuccess={(p) => setPageSize({ width: p.width, height: p.height })}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            </Document>

            {currentItems.map((item) => (
              <div
                key={item.id}
                className="absolute flex items-center gap-1"
                style={{ left: item.x, top: item.y, transform: "translate(0,-50%)" }}
                onClick={(e) => e.stopPropagation()}
              >
                <input
                  value={item.text}
                  onChange={(e) => updateText(item.id, e.target.value)}
                  style={{ fontSize: item.fontSize }}
                  className="border border-yellow-400 bg-yellow-100/80 px-1"
                />
                <button
                  onClick={() => removeText(item.id)}
                  className="rounded border border-red-400 px-1 text-xs text-red-600"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-500">
            Click anywhere on the PDF to add text. Edit inline, or click ✕ to remove.
          </p>
        </>
      )}
    </div>
  );
}