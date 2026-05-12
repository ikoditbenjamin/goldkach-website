'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const carouselSlides = [
  {
    src: '/hero/hero5.jpg',
    alt: 'Professional financial advisor in a bright modern office, confident posture, well-lit corporate environment',
  },
  {
    src: '/hero/hero1.png',
    alt: 'Modern glass skyscrapers in a global financial district representing investment and growth',
  },
  {
    src: '/hero/hero3.png',
    alt: 'Modern glass skyscrapers in a global financial district representing investment and growth',
  },
  {
    src: '/hero/hero2.png',
    alt: 'Financial charts and data analytics on screens representing global investment strategies',
  },
];

export default function HeroSection() {
  const scrollBarRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Parallax — background moves at 40% of scroll speed
  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;
      const scrollY = window.scrollY;
      bgRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className="relative w-full min-h-screen flex items-end justify-start overflow-hidden bg-primary"
      aria-label="GoldKach Limited hero"
    >
      {/*
        ── BACKGROUND IMAGES ──────────────────────────────────────────────────
        Reduced parallax buffer: top/bottom was ±15%, now ±6%.
        This keeps the image closer to the viewport edges so less of the
        oversized canvas is wasted — images appear larger and better-framed.
      */}
      <div
        ref={bgRef}
        className="absolute inset-x-0 z-0 will-change-transform"
        style={{ top: '-3%', bottom: '-3%' }}
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
              priority={i <= 1}
              loading={i <= 1 ? 'eager' : 'lazy'}
              className="object-cover object-top"
              sizes="100vw"
              quality={85}
            />
          </div>
        ))}

        {/* Gradients sit inside the parallax layer so they move with the image */}
        <div className="absolute inset-0 hero-overlay z-10" />
        <div className="absolute inset-0 hero-overlay-bottom z-10" />
      </div>

      {/* Carousel Dot Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {carouselSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeSlide ? 'w-8 bg-accent' : 'w-3 bg-white/30'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Trusted Badge */}
      <div className="absolute top-0 right-0 z-20 hidden lg:block">
        <div className="relative w-[42%] h-screen">
          <div className="absolute top-32 right-8 glass-card rounded-lg px-5 py-4 flex items-center gap-3 animate-float-slow">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
              <Icon name="ShieldCheckIcon" size={20} variant="solid" className="text-accent" />
            </div>
            <div>
              {/* Dark-blue label + sky-blue sub-text */}
              <p className="text-white text-xs font-800 leading-tight">REGISTERED&amp;MANAGED</p>
              <p className="text-sky-300/80 text-xs font-600">Capital Market Authority (CMA)</p>
            </div>
          </div>

          <div
            className="absolute top-56 right-16 glass-card rounded-lg px-5 py-4 animate-float-slow"
            style={{ animationDelay: '1.5s' }}
          >
            {/* Sky-blue category label */}
            <p className="text-sky-400/80 text-xs font-700 uppercase tracking-wider mb-1">
              Portfolio Assets Management
            </p>
            <p className="text-white text-2xl font-800 leading-none">100+</p>
            <div className="flex items-center gap-1 mt-1">
              <Icon name="ArrowTrendingUpIcon" size={14} variant="solid" className="text-green-400" />
              <span className="text-green-400 text-xs font-700">16% Annual Return</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── HERO CONTENT ──────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 pt-36">
        <div className="max-w-3xl">

          {/* Eye-brow badge — sky-blue dot + white/sky label */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-sky-400/30 rounded-sm mb-6 backdrop-blur-sm bg-sky-950/20">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
            <span className="text-xs font-900 uppercase tracking-widest text-sky-300/90">
              Global Financial Services
            </span>
          </div>

          {/*
            Headline colour logic:
              Line 1 "UNLOCKING"  → pure white   (authority / clarity)
              Line 2 "GLOBAL"     → sky-blue gradient (energy / global reach)
              Line 3 "INVESTMENTS"→ dark-navy/indigo tint via text-blue-200
                                    so it reads as light navy against the
                                    dark image background
          */}
          <h1
            className="font-display font-800 leading-[0.88] tracking-tighter mb-6"
            style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}
          >
            <span className="text-white">UNLOCKING</span>
            <br />
            <span className="text-gradient-sky">GLOBAL</span>
            <br />
            <span className="text-blue-200/90">INVESTMENTS</span>
          </h1>

          {/* Body copy — soft white for readability, sky-blue on key phrase */}
          <p className="text-base md:text-lg text-white/80 font-600 leading-relaxed mb-10 max-w-xl">
            Personalized financial strategies for{' '}
            <span className="text-sky-300 font-700">individuals and corporations</span>{' '}
            — building wealth, securing futures, and expanding horizons across global markets.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="tel:+256393246074" className="btn-primary cursor-pointer">
              Free Consultation
              <Icon name="ArrowRightIcon" size={16} variant="outline" />
            </a>
            <a href="https://goldkach.co.ug/" target="_blank" rel="noopener noreferrer" className="btn-outline cursor-pointer">
              Invest Now
            </a>
          </div>

          {/* Trusted-by strip — label in sky-blue, names in muted white */}
          <div className="mt-14 pt-8 border-t border-white/10">
            <p className="text-xs font-600 uppercase tracking-widest text-sky-400/50 mb-5">
              Trusted by leading institutions
            </p>
            <div className="flex flex-wrap items-center gap-8">
              {['Y-Save Ug', 'Fireplace Ug', 'Shack Investment', 'Perles Medical'].map((name) => (
                <span
                  key={name}
                  className="text-sm font-700 uppercase tracking-wider text-blue-200/30 hover:text-sky-300/70 transition-colors cursor-default"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-[9px] uppercase tracking-[0.4em] text-sky-300/40 font-600">Scroll</span>
        <div className="w-px h-10 bg-white/10 relative overflow-hidden">
          <div ref={scrollBarRef} className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-scroll-bar" />
        </div>
      </div>
    </section>
  );
}