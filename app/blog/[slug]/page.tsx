import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getAllPosts, getAllSlugs, getPostBySlug } from "@/lib/blog-posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `https://www.masterpdf.in/blog/${post.slug}`;
  const imageUrl = `https://www.masterpdf.in${post.image}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: "PDFMaster",
      type: "article",
      publishedTime: post.date,
      images: [{ url: imageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [imageUrl],
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const related = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  const fallbackRelated =
    related.length > 0
      ? related
      : allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `https://www.masterpdf.in${post.image}`,
    datePublished: post.date,
    author: { "@type": "Organization", name: "PDFMaster" },
    publisher: { "@type": "Organization", name: "PDFMaster" },
    mainEntityOfPage: `https://www.masterpdf.in/blog/${post.slug}`,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero image */}
      <div className="relative aspect-[21/9] w-full overflow-hidden bg-gray-100">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />
      </div>

      <article className="mx-auto max-w-3xl px-6 py-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-red-500 hover:text-red-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <header className="mt-6 mb-8">
          <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600">
            {post.category}
          </span>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-gray-500">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{post.readTime}</span>
            <span>·</span>
            <span>PDFMaster Team</span>
          </div>
        </header>

        <div className="prose prose-gray max-w-none">
          {post.content.map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2 key={i} className="text-xl font-semibold mt-8 mb-3">
                  {block.replace("## ", "")}
                </h2>
              );
            }
            return (
              <p key={i} className="text-gray-700 leading-relaxed mb-4">
                {block}
              </p>
            );
          })}
        </div>
      </article>

      {fallbackRelated.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h3 className="text-lg font-semibold mb-6">Related Guides</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {fallbackRelated.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group overflow-hidden rounded-2xl border bg-white transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="font-medium">{p.title}</p>
                  <div className="mt-3 flex items-center text-red-500 text-sm">
                    Read Guide
                    <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
