import type { Metadata } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { company } from "@/content/company";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import ScrollProgress from "@/components/layout/ScrollProgress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-jb",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.taafa.com.au"),
  title: {
    default:
      "TAAF — Accountants & Financial Advisors | Central Coast NSW",
    template: "%s | Tenth Avenue Accountants & Financial Advisors",
  },
  description:
    "Transparent accounting, tax and financial advice for individuals, families and businesses across the Central Coast. Xero Platinum Champion Partner. Serving the region since 2017.",
  keywords: [
    "accountants central coast",
    "tax return toukley",
    "SMSF central coast",
    "financial advisor NSW",
    "business accounting",
    "Xero accountant",
  ],
  openGraph: {
    title: "TAAF — Financial confidence, built for the future",
    description:
      "Accounting, advisory and strategic financial planning for the Central Coast.",
    type: "website",
    locale: "en_AU",
    siteName: company.name,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${sora.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="bg-grid min-h-full">
        <SmoothScroll />
        <ScrollProgress />
        <Header />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
