import Link from "next/link";
import ToolSearch from "./ToolSearch";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/master.png"
            alt="PDFMaster Logo"
            width={1000}
            height={500}
            priority
            className="h-30 w-auto object-contain"
          />
        </Link>
        <div className="hidden md:block">
          <ToolSearch />
        </div>


        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/tools">All Tools</Link>
          <Link href="/merge-pdf">Merge PDF</Link>
          <Link href="/split-pdf">Split PDF</Link>
          <Link href="/image-to-pdf">Image to PDF</Link>
          {/* <Link href="/rotate-pdf">Rotate PDF</Link> */}

        </nav>

      </div>
    </header>
  );
}