"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search } from "lucide-react";
import type { BlogPost } from "@/lib/blog-posts";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogSearch({ posts }: { posts: BlogPost[] }) {
  const [search, setSearch] = useState("");

  const filteredPosts = useMemo(() => {
    const q = search.toLowerCase();
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q)
    );
  }, [posts, search]);

  return (
    <>
    
      <div className="mx-auto mt-10 max-w-xl">
        <div className="flex items-center rounded-2xl border bg-white px-4">
          <Search className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent p-4 outline-none"
          />
        </div>
      </div>

     
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group overflow-hidden rounded-2xl border bg-white transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600">
                {post.category}
              </span>

              <h2 className="mt-4 text-xl font-semibold leading-snug">
                {post.title}
              </h2>

              <p className="mt-3 text-sm text-gray-600 line-clamp-2">
                {post.description}
              </p>

              <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>

              <div className="mt-5 flex items-center text-red-500">
                Read Guide
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="mt-12 text-center text-gray-500">
          No articles found.
        </div>
      )}
    </>
  );
}
