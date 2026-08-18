export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900">
        About PDFMaster
      </h1>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        PDFMaster is a browser-based PDF toolkit built for one simple
        reason: everyday PDF tasks — merging a few files, shrinking one
        for email, pulling out a couple of pages — shouldn&apos;t
        require installing software or paying for a subscription you&apos;ll
        use twice a year. Upload a file, run the tool, download the
        result. That&apos;s the whole idea.
      </p>

      <div className="mt-12 space-y-10">
        <section>
          <h2 className="text-2xl font-semibold">
            Why We Built This
          </h2>
          <p className="mt-4 leading-8 text-gray-600">
            Most desktop PDF software is either expensive, bloated with
            features nobody uses, or locked behind a trial that expires
            right when you need it most. We wanted something that
            opens in a browser tab, does one job well, and gets out of
            your way. PDFMaster started as a small set of tools —
            merge and split — and has grown from there based on what
            people actually asked for.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            Who Uses PDFMaster
          </h2>
          <p className="mt-4 leading-8 text-gray-600">
            Students combining scanned assignment pages before
            submission. Job seekers compressing a resume that&apos;s
            just over an upload limit. Small business owners merging
            invoices and receipts for their accountant. Teachers
            splitting one scanned answer sheet into files per student.
            None of these are complicated jobs — they just needed a
            tool that didn&apos;t make them create an account first.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            What&apos;s Available Right Now
          </h2>
          <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-600">
            <li>Merge, split, compress, and rotate PDF files</li>
            <li>Convert images to PDF and PDF pages to images</li>
            <li>Add text, signatures, or watermarks to a document</li>
            <li>Remove or extract specific pages</li>
            <li>Password-protect a PDF or remove an existing password</li>
            <li>Basic OCR to make scanned pages searchable</li>
          </ul>
          <p className="mt-4 leading-8 text-gray-600">
            Everything runs in the browser on desktop and mobile, with
            no account required for standard use.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            How We Handle Your Files
          </h2>
          <p className="mt-4 leading-8 text-gray-600">
            Files you upload are used only to run the tool you selected
            — merging, compressing, converting, whatever the task is —
            and are deleted from our servers shortly afterward. We
            don&apos;t open, read, or share the contents of your
            documents. Full details are in our{" "}
            <a href="/privacy-policy" className="underline">
              Privacy Policy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            What&apos;s Next
          </h2>
          <p className="mt-4 leading-8 text-gray-600">
            We&apos;re working through a list of requested tools and
            improvements — better mobile handling for large files,
            batch processing, and a few more conversion formats are
            next up. If there&apos;s a tool you keep needing and can&apos;t
            find here, tell us — that&apos;s usually how the next one
            gets built.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            Get in Touch
          </h2>
          <p className="mt-4 leading-8 text-gray-600">
            Questions, bug reports, or a tool you wish existed — reach
            us through the{" "}
            <a href="/contact" className="underline">
              Contact page
            </a>
            . We read everything that comes in.
          </p>
        </section>
      </div>
    </div>
  );
}