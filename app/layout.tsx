import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PDFMaster",
    template: "%s | PDFMaster",
  },
  icons: {
    icon: "/pd.png",
    shortcut: "/pd.png",
    apple: "/pd.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/pd.png",
    },
  },
  description:
    "Free online PDF tools to merge, split, rotate, compress and convert PDFs instantly without signup.",

  keywords: [
    "pdf tools",
    "merge pdf",
    "split pdf",
    "rotate pdf",
    "pdf converter",
    "compress pdf",
    "free pdf editor",
  ],

  openGraph: {
    title: "PDFMaster - Free Online PDF Tools",
    description:
      "Merge, Split, Rotate and Convert PDFs online for free.",
    type: "website",
    url: "https://your-domain.com",
    siteName: "PDFMaster",
  },

  twitter: {
    card: "summary_large_image",
    title: "PDFMaster",
    description: "Free online PDF tools.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-900">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />

        <Script id="ga-init" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-XXXXXXXXXX');
  `}
        </Script>
      </body>
    </html>
  );
}