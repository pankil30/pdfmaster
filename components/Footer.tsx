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
              </div>
            </div>

            <div>
              <h3 className="font-semibold">Legal</h3>
              <div className="mt-3 flex flex-col gap-2">
                <Link href="/privacy-policy">Privacy Policy</Link>
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
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://twitter.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-sky-500 hover:text-white transition"
            >
              <FaTwitter />
            </a>

            <a
              href="https://linkedin.com/in/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-blue-700 hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-pink-600 hover:text-white transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-gray-500">
          © 2026 PDFMaster. All rights reserved.
        </div>
      </div>
    </footer>
  );
}