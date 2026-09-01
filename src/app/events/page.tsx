import type { Metadata } from "next";
import Image from "next/image";
import { CaretRight, Clock, MapPin, Users } from "@phosphor-icons/react/dist/ssr";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

const heroCollage = [
  "/gallery/collage-05.jpg",
  "/gallery/collage-02.jpg",
  "/gallery/collage-03.jpg",
  "/gallery/collage-04.jpg",
  "/gallery/collage-01.jpg",
  "/gallery/collage-06.jpg",
];

const description =
  "See upcoming LACE Network workshops and networking events for aspiring, current, and alumni apprentices across the UK.";

export const metadata: Metadata = {
  title: "Upcoming Events",
  description,
  openGraph: {
    title: "Upcoming Events | LACE Network",
    description,
    images: ["/event-workshop.jpg"],
  },
};

// Always check against the real current date rather than a cached build.
export const dynamic = "force-dynamic";

function ordinal(day: string) {
  const n = Number(day);
  if (n % 10 === 1 && n % 100 !== 11) return `${day}st`;
  if (n % 10 === 2 && n % 100 !== 12) return `${day}nd`;
  if (n % 10 === 3 && n % 100 !== 13) return `${day}rd`;
  return `${day}th`;
}

const monthIndex: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

function isUpcoming(event: { day: string; month: string; year: string }) {
  const eventDate = new Date(Number(event.year), monthIndex[event.month], Number(event.day));
  const cutoff = new Date(eventDate);
  cutoff.setDate(cutoff.getDate() + 1);
  return new Date() < cutoff;
}

const allEvents = [
  {
    title: "LACE Network x Weightmans: Apprenticeship Launchpad Workshop",
    weekday: "Thursday",
    weekdayShort: "Thu",
    day: "27",
    month: "Aug",
    year: "2026",
    time: "4:00 – 6:00 PM",
    startISO: "2026-08-27T16:00:00+01:00",
    endISO: "2026-08-27T18:00:00+01:00",
    location: "Manchester",
    format: "In person",
    audience: "Aspiring apprentices",
    description:
      "Explore the apprenticeship journey, from navigating applications to understanding what employers look for and approaching the application process with confidence.",
    ticketHref: "https://www.eventbrite.com/e/1996115888356?aff=oddtdtcreator",
    soldOut: true,
  },
];

const events = allEvents.filter(isUpcoming);

const eventsJsonLd = events.map((event) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: event.title,
  startDate: event.startISO,
  endDate: event.endISO,
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: event.location,
    address: {
      "@type": "PostalAddress",
      addressLocality: event.location,
      addressCountry: "GB",
    },
  },
  description: event.description,
  organizer: {
    "@type": "Organization",
    name: "LACE Network",
    url: "https://www.lacenetwork.com",
  },
  offers: {
    "@type": "Offer",
    url: event.ticketHref,
    availability: event.soldOut
      ? "https://schema.org/SoldOut"
      : "https://schema.org/InStock",
  },
}));

export default function EventsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsJsonLd) }}
      />
      <section className="relative overflow-hidden border-b border-line-brass/30 bg-void">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 grid grid-cols-3 gap-1 opacity-45"
        >
          {heroCollage.map((src, i) => (
            <div key={src} className={`relative ${i >= 3 ? "hidden sm:block" : ""}`}>
              <Image
                src={src}
                alt=""
                fill
                loading="eager"
                className="object-cover"
                sizes="(max-width: 640px) 34vw, 34vw"
              />
            </div>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,9,8,0.55)_0%,rgba(10,9,8,0.85)_60%,rgba(10,9,8,0.97)_100%)]"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <Reveal>
            <h1 className="max-w-3xl font-wordmark text-5xl font-bold tracking-tight text-bone sm:text-6xl">
              Upcoming Events
            </h1>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold sm:text-base">
              Workshops and networking events, nationwide.
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-bone-soft">
              Join us in person or online. Events are open to whichever
              apprentice group they&apos;re designed for. Check the audience
              tag on each listing.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <RevealGroup className="grid gap-8 sm:grid-cols-2">
          {events.map((event) => (
            <RevealItem
              key={event.title}
              className="overflow-hidden rounded-2xl border border-line-brass/30 bg-charcoal transition-colors duration-base hover:border-gold/60"
            >
              {event.soldOut && (
                <div className="bg-gold py-2 text-center text-xs font-bold uppercase tracking-[0.3em] text-void">
                  Sold Out
                </div>
              )}
              <div className="flex items-center justify-center gap-4 border-b border-line-brass/30 bg-void py-8">
                <div className="text-center">
                  <p className="font-wordmark text-5xl font-bold text-bone">
                    {ordinal(event.day)}
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                    {event.month}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-bone-soft">
                    {event.weekdayShort}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">
                    {event.format}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-line-brass/30 px-3 py-1 text-xs font-medium text-bone-soft">
                    <Users size={14} aria-hidden="true" />
                    {event.audience}
                  </span>
                </div>

                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {event.weekday}, {ordinal(event.day)} {event.month} {event.year}
                </p>
                <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold uppercase tracking-[0.15em] text-bone-soft">
                  <span className="flex items-center gap-2">
                    <MapPin size={14} className="text-brass" aria-hidden="true" />
                    {event.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={14} className="text-brass" aria-hidden="true" />
                    {event.time}
                  </span>
                </div>

                <h2 className="mt-4 font-wordmark text-xl font-bold text-bone">
                  {event.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-bone-soft">
                  {event.description}
                </p>

                {event.soldOut ? (
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-[0.1em] text-bone-soft">
                    Sold Out
                  </span>
                ) : (
                  <a
                    href={event.ticketHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-[0.1em] text-gold transition-colors duration-fast hover:text-gold-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal rounded-sm"
                  >
                    Get Your Tickets
                    <CaretRight size={16} weight="bold" aria-hidden="true" />
                  </a>
                )}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="mt-14 text-center text-sm text-bone-soft">
          More events are added regularly. Follow us on TikTok and LinkedIn
          so you never miss one.
        </p>
      </section>
    </>
  );
}
