'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useChatStore } from '@/store/chatStore';

/**
 * Invisible component — just syncs the current pathname into the chat store
 * so the response engine can give page-aware answers.
 */
export default function PageTracker() {
  const pathname = usePathname();
  const setCurrentPage = useChatStore((s) => s.setCurrentPage);

  useEffect(() => {
    setCurrentPage(pathname);
  }, [pathname, setCurrentPage]);

  return null;
}
