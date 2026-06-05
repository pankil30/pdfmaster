import { PDFDocument } from "pdf-lib";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File;
    const pagesInput = formData.get("pages") as string;

    if (!file) {
      return NextResponse.json(
        { error: "No file uploaded" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();

    const pdf = await PDFDocument.load(bytes);
    const pageCount = pdf.getPageCount();

    const pagesToRemove = pagesInput
      .split(",")
      .map((p) => parseInt(p.trim(), 10))
      .filter((p) => !isNaN(p));

    const newPdf = await PDFDocument.create();

    const keepPages = [];

    for (let i = 1; i <= pageCount; i++) {
      if (!pagesToRemove.includes(i)) {
        keepPages.push(i - 1);
      }
    }

    const copiedPages = await newPdf.copyPages(pdf, keepPages);

    copiedPages.forEach((page) => {
      newPdf.addPage(page);
    });

  const output = await newPdf.save();

return new Response(Buffer.from(output), {
  headers: {
    "Content-Type": "application/pdf",
    "Content-Disposition":
      'attachment; filename="pages-removed.pdf"',
  },
});
  } catch {
    return NextResponse.json(
      { error: "Failed to process PDF" },
      { status: 500 }
    );
  }
}