import { GraduationCap, Rocket, Sparkle } from "@phosphor-icons/react/dist/ssr";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { SocialLinks } from "@/components/social-links";
import { Hero } from "@/components/hero";
import { SectionDots } from "@/components/section-dots";
import { Testimonials, type Testimonial } from "@/components/testimonials";

const lace = [
  {
    letter: "L",
    title: "Linking",
    description:
      "Connecting you with the right people, opportunities, and experiences to grow.",
  },
  {
    letter: "A",
    title: "Apprentices",
    description:
      "Supporting the journey from aspiring apprentice to alumni, and every stage in between.",
  },
  {
    letter: "C",
    title: "Creating",
    description:
      "Creating opportunities that inspire ambition and broaden horizons.",
  },
  {
    letter: "E",
    title: "Experiences",
    description:
      "Meaningful experiences that are engaging, practical and memorable.",
  },
];

const audiences = [
  {
    icon: Sparkle,
    title: "Aspiring apprentices",
    description:
      "Thinking about an apprenticeship? Get expert guidance, join our workshops, and take the next step with confidence.",
  },
  {
    icon: Rocket,
    title: "Current apprentices",
    description:
      "In the middle of your apprenticeship? Access workshops, events, and a private WhatsApp community built just for you.",
  },
  {
    icon: GraduationCap,
    title: "Alumni apprentices",
    description:
      "Finished your apprenticeship? Your experience matters. Share what you've learnt, inspire others, and keep growing.",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Muhammad P.",
    role: "Current Apprentice",
    stage: "Current Apprentice",
    quote:
      "After attending LACE Network's webinar, I put their advice into practice, improving my CV and interview approach. It ultimately helped me secure a Digital Analytics Apprenticeship.",
    rating: 5,
    tags: ["Workshop", "Progression"],
  },
  {
    name: "Kian B.",
    role: "Aspiring Apprentice",
    stage: "Aspiring Apprentice",
    quote:
      "I've been to many webinars, but LACE Network's was the best I've been to.",
    rating: 5,
    tags: ["Webinars", "Workshops"],
  },
  {
    name: "Anisa P.",
    role: "College Teacher",
    stage: "College Teacher",
    quote:
      "The workshop was thoughtfully planned and tailored to meet the specific needs of our students. The interactive activities kept them engaged throughout, while delivering an experience that left a lasting impact.",
    rating: 5,
    tags: ["Workshop", "College"],
  },
  {
    name: "Debbie P.",
    role: "College Teacher",
    stage: "College Teacher",
    quote:
      "I was really impressed by the professionalism of the LACE team and the delivery of the workshop. The session was engaging, well organised and really connected with our students.",
    rating: 5,
    tags: ["Workshop", "College"],
  },
  {
    name: "Matthew J.",
    role: "Current Apprentice",
    stage: "Current Apprentice",
    quote:
      "I really enjoyed the apprentice networking event and appreciated being introduced to so many people. Networking can sometimes feel daunting, but LACE made it feel comfortable and easy. I'm already looking forward to the next event!",
    rating: 5,
    tags: ["Current Apprentice", "Networking"],
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section aria-labelledby="what-is-lace" className="relative overflow-hidden mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <SectionDots />
        <SectionDots position="bottom" />
        <Reveal className="relative z-10">
          <h2 id="what-is-lace" className="font-wordmark text-3xl font-bold tracking-tight text-bone sm:text-4xl">
            Behind The Name
          </h2>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold sm:text-base">
            Four Letters, One Mission.
          </p>
        </Reveal>

        <RevealGroup className="relative z-10 mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {lace.map(({ letter, title, description }) => (
            <RevealItem
              key={title}
              className="group rounded-2xl border border-line-brass/30 bg-charcoal p-10 transition-colors duration-base hover:border-gold/60"
            >
              <div
                aria-hidden="true"
                className="inline-flex h-16 w-16 items-center justify-center rounded-xl border border-brass/30 bg-void font-wordmark text-2xl font-bold text-gold transition-transform duration-base group-hover:scale-105"
              >
                {letter}
              </div>
              <h3 className="mt-7 font-wordmark text-2xl font-bold text-bone">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-bone-soft sm:text-base">
                {description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section aria-labelledby="who-its-for" className="relative overflow-hidden bg-charcoal py-20 sm:py-28">
        <SectionDots />
        <SectionDots position="bottom" />
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
            <h2 id="who-its-for" className="font-wordmark text-3xl font-bold tracking-tight text-bone sm:text-4xl">
              With You At Every Step
            </h2>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold sm:text-base">
              Before. During. Beyond.
            </p>
          </Reveal>

          <RevealGroup className="mt-14 grid gap-6 lg:grid-cols-3">
            {audiences.map(({ icon: Icon, title, description }) => (
              <RevealItem
                key={title}
                className="rounded-2xl border border-line-brass/30 bg-charcoal-2 p-8"
              >
                <Icon size={28} weight="bold" className="text-gold" aria-hidden="true" />
                <h3 className="mt-6 font-wordmark text-lg font-bold text-bone">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-bone-soft sm:text-base">
                  {description}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section aria-labelledby="testimonials" className="relative overflow-hidden mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <SectionDots />
        <SectionDots position="bottom" />
        <Reveal className="text-center">
          <h2 id="testimonials" className="font-wordmark text-3xl font-bold tracking-tight text-bone sm:text-4xl">
            Testimonials
          </h2>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold sm:text-base">
            Real Stories, Real Impact.
          </p>
        </Reveal>

        <div className="mt-14">
          <Testimonials testimonials={testimonials} />
        </div>
      </section>

      <section aria-labelledby="follow-us" className="relative overflow-hidden border-t border-line-brass/30 bg-charcoal py-20 sm:py-28">
        <SectionDots />
        <SectionDots position="bottom" />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
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
