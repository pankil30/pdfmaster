import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | PDFMaster",
  description: "Read the Terms of Service for PDFMaster's online PDF tools, including acceptable use, liability, and user responsibilities.",
  alternates: {
    canonical: "https://www.masterpdf.in/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900">
        Terms of Service
      </h1>

      <p className="mt-4 text-sm text-gray-500">
        Last updated: August 17, 2026
      </p>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        These Terms of Service govern your use of PDFMaster
        (masterpdf.in) and its online PDF tools. By using this site,
        you agree to these terms. If you don&apos;t agree, please
        discontinue use of the site.
      </p>

      <div className="mt-12 space-y-10">

        <section>
          <h2 className="text-2xl font-semibold">
            1. Acceptance of Terms
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            By visiting PDFMaster or using any of our tools, you
            acknowledge that you&apos;ve read, understood, and agreed
            to these Terms. They apply to all visitors and users of
            the site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            2. Description of Service
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            PDFMaster provides browser-based PDF utilities, including
            merging, splitting, compressing, rotating, and converting
            PDF files, along with related document tools. Features may
            be added, changed, or removed without prior notice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            3. Eligibility
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            You must comply with applicable laws when using PDFMaster.
            If you&apos;re using the site on behalf of an organization,
            you confirm you have authority to bind that organization to
            these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            4. Acceptable Use
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            You agree not to use PDFMaster for unlawful purposes or to
            process files that infringe copyright, privacy, or other
            intellectual property rights. You also agree not to
            attempt to disrupt, overload, reverse-engineer, or
            otherwise interfere with our systems.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            5. User Responsibilities
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            You&apos;re solely responsible for the files you upload and
            process. By using PDFMaster, you confirm you own the files
            or have the right to process them through our tools.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            6. Uploaded Documents
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            Uploaded files are processed automatically to perform the
            operation you request. They may be temporarily stored
            during processing and are removed afterward, as described
            in our{" "}
            <a href="/privacy-policy" className="underline">
              Privacy Policy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            7. Intellectual Property
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            The PDFMaster website — including its design, branding,
            source code, and content — is protected by copyright,
            trademark, and other intellectual property laws. You may
            not copy or redistribute site content without written
            permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            8. Availability of Service
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            We aim to keep PDFMaster available at all times but
            can&apos;t guarantee uninterrupted service. Maintenance,
            upgrades, technical issues, or circumstances outside our
            control may temporarily affect availability.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            9. Third-Party Services
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            PDFMaster may link to or integrate with third-party
            services, such as analytics or advertising providers
            (including Google AdSense). We&apos;re not responsible for
            the content or practices of those external services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            10. Disclaimer of Warranties
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            PDFMaster is provided &quot;as is&quot; and &quot;as
            available.&quot; We make no warranties regarding
            uninterrupted operation, accuracy, or fitness for any
            particular purpose.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            11. Limitation of Liability
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            To the maximum extent permitted by law, PDFMaster is not
            liable for direct, indirect, incidental, or consequential
            damages arising from use of — or inability to use — the
            service, including data loss.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            12. Privacy
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            Your use of PDFMaster is also governed by our{" "}
            <a href="/privacy-policy" className="underline">
              Privacy Policy
            </a>
            , which explains how uploaded files and technical
            information are handled.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            13. Modifications
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            We may modify, suspend, or discontinue any part of the
            service without prior notice, and may revise these Terms
            periodically. Continued use after changes take effect
            means you accept the revised Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            14. Governing Law
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            These Terms are governed by the laws of India, and any
            disputes arising from use of this site will be subject to
            the jurisdiction of Indian courts.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            15. Contact Information
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            Questions about these Terms? Reach us through the{" "}
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