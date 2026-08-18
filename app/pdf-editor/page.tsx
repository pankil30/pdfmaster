// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function HowToEditPdf() {
//   const sections = [{
//     id: 1,
//     title: "Upload Your PDF",
//     description:
//       "Upload your PDF securely using the Upload button or drag and drop your document.",
//     note:
//       "Files are encrypted during upload and automatically removed after processing.",
//     image: "/a.png",
//   },
//   {
//     id: 2,
//     title: "Add Text",
//     description:
//       "Select the Text tool and click anywhere on the document to insert new text.",
//     image: "/c.png",
//   },
//   {
//     id: 3,
//     title: "Edit Existing Text",
//     description:
//       "Click any editable text to change the font, size, color, bold or italic formatting.",
//     image: "/d.png",
//   },
//   {
//     id: 4,
//     title: "Insert Images",
//     description:
//       "Upload JPG, PNG or SVG images and resize or reposition them anywhere on the page.",
//     image: "/e.png",
//   },
//   {
//     id: 5,
//     title: "Highlight & Annotate",
//     description:
//       "Highlight important text, underline content or add comments for collaboration.",
//     image: "/a.png",
//   },
//   {
//     id: 6,
//     title: "Save & Download",
//     description:
//       "Click Apply Changes and download the updated PDF instantly.",
//     image: "/b.png",
//   },
//   ];


//   const section = [
//     {
//       id: 1,
//       title: "Upload Your PDF",
//       description:
//         "Upload your PDF securely using the Upload button or drag and drop your document.",
//       note:
//         "Your file is processed securely and automatically removed after processing.",
//       image: "/a.png",
//     },
//     {
//       id: 2,
//       title: "Draw Your Signature",
//       description:
//         "Use your mouse, touchpad, or touchscreen to create your signature. You can clear and redraw it anytime.",
//       image: "/b.png",
//     },
//     {
//       id: 3,
//       title: "Save Your Signature",
//       description:
//         "Click the Save Signature button to prepare it for placement on your PDF document.",
//       image: "/c.png",
//     },
//     {
//       id: 4,
//       title: "Place & Resize Signature",
//       description:
//         "Drag your signature anywhere on the PDF page and resize it to fit perfectly.",
//       image: "/d.png",
//     },
//     {
//       id: 5,
//       title: "Preview Before Download",
//       description:
//         "Review your signed PDF to ensure the signature is correctly positioned before saving.",
//       image: "/e.png",
//     },
//     {
//       id: 6,
//       title: "Download Signed PDF",
//       description:
//         "Click Download Signed PDF to save your digitally signed document instantly.",
//       image: "/f.png",
//     },
//   ];

//   const steps = [
//     {
//       number: "1.",
//       title: "Select your PDF document",
//       description: "Click on 'Upload' to choose a file.",
//     },
//     {
//       number: "2.",
//       title: "Type text on a PDF",
//       description:
//         "Make sure the 'Text' tool is selected. Click anywhere on the PDF page to add text.",
//     },
//     {
//       number: "3.",
//       title: "Save your changes",
//       description:
//         "Click the 'Apply changes' button to apply the changes and then 'Download' your edited PDF document.",
//     },
//   ];
//   return (
//     <div className="bg-gray-50 py-20">
//       <section className="bg-white py-20">
//         <div className="mx-auto max-w-5xl px-6">

//           <h1 className="text-4xl font-bold text-gray-900">
//             How to Edit PDF Files Online
//           </h1>

//           <p className="mt-4 text-lg text-gray-600">
//             Easily edit PDF documents online. Add text, images, signatures,
//             annotations, and more in just a few simple steps.
//           </p>

//           <div className="mt-12 space-y-12">
//             {sections.map((section) => (
//               <div
//                 key={section.title}
//                 className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
//               >
//                 <h2 className="text-2xl font-semibold text-gray-900">
//                   {section.title}
//                 </h2>

//                 <p className="mt-5 text-gray-600">
//                   {section.description}
//                 </p>
//                 {section.note && (
//                   <p className="mt-3 text-sm text-gray-500">
//                     <strong>Note:</strong> {section.note}
//                   </p>
//                 )}
//                 <Image
//                   src={section.image}
//                   alt={section.title}
//                   width={900}
//                   height={500}
//                   className="mt-6 rounded-lg shadow-md w-full h-auto"
//                 />
//               </div>
//             ))}
//           </div>

