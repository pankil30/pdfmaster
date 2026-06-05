export default function WhyChooseUs() {
  const features = [
    {
      title: "100% Free",
      description: "All PDF tools are completely free to use.",
      icon: "💯",
    },
    {
      title: "Secure Files",
      description: "Your files stay private and secure.",
      icon: "🔒",
    },
    {
      title: "Fast Processing",
      description: "Process PDFs instantly in your browser.",
      icon: "⚡",
    },
    {
      title: "No Signup",
      description: "Use all tools without creating an account.",
      icon: "🚀",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-4xl font-bold">
          Why Choose PDFMaster?
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border p-6 text-center"
            >
              <div className="text-5xl">{feature.icon}</div>

              <h3 className="mt-4 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-2 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}