import type { Metadata } from "next";
import { EnvelopeSimple, Phone } from "@phosphor-icons/react/dist/ssr";
import { PartnerForm } from "@/components/partner-form";
import { Reveal } from "@/components/reveal";
import { SocialLinks } from "@/components/social-links";

const description =
  "Schools, colleges, and organisations can get in touch with LACE Network to partner with us on workshops, events, and apprenticeship support.";

export const metadata: Metadata = {
  title: "Contact Us",
  description,
  openGraph: {
    title: "Contact Us | LACE Network",
    description,
  },
};

export default function PartnerWithUsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line-brass/30 bg-void">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <Reveal>
            <h1 className="max-w-2xl font-wordmark text-5xl font-bold tracking-tight text-bone sm:text-6xl">
              Contact Us
            </h1>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold sm:text-base">
              We&apos;re here to help.
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-bone-soft">
              Whether you want to explore a partnership with us, are looking
              for apprenticeship support, or have a question about an event,
              our team is here to help and happy to answer any questions you
              may have.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-10">
              <a
                href="mailto:contact@lacenetwork.com"
                className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-void rounded-sm"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brass/30 bg-charcoal text-gold">
                  <EnvelopeSimple size={20} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-bone-soft">
                    Email
                  </span>
                  <span className="block text-sm font-medium text-bone transition-colors duration-fast hover:text-gold">
                    contact@lacenetwork.com
                  </span>
                </span>
              </a>

              <a
                href="tel:+442045424511"
                className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-void rounded-sm"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brass/30 bg-charcoal text-gold">
                  <Phone size={20} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-bone-soft">
                    Phone
                  </span>
                  <span className="block text-sm font-medium text-bone transition-colors duration-fast hover:text-gold">
                    020 4542 4511
                  </span>
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
        <Reveal>
          <h2 className="font-wordmark text-2xl font-bold text-bone sm:text-3xl">
            Or fill out the form below
          </h2>
          <div className="mt-8">
            <PartnerForm />
          </div>
        </Reveal>
      </section>

      <section aria-labelledby="follow-us" className="border-t border-line-brass/30 bg-charcoal py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Reveal>
            <h2 id="follow-us" className="font-wordmark text-3xl font-bold tracking-tight text-bone sm:text-4xl">
              Stay In The Loop
            </h2>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold sm:text-base">
              Follow LACE Network.
            </p>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-bone-soft">
              Follow us on TikTok and LinkedIn for the latest events,
              opportunities and updates.
            </p>
            <SocialLinks className="mt-8 justify-center" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
