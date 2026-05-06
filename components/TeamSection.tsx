'use client';

import React, { useState, useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const team = [
{
  name: 'Robert Kingman',
  title: 'Chief Investment Officer',
  experience: '22 Years of Experience',
  bio: 'Harvard MBA with two decades managing institutional portfolios across global equity and fixed income markets. Former partner at Goldman Sachs Asset Management.',
  img: "/teams/Robert Kingman.png",
  credentials: ['CFA', 'CFP', 'MBA']
},
{
  name: 'Sarah Peterson',
  title: 'Head of Wealth Management',
  experience: '17 Years of Experience',
  bio: 'Specialized in high-net-worth estate planning and tax optimization. Certified Financial Planner with expertise in multi-generational wealth transfer.',
  img: "/teams/sarah.png",
  credentials: ['CFP', 'CPA', 'JD']
},
{
  name: 'Robin McAllister',
  title: 'Director of Corporate Advisory',
  experience: '14 Years of Experience',
  bio: 'M&A specialist and corporate finance strategist. Led over $2.4B in corporate transactions across technology, healthcare, and energy sectors.',
  img: "/teams/robin.png",
  credentials: ['CFA', 'MBA', 'Series 7']
}];


export default function TeamSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const infoRef = useRef<HTMLDivElement>(null);
  const sectionRef = useScrollReveal<HTMLElement>();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal-left, .reveal-right, .reveal-up').forEach((el) =>
          el.classList.add('active')
          );
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const navigate = (direction: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => {
        const next = prev + direction;
        if (next >= team.length) return 0;
        if (next < 0) return team.length - 1;
        return next;
      });
      setAnimating(false);
    }, 300);
  };

  const member = team[current];

  return (
    <section id="team" className="py-20 px-6 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 reveal-up">
          <span className="section-label">Who We Are</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-bold text-4xl md:text-5xl leading-tight tracking-tight" style={{ color: "#2D2B6B" }}>
              Meet Our Expert<br />
              <span className="text-gradient-sky">Advisors</span>
            </h2>
            <p className="text-sm leading-relaxed max-w-md" style={{ color: "rgba(45,43,107,0.60)" }}>
              Investors generally expect higher returns from riskier investments. When a low-risk investment is made, the return is generally low. Similarly, high risk comes with high returns.
            </p>
          </div>
        </div>

        {/* Team Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image */}
          <div
            className={`w-full aspect-[4/5] bg-secondary overflow-hidden relative reveal-left transition-opacity duration-300 ${animating ? 'opacity-50' : 'opacity-100'}`}>
            
            <AppImage
              src={member.img}
              alt={`${member.name}, ${member.title} at GoldKach Limited`}
              fill
              quality={85}
              className="object-cover object-top grayscale"
              sizes="(max-width: 1024px) 100vw, 50vw" />
            
            {/* Credential Badges */}
            <div className="absolute bottom-4 left-4 flex gap-2">
              {member.credentials.map((cred) =>
              <span
                key={cred}
                className="px-2.5 py-1 text-xs font-700 uppercase tracking-wider bg-accent text-primary rounded-sm">
                
                  {cred}
                </span>
              )}
            </div>
          </div>

          {/* Info */}
          <div
            ref={infoRef}
            className={`flex flex-col justify-between min-h-[400px] reveal-right transition-opacity duration-300 ${animating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
            
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: "rgba(45,43,107,0.55)" }}>
                {member.experience}
              </span>
              <h3 className="font-bold text-3xl md:text-4xl tracking-tight mb-2" style={{ color: "#2D2B6B" }}>
                {member.name}
              </h3>
              <p className="text-sm font-semibold uppercase tracking-wider mb-6" style={{ color: "#1E9BF0" }}>
                {member.title}
              </p>
              <p className="text-sm leading-relaxed mb-8 max-w-sm" style={{ color: "rgba(45,43,107,0.60)" }}>
                {member.bio}
              </p>

              {/* Dot indicators */}
              <div className="flex gap-2 mb-10">
                {team.map((_, i) =>
                <button
                  key={i}
                  onClick={() => {if (!animating) {setAnimating(true);setTimeout(() => {setCurrent(i);setAnimating(false);}, 300);}}}
                  className={`h-1 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-accent' : 'w-3 bg-border'}`}
                  aria-label={`View ${team[i].name}`} />

                )}
              </div>
            </div>

            <div className="mt-auto">
              {/* Navigation Arrows */}
              <div className="flex gap-6 mb-8">
                <button
                  onClick={() => navigate(-1)}
                  className="w-12 h-12 rounded-sm flex items-center justify-center transition-all duration-200"
                  style={{ border: "1px solid rgba(45,43,107,0.20)", color: "#2D2B6B" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#2D2B6B"; (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = "#2D2B6B"; }}
                  aria-label="Previous advisor">
                  <Icon name="ArrowLeftIcon" size={18} variant="outline" />
                </button>
                <button
                  onClick={() => navigate(1)}
                  className="w-12 h-12 rounded-sm flex items-center justify-center transition-all duration-200"
                  style={{ border: "1px solid rgba(45,43,107,0.20)", color: "#2D2B6B" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#2D2B6B"; (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = "#2D2B6B"; }}
                  aria-label="Next advisor">
                  <Icon name="ArrowRightIcon" size={18} variant="outline" />
                </button>
              </div>

              {/* CTA */}
              <button className="w-full text-white py-4 text-xs font-semibold uppercase tracking-widest transition-colors duration-200" style={{ backgroundColor: "#2D2B6B" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1E9BF0")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#2D2B6B")}>
                Choose A Specialist
              </button>
            </div>
          </div>
        </div>

        {/* All Advisors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 border-t border-border pt-10">
          {team.map((member, i) =>
          <button
            key={member.name}
            onClick={() => {if (!animating) {setAnimating(true);setTimeout(() => {setCurrent(i);setAnimating(false);}, 300);}}}
            className={`text-left p-4 rounded-lg border transition-all duration-200 ${i === current ? 'border-accent/40 bg-secondary' : 'border-border hover:border-accent/20 hover:bg-secondary/50'}`}>
            
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-secondary shrink-0">
                  <AppImage
                  src={member.img}
                  alt={member.name}
                  width={40}
                  height={40}
                  sizes="40px"
                  quality={75}
                  className="object-cover grayscale" />
                
                </div>
                <div>
                  <p className="text-sm font-semibold leading-tight" style={{ color: "#2D2B6B" }}>{member.name}</p>
                  <p className="text-xs" style={{ color: "rgba(45,43,107,0.55)" }}>{member.title}</p>
                </div>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>);

}