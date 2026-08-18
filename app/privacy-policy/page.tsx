import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | PDFMaster",
  description: "Read PDFMaster's privacy policy. Learn how we handle your data, uploaded documents, cookies, and security measures.",
  alternates: {
    canonical: "https://www.masterpdf.in/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900">
        Privacy Policy
      </h1>

      <p className="mt-4 text-sm text-gray-500">
        Last updated: August 17, 2026
      </p>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        This Privacy Policy explains what information PDFMaster
        collects, how uploaded files are handled, and how
        advertising on this site works. By using masterpdf.in, you
        agree to the practices described below.
      </p>

      <div className="mt-12 space-y-10">

        <section aria-labelledby="section-1">
          <h2 id="section-1" className="text-2xl font-semibold">
            1. Information We Collect
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            PDFMaster does not require account registration to use its
            tools. We automatically collect limited technical data —
            such as browser type, operating system, approximate
            location from IP address, and device type — for security
            and analytics purposes.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            If you email us, we store your email address and message
            content only to respond to your inquiry.
          </p>
        </section>

        <section aria-labelledby="section-2">
          <h2 id="section-2" className="text-2xl font-semibold">
            2. Uploaded Files
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            Files you upload are used only to perform the operation you
            requested — merging, splitting, compressing, converting, or
            similar — and are automatically deleted from our servers
            shortly after processing completes.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            We do not open, read, or review the contents of your files
            beyond what&apos;s required to run the selected tool, and we
            do not use uploaded documents for any purpose other than
            fulfilling your request.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            3. Cookies
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            We use cookies to remember basic preferences, understand
            how visitors use the site, and — as described below —
            support advertising. You can disable cookies in your
            browser settings, though some site features may not work
            as expected without them.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            4. Advertising & Google AdSense
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            This site displays ads served by Google AdSense. Google, as
            a third-party vendor, uses cookies (including the DART
            cookie) to serve ads based on your visits to this and other
            websites. Google&apos;s use of advertising cookies enables
            it and its partners to serve ads based on your visit to
            this site and/or other sites on the internet.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            You can opt out of personalized advertising by visiting{" "}
            <a
              href="https://adssettings.google.com"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads Settings
            </a>
            . For more on how Google uses data from sites that use its
            services, see{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              How Google uses information from sites that use its services
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            5. Analytics Services
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            We use analytics tools (such as Google Analytics) to
            measure site performance and visitor activity. This data is
            aggregated and does not identify you personally.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            6. Data Security
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            We apply reasonable technical safeguards to protect
            uploaded files and site data. No method of internet
            transmission or storage is 100% secure, so we can&apos;t
            guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            7. Third-Party Services
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            This site may link to or use external services such as
            analytics and advertising providers. We aren&apos;t
            responsible for the privacy practices of those third
            parties — review their own policies for details.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            8. Children&apos;s Privacy
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            PDFMaster is not directed at children under 13, and we do
            not knowingly collect personal information from them. If we
            learn we&apos;ve collected such data, we&apos;ll delete it
            promptly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            9. Your Rights
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            Depending on where you live, you may have rights to access,
            correct, delete, or restrict use of your personal
            information. To make a request, contact us via the{" "}
            <a href="/contact" className="underline">
              Contact page
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            10. Changes to This Policy
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            We may update this policy as our services or legal
            requirements change. The &quot;Last updated&quot; date at
            the top of this page reflects the most recent revision.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            11. Contact Us
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            Questions about this policy or how your data is handled?
            Reach us through the{" "}
            <a href="/contact" className="underline">
              Contact page
            </a>
            .
          </p>
        </section>

      </div>
    </div>
  );
}