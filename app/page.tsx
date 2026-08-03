import Hero from "@/components/Hero";
import ToolCard from "@/components/ToolCard";
import FaqSection from "@/components/FaqSection";
import CTASection from "@/components/CTASection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Link from "next/link";
import Guides from "@/components/Guides";
import WorksSection from "@/components/WorksSection";
import BlogPreview from "@/components/BlogPreview";

interface Tool {
  title: string;
  href: string;
  description: string;
  category: string;
}

const tools: Tool[] = [
  {
    title: "Add Signature",
    href: "/add-signature",
    description: "Sign your PDF documents online.",
    category: "Edit",
  },
  {
    title: "Merge PDF",
    href: "/merge-pdf",
    description: "Combine multiple PDF files into one document.",
    category: "Edit",
  },
  {
    title: "Split PDF",
    href: "/split-pdf",
    description: "Extract selected pages from a PDF.",
    category: "Edit",
  },
  {
    title: "Image to PDF",
    href: "/image-to-pdf",
    description: "Convert JPG and PNG images into PDF.",
    category: "Convert",
  },
  {
    title: "PDF to Image",
    href: "/pdf-to-image",
    description: "Convert PDF pages into PNG images.",
    category: "Convert",
  },
  {
    title: "Rotate PDF",
    href: "/rotate-pdf",
    description: "Rotate all pages in your PDF easily.",
    category: "Edit",
  },
  {
    title: "Remove Pages",
    href: "/remove-pages",
    description: "Delete unwanted pages from PDF files.",
    category: "Edit",
  },
  {
    title: "Extract Pages",
    href: "/extract-pages",
    description: "Create a new PDF from selected pages.",
    category: "Edit",
  },
  {
    title: "PDF Information",
    href: "/pdf-info",
    description: "View PDF pages and file details.",
    category: "View",
  },
  {
    title: "Watermark PDF",
    href: "/watermark-pdf",
    description: "Add a watermark to your PDF.",
    category: "Edit",
  },
  {
    title: "Compress PDF",
    href: "/compress-pdf",
    description: "Reduce PDF file size without losing quality.",
    category: "Optimize",
  },
  {
    title: "Protect PDF",
    href: "/protect-pdf",
    description: "Add password protection to your PDF files.",
    category: "Security",
  },
  {
    title: "OCR Editor",
    description: "Extract and edit text from images and PDFs",
    href: "/ocr-editor",
    category: "Edit",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Stats */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl border bg-white p-6 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-red-500">11+</h3>
              <p className="mt-2 text-gray-600">PDF Tools</p>
            </div>
            <div className="rounded-2xl border bg-white p-6 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-red-500">100%</h3>
              <p className="mt-2 text-gray-600">Free</p>
            </div>
            <div className="rounded-2xl border bg-white p-6 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-red-500">Fast</h3>
              <p className="mt-2 text-gray-600">Processing</p>
            </div>
            <div className="rounded-2xl border bg-white p-6 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-red-500">Secure</h3>
              <p className="mt-2 text-gray-600">Files</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="mx-auto max-w-7xl px-6 py-20 scroll-mt-20">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Popular PDF Tools</h2>
          <p className="mt-4 text-gray-600">
            Free online tools to edit, convert and manage PDF files.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <ToolCard
              key={tool.title}
              title={tool.title}
              href={tool.href}
              description={tool.description}
              category={tool.category}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/tools"
            className="inline-flex items-center rounded-xl bg-red-500 px-6 py-3 font-medium text-white transition hover:bg-red-600"
          >
            View All Tools
          </Link>
        </div>
      </section>

      <WorksSection />
      <Guides />

      {/* ✅ Blog Preview Section */}
      <BlogPreview />

      <WhyChooseUs />
      <FaqSection />
      <CTASection />
    </>
  );
}