import type { Metadata } from "next";
import { Fraunces, Geist, Poppins } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";
import { NewsletterPopup } from "@/components/newsletter-popup";

const displayFont = Fraunces({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const bodyFont = Geist({
  variable: "--font-inter",
  subsets: ["latin"],
});

const wordmarkFont = Poppins({
  variable: "--font-poppins-raw",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "LACE Network",
    template: "%s | LACE Network",
  },
  description:
    "LACE Network connects aspiring, current, and alumni apprentices across the UK through workshops, networking events, and community.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${displayFont.variable} ${bodyFont.variable} ${wordmarkFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-void text-bone">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-5 focus:py-3 focus:text-void focus:outline-none focus:ring-2 focus:ring-gold"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <BackToTop />
        <NewsletterPopup />
      </body>
    </html>
  );
}
