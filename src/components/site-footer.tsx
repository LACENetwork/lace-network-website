import Image from "next/image";
import Link from "next/link";
import { EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "@/components/logo";
import { SocialLinks } from "@/components/social-links";

const footerNav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Upcoming Events", href: "/events" },
  { label: "Contact Us", href: "/partner-with-us" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line-brass/30 bg-charcoal text-bone">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div className="flex max-w-sm flex-wrap items-center gap-10">
            <Logo imgClassName="h-10 w-auto sm:h-11" />
            <SocialLinks variant="icon" />
          </div>

          <nav aria-label="Footer">
            <ul className="space-y-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-bone-soft transition-colors duration-fast hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-3">
            <div className="flex items-start gap-2 text-sm leading-relaxed text-bone-soft">
              <MapPin size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
              <span>United Kingdom</span>
            </div>
            <a
              href="mailto:contact@lacenetwork.com"
              className="flex items-center gap-2 text-sm font-medium text-bone-soft transition-colors duration-fast hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
            >
              <EnvelopeSimple size={18} className="text-gold" aria-hidden="true" />
              contact@lacenetwork.com
            </a>
            <a
              href="tel:+442045424511"
              className="flex items-center gap-2 text-sm font-medium text-bone-soft transition-colors duration-fast hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
            >
              <Phone size={18} className="text-gold" aria-hidden="true" />
              020 4542 4511
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-line-brass/30 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-bone-soft">
            © {new Date().getFullYear()} LACE Network. All rights reserved.
          </p>
          <Image
            src="/ico-logo.png"
            alt="Registered with the Information Commissioner's Office"
            width={1056}
            height={618}
            loading="eager"
            className="h-10 w-auto self-start opacity-90 sm:self-auto"
          />
        </div>
      </div>
    </footer>
  );
}
