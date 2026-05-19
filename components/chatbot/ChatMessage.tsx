'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChatMessage as ChatMessageType } from '@/store/chatStore';

interface Props {
  message: ChatMessageType;
}

// Very lightweight markdown renderer — bold (**text**), newlines, bullet points
function renderText(text: string) {
  return text.split('\n').map((line, i) => {
    // Bold
    const parts = line.split(/\*\*(.*?)\*\*/g);
    const rendered = parts.map((part, j) =>
      j % 2 === 1 ? (
        <strong key={j} style={{ color: '#38BDF8' }}>
          {part}
        </strong>
      ) : (
        <span key={j}>{part}</span>
      ),
    );
    return (
      <span key={i} className="block">
        {rendered}
      </span>
    );
  });
}

export default function ChatMessage({ message }: Props) {
  const isBot = message.role === 'bot';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className={`flex gap-2 ${isBot ? 'justify-start' : 'justify-end'}`}
    >
      {/* Bot avatar */}
      {isBot && (
        <div
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black mt-0.5"
          style={{ background: 'linear-gradient(135deg, #1E9BF0, #38BDF8)' }}
        >
          G
        </div>
      )}

      {/* Bubble */}
      <div
        className="max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed"
        style={
          isBot
            ? {
                background: 'rgba(13,27,62,0.90)',
                border: '1px solid rgba(56,189,248,0.18)',
                color: 'rgba(255,255,255,0.88)',
                borderTopLeftRadius: '4px',
              }
            : {
                background: 'linear-gradient(135deg, #1E9BF0, #38BDF8)',
                color: '#ffffff',
                borderTopRightRadius: '4px',
              }
        }
      >
        {isBot ? renderText(message.text) : <span>{message.text}</span>}
      </div>
    </motion.div>
  );
}
