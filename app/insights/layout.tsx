import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Market Insights",
  description:
    "Explore GoldKach's latest market insights, ETF analysis, investment strategies, and global market outlooks — covering Africa, emerging markets, technology, dividends, and geopolitics.",
  keywords: [
    "investment insights Africa",
    "ETF analysis 2025",
    "emerging markets outlook",
    "frontier markets Africa",
    "GoldKach market insights",
    "semiconductor ETF",
    "dividend ETF",
    "global market outlook",
    "BRICS investment",
    "East Africa investment",
  ],
  openGraph: {
    title: "Market Insights — GoldKach Limited",
    description:
      "Explore expert analysis on ETFs, global market trends, emerging markets, and investment strategies tailored for African investors.",
    url: "https://www.goldkach.co.ug/insights",
    images: [
      {
        url: "/insights/insight.jpg",
        width: 1200,
        height: 630,
        alt: "GoldKach Market Insights — Investment Analysis and Global Trends",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Market Insights — GoldKach Limited",
    description:
      "Expert analysis on ETFs, global market trends, emerging markets, and investment strategies for African investors.",
    images: ["/insights/insight.jpg"],
  },
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
