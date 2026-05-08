"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import AppImage from "@/components/ui/AppImage";

export default function KenyaHomePage() {
  return (
    <main>
      {/* ══════════════════════════════════════
          HERO — Coming Soon
      ══════════════════════════════════════ */}
      <section
        className="relative w-full min-h-screen flex items-center justify-start overflow-hidden"
        aria-label="GoldKach Kenya — Coming Soon"
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <AppImage
            src="/hero/hero1.png"
            alt="Modern financial district skyline representing GoldKach Kenya's upcoming launch"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={85}
          />
          {/* Dark overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(45,43,107,0.85) 0%, rgba(45,43,107,0.60) 60%, rgba(45,43,107,0.30) 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-xl">
            {/* Country badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm mb-8"
              style={{ backgroundColor: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.20)" }}>
              <Image
                src="/flags/kenya.png"
                alt="Kenya flag"
                width={22}
                height={15}
                className="object-cover rounded-sm"
              />
              <span className="text-xs font-bold uppercase tracking-widest text-white">
                GoldKach Kenya
              </span>
            </div>

            {/* Heading */}
            <h1
              className="font-bold leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)" }}
            >
              <span className="text-white block">Coming</span>
              <span className="block" style={{ color: "#1E9BF0" }}>Soon</span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg leading-relaxed mb-10 max-w-md"
              style={{ color: "rgba(255,255,255,0.80)" }}>
              GoldKach Kenya is launching soon. We&apos;re bringing world-class investment
              management and global market access to Nairobi and beyond.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-bold transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: "#1E9BF0", color: "#ffffff" }}
              >
                Back To Home
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-bold transition-all duration-200 hover:bg-white/10"
                style={{
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  border: "2px solid rgba(255,255,255,0.60)",
                }}
              >
                Get Notified
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
