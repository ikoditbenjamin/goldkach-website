'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useChatStore } from '@/store/chatStore';

export default function FloatingChatButton() {
  const { isOpen, toggleChat, unreadCount } = useChatStore();

  return (
    <motion.button
      onClick={toggleChat}
      aria-label={isOpen ? 'Close chat' : 'Open chat assistant'}
      className="fixed bottom-5 right-4 md:right-6 z-[99999] w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-200"
      style={{
        background: 'linear-gradient(135deg, #1E9BF0 0%, #38BDF8 100%)',
        boxShadow: '0 0 0 0 rgba(56,189,248,0.5)',
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      animate={
        !isOpen
          ? {
              boxShadow: [
                '0 0 0 0 rgba(56,189,248,0.50)',
                '0 0 0 10px rgba(56,189,248,0.00)',
              ],
            }
          : {}
      }
      transition={
        !isOpen
          ? { duration: 1.6, repeat: Infinity, ease: 'easeOut' }
          : {}
      }
    >
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.span
            key="close"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <X size={22} color="#ffffff" />
          </motion.span>
        ) : (
          <motion.span
            key="open"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <MessageCircle size={22} color="#ffffff" />
          </motion.span>
        )}
      </AnimatePresence>

      {/* Unread badge */}
      <AnimatePresence>
        {!isOpen && unreadCount > 0 && (
          <motion.span
            key="badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-black text-white"
            style={{ backgroundColor: '#F87171' }}
          >
            {unreadCount > 9 ? '9+' : unreadCount}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
