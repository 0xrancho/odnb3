import { useRef } from 'react';

export default function FileUpload({ onUpload }: { onUpload: (file: File) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div className="mt-4">
      <label className="block text-sm font-medium text-gray-200 mb-1">Upload CSV</label>
      <input
        ref={inputRef}
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        className="bg-black text-white border border-gray-600 rounded p-2 text-sm w-full"
      />
    </div>
  );
}
