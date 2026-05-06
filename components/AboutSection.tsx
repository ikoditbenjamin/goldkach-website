'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const capabilities = [
  { icon: 'AcademicCapIcon' as const,    
    title: 'College Savings',      
    description: 'Helping families build and grow college savings through smart investment strategies.' },
  { icon: 'BanknotesIcon' as const,      
    title: 'Wealth Management',    
    description: 'Seamless execution of high-value investments across private markets, equities, and alternative assets for high-net-worth clients.' },
  { icon: 'ChartBarSquareIcon' as const, 
    title: 'Stocks Management',    
    description: 'From highest stock profits tailored equity strategies.' },
  { icon: 'ShieldCheckIcon' as const,    
    title: 'Income Protection',     
    description: 'Strategies to safeguard and stabilize your income stream against financial disruptions.' },
  { icon: 'LightBulbIcon' as const,      title: 'Investment Advice',    description: 'Buying and selling financial instruments on your behalf.' },
  { icon: 'DocumentTextIcon' as const,   
    title: 'Industrial Contracts', 
    description: 'Buying and selling financial instruments and agreements.' },
];

export default function AboutSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="about" className="py-20 px-6 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

          {/* Left: Image */}
          <div className="relative reveal-left">
            <div className="w-full h-full min-h-[480px] overflow-hidden rounded-sm relative">
              <AppImage
                src="/about/Goldkach-team.png"
                alt="GoldKach team collaborating"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-sm rounded-sm p-5" style={{ backgroundColor: "rgba(45,43,107,0.92)" }}>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-4xl font-extrabold leading-none" style={{ color: "#1E9BF0" }}>8</p>
                    <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mt-1">Years of Experience</p>
                  </div>
                  <div className="w-px h-12 bg-white/20" />
                  <p className="text-white/80 text-xs leading-relaxed">
                    In finance, the benefit from an investment is called a return. The return may consist of a gain realized from the sale of a property or an investment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Capabilities */}
          <div className="reveal-right flex flex-col justify-between">
            <div className="mb-8">
              <span className="section-label reveal-fade">Our Capabilities</span>
              <h2 className="font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4 reveal-up stagger-1" style={{ color: "#2D2B6B" }}>
                What We Can Do More in{' '}
                <span className="text-gradient-sky">Different Cases</span>
              </h2>
              <p className="text-sm leading-relaxed mb-2 reveal-up stagger-2" style={{ color: "rgba(45,43,107,0.65)" }}>
                Our Advisors Advise
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {capabilities.map((cap, i) => (
                <div
                  key={cap.title}
                  className={`flex items-start gap-3 p-4 rounded-sm border transition-all duration-200 reveal-scale stagger-${Math.min(i + 1, 6)}`}
                  style={{ borderColor: "rgba(45,43,107,0.12)", backgroundColor: "rgba(240,245,255,0.6)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(30,155,240,0.40)";
                    (e.currentTarget as HTMLDivElement).style.backgroundColor = "rgba(30,155,240,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(45,43,107,0.12)";
                    (e.currentTarget as HTMLDivElement).style.backgroundColor = "rgba(240,245,255,0.6)";
                  }}
                >
                  <div className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "rgba(30,155,240,0.12)" }}>
                    <Icon name={cap.icon} size={18} variant="outline" className="text-[#1E9BF0]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: "#2D2B6B" }}>{cap.title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(45,43,107,0.60)" }}>{cap.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="#contact" className="btn-primary mt-8 self-start reveal-up stagger-4">
              Learn More
              <Icon name="ArrowRightIcon" size={16} variant="outline" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
