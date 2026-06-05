import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
  category: string;
}

export default function ToolCard({
  title,
  description,
  href,
  category,
}: ToolCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
    >
      <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600">
        {category}
      </span>

      <h3 className="mt-4 text-xl font-semibold">{title}</h3>

      <p className="mt-3 text-sm text-gray-600">{description}</p>

      <div className="mt-5 flex items-center text-red-500">
        Open Tool
        <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </Link>
  );
}