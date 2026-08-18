import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

// TODO: replace these with your real social profile URLs before launch.
// Placeholder links currently point nowhere and should not go live as-is.
const socialLinks = {
  facebook: "https://facebook.com/yourpage",
  twitter: "https://twitter.com/yourpage",
  linkedin: "https://linkedin.com/company/yourpage",
  instagram: "https://instagram.com/yourpage",
};

export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">

          <div className="max-w-xs">
            <h2 className="text-2xl font-bold text-red-500">PDFMaster</h2>
            <p className="mt-2 text-sm text-gray-500">
              Free, browser-based PDF tools — no signup, no software to
              install.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-100 p-2 text-gray-600 transition hover:bg-red-500 hover:text-white"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-100 p-2 text-gray-600 transition hover:bg-red-500 hover:text-white"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-100 p-2 text-gray-600 transition hover:bg-red-500 hover:text-white"
              >
                <FaLinkedinIn size={16} />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-100 p-2 text-gray-600 transition hover:bg-red-500 hover:text-white"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="font-semibold text-gray-900">Organize</h3>
              <div className="mt-3 flex flex-col gap-2 text-sm text-gray-600">
                <Link href="/merge-pdf" className="hover:text-red-500">Merge PDF</Link>
                <Link href="/split-pdf" className="hover:text-red-500">Split PDF</Link>
                <Link href="/remove-pages" className="hover:text-red-500">Remove Pages</Link>
                <Link href="/extract-pages" className="hover:text-red-500">Extract Pages</Link>
                <Link href="/rotate-pdf" className="hover:text-red-500">Rotate PDF</Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">Convert</h3>
              <div className="mt-3 flex flex-col gap-2 text-sm text-gray-600">
                <Link href="/image-to-pdf" className="hover:text-red-500">Image to PDF</Link>
                <Link href="/pdf-to-image" className="hover:text-red-500">PDF to Image</Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">Edit & Secure</h3>
              <div className="mt-3 flex flex-col gap-2 text-sm text-gray-600">
                <Link href="/compress-pdf" className="hover:text-red-500">Compress PDF</Link>
                <Link href="/add-text" className="hover:text-red-500">Add Text</Link>
                <Link href="/add-signature" className="hover:text-red-500">Add Signature</Link>
                <Link href="/watermark-pdf" className="hover:text-red-500">Watermark PDF</Link>
                <Link href="/protect-pdf" className="hover:text-red-500">Protect PDF</Link>
                <Link href="/ocr-editor" className="hover:text-red-500">OCR Editor</Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">Company</h3>
              <div className="mt-3 flex flex-col gap-2 text-sm text-gray-600">
                <Link href="/about" className="hover:text-red-500">About</Link>
                <Link href="/contact" className="hover:text-red-500">Contact</Link>
                <Link href="/blog" className="hover:text-red-500">Blog</Link>
                <Link href="/privacy-policy" className="hover:text-red-500">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-red-500">Terms</Link>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} PDFMaster. All rights reserved.
        </div>
      </div>
    </footer>
  );
}