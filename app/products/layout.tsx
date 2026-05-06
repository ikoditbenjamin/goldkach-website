import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investment Products",
  description:
    "Discover GoldKach's investment products — managed accounts, the Prime Growth Fund, Balanced Edge Fund, Income Builder Fund, and Exchange Traded Funds (ETFs). Accessible to individuals, institutions, clubs, and finance professionals.",
  keywords: [
    "GoldKach investment products",
    "managed accounts Uganda",
    "GoldKach Prime Growth Fund",
    "GoldKach Balanced Edge Fund",
    "GoldKach Income Builder Fund",
    "ETF Uganda",
    "institutional investment Africa",
    "high net worth investment Uganda",
    "global ETF access Africa",
    "investment funds Kampala",
  ],
  openGraph: {
    title: "Investment Products — GoldKach Limited",
    description:
      "Access managed accounts, growth funds, balanced funds, income funds, and ETFs designed to help individuals and institutions across Africa grow their wealth globally.",
    url: "https://www.goldkach.co.ug/products",
    images: [
      {
        url: "/LOGO.png",
        width: 1200,
        height: 630,
        alt: "GoldKach Investment Products — Managed Accounts, Funds and ETFs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Investment Products — GoldKach Limited",
    description:
      "Managed accounts, growth funds, balanced funds, income funds, and ETFs for individuals and institutions across Africa.",
    images: ["/LOGO.png"],
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
