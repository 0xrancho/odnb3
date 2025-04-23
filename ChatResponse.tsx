export default function ChatResponse({ text }: { text: string }) {
  if (!text) return null;

  return (
    <div className="mt-4 p-4 bg-gray-800 text-white rounded border border-gray-600">
      <h3 className="font-bold mb-2">Response</h3>
      <p className="whitespace-pre-wrap text-sm">{text}</p>
    </div>
  );
}
