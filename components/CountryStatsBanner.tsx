'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function useCountUp(target: number, active: boolean, duration = 1500) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

export default function CountryStatsBanner() {
  const [active, setActive] = useState(false);
  const sectionRef = useScrollReveal<HTMLElement>();
  const triggerRef = useRef<HTMLDivElement>(null);

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

  const investmentsCount = useCountUp(26, active);

  return (
    <section
      ref={sectionRef}
      className="py-10 px-6"
      style={{ backgroundColor: '#EFF8FF', borderTop: '4px solid #1E9BF0' }}
    >
      <div ref={triggerRef} className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Left — big stat */}
          <div className="reveal-up">
            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#1E9BF0' }}>
              Unlock
            </p>
            <div className="flex items-baseline gap-2 mb-1">
              <span
                className="font-extrabold leading-none"
                style={{ fontSize: 'clamp(3.5rem, 10vw, 6.5rem)', color: '#2D2B6B' }}
              >
                {investmentsCount}
              </span>
            </div>
            <h2
              className="font-bold leading-tight tracking-tight"
              style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.4rem)', color: '#2D2B6B' }}
            >
              GLOB<span style={{ color: '#1E9BF0' }}>A</span>L
              <br />
              INVESTMENTS
            </h2>
          </div>

          {/* Right — description */}
          <div className="reveal-up stagger-2">
            <h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: '#2D2B6B' }}>
              We are ready when you are.
            </h3>
            <p className="text-sm leading-relaxed mb-3" style={{ color: 'rgba(45,43,107,0.65)' }}>
              When it comes to an individual&apos;s global financial situation, our experienced professionals work hard. Our committed team of professionals providing superior financial solutions for clients living in the global economy, ultimately striving for personal financial freedom that guides our clients to prosperity.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(45,43,107,0.65)' }}>
              We believe that every investor deserves access to world-class investment products and strategies, regardless of where they are located. Our platform connects African investors to global markets with ease and transparency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
