import { useState } from 'react';
import Layout from '@/components/Layout';
import ChatInput from '@/components/ChatInput';
import ChatResponse from '@/components/ChatResponse';
import FileUpload from '@/components/FileUpload';

export default function Home() {
  const [response, setResponse] = useState<string>("");

  const handleQuery = async (input: string) => {
    const res = await fetch('/api/odnb', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input }),
    });
    const data = await res.json();
    setResponse(data.response);
  };

  const handleFileUpload = (file: File) => {
    console.log('File uploaded:', file.name);
    // TODO: implement file processing
  };

  return (
    <Layout>
      <h1 className="text-xl font-bold mb-4">ODNB Chat</h1>
      <FileUpload onUpload={handleFileUpload} />
      <ChatInput onSubmit={handleQuery} />
      <ChatResponse text={response} />
    </Layout>
  );
}
