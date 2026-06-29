"use client";

import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";


import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

interface Props {
  file: File | null;
}

export default function PdfViewer({ file }: Props) {
  const [pdfUrl, setPdfUrl] = useState<string>();
  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    if (!file) return;

    const url = URL.createObjectURL(file);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPdfUrl(url);

    return () => URL.revokeObjectURL(url);
  }, [file]);

  if (!file || !pdfUrl) return null;

  return (
    <div className="mt-8 rounded-xl border bg-white p-5 shadow">

      <h2 className="mb-5 text-xl font-semibold">
        PDF Preview
      </h2>

      <Document
        file={pdfUrl}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        {Array.from(new Array(numPages), (_, index) => (
          <div key={index} className="mb-8 flex justify-center">
            <Page
              pageNumber={index + 1}
              width={700}
            />
          </div>
        ))}
      </Document>

    </div>
  );
}