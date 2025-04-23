// ChatInput.tsx

import { useState } from 'react';

export default function ChatInput({ onSubmit }: { onSubmit: (input: string) => void }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    onSubmit(value.trim());
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex gap-2 mt-4">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ask ODNB something..."
        className="flex-1 p-2 border border-gray-500 rounded bg-black text-white"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
      >
        Send
      </button>
    </form>
  );
}
