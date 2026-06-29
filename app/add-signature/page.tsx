"use client";

import { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { PDFDocument } from "pdf-lib";
import DraggableSignature from "@/components/DraggableSignature";
import dynamic from "next/dynamic";


const PdfViewer = dynamic(
    () => import("@/components/PdfViewer"),
    {
        ssr: false,
        loading: () => <p>Loading PDF...</p>,
    }
);

export default function AddSignaturePage() {
    const sigCanvas = useRef<SignatureCanvas>(null);

    const [pdfFile, setPdfFile] = useState<File | null>(null);
    const [signature, setSignature] = useState("");

    const [position, setPosition] = useState({
        x: 80,
        y: 80,
    });


    const [size, setSize] = useState({
        width: 180,
        height: 80,
    });
    const clearSignature = () => {
        sigCanvas.current?.clear();
    };

    const saveSignature = () => {
        if (!sigCanvas.current) return;

        const image = sigCanvas.current
            .getTrimmedCanvas()
            .toDataURL("image/png");

        setSignature(image);
    };



    const handlePDF = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.length) return;

        setPdfFile(e.target.files[0]);
    };

    async function signPDF() {
        if (!pdfFile) {
            alert("Upload PDF first");
            return;
        }

        if (!signature) {
            alert("Draw Signature First");
            return;
        }

        const existingPdfBytes = await pdfFile.arrayBuffer();

        const pdfDoc = await PDFDocument.load(existingPdfBytes);

        const pages = pdfDoc.getPages();
        const firstPage = pages[0];

        const pngImage = await pdfDoc.embedPng(signature);

        const pngDims = pngImage.scale(0.5);

        firstPage.drawImage(pngImage, {
            x: 100,
            y: 100,
            width: pngDims.width,
            height: pngDims.height,
        });

        const pdfBytes = await pdfDoc.save();

        const arrayBuffer = new ArrayBuffer(pdfBytes.length);
        const view = new Uint8Array(arrayBuffer);

        view.set(pdfBytes);

        const blob = new Blob([arrayBuffer], {
            type: "application/pdf",
        });

        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "signed.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        URL.revokeObjectURL(url);
    }

    return (
        <div className="mx-auto max-w-5xl p-10">

            <h1 className="mb-8 text-4xl font-bold">
                Add Signature To PDF
            </h1>

            <input
                type="file"
                accept=".pdf"
                onChange={handlePDF}
                className="mb-10"
            />


            <div className="rounded-xl border bg-white p-5">

                <h2 className="mb-4 text-xl font-semibold">
                    Draw Your Signature
                </h2>

                <SignatureCanvas
                    ref={sigCanvas}
                    penColor="black"
                    canvasProps={{
                        width: 700,
                        height: 220,
                        className: "border rounded-lg w-full",
                    }}
                />

                <div className="mt-5 flex gap-4">

                    <button
                        onClick={clearSignature}
                        className="rounded bg-red-500 px-5 py-2 text-white"
                    >
                        Clear
                    </button>

                    <button
                        onClick={saveSignature}
                        className="rounded bg-blue-600 px-5 py-2 text-white"
                    >
                        Save Signature
                    </button>

                    <button
                        onClick={signPDF}
                        className="rounded bg-green-600 px-5 py-2 text-white"
                    >
                        Download Signed PDF
                    </button>

                </div>

            </div>
            <div className="relative mt-10 inline-block">
                {pdfFile && <PdfViewer file={pdfFile} />}

                {signature && (
                    <DraggableSignature
                        signature={signature}
                        position={position}
                        size={size}
                        setPosition={setPosition}
                        setSize={setSize}
                    />
                )}
            </div>
            {/* ================= About Add Signature to PDF ================= */}

            <section className="mt-12 rounded-2xl border bg-white p-8 shadow-sm">
                <h2 className="mb-5 text-3xl font-bold">
                    Add Signature to PDF Online
                </h2>

                <p className="mb-5 leading-8 text-gray-700">
                    Sign PDF documents online using your own handwritten digital signature.
                    Draw your signature directly in the browser, place it anywhere on the PDF,
                    and download the signed document in just a few clicks. No printing,
                    scanning, or additional software is required.
                </p>

                <p className="mb-5 leading-8 text-gray-700">
                    Whether you need to sign contracts, agreements, invoices, application
                    forms, consent letters, or business documents, this free PDF signature
                    tool provides a fast and convenient solution while preserving your
                    document's quality.
                </p>

                <p className="leading-8 text-gray-700">
                    Everything works directly in your browser and is compatible with Windows,
                    macOS, Linux, Android, and iPhone.
                </p>
            </section>

            {/* ================= How It Works ================= */}

            <section className="mt-12 rounded-2xl border bg-white p-8 shadow-sm">

                <h2 className="mb-6 text-3xl font-bold">
                    How to Sign a PDF
                </h2>

                <div className="grid gap-5 md:grid-cols-2">

                    <div className="rounded-xl border p-5">
                        <h3 className="mb-2 text-lg font-semibold">
                            Step 1
                        </h3>

                        <p className="text-gray-600">
                            Upload your PDF document.
                        </p>
                    </div>

                    <div className="rounded-xl border p-5">
                        <h3 className="mb-2 text-lg font-semibold">
                            Step 2
                        </h3>

                        <p className="text-gray-600">
                            Draw your handwritten signature using your mouse, touchpad, or touchscreen.
                        </p>
                    </div>

                    <div className="rounded-xl border p-5">
                        <h3 className="mb-2 text-lg font-semibold">
                            Step 3
                        </h3>

                        <p className="text-gray-600">
                            Move and position the signature where you want it to appear.
                        </p>
                    </div>

                    <div className="rounded-xl border p-5">
                        <h3 className="mb-2 text-lg font-semibold">
                            Step 4
                        </h3>

                        <p className="text-gray-600">
                            Download your signed PDF instantly.
                        </p>
                    </div>

                </div>

            </section>

            {/* ================= Features ================= */}

            <section className="mt-12 rounded-2xl border bg-white p-8 shadow-sm">

                <h2 className="mb-6 text-3xl font-bold">
                    Features
                </h2>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                    <div className="rounded-lg border p-4">
                        ✅ Draw Digital Signature
                    </div>

                    <div className="rounded-lg border p-4">
                        ✅ Drag & Position Signature
                    </div>

                    <div className="rounded-lg border p-4">
                        ✅ Resize Signature
                    </div>

                    <div className="rounded-lg border p-4">
                        ✅ Preserve PDF Quality
                    </div>

                    <div className="rounded-lg border p-4">
                        ✅ Browser Based
                    </div>

                    <div className="rounded-lg border p-4">
                        ✅ Mobile Friendly
                    </div>

                    <div className="rounded-lg border p-4">
                        ✅ Fast Processing
                    </div>

                    <div className="rounded-lg border p-4">
                        ✅ Secure File Handling
                    </div>

                    <div className="rounded-lg border p-4">
                        ✅ Free to Use
                    </div>

                </div>

            </section>

            {/* ================= Common Uses ================= */}

            <section className="mt-12 rounded-2xl border bg-white p-8 shadow-sm">

                <h2 className="mb-5 text-3xl font-bold">
                    Common Uses
                </h2>

                <p className="mb-5 leading-8 text-gray-700">
                    Adding a digital signature is useful for contracts, legal agreements,
                    employment forms, invoices, purchase orders, rental documents, permission
                    letters, business proposals, educational documents, and many other PDF files.
                </p>

                <p className="leading-8 text-gray-700">
                    Instead of printing and scanning paperwork, you can sign documents digitally
                    and share them immediately, saving both time and paper.
                </p>

            </section>

            {/* ================= Benefits ================= */}

            <section className="mt-12 rounded-2xl border bg-white p-8 shadow-sm">

                <h2 className="mb-5 text-3xl font-bold">
                    Why Use Our PDF Signature Tool?
                </h2>

                <p className="mb-5 leading-8 text-gray-700">
                    Our online signature tool allows you to create a handwritten signature without
                    installing desktop software. Your signature can be positioned exactly where it
                    is needed, making documents look professional and ready for sharing.
                </p>

                <p className="leading-8 text-gray-700">
                    The original formatting, fonts, images, and page layout remain unchanged after
                    adding your signature.
                </p>

            </section>

            {/* ================= Privacy ================= */}

            <section className="mt-12 rounded-2xl bg-blue-50 p-8">

                <h2 className="mb-4 text-3xl font-bold">
                    Privacy & Security
                </h2>

                <p className="leading-8 text-gray-700">
                    Your documents and signatures are processed securely. Uploaded PDF files are
                    not permanently stored, helping protect your confidential information and
                    personal documents.
                </p>

            </section>

            {/* ================= FAQ ================= */}

            <section className="mt-12 rounded-2xl border bg-white p-8 shadow-sm">

                <h2 className="mb-6 text-3xl font-bold">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-6">

                    <div>
                        <h3 className="text-lg font-semibold">
                            Is this PDF signature tool free?
                        </h3>

                        <p className="mt-2 text-gray-600">
                            Yes. You can add a handwritten signature to PDF documents online free of
                            charge.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold">
                            Can I move my signature?
                        </h3>

                        <p className="mt-2 text-gray-600">
                            Yes. After saving your signature, you can drag and reposition it before
                            downloading the final PDF.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold">
                            Will my PDF formatting change?
                        </h3>

                        <p className="mt-2 text-gray-600">
                            No. Your original document layout, fonts, images, and formatting remain
                            unchanged.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold">
                            Can I use this on mobile devices?
                        </h3>

                        <p className="mt-2 text-gray-600">
                            Yes. The tool works on Android phones, iPhones, tablets, and desktop
                            computers.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold">
                            Are my documents secure?
                        </h3>

                        <p className="mt-2 text-gray-600">
                            Yes. Files are processed securely and are not permanently stored after
                            processing.
                        </p>
                    </div>

                </div>

            </section>
        </div>
    );
}