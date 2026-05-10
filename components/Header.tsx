"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import Icon from "@/components/ui/AppIcon";

const navLinks = [
  { label: "About Us",   href: "/#about" },
  { label: "Products",   href: "/products" },
  { label: "Insights",   href: "/insights" },
  { label: "Contact Us", href: "/contact" },
];

const countries = [
  { name: "Uganda",         code: "UG", flag: "/flags/uganda.png", href: "/homeug" },
  { name: "Kenya",          code: "KE", flag: "/flags/kenya.png",  href: "/homeke" },
  { name: "United Kingdom", code: "GB", flag: "/flags/uk.png",     href: "/homeuk" },
];

export default function Header() {
  const router   = useRouter();
  const pathname = usePathname();

  const [scrolled,      setScrolled]      = useState(false);
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [countriesOpen, setCountriesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Derive selected country from current path
  const selected = countries.find((c) => pathname === c.href) ?? countries[0];

  /* ── scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── lock body scroll when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* ── close countries dropdown on outside click ── */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setCountriesOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ════════════════════════════════════════
          TOP BAR  — white bg, contact info
      ════════════════════════════════════════ */}
      <div className="hidden lg:block w-full bg-white border-b" style={{ borderColor: "rgba(45,43,107,0.10)" }}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

          {/* Logo + tagline */}
          <Link href="/" aria-label="GoldKach Home" className="flex items-center gap-3">
            <Image
              src="/goldkach.png"
              alt="GoldKach Logo"
              width={140}
              height={42}
              className="object-contain h-10 w-auto"
              priority
            />
          </Link>

          {/* Contact info pills */}
          <div className="flex items-center gap-8">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded border flex items-center justify-center shrink-0"
                   style={{ borderColor: "rgba(45,43,107,0.15)" }}>
                <svg className="w-4 h-4" style={{ color: "#2D2B6B" }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider" style={{ color: "rgba(45,43,107,0.45)" }}>Phone Number</p>
                <p className="text-sm font-bold" style={{ color: "#2D2B6B" }}>+256393246074</p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-px h-8" style={{ backgroundColor: "rgba(45,43,107,0.12)" }} />

            {/* Address */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded border flex items-center justify-center shrink-0"
                   style={{ borderColor: "rgba(45,43,107,0.15)" }}>
                <svg className="w-4 h-4" style={{ color: "#2D2B6B" }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider" style={{ color: "rgba(45,43,107,0.45)" }}>Kampala, Uganda</p>
                <p className="text-sm font-bold" style={{ color: "#2D2B6B" }}>Kanjokya House, Plot 90</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
          NAV BAR  — dark-blue bg, nav links
      ════════════════════════════════════════ */}
      <nav
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "shadow-nav" : ""
        }`}
        style={{ backgroundColor: "#2D2B6B" }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo on desktop (left side of nav bar) */}
          <Link href="/" aria-label="GoldKach Home" className="hidden lg:flex items-center py-3">
            <Image
              src="/goldkach.png"
              alt="GoldKach Logo"
              width={120}
              height={36}
              className="object-contain h-9 w-auto"
              priority
            />
          </Link>

          {/* Mobile-only logo */}
          <Link href="/" aria-label="GoldKach Home" className="lg:hidden flex items-center py-3">
            <Image
              src="/goldkach.png"
              alt="GoldKach Logo"
              width={120}
              height={36}
              className="object-contain h-9 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-5 py-4 text-sm font-semibold text-white transition-colors duration-200 border-b-2 border-transparent hover:border-[#1E9BF0] hover:text-[#1E9BF0]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side: Countries dropdown + Free Consultation CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Countries */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setCountriesOpen(!countriesOpen)}
                className="flex items-center gap-2 px-4 py-4 text-sm font-semibold text-white hover:text-[#1E9BF0] transition-colors duration-200"
                aria-expanded={countriesOpen}
                aria-haspopup="listbox"
              >
                <span>{selected.name}</span>
                <Image
                  src={selected.flag}
                  alt={selected.name}
                  width={22}
                  height={15}
                  className="object-cover rounded-sm"
                />
                <Icon
                  name="ChevronDownIcon"
                  size={15}
                  variant="outline"
                  className={`transition-transform duration-200 ${countriesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {countriesOpen && (
                <div
                  className="absolute right-0 top-full mt-1 w-44 rounded-lg shadow-xl overflow-hidden z-50"
                  style={{ backgroundColor: "#2D2B6B", border: "1px solid rgba(30,155,240,0.25)" }}
                  role="listbox"
                >
                  {countries.map((country) => (
                    <button
                      key={country.name}
                      role="option"
                      aria-selected={selected.name === country.name}
                      onClick={() => { router.push(country.href); setCountriesOpen(false); }}
                      className="w-full px-4 py-3 text-sm text-white hover:bg-[#1E9BF0]/20 hover:text-[#1E9BF0] transition-colors duration-150 flex items-center justify-between gap-3"
                      style={{
                        backgroundColor: selected.name === country.name ? "rgba(30,155,240,0.15)" : "transparent",
                      }}
                    >
                      <span className="font-medium">{country.name}</span>
                      <Image
                        src={country.flag}
                        alt={country.name}
                        width={28}
                        height={19}
                        className="object-cover rounded-sm flex-shrink-0"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Free Consultation CTA */}
            <a
              href="tel:+256393246074"
              className="flex items-center gap-2 px-5 py-2.5 rounded text-sm font-bold transition-all duration-200 hover:opacity-90 cursor-pointer"
              style={{ backgroundColor: "#ffffff", color: "#2D2B6B", border: "2px solid rgba(255,255,255,0.3)" }}
            >
              <Icon name="PhoneIcon" size={15} variant="outline" className="text-[#1E9BF0]" />
              Free Consultation
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen
              ? <Icon name="XMarkIcon"  size={24} variant="outline" />
              : <Icon name="Bars3Icon"  size={24} variant="outline" />
            }
          </button>
        </div>
      </nav>

      {/* ════════════════════════════════════════
          MOBILE MENU OVERLAY
      ════════════════════════════════════════ */}
      <div
        className={`fixed inset-0 z-40 flex flex-col transition-transform duration-500 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ backgroundColor: "#2D2B6B" }}
        aria-hidden={!menuOpen}
      >
        {/* ── Top bar: logo + close ── */}
        <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.10)" }}>
          <Link href="/" onClick={closeMenu} aria-label="GoldKach Home">
            <Image
              src="/goldkach.png"
              alt="GoldKach Logo"
              width={130}
              height={40}
              className="object-contain h-10 w-auto"
              priority
            />
          </Link>
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="w-9 h-9 flex items-center justify-center rounded border text-white"
            style={{ borderColor: "rgba(255,255,255,0.25)" }}
          >
            <Icon name="XMarkIcon" size={20} variant="outline" />
          </button>
        </div>

        {/* ── Nav links — left-aligned with dividers ── */}
        <div className="flex-1 overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="flex items-center px-6 py-5 text-lg font-bold text-white hover:text-[#1E9BF0] transition-colors duration-200 border-b"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              {link.label}
            </Link>
          ))}

          {/* ── Country selector row ── */}
          <button
            onClick={() => setCountriesOpen(!countriesOpen)}
            className="w-full flex items-center justify-between px-6 py-5 text-lg font-bold border-b transition-colors duration-200 cursor-pointer"
            style={{
              color: countriesOpen ? "#1E9BF0" : "#ffffff",
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            <span>Select a Country</span>
            <div
              className="w-7 h-7 flex items-center justify-center rounded border"
              style={{ borderColor: "rgba(30,155,240,0.40)" }}
            >
              <Icon
                name="ChevronDownIcon"
                size={14}
                variant="outline"
                className={`transition-transform duration-200 text-[#1E9BF0] ${countriesOpen ? "rotate-180" : ""}`}
              />
            </div>
          </button>

          {/* Country list — always visible on mobile, no collapse */}
          <div>
            {countries.map((country) => (
              <button
                key={country.name}
                onClick={() => { router.push(country.href); closeMenu(); setCountriesOpen(false); }}
                className="w-full flex items-center justify-between px-8 py-4 text-base border-b transition-colors duration-150 cursor-pointer"
                style={{
                  color: selected.name === country.name ? "#1E9BF0" : "rgba(255,255,255,0.80)",
                  borderColor: "rgba(255,255,255,0.06)",
                  backgroundColor: selected.name === country.name ? "rgba(30,155,240,0.10)" : "transparent",
                }}
              >
                <span className="font-medium">{country.name}</span>
                <Image src={country.flag} alt={country.name} width={32} height={22} className="object-cover rounded-sm" />
              </button>
            ))}
          </div>

          {/* ── Sign In row ── */}
          <a
            href="https://goldkach.co.ug/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="flex items-center px-6 py-5 text-lg font-bold text-white hover:text-[#1E9BF0] transition-colors duration-200 border-b"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            Sign In
          </a>
        </div>

        {/* ── Bottom CTAs ── */}
        <div className="px-6 py-6 flex flex-col gap-3 border-t" style={{ borderColor: "rgba(255,255,255,0.10)" }}>
          {/* Invest Today */}
          <a
            href="https://goldkach.co.ug/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-sm text-sm font-bold transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: "#1E9BF0", color: "#ffffff" }}
          >
            Invest Today
          </a>
          {/* Free Consultation */}
          <a
            href="tel:+256393246074"
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-sm text-sm font-bold transition-all duration-200 hover:opacity-90 cursor-pointer"
            style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.25)" }}
          >
            <Icon name="PhoneIcon" size={16} variant="outline" />
            Free Consultation
          </a>
        </div>
      </div>
    </>
  );
}
