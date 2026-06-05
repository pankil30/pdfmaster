export default function Hero() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-600">
          Free Online PDF Tools
        </span>

        <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-900 md:text-7xl">
          Work With PDFs
          <span className="text-red-500"> Faster</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Merge, Split, Rotate and Convert PDF files online.
          Fast, secure and completely free.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/merge-pdf"
            className="rounded-xl bg-red-500 px-8 py-4 font-semibold text-white hover:bg-red-600"
          >
            Merge PDF
          </a>

          <a
            href="#tools"
            className="rounded-xl border px-8 py-4 font-semibold"
          >
            View Tools
          </a>
        </div>
      </div>
    </section>
  );
}