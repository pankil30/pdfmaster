export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900">
        Contact Us
      </h1>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        Thank you for visiting PDFMaster. We value every user and are
        always happy to hear your questions, suggestions, feedback,
        and ideas. Whether you need technical assistance or simply want
        to share your experience using our PDF tools, our team is here
        to help.
      </p>

      <p className="mt-4 leading-8 text-gray-600">
        Our goal is to provide a fast, secure, and user-friendly
        platform for managing PDF documents online. Your feedback helps
        us improve our services and add new features that benefit users
        around the world.
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
              For general questions, technical support, bug reports,
              business inquiries, or feature requests, please contact
              us via email.
            </p>

            <p className="mt-3 text-lg font-semibold text-red-500">
              support@pdfmaster.com
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Response Time
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              Our support team typically replies within 24 to 48
              business hours. During weekends or holidays, responses
              may take slightly longer, but we do our best to answer
              every inquiry as quickly as possible.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Technical Support
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              If you experience problems while merging, splitting,
              rotating, or converting PDF files, please include details
              about your browser, operating system, and the issue you
              encountered. This helps us resolve problems faster.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Suggestions & Feedback
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              We welcome suggestions for improving PDFMaster. If there
              is a feature you would like to see added or an existing
              tool that could be improved, we'd love to hear from you.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Business Inquiries
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              For partnership opportunities, advertising inquiries, or
              other business-related questions, please contact us
              through our support email with the subject line
              "Business Inquiry."
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
                Are PDFMaster tools free to use?
              </h3>

              <p className="mt-2 text-gray-600 leading-7">
                Yes. Our core PDF tools are available online and can be
                used without creating an account.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Are my uploaded files secure?
              </h3>

              <p className="mt-2 text-gray-600 leading-7">
                Uploaded files are processed securely and are
                automatically removed after processing according to our
                privacy practices.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I report bugs?
              </h3>

              <p className="mt-2 text-gray-600 leading-7">
                Absolutely. We appreciate bug reports because they help
                us improve the platform for all users.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            Our Commitment
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            We are committed to providing reliable online PDF tools and
            excellent customer support. Every message we receive is
            valuable and helps us continue improving PDFMaster for
            users worldwide.
          </p>
        </section>
      </div>

      <p className="mt-12 text-center text-gray-500">
        Thank you for choosing <strong>PDFMaster</strong>. We appreciate
        your trust and look forward to helping you with your PDF
        document needs.
      </p>
    </div>
  );
}