export default function Stats() {
  const stats = [
    { value: "10+", label: "PDF Tools" },
    { value: "100%", label: "Free to Use" },
    { value: "Secure", label: "File Processing" },
    { value: "24/7", label: "Available" },
  ];

  return (
    <section className="px-6 py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm"
          >
            <h3 className="text-3xl font-bold text-red-500">
              {item.value}
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}