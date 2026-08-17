import type { Metadata } from "next";
import Image from "next/image";
import {
  Binoculars,
  BookOpen,
  Envelope,
  Rocket,
  Target,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import { PageHeader } from "@/components/page-header";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "LACE Network is the UK-wide network supporting aspiring, current, and alumni apprentices through workshops, events, and community.",
};

const stats = [
  { value: "800+", label: "Apprentice members" },
  { value: "10,000+", label: "Students impacted" },
  { value: "100+", label: "Events hosted" },
];

const foundation = [
  {
    icon: BookOpen,
    title: "Our Story",
    description:
      "LACE Network was founded to bring together the people who shape the apprenticeship space. Today, we're a nationwide platform connecting individuals, education and industry through meaningful experiences.",
  },
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Our mission is to give every apprentice, whether aspiring, current or alumni, the support, connections and experiences that encourage growth and make their apprenticeship journey more rewarding.",
  },
  {
    icon: Binoculars,
    title: "Our Vision",
    description:
      "We envision a future where geography has no bearing on success and opportunities are driven by ambition, not location. We continue to open doors and create meaningful opportunities for more people to learn, develop and thrive.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        titleClassName="text-5xl sm:text-6xl"
        description="Helping you get more from the apprenticeship journey, with support that starts before and continues beyond."
      >
        <a
          href="mailto:contact@lacenetwork.com"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-void transition-colors duration-fast hover:bg-gold-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-void"
        >
          Contact Us
          <Envelope size={18} aria-hidden="true" />
        </a>
      </PageHeader>

      <section aria-label="Our story, mission, and vision" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <RevealGroup className="grid gap-8 lg:grid-cols-3">
          {foundation.map(({ icon: Icon, title, description }) => (
            <RevealItem
              key={title}
              className="rounded-2xl border border-line-brass/30 bg-charcoal p-8 sm:p-10"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-brass/30 bg-void text-gold">
                <Icon size={24} weight="bold" aria-hidden="true" />
              </div>
              <h2 className="mt-6 font-wordmark text-xl font-bold text-bone sm:text-2xl">
                {title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-bone-soft sm:text-base">
                {description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section aria-labelledby="what-we-do" className="border-t border-line-brass/20 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
            <h2 id="what-we-do" className="font-wordmark text-3xl font-bold tracking-tight text-bone sm:text-4xl">
              What We Do
            </h2>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold sm:text-base">
              Real support, delivered in real rooms.
            </p>
            <p className="mt-4 text-base leading-relaxed text-bone-soft">
              LACE Network supports aspiring, current, and alumni apprentices
              across the UK through a mix of in-person and online
              experiences, each one built to build confidence, open doors,
              and keep people connected long after a single session ends.
            </p>
          </Reveal>

          <div className="mt-16 space-y-16">
            <Reveal className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
              <div className="overflow-hidden rounded-2xl border border-line-brass/30">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/event-workshop.jpg"
                    alt="LACE Network delivering an apprenticeship workshop in a school classroom, with a screen showing employers that offer apprenticeships including the BBC, IBM, PwC, and Sky"
                    fill
                    loading="eager"
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-brass/30 bg-void text-gold">
                  <Rocket size={24} weight="bold" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-wordmark text-2xl font-bold text-bone">
                  Inspiring The Next Generation
                </h3>
                <p className="mt-3 text-base leading-relaxed text-bone-soft">
                  We partner with schools and colleges across the UK to
                  deliver tailored apprenticeship support, helping students
                  understand their options and build the confidence to take
                  the next step.
                </p>
                <p className="mt-3 text-base leading-relaxed text-bone-soft">
                  Through interactive workshops and online webinars delivered
                  by current apprentices, we bring real industry insight
                  straight to the classroom, giving students relatable,
                  first-hand guidance from those living the journey.
                </p>
                <a
                  href="mailto:contact@lacenetwork.com"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors duration-fast hover:text-gold-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-void rounded-sm"
                >
                  <Envelope size={18} aria-hidden="true" />
                  Get in touch today to bring a workshop to your school or
                  college.
                </a>
              </div>
            </Reveal>

            <Reveal className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
              <div className="overflow-hidden rounded-2xl border border-line-brass/30 lg:order-2">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/event-networking.jpg"
                    alt="Apprentices at a LACE Network outdoor networking event, exploring a rocky outcrop together"
                    fill
                    loading="eager"
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="lg:order-1">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-brass/30 bg-void text-gold">
                  <UsersThree size={24} weight="bold" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-wordmark text-2xl font-bold text-bone">
                  Exclusive Networking Events
                </h3>
                <p className="mt-3 text-base leading-relaxed text-bone-soft">
                  Our exclusive apprentice networking events are designed to
                  bring current and alumni apprentices together in a relaxed
                  and social setting. From hiking and escape rooms to
                  activity days and social meetups, our events make
                  networking feel natural, giving apprentices the chance to
                  share experiences, meet new people and expand their
                  network.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-labelledby="our-impact" className="border-t border-line-brass/20 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
            <h2 id="our-impact" className="font-wordmark text-3xl font-bold tracking-tight text-bone sm:text-4xl">
              Our impact so far...
            </h2>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold sm:text-base">
              Numbers that tell the story.
            </p>
          </Reveal>

          <RevealGroup className="mt-14 grid gap-10 text-center sm:grid-cols-3">
            {stats.map(({ value, label }) => (
              <RevealItem key={label}>
                <p className="font-wordmark text-4xl font-bold text-bone sm:text-5xl">
                  {value}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold sm:text-sm">
                  {label}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
