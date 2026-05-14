import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CountrySelectModal from "@/components/CountrySelectModal";

const poppins = Poppins({ 
  subsets: ["latin"], 
  display: "swap", 
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.goldkach.com"),
  title: {
    default: "GoldKach Limited — Global Investment Management",
    template: "%s | GoldKach Limited",
  },
  description:
    "GoldKach Limited provides personalized investment strategies, wealth management, and global market access for individuals, institutions, and corporations across Africa and beyond.",
  keywords: [
    "investment management Uganda",
    "wealth management Africa",
    "ETF Africa",
    "global investment Kampala",
    "GoldKach",
    "managed accounts Uganda",
    "financial advisory Uganda",
    "frontier markets investment",
  ],
  authors: [{ name: "GoldKach Limited", url: "https://www.goldkach.com" }],
  creator: "GoldKach Limited",
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: "https://www.goldkach.com",
    siteName: "GoldKach Limited",
    title: "GoldKach Limited — Global Investment Management",
    description:
      "Personalized financial strategies for individuals and corporations — building wealth, securing futures, and expanding horizons across global markets.",
    images: [
      {
        url: "/LOGO.png",
        width: 1200,
        height: 630,
        alt: "GoldKach Limited — Global Investment Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GoldKach Limited — Global Investment Management",
    description:
      "Personalized financial strategies for individuals and corporations — building wealth, securing futures, and expanding horizons across global markets.",
    images: ["/LOGO.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${poppins.className}`}>
        <Providers>
          <CountrySelectModal />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
