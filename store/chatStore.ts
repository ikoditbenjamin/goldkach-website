import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ChatMessage {
  id: string;
  role: 'user' | 'bot';
  text: string;
  timestamp: number;
}

export interface SimulatorState {
  investmentAmount: number;
  projections: {
    years: number;
    finalValue: number;
    profit: number;
    gainPercentage: number;
    combinedReturn: number;
  }[];
}

interface ChatStore {
  // Chat UI state
  isOpen: boolean;
  unreadCount: number;
  messages: ChatMessage[];
  isTyping: boolean;
  currentPage: string;

  // Simulator state (shared with InvestmentProjectionSimulator)
  simulator: SimulatorState;

  // Actions
  openChat: () => void;
  closeChat: () => void;
  toggleChat: () => void;
  addMessage: (msg: Omit<ChatMessage, 'id' | 'timestamp'>) => void;
  setTyping: (v: boolean) => void;
  setCurrentPage: (page: string) => void;
  setSimulator: (state: SimulatorState) => void;
  clearMessages: () => void;
  markRead: () => void;
}

// ─── Store ────────────────────────────────────────────────────────────────────

export const useChatStore = create<ChatStore>()(
  persist(
    (set) => ({
      isOpen: false,
      unreadCount: 0,
      messages: [],
      isTyping: false,
      currentPage: '/',
      simulator: {
        investmentAmount: 1000,
        projections: [],
      },

      openChat: () => set({ isOpen: true, unreadCount: 0 }),
      closeChat: () => set({ isOpen: false }),
      toggleChat: () =>
        set((s) => ({ isOpen: !s.isOpen, unreadCount: s.isOpen ? s.unreadCount : 0 })),

      addMessage: (msg) =>
        set((s) => ({
          messages: [
            ...s.messages,
            { ...msg, id: `${Date.now()}-${Math.random()}`, timestamp: Date.now() },
          ],
          unreadCount: !s.isOpen && msg.role === 'bot' ? s.unreadCount + 1 : s.unreadCount,
        })),

      setTyping: (v) => set({ isTyping: v }),
      setCurrentPage: (page) => set({ currentPage: page }),
      setSimulator: (state) => set({ simulator: state }),
      clearMessages: () => set({ messages: [] }),
      markRead: () => set({ unreadCount: 0 }),
    }),
    {
      name: 'goldkach-chat',
      partialize: (s) => ({ messages: s.messages }),
    },
  ),
);
