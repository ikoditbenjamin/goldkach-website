'use client';

import React, { useState, useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const team = [
  {
    name: 'JULIUS OLUKA',
    title: 'Founder & CEO',
    experience: '22 Years of Experience',
    bio: "Julius Oluka is a finance professional with a wealth of experience in the investment industry. He has worked and consulted for several organisations in the UK, managing investment portfolios for endowment funds, implementing robust investment strategies, and structuring investment portfolios across alternative and traditional asset classes. Julius holds a BBA from Makerere University, an MSc in Investment Management from Birkbeck College, University of London, and is a Chartered Alternative Investment Analyst (CAIA) and Chartered Member of the CISI.",
    img: '/teams/Julius.png',
    credentials: ['CAIA', 'MCSI', 'MSc'],
  },
  {
    name: 'PATRICK OPIO',
    title: 'Partner',
    experience: '20 Years of Experience',
    bio: "Patrick is a project management professional, trainer and project funding consultant. With twenty years of UK and overseas experience, he has been involved in iconic infrastructure programmes including High Speed 2, Crossrail, London 2012 Olympics, and the Channel Tunnel Rail Link. Patrick holds an MSc from Imperial College London and completed Financing & Entrepreneurial Business at London Business School.",
    img: '/teams/patrick.png',
    credentials: ['PRINCE2', 'APM', 'MSc'],
  },
  {
    name: 'DR. PATHMANATHAN NAIDOO',
    title: 'Partner',
    experience: '38 Years of Experience',
    bio: "Dr. Pat Naidoo is an Obstetrician and Public Health Physician with over 38 years of experience across Africa, Asia and Latin America. He has headed global health programs for the Rockefeller Foundation, ELMA Philanthropies and the International Development Research Centre. Dr. Pat holds an M.D. Ph.D. from Yale University, MPH from Johns Hopkins, and FRCOG from the University of Edinburgh.",
    img: '/teams/naidoo.png',
    credentials: ['MD', 'PhD', 'MPH'],
  },
  {
    name: 'AARON MWIJE',
    title: 'Partner',
    experience: '11 Years of Experience',
    bio: "Aaron has over 11 years of experience in financial accounting with extensive knowledge in UKGAAP, IFRS, and tax reporting. A results-driven finance professional with a passion for systems optimisation, his expertise lies in financial management, process improvement, and strategic planning. Aaron holds an MSc in Accounting and Finance from Plymouth University and is a Fellow of the ACCA (FCCA).",
    img: '/teams/aaron.png',
    credentials: ['FCCA', 'MSc', 'BBA'],
  },
];

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
            <h2 className="font-bold text-4xl md:text-5xl leading-tight tracking-tight" style={{ color: '#2D2B6B' }}>
              Meet Our Expert<br />
              <span className="text-gradient-sky">Advisors</span>
            </h2>
            <p className="text-sm leading-relaxed max-w-md" style={{ color: 'rgba(45,43,107,0.60)' }}>
              Our team brings decades of combined expertise across investment management, infrastructure, healthcare, and financial accounting.
            </p>
          </div>
        </div>

        {/* Team Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

          {/* Portrait image */}
          <div
            className={`w-full min-h-[500px] overflow-hidden relative reveal-left transition-opacity duration-300 rounded-sm ${
              animating ? 'opacity-50' : 'opacity-100'
            }`}
          >
            <AppImage
              src={member.img}
              alt={`${member.name}, ${member.title} at GoldKach Limited`}
              fill
              priority={current === 0}
              quality={90}
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Gradient for badge legibility */}
            <div
              className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
              style={{ background: 'linear-gradient(to top, rgba(45,43,107,0.85) 0%, transparent 100%)' }}
            />

            {/* Credential badges */}
            <div className="absolute bottom-5 left-5 flex gap-2 flex-wrap">
              {member.credentials.map((cred) => (
                <span
                  key={cred}
                  className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm"
                  style={{ backgroundColor: '#1E9BF0', color: '#fff' }}
                >
                  {cred}
                </span>
              ))}
            </div>
          </div>

          {/* Info panel */}
          <div
            ref={infoRef}
            className={`flex flex-col justify-center reveal-right transition-all duration-300 ${
              animating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
            }`}
          >
            <span
              className="text-xs font-semibold uppercase tracking-widest mb-3 block"
              style={{ color: 'rgba(45,43,107,0.55)' }}
            >
              {member.experience}
            </span>

            <h3 className="font-bold text-3xl md:text-4xl tracking-tight mb-2" style={{ color: '#2D2B6B' }}>
              {member.name}
            </h3>

            <p className="text-sm font-semibold uppercase tracking-wider mb-6" style={{ color: '#1E9BF0' }}>
              {member.title}
            </p>

            {/* Bio — scrollable for long text */}
            <div
              className="text-sm leading-relaxed mb-8 pr-2 overflow-y-auto"
              style={{
                color: 'rgba(45,43,107,0.70)',
                maxHeight: '220px',
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(30,155,240,0.3) transparent',
              }}
            >
              <p>{member.bio}</p>
            </div>

            {/* Dot indicators */}
            <div className="flex gap-2 mb-10">
              {team.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (!animating) {
                      setAnimating(true);
                      setTimeout(() => { setCurrent(i); setAnimating(false); }, 300);
                    }
                  }}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-accent' : 'w-3 bg-border'
                  }`}
                  aria-label={`View ${team[i].name}`}
                />
              ))}
            </div>

            {/* Navigation arrows */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => navigate(-1)}
                className="w-12 h-12 rounded-sm flex items-center justify-center transition-all duration-200"
                style={{ border: '1px solid rgba(45,43,107,0.20)', color: '#2D2B6B' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#2D2B6B';
                  (e.currentTarget as HTMLButtonElement).style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
                  (e.currentTarget as HTMLButtonElement).style.color = '#2D2B6B';
                }}
                aria-label="Previous advisor"
              >
                <Icon name="ArrowLeftIcon" size={18} variant="outline" />
              </button>
              <button
                onClick={() => navigate(1)}
                className="w-12 h-12 rounded-sm flex items-center justify-center transition-all duration-200"
                style={{ border: '1px solid rgba(45,43,107,0.20)', color: '#2D2B6B' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#2D2B6B';
                  (e.currentTarget as HTMLButtonElement).style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
                  (e.currentTarget as HTMLButtonElement).style.color = '#2D2B6B';
                }}
                aria-label="Next advisor"
              >
                <Icon name="ArrowRightIcon" size={18} variant="outline" />
              </button>
            </div>

            {/* CTA */}
            <button
              className="w-full text-white py-4 text-xs font-semibold uppercase tracking-widest transition-colors duration-200"
              style={{ backgroundColor: '#2D2B6B' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1E9BF0')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#2D2B6B')}
            >
              Choose A Specialist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
