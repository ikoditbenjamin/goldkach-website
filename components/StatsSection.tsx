'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const stats = [
  { value: 4,  suffix: '+',  label: 'Years of Experience' },
  { value: 10, suffix: 'k+', label: 'Successful Investments' },
  { value: 7,  suffix: 'B',  prefix: '$', label: 'Dollar Money Profit' },
  { value: 3,  suffix: '+',  label: 'Expert Advisors' },
];

function useCountUp(target: number, active: boolean, duration = 1500) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatItem({
  value, suffix, prefix, label, active, index,
}: {
  value: number; suffix: string; prefix?: string; label: string; active: boolean; index: number;
}) {
  const count = useCountUp(value, active);
  return (
    <div
      className={`text-center px-6 py-8 reveal-up stagger-${index + 1}`}
      style={{
        borderRight: index < 3 ? '1px solid #1E9BF0' : 'none',
      }}
    >
      <p className="stat-number mb-2">
        {prefix && <span>{prefix}</span>}
        {count}
        <span>{suffix}</span>
      </p>
      <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#1E9BF0' }}>
        {label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const [active, setActive] = useState(false);
  const sectionRef = useScrollReveal<HTMLElement>();
  const triggerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = triggerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={(node) => {
        (sectionRef as React.MutableRefObject<HTMLElement | null>).current = node;
        (triggerRef as React.MutableRefObject<HTMLElement | null>).current = node;
      }}
      className="py-4 bg-white"
      style={{ borderTop: '1px solid #1E9BF0', borderBottom: '1px solid #1E9BF0' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} {...stat} active={active} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
