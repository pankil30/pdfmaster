import { PDFDocument } from "pdf-lib";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return Response.json(
        { error: "No file uploaded" },
        { status: 400 }
      );
    }

    // Read uploaded file
    const bytes = await file.arrayBuffer();

    // Load PDF
    const pdfDoc = await PDFDocument.load(bytes);

    // Save PDF
    const pdfBytes = await pdfDoc.save();

    // Return PDF
    return new Response(Buffer.from(pdfBytes), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="compressed.pdf"',
      },
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Failed to process PDF" },
      { status: 500 }
    );
  }
}