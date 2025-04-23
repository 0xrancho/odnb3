// PeelShell.tsx

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PeelShell({ children, consolePanel }: { children: React.ReactNode; consolePanel: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Console layer underneath */}
      <motion.div
        className="absolute inset-0 z-10 bg-white text-black font-mono p-4 overflow-y-scroll"
        initial={{ x: '-100%' }}
        animate={{ x: open ? '0%' : '-100%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {consolePanel}
      </motion.div>

      {/* Chat interface on top */}
      <motion.div
        className="absolute inset-0 z-20 bg-black text-white p-6"
        animate={{ x: open ? '100%' : '0%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <div className="flex justify-end">
          <button
            onClick={() => setOpen(!open)}
            className="text-sm bg-gray-700 px-3 py-1 rounded hover:bg-gray-600"
          >
            {open ? 'Close Console' : 'Open Console'}
          </button>
        </div>
        {children}
      </motion.div>
    </div>
  );
}
