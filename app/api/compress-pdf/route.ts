import { PDFDocument } from "pdf-lib";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return new Response("No file", { status: 400 });
    }

    const bytes = await file.arrayBuffer();

    const pdfDoc = await PDFDocument.load(bytes);

    const compressedPdf = await pdfDoc.save({
      useObjectStreams: false,
    });

    return new Response(compressedPdf, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="compressed.pdf"',
      },
    });
  } catch (err) {
    return new Response("Error compressing PDF", {
      status: 500,
    });
  }
}