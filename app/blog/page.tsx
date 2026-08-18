import { Metadata } from "next";
import BlogSearch from "@/components/BlogSearch";
import { getAllPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog - PDF Tips, Guides & Tutorials",
  description:
    "Practical guides on working with PDFs: merging, compressing, converting, signing, protecting, and fixing common PDF problems.",
  alternates: {
    canonical: "https://www.masterpdf.in/blog",
  },
  openGraph: {
    title: "Blog - PDF Tips, Guides & Tutorials | PDFMaster",
    description:
      "Practical guides on working with PDFs: merging, compressing, converting, signing, protecting, and fixing common PDF problems.",
    url: "https://www.masterpdf.in/blog",
    siteName: "PDFMaster",
    type: "website",
  },
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold md:text-5xl">PDF Guides &amp; Tutorials</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Practical, no-fluff guides for working with PDFs — merging,
            compressing, converting, signing, protecting, and fixing the
            problems that come up along the way.
          </p>
        </div>

        <BlogSearch posts={posts} />
      </section>
    </div>
  );
}
