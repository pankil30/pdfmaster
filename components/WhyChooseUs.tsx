export default function WhyChooseUs() {
  const features = [
    {
      title: "Actually Free",
      description:
        "No paywall after the third file, no watermarks, no premium tier for basic tools. Merge, split, compress — all of it, free.",
      icon: "💯",
    },
    {
      title: "Files Auto-Deleted",
      description:
        "Uploads are used only to run the tool you picked, then removed from our servers shortly after — nothing sits around afterward.",
      icon: "🔒",
    },
    {
      title: "Runs in Your Browser",
      description:
        "No install, no plugin. Upload a file and get your result back in seconds, right in the tab you're already on.",
      icon: "⚡",
    },
    {
      title: "No Account Needed",
      description:
        "Use any tool the moment you land on the page — no email, no signup form, no login wall in the way.",
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