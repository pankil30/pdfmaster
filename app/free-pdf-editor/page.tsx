import Link from "next/link";

export const metadata = {
  title: "Free PDF Editor Online | PDFMaster",
  description:
    "Edit PDF files online for free. Add text, images, signatures, comments and more.",
};

export default function FreePdfEditor() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">

      <section className="text-center">
        <h1 className="text-5xl font-bold">
          Free PDF Editor Online
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          Edit PDF documents online without installing software.
          Add text, images, signatures, annotations and more.
        </p>

        <Link
          href="/pdf-editor"
          className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-4 text-white"
        >
          Edit PDF Now
        </Link>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-bold">
          Why Choose PDFMaster?
        </h2>

        <ul className="mt-8 space-y-3">
          <li>✓ Free PDF Editor</li>
          <li>✓ Fast Processing</li>
          <li>✓ Secure Upload</li>
          <li>✓ No Installation</li>
          <li>✓ Works on Mobile</li>
        </ul>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-bold">
          How It Works
        </h2>

        <ol className="mt-8 space-y-4">
          <li>1. Upload PDF</li>
          <li>2. Edit Document</li>
          <li>3. Download PDF</li>
        </ol>
      </section>

    </main>
  );
}