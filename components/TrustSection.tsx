import {
  ShieldCheck,
  BadgeCheck,
  Laptop,
  Lock,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "100% Free",
    description: "Use all tools without any cost.",
  },
  {
    icon: Lock,
    title: "Secure Files",
    description: "Files are processed safely.",
  },
  {
    icon: Laptop,
    title: "Works Everywhere",
    description: "Desktop, tablet and mobile.",
  },
  {
    icon: BadgeCheck,
    title: "No Registration",
    description: "Start using tools instantly.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Why Choose PDFMaster?
          </h2>

          <p className="mt-4 text-gray-600">
            Fast, secure and easy PDF tools.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border bg-gray-50 p-6 text-center"
              >
                <Icon className="mx-auto h-10 w-10 text-red-500" />

                <h3 className="mt-4 font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}