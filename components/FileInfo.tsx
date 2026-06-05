interface FileInfoProps {
  file: File;
}

export default function FileInfo({
  file,
}: FileInfoProps) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-100 text-2xl">
          📄
        </div>

        <div>
          <h3 className="font-semibold break-all">
            {file.name}
          </h3>

          <p className="text-sm text-gray-500">
            {(file.size / 1024 / 1024).toFixed(2)} MB
          </p>
        </div>
      </div>
    </div>
  );
}