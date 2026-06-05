"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

const tools = [
  {
    title: "Merge PDF",
    href: "/merge-pdf",
    description: "Combine multiple PDF files into one document.",
    category: "Edit PDF",
  },
  {
    title: "Split PDF",
    href: "/split-pdf",
    description: "Extract selected pages from a PDF.",
    category: "Edit PDF",
  },
  {
    title: "Rotate PDF",
    href: "/rotate-pdf",
    description: "Rotate all pages in your PDF.",
    category: "Edit PDF",
  },
  {
    title: "Remove Pages",
    href: "/remove-pages",
    description: "Delete unwanted pages from PDF files.",
    category: "Edit PDF",
  },
  {
    title: "Image to PDF",
    href: "/image-to-pdf",
    description: "Convert JPG and PNG images into PDF.",
    category: "Convert PDF",
  },
  {
    title: "PDF Information",
    href: "/pdf-info",
    description: "View PDF pages and file details.",
    category: "Information",
  },
];

export default function ToolsPage() {
  const [search, setSearch] = useState("");

  const filteredTools = useMemo(() => {
    return tools.filter(
      (tool) =>
        tool.title.toLowerCase().includes(search.toLowerCase()) ||
        tool.description.toLowerCase().includes(search.toLowerCase()) ||
        tool.category.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            All PDF Tools
          </h1>

          <p className="mt-4 text-gray-600">
            Free online tools to edit, convert and manage PDF files.
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mt-10 max-w-xl">
          <div className="flex items-center rounded-2xl border bg-white px-4">
            <Search className="h-5 w-5 text-gray-400" />

            <input
              type="text"
              placeholder="Search PDF tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent p-4 outline-none"
            />
          </div>
        </div>

        {/* Tools Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group rounded-2xl border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600">
                {tool.category}
              </span>

              <h2 className="mt-4 text-xl font-semibold">
                {tool.title}
              </h2>

              <p className="mt-3 text-sm text-gray-600">
                {tool.description}
              </p>

              <div className="mt-5 flex items-center text-red-500">
                Open Tool
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="mt-12 text-center text-gray-500">
            No tools found.
          </div>
        )}
      </section>
    </div>
  );
}