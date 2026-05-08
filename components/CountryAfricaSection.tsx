'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function CountryAfricaSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section className="py-10 px-6" style={{ backgroundColor: '#EFF8FF' }} ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left — text */}
          <div className="reveal-left">
            <h2
              className="font-bold text-2xl md:text-3xl leading-tight tracking-tight mb-4"
              style={{ color: '#2D2B6B' }}
            >
              Putting global markets within reach of African Investors
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: 'rgba(45,43,107,0.65)' }}>
              Not everyone has equal access and opportunity to the best concepts. We strive to close the gap. Our team is committed to making global investment work and this means bringing to people who come to profit despite being young.
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(45,43,107,0.65)' }}>
              Through our platform, African investors can access ETFs, equities, bonds, and alternative assets from global markets — all managed by experienced professionals who understand both local and international financial landscapes.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-sm font-bold transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: '#1E9BF0', color: '#ffffff' }}
            >
              Explore Products
              <Icon name="ArrowRightIcon" size={14} variant="outline" />
            </Link>
          </div>

          {/* Right — trading floor image */}
          <div className="reveal-right">
            <div
              className="w-full overflow-hidden rounded-lg relative"
              style={{
                aspectRatio: '4/3',
                backgroundColor: '#dbeafe',
                boxShadow: '0 12px 40px rgba(45,43,107,0.22), 0 4px 12px rgba(30,155,240,0.12)',
              }}
            >
              <AppImage
                src="/home/dividends.jpg"
                alt="Financial analysts monitoring global markets on trading floor screens"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />
              {/* Overlay badge */}
              <div
                className="absolute bottom-4 left-4 right-4 rounded-lg p-3"
                style={{ backgroundColor: 'rgba(45,43,107,0.90)', backdropFilter: 'blur(8px)' }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0"
                    style={{ backgroundColor: '#1E9BF0' }}
                  >
                    <Icon name="GlobeAltIcon" size={18} variant="outline" className="text-white" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold leading-tight">Global Market Access</p>
                    <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.60)' }}>
                      26+ investment products available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
