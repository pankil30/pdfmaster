import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File;
    const watermark = formData.get("watermark") as string;

    if (!file || !watermark) {
      return new Response("Missing file or watermark", {
        status: 400,
      });
    }

    const bytes = await file.arrayBuffer();

    const pdfDoc = await PDFDocument.load(bytes);

    const font = await pdfDoc.embedFont(
      StandardFonts.Helvetica
    );

    pdfDoc.getPages().forEach((page) => {
      const { width, height } = page.getSize();

      page.drawText(watermark, {
        x: width / 4,
        y: height / 2,
        size: 40,
        font,
        color: rgb(0.7, 0.7, 0.7),
      });
    });

    const pdfBytes = await pdfDoc.save();

    return new Response(Buffer.from(pdfBytes), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="watermarked.pdf"',
      },
    });
  } catch (error) {
    console.error(error);

    return new Response("Failed to process PDF", {
      status: 500,
    });
  }
}