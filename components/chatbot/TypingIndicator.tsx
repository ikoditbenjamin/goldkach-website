'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.18 }}
      className="flex gap-2 justify-start"
    >
      {/* Bot avatar */}
      <div
        className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black mt-0.5"
        style={{ background: 'linear-gradient(135deg, #1E9BF0, #38BDF8)' }}
      >
        G
      </div>

      {/* Dots bubble */}
      <div
        className="rounded-2xl px-4 py-3 flex items-center gap-1.5"
        style={{
          background: 'rgba(13,27,62,0.90)',
          border: '1px solid rgba(56,189,248,0.18)',
          borderTopLeftRadius: '4px',
        }}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="block w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: '#38BDF8' }}
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.1, 0.8] }}
            transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.18 }}
          />
        ))}
      </div>
    </motion.div>
  );
}
