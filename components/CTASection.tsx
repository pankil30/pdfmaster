import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl rounded-3xl bg-red-500 px-8 py-16 text-center text-white">
        <h2 className="text-4xl font-bold">
          Ready to work with your PDFs?
        </h2>

        <p className="mt-4 text-red-100">
          Merge, split, rotate, and convert — free, no account needed.
        </p>

        <Link
          href="/merge-pdf"
          className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-red-500 transition hover:bg-red-50"
        >
          Try it free
        </Link>
      </div>
    </section>
  );
}