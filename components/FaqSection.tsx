const faqs = [
  {
    question: "Are PDF tools free to use?",
    answer: "Yes, all PDFMaster tools are completely free.",
  },
  {
    question: "Are my files secure?",
    answer: "Your files are processed temporarily and are not permanently stored.",
  },
  {
    question: "Do I need to create an account?",
    answer: "No, you can use all tools without registration.",
  },
  {
    question: "Can I use PDFMaster on mobile?",
    answer: "Yes, PDFMaster works on desktop, tablet, and mobile devices.",
  },
];

export default function FaqSection() {
  return (
    <section className="py-20 bg-gray-50">
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
              <h3 className="font-semibold">
                {faq.question}
              </h3>

              <p className="mt-2 text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}