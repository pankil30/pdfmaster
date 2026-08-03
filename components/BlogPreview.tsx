import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog-posts";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
}

export default function BlogPreview() {
  const allPosts: BlogPost[] = getAllPosts();
  const recentPosts: BlogPost[] = allPosts.slice(0, 3);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold">📚 Latest PDF Guides</h2>
        <p className="mt-4 text-gray-600">
          Practical tutorials to help you work with PDFs faster
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {recentPosts.map((post: BlogPost) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group overflow-hidden rounded-2xl border bg-white transition hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <span className="inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600">
                {post.category}
              </span>
              <h3 className="mt-3 text-lg font-semibold leading-tight group-hover:text-red-500">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                {post.description}
              </p>
              <div className="mt-4 flex items-center text-sm text-gray-400">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                <span className="mx-2">·</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center rounded-xl bg-red-500 px-6 py-3 font-medium text-white transition hover:bg-red-600"
        >
          Read All Guides →
        </Link>
      </div>
    </section>
  );
}