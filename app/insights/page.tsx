'use client';

import React from 'react';
import Link from 'next/link';

/* ── Hero background images from public/insights ── */
const heroBgs = [
  '/insights/insight.jpg',
  '/insights/insight1.jpg',
  '/insights/insight2.jpg',
];

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  alt: string;
  featured?: boolean;
}

const articles: Article[] = [
{
  id: 1,
  title: 'AI Boom Fuels Growth in Semiconductor ETFs – Is SOXX a Buy?',
  excerpt: 'The rapid rise of Artificial Intelligence (AI) is transforming industries worldwide, from healthcare and finance to autonomous vehicles and smart devices.',
  category: 'Technology',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1455244a8-1777885331836.png",
  alt: 'Semiconductor chips and AI technology concept for investment insights',
  featured: true
},
{
  id: 2,
  title: 'SCHD: Stability, Dividends & Performance in One Package',
  excerpt: 'For investors seeking a balance between income and capital appreciation, the Schwab U.S. Dividend Equity ETF (SCHD) has long stood as a standard bearer. In Q1 2025, it reaffirmed its place as a top holding in income-focused portfolios.',
  category: 'Dividends',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_13a92d3fc-1777885332795.png",
  alt: 'Stock market charts showing dividend performance and stability metrics',
  featured: true
},
{
  id: 3,
  title: 'HYG in 2025: Navigating High Yields Amid Market Volatility',
  excerpt: 'In an investment landscape marked by economic uncertainty and fluctuating interest rates, the iShares iBoxx $ High Yield Corporate Bond ETF (HYG) has demonstrated resilience.',
  category: 'Bonds',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_120ee62d3-1777885332991.png",
  alt: 'High yield bond market volatility chart with financial data overlay',
  featured: true
},
{
  id: 4,
  title: 'The Contrarian Play: Why BKLN Could Skyrocket 15% in 2025',
  excerpt: 'While most investors chase private credit boom or press-gang the Invesco Senior Loan ETF (BKLN) has posed for a potential breakout. Here\'s why it deserves a hard look if you are looking away.',
  category: 'ETFs',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_135f58255-1777885332451.png",
  alt: 'Financial chart showing loan ETF performance and contrarian investment opportunity'
},
{
  id: 5,
  title: 'Market Rebound: iShares Russell 2000 ETF Records $787M Inflows',
  excerpt: 'The iShares Russell 2000 ETF (IWM) recorded $787 million in net inflows last Friday—despite widespread market volatility triggered by escalating conflict between Israel and Iran.',
  category: 'Market News',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_10996605a-1777885332136.png",
  alt: 'Russell 2000 small cap ETF performance chart showing market rebound'
},
{
  id: 6,
  title: 'AI Stocks Are Redefining the Market',
  excerpt: 'Artificial intelligence is no longer just a buzzword—it\'s a market mover. Since the start of 2023, AI-related stocks have outperformed nearly every other sector, with companies like NVIDIA, Microsoft, and Amazon driving record highs across major indices.',
  category: 'Technology',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c3160622-1777885331794.png",
  alt: 'AI technology stocks performance chart with NVIDIA and Microsoft data'
},
{
  id: 7,
  title: "Africa's Place in Global Portfolios: Are Frontier Markets Back?",
  excerpt: 'As global markets reel from geopolitical shocks and interest rate uncertainty, savvy investors are revisiting less conventional regions — and Africa is re-entering the conversation.',
  category: 'Emerging Markets',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e61c29f3-1772841002296.png",
  alt: 'African continent map with investment growth indicators and market data'
},
{
  id: 8,
  title: 'Rising BRICS: Can East Africa Ride the Emerging Power Wave?',
  excerpt: 'The global economic landscape is shifting—and fast. The BRICS bloc (Brazil, Russia, India, China, and South Africa) has expanded its reach, adding new heavyweight members like Egypt, Ethiopia, UAE, Saudi Arabia, and even Indonesia.',
  category: 'Global Markets',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_181dce2d7-1777885332585.png",
  alt: 'BRICS nations map showing emerging market economic growth and expansion'
},
{
  id: 9,
  title: 'Global Market Outlook: November 2025 Edition',
  excerpt: 'Markets in Motion — Key Trends Shaping Investment Strategies. Global markets closed November on a mixed yet constructive note, reflecting shifting investor sentiment, sector rotation, and emerging clarity around policy direction.',
  category: 'Market Outlook',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1135cafb9-1777885332333.png",
  alt: 'Global financial markets overview chart for November 2025 investment outlook'
},
{
  id: 10,
  title: 'Investing for 2026 and Beyond',
  excerpt: 'The global investment landscape is entering a new phase defined by shifting capital flows, evolving trade relationships, technological acceleration, and changing monetary conditions. For African investors, this moment presents both opportunity and challenge.',
  category: 'Investment Strategy',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12421743f-1764670653945.png",
  alt: 'Future investment strategy concept with 2026 financial planning visualization'
},
{
  id: 11,
  title: 'What the US-Israel-Iran War Means for Investors',
  excerpt: 'The escalating conflict between the United States, Israel, and Iran has injected significant volatility into global markets. Energy prices have surged, equities have fluctuated, and investors are shifting capital into defensive assets.',
  category: 'Geopolitics',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_10b3df7a8-1774042825827.png",
  alt: 'Geopolitical conflict impact on global investment markets and energy prices'
}];


export default function InsightsPage() {
  const featuredArticles = articles.filter((a) => a.featured);
  const regularArticles = articles.filter((a) => !a.featured);
  const [slide, setSlide] = React.useState(0);

  /* auto-advance every 2 s */
  React.useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroBgs.length), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>

      {/* ══════════════════════════════════════
          HERO — sliding bg images, static text
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: '300px' }}>

        {/* Sliding background images */}
        {heroBgs.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              opacity: i === slide ? 1 : 0,
              transition: 'opacity 0.9s ease-in-out',
              zIndex: 0,
            }}
          >
            <img
              src={src}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover object-center"
              style={{ minHeight: '300px' }}
            />
          </div>
        ))}

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            zIndex: 1,
            background:
              'linear-gradient(105deg, rgba(45,43,107,0.92) 0%, rgba(45,43,107,0.80) 40%, rgba(45,43,107,0.55) 70%, rgba(45,43,107,0.25) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            zIndex: 1,
            background: 'linear-gradient(to top, rgba(45,43,107,0.70) 0%, transparent 55%)',
          }}
        />

        {/* Static content */}
        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-14" style={{ zIndex: 2 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Our Insights
          </h1>
          <p className="text-lg text-white/90 mb-8 max-w-xl font-semibold leading-relaxed">
            Explore our insights on market trends, expert picks &amp; timely investment insights
          </p>
          <Link
            href="https://goldkach.co.ug/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded font-bold text-sm transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: '#1E9BF0', color: '#ffffff' }}
          >
            Invest Today
          </Link>
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2" style={{ zIndex: 3 }}>
          {heroBgs.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              aria-label={`Slide ${i + 1}`}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === slide ? '2rem' : '0.75rem',
                backgroundColor: i === slide ? '#1E9BF0' : 'rgba(255,255,255,0.40)',
              }}
            />
          ))}
        </div>
      </section>

      {/* Featured Articles Grid */}
      <section className="py-12 px-6" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {featuredArticles.map((article) =>
            <ArticleCard key={article.id} article={article} featured />
            )}
          </div>

          {/* Regular Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {regularArticles.slice(0, 3).map((article) =>
            <ArticleCard key={article.id} article={article} />
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regularArticles.slice(3).map((article) =>
            <ArticleCard key={article.id} article={article} />
            )}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-6" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#2D2B6B', fontFamily: "'Book Antiqua', 'Palatino Linotype', serif" }}>
                Ready to start your investment journey with GoldKach?
              </h2>
              <p className="text-gray-600 mb-6 text-base">
                Lets help you today to achieve your financial goals. Let&apos;s work together to build a brighter financial future.
              </p>
              <a
                href="https://goldkach.co.ug/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded font-bold text-sm transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: '#2D2B6B', color: '#ffffff' }}>
                Invest Today
              </a>
            </div>
            <div className="flex-shrink-0 hidden md:block">
              <div className="w-64 h-64 rounded-full overflow-hidden animate-float-slow" style={{ backgroundColor: '#f0f4ff' }}>
                <img
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_11ad01153-1767916622593.png"
                  alt="GoldKach financial advisor ready to help with your investment journey"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }} />
                
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>);

}

function ArticleCard({ article, featured }: {article: Article;featured?: boolean;}) {
  return (
    <div
      className="rounded-lg overflow-hidden flex flex-col h-full cursor-pointer transition-all duration-300"
      style={{
        backgroundColor: featured ? '#2D2B6B' : '#ffffff',
        border: featured ? 'none' : '1px solid #e5e7eb',
        boxShadow: featured
          ? '0 10px 30px rgba(45,43,107,0.40), 0 4px 10px rgba(0,0,0,0.20)'
          : '0 8px 24px rgba(45,43,107,0.12), 0 2px 6px rgba(0,0,0,0.08)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = featured
          ? '0 20px 50px rgba(45,43,107,0.55), 0 8px 20px rgba(0,0,0,0.25)'
          : '0 16px 40px rgba(45,43,107,0.20), 0 4px 12px rgba(0,0,0,0.12)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = featured
          ? '0 10px 30px rgba(45,43,107,0.40), 0 4px 10px rgba(0,0,0,0.20)'
          : '0 8px 24px rgba(45,43,107,0.12), 0 2px 6px rgba(0,0,0,0.08)';
      }}
    >
      
      <div className="relative h-40 overflow-hidden">
        <img
          src={article.image}
          alt={article.alt}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/assets/images/no_image.png';
          }} />
        
        {featured &&
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(45,43,107,0.8) 100%)' }} />
        }
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3
          className="font-bold text-base mb-2 leading-snug"
          style={{ color: featured ? '#ffffff' : '#2D2B6B', fontFamily: "'Book Antiqua', 'Palatino Linotype', serif" }}>
          
          {article.title}
        </h3>
        <p className="text-sm leading-relaxed flex-1" style={{ color: featured ? 'rgba(255,255,255,0.75)' : '#6b7280' }}>
          {article.excerpt.length > 120 ? article.excerpt.substring(0, 120) + '...' : article.excerpt}
        </p>
        <div className="mt-3">
          <span
            className="text-xs font-semibold"
            style={{ color: '#38BDF8' }}>
            
            Expand +
          </span>
        </div>
      </div>
    </div>);

}