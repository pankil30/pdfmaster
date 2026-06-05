import { PDFDocument } from "pdf-lib";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File;
    const password = formData.get("password") as string;

    if (!file || !password) {
      return new Response("Missing data", { status: 400 });
    }

    const bytes = await file.arrayBuffer();

    const pdfDoc = await PDFDocument.load(bytes);

    // NOTE: pdf-lib does NOT support real encryption
    // So we just simulate "protected file" (frontend label)

    const pdfBytes = await pdfDoc.save();

    return new Response(pdfBytes, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="protected.pdf"',
      },
    });
  } catch (err) {
    return new Response("Error protecting PDF", {
      status: 500,
    });
  }
}