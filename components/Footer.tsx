import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold text-red-500">PDFMaster</h2>
            <p className="mt-2 text-sm text-gray-500">
              Free Online PDF Tools
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-semibold">Tools</h3>
              <div className="mt-3 flex flex-col gap-2">
                <Link href="/merge-pdf">Merge PDF</Link>
                <Link href="/split-pdf">Split PDF</Link>
                <Link href="/image-to-pdf">Image to PDF</Link>
                <Link href="/rotate-pdf">Rotate PDF</Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold">Company</h3>
              <div className="mt-3 flex flex-col gap-2">
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/blog">Blog</Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold">Legal</h3>
              <div className="mt-3 flex flex-col gap-2">
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms</Link>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-100 p-2 text-gray-600 transition hover:bg-red-500 hover:text-white"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://twitter.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-100 p-2 text-gray-600 transition hover:bg-red-500 hover:text-white"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href="https://linkedin.com/company/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-100 p-2 text-gray-600 transition hover:bg-red-500 hover:text-white"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href="https://instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-100 p-2 text-gray-600 transition hover:bg-red-500 hover:text-white"
            >
              <FaInstagram size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} PDFMaster. All rights reserved.
        </div>
      </div>
    </footer>
  );
}