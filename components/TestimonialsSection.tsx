'use client';

import React, { useState, useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const testimonials = [
{
  quote:
  '"Would you like me to give you a formula for success? It\'s quite simple, really: Double your rate of failure. You are thinking of failure as the enemy of success. But it isn\'t at all. You can be discouraged by failure or you can learn from it, so go ahead and make mistakes. Make all you can. Because remember that\'s where you will find success."',
  name: 'Jack Murphy',
  title: 'CEO, Murphy Capital Group',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1fda0780a-1768469750149.png",
  rating: 5
},
{
  quote:
  '"GoldKach completely transformed how I think about retirement. Their team developed a comprehensive plan that aligned perfectly with my goals. My portfolio has grown 22% in the past 18 months. I couldn\'t be more satisfied with the personalized attention and expertise they provide."',
  name: 'Priya Nair',
  title: 'Senior VP, TechVentures Inc.',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1c59e8e-1773012301543.png",
  rating: 5
},
{
  quote:
  '"As a business owner, I needed a financial partner who understood both personal and corporate finance. GoldKach delivered exactly that. Their corporate advisory team helped us restructure our pension plan and saved us $2.1M in the first year alone."',
  name: 'Marcus Williams',
  title: 'Founder, Williams & Associates',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_18c66c46c-1763301780768.png",
  rating: 5
}];


export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const sectionRef = useScrollReveal<HTMLElement>();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal-up').forEach((c) => c.classList.add('active'));
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const navigate = (dir: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((p) => {
        const n = p + dir;
        if (n >= testimonials.length) return 0;
        if (n < 0) return testimonials.length - 1;
        return n;
      });
      setAnimating(false);
    }, 300);
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-20 px-6" style={{ backgroundColor: "#F0F5FF" }} ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 reveal-up">
          <span className="section-label reveal-fade">Testimonials</span>
          <h2 className="font-bold text-3xl md:text-5xl leading-tight tracking-tight reveal-up stagger-1" style={{ color: "#2D2B6B" }}>
            What Our Customers Say
          </h2>
          <p className="text-sm mt-3" style={{ color: "#1E9BF0" }}>
            We have over 5,000+ happy customers in mind.
          </p>
        </div>

        {/* Quote Card */}
        <div
          className={`bg-white rounded-sm border p-8 md:p-12 reveal-up transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}
          style={{ borderColor: "#1E9BF0" }}>
          
          {/* Quote Mark */}
          <div className="text-8xl font-extrabold leading-none mb-4 select-none" style={{ color: "rgba(30,155,240,0.15)" }}>&ldquo;</div>

          {/* Stars */}
          <div className="flex gap-1 mb-6">
            {Array.from({ length: t.rating }).map((_, i) =>
            <Icon key={i} name="StarIcon" size={16} variant="solid" className="text-[#1E9BF0]" />
            )}
          </div>

          <blockquote className="text-base md:text-lg leading-relaxed mb-8 italic" style={{ color: "#1E9BF0" }}>
            {t.quote}
          </blockquote>

          {/* Author + Navigation */}
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden shrink-0" style={{ border: "2px solid #1E9BF0" }}>
                <AppImage
                  src={t.img}
                  alt={`${t.name}, satisfied GoldKach client`}
                  width={56}
                  height={56}
                  quality={80}
                  className="object-cover" />
              </div>
              <div>
                <p className="font-semibold text-base" style={{ color: "#2D2B6B" }}>{t.name}</p>
                <p className="text-xs" style={{ color: "#1E9BF0" }}>{t.title}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => navigate(-1)}
                className="w-10 h-10 rounded-sm flex items-center justify-center transition-all duration-200"
                style={{ border: "1px solid #1E9BF0", color: "#1E9BF0" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#2D2B6B"; (e.currentTarget as HTMLButtonElement).style.color = "#fff"; (e.currentTarget as HTMLButtonElement).style.borderColor = "#2D2B6B"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = "#1E9BF0"; (e.currentTarget as HTMLButtonElement).style.borderColor = "#1E9BF0"; }}
                aria-label="Previous testimonial">
                <Icon name="ArrowLeftIcon" size={16} variant="outline" />
              </button>
              <button
                onClick={() => navigate(1)}
                className="w-10 h-10 rounded-sm flex items-center justify-center transition-all duration-200"
                style={{ border: "1px solid #1E9BF0", color: "#1E9BF0" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#2D2B6B"; (e.currentTarget as HTMLButtonElement).style.color = "#fff"; (e.currentTarget as HTMLButtonElement).style.borderColor = "#2D2B6B"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = "#1E9BF0"; (e.currentTarget as HTMLButtonElement).style.borderColor = "#1E9BF0"; }}
                aria-label="Next testimonial">
                <Icon name="ArrowRightIcon" size={16} variant="outline" />
              </button>
            </div>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) =>
          <button
            key={i}
            onClick={() => {if (!animating) {setAnimating(true);setTimeout(() => {setCurrent(i);setAnimating(false);}, 300);}}}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-accent' : 'w-3 bg-border'}`}
            aria-label={`Testimonial ${i + 1}`} />

          )}
        </div>
      </div>
    </section>);

}