'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SUGGESTED_QUESTIONS } from '@/lib/chatResponses';

interface Props {
  onSelect: (q: string) => void;
}

export default function SuggestedQuestions({ onSelect }: Props) {
  return (
    <div className="px-3 pb-2">
      <p className="text-xs font-semibold mb-2 px-1" style={{ color: 'rgba(255,255,255,0.35)' }}>
        Suggested questions
      </p>
      <div className="flex flex-wrap gap-1.5">
        {SUGGESTED_QUESTIONS.map((q, i) => (
          <motion.button
            key={q}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.04, duration: 0.18 }}
            onClick={() => onSelect(q)}
            className="text-xs px-3 py-1.5 rounded-full transition-all duration-150 text-left"
            style={{
              background: 'rgba(56,189,248,0.08)',
              border: '1px solid rgba(56,189,248,0.22)',
              color: '#38BDF8',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(56,189,248,0.18)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(56,189,248,0.08)';
            }}
          >
            {q}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
