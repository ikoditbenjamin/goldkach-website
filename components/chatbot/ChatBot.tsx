'use client';

import React from 'react';
import FloatingChatButton from './FloatingChatButton';
import ChatWindow from './ChatWindow';
import PageTracker from './PageTracker';

/**
 * Drop this once into the root layout — it renders the floating button,
 * the chat window, and the invisible page tracker.
 */
export default function ChatBot() {
  return (
    <>
      <PageTracker />
      <ChatWindow />
      <FloatingChatButton />
    </>
  );
}
