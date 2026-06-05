"use client";

import { Upload } from "lucide-react";
import { useState } from "react";

interface FileUploadProps {
  accept?: string;
  multiple?: boolean;
  onChange: (files: FileList | null) => void;
}

export default function FileUpload({
  accept,
  multiple,
  onChange,
}: FileUploadProps) {
  const [dragging, setDragging] = useState(false);

  return (
    <label
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragging(false);
        onChange(e.dataTransfer.files);
      }}
      className={`flex min-h-[220px] cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed p-10 text-center transition
      ${
        dragging
          ? "border-red-500 bg-red-100"
          : "border-red-300 bg-red-50"
      }`}
    >
      <Upload className="h-12 w-12 text-red-500" />

      <h3 className="mt-4 text-xl font-semibold">
        Drop files here
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        or click to browse
      </p>

      <input
        type="file"
        className="hidden"
        accept={accept}
        multiple={multiple}
        onChange={(e) => onChange(e.target.files)}
      />
    </label>
  );
}