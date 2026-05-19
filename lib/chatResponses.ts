// ─── Types ────────────────────────────────────────────────────────────────────

export interface ResponseRule {
  keywords: string[];
  response: string | ((ctx: ResponseContext) => string);
  category: string;
}

export interface ResponseContext {
  investmentAmount: number;
  projections: {
    years: number;
    finalValue: number;
    profit: number;
    gainPercentage: number;
  }[];
  currentPage: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const usd = (n: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n);

const pct = (n: number) => n.toFixed(2) + '%';

// ─── Response Rules ───────────────────────────────────────────────────────────

export const RESPONSE_RULES: ResponseRule[] = [
  // ── Greetings ──
  {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'howdy'],
    category: 'greeting',
    response:
      "Hello! 👋 Welcome to GoldKach. I'm your investment assistant. I can help you with portfolio projections, products, onboarding, and more. What would you like to know?",
  },

  // ── Minimum investment ──
  {
    keywords: ['minimum', 'minimum investment', 'minimum amount', 'least amount', 'how much to start', 'how much do i need', 'starting amount'],
    category: 'investment',
    response:
      'Our minimum investment amount is **$1,000 USD**. You can start with this amount and scale up as your confidence grows. Use the Investment Simulator on our homepage to see projected returns.',
  },

  // ── Portfolio allocation ──
  {
    keywords: ['portfolio', 'allocation', 'soxx', 'qqq', 'how is it split', 'fund split', 'breakdown', 'composition', 'weighting', 'weight'],
    category: 'portfolio',
    response:
      'Our GoldKach Prime Growth Fund uses a **60/40 allocation**:\n\n• **SOXX** (iShares Semiconductor ETF) — 60%\n• **QQQ** (Invesco Nasdaq-100 ETF) — 40%\n\nThis blend targets high-growth technology and semiconductor sectors for long-term capital appreciation.',
  },

  // ── Returns / projections ──
  {
    keywords: ['return', 'returns', 'how are returns', 'calculated', 'projection', 'projections', 'how does it work', 'performance', 'historical'],
    category: 'returns',
    response:
      'Portfolio projections are based on **weighted historical performance**:\n\n**SOXX historical returns:**\n• 1 Year: 140.04%\n• 3 Years: 242.80%\n• 5 Years: 283.40%\n• 10 Years: 1,580%\n\n**QQQ historical returns:**\n• 1 Year: 35.81%\n• 3 Years: 110.20%\n• 5 Years: 120.01%\n• 10 Years: 566.73%\n\nCombined return = (0.6 × SOXX) + (0.4 × QQQ). Past performance does not guarantee future results.',
  },

  // ── 1-year projection ──
  {
    keywords: ['1 year', 'one year', '1yr', '1-year projection', 'one year projection'],
    category: 'projection',
    response: (ctx) => {
      const p = ctx.projections.find((x) => x.years === 1);
      if (!p || ctx.investmentAmount < 1000)
        return 'Please enter a valid investment amount (minimum $1,000) in the simulator to see your 1-year projection.';
      return `Based on your **${usd(ctx.investmentAmount)}** investment:\n\n📈 **1-Year Projection**\n• Projected Value: **${usd(p.finalValue)}**\n• Estimated Profit: **+${usd(p.profit)}**\n• Portfolio Gain: **+${pct(p.gainPercentage)}**\n\n*Based on combined SOXX/QQQ historical returns.*`;
    },
  },

  // ── 3-year projection ──
  {
    keywords: ['3 year', 'three year', '3yr', '3-year projection', 'three year projection'],
    category: 'projection',
    response: (ctx) => {
      const p = ctx.projections.find((x) => x.years === 3);
      if (!p || ctx.investmentAmount < 1000)
        return 'Please enter a valid investment amount (minimum $1,000) in the simulator to see your 3-year projection.';
      return `Based on your **${usd(ctx.investmentAmount)}** investment:\n\n📈 **3-Year Projection**\n• Projected Value: **${usd(p.finalValue)}**\n• Estimated Profit: **+${usd(p.profit)}**\n• Portfolio Gain: **+${pct(p.gainPercentage)}**\n\n*Based on combined SOXX/QQQ historical returns.*`;
    },
  },

  // ── 5-year projection ──
  {
    keywords: ['5 year', 'five year', '5yr', '5-year projection', 'five year projection'],
    category: 'projection',
    response: (ctx) => {
      const p = ctx.projections.find((x) => x.years === 5);
      if (!p || ctx.investmentAmount < 1000)
        return 'Please enter a valid investment amount (minimum $1,000) in the simulator to see your 5-year projection.';
      return `Based on your **${usd(ctx.investmentAmount)}** investment:\n\n📈 **5-Year Projection**\n• Projected Value: **${usd(p.finalValue)}**\n• Estimated Profit: **+${usd(p.profit)}**\n• Portfolio Gain: **+${pct(p.gainPercentage)}**\n\n*Based on combined SOXX/QQQ historical returns.*`;
    },
  },

  // ── 10-year projection ──
  {
    keywords: ['10 year', 'ten year', '10yr', '10-year projection', 'ten year projection', 'decade'],
    category: 'projection',
    response: (ctx) => {
      const p = ctx.projections.find((x) => x.years === 10);
      if (!p || ctx.investmentAmount < 1000)
        return 'Please enter a valid investment amount (minimum $1,000) in the simulator to see your 10-year projection.';
      return `Based on your **${usd(ctx.investmentAmount)}** investment:\n\n📈 **10-Year Projection**\n• Projected Value: **${usd(p.finalValue)}**\n• Estimated Profit: **+${usd(p.profit)}**\n• Portfolio Gain: **+${pct(p.gainPercentage)}**\n\n*Based on combined SOXX/QQQ historical returns.*`;
    },
  },

  // ── All projections ──
  {
    keywords: ['all projections', 'show projections', 'all returns', 'show all', 'my projections', 'what are my projections'],
    category: 'projection',
    response: (ctx) => {
      if (!ctx.projections.length || ctx.investmentAmount < 1000)
        return 'Please enter a valid investment amount (minimum $1,000) in the simulator to see your projections.';
      const lines = ctx.projections
        .map((p) => `• **${p.years}Y**: ${usd(p.finalValue)} (+${pct(p.gainPercentage)})`)
        .join('\n');
      return `Here are all projections for **${usd(ctx.investmentAmount)}**:\n\n${lines}\n\n*Based on combined SOXX/QQQ historical returns. Past performance does not guarantee future results.*`;
    },
  },

  // ── Countries / supported regions ──
  {
    keywords: ['country', 'countries', 'supported', 'where', 'region', 'available', 'operate', 'location', 'offices'],
    category: 'countries',
    response:
      'GoldKach currently supports onboarding in **3 countries**:\n\n🇺🇬 **Uganda** — Our primary office\n🇰🇪 **Kenya** — East Africa hub\n🇬🇧 **United Kingdom** — European operations\n\nSelect your country when you first visit the site to get personalised support from your nearest office.',
  },

  // ── Uganda ──
  {
    keywords: ['uganda', 'ugandan', 'kampala'],
    category: 'countries',
    response:
      '🇺🇬 Yes! GoldKach is available in **Uganda**. Our primary office is based in Kampala. You can begin onboarding by clicking **Get Started** or visiting [goldkach.co.ug](https://goldkach.co.ug/).',
  },

  // ── Kenya ──
  {
    keywords: ['kenya', 'kenyan', 'nairobi'],
    category: 'countries',
    response:
      '🇰🇪 Yes! GoldKach is available in **Kenya**. We support Kenyan investors looking to access global markets. Click **Get Started** to begin your onboarding journey.',
  },

  // ── UK ──
  {
    keywords: ['uk', 'united kingdom', 'britain', 'england', 'london', 'british'],
    category: 'countries',
    response:
      '🇬🇧 Yes! GoldKach is available in the **United Kingdom**. UK-based investors can access our full range of investment products. Click **Get Started** to begin onboarding.',
  },

  // ── How to start / onboarding ──
  {
    keywords: ['how do i start', 'get started', 'start investing', 'begin', 'onboard', 'onboarding', 'sign up', 'register', 'open account', 'create account', 'how to invest'],
    category: 'onboarding',
    response:
      "Getting started with GoldKach is simple:\n\n1️⃣ Click the **Get Started** or **Invest Today** button\n2️⃣ Select your country (Uganda, Kenya, or UK)\n3️⃣ Complete the onboarding form at [goldkach.co.ug](https://goldkach.co.ug/)\n4️⃣ Our team will guide you through the investment process\n\nMinimum investment: **$1,000 USD**",
  },

  // ── Products ──
  {
    keywords: ['product', 'products', 'fund', 'funds', 'what do you offer', 'offerings', 'investment products', 'managed account', 'etf'],
    category: 'products',
    response:
      'GoldKach offers **3 investment product categories**:\n\n📊 **1. Managed Accounts** — Tailored portfolios for HNWIs and institutions\n\n💼 **2. Funds** — Including the GoldKach Prime Growth Fund (SOXX 60% / QQQ 40%)\n\n📈 **3. ETFs** — Exchange Traded Funds *(Coming Soon)*\n\nVisit our [Products page](/products) for full details and fact sheets.',
  },

  // ── GoldKach Prime Growth Fund ──
  {
    keywords: ['prime growth', 'gkpgf', 'prime growth fund', 'goldkach fund', 'main fund'],
    category: 'products',
    response:
      '**GoldKach Prime Growth Fund (GKPGF)**\n\n• Fund Type: Growth Focused Balanced Fund\n• Inception: 30/09/2024\n• Management Fee: 2%\n• Currency: USD\n• Allocation: SOXX 60% + QQQ 40%\n\nDesigned for investors seeking dynamic capital appreciation through the global technology sector. Download the fact sheet on our [Products page](/products).',
  },

  // ── SOXX explained ──
  {
    keywords: ['soxx', 'semiconductor', 'ishares semiconductor', 'what is soxx'],
    category: 'portfolio',
    response:
      '**SOXX — iShares Semiconductor ETF**\n\nSOXX tracks the ICE Semiconductor Index, giving exposure to leading semiconductor companies like NVIDIA, AMD, Intel, and TSMC.\n\n• GoldKach allocation: **60%**\n• Historical 10-year return: **1,580%**\n• Sector: Technology / Semiconductors\n\nSemiconductors are the backbone of AI, cloud computing, and modern electronics — a key growth driver in our portfolio.',
  },

  // ── QQQ explained ──
  {
    keywords: ['qqq', 'invesco', 'nasdaq', 'nasdaq 100', 'what is qqq'],
    category: 'portfolio',
    response:
      '**QQQ — Invesco QQQ ETF (Nasdaq-100)**\n\nQQQ tracks the Nasdaq-100 Index, holding the 100 largest non-financial companies on Nasdaq — including Apple, Microsoft, Amazon, Meta, and Google.\n\n• GoldKach allocation: **40%**\n• Historical 10-year return: **566.73%**\n• Sector: Diversified Technology\n\nQQQ provides broad exposure to the world\'s most innovative companies.',
  },

  // ── Insights ──
  {
    keywords: ['insight', 'insights', 'article', 'articles', 'blog', 'market', 'news', 'research', 'analysis'],
    category: 'insights',
    response:
      'Our **Insights** section features expert market analysis and investment research:\n\n📰 Topics covered:\n• AI & Semiconductor ETFs (SOXX)\n• Dividend ETFs (SCHD)\n• High Yield Bonds (HYG)\n• African & Emerging Markets\n• Global Market Outlooks\n• Geopolitical investment impacts\n\nVisit our [Insights page](/insights) to read the latest articles.',
  },

  // ── Contact ──
  {
    keywords: ['contact', 'reach', 'email', 'phone', 'call', 'speak', 'talk', 'support', 'help', 'customer service'],
    category: 'contact',
    response:
      'You can reach the GoldKach team through our **Contact page**:\n\n📧 Visit [Contact Us](/contact) to send us a message\n🌐 Or go directly to [goldkach.co.ug](https://goldkach.co.ug/)\n\nOur team is available to assist with onboarding, investment queries, and account support.',
  },

  // ── About ──
  {
    keywords: ['about', 'who are you', 'who is goldkach', 'company', 'about goldkach', 'what is goldkach', 'cma', 'regulated', 'license'],
    category: 'about',
    response:
      '**GoldKach Limited** is a CMA-regulated investment management firm.\n\n🏢 We provide:\n• Wealth management\n• Investment advisory\n• Retirement planning\n• Corporate financial services\n\nWe serve individuals and institutions across Africa and beyond, with offices in Uganda, Kenya, and the UK.\n\nLearn more on our [About page](/about).',
  },

  // ── Simulator ──
  {
    keywords: ['simulator', 'calculator', 'simulate', 'calculate', 'tool', 'projection tool', 'investment calculator'],
    category: 'simulator',
    response:
      'Our **Investment Projection Simulator** is available on the homepage.\n\n🔢 Enter any amount (minimum $1,000) to instantly see:\n• Projected value at 1, 3, 5, and 10 years\n• Estimated profit\n• Portfolio gain percentage\n• Interactive growth chart\n\nAll projections are based on historical SOXX and QQQ performance data.',
  },

