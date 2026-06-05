"use client";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2>Something went wrong</h2>

      <button
        onClick={() => reset()}
        className="mt-4 rounded-xl bg-red-500 px-6 py-3 text-white"
      >
        Try Again
      </button>
    </div>
  );
}