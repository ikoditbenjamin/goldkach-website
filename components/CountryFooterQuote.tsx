'use client';

import React from 'react';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function CountryFooterQuote() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      className="relative py-14 px-6 overflow-hidden"
      ref={sectionRef}
    >
      {/* Background image */}
      <Image
        src="/home/home2.jpg"
        alt=""
        fill
        className="object-cover object-center"
        quality={85}
        aria-hidden="true"
      />

      {/* Dark blue overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(45,43,107,0.82)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center reveal-up">
        <h2
          className="font-bold leading-tight tracking-tight text-white"
          style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3rem)' }}
        >
          Tomorrow belongs to
          <br />
          the people who
          <br />
          prepare for it today
        </h2>
      </div>
    </section>
  );
}
