"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "@/components/logo";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Upcoming Events", href: "/events" },
  { label: "Contact Us", href: "/partner-with-us" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line-brass/40 bg-void/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Logo imgClassName="h-11 w-auto sm:h-12" />

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative py-1 text-sm font-medium transition-colors duration-fast focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-void rounded-sm ${
                      active ? "text-bone" : "text-bone-soft hover:text-bone"
                    }`}
                  >
                    {item.label}
                    {active && (
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gold"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link
          href="/events"
          className="hidden md:inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-void transition-colors duration-fast hover:bg-gold-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-void"
        >
          Join an event
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-bone md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="border-t border-line-brass/40 bg-void px-6 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                      active ? "bg-charcoal text-bone" : "text-bone-soft"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-2">
              <Link
                href="/events"
                onClick={() => setOpen(false)}
                className="flex min-h-[44px] items-center justify-center rounded-full bg-gold px-5 text-sm font-semibold text-void focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                Join an event
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
