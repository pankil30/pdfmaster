import { Shield, Zap, Cloud } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: "Secure Files",
      description: "Your files are processed securely.",
    },
    {
      icon: Zap,
      title: "Fast Processing",
      description: "Convert PDFs within seconds.",
    },
    {
      icon: Cloud,
      title: "No Installation",
      description: "Works directly in your browser.",
    },
  ];

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Why Choose PDFMaster?
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border bg-white p-6"
              >
                <Icon className="h-10 w-10 text-red-500" />

                <h3 className="mt-4 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-2 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}