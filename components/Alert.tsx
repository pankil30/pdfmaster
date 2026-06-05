interface AlertProps {
  type: "success" | "error";
  message: string;
}

export default function Alert({
  type,
  message,
}: AlertProps) {
  return (
    <div
      className={`rounded-xl p-4 ${
        type === "success"
          ? "bg-green-50 text-green-600"
          : "bg-red-50 text-red-600"
      }`}
    >
      {message}
    </div>
  );
}