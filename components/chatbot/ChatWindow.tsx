'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';
import { useChatStore } from '@/store/chatStore';
import { getResponse } from '@/lib/chatResponses';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import TypingIndicator from './TypingIndicator';
import SuggestedQuestions from './SuggestedQuestions';

const WELCOME_MESSAGE =
  "👋 Hi! I'm the GoldKach investment assistant.\n\nI can help you with:\n• **Portfolio projections** and returns\n• **Products** and fund details\n• **Onboarding** and getting started\n• **Supported countries** (Uganda, Kenya, UK)\n\nWhat would you like to know?";

export default function ChatWindow() {
  const {
    isOpen,
    messages,
    isTyping,
    simulator,
    currentPage,
    addMessage,
    setTyping,
  } = useChatStore();

  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const hasWelcomed = useRef(false);

  // Send welcome message once on first open
  useEffect(() => {
    if (isOpen && messages.length === 0 && !hasWelcomed.current) {
      hasWelcomed.current = true;
      setTimeout(() => {
        addMessage({ role: 'bot', text: WELCOME_MESSAGE });
      }, 400);
    }
  }, [isOpen, messages.length, addMessage]);

  // Auto-scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setInput('');
    addMessage({ role: 'user', text: trimmed });

    // Simulate typing delay
    setTyping(true);
    const delay = 600 + Math.random() * 600;

    setTimeout(() => {
      const response = getResponse(trimmed, {
        investmentAmount: simulator.investmentAmount,
        projections: simulator.projections,
        currentPage,
      });
      setTyping(false);
      addMessage({ role: 'bot', text: response });
    }, delay);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="chat-window"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', stiffness: 340, damping: 28 }}
          className="fixed bottom-24 right-4 md:right-6 z-[99998] flex flex-col rounded-2xl overflow-hidden"
          style={{
            width: 'min(380px, calc(100vw - 2rem))',
            height: 'min(560px, calc(100vh - 8rem))',
            background: 'linear-gradient(180deg, #0A1628 0%, #0D1B3E 100%)',
            border: '1px solid rgba(56,189,248,0.22)',
            boxShadow:
              '0 0 0 1px rgba(56,189,248,0.08), 0 24px 60px rgba(0,0,0,0.60), 0 0 40px rgba(56,189,248,0.08)',
          }}
        >
          {/* Header */}
          <ChatHeader />

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3 scrollbar-thin">
            {messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} />
            ))}
            <AnimatePresence>{isTyping && <TypingIndicator />}</AnimatePresence>
            <div ref={bottomRef} />
          </div>

          {/* Suggested questions (only when no messages or just welcome) */}
          {messages.length <= 1 && !isTyping && (
            <SuggestedQuestions onSelect={sendMessage} />
          )}

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-3 py-3 flex-shrink-0"
            style={{ borderTop: '1px solid rgba(56,189,248,0.12)' }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
              className="flex-1 rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-all duration-200"
              style={{
                background: 'rgba(56,189,248,0.07)',
                border: '1px solid rgba(56,189,248,0.20)',
                caretColor: '#38BDF8',
              }}
              onFocus={(e) =>
                ((e.target as HTMLInputElement).style.border =
                  '1px solid rgba(56,189,248,0.55)')
              }
              onBlur={(e) =>
                ((e.target as HTMLInputElement).style.border =
                  '1px solid rgba(56,189,248,0.20)')
              }
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-150"
              style={
                input.trim()
                  ? {
                      background: 'linear-gradient(135deg, #1E9BF0, #38BDF8)',
                      boxShadow: '0 0 12px rgba(56,189,248,0.40)',
                    }
                  : {
                      background: 'rgba(56,189,248,0.10)',
                      cursor: 'not-allowed',
                    }
              }
            >
              <Send size={15} color="#ffffff" />
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
