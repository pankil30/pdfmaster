export default function HowItWorks() {
  const steps = [
    {
      title: "Upload PDF",
      desc: "Choose your PDF file.",
    },
    {
      title: "Select Tool",
      desc: "Choose the action you want.",
    },
    {
      title: "Download",
      desc: "Get your processed PDF instantly.",
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-4xl font-bold">
          How It Works
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border bg-white p-6 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-white font-bold">
                {index + 1}
              </div>

              <h3 className="mt-4 text-xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-2 text-gray-600">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}