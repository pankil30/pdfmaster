import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Remove PDF Pages | PDFMaster",
  description: "Remove unwanted pages from PDF files online for free.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}