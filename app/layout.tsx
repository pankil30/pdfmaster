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
    description: "Merge, Split, Rotate and Convert PDFs online for free.",
    type: "website",
   
    url: "https://www.masterpdf.in",
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
        <main className="flex-1">{children}</main>
        <Footer />

        {/*
          TODO: Replace G-XXXXXXXXXX below with your real GA4 Measurement ID.
          Get it from analytics.google.com > Admin > Data Streams > your web stream.
          Until this is a real ID, GTM will keep failing to send data (and any
          ad-blocker extension will report errors trying to block those failed calls).
        */}
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

        {/*
          Suppresses console noise from browser extensions (ad-blockers, privacy tools)
          that throw "Failed to fetch" errors when blocking third-party scripts like GTM.
          This does NOT affect your app's real functionality or real visitors —
          it only filters extension-originated unhandled rejections from your dev console.
        */}
        <Script id="suppress-extension-errors" strategy="beforeInteractive">
          {`
    window.addEventListener('unhandledrejection', function (event) {
      var stack = (event.reason && event.reason.stack) || '';
      if (stack.indexOf('chrome-extension://') !== -1) {
        event.preventDefault();
      }
    });
  `}
        </Script>
      </body>
    </html>
  );
}