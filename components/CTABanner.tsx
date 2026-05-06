'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function CTABanner() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref?.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.querySelectorAll('.reveal-up').forEach((c) => c.classList.add('active'));
      },
      { threshold: 0.2 }
    );
    obs?.observe(el);
    return () => obs?.disconnect();
  }, []);

  return (
    <section id="contact" className="py-16 px-6 bg-primary" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text */}
          <div className="reveal-up">
            <p className="text-white/50 text-xs font-600 uppercase tracking-widest mb-1">
              Make an Appointment
            </p>
            <h2 className="font-display font-800 text-white text-2xl md:text-3xl tracking-tighter">
              Looking for an Advisor?
            </h2>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 reveal-up stagger-2">
            <a href="#contact" className="btn-primary">
              Request Consultation
            </a>
            <a
              href="tel:+256393246074"
              className="flex items-center gap-3 px-6 py-3 border border-white/20 rounded-sm text-white hover:bg-white/5 transition-colors duration-200"
            >
              <Icon name="PhoneIcon" size={16} variant="solid" className="text-accent" />
              <span className="text-sm font-600">+256393246074</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}