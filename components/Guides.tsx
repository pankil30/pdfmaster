import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
    "Open a file in the Online PDF editor",
    "Click on the Text tool in the top menu",
    "Add text on the PDF page. Change text by clicking on existing text to start editing.",
    "Add images to the page. Click and drag to move, resize or rotate the image.",
    "Fill out PDF forms and add signatures. Draw, type or upload an image of your signature.",
    "Annotate PDF pages, highlight text and mark changes with strikethrough.",
    "Add new links to web URLs or pages in the document. Easily edit existing hyperlinks in the PDF.",
    "Find and replace all occurrences of words in a PDF. Whiteout parts of the page and add shapes.",
    "Click Apply changes and download the edited document."
];
const combineSteps = [
    "Open the PDF Combiner tool.",
    "Click the Upload button or drag and drop your PDF files.",
    "Select two or more PDF files from your device.",
    "Wait for the files to upload completely.",
    "Drag and drop the files to arrange them in the desired order.",
    "Remove or rotate pages if needed before combining.",
    "Click the Combine PDF button to merge the files into one document.",
    "Wait for the merging process to finish.",
    "Download the combined PDF or save it to your preferred cloud storage.",
];

const pdfToJpgSteps = [
    "Open the PDF to JPG converter tool.",
    "Upload or drag and drop your PDF file into the converter.",
    "Choose whether to convert all pages or only specific pages.",
    "Click the Convert button to start the conversion process.",
    "Wait while the PDF pages are converted into JPG images.",
    "Download the JPG images individually or as a ZIP file.",
];

const pageRemovalSteps = [
    "Open the PDF Page Remover tool and upload your PDF file.",
    "Select the page or pages you want to delete, then click the Remove Pages button.",
    "Download the updated PDF with the selected pages removed.",
];

const textEditingSteps = [
    "Open the PDF Editor tool and upload your PDF file.",
    "Select the Text tool from the toolbar.",
    "Click anywhere on the PDF to add new text or click existing text to edit it.",
    "Adjust the font, size, color, and alignment as needed.",
    "Save your changes and download the edited PDF.",
];

