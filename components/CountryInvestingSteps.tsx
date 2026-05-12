'use client';

import React, { useEffect, useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const steps = [
  {
    number: '1',
    title: 'Account Administration',
    description:
      'You want to boost your savings for retirement, so that you can live the life you want in your golden years.',
  },
  {
    number: '2',
    title: 'Retirement Planning',
    description:
      "You want to plan a strategy for retirement so that you don't worry about your pension in your golden years.",
  },
  {
    number: '3',
    title: 'Portfolio Diversification',
    description:
      'As an investor, we encourage you to improve the return profile of your portfolio by investing in global equities.',
  },
  {
    number: '4',
    title: 'Equity Transfers',
    description:
      'You want us to be able to send your portfolio of stocks, bonds, and other life events.',
  },
  {
    number: '5',
    title: 'Wealth Building',
    description:
      'You want to establish a financial foundation that will allow you to live in your financial comfort, covering the cost of living, weddings and other life events, and legacy.',
  },
];

export default function CountryInvestingSteps() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardRefs.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    cards.forEach((c) => { if (c) obs.observe(c); });
    return () => obs.disconnect();
  }, []);

  return (
    <section
      className="py-10 px-6"
      style={{ backgroundColor: '#141336' }}
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8 reveal-up">
          <h2
            className="font-bold text-2xl md:text-3xl leading-tight tracking-tight"
            style={{ color: '#ffffff' }}
          >
            Investing just makes sense
          </h2>
          <p className="text-sm mt-2 max-w-xl" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Whether you are a new or experienced investor, we are dedicated to improving the route of your financial goals.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, i) => (
            <div
              key={step.number}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="reveal-up p-5 rounded-lg"
              style={{
                backgroundColor: '#2D2B6B',
                border: '1px solid rgba(30,155,240,0.25)',
                boxShadow: '0 6px 24px rgba(45,43,107,0.22), 0 2px 6px rgba(0,0,0,0.12)',
                transitionDelay: `${i * 0.10}s`,
              }}
            >
              {/* Number badge */}
              <div
                className="w-8 h-8 rounded-sm flex items-center justify-center text-sm font-bold mb-3"
                style={{ backgroundColor: '#1E9BF0', color: '#ffffff' }}
              >
                {step.number}
              </div>

              <h3 className="font-bold text-sm text-white mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
