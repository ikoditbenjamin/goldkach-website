'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const STORAGE_KEY = 'goldkach_country_modal_seen';

const countries = [
  { name: 'Uganda',         flag: '/flags/uganda.png', href: '/homeug' },
  { name: 'Kenya',          flag: '/flags/kenya.png',  href: '/homeke' },
  { name: 'United Kingdom', flag: '/flags/uk.png',     href: '/homeuk' },
];

export default function CountrySelectModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show if the user has never seen it before in this browser
    const alreadySeen = localStorage.getItem(STORAGE_KEY);
    if (!alreadySeen) {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, '1');
    setVisible(false);
  };

  const handleSelect = (href: string) => {
    dismiss();
    window.location.href = href;
  };

  const handleSkip = () => {
    dismiss();
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center px-4"
      style={{ backgroundColor: 'rgba(13,12,36,0.80)', zIndex: 99999, backdropFilter: 'blur(6px)' }}
    >
      <div
        className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl"
        style={{ border: '1px solid rgba(30,155,240,0.20)' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[420px]">

          {/* ── Left: dark navy — text + country buttons ── */}
          <div
            className="p-8 md:p-10 flex flex-col justify-center"
            style={{ background: 'linear-gradient(135deg, #1a1a4e 0%, #2D2B6B 100%)' }}
          >
            <h2 className="text-3xl font-bold text-white mb-3 leading-tight">
              Hello
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.72)' }}>
              At GoldKach, we&apos;re here to help you make smart investments, wherever you are.
              Select the office nearest to you for personalized support:
            </p>

            <div className="flex flex-col gap-3">
              {countries.map((country) => (
                <button
                  key={country.name}
                  onClick={() => handleSelect(country.href)}
                  className="flex items-center gap-3 px-6 py-3 rounded-lg text-sm font-bold text-white transition-all duration-200 hover:opacity-90 cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, #1E9BF0, #38BDF8)',
                    boxShadow: '0 4px 14px rgba(30,155,240,0.35)',
                  }}
                >
                  <Image
                    src={country.flag}
                    alt={country.name}
                    width={24}
                    height={16}
                    className="object-cover rounded-sm flex-shrink-0"
                  />
                  {country.name}
                </button>
              ))}
            </div>

            <button
              onClick={handleSkip}
              className="mt-6 text-xs font-semibold text-center transition-colors duration-200 hover:text-white cursor-pointer"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              Continue without selecting →
            </button>
          </div>

          {/* ── Right: white bg — centered logo + tagline ── */}
          <div className="hidden md:flex flex-col items-center justify-center p-10 bg-white">
            <Image
              src="/LOGO.png"
              alt="GoldKach"
              width={800}
              height={800}
              className="object-contain mb-4"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
