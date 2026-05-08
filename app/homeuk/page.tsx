import type { Metadata } from "next";
import React from "react";
import CountryHeroSection from "@/components/CountryHeroSection";
import CountryStatsBanner from "@/components/CountryStatsBanner";
import CountryInsightsFeature from "@/components/CountryInsightsFeature";
import CountryInvestingSteps from "@/components/CountryInvestingSteps";
import CountryAfricaSection from "@/components/CountryAfricaSection";
import CountryFooterQuote from "@/components/CountryFooterQuote";

export const metadata: Metadata = {
  title: "GoldKach United Kingdom — Global Financial Services",
  description:
    "GoldKach UK offers world-class investment management and global market access to individuals and institutions in the United Kingdom.",
  openGraph: {
    title: "GoldKach United Kingdom — Global Financial Services",
    description:
      "World-class investment management and global market access for individuals and institutions in the United Kingdom.",
    url: "https://www.goldkach.com/homeuk",
    images: [
      {
        url: "/hero/hero.png",
        width: 1200,
        height: 630,
        alt: "GoldKach United Kingdom — Global Financial Services",
      },
    ],
  },
};

export default function UKHomePage() {
  return (
    <main>
      <div className="noise-overlay" aria-hidden="true" />
      <CountryHeroSection />
      <CountryStatsBanner />
      <CountryInsightsFeature />
      <CountryInvestingSteps />
      <CountryAfricaSection />
      <CountryFooterQuote />
    </main>
  );
}
