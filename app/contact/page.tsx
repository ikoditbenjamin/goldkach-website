'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface FormData {
  name: string;
  email: string;
  phone: string;
  department: string;
  message: string;
}

const departments = [
  'General Inquiry',
  'Investment Advisory',
  'Wealth Management',
  'Funds & ETFs',
  'Corporate Services',
  'Media & Press',
];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    department: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ══════════════════════════════════════
          HERO BANNER
      ══════════════════════════════════════ */}
      <section
        className="relative pt-28 pb-14 px-6 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1a1a4e 0%, #2D2B6B 55%, #1e3a6e 100%)',
          minHeight: '240px',
        }}
      >
        {/* Decorative diamonds */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden opacity-20 pointer-events-none">
          {[
            { w: 220, h: 220, top: 10, right: 80 },
            { w: 160, h: 160, top: 70, right: 10 },
            { w: 100, h: 100, bottom: 10, right: 130 },
          ].map((d, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                width: d.w,
                height: d.h,
                background: 'rgba(30,155,240,0.35)',
                transform: 'rotate(45deg)',
                top: d.top,
                bottom: (d as { bottom?: number }).bottom,
                right: d.right,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
            Contact GoldKach
          </h1>
          <p className="text-lg text-white/80 max-w-md">
            Have a question? We&apos;re ready to answer it.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACT INFO CARDS
      ══════════════════════════════════════ */}
      <section className="px-6 py-10 bg-white border-b" style={{ borderColor: 'rgba(45,43,107,0.08)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">

          {/* Email */}
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded flex items-center justify-center shrink-0"
              style={{ backgroundColor: '#2D2B6B' }}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: '#2D2B6B' }}>Email</p>
              <a href="mailto:info@goldkach.co.ug" className="text-sm" style={{ color: '#1E9BF0' }}>
                info@goldkach.co.ug
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded flex items-center justify-center shrink-0"
              style={{ backgroundColor: '#2D2B6B' }}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: '#2D2B6B' }}>Phone</p>
              <a href="tel:+256200903314" className="text-sm font-semibold" style={{ color: '#2D2B6B' }}>
                +256 200 903 314
              </a>
            </div>
          </div>

          {/* Free Call */}
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded flex items-center justify-center shrink-0"
              style={{ backgroundColor: '#2D2B6B' }}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: '#2D2B6B' }}>Free Call</p>
              <a href="tel:+256393246074" className="text-sm font-semibold" style={{ color: '#2D2B6B' }}>
                +256 393 246 074
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded flex items-center justify-center shrink-0"
              style={{ backgroundColor: '#2D2B6B' }}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: '#2D2B6B' }}>Address</p>
              <p className="text-sm font-semibold" style={{ color: '#2D2B6B' }}>
                Kanjokya Street-Kanjokya House, Plot 90<br />
                Kampala, Uganda
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          FORM + MAP
      ══════════════════════════════════════ */}
      <section className="px-6 py-14" style={{ backgroundColor: '#F0F5FF' }}>
        <div className="max-w-7xl mx-auto">
          <div className="rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-sm" style={{ backgroundColor: '#ffffff' }}>

            {/* ── Left: Form ── */}
            <div className="p-8 md:p-10">
              <h2 className="text-2xl font-bold mb-2" style={{ color: '#2D2B6B' }}>
                Send your message via below form
              </h2>
              <p className="text-sm mb-8" style={{ color: 'rgba(45,43,107,0.55)' }}>
                We&apos;ll respond within one to two business days.
              </p>

              {submitted ? (
                <div className="text-center py-12">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: '#1E9BF0' }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#2D2B6B' }}>Thank you!</h3>
                  <p className="text-sm text-gray-500">Your message has been received. We&apos;ll be in touch shortly.</p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', department: '', message: '' }); }}
                    className="mt-6 px-6 py-2.5 rounded text-sm font-semibold text-white transition hover:opacity-90"
                    style={{ backgroundColor: '#1E9BF0' }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name (*)"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-sm rounded border focus:outline-none focus:ring-2"
                      style={{ borderColor: 'rgba(45,43,107,0.15)', backgroundColor: '#F8FAFF', color: '#2D2B6B', focusRingColor: '#1E9BF0' } as React.CSSProperties}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email (*)"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-sm rounded border focus:outline-none focus:ring-2"
                      style={{ borderColor: 'rgba(45,43,107,0.15)', backgroundColor: '#F8FAFF', color: '#2D2B6B' }}
                    />
                  </div>

                  {/* Phone + Department */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm rounded border focus:outline-none focus:ring-2"
                      style={{ borderColor: 'rgba(45,43,107,0.15)', backgroundColor: '#F8FAFF', color: '#2D2B6B' }}
                    />
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm rounded border focus:outline-none focus:ring-2 appearance-none"
                      style={{ borderColor: 'rgba(45,43,107,0.15)', backgroundColor: '#F8FAFF', color: formData.department ? '#2D2B6B' : 'rgba(45,43,107,0.45)' }}
                    >
                      <option value="" disabled>Business Department ▾</option>
                      {departments.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <textarea
                    name="message"
                    placeholder="Your Question"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 text-sm rounded border focus:outline-none focus:ring-2 resize-none"
                    style={{ borderColor: 'rgba(45,43,107,0.15)', backgroundColor: '#F8FAFF', color: '#2D2B6B' }}
                  />

                  <button
                    type="submit"
                    className="px-8 py-3 rounded font-bold text-sm text-white transition-all duration-200 hover:opacity-90"
                    style={{ backgroundColor: '#2D2B6B' }}
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>

            {/* ── Right: Map ── */}
            <div className="relative min-h-[400px] lg:min-h-0">
              <iframe
                title="GoldKach Location — Kanjokya House, Kampala"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7573!2d32.5899!3d0.3476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb0f4e3b5555%3A0x1234567890abcdef!2sKanjokya%20Street%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sug!4v1700000000000"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
