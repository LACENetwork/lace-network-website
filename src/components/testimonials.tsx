"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion, type PanInfo } from "framer-motion";
import { Quotes, Star } from "@phosphor-icons/react/dist/ssr";

export type Testimonial = {
  name: string;
  role: string;
  stage: string;
  quote: string;
  rating: number;
  tags: string[];
};

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function TestimonialCard({
  testimonial,
  emphasised,
}: {
  testimonial: Testimonial;
  emphasised: boolean;
}) {
  return (
    <div
      className={`h-full rounded-2xl border p-6 transition-colors duration-base sm:p-8 ${
        emphasised
          ? "border-gold bg-charcoal-2"
          : "border-line-brass/20 bg-charcoal"
      }`}
    >
      <span className="inline-flex items-center gap-1.5 rounded-full border border-brass/30 bg-void px-3 py-1 text-xs font-medium text-bone-soft">
        <Quotes size={14} weight="fill" className="text-gold" aria-hidden="true" />
        {testimonial.stage}
      </span>

      <div className="mt-5 flex items-center gap-3">
        <div
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brass/30 bg-void font-wordmark text-sm font-bold text-gold"
        >
          {initials(testimonial.name)}
        </div>
        <div>
          <p className="font-wordmark text-base font-bold text-bone">
            {testimonial.name}
          </p>
          <p className="text-xs text-bone-soft">{testimonial.role}</p>
        </div>
      </div>

      <div
        className="mt-4 flex items-center gap-1.5"
        aria-label={`${testimonial.rating} out of 5 stars`}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            weight="fill"
            className={i < testimonial.rating ? "text-gold" : "text-bone-soft/20"}
            aria-hidden="true"
          />
        ))}
        <span className="ml-1 text-sm text-bone-soft">
          {testimonial.rating.toFixed(1)}
        </span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-bone-soft sm:text-base">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {testimonial.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-brass/20 bg-void px-3 py-1 text-xs font-medium text-bone-soft"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const count = testimonials.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  useEffect(() => {
    if (paused || count <= 1) return;
    const id = setInterval(next, 8000);
    return () => clearInterval(id);
  }, [index, paused, next, count]);

  function handleDragEnd(
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) {
    const threshold = 60;
    if (info.offset.x < -threshold) next();
    else if (info.offset.x > threshold) prev();
  }

  const prevIndex = (index - 1 + count) % count;
  const nextIndex = (index + 1) % count;

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label="Apprentice testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden">
        <motion.div
          drag={shouldReduceMotion || count <= 1 ? false : "x"}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
          className="mx-auto flex items-stretch justify-center gap-4 sm:gap-6 cursor-grab active:cursor-grabbing"
        >
          <div className="hidden w-[22rem] shrink-0 opacity-40 sm:block" aria-hidden="true">
            <TestimonialCard testimonial={testimonials[prevIndex]} emphasised={false} />
          </div>

          <div className="w-full shrink-0 sm:w-[22rem]" aria-live="polite">
            <motion.div
              key={index}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <TestimonialCard testimonial={testimonials[index]} emphasised />
            </motion.div>
          </div>

          <div className="hidden w-[22rem] shrink-0 opacity-40 sm:block" aria-hidden="true">
            <TestimonialCard testimonial={testimonials[nextIndex]} emphasised={false} />
          </div>
        </motion.div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2.5">
        {testimonials.map((t, i) => (
          <button
            key={t.name}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to testimonial from ${t.name}`}
            aria-current={i === index}
            className={`h-2.5 w-2.5 rounded-full transition-colors duration-fast focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-void ${
              i === index ? "bg-gold" : "bg-brass/30 hover:bg-brass/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
