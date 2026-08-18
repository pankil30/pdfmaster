import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cards = [
    {
        title: "PDF Tools Online",
        description:
            "No installs, no accounts. Upload a file, run the tool you need — merge, split, compress, convert — and download the result. Your files are deleted from our servers shortly after processing, not kept around.",
        button: "Open the tools",
        href: "/pdf-editor",
        color: "text-green-500",
        image: "/x.jpg",
    },
    {
        title: "Desktop PDF Tools",
        description:
            "Prefer everything to stay on your own machine? The desktop version runs on Windows, macOS, and Linux, processes files locally, and doesn't need an internet connection once installed.",
        button: "Download for desktop",
        href: "/desktop",
        color: "text-blue-500",
        image: "/y.jpg",
    },
];

export default function WorksSection() {
    return (
        <section className="bg-gradient-to-b from-white to-slate-100 py-20">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Works the way you work
                    </h2>

                    <p className="mt-4 text-2xl text-gray-400">
                        In the browser or on your desktop — your call
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {cards.map((card) => (
                        <div
                            key={card.title}
                            className="flex min-h-[400px] flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="mb-8 flex justify-center">
                                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-slate-100">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="h-14 w-14 object-contain"
                                    />
                                </div>
                            </div>

                            <h3 className="text-center text-3xl font-bold text-gray-800">
                                {card.title}
                            </h3>

                            <p className="mt-6 flex-1 text-center text-lg leading-8 text-gray-600">
                                {card.description}
                            </p>

                            <div className="mt-10 text-center">
                                <Link
                                    href={card.href}
                                    className={`inline-flex items-center gap-2 text-xl font-semibold ${card.color} transition-all hover:gap-4`}
                                >
                                    {card.button}
                                    <span className="font-normal text-gray-500">
                                        — it&apos;s free
                                    </span>
                                    <ArrowRight size={22} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}