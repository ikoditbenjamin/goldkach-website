'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const services = [
  {
    icon: 'ChartBarIcon' as const,
    label: 'Investment Advisory',
    tagline: 'Strategic portfolio construction',
    description:
      'Data-driven investment strategies tailored to your risk profile, time horizon, and financial goals — from equities and bonds to alternative assets.',
    features: ['Portfolio Analysis', 'Asset Allocation', 'Risk Assessment', 'Market Research'],
    href: '#services',
  },
  {
    icon: 'BanknotesIcon' as const,
    label: 'Wealth Management',
    tagline: 'Holistic financial planning',
    description:
      'Comprehensive wealth management integrating tax optimization, estate planning, and multi-generational wealth transfer strategies.',
    features: ['Tax Optimization', 'Estate Planning', 'Trust Services', 'Legacy Planning'],
    href: '#services',
  },
  {
    icon: 'ShieldCheckIcon' as const,
    label: 'Retirement & Savings Planning',
    tagline: 'Secure your financial future',
    description:
      'Build a retirement plan that ensures financial comfort for life — from 401(k) optimization to IRA strategies and annuity solutions.',
    features: ['401(k) Rollover', 'IRA Planning', 'Social Security', 'Annuity Solutions'],
    href: '#services',
  },
  {
    icon: 'BuildingOfficeIcon' as const,
    label: 'Corporate Financial Services',
    tagline: 'Institutional-grade advisory',
    description:
      'Tailored financial solutions for businesses — treasury management, corporate pension plans, M&A advisory, and employee benefit programs.',
    features: ['Treasury Management', 'Corporate Pensions', 'M&A Advisory', 'Employee Benefits'],
    href: '#services',
  },
];

export default function ServicesSection() {
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
    <section id="services" className="py-20 px-6" style={{ backgroundColor: "#F0F5FF" }} ref={sectionRef}>
      <div className="max-w-7xl mx-auto">

        {/* ── Section Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-end">
          <div className="lg:col-span-5">
            <span className="section-label reveal-fade">What We Offer</span>
            <h2 className="font-bold text-4xl md:text-5xl leading-tight tracking-tight reveal-up stagger-1" style={{ color: "#2D2B6B" }}>
              Our Solutions<br />
              <span className="text-gradient-sky">Are Best</span>
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-4">
            <p className="text-base leading-relaxed max-w-xl reveal-up stagger-2" style={{ color: "rgba(45,43,107,0.60)" }}>
              We will help you to create an investment strategy and diversify that portfolio.
              Diversification has the statistical effect of reducing overall risk.
            </p>
          </div>
        </div>

        {/* ── Cards grid with logo watermark behind ── */}
        <div className="relative">

          {/* Watermark logo — centred behind all cards */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
            aria-hidden="true"
          >
            <Image
              src="/LOGO2.png"
              alt=""
              width={520}
              height={520}
              className="object-contain opacity-[0.06]"
            />
          </div>

          {/* Services Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div
                key={service.label}
                ref={(el) => { cardRefs.current[i] = el; }}
                className={`service-card reveal-up stagger-${i + 1}`}
              >
                {/* Icon + tagline row */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "rgba(30,155,240,0.15)" }}
                  >
                    <Icon name={service.icon} size={24} variant="outline" className="text-[#1E9BF0]" />
                  </div>
                  <span
                    className="text-xs font-medium uppercase tracking-widest"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {service.tagline}
                  </span>
                </div>

                <h3 className="font-bold text-white text-xl mb-3 tracking-tight">
                  {service.label}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {service.description}
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feat) => (
                    <span
                      key={feat}
                      className="text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.08)",
                        color: "rgba(255,255,255,0.80)",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }}
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest transition-all duration-200 hover:gap-3"
                  style={{ color: "#1E9BF0" }}
                >
                  Learn More
                  <Icon name="ArrowRightIcon" size={14} variant="outline" />
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