  // ── Fees ──
  {
    keywords: ['fee', 'fees', 'charge', 'charges', 'cost', 'management fee', 'how much does it cost'],
    category: 'fees',
    response:
      'GoldKach charges a **2% annual management fee** on the GoldKach Prime Growth Fund.\n\nThis covers:\n• Professional portfolio management\n• Market research and analysis\n• Client support and reporting\n\nFor managed accounts, fees are discussed during the onboarding consultation.',
  },

  // ── Risk ──
  {
    keywords: ['risk', 'risky', 'safe', 'safety', 'lose money', 'guarantee', 'guaranteed', 'loss'],
    category: 'risk',
    response:
      '⚠️ **Important Risk Disclosure**\n\nAll investments carry risk. GoldKach portfolios invest in equity ETFs which can be volatile.\n\n• Investments may go **up or down**\n• You may receive **less than you invested**\n• Past performance does **not** guarantee future results\n\nWe recommend consulting with our advisors to understand your risk tolerance before investing.',
  },

  // ── Disclaimer ──
  {
    keywords: ['disclaimer', 'disclosure', 'warning', 'terms'],
    category: 'legal',
    response:
      '📋 **Disclaimer**\n\nProjections are estimates based on historical asset performance and are not guarantees of future returns. Investments may go up or down and clients may receive less than the original amount invested.\n\nGoldKach Limited is regulated by the Capital Markets Authority (CMA).',
  },
];

// ─── Page-aware context responses ─────────────────────────────────────────────

export const PAGE_CONTEXT_RESPONSES: Record<string, string> = {
  '/': "You're on the **GoldKach homepage**. You can use the Investment Simulator to project your returns, or explore our products and insights. How can I help you?",
  '/products':
    "You're on the **Products page**. Here you can explore our Managed Accounts, the GoldKach Prime Growth Fund, and upcoming ETF offerings. What would you like to know?",
  '/insights':
    "You're on the **Insights page**. Browse our expert market analysis covering AI stocks, semiconductor ETFs, African markets, and global investment outlooks. Any specific topic?",
  '/contact':
    "You're on the **Contact page**. You can send us a message directly here, or I can answer your questions right now. What do you need help with?",
  '/about':
    "You're on the **About page**. GoldKach is a CMA-regulated investment firm serving Uganda, Kenya, and the UK. What would you like to know about us?",
  '/homeug':
    "You're viewing the **Uganda** version of GoldKach. Our Kampala office is ready to assist you. How can I help you get started?",
  '/homeke':
    "You're viewing the **Kenya** version of GoldKach. Our Nairobi team is here to help. How can I assist you today?",
  '/homeuk':
    "You're viewing the **United Kingdom** version of GoldKach. Our UK team is ready to assist. What would you like to know?",
};

// ─── Suggested questions ──────────────────────────────────────────────────────

export const SUGGESTED_QUESTIONS = [
  'What is the minimum investment?',
  'How are projections calculated?',
  'How does the portfolio work?',
  'Do you support Kenya?',
  'How do I start onboarding?',
  'Explain SOXX and QQQ',
  'What products do you offer?',
  'Show me all my projections',
];

// ─── Response engine ──────────────────────────────────────────────────────────

export function getResponse(input: string, ctx: ResponseContext): string {
  const lower = input.toLowerCase().trim();

  // Check each rule for keyword match
  for (const rule of RESPONSE_RULES) {
    const matched = rule.keywords.some((kw) => lower.includes(kw.toLowerCase()));
    if (matched) {
      return typeof rule.response === 'function' ? rule.response(ctx) : rule.response;
    }
  }

  // Page-aware fallback
  const pageCtx = PAGE_CONTEXT_RESPONSES[ctx.currentPage];
  if (pageCtx) {
    return `I'm not sure about that specific question, but here's what I can help with on this page:\n\n${pageCtx}\n\nTry asking about: minimum investment, portfolio allocation, projections, supported countries, or how to get started.`;
  }

  // Generic fallback
  return "I'm not sure about that. Here are some things I can help with:\n\n• Minimum investment amount\n• Portfolio allocation (SOXX/QQQ)\n• Investment projections\n• Supported countries\n• How to get started\n• Products and funds\n\nTry one of the suggested questions below, or rephrase your query!";
}
