import { useEffect, useState } from 'react';

export default function ConsolePanel() {
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    // Replace with actual Supabase fetch later
    setLogs([
      { id: 1, session: 'abc123', type: 'Inference', content: 'High-tenure, low-automation SMBs' },
      { id: 2, session: 'abc123', type: 'Prompt', content: 'Propose a strategy for expansion...' }
    ]);
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-2">Console Log</h2>
      {logs.map(log => (
        <div key={log.id} className="p-3 border border-gray-300 rounded bg-gray-50">
          <p className="text-xs text-gray-500 mb-1">{log.type} – Session: {log.session}</p>
          <pre className="text-sm whitespace-pre-wrap">{log.content}</pre>
        </div>
      ))}
    </div>
  );
}
