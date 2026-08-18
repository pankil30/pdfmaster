



"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import ToolSearch from "./ToolSearch";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex h-18 items-center justify-between">
          
          <Link href="/" onClick={() => setOpen(false)}>
            <Image
              src="/master.png"
              alt="PDFMaster Logo"
              width={1000}
              height={500}
              priority
              className="h-16 md:h-20 w-auto object-contain"
            />
          </Link>


          <div className="hidden md:block">
            <ToolSearch />
          </div>

        
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/tools">All Tools</Link>
            <Link href="/merge-pdf">Merge PDF</Link>
            <Link href="/split-pdf">Split PDF</Link>
            <Link href="/blog">Blogs</Link>
          </nav>

      
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      
        {open && (
          <div className="border-t py-4 md:hidden">
            <ToolSearch />

            <nav className="mt-4 flex flex-col space-y-4">
              <Link href="/tools" onClick={() => setOpen(false)}>
                All Tools
              </Link>

              <Link href="/merge-pdf" onClick={() => setOpen(false)}>
                Merge PDF
              </Link>

              <Link href="/split-pdf" onClick={() => setOpen(false)}>
                Split PDF
              </Link>

              <Link href="/image-to-pdf" onClick={() => setOpen(false)}>
                Image to PDF
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );  
}