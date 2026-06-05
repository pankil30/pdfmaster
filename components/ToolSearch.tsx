"use client";

import { useState } from "react";
import Link from "next/link";

const tools = [
  { name: "Merge PDF", href: "/merge-pdf" },
  { name: "Split PDF", href: "/split-pdf" },
  { name: "Rotate PDF", href: "/rotate-pdf" },
  { name: "Remove Pages", href: "/remove-pages" },
  { name: "Extract Pages", href: "/extract-pages" },
  { name: "Image to PDF", href: "/image-to-pdf" },
  { name: "PDF to Image", href: "/pdf-to-image" },
  { name: "Compress PDF", href: "/compress-pdf" },
  { name: "Protect PDF", href: "/protect-pdf" },
];

export default function ToolSearch() {
  const [query, setQuery] = useState("");

  const filtered = tools.filter((tool) =>
    tool.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-sm">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search tools..."
        className="w-full rounded-xl border px-4 py-2"
      />

      {query && (
        <div className="absolute left-0 right-0 mt-2 max-h-60 overflow-auto rounded-xl border bg-white shadow-lg">
          {filtered.length === 0 ? (
            <p className="p-3 text-sm text-gray-500">
              No tools found
            </p>
          ) : (
            filtered.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setQuery("")}
              >
                {tool.name}
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}