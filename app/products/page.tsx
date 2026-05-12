'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

/* ─── Slide data — add/edit images here ─── */
const heroSlides = [
  {
    bg: "/products/diversify.jpg",
    portrait: "/products/diversify.jpg",
    heading: "Our Products",
    sub: "Diversify, minimize risk, and capitalize on international opportunities.",
  },
  {
    bg: "/products/empower.jpg",
    portrait: "/products/empower.jpg",
    heading: "Global Investment Access",
    sub: "Empowering individuals and institutions across Africa to access world markets.",
  },
  {
    bg: "/products/tailored.png",
    portrait: "/products/tailored.png",
    heading: "Managed Accounts & Funds",
    sub: "Tailored portfolios built around your goals, risk profile, and time horizon.",
  },
];

export default function ProductsPage() {
  const [slide, setSlide] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setSlide(idx);
      setAnimating(false);
    }, 350);
  }, [animating]);

  const prev = () => goTo(slide === 0 ? heroSlides.length - 1 : slide - 1);
  const next = useCallback(() => goTo(slide === heroSlides.length - 1 ? 0 : slide + 1), [goTo, slide]);

  /* auto-advance every 5 s */
  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const current = heroSlides[slide];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0D0C24' }}>

      {/* ══════════════════════════════════════
          HERO — full-width bg image slider
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: '380px' }}>

        {/* Background images (all stacked, only active one visible) */}
        {heroSlides.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === slide ? 1 : 0 }}
          >
            <img
              src={s.bg}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover object-center"
              style={{ minHeight: '380px' }}
            />
          </div>
        ))}

        {/* Dark gradient overlay so text is always readable */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(to right, rgba(45,43,107,0.92) 0%, rgba(45,43,107,0.75) 35%, rgba(45,43,107,0.30) 65%, rgba(45,43,107,0.05) 100%)',
          }}
        />
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(to top, rgba(45,43,107,0.70) 0%, transparent 50%)' }}
        />

        {/* Content */}
        <div
          className={`relative z-20 max-w-7xl mx-auto px-6 pt-28 pb-16 flex items-center justify-between gap-8 transition-opacity duration-350 ${animating ? 'opacity-0' : 'opacity-100'}`}
        >
          {/* Text */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {current.heading}
            </h1>
            <p className="text-lg text-white/90 font-semibold mb-8 max-w-md leading-relaxed">
              {current.sub}
            </p>
            <a
              href="https://goldkach.co.ug/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded font-bold text-sm transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: '#1E9BF0', color: '#ffffff' }}
            >
              Invest Today
            </a>
          </div>

          {/* Portrait circle */}
          <div className="hidden md:block flex-shrink-0">
            <div
              className="w-56 h-56 rounded-full overflow-hidden"
              style={{ border: '3px solid rgba(30,155,240,0.50)', boxShadow: '0 0 40px rgba(30,155,240,0.25)' }}
            >
              <img
                src={current.portrait}
                alt={current.heading}
                className="w-full h-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
          </div>
        </div>

        {/* ── Arrow navigation ── */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
          style={{ backgroundColor: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.30)' }}
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
          style={{ backgroundColor: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.30)' }}
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* ── Dot indicators ── */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
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

      {/* Innovative Investment Solutions */}
      <section className="py-16 px-6" style={{ backgroundColor: '#0D0C24' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#ffffff', fontFamily: "'Book Antiqua', 'Palatino Linotype', serif" }}>
              Innovative investment solutions to drive long-term capital appreciation
            </h2>
            <p className="text-white/60 leading-relaxed text-sm">
              At GoldKach, we provide access to companies that drive the global economy. We are committed to offering investment solutions that empower individuals and institutions across Africa to access global markets and diversify their portfolios. Our current range of products is designed to help you achieve your financial goals with ease and confidence, whether you&apos;re seeking long-term growth or risk diversification.
            </p>
          </div>
          <div className="flex-shrink-0 hidden md:block">
            <div className="w-64 h-48 rounded-lg overflow-hidden" style={{ backgroundColor: 'rgba(30,155,240,0.10)' }}>
              <img
                src="/innovation.png"
                alt="Investment solutions dashboard showing portfolio diversification and growth charts"
                className="w-full h-full object-cover"
                onError={(e) => {(e.target as HTMLImageElement).style.display = 'none';}} />
              
            </div>
          </div>
        </div>
      </section>

      {/* How Can We Help You */}
      <section
        className="py-16 px-6 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a1a4e 0%, #2D2B6B 100%)' }}>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Book Antiqua', 'Palatino Linotype', serif" }}>
            How can we help you?
          </h2>
          <p className="text-white/80 text-base max-w-2xl">
            Get a complete suite of financial solutions including managed accounts and a myriad of asset classes that align with your investment needs.
          </p>
        </div>
      </section>

      {/* 1. Managed Accounts */}
      <section className="py-16 px-6" style={{ backgroundColor: '#141336' }}>
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-8" style={{ color: '#ffffff', fontFamily: "'Book Antiqua', 'Palatino Linotype', serif" }}>
            1. Managed Accounts
          </h3>
          <div className="rounded-xl p-8 border" style={{ backgroundColor: '#1A1840', borderColor: 'rgba(30,155,240,0.20)', boxShadow: '0 4px 24px rgba(0,0,0,0.30)' }}>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#38BDF8' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1" style={{ color: '#ffffff' }}>Tailored Portfolios</h4>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              We provide separately managed accounts for high net worth individuals and institutional investors. By customising an investment strategy to your specific needs, we can help you achieve your targeted investment goals.
            </p>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              We consider a mix of alternative investments including Real Estate Investment Trusts-REITs, broad market equities, Exchange Traded Funds -ETFs and other strategies.
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              We are always exploring new and affordable investment products to suit a wide range of potential and existing investors
            </p>
          </div>
        </div>
      </section>

      {/* 2. Funds */}
      <section
        className="py-16 px-6 relative"
        style={{
          background: 'linear-gradient(180deg, #1a1a4e 0%, #2D2B6B 100%)'
        }}>
        
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "'Book Antiqua', 'Palatino Linotype', serif" }}>
            2. Funds
          </h3>
          <div className="space-y-6">
            <FundCard
              title="GoldKach Prime Growth Fund"
              ticker="GKPGF"
              fundType="Growth Focused Balanced Fund"
              inception="30/09/2024"
              fee="2%"
              currency="USD"
              allocation={[{ label: 'iShares Semiconductor ETF', pct: '60%' }, { label: 'Invesco QQQ ETF', pct: '40%' }]}
              factSheet="/fact-sheets/goldkach-prime-growth-fund.pdf"
              description="The GoldKach Prime Growth Fund is designed for investors seeking dynamic capital appreciation by leveraging growth opportunities within the global technology sector. With strategic allocations focusing on high-growth industries, the Fund seeks to maximize returns by investing primarily in well-established ETFs like the iShares Semiconductor ETF and the Invesco QQQ ETF. By maintaining a balanced yet growth-oriented portfolio—60% in semiconductors-focused assets and 40% in a diversified selection of Nasdaq 100 companies—the Fund aims to capture the robust performance and potential of the technology sector." />

            <FundCard
              title="GoldKach Balanced Edge Fund"
              ticker="GKBEF"
              fundType="Balanced Equity Fund"
              inception="30/09/2024"
              fee="2%"
              currency="USD"
              allocation={[{ label: 'Invesco QQQ ETF', pct: '40%' }, { label: 'SPDR S&P 500 ETF', pct: '40%' }, { label: 'Schwab U.S. Dividend Equity ETF', pct: '20%' }]}
              factSheet="/fact-sheets/goldkach-balanced-edge-fund.pdf"
              description="The GoldKach Balanced Edge Fund is crafted for investors seeking a blend of growth and stability, offering a balanced approach to capital appreciation and income generation. The Fund employs a diversified strategy that combines exposure to equities and dividend paying ETFs, aiming to deliver consistent returns while managing risk effectively. Suitable for investors with a moderate risk tolerance seeking long-term capital preservation and growth." />

            <FundCard
              title="GoldKach Income Builder Fund"
              ticker="GKIBF"
              fundType="Income-Focused Balanced Fund"
              inception="30/09/2024"
              fee="2%"
              currency="USD"
              allocation={[{ label: 'Invesco Senior Loan ETF (BKLN)', pct: '33.3%' }, { label: 'Schwab U.S. Dividend Equity ETF (SCHD)', pct: '33.4%' }, { label: 'iShares iBoxx $ High Yield Corporate Bond ETF (HYG)', pct: '33.3%' }]}
              factSheet="/fact-sheets/goldkach-income-builder-fund.pdf"
              description="The GoldKach Income Builder Fund seeks to provide a stable and sustainable income stream with modest capital appreciation by investing in a diversified portfolio of U.S. dividend-paying equities, senior secured loans, and high-yield corporate bonds. The fund targets assets that offer above-average income potential, balancing credit risk with robust income generation." />
          </div>
        </div>
      </section>

      {/* 3. Exchange Traded Funds */}
      <section className="py-16 px-6" style={{ backgroundColor: '#0D0C24' }}>
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-6" style={{ color: '#ffffff', fontFamily: "'Book Antiqua', 'Palatino Linotype', serif" }}>
            3. Exchange Traded Funds (ETF&apos;s)
          </h3>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            An Exchange-traded fund (ETF) is an investment fund that tracks an index, a commodity or bonds and is traded on stock exchanges. When you buy shares of an ETF, you are tracking the return of the investment in the original asset or portfolio of assets. Most ETFs track an index, such as a stock index or a bond index.
          </p>
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            This Fund asset class has the potential to generate quarterly income, which can be distributed or reinvested over the term of the investment.
          </p>
          <div
            className="rounded-lg px-8 py-5 inline-block"
            style={{ backgroundColor: '#38BDF8' }}>
            
            <span className="text-white font-semibold text-sm">Coming Soon</span>
          </div>
        </div>
      </section>

      {/* Who Can Invest */}
      <section className="py-16 px-6" style={{ backgroundColor: '#141336' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#ffffff', fontFamily: "'Book Antiqua', 'Palatino Linotype', serif" }}>
            Who can invest?
          </h2>
          <p className="text-base font-semibold text-white/70 mb-12 max-w-3xl">
            At GoldKach, we offer investment opportunities that are accessible to a wide range of investors, ensuring that everyone has the chance to grow their wealth through global markets. Our investment products are designed to meet the diverse needs of our clients
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Individuals */}
            <InvestorType
              icon={
              <svg className="w-12 h-12" fill="none" stroke="#38BDF8" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              }
              title="Individuals"
              description="Our products are readily accessible to individuals, whether you are a High Net Worth Individual (HNWI) or someone who just wants to make their income or savings go further. We will take the time to meet with you and hear all about your goals and circumstances. We can then make the right investments for you." />
            

            {/* Clubs and Societies */}
            <InvestorType
              icon={
              <svg className="w-12 h-12" fill="none" stroke="#38BDF8" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              }
              title="Clubs and Societies"
              description="Rotary clubs, investment clubs, community associations, sports clubs and professional societies; are just some examples of the many clubs and societies who can access our products and services." />
            

            {/* Institutions */}
            <InvestorType
              icon={
              <svg className="w-12 h-12" fill="none" stroke="#38BDF8" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              }
              title="Institutions"
              description="We also provide options for organisations who prefer long-term investments and who invest on behalf of their members/customers – or themselves. Most institutional investors fall into one of the following categories and we can support any one of these organisation types:"
              list={['Mutual Funds', 'Pension Funds', 'Unit Trusts', 'Commercial Banks', 'Insurance Companies', 'Investment Trust Companies', 'Investment banks']} />
            

            {/* Finance Professionals */}
            <InvestorType
              icon={
              <svg className="w-12 h-12" fill="none" stroke="#38BDF8" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                </svg>
              }
              title="Finance Professionals"
              description="We can also provide access to investment opportunities for finance professionals, who handle money on behalf of their clients; and actively facilitate investment opportunities for them. Examples of finance professionals who are welcome to get in touch with us include:"
              list={['Accountants', 'Stockbrokers', 'Financial Advisors', 'Wealth Managers', 'Family Office Managers']} />
            
          </div>
        </div>
      </section>

    </div>);

}

function FundCard({
  title, description, factSheet, ticker, fundType, inception, fee, currency, allocation,
}: {
  title: string;
  description: string;
  factSheet?: string;
  ticker?: string;
  fundType?: string;
  inception?: string;
  fee?: string;
  currency?: string;
  allocation?: { label: string; pct: string }[];
}) {
  const [expanded, setExpanded] = useState(false);
  const preview = description.length > 220 ? description.substring(0, 220) + '...' : description;

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0D0C24 0%, #1A1840 60%, #0e2a4a 100%)',
        border: '1px solid rgba(30,155,240,0.25)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.40), 0 0 0 1px rgba(30,155,240,0.08)',
      }}
    >
      {/* ── Top accent bar ── */}
      <div className="h-1 w-full" style={{ background: 'linear-gradient(to right, #1E9BF0, #38BDF8, #2D2B6B)' }} />

      <div className="p-6">
        {/* ── Header row ── */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
          <div className="flex items-center gap-3">
            {/* Icon */}
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: 'linear-gradient(135deg, #1E9BF0, #38BDF8)' }}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <h4 className="text-base font-bold text-white leading-tight">{title}</h4>
              {ticker && (
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded mt-1 inline-block"
                  style={{ backgroundColor: 'rgba(30,155,240,0.20)', color: '#38BDF8' }}
                >
                  {ticker}
                </span>
              )}
            </div>
          </div>

          {/* Download button */}
          {factSheet ? (
            <a
              href={factSheet}
              download
              className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all duration-200 hover:opacity-90 whitespace-nowrap cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #1E9BF0, #38BDF8)', color: '#ffffff', boxShadow: '0 4px 12px rgba(30,155,240,0.35)' }}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Fact Sheet
            </a>
          ) : (
            <span
              className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold whitespace-nowrap opacity-40 cursor-not-allowed"
              style={{ backgroundColor: 'rgba(30,155,240,0.15)', color: '#ffffff' }}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Coming Soon
            </span>
          )}
        </div>

        {/* ── Fund meta pills ── */}
        {(fundType || inception || fee || currency) && (
          <div className="flex flex-wrap gap-2 mb-5">
            {fundType && (
              <span className="text-xs px-2.5 py-1 rounded-full" style={{ backgroundColor: 'rgba(45,43,107,0.60)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.10)' }}>
                {fundType}
              </span>
            )}
            {inception && (
              <span className="text-xs px-2.5 py-1 rounded-full" style={{ backgroundColor: 'rgba(45,43,107,0.60)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.10)' }}>
                Inception: {inception}
              </span>
            )}
            {fee && (
              <span className="text-xs px-2.5 py-1 rounded-full" style={{ backgroundColor: 'rgba(30,155,240,0.15)', color: '#38BDF8', border: '1px solid rgba(30,155,240,0.25)' }}>
                Fee: {fee}
              </span>
            )}
            {currency && (
              <span className="text-xs px-2.5 py-1 rounded-full" style={{ backgroundColor: 'rgba(30,155,240,0.15)', color: '#38BDF8', border: '1px solid rgba(30,155,240,0.25)' }}>
                {currency}
              </span>
            )}
          </div>
        )}

        {/* ── Divider ── */}
        <div className="w-full h-px mb-5" style={{ background: 'linear-gradient(to right, rgba(30,155,240,0.40), transparent)' }} />

        {/* ── Allocation bars ── */}
        {allocation && allocation.length > 0 && (
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#38BDF8' }}>Fund Allocation</p>
            <div className="flex flex-col gap-2">
              {allocation.map((item) => (
                <div key={item.label} className="flex items-center justify-between gap-3">
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>{item.label}</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: 'rgba(30,155,240,0.20)', color: '#38BDF8' }}>{item.pct}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Description ── */}
        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.60)' }}>
          {expanded ? description : preview}
        </p>
        {description.length > 220 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-xs font-semibold cursor-pointer hover:opacity-80 transition-opacity"
            style={{ color: '#38BDF8' }}
          >
            {expanded ? 'Show less ↑' : 'Read more ↓'}
          </button>
        )}
      </div>
    </div>
  );
}

function InvestorType({
  icon,
  title,
  description,
  list





}: {icon: React.ReactNode;title: string;description: string;list?: string[];}) {
  return (
    <div className="flex items-start gap-5">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h4 className="text-xl font-bold mb-3" style={{ color: '#ffffff', fontFamily: "'Book Antiqua', 'Palatino Linotype', serif" }}>
          {title}
        </h4>
        <p className="text-white/60 text-sm leading-relaxed mb-3">{description}</p>
        {list &&
        <ul className="list-disc list-inside space-y-1">
            {list.map((item) =>
          <li key={item} className="text-white/60 text-sm">{item}</li>
          )}
          </ul>
        }
      </div>
    </div>);

}