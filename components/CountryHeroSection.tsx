'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

const carouselSlides = [
  { src: '/home/home.jpg', alt: 'Professional financial advisor in a modern office' },
  { src: '/hero/hero1.png', alt: 'Modern glass skyscrapers in a global financial district' },
  { src: '/home/home1.jpg', alt: 'Global financial district skyline' },
  { src: '/home/home3.jpg', alt: 'Financial charts and data analytics on screens' },
];

export default function CountryHeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;
      bgRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: '70vh' }}
      aria-label="GoldKach country hero"
    >
      {/* Carousel background */}
      <div
        ref={bgRef}
        className="absolute inset-x-0 z-0 will-change-transform"
        style={{ top: '-15%', bottom: '-15%' }}
      >
        {carouselSlides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === activeSlide ? 1 : 0 }}
          >
            <AppImage
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              loading={i === 0 ? 'eager' : 'lazy'}
              className="object-cover object-center"
              sizes="100vw"
              quality={85}
            />
          </div>
        ))}
        {/* Dark overlay — stronger on left for text legibility */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(105deg, rgba(45,43,107,0.90) 0%, rgba(45,43,107,0.75) 40%, rgba(45,43,107,0.50) 70%, rgba(45,43,107,0.25) 100%)',
          }}
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(to top, rgba(45,43,107,0.80) 0%, rgba(45,43,107,0.20) 50%, transparent 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex items-center" style={{ minHeight: '70vh' }}>
        <div className="max-w-2xl py-16">
          <h1
            className="font-bold text-white leading-tight tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
          >
            Global financial
            <br />
            services for
            <br />
            our clients
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-10 max-w-lg" style={{ color: 'rgba(255,255,255,0.80)' }}>
            We are offering investment solutions that empower individuals and institutions to
            access global markets and diversify their portfolios
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm text-sm font-bold transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: '#1E9BF0', color: '#ffffff' }}
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {carouselSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeSlide ? 'w-8 bg-[#1E9BF0]' : 'w-3 bg-white/30'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