//           <div className="mt-16 rounded-2xl bg-blue-50 p-8 text-center">
//             <h2 className="text-2xl font-bold text-gray-900">
//               Ready to Edit Your PDF?
//             </h2>

//             <p className="mt-3 text-gray-600">
//               Upload your document and start editing in seconds.
//             </p>
//             <Link
//               href="/add-signature"
//               className="mt-6 inline-block rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
//             >
//               Edit PDF Now
//             </Link>
//           </div>

//         </div>
//       </section>

//       <section className="bg-white py-20">
//         <div className="mx-auto max-w-5xl px-6">

//           <h1 className="text-4xl font-bold text-gray-900">
//             How to Sign PDF Files Online
//           </h1>

//           <p className="mt-4 text-lg text-gray-600">
//             Easily sign PDF documents online. Add your signature to your PDF
//             document in just a few simple steps.
//           </p>

//           <div className="mt-12 space-y-12">
//             {section.map((section) => (
//               <div
//                 key={section.title}
//                 className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
//               >
//                 <h2 className="text-2xl font-semibold text-gray-900">
//                   {section.title}
//                 </h2>
//                 <p className="mt-5 text-gray-600">
//                   {section.description}
//                 </p>
//                 <Image
//                   src={section.image}
//                   alt={section.title}
//                   width={900}
//                   height={500}
//                   className="mt-6 rounded-lg shadow-md w-full h-auto"
//                 />
//               </div>
//             ))}
//           </div>

//           {/* <div className="mt-16 rounded-2xl bg-blue-50 p-8 text-center">
//           <h2 className="text-2xl font-bold text-gray-900">
//             Ready to Sign Your PDF?
//           </h2>

//           <p className="mt-3 text-gray-600">
//             Upload your document and start signing in seconds.
//           </p>
//           <Link
//             href="/add-signature"
//             className="mt-6 inline-block rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
//           >
//             Sign PDF Now
//           </Link>
//         </div> */}
//         </div>
//       </section>
//       <section className="bg-gray-50 py-20">
//         <div className="mx-auto max-w-6xl px-6">

//           <h1 className="mb-20 text-center text-5xl font-bold text-gray-700">
//             How To Type On A PDF
//           </h1>

//           <div className="space-y-5">
//             {steps.map((step) => (
//               <div key={step.number} className="flex items-start gap-2">

//                 <div className="w-10 shrink-0 text-2xl font-medium text-gray-900">
//                   {step.number}
//                 </div>

//                 <div>
//                   <h2 className="text-2xl m-0 font-bold text-gray-600">
//                     {step.title}
//                   </h2>

//                   <p className="mt-5 max-w-5xl text-lg leading-relaxed text-gray-800">
//                     {step.description}
//                   </p>
//                 </div>

//               </div>
//             ))}
//           </div>

//         </div>
//       </section>
//     </div>
//   );
// }




"use client";

import Image from "next/image";
import Link from "next/link";

