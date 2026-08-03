import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-03");

  // Get all blog posts
  const blogPosts = getAllPosts();

  // Base URLs (your main pages)
  const baseUrls = [
    {
      url: "https://www.masterpdf.in",
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: "https://www.masterpdf.in/tools",
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: "https://www.masterpdf.in/merge-pdf",
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: "https://www.masterpdf.in/split-pdf",
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: "https://www.masterpdf.in/image-to-pdf",
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: "https://www.masterpdf.in/rotate-pdf",
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: "https://www.masterpdf.in/about",
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: "https://www.masterpdf.in/contact",
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: "https://www.masterpdf.in/privacy",
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: "https://www.masterpdf.in/terms",
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: "https://www.masterpdf.in/add-signature",
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: "https://www.masterpdf.in/pdf-to-image",
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: "https://www.masterpdf.in/remove-pages",
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: "https://www.masterpdf.in/extract-pages",
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: "https://www.masterpdf.in/pdf-info",
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.masterpdf.in/watermark-pdf",
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: "https://www.masterpdf.in/compress-pdf",
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: "https://www.masterpdf.in/protect-pdf",
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: "https://www.masterpdf.in/ocr-editor",
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.masterpdf.in/pdf-editor",
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.masterpdf.in/desktop",
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: "https://www.masterpdf.in/blog",
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  // Blog post URLs
  const blogUrls = blogPosts.map((post) => ({
    url: `https://www.masterpdf.in/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Combine all URLs
  return [...baseUrls, ...blogUrls];
}