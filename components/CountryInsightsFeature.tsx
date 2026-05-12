'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const featuredArticles = [
  {
    category: 'Insights',
    title: 'AI Boom Fuels Growth in Semiconductor ETFs – Is SOXY Buy?',
    excerpt:
      'The iShares Semiconductor ETF (SOXX) is attracting significant attention as artificial intelligence continues to drive demand for chips. We analyze whether SOXY remains a compelling buy at current valuations and look at top holdings and sector trends.',
    img: '/home/AI.jpg',
    date: 'Apr 20, 2026',
    readTime: '5 min read',
    slug: '/insights',
  },
  {
    category: 'Insights',
    title: 'SCHD: Stability, Dividends & Performance In One Package',
    excerpt:
      "For those investing in blue-chip dividend income and capital appreciation, the Schwab U.S. Dividend Equity ETF (SCHD) offers a compelling combination of quality, yield, and low cost. Here's why it deserves a spot in a long-term portfolio.",
    img: '/home/global.jpg',
    date: 'Apr 14, 2026',
    readTime: '6 min read',
    slug: '/insights',
  },
];

export default function CountryInsightsFeature() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardRefs.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.1 }
    );
    cards.forEach((c) => { if (c) obs.observe(c); });
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-10 px-6" style={{ backgroundColor: '#141336' }} ref={sectionRef}>
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <div className="mb-6 reveal-up">
          <span className="section-label">Insights</span>
        </div>

        <div className="flex flex-col gap-10">
          {featuredArticles.map((article, i) => (
            <div
              key={article.title}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center reveal-up stagger-${i + 1}`}
            >
              {/* Image — alternates side */}
              <div
                className={`w-full aspect-[16/10] overflow-hidden rounded-lg relative ${
                  i % 2 === 1 ? 'lg:order-2' : ''
                }`}
                style={{
                  backgroundColor: '#dbeafe',
                  boxShadow: '0 8px 32px rgba(45,43,107,0.18), 0 2px 8px rgba(30,155,240,0.10)',
                }}
              >
                <AppImage
                  src={article.img}
                  alt={article.title}
                  fill={false}
                  width={700}
                  height={438}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2B6B]/25 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Text */}
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <span
                  className="text-xs font-semibold uppercase tracking-widest mb-2 block"
                  style={{ color: '#1E9BF0' }}
                >
                  {article.category}
                </span>
                <h3
                  className="font-bold text-xl md:text-2xl leading-tight tracking-tight mb-3"
                  style={{ color: '#ffffff' }}
                >
                  {article.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.60)' }}>
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{article.date}</span>
                  <span className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.20)' }} />
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{article.readTime}</span>
                </div>
                <Link
                  href={article.slug}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-sm font-bold transition-all duration-200 hover:opacity-90"
                  style={{ backgroundColor: '#1E9BF0', color: '#ffffff' }}
                >
                  Find Out More
                  <Icon name="ArrowRightIcon" size={14} variant="outline" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
