import Script from "next/script";

const faqs = [
  {
    question: "Are PDFMaster's tools actually free?",
    answer:
      "Yes — merge, split, compress, convert, and every other tool on the site are free with no hidden paywall or watermark added to your file.",
  },
  {
    question: "What happens to my files after I upload them?",
    answer:
      "Your file is used only to run the tool you selected, then automatically deleted from our servers shortly after processing finishes. We don't open, review, or keep uploaded documents.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No. Every tool works the moment you land on the page — no email, no signup form, no login required.",
  },
  {
    question: "Does PDFMaster work on phones and tablets?",
    answer:
      "Yes. All tools run in the browser and work on desktop, tablet, and mobile — nothing to install on any device.",
  },
  {
    question: "Is there a file size limit?",
    answer:
      "Most tools support files up to 100MB, which covers the vast majority of everyday documents. Very large scanned files may take longer to process depending on your connection.",
  },
  {
    question: "Can I use PDFMaster tools more than once a day?",
    answer:
      "Yes — there's no daily cap on how many times you can merge, split, compress, or convert files.",
  },
  {
    question: "Will compressing or converting my PDF reduce its quality?",
    answer:
      "Compression involves a quality trade-off you control via the compression level you choose. Operations like merging, splitting, rotating, or removing pages don't touch image or text quality at all — they only rearrange existing content.",
  },
  {
    question: "What browsers does PDFMaster support?",
    answer:
      "All modern browsers — Chrome, Firefox, Safari, and Edge. For the smoothest experience with large files, we recommend using the latest version of your browser.",
  },
];

export default function FaqSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-20 bg-gray-50">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-3xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border bg-white p-6"
            >
              <h3 className="font-semibold">{faq.question}</h3>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}