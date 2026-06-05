import Link from "next/link";
import ToolSearch from "./ToolSearch";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-bold text-red-500"
        >
          PDFMaster
        </Link>
           <div className="hidden md:block">
        <ToolSearch />
      </div>


        <nav className="hidden items-center gap-6 md:flex">
            <Link href="/tools">All Tools</Link>
          <Link href="/merge-pdf">Merge PDF</Link>
          <Link href="/split-pdf">Split PDF</Link>
          <Link href="/image-to-pdf">Image to PDF</Link>
          <Link href="/rotate-pdf">Rotate PDF</Link>
          
        </nav>

        <Link
          href="/merge-pdf"
          className="rounded-xl bg-red-500 px-4 py-2 text-white"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}