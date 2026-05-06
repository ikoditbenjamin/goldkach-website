import React from "react";
import HeroSection from "@/components/HeroSection";
import MissionBanner from "@/components/MissionBanner";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";

export default function HomePage() {
  return (
    <main>
      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      <HeroSection />
      <MissionBanner />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <TestimonialsSection />
      <BlogSection />
    </main>
  );
}
