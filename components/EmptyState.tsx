export default function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed bg-white p-12 text-center">
      <div className="text-5xl">📄</div>

      <h3 className="mt-4 text-xl font-semibold">
        Upload a PDF to get started
      </h3>

      <p className="mt-2 text-gray-500">
        Select a PDF file and choose a tool.
      </p>
    </div>
  );
}