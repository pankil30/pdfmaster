import Image from "next/image";
import Link from "next/link";
import {  Users } from "lucide-react";
import {
  Download,
  Monitor,
  Apple,
  Laptop,
  Check,
  User,
} from "lucide-react";

const pdfTasks = [
  {
    id: 1,
    image: "/ac.jpg",
    title: "Merge files into one PDF",
    description:
      "Visually combine and reorder pages, merge multiple PDF files. Alternate and mix odd and even page from separate files.",
  },
  {
    id: 2,
    image: "/ab.jpg",
    title: "Split PDF files",
    description:
      "Split documents by pages. Extract separate documents. Split by size, bookmarks or text occurrences. Divide two page layout scans.",
  },
  {
    id: 3,
    image: "/ad.jpg",
    title: "Convert PDF files to Office and image formats",
    description:
      "Convert PDF files to Word, Excel and to image. Convert images to PDF file.",
  },
  {
    id: 4,
    image: "/aa.jpg",
    title: "Compress PDF",
    description:
      "Reduce the size of PDF files. Optimize images and other resources.",
  },
  {
    id: 5,
    image: "/ae.jpg",
    title: "Edit PDF files",
    description:
      "Add, edit or move text in your PDF. Change the font type, size and style. Insert, reorder, move or delete pages. Add signature, highlight text and shapes.",
  },
  {
    id: 6,
    image: "/af.jpg",
    title: "Apply PDF passwords and restrictions",
    description:
      "Add copy and edit protection to a PDF. Include a password to protect your PDF from unapproved access.",
  },
];

const faqs = [
  {
    question: "How can I cancel my subscription?",
    answer: [
      "To cancel a recurring subscription, simply visit your account page and click 'Stop auto-renewal'. You can also contact our support team by email.",
      "The Week Pass is a one-time purchase and does not automatically renew. It expires after 7 days.",
    ],
  },
  {
    question: "What is the difference between PDFMaster Desktop and PDFMaster Web?",
    answer: [
      "PDFMaster Web runs in your browser and securely processes files online.",
      "PDFMaster Desktop installs on your computer and processes files locally without uploading them.",
    ],
  },
  {
    question: "Will my subscription be automatically renewed?",
    answer: [
      "The Week Pass is a one-time purchase and does not renew.",
      "Annual subscriptions automatically renew at the end of each billing cycle unless cancelled.",
    ],
  },
  {
    question: "Does PDFMaster Desktop process files locally?",
    answer: [
      "Yes. Files are processed directly on your computer and never uploaded to our servers.",
    ],
  },
  {
    question: "Can I use PDFMaster Desktop on both my laptop and desktop?",
    answer: [
      "Yes. One license can be used on both your laptop and desktop, provided you are the only user.",
    ],
  },
  {
    question: "Do you offer a lifetime license?",
    answer: [
      "Currently we offer weekly and annual plans. Enterprise licensing is also available for businesses.",
    ],
  },
];


const steps = [
  "Open a file in the Linux version of PDFMaster Desktop or use the Online PDF Editor.",
  "Click on the Text tool in the top menu.",
  "Change text by clicking existing text to start editing. Add new text anywhere on the PDF.",
  "Add images to the page. Drag to move, resize or rotate images.",
  "Fill out PDF forms and add signatures. Draw, type or upload your signature.",
  "Annotate PDF pages, highlight text and mark changes with strikethrough.",
  "Add links to websites or pages in the document. Edit existing hyperlinks easily.",
  "Find and replace text, whiteout content and insert shapes.",
  "Click Apply Changes and save the edited PDF.",
];

export default function DesktopPage() {
  return (
    <main className="overflow-hidden bg-white">

      <section className="relative">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-16 px-6 py-24 lg:flex-row">

          {/* Left */}

          <div className="max-w-xl">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Desktop Application
            </span>

            <h1 className="mt-6 text-5xl font-bold text-gray-900 lg:text-6xl">
              PDFMaster Desktop
            </h1>

            <p className="mt-6 text-xl leading-9 text-gray-600">
              Fast, secure and powerful PDF software for editing,
              converting, compressing and signing PDF documents offline.
            </p>

            <Link
              href="/download"
              className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-5 text-xl font-semibold text-white transition hover:bg-blue-700"
            >
              <Download size={28} />
              Free Download
            </Link>

            <div className="mt-10 flex flex-wrap gap-6 text-gray-600">

              <div className="flex items-center gap-2">
                <Monitor size={22} />
                Windows
              </div>

              <div className="flex items-center gap-2">
                <Apple size={22} />
                macOS
              </div>

              <div className="flex items-center gap-2">
                <Laptop size={22} />
                Linux
              </div>

            </div>

          </div>

          {/* Right */}

          <div>

            <Image
              src="/ah.jpg" // put your image in /public
              alt="Desktop Software"
              width={700}
              height={600}
              priority
            />

          </div>

        </div>

        {/* Bottom Curve */}

        <div className="h-36 rounded-t-[100%] bg-gray-100"></div>

      </section>
      {/* Pricing Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full">
          <svg
            viewBox="0 0 1440 160"
            className="h-32 w-full fill-gray-100"
            preserveAspectRatio="none"
          >
            <path d="M0,64 C280,0 700,0 1440,64 L1440,0 L0,0 Z" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-6xl px-6">

          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              PDFMaster is Free to Use
            </h2>

            <p className="mt-3 text-xl text-gray-500">
              Enjoy powerful PDF tools with generous free limits.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">

            {/* Free Plan */}
            <div className="rounded-3xl border border-blue-100 bg-white p-10 shadow-lg">

              <h3 className="text-3xl font-bold text-blue-600">
                FREE
              </h3>

              <ul className="mt-8 space-y-5 text-lg">

                <li>✅ 10 PDF tasks per day</li>

                <li>✅ Files up to 100 MB</li>

                <li>✅ Merge, Split & Compress PDFs</li>

                <li>✅ Convert PDF to Word, JPG & PNG</li>

                <li>✅ OCR up to 20 pages</li>

                <li>✅ Add Watermark & Signature</li>

                <li>✅ Secure processing</li>

              </ul>

            </div>

            {/* Premium */}
            <div className="rounded-3xl border border-green-100 bg-green-50 p-10 shadow-lg">

              <h3 className="text-3xl font-bold text-green-600">
                PREMIUM
              </h3>

              <ul className="mt-8 space-y-5 text-lg">

                <li>🚀 Unlimited PDF tasks</li>

                <li>🚀 Unlimited file size</li>

                <li>🚀 Batch PDF processing</li>

                <li>🚀 Unlimited OCR pages</li>

                <li>🚀 Faster processing</li>

                <li>🚀 Priority support</li>

                <li>🚀 No waiting limits</li>

              </ul>

            </div>

          </div>

          {/* Bottom CTA */}

          <div className="mt-20 text-center">

            <h3 className="text-3xl font-bold text-gray-900">
              Start Editing PDFs Today
            </h3>

            <p className="mt-3 text-gray-600">
              Upload your PDF and use our free online tools instantly.
            </p>

            <a
              href="/pdf-editor"
              className="mt-8 inline-flex rounded-xl bg-blue-600 px-10 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
            >
              Edit PDF Now →
            </a>

          </div>

        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-12">
          We help with your PDF tasks
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {pdfTasks.map((task) => (
            <div
              key={task.id}
              className="flex flex-col items-center text-center gap-4"
            >
              {/* Image */}
              <div className="w-24 h-20 relative">
               <div className="flex justify-center">
  <Image
    src={task.image}
    alt={task.title}
    width={110}
    height={110}
    className="object-contain"
  />
</div>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-gray-800">{task.title}</h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {task.description}
              </p>
            </div>
          ))}
        </div>
      </section>
        <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Image */}
          <div className="flex justify-center">
            <Image
              src="/ag.jpg" // put your image in /public
              alt="Enterprise"
              width={260}
              height={220}
              className="object-contain"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Easy to adopt and deploy in the enterprise
            </h2>

            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-xl text-gray-700">
                <Check className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <span>
                  Pre-activated deployments with a volume license key
                </span>
              </li>

              <li className="flex items-start gap-3 text-xl text-gray-700">
                <Check className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <span>
                  Citrix™ and Terminal Services™ compatible
                </span>
              </li>

              <li className="flex items-start gap-3 text-xl text-gray-700">
                <Check className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <span>
                  Save costs — volume discounts start from 2 licenses (up to
                  60% off)
                </span>
              </li>
            </ul>

            <Link
              href="/enterprise"
              className="inline-flex mt-10 rounded-lg bg-emerald-500 px-8 py-4 text-lg font-semibold text-white hover:bg-emerald-600 transition"
            >
              View enterprise pricing
            </Link>
          </div>
        </div>
      </div>
    </section>

     <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900">
            Find the perfect version for you
          </h2>

          <p className="mt-5 text-xl text-gray-500">
            PDFMaster Desktop is free to use with daily limits. Upgrade for
            PRO features and unlimited use.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-14 flex justify-center">
          <div className="inline-flex rounded-xl border bg-white shadow-sm overflow-hidden">
            <button className="flex items-center gap-2 px-10 py-4 bg-white border-b-2 border-emerald-500 text-emerald-600 font-semibold">
              <User size={20} />
              Personal
            </button>

            <button className="flex items-center gap-2 px-10 py-4 text-gray-600 hover:bg-gray-50">
              <Users size={20} />
              Teams & Volume discounts
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2 max-w-4xl mx-auto">

          {/* Week Pass */}
          <div className="relative rounded-3xl border-2 border-emerald-500 bg-white p-10 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">

            <h3 className="text-4xl font-bold text-center text-gray-900">
              Week Pass
            </h3>

            <div className="mt-8 text-center">
              <span className="text-2xl font-semibold">$</span>
              <span className="text-6xl font-bold">7</span>
              <span className="text-3xl font-bold">.95</span>

              <p className="mt-2 text-gray-500">
                for 7 days access
              </p>
            </div>

            <div className="mt-8 text-center text-gray-500">
              One-time payment
            </div>

            <button className="mt-8 w-full rounded-xl bg-emerald-500 py-4 text-lg font-semibold text-white hover:bg-emerald-600">
              Select
            </button>

            <hr className="my-10" />

            <ul className="space-y-4">
              {[
                "Latest features",
                "7 days access to Desktop",
                "7 days access to Web",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <Check className="text-emerald-500" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Annual */}
          <div className="rounded-3xl bg-white p-10 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">

            <h3 className="text-4xl font-bold text-center text-gray-900">
              Annual
            </h3>

            <div className="mt-8 text-center">
              <span className="text-2xl font-semibold">$</span>
              <span className="text-6xl font-bold">63</span>

              <p className="mt-2 text-gray-500">
                per year
              </p>
            </div>

            <div className="mt-8 text-center text-gray-500">
              Recurring billing
            </div>

            <button className="mt-8 w-full rounded-xl border border-emerald-500 py-4 text-lg font-semibold text-emerald-600 hover:bg-emerald-50">
              Select
            </button>

            <hr className="my-10" />

            <ul className="space-y-4">
              {[
                "Latest features",
                "1 year access to Desktop",
                "1 year access to Web",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <Check className="text-emerald-500" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <p className="mt-12 text-center text-gray-500">
          Prices are shown in USD.
        </p>
      </div>
    </section>
     <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900">
            Common Questions
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-x-20 gap-y-14">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="text-3xl font-bold text-gray-900 mb-5">
                {faq.question}
              </h3>

              <div className="space-y-4">
                {faq.answer.map((text, i) => (
                  <p
                    key={i}
                    className="text-lg leading-8 text-gray-600"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-slate-100 py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-gray-900">
          Ubuntu Linux Chromebook PDF Editor
        </h2>

        <p className="mt-3 text-1xl text-gray-500">
          How to Edit PDF on Ubuntu Linux or Chromebook
        </p>

        <ol className="mt-12 space-y-7">
          {steps.map((step, index) => (
            <li
              key={index}
              className="flex items-start gap-6"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-lg font-bold text-white shrink-0">
                {index + 1}
              </span>

              <p className="text-lg leading-6 text-gray-700">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
    </main>
  );
}