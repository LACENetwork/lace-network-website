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

const siteDescription =
  "LACE Network connects aspiring, current, and alumni apprentices across the UK through workshops, networking events, and community.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lacenetwork.com"),
  title: {
    default: "LACE Network",
    template: "%s | LACE Network",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "LACE Network",
    title: "LACE Network",
    description: siteDescription,
    url: "https://www.lacenetwork.com",
    images: [
      {
        url: "/event-networking.jpg",
        width: 1200,
        height: 1200,
        alt: "LACE Network apprentices at an outdoor networking event",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LACE Network",
    description: siteDescription,
    images: ["/event-networking.jpg"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LACE Network",
  url: "https://www.lacenetwork.com",
  logo: "https://www.lacenetwork.com/lace-logo-white.png",
  description: siteDescription,
  email: "contact@lacenetwork.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "71-75 Shelton Street, Covent Garden",
    addressLocality: "London",
    postalCode: "WC2H 9JQ",
    addressCountry: "GB",
  },
  sameAs: [
    "https://www.tiktok.com/@lace_network",
    "https://www.linkedin.com/company/lace-network/",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${displayFont.variable} ${bodyFont.variable} ${wordmarkFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-void text-bone">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
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