export default function HowToEditPdf() {
  const editSteps = [
    {
      id: 1,
      title: "Upload your PDF",
      description:
        "Drag and drop your file, or click Upload to choose one from your device.",
      note:
        "Your file is used only to perform the edit and is automatically removed from our servers shortly after processing.",
      image: "/a.png",
    },
    {
      id: 2,
      title: "Add text",
      description:
        "Select the Text tool, then click anywhere on the page to insert new text.",
      image: "/c.png",
    },
    {
      id: 3,
      title: "Edit existing text",
      description:
        "Click any editable text to change the font, size, color, or apply bold and italic.",
      image: "/d.png",
    },
    {
      id: 4,
      title: "Insert images",
      description:
        "Upload a JPG, PNG, or SVG and drag it into place — resize or reposition it anywhere on the page.",
      image: "/e.png",
    },
    {
      id: 5,
      title: "Highlight & annotate",
      description:
        "Highlight important text, underline content, or drop in comments for anyone reviewing the file.",
      image: "/a.png",
    },
    {
      id: 6,
      title: "Save & download",
      description: "Click Apply Changes, then download your updated PDF.",
      image: "/b.png",
    },
  ];

  const signSteps = [
    {
      id: 1,
      title: "Upload your PDF",
      description:
        "Drag and drop your file, or click Upload to choose one from your device.",
      note:
        "Your file is used only to add the signature and is automatically removed after processing.",
      image: "/a.png",
    },
    {
      id: 2,
      title: "Draw your signature",
      description:
        "Use your mouse, trackpad, or touchscreen to draw it — clear and redraw as many times as you need.",
      image: "/b.png",
    },
    {
      id: 3,
      title: "Save your signature",
      description: "Click Save to prepare it for placement on the document.",
      image: "/c.png",
    },
    {
      id: 4,
      title: "Place & resize it",
      description:
        "Drag your signature onto the page and resize it so it fits naturally on the signature line.",
      image: "/d.png",
    },
    {
      id: 5,
      title: "Preview before downloading",
      description:
        "Double-check the signature is positioned correctly before you save the final file.",
      image: "/e.png",
    },
    {
      id: 6,
      title: "Download your signed PDF",
      description: "Click Download to save the signed document instantly.",
      image: "/f.png",
    },
  ];

  const typeSteps = [
    {
      number: "1.",
      title: "Select your PDF",
      description: "Click Upload and choose the file you want to type on.",
    },
    {
      number: "2.",
      title: "Type on the page",
      description:
        "Make sure the Text tool is selected, then click anywhere on the page to start typing.",
    },
    {
      number: "3.",
      title: "Save your changes",
      description:
        "Click Apply Changes, then Download to get your edited file.",
    },
  ];

  return (
    <div className="bg-gray-50 py-20">
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">

          <h1 className="text-4xl font-bold text-gray-900">
            How to Edit PDF Files Online
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Add text, images, signatures, and annotations to any PDF — no
            software to install, just a few clicks.
          </p>

          <div className="mt-12 space-y-12">
            {editSteps.map((step) => (
              <div
                key={step.id}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <h2 className="text-2xl font-semibold text-gray-900">
                  {step.title}
                </h2>

                <p className="mt-5 text-gray-600">{step.description}</p>

                {step.note && (
                  <p className="mt-3 text-sm text-gray-500">
                    <strong>Note:</strong> {step.note}
                  </p>
                )}

                <Image
                  src={step.image}
                  alt={step.title}
                  width={900}
                  height={500}
                  className="mt-6 rounded-lg shadow-md w-full h-auto"
                />
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-blue-50 p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Ready to edit your PDF?
            </h2>

            <p className="mt-3 text-gray-600">
              Upload your document and start editing in seconds.
            </p>
            <Link
              href="/pdf-editor"
              className="mt-6 inline-block rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Edit PDF now
            </Link>
          </div>

        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">

          <h2 className="text-4xl font-bold text-gray-900">
            How to Sign PDF Files Online
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Add a signature to any PDF in a few simple steps — draw it, place
            it, download the signed file.
          </p>

          <div className="mt-12 space-y-12">
            {signSteps.map((step) => (
              <div
                key={step.id}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-2xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-5 text-gray-600">{step.description}</p>

                {step.note && (
                  <p className="mt-3 text-sm text-gray-500">
                    <strong>Note:</strong> {step.note}
                  </p>
                )}

                <Image
                  src={step.image}
                  alt={step.title}
                  width={900}
                  height={500}
                  className="mt-6 rounded-lg shadow-md w-full h-auto"
                />
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-blue-50 p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900">
              Ready to sign your PDF?
            </h3>

            <p className="mt-3 text-gray-600">
              Upload your document and start signing in seconds.
            </p>
            <Link
              href="/add-signature"
              className="mt-6 inline-block rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Sign PDF now
            </Link>
          </div>

        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">

          <h2 className="mb-20 text-center text-5xl font-bold text-gray-700">
            How to Type on a PDF
          </h2>

          <div className="space-y-5">
            {typeSteps.map((step) => (
              <div key={step.number} className="flex items-start gap-2">
                <div className="w-10 shrink-0 text-2xl font-medium text-gray-900">
                  {step.number}
                </div>

                <div>
                  <h3 className="text-2xl m-0 font-bold text-gray-600">
                    {step.title}
                  </h3>

                  <p className="mt-5 max-w-5xl text-lg leading-relaxed text-gray-800">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-blue-50 p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900">
              Ready to type on your PDF?
            </h3>

            <p className="mt-3 text-gray-600">
              Upload your document and start typing in seconds.
            </p>
            <Link
              href="/add-text"
              className="mt-6 inline-block rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Type on PDF now
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}