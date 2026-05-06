import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with GoldKach Limited. Reach our team for investment advisory, wealth management, corporate services, or general enquiries. Located at Kanjokya House, Kampala, Uganda.",
  keywords: [
    "contact GoldKach",
    "investment advisory Uganda",
    "wealth management contact",
    "Kampala financial advisor",
    "GoldKach Kanjokya House",
  ],
  openGraph: {
    title: "Contact GoldKach Limited",
    description:
      "Have a question? Reach our team for investment advisory, wealth management, and corporate financial services. We're ready to help.",
    url: "https://www.goldkach.co.ug/contact",
    images: [
      {
        url: "/LOGO.png",
        width: 1200,
        height: 630,
        alt: "Contact GoldKach Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact GoldKach Limited",
    description:
      "Have a question? Reach our team for investment advisory, wealth management, and corporate financial services.",
    images: ["/LOGO.png"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