const pdfCompressionSteps = [
    "Open the PDF Compressor tool and upload your PDF file.",
    "Choose your preferred compression level, then click the Compress PDF button.",
    "Download the compressed PDF with a reduced file size.",
];
export default function HowToPdfGuides() {
    return (
        <div>
            
                     <section className="bg-white py-20">
                <div className="mx-auto max-w-4xl px-6">

                    {/* Heading */}
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-gray-400">
                            How-To PDF Guides
                        </h2>
                    </div>

                    {/* Content */}
                    <div className="max-w-3xl mx-auto">

                        <h4 className="text-4xl font-bold text-gray-800 mb-10">
                            How to edit PDF files
                        </h4>

                        <ul className="space-y-1">
                            {steps.map((step, index) => (
                                <li key={index} className="flex items-start gap-5">
                                    <div className="flex h-6 w-6   items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-semibold">
                                        {index + 1}
                                    </div>

                                    <p className="text-xl leading-8 text-gray-700">
                                        {step}
                                    </p>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/edit-pdf"
                            className="mt-12 inline-flex items-center gap-3 text-2xl font-semibold text-emerald-500 hover:text-emerald-600"
                        >
                            Edit PDF files
                            <ArrowRight size={20} />
                        </Link>

                    </div>

                </div>



            </section>
            <section className="relative overflow-hidden bg-[#EAF4FF] py-20">
                {/* Left Shape */}
                <div className="absolute left-0 top-1/2 h-60 w-20 -translate-y-1/2 rounded-r-full bg-[#79B7F4]" />

                {/* Right Shape */}
                <div className="absolute right-0 top-16 h-72 w-28 rounded-l-[50px] bg-[#79B7F4]" />

                <div className="relative mx-auto max-w-2xl px-3">
                    <h4 className="mb-5 text-2xl font-bold text-gray-700">
                        How to convert a PDF to Word
                    </h4>

                    <ul className="space-y-1 text-1xl text-gray-800">
                        <li className="flex items-start gap-5">
                            <span className="mt-2 text-xl">▪</span>

                            <p>
                                Open your document with the{" "}
                                <span className="text-blue-500">
                                    PDF to Word converter
                                </span>
                            </p>
                        </li>

                        <li className="flex items-start gap-5">
                            <span className="mt-2 text-xl">▪</span>

                            <p>
                                Click <strong>Convert</strong> and download a Word document
                            </p>
                        </li>
                    </ul>

                    <Link
                        href="/pdf-to-word"
                        className="mt-10 inline-flex items-center gap-3 text-2xl font-bold text-[#4094F7] transition hover:gap-5"
                    >
                        PDF to DOC converter
                        <ArrowRight size={32} />
                    </Link>
                </div>
            </section>
            <section className="bg-white py-20">
                <div className="mx-auto max-w-4xl px-6">


                    {/* Content */}
                    <div className="max-w-3xl mx-auto">

                        <h4 className="text-4xl font-bold text-gray-400 mb-10">
                            How to combine PDF files
                        </h4>

                        <ul className="space-y-1">
                            {combineSteps.map((step, index) => (
                                <li key={index} className="flex items-start gap-5">
                                    <div className="flex h-6 w-6   items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-semibold">
                                        {index + 1}
                                    </div>

                                    <p className="text-xl leading-8 text-gray-700">
                                        {step}
                                    </p>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/combine-pdf"
                            className="mt-12 inline-flex items-center gap-3 text-2xl font-semibold text-emerald-500 hover:text-emerald-600"
                        >
                            Combine PDF files
                            <ArrowRight size={20} />
                        </Link>

                    </div>

                </div>



            </section>
            <section className="relative overflow-hidden bg-[#e6dec6] py-20">
                {/* Left Shape */}
                <div className="absolute left-0 top-1/2 h-60 w-20 -translate-y-1/2 rounded-r-full bg-[#eacf75]" />

                {/* Right Shape */}
                <div className="absolute right-0 top-16 h-72 w-28 rounded-l-[50px] bg-[#eacf75]" />

                <div className="relative mx-auto max-w-2xl px-3">
                    <h4 className="mb-5 text-2xl font-bold text-gray-700">
                        How to convert PDF to JPG
                    </h4>

                    <ul className="space-y-1">
                        {pdfToJpgSteps.map((step, index) => (
                            <li key={index} className="flex items-start gap-5">
                                <div className="flex h-6 w-6   items-center justify-center rounded-full bg-yellow-100 text-yellow-600 font-semibold">
                                    {index + 1}
                                </div>

                                <p className="text-xl leading-8 text-gray-700">
                                    {step}
                                </p>
                            </li>
                        ))}
                    </ul>

                    <Link
                        href="/pdf-to-word"
                        className="mt-10 inline-flex items-center gap-3 text-2xl font-bold text-[#4094F7] transition hover:gap-5"
                    >
                        PDF to image converter
                        <ArrowRight size={32} />
                    </Link>
                </div>
            </section>
            <section className="bg-white py-20">
                <div className="mx-auto max-w-4xl px-6">


                    {/* Content */}
                    <div className="max-w-3xl mx-auto">

                        <h4 className="text-4xl font-bold text-gray-400 mb-10">
                            How to combine PDF files
                        </h4>

                        <ul className="space-y-1">
                            {pageRemovalSteps.map((step, index) => (
                                <li key={index} className="flex items-start gap-5">
                                    <div className="flex h-6 w-6   items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-semibold">
                                        {index + 1}
                                    </div>

                                    <p className="text-xl leading-8 text-gray-700">
                                        {step}
                                    </p>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/combine-pdf"
                            className="mt-12 inline-flex items-center gap-3 text-2xl font-semibold text-emerald-500 hover:text-emerald-600"
                        >
                            Remove PDF pages
                            <ArrowRight size={20} />
                        </Link>

                    </div>

                </div>



            </section>

            <section className="relative overflow-hidden bg-[#daf8e9] py-20">
                {/* Left Shape */}
                <div className="absolute left-0 top-1/2 h-60 w-20 -translate-y-1/2 rounded-r-full bg-[#8ee79c]" />

                {/* Right Shape */}
                <div className="absolute right-0 top-16 h-72 w-28 rounded-l-[50px] bg-[#8ee79c]" />

                <div className="relative mx-auto max-w-2xl px-3">
                    <h4 className="mb-5 text-2xl font-bold text-gray-700">
                        How to edit PDF on Mac

                    </h4>

                    <ul className="space-y-1 text-1xl text-gray-800">
                        <li className="flex items-start gap-5">
                            <span className="mt-2 text-xl">▪</span>

                            <p>
                                <span className="text-blue-500">
                                    Edit PDF files online
                                </span>
                                {" "} in your Safari browser

                            </p>
                        </li>

                        <li className="flex items-start gap-5">
                            <span className="mt-2 text-xl">▪</span>

                            <p>
                                Download and install <strong>Sejda Desktop </strong> and edit PDF documents offline
                            </p>
                        </li>
                    </ul>

                    <Link
                        href="/pdf-to-word"
                        className="mt-10 inline-flex items-center gap-3 text-2xl font-bold text-[#4094F7] transition hover:gap-5"
                    >
                        Edit PDF offline with Sejda Desktop for Mac
                        <ArrowRight size={22} />
                    </Link>
                </div>
            </section>
            <section className="bg-white py-20">
                <div className="mx-auto max-w-4xl px-6">


                    {/* Content */}
                    <div className="max-w-3xl mx-auto">

                        <h4 className="text-4xl font-bold text-gray-400 mb-10">
                            How to type on a PDF
                        </h4>

                        <ul className="space-y-1">
                            {textEditingSteps.map((step, index) => (
                                <li key={index} className="flex items-start gap-5">
                                    <div className="flex h-6 w-6   items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-semibold">
                                        {index + 1}
                                    </div>

                                    <p className="text-xl leading-8 text-gray-700">
                                        {step}
                                    </p>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/combine-pdf"
                            className="mt-12 inline-flex items-center gap-3 text-2xl font-semibold text-emerald-500 hover:text-emerald-600"
                        >
                            Type on PDF files
                            <ArrowRight size={20} />
                        </Link>

                    </div>

                </div>
            </section>

            <section className="relative overflow-hidden bg-[#daf8e9] py-20">
                {/* Left Shape */}
                <div className="absolute left-0 top-1/2 h-60 w-20 -translate-y-1/2 rounded-r-full bg-[#8ee79c]" />

                {/* Right Shape */}
                <div className="absolute right-0 top-16 h-72 w-28 rounded-l-[50px] bg-[#8ee79c]" />

                <div className="relative mx-auto max-w-2xl px-3">
                    <h4 className="mb-5 text-2xl font-bold text-gray-700">
                        How to password protect a PDF

                    </h4>

                    <ul className="space-y-1 text-1xl text-gray-800">
                        <li className="flex items-start gap-5">
                            <span className="mt-2 text-2x1">▪</span>

                            <p>

                                Open the {""}
                                <span className="text-blue-500">
                                    Encrypt and Protect PDF tool
                                </span>
                            </p>
                        </li>
                        <li className="flex items-start gap-5">
                            <span className="mt-2 text-xl">▪</span>

                            <p>
                                Select your PDF document
                            </p>
                        </li>

                        <li className="flex items-start gap-5">
                            <span className="mt-2 text-xl">▪</span>

                            <p>
                                Choose a really strong password (16 characters or more recommended)
                            </p>
                        </li>
                        <li className="flex items-start gap-5">
                            <span className="mt-2 text-xl">▪</span>

                            <p>
                                Optionally, select a set of restrictions for your document: modifying, printing, copying text and graphics, etc
                            </p>
                        </li>

                        <li className="flex items-start gap-5">
                            <span className="mt-2 text-xl">▪</span>

                            <p>
                                Save and download your protected PDF
                            </p>
                        </li>
                    </ul>

                    <Link
                        href="/pdf-to-word"
                        className="mt-10 inline-flex items-center gap-3 text-2xl font-bold text-[#4094F7] transition hover:gap-5"
                    >
                        Protect PDF with password and restrictions
                        <ArrowRight size={22} />
                    </Link>
                </div>
            </section>

            <section className="bg-white py-20">
                <div className="mx-auto max-w-4xl px-6">


                    {/* Content */}
                    <div className="max-w-3xl mx-auto">

                        <h4 className="text-2xl font-bold text-gray-400 ">
                            How to compress a PDF
                        </h4>
                        <h4 className="text-2xl font-bold text-gray-400 mb-10">
                            How to reduce PDF file size
                        </h4>


                        <ul className="space-y-1">
                            {pdfCompressionSteps.map((step, index) => (
                                <li key={index} className="flex items-start gap-5">
                                    <div className="flex h-6 w-6   items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-semibold">
                                        {index + 1}
                                    </div>

                                    <p className="text-xl leading-8 text-gray-700">
                                        {step}
                                    </p>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/combine-pdf"
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


