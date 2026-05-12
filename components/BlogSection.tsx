'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const posts = [
{
  category: 'Investment Strategy',
  title: '6 reasons every small investor should be blogging — are you missing the boat?',
  date: 'Apr 18, 2026',
  img: "/blog/strategy.jpg",
  readTime: '4 min read',
  slug: '#blog'
},
{
  category: 'Market Insights',
  title: 'Study shows small investors that blog get 3x more website visitors and higher conversions',
  date: 'Apr 12, 2026',
  img: "/blog/market-insights.png",
  readTime: '6 min read',
  slug: '#blog'
},
{
  category: 'Wealth Management',
  title: 'Forget community, forget conversations: investors blogging is about money',
  date: 'Apr 5, 2026',
  img: "/blog/wealth-management.jpg",
  readTime: '5 min read',
  slug: '#blog'
}];


export default function BlogSection() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardRefs.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.1 }
    );
    cards.forEach((c) => {if (c) obs.observe(c);});
    return () => obs.disconnect();
  }, []);

  return (
    <section id="blog" className="py-20 px-6" style={{ backgroundColor: '#0D0C24' }} ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="section-label reveal-fade">Insi</span>
            <h2 className="font-bold text-3xl md:text-5xl leading-tight tracking-tight reveal-up stagger-1" style={{ color: "#ffffff" }}>
              From the Blog
            </h2>
          </div>
          <Link
            href="#blog"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest hover:gap-4 transition-all duration-200"
            style={{ color: "#1E9BF0" }}>
            View All Posts
            <Icon name="ArrowRightIcon" size={14} variant="outline" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) =>
          <div
            key={post.title}
            ref={(el) => {cardRefs.current[i] = el;}}
            className={`group reveal-up stagger-${i + 1}`}>

              {/* Image */}
              <div className="w-full aspect-[16/10] overflow-hidden rounded-sm mb-5 relative" style={{ backgroundColor: "rgba(30,155,240,0.08)" }}>
                <AppImage
                src={post.img}
                alt={`Blog post thumbnail for: ${post.title}, financial insights from GoldKach`}
                fill={false}
                width={600}
                height={375}
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={80}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {/* subtle gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2B6B]/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#1E9BF0" }}>{post.category}</span>
                <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.20)" }}></span>
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{post.date}</span>
                <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.20)" }}></span>
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{post.readTime}</span>
              </div>

              <h3 className="font-semibold text-lg leading-snug tracking-tight mb-3 transition-colors duration-200" style={{ color: "#ffffff" }}>
                <Link href={post.slug} className="hover:text-[#1E9BF0] transition-colors duration-200">{post.title}</Link>
              </h3>

              <Link
              href={post.slug}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest hover:gap-3 transition-all duration-200"
              style={{ color: "rgba(255,255,255,0.45)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1E9BF0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}>
                Read More
                <Icon name="ArrowRightIcon" size={12} variant="outline" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>);

}