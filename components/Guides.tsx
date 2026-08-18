import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
    "Open your file in the online PDF editor.",
    "Pick the Text tool from the top menu.",
    "Click anywhere on the page to add new text, or click existing text to start editing it.",
    "Drop in images — click and drag to move, resize, or rotate them.",
    "Fill out form fields and add a signature. Draw it, type it, or upload a photo of your handwritten one.",
    "Highlight text, add comments, or mark changes with strikethrough.",
    "Add or edit links to web pages or other spots in the document.",
    "Use find-and-replace for repeated words, or whiteout a section and add shapes.",
    "Click Apply, then download your edited file.",
];

const combineSteps = [
    "Open the Merge PDF tool.",
    "Upload your files — click to browse or just drag them in.",
    "Pick two or more PDFs from your device.",
    "Wait for the upload to finish.",
    "Drag files into the order you want them combined.",
    "Remove or rotate any pages first if you need to.",
    "Click Merge to combine everything into one document.",
    "Wait a moment for it to process.",
    "Download the result, or save it straight to your cloud storage.",
];

const pdfToJpgSteps = [
    "Open the PDF to JPG tool.",
    "Upload or drag in your PDF file.",
    "Choose all pages, or just the ones you need.",
    "Click Convert.",
    "Wait while each page turns into a JPG.",
    "Download the images one by one, or grab them all as a ZIP.",
];

const pageRemovalSteps = [
    "Open the Remove Pages tool and upload your PDF.",
    "Select the page or pages you want gone, then click Remove Pages.",
    "Download the updated file.",
];

const textEditingSteps = [
    "Open the PDF editor and upload your file.",
    "Select the Text tool from the toolbar.",
    "Click anywhere to add new text, or click existing text to edit it.",
    "Adjust font, size, color, and alignment as needed.",
    "Save your changes and download the edited PDF.",
];

const pdfCompressionSteps = [
    "Open the Compress PDF tool and upload your file.",
    "Pick a compression level, then click Compress.",
    "Download the smaller file.",
];

export default function HowToPdfGuides() {
    return (
        <div>
            <section className="bg-white py-20">
                <div className="mx-auto max-w-4xl px-6">

                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-gray-800">
                            How-To PDF Guides
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto">

                        <h4 className="text-4xl font-bold text-gray-800 mb-10">
                            How to edit PDF files
                        </h4>

                        <ul className="space-y-1">
                            {steps.map((step, index) => (
                                <li key={index} className="flex items-start gap-5">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-semibold">
                                        {index + 1}
                                    </div>

                                    <p className="text-xl leading-8 text-gray-700">
                                        {step}
                                    </p>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/pdf-editor"
                            className="mt-12 inline-flex items-center gap-3 text-2xl font-semibold text-emerald-500 hover:text-emerald-600"
                        >
                            Edit PDF files
                            <ArrowRight size={20} />
                        </Link>

                    </div>

                </div>
            </section>

            <section className="relative overflow-hidden bg-[#EAF4FF] py-20">
                <div className="absolute left-0 top-1/2 h-60 w-20 -translate-y-1/2 rounded-r-full bg-[#79B7F4]" />
                <div className="absolute right-0 top-16 h-72 w-28 rounded-l-[50px] bg-[#79B7F4]" />

                <div className="relative mx-auto max-w-2xl px-3">
                    <h4 className="mb-5 text-2xl font-bold text-gray-700">
                        How to convert a PDF to Word
                    </h4>

                    <ul className="space-y-1 text-1xl text-gray-800">
                        <li className="flex items-start gap-5">
                            <span className="mt-2 text-xl">▪</span>
                            <p>
                                Open your file with the{" "}
                                <span className="text-blue-500">PDF to Word converter</span>
                            </p>
                        </li>

                        <li className="flex items-start gap-5">
                            <span className="mt-2 text-xl">▪</span>
                            <p>
                                Click <strong>Convert</strong> and download the Word document
                            </p>
                        </li>
                    </ul>

                    <Link
                        href="/pdf-to-word"
                        className="mt-10 inline-flex items-center gap-3 text-2xl font-bold text-[#4094F7] transition hover:gap-5"
                    >
                        PDF to Word converter
                        <ArrowRight size={32} />
                    </Link>
                </div>
            </section>

            <section className="bg-white py-20">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="max-w-3xl mx-auto">

                        <h4 className="text-4xl font-bold text-gray-800 mb-10">
                            How to combine PDF files
                        </h4>

                        <ul className="space-y-1">
                            {combineSteps.map((step, index) => (
                                <li key={index} className="flex items-start gap-5">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-semibold">
                                        {index + 1}
                                    </div>

                                    <p className="text-xl leading-8 text-gray-700">
                                        {step}
                                    </p>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/merge-pdf"
                            className="mt-12 inline-flex items-center gap-3 text-2xl font-semibold text-emerald-500 hover:text-emerald-600"
                        >
                            Combine PDF files
                            <ArrowRight size={20} />
                        </Link>

                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-[#e6dec6] py-20">
                <div className="absolute left-0 top-1/2 h-60 w-20 -translate-y-1/2 rounded-r-full bg-[#eacf75]" />
                <div className="absolute right-0 top-16 h-72 w-28 rounded-l-[50px] bg-[#eacf75]" />

                <div className="relative mx-auto max-w-2xl px-3">
                    <h4 className="mb-5 text-2xl font-bold text-gray-700">
                        How to convert PDF to JPG
                    </h4>

                    <ul className="space-y-1">
                        {pdfToJpgSteps.map((step, index) => (
                            <li key={index} className="flex items-start gap-5">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-100 text-yellow-600 font-semibold">
                                    {index + 1}
                                </div>

                                <p className="text-xl leading-8 text-gray-700">
                                    {step}
                                </p>
                            </li>
                        ))}
                    </ul>

                    <Link
                        href="/pdf-to-image"
                        className="mt-10 inline-flex items-center gap-3 text-2xl font-bold text-[#4094F7] transition hover:gap-5"
                    >
                        PDF to image converter
                        <ArrowRight size={32} />
                    </Link>
                </div>
            </section>

            <section className="bg-white py-20">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="max-w-3xl mx-auto">

                        <h4 className="text-4xl font-bold text-gray-800 mb-10">
                            How to remove pages from a PDF
                        </h4>

                        <ul className="space-y-1">
                            {pageRemovalSteps.map((step, index) => (
                                <li key={index} className="flex items-start gap-5">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-semibold">
                                        {index + 1}
                                    </div>

                                    <p className="text-xl leading-8 text-gray-700">
                                        {step}
                                    </p>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/remove-pages"
                            className="mt-12 inline-flex items-center gap-3 text-2xl font-semibold text-emerald-500 hover:text-emerald-600"
                        >
                            Remove PDF pages
                            <ArrowRight size={20} />
                        </Link>

                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-[#daf8e9] py-20">
                <div className="absolute left-0 top-1/2 h-60 w-20 -translate-y-1/2 rounded-r-full bg-[#8ee79c]" />
                <div className="absolute right-0 top-16 h-72 w-28 rounded-l-[50px] bg-[#8ee79c]" />

                <div className="relative mx-auto max-w-2xl px-3">
                    <h4 className="mb-5 text-2xl font-bold text-gray-700">
                        How to edit a PDF on Mac
                    </h4>

                    <ul className="space-y-1 text-1xl text-gray-800">
                        <li className="flex items-start gap-5">
                            <span className="mt-2 text-xl">▪</span>
                            <p>
                                <span className="text-blue-500">Edit PDF files online</span>{" "}
                                directly in your Safari browser — no download needed
                            </p>
                        </li>

                        <li className="flex items-start gap-5">
                            <span className="mt-2 text-xl">▪</span>
                            <p>
                                Prefer working offline? Download the desktop app and edit
                                PDFs without an internet connection
                            </p>
                        </li>
                    </ul>

                    <Link
                        href="/desktop"
                        className="mt-10 inline-flex items-center gap-3 text-2xl font-bold text-[#4094F7] transition hover:gap-5"
                    >
                        Edit PDF offline with the desktop app
                        <ArrowRight size={22} />
                    </Link>
                </div>
            </section>

            <section className="bg-white py-20">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="max-w-3xl mx-auto">

                        <h4 className="text-4xl font-bold text-gray-800 mb-10">
                            How to type on a PDF
                        </h4>

                        <ul className="space-y-1">
                            {textEditingSteps.map((step, index) => (
                                <li key={index} className="flex items-start gap-5">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-semibold">
                                        {index + 1}
                                    </div>

                                    <p className="text-xl leading-8 text-gray-700">
                                        {step}
                                    </p>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/add-text"
                            className="mt-12 inline-flex items-center gap-3 text-2xl font-semibold text-emerald-500 hover:text-emerald-600"
                        >
                            Type on PDF files
                            <ArrowRight size={20} />
                        </Link>

                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-[#daf8e9] py-20">
                <div className="absolute left-0 top-1/2 h-60 w-20 -translate-y-1/2 rounded-r-full bg-[#8ee79c]" />
                <div className="absolute right-0 top-16 h-72 w-28 rounded-l-[50px] bg-[#8ee79c]" />

                <div className="relative mx-auto max-w-2xl px-3">
                    <h4 className="mb-5 text-2xl font-bold text-gray-700">
                        How to password protect a PDF
                    </h4>

                    <ul className="space-y-1 text-1xl text-gray-800">
                        <li className="flex items-start gap-5">
                            <span className="mt-2 text-xl">▪</span>
                            <p>
                                Open the{" "}
                                <span className="text-blue-500">Protect PDF tool</span>
                            </p>
                        </li>
                        <li className="flex items-start gap-5">
                            <span className="mt-2 text-xl">▪</span>
                            <p>Select your PDF file</p>
                        </li>
                        <li className="flex items-start gap-5">
                            <span className="mt-2 text-xl">▪</span>
                            <p>
                                Set a strong password — 12+ characters, mixing letters,
                                numbers, and symbols
                            </p>
                        </li>
                        <li className="flex items-start gap-5">
                            <span className="mt-2 text-xl">▪</span>
                            <p>
                                Optionally restrict printing, editing, or copying separately
                                from the password itself
                            </p>
                        </li>
                        <li className="flex items-start gap-5">
                            <span className="mt-2 text-xl">▪</span>
                            <p>Save and download your protected PDF</p>
                        </li>
                    </ul>

                    <Link
                        href="/protect-pdf"
                        className="mt-10 inline-flex items-center gap-3 text-2xl font-bold text-[#4094F7] transition hover:gap-5"
                    >
                        Protect PDF with a password
                        <ArrowRight size={22} />
                    </Link>
                </div>
            </section>

            <section className="bg-white py-20">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="max-w-3xl mx-auto">

                        <h4 className="text-2xl font-bold text-gray-800">
                            How to compress a PDF
                        </h4>
                        <h4 className="text-2xl font-bold text-gray-800 mb-10">
                            and reduce its file size
                        </h4>

                        <ul className="space-y-1">
                            {pdfCompressionSteps.map((step, index) => (
                                <li key={index} className="flex items-start gap-5">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-semibold">
                                        {index + 1}
                                    </div>

                                    <p className="text-xl leading-8 text-gray-700">
                                        {step}
                                    </p>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/compress-pdf"
                            className="mt-12 inline-flex items-center gap-3 text-2xl font-semibold text-emerald-500 hover:text-emerald-600"
                        >
                            Compress PDF online
                            <ArrowRight size={20} />
                        </Link>

                    </div>
                </div>
            </section>
        </div>
    );
}