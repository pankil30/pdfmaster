import { PDFDocument } from "pdf-lib";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File;
    const startPage = Number(formData.get("startPage"));
    const endPage = Number(formData.get("endPage"));

    if (!file) {
      return Response.json(
        { error: "PDF file required" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();

    const pdfDoc = await PDFDocument.load(bytes);

    const totalPages = pdfDoc.getPageCount();

    if (
      startPage < 1 ||
      endPage > totalPages ||
      startPage > endPage
    ) {
      return Response.json(
        { error: "Invalid page range" },
        { status: 400 }
      );
    }

    const newPdf = await PDFDocument.create();

    const pageIndexes = [];

    for (let i = startPage - 1; i < endPage; i++) {
      pageIndexes.push(i);
    }

    const copiedPages = await newPdf.copyPages(
      pdfDoc,
      pageIndexes
    );

    copiedPages.forEach((page) => {
      newPdf.addPage(page);
    });

    const pdfBytes = await newPdf.save();

    return new Response(
      new Uint8Array(pdfBytes),
      {
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition":
            'attachment; filename="split.pdf"',
        },
      }
    );
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Failed to split PDF" },
      { status: 500 }
    );
  }
}