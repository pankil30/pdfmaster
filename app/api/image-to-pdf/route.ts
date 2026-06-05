import { PDFDocument } from "pdf-lib";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const files = formData.getAll("images") as File[];

    if (!files.length) {
      return Response.json(
        { error: "No images uploaded" },
        { status: 400 }
      );
    }

    const pdfDoc = await PDFDocument.create();

    for (const file of files) {
      const bytes = await file.arrayBuffer();

      let image;
      if (file.type === "image/png") {
        image = await pdfDoc.embedPng(bytes);
      } else {
        image = await pdfDoc.embedJpg(bytes);
      }

      const page = pdfDoc.addPage([
        image.width,
        image.height,
      ]);

      page.drawImage(image, {
        x: 0,
        y: 0,
        width: image.width,
        height: image.height,
      });
    }

    const pdfBytes = await pdfDoc.save();

    return new Response(new Uint8Array(pdfBytes), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="images.pdf"',
      },
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Failed to create PDF" },
      { status: 500 }
    );
  }
}