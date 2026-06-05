import { PDFDocument, degrees } from "pdf-lib";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File;
    const rotation = Number(formData.get("rotation"));

    if (!file) {
      return Response.json(
        { error: "PDF file required" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();

    const pdfDoc = await PDFDocument.load(bytes);

    pdfDoc.getPages().forEach((page) => {
      page.setRotation(degrees(rotation));
    });

    const pdfBytes = await pdfDoc.save();

    return new Response(
      new Uint8Array(pdfBytes),
      {
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition":
            'attachment; filename="rotated.pdf"',
        },
      }
    );
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Failed to rotate PDF" },
      { status: 500 }
    );
  }
}