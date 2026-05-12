'use client';

import React, { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const tabs = [
  {
    id: 'vision' as const,
    label: 'Vision',
    content:
      'The democratization of global capital markets and the empowerment of investors from all regions.',
  },
  {
    id: 'mission' as const,
    label: 'Mission',
    content:
      'To level the playing field for investors in frontier and emerging nations by providing access to low-cost, global investment products, that will help them achieve financial freedom.',
  },
];

export default function MissionBanner() {
  const [active, setActive] = useState<'vision' | 'mission'>('mission');
  const ref = useScrollReveal<HTMLElement>();

  const current = tabs.find((t) => t.id === active)!;

  return (
    <section
      ref={ref}
      className="py-14 px-6"
      style={{ backgroundColor: '#0D0C24' }}
    >
      <div className="max-w-3xl mx-auto reveal-up">

        {/* ── Tab headers ── */}
        <div className="grid grid-cols-2 mb-0">
          {tabs.map((tab) => {
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className="relative pb-4 text-xl font-bold text-left transition-colors duration-200 focus:outline-none"
                style={{ color: isActive ? '#1E9BF0' : 'rgba(255,255,255,0.70)' }}
              >
                {tab.label}

                {/* Underline indicator — dark blue, full width when active */}
                <span
                  className="absolute bottom-0 left-0 h-[3px] transition-all duration-400"
                  style={{
                    width: isActive ? '100%' : '0%',
                    backgroundColor: '#1E9BF0',
                    transitionDuration: '350ms',
                  }}
                />
              </button>
            );
          })}
        </div>

        {/* Thin full-width divider under tabs */}
        <div className="w-full h-[1px] mb-0" style={{ backgroundColor: 'rgba(30,155,240,0.25)' }} />

        {/* ── Content card — sky blue, text fades on tab switch ── */}
        <div
          className="rounded-b-lg rounded-tr-lg p-8"
          style={{ backgroundColor: '#1E9BF0' }}
        >
          <p
            key={active}
            className="text-white text-lg md:text-xl font-semibold leading-relaxed"
            style={{
              animation: 'fadeInUp 0.35s ease both',
            }}
          >
            {current.content}
          </p>
        </div>

      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
