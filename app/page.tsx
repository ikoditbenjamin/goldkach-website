import type { Metadata } from "next";
import React from "react";
import HeroSection from "@/components/HeroSection";
import MissionBanner from "@/components/MissionBanner";
// import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import InvestmentProjectionSimulator from "@/components/InvestmentProjectionSimulator";

export const metadata: Metadata = {
  title: "GoldKach Limited — Unlocking Global Investments",
  description:
    "GoldKach Limited is a CMA-regulated investment management firm offering wealth management, investment advisory, retirement planning, and corporate financial services to individuals and institutions across Africa.",
  openGraph: {
    title: "GoldKach Limited — Unlocking Global Investments",
    description:
      "CMA-regulated investment management firm offering wealth management, investment advisory, and global market access for individuals and institutions across Africa.",
    url: "https://www.goldkach.com",
    images: [
      {
        url: "/hero/hero.png",
        width: 1200,
        height: 630,
        alt: "GoldKach Limited — Unlocking Global Investments",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <main>
      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      <HeroSection />
      <MissionBanner />
      {/* <StatsSection /> */}
      <AboutSection />
      <ServicesSection />
      <InvestmentProjectionSimulator />
      <TeamSection />
      <TestimonialsSection />
      <BlogSection />
    </main>
  );
}
