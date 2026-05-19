'use client';

import React from 'react';
import { X, Trash2 } from 'lucide-react';
import { useChatStore } from '@/store/chatStore';

export default function ChatHeader() {
  const { closeChat, clearMessages } = useChatStore();

  return (
    <div
      className="flex items-center justify-between px-4 py-3 rounded-t-2xl flex-shrink-0"
      style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #0D1B3E 100%)',
        borderBottom: '1px solid rgba(56,189,248,0.15)',
      }}
    >
      {/* Left: avatar + name */}
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center font-black text-sm"
          style={{
            background: 'linear-gradient(135deg, #1E9BF0, #38BDF8)',
            boxShadow: '0 0 12px rgba(56,189,248,0.45)',
          }}
        >
          G
        </div>
        <div>
          <p className="text-sm font-bold text-white leading-tight">GoldKach Assistant</p>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: '#4ADE80', boxShadow: '0 0 4px #4ADE80' }}
            />
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Online
            </span>
          </div>
        </div>
      </div>

      {/* Right: actions */}
      <div className="flex items-center gap-1">
        <button
          onClick={clearMessages}
          title="Clear chat"
          className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors duration-150"
          style={{ color: 'rgba(255,255,255,0.35)' }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = '#F87171')}
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.35)')
          }
        >
          <Trash2 size={14} />
        </button>
        <button
          onClick={closeChat}
          title="Close"
          className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors duration-150"
          style={{ color: 'rgba(255,255,255,0.35)' }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = '#ffffff')}
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.35)')
          }
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
