import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cards = [
    {
        title: "PDF Tools Online",
        description:
            "Works directly in your browser. Upload, edit, merge, split, compress and convert PDF files securely. Files are automatically deleted after processing.",
        button: "Get Started",
        href: "/pdf-editor",
        color: "text-green-500",
        image: "/x.jpg",
    },
    {
        title: "Desktop PDF Tools",
        description:
            "Use PDF tools on Windows, macOS or Linux. Process your documents locally for maximum privacy and speed.",
        button: "Download Now",
        href: "/Desktop",
        color: "text-blue-500",
        image: "/y.jpg",
    },
];

export default function WorksSection() {
    return (
        <section className="bg-gradient-to-b from-white to-slate-100 py-20">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Works the way you work
                    </h2>

                    <p className="mt-4 text-2xl text-gray-400">
                        Online or offline — in the cloud or as a desktop application
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-8 lg:grid-cols-2">
                    {cards.map((card) => (
                        <div
                            key={card.title}
                            className="flex min-h-[400px]  flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            {/* Icon */}
                            <div className="mb-8 flex justify-center">
                                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-slate-100">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="h-14 w-14 object-contain"
                                    />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-center text-3xl font-bold text-gray-800">
                                {card.title}
                            </h3>

                            {/* Description */}
                            <p className="mt-6 flex-1 text-center text-lg leading-8 text-gray-600">
                                {card.description}
                            </p>

                            {/* Button */}
                            <div className="mt-10 text-center">
                                <Link
                                    href={card.href}
                                    className={`inline-flex items-center gap-2 text-xl font-semibold ${card.color} transition-all hover:gap-4`}
                                >
                                    {card.button}
                                    <span className="font-normal text-gray-500">
                                        — it's free
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