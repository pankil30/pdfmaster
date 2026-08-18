import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | PDFMaster",
  description: "Have questions or feedback about PDFMaster? Contact our support team. We're here to help with your PDF document needs.",
  alternates: {
    canonical: "https://www.masterpdf.in/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900">
        Contact Us
      </h1>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        Question about a specific tool, found something broken, or have
        an idea for a feature? Send us a message below — a real person
        reads every one.
      </p>

      <div className="mt-12 rounded-xl border bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold">
          Get in Touch
        </h2>

        <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Email Support
            </h3>

            <p className="mt-2 text-gray-600">
              For general questions, technical issues, business
              inquiries, or feature requests, email us directly.
            </p>

            <a
              href="mailto:support@masterpdf.in"
              className="mt-3 inline-block text-lg font-semibold text-red-500 hover:underline"
            >
              support@masterpdf.in
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Response Time
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              We typically reply within 24–48 hours. Weekends and
              holidays can push that a bit longer, but every email gets
              a response.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Reporting a Problem
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              If a tool isn&apos;t working as expected, tell us which
              browser and operating system you&apos;re using and what
              exactly happened (e.g. &quot;merge failed after
              uploading 3 files on Chrome for Android&quot;). That
              level of detail is usually the difference between a fix
              in a day versus a week.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Tool Requests
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              Missing a tool you need regularly? Tell us what it is and
              what you&apos;d use it for — most of what we&apos;ve
              built came directly from requests like this.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Business & Partnerships
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              For advertising, collaborations, or other business
              inquiries, include &quot;Business Inquiry&quot; in your
              email subject line.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold">
            Frequently Asked Questions
          </h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-semibold">
                Are PDFMaster tools really free?
              </h3>

              <p className="mt-2 text-gray-600 leading-7">
                Yes. All core PDF tools are free to use and don&apos;t
                require an account.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Are my uploaded PDF files safe?
              </h3>

              <p className="mt-2 text-gray-600 leading-7">
                Files are processed only to perform the requested
                operation and are automatically deleted afterward. See
                our{" "}
                <a href="/privacy-policy" className="underline">
                  Privacy Policy
                </a>{" "}
                for the full details on how uploads are handled.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                How do I report a bug?
              </h3>

              <p className="mt-2 text-gray-600 leading-7">
                Email us with &quot;Bug Report&quot; in the subject
                line and as much detail as you can — browser, device,
                and what you were trying to do.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}