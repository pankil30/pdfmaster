import { PDFDocument } from "pdf-lib";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File;
    const pages = formData.get("pages") as string;

    if (!file || !pages) {
      return new Response("Missing data", {
        status: 400,
      });
    }

    const bytes = await file.arrayBuffer();

    const sourcePdf = await PDFDocument.load(bytes);
    const newPdf = await PDFDocument.create();

    const pageIndexes = pages
      .split(",")
      .map((p) => Number(p.trim()) - 1)
      .filter((p) => p >= 0);

    const copiedPages = await newPdf.copyPages(
      sourcePdf,
      pageIndexes
    );

    copiedPages.forEach((page) => {
      newPdf.addPage(page);
    });

    const pdfBytes = await newPdf.save();

    return new Response(Buffer.from(pdfBytes), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="extracted-pages.pdf"',
      },
    });
  } catch (error) {
    console.error(error);

    return new Response("Failed", {
      status: 500,
    });
  }
}