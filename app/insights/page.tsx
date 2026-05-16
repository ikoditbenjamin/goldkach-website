'use client';

import React from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

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
  body: string[];          // paragraphs of full article
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
  image: "/insights/boom.png",
  alt: 'Semiconductor chips and AI technology concept for investment insights',
  featured: true,
  body: [
    'The semiconductor sector has become central to the ongoing AI revolution, with the iShares Semiconductor ETF (SOXX) delivering strong performance year to date. As of July 2025, SOXX has gained 22%, reflecting the strong rise in component companies playing an increasingly pivotal role in fueling next-generation AI capabilities.',
    'The ETF\'s heavy weighting towards Nvidia, which comprises 9% of its holdings, highlights both its pure-play exposure to AI hardware and its concentration risk. Its performance over the past 12 months has been a period of unprecedented demand for advanced chips, particularly those used in data centers and AI inference.',
    'Several fundamental factors continue to drive growth in the semiconductor space. Data center chip sales have surged 50% year-over-year as cloud giants expand their AI capabilities. The CHIPS Act\'s $52 billion in funding continues to support capacity expansion. Additionally, new product cycles from major chipmakers are spurring another wave of growth.',
    'However, the sector\'s strong performance has raised questions about valuations and sustainability. SOXX currently trades at a price-to-earnings ratio of 35x, significantly above its 10-year average of 22x. This premium valuation suggests that market expectations for continued robust growth are already priced in.',
    'Geopolitical considerations also factor into the analysis, as tensions in key semiconductor manufacturing regions could disrupt supply chains. The competitive landscape is evolving as well, with newer rivals like AMD developing competing chips that could pressure margins for established manufacturers.',
    'For investors considering this sector, several key developments warrant attention in the coming months. Upcoming guidance from semiconductor equipment manufacturers may provide insight into future capacity expansion plans. Data center infrastructure spending trends will signal demand strength or potential softening. Macroeconomic conditions, particularly interest rate policy and its impact on growth stock valuations, may influence SOXX\'s performance regardless of company fundamentals.',
    'The ETF landscape offers various options for semiconductor exposure, each with distinct characteristics. While SOXX provides concentrated exposure to chip manufacturers, alternatives like SMH focus more on semiconductor equipment companies, and AIQQ offers broader exposure to AI applications beyond just hardware. These differences in composition lead to varying performance characteristics and risk profiles that investors may want to consider.',
  ],
},
{
  id: 2,
  title: 'SCHD: Stability, Dividends & Performance in One Package',
  excerpt: 'For investors seeking a balance between income and capital appreciation, the Schwab U.S. Dividend Equity ETF (SCHD) has long stood as a standard bearer. In Q1 2025, it reaffirmed its place as a top holding in income-focused portfolios.',
  category: 'Dividends',
  image: "/insights/SCHD.png",
  alt: 'Stock market charts showing dividend performance and stability metrics',
  featured: true,
  body: [
    'For investors seeking a balance between income and capital appreciation, the Schwab U.S. Dividend Equity ETF (SCHD) has long stood as a standard bearer. In Q1 2025, it reaffirmed its place as a top holding in income-focused portfolios, delivering a 3.8% dividend yield alongside modest capital appreciation.',
    'SCHD\'s methodology focuses on companies with a track record of consistent dividend payments, strong cash flow, and solid fundamentals. The fund screens for stocks with at least 10 consecutive years of dividend payments, then ranks them on cash flow to debt, return on equity, dividend yield, and five-year dividend growth rate.',
    'The ETF\'s top holdings include blue-chip names across financials, healthcare, consumer staples, and industrials — sectors known for their resilience during economic downturns. This diversification has helped SCHD weather market volatility better than many growth-oriented funds.',
    'In 2025, SCHD has benefited from a rotation into value and income stocks as investors reassess the sustainability of high-growth valuations. Rising interest rates have historically pressured dividend stocks, but SCHD\'s focus on companies with strong balance sheets and growing dividends has provided a buffer.',
    'The fund\'s expense ratio of just 0.06% makes it one of the most cost-efficient dividend ETFs available, allowing investors to keep more of their returns. Over the past decade, SCHD has delivered annualized total returns of approximately 12%, outperforming many actively managed dividend funds.',
    'For long-term investors, SCHD represents a compelling core holding that combines income generation with the potential for capital appreciation. Its disciplined selection process and low costs make it particularly attractive for retirement portfolios seeking sustainable income streams.',
  ],
},
{
  id: 3,
  title: 'HYG in 2025: Navigating High Yields Amid Market Volatility',
  excerpt: 'In an investment landscape marked by economic uncertainty and fluctuating interest rates, the iShares iBoxx $ High Yield Corporate Bond ETF (HYG) has demonstrated resilience.',
  category: 'Bonds',
  image: "/insights/HYG.png",
  alt: 'High yield bond market volatility chart with financial data overlay',
  featured: true,
  body: [
    'In an investment landscape marked by economic uncertainty and fluctuating interest rates, the iShares iBoxx $ High Yield Corporate Bond ETF (HYG) has demonstrated resilience in 2025. The fund, which tracks below-investment-grade corporate bonds, has navigated a complex environment of credit risk and rate sensitivity.',
    'High yield bonds, often called "junk bonds," offer higher interest payments to compensate investors for the increased risk of default. HYG provides diversified exposure to hundreds of these bonds, spreading the default risk across a broad portfolio of issuers.',
    'In 2025, the high yield market has been shaped by several competing forces. On one hand, a resilient U.S. economy has kept default rates relatively low, supporting bond prices. On the other hand, elevated interest rates have increased borrowing costs for issuers, raising concerns about refinancing risk for companies with significant debt loads.',
    'HYG\'s current yield of approximately 7.2% remains attractive relative to investment-grade alternatives, drawing income-seeking investors despite the higher risk profile. The fund\'s duration of around 3.5 years provides some protection against interest rate movements compared to longer-duration bond funds.',
    'Credit quality within HYG\'s portfolio has been a focus for analysts. The fund\'s exposure to BB-rated bonds (the highest tier of high yield) has increased, reflecting a flight to quality within the high yield space. This shift has helped moderate volatility while maintaining attractive yield levels.',
    'For investors considering HYG, the key risk factors include potential economic slowdown that could increase default rates, interest rate movements that affect bond prices, and sector-specific risks given the fund\'s exposure to energy, consumer discretionary, and telecommunications companies. A balanced approach that considers these risks alongside the attractive yield potential is essential for informed decision-making.',
  ],
},
{
  id: 4,
  title: 'The Contrarian Play: Why BKLN Could Skyrocket 15% in 2025',
  excerpt: 'While most investors chase private credit boom or press-gang the Invesco Senior Loan ETF (BKLN) has posed for a potential breakout. Here\'s why it deserves a hard look if you are looking away.',
  category: 'ETFs',
  image: "/insights/Contra.png",
  alt: 'Financial chart showing loan ETF performance and contrarian investment opportunity',
  body: [
    'While most investors chase the private credit boom or overlook the Invesco Senior Loan ETF (BKLN), this fund has positioned itself for a potential breakout. Here\'s why it deserves a hard look from contrarian investors.',
    'BKLN invests in senior secured floating-rate loans made to below-investment-grade companies. Unlike traditional bonds, these loans have interest rates that reset periodically based on benchmark rates like SOFR, providing natural protection against rising interest rates.',
    'The floating-rate nature of BKLN\'s holdings has been a significant advantage in the current rate environment. As the Federal Reserve maintained elevated rates through 2024 and into 2025, BKLN\'s yield has remained attractive, currently sitting around 8.5% — well above many fixed-rate alternatives.',
    'Senior secured status means BKLN\'s loans sit at the top of the capital structure, giving lenders first claim on assets in the event of default. This structural protection has historically resulted in higher recovery rates compared to unsecured high yield bonds, making BKLN a more defensive play within the credit spectrum.',
    'The contrarian case for BKLN rests on several factors. First, the loan market has been overlooked by retail investors focused on the private credit narrative, potentially creating a valuation opportunity. Second, if the Fed begins cutting rates, the initial impact on BKLN may be modest given the floating-rate structure, while the improved economic outlook could reduce default concerns.',
    'Technical factors also support the bullish case. BKLN has seen consistent institutional buying, and the loan market\'s limited retail participation means less panic selling during volatility. For investors willing to look beyond the headlines, BKLN offers a compelling risk-adjusted return profile that deserves consideration in a diversified fixed income portfolio.',
  ],
},
{
  id: 5,
  title: 'Market Rebound: iShares Russell 2000 ETF Records $787M Inflows',
  excerpt: 'The iShares Russell 2000 ETF (IWM) recorded $787 million in net inflows last Friday—despite widespread market volatility triggered by escalating conflict between Israel and Iran.',
  category: 'Market News',
  image: "/insights/rebound.png",
  alt: 'Russell 2000 small cap ETF performance chart showing market rebound',
  body: [
    'The iShares Russell 2000 ETF (IWM) recorded $787 million in net inflows last Friday — despite widespread market volatility triggered by escalating conflict between Israel and Iran. This counter-intuitive flow data suggests institutional investors are positioning for a small-cap rebound.',
    'Small-cap stocks, as represented by the Russell 2000 index, have significantly underperformed their large-cap counterparts over the past two years. The valuation gap between small and large caps has reached historically wide levels, creating what many analysts see as a compelling entry point for patient investors.',
    'The inflows into IWM come at a time when small-cap stocks are trading at a significant discount to their historical average relative to large caps. The Russell 2000\'s price-to-earnings ratio stands at approximately 15x forward earnings, compared to the S&P 500\'s 21x, representing one of the widest valuation gaps in recent history.',
    'Several catalysts could drive a small-cap rebound. A potential Federal Reserve rate cut would disproportionately benefit small caps, which tend to carry more floating-rate debt than large companies. Additionally, small-cap companies derive a higher percentage of revenue domestically, making them less exposed to global trade tensions and currency fluctuations.',
    'The geopolitical backdrop, while creating short-term volatility, may actually accelerate the rotation into domestic small caps as investors seek to reduce international exposure. Companies in the Russell 2000 generate approximately 80% of their revenue in the United States, providing insulation from global disruptions.',
    'For investors considering IWM, the key question is timing. While the valuation case is compelling, small caps require a supportive economic environment to outperform. A soft landing scenario, where inflation continues to moderate without a significant economic slowdown, would be the ideal backdrop for the small-cap rebound that the recent inflows suggest institutional investors are anticipating.',
  ],
},
{
  id: 6,
  title: 'AI Stocks Are Redefining the Market',
  excerpt: 'Artificial intelligence is no longer just a buzzword — it\'s a market mover. Since the start of 2023, AI-related stocks have outperformed nearly every other sector, with companies like NVIDIA, Microsoft, and Amazon driving record highs across major indices.',
  category: 'Technology',
  image: "/insights/Stocks.png",
  alt: 'AI technology stocks performance chart with NVIDIA and Microsoft data',
  body: [
    'Artificial intelligence is no longer just a buzzword — it\'s a market mover. Since the start of 2023, AI-related stocks have outperformed nearly every other sector, with companies like NVIDIA, Microsoft, and Amazon driving record highs across major indices.',
    'NVIDIA\'s transformation from a gaming chip company to the backbone of AI infrastructure has been the defining investment story of the decade. The company\'s H100 and H200 GPUs have become the gold standard for training large language models, creating a supply-demand imbalance that has driven extraordinary revenue growth and margin expansion.',
    'Microsoft\'s deep integration of AI across its product suite — from Azure cloud services to Office 365 and GitHub Copilot — has created multiple revenue streams from the AI boom. The company\'s $13 billion investment in OpenAI has positioned it at the center of the generative AI ecosystem, with early evidence suggesting meaningful productivity gains for enterprise customers.',
    'Amazon\'s AWS division has emerged as a critical AI infrastructure provider, offering both compute resources and increasingly sophisticated AI services. The company\'s investment in Anthropic and development of its own AI chips signal a long-term commitment to capturing AI-driven cloud spending.',
    'Beyond the hyperscalers, a second wave of AI beneficiaries is emerging. Companies providing data infrastructure, cybersecurity for AI systems, and specialized AI applications in healthcare, finance, and manufacturing are beginning to see meaningful revenue contributions from AI-related products.',
    'The key risk for AI investors is the gap between current valuations and near-term revenue realization. Many AI-adjacent companies are priced for perfection, requiring sustained high growth rates to justify current multiples. Investors should focus on companies with clear monetization paths and competitive moats rather than simply chasing the AI narrative.',
  ],
},
{
  id: 7,
  title: "Africa's Place in Global Portfolios: Are Frontier Markets Back?",
  excerpt: 'As global markets reel from geopolitical shocks and interest rate uncertainty, savvy investors are revisiting less conventional regions — and Africa is re-entering the conversation.',
  category: 'Emerging Markets',
  image: "/insights/Africa.png",
  alt: 'African continent map with investment growth indicators and market data',
  body: [
    'As global markets reel from geopolitical shocks and interest rate uncertainty, savvy investors are revisiting less conventional regions — and Africa is re-entering the conversation. The continent\'s frontier markets offer a compelling combination of demographic tailwinds, resource wealth, and improving governance.',
    'Africa\'s population of 1.4 billion, with a median age of just 19 years, represents one of the world\'s most significant demographic opportunities. This young, growing population is driving rapid urbanization, expanding middle class consumption, and increasing demand for financial services, technology, and infrastructure.',
    'Several African markets have demonstrated impressive resilience and growth. Kenya\'s Nairobi Securities Exchange has attracted significant foreign investment, driven by the country\'s position as East Africa\'s financial hub and the success of mobile money platforms like M-Pesa. Nigeria\'s stock market has benefited from currency reforms and improving oil sector governance.',
    'The infrastructure investment gap in Africa, estimated at $100 billion annually, represents both a challenge and an opportunity. Chinese, American, and European investors are competing for infrastructure projects, creating a favorable environment for local businesses that can participate in the construction and operation of roads, ports, and energy facilities.',
    'Commodity wealth remains a significant driver of African market performance. Countries like Zambia, DRC, and South Africa hold substantial reserves of copper, cobalt, and other minerals critical for the global energy transition. As demand for these materials grows, African producers stand to benefit significantly.',
    'For global investors, accessing African markets requires careful consideration of liquidity, currency risk, and governance factors. Exchange-traded funds focused on African markets, such as those tracking the MSCI Frontier Markets Africa index, provide diversified exposure while managing some of the idiosyncratic risks of individual country investments.',
  ],
},
{
  id: 8,
  title: 'Rising BRICS: Can East Africa Ride the Emerging Power Wave?',
  excerpt: 'The global economic landscape is shifting — and fast. The BRICS bloc has expanded its reach, adding new heavyweight members like Egypt, Ethiopia, UAE, Saudi Arabia, and even Indonesia.',
  category: 'Global Markets',
  image: "/insights/Rising.png",
  alt: 'BRICS nations map showing emerging market economic growth and expansion',
  body: [
    'The global economic landscape is shifting — and fast. The BRICS bloc (Brazil, Russia, India, China, and South Africa) has expanded its reach, adding new heavyweight members like Egypt, Ethiopia, UAE, Saudi Arabia, and even Indonesia. This expansion has significant implications for East African economies and investors.',
    'Ethiopia\'s inclusion in BRICS represents a watershed moment for East Africa. As the continent\'s second most populous nation and one of its fastest-growing economies, Ethiopia\'s BRICS membership opens doors to preferential trade arrangements, development financing, and technology transfer from bloc members.',
    'The New Development Bank, BRICS\'s multilateral lending institution, has been increasing its African lending portfolio. Infrastructure projects in transportation, energy, and digital connectivity are receiving funding that was previously difficult to access through traditional Western-dominated institutions like the World Bank and IMF.',
    'Trade patterns within the BRICS framework are evolving in ways that benefit East African exporters. China\'s Belt and Road Initiative has already transformed infrastructure in Kenya, Ethiopia, and Tanzania. The expanded BRICS framework could accelerate this trend, with new members like UAE and Saudi Arabia adding financial muscle to regional development.',
    'Currency dynamics are also shifting. BRICS nations have been exploring alternatives to dollar-denominated trade, which could reduce transaction costs for East African businesses trading with bloc members. While a BRICS currency remains a distant prospect, bilateral currency arrangements are already reducing dollar dependency in some trade corridors.',
    'For investors, the BRICS expansion creates opportunities in East African companies positioned to benefit from increased trade and investment flows. Financial services firms, logistics companies, and commodity exporters with strong regional networks are particularly well-positioned to capture value from the shifting geopolitical and economic landscape.',
  ],
},
{
  id: 9,
  title: 'Global Market Outlook: November 2025 Edition',
  excerpt: 'Markets in Motion — Key Trends Shaping Investment Strategies. Global markets closed November on a mixed yet constructive note, reflecting shifting investor sentiment, sector rotation, and emerging clarity around policy direction.',
  category: 'Market Outlook',
  image: "/insights/global.png",
  alt: 'Global financial markets overview chart for November 2025 investment outlook',
  body: [
    'Global markets closed November on a mixed yet constructive note, reflecting shifting investor sentiment, sector rotation, and emerging clarity around policy direction. The month was characterized by significant divergence between regions and asset classes, creating both challenges and opportunities for active investors.',
    'U.S. equities continued their strong performance, with the S&P 500 reaching new all-time highs driven by technology and healthcare sectors. The Federal Reserve\'s signaling of a more accommodative stance in 2026 provided a tailwind for growth stocks, while defensive sectors lagged as risk appetite improved.',
    'European markets faced headwinds from slowing economic growth and political uncertainty in key economies. The ECB\'s cautious approach to rate cuts, constrained by persistent services inflation, has weighed on rate-sensitive sectors. However, European exporters have benefited from a weaker euro, providing some offset.',
    'Asian markets presented a mixed picture. Japan\'s equity market continued its multi-year recovery, supported by corporate governance reforms and a weak yen boosting export competitiveness. Chinese markets remained volatile, with stimulus measures providing temporary boosts but structural challenges in the property sector continuing to weigh on sentiment.',
    'Emerging markets broadly benefited from dollar weakness and improving commodity prices. Latin American markets, particularly Brazil and Mexico, outperformed as commodity exports and nearshoring trends supported economic activity. African frontier markets saw increased interest from institutional investors seeking diversification.',
    'Looking ahead to December and into 2026, key themes include the trajectory of central bank policy normalization, the sustainability of AI-driven technology spending, geopolitical risk management, and the pace of the energy transition. Investors should maintain diversified portfolios while remaining alert to opportunities created by the ongoing sector rotation.',
  ],
},
{
  id: 10,
  title: 'Investing for 2026 and Beyond',
  excerpt: 'The global investment landscape is entering a new phase defined by shifting capital flows, evolving trade relationships, technological acceleration, and changing monetary conditions.',
  category: 'Investment Strategy',
  image: "/insights/investing.png",
  alt: 'Future investment strategy concept with 2026 financial planning visualization',
  body: [
    'The global investment landscape is entering a new phase defined by shifting capital flows, evolving trade relationships, technological acceleration, and changing monetary conditions. For African investors, this moment presents both opportunity and challenge in equal measure.',
    'The monetary policy cycle is turning. After the most aggressive rate hiking cycle in decades, major central banks are beginning to ease. This shift has historically been positive for risk assets, particularly in emerging markets where high rates had created significant headwinds for growth and currency stability.',
    'Technology continues to reshape investment opportunities across all sectors. Artificial intelligence is not just a technology story — it\'s transforming healthcare, finance, agriculture, and manufacturing in ways that create investment opportunities far beyond the obvious technology companies. Investors who can identify the second and third-order beneficiaries of AI adoption will find compelling opportunities.',
    'The energy transition represents one of the most significant investment themes of the coming decade. Africa\'s abundant renewable energy resources — solar, wind, and hydroelectric — position the continent as a potential clean energy powerhouse. Countries that successfully develop their renewable energy capacity will attract significant foreign investment and create competitive advantages for energy-intensive industries.',
    'For African investors specifically, the combination of demographic growth, urbanization, and digital adoption creates a powerful domestic consumption story. Financial inclusion, driven by mobile money and digital banking, is bringing millions of previously unbanked consumers into the formal economy, creating opportunities in financial services, e-commerce, and consumer goods.',
    'Portfolio construction for 2026 and beyond should balance exposure to global growth themes with domestic African opportunities. A combination of global ETFs providing exposure to technology and healthcare innovation, alongside direct investments in African financial services, infrastructure, and consumer companies, offers a compelling risk-adjusted return profile for long-term investors.',
  ],
},
{
  id: 11,
  title: 'What the US-Israel-Iran War Means for Investors',
  excerpt: 'The escalating conflict between the United States, Israel, and Iran has injected significant volatility into global markets. Energy prices have surged, equities have fluctuated, and investors are shifting capital into defensive assets.',
  category: 'Geopolitics',
  image: "/insights/israel.png",
  alt: 'Geopolitical conflict impact on global investment markets and energy prices',
  body: [
    'The escalating conflict between the United States, Israel, and Iran has injected significant volatility into global markets. Energy prices have surged, equities have fluctuated, and investors are shifting capital into defensive assets as the geopolitical risk premium rises.',
    'Oil markets have been the most immediate casualty of the conflict. Brent crude has risen sharply on concerns about potential disruption to Middle Eastern oil production and shipping through the Strait of Hormuz, through which approximately 20% of global oil supply passes. Energy companies and oil-producing nations have seen their revenues and equity valuations benefit from higher prices.',
    'Defense sector stocks have rallied significantly as investors anticipate increased military spending by the United States and its allies. Companies involved in missile defense systems, cybersecurity, and military logistics have seen particularly strong performance, reflecting the multi-dimensional nature of modern conflict.',
    'Safe haven assets have attracted significant inflows. Gold has risen to new highs as investors seek stores of value outside the financial system. U.S. Treasury bonds, despite their own fiscal challenges, have benefited from flight-to-safety flows. The Swiss franc and Japanese yen have strengthened against most currencies.',
    'The conflict\'s impact on African markets has been nuanced. East African nations that import significant quantities of oil face higher energy costs that could pressure inflation and current account balances. However, African oil exporters like Nigeria, Angola, and Libya benefit from higher prices, potentially improving their fiscal positions.',
    'For investors navigating this environment, the key is to distinguish between short-term volatility and structural changes. Geopolitical conflicts, while creating significant near-term uncertainty, often resolve or stabilize over time. Maintaining diversified portfolios, avoiding panic selling, and selectively adding to positions in quality companies that have been unfairly punished by market volatility are strategies that have historically served long-term investors well.',
  ],
},
];


export default function InsightsPage() {
  const featuredArticles = articles.filter((a) => a.featured);
  const regularArticles = articles.filter((a) => !a.featured);
  const [slide, setSlide] = React.useState(0);
  const [activeArticle, setActiveArticle] = React.useState<Article | null>(null);

  /* auto-advance every 2 s */
  React.useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroBgs.length), 2000);
    return () => clearInterval(t);
  }, []);

  /* lock body scroll when modal is open */
  React.useEffect(() => {
    if (activeArticle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeArticle]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0D0C24' }}>

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
      <section className="py-12 px-6" style={{ backgroundColor: '#141336' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {featuredArticles.map((article) =>
            <ArticleCard key={article.id} article={article} featured onExpand={setActiveArticle} />
            )}
          </div>

          {/* Regular Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {regularArticles.slice(0, 3).map((article) =>
            <ArticleCard key={article.id} article={article} onExpand={setActiveArticle} />
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regularArticles.slice(3).map((article) =>
            <ArticleCard key={article.id} article={article} onExpand={setActiveArticle} />
            )}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Background image */}
        <img
          src="https://img.rocket.new/generatedImages/rocket_gen_img_11ad01153-1767916622593.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark navy overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(13,12,36,0.95) 0%, rgba(13,12,36,0.80) 50%, rgba(13,12,36,0.50) 100%)' }}
        />
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" style={{ fontFamily: "'Book Antiqua', 'Palatino Linotype', serif" }}>
              Ready to start your investment journey with GoldKach?
            </h2>
            <p className="text-white/70 mb-8 text-base leading-relaxed">
              Lets help you today to achieve your financial goals. Let&apos;s work together to build a brighter financial future.
            </p>
            <a
              href="https://goldkach.co.ug/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded font-bold text-sm transition-all duration-200 hover:opacity-90 cursor-pointer"
              style={{ backgroundColor: '#1E9BF0', color: '#ffffff' }}>
              Invest Today
            </a>
          </div>
        </div>
      </section>

      {/* ── Article Modal ── */}
      {activeArticle && (
        <ArticleModal article={activeArticle} onClose={() => setActiveArticle(null)} />
      )}

    </div>);

}

function ArticleCard({
  article,
  featured,
  onExpand,
}: {
  article: Article;
  featured?: boolean;
  onExpand: (a: Article) => void;
}) {
  return (
    <div
      className="rounded-lg overflow-hidden flex flex-col h-full transition-all duration-300"
      style={{
        backgroundColor: featured ? '#2D2B6B' : '#1A1840',
        border: featured ? 'none' : '1px solid rgba(30,155,240,0.18)',
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
          }}
        />
        {featured && (
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(45,43,107,0.8) 100%)' }}
          />
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3
          className="font-bold text-base mb-2 leading-snug"
          style={{ color: '#ffffff', fontFamily: "'Book Antiqua', 'Palatino Linotype', serif" }}
        >
          {article.title}
        </h3>
        <p className="text-sm leading-relaxed flex-1" style={{ color: featured ? 'rgba(255,255,255,0.75)' : '#6b7280' }}>
          {article.excerpt.length > 120 ? article.excerpt.substring(0, 120) + '...' : article.excerpt}
        </p>
        <div className="mt-3">
          <button
            onClick={() => onExpand(article)}
            className="text-xs font-semibold transition-opacity duration-150 hover:opacity-75 focus:outline-none"
            style={{ color: '#38BDF8' }}
            aria-label={`Expand article: ${article.title}`}
          >
            Expand +
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Full-article modal ── */
function ArticleModal({ article, onClose }: { article: Article; onClose: () => void }) {
  /* close on Escape key */
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 overflow-y-auto"
      style={{ zIndex: 9999, backgroundColor: '#0A1628' }}
      role="dialog"
      aria-modal="true"
      aria-label={article.title}
    >
      {/* Full-width hero image */}
      <div className="relative w-full" style={{ height: '45vh', minHeight: '260px' }}>
        <img
          src={article.image}
          alt={article.alt}
          className="w-full h-full object-cover"
          onError={(e) => { (e.target as HTMLImageElement).src = '/assets/images/no_image.png'; }}
        />
        {/* Gradient fade into body */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(10,22,40,0.20) 0%, rgba(10,22,40,0.70) 70%, rgba(10,22,40,1) 100%)' }}
        />

        {/* Top bar: category + close */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-5 md:px-12">
          <span
            className="text-xs font-bold px-3 py-1 rounded-full"
            style={{ backgroundColor: 'rgba(30,155,240,0.25)', color: '#38BDF8', border: '1px solid rgba(56,189,248,0.40)' }}
          >
            {article.category}
          </span>
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-opacity duration-150 hover:opacity-75 focus:outline-none"
            style={{ backgroundColor: 'rgba(10,22,40,0.65)', color: '#38BDF8', border: '1px solid rgba(56,189,248,0.35)' }}
            aria-label="Close article"
          >
            <X size={14} /> Close
          </button>
        </div>

        {/* Title overlaid on image bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 md:px-12 md:pb-8">
          <h2
            className="text-2xl md:text-4xl font-bold leading-tight"
            style={{ color: '#ffffff', fontFamily: "'Book Antiqua', 'Palatino Linotype', serif" }}
          >
            {article.title}
          </h2>
        </div>
      </div>

      {/* Article body */}
      <div className="px-6 py-8 md:px-12 md:py-10 max-w-4xl mx-auto">
        <div className="space-y-5">
          {article.body.map((para, i) => (
            <p
              key={i}
              className="text-base md:text-lg leading-relaxed"
              style={{ color: 'rgba(186,230,253,0.88)' }}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 flex items-center justify-between" style={{ borderTop: '1px solid rgba(56,189,248,0.15)' }}>
          <span className="text-sm font-semibold" style={{ color: '#38BDF8' }}>
            GoldKach Insights
          </span>
          <button
            onClick={onClose}
            className="text-sm font-semibold px-5 py-2 rounded transition-opacity duration-150 hover:opacity-80 focus:outline-none"
            style={{ backgroundColor: 'rgba(30,155,240,0.15)', color: '#38BDF8', border: '1px solid rgba(56,189,248,0.30)' }}
          >
            ← Back to Insights
          </button>
        </div>
      </div>
    </div>
  );
}