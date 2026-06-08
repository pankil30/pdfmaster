import { PDFDocument } from "pdf-lib";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File;
    const password = formData.get("password") as string;

    if (!file || !password) {
      return new Response("Missing data", {
        status: 400,
      });
    }

    const bytes = await file.arrayBuffer();

    const pdfDoc = await PDFDocument.load(bytes);

    const pdfBytes = await pdfDoc.save();

    return new Response(Buffer.from(pdfBytes), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="protected.pdf"',
      },
    });
  } catch (error) {
    console.error(error);

    return new Response("Error protecting PDF", {
      status: 500,
    });
  }
}