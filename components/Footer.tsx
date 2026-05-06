"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/ui/AppIcon";

export default function Footer() {
  const [year, setYear] = useState("2025");
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setYear(new Date()?.getFullYear()?.toString());
  }, []);

  /* reveal animation for CTA */
  useEffect(() => {
    const el = ctaRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting)
          el.querySelectorAll(".reveal-up").forEach((c) => c.classList.add("active"));
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <footer style={{ backgroundColor: "#2D2B6B" }}>

      {/* ══════════════════════════════════════
          CTA — "Looking for an Advisor?"
      ══════════════════════════════════════ */}
      <div ref={ctaRef} className="px-6 py-14">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text */}
          <div className="reveal-up">
            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.50)" }}>
              Make an Appointment
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Looking for an Advisor?
            </h2>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 reveal-up stagger-2">
            <a
              href="/contact"
              className="btn-primary"
            >
              Request Consultation
            </a>
            <a
              href="tel:+2562009033140"
              className="flex items-center gap-3 px-6 py-3 rounded-sm text-white transition-colors duration-200 hover:bg-white/5"
              style={{ border: "1px solid rgba(255,255,255,0.20)" }}
            >
              <Icon name="PhoneIcon" size={16} variant="outline" className="text-[#1E9BF0]" />
              <span className="text-sm font-semibold">+256393246074

              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          WHITE DIVIDER
      ══════════════════════════════════════ */}
      <div className="border-t border-white mx-6" />

      {/* ══════════════════════════════════════
          LINKS GRID
      ══════════════════════════════════════ */}
      <div className="px-6 pt-12 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">

            {/* Brand + Address */}
            <div className="lg:col-span-2">
              <div className="mb-5">
                <Image
                  src="/goldkach.png"
                  alt="GoldKach Logo"
                  width={180}
                  height={54}
                  className="object-contain h-14 w-auto"
                />
              </div>
              <div className="flex items-start gap-2 text-sm leading-relaxed">
                <svg
                  className="w-4 h-4 mt-0.5 shrink-0"
                  style={{ color: "#1E9BF0" }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p style={{ color: "rgba(255,255,255,0.80)" }}>
                  3rd Floor, Kanjokya House, Suite F3 – F4 Plot
                  <br />
                  90, Kanjokya Street
                  <br />
                  P.O.Box 500094 Kampala,
                  <br />
                  Uganda +256 200903314
                  <br />/ +256 393246074
                </p>
              </div>
            </div>

            {/* Connect */}
            <div>
              <p className="text-base font-bold text-white mb-4">Connect</p>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Sign In",    href: "#" },
                  { label: "Contact Us", href: "/contact" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.80)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#1E9BF0")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.80)")}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-base font-bold text-white mb-4">Navigation</p>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Home",           href: "/" },
                  { label: "About Us",       href: "/#about" },
                  { label: "Products",       href: "/products" },
                  { label: "Who Can Invest", href: "/products#who-can-invest" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.80)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#1E9BF0")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.80)")}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Legal + Follow Us */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-base font-bold text-white mb-4">Legal</p>
                <div className="flex flex-col gap-3">
                  {[
                    { label: "Privacy Policy", href: "/privacy-policy" },
                    { label: "Cookie Policy",  href: "/cookie-policy" },
                    { label: "Legal Notice",   href: "/legal-notice" },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.80)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#1E9BF0")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.80)")}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-base font-bold text-white mb-4">Follow us</p>
                <div className="flex gap-3">
                  {/* Facebook */}
                  <a href="#" aria-label="GoldKach on Facebook"
                    className="w-9 h-9 rounded flex items-center justify-center transition-opacity duration-200 hover:opacity-80"
                    style={{ backgroundColor: "#1E9BF0" }}>
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  {/* Twitter/X */}
                  <a href="#" aria-label="GoldKach on Twitter"
                    className="w-9 h-9 rounded flex items-center justify-center transition-opacity duration-200 hover:opacity-80"
                    style={{ backgroundColor: "#1E9BF0" }}>
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  {/* YouTube */}
                  <a href="#" aria-label="GoldKach on YouTube"
                    className="w-9 h-9 rounded flex items-center justify-center transition-opacity duration-200 hover:opacity-80"
                    style={{ backgroundColor: "#1E9BF0" }}>
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── White divider above copyright ── */}
          <div className="border-t border-white mb-6" />

          {/* Copyright */}
          <p className="text-sm font-bold text-white mb-6">
            Copyright © {year} GoldKach. All Rights Reserved.
          </p>

          {/* Investment Disclaimer */}
          <p className="text-xs leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.70)" }}>
            Values detailed in any report are not guaranteed and are subject to change. Projections
            in any presentation are approximate and based on the criteria specified which may or may
            not turn out to be accurate. The value of any investments can go down as well as up and
            you might not get back what you put in. You may have difficulty selling any investment at
            a reasonable price and in some circumstances, it might be difficult to sell at any price.
            Do not invest unless you have carefully thought about whether you can afford it and
            whether it is right for you; and if necessary consult with a professional adviser.
          </p>

          {/* Registration Text */}
          <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.70)" }}>
            GoldKach LLP is registered with Companies House, registration number: OC422620 with
            registered address 124 City Road EC1V 2NX London, UK. GoldKach Uganda Limited Company
            Registration Number: 80020003642777. Registered in Kampala, Uganda with registered
            address 3<sup>rd</sup> Floor Kanjokya House, Plot 90 Kanjokya Street. GoldKach Kenya
            Limited registration number PVT-3QU7KKGE, registered in Nairobi, Kenya with registered
            address The Pavilion, Lower Kabete Road, Westlands.
          </p>
        </div>
      </div>

    </footer>
  );
}
