import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export function PageHeader({
  eyebrow,
  title,
  titleClassName = "text-4xl sm:text-5xl",
  caption,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  titleClassName?: string;
  caption?: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line-brass/30 bg-void">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <Reveal>
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              {eyebrow}
            </p>
          )}
          <h1 className={`max-w-3xl font-wordmark font-bold tracking-tight text-bone ${titleClassName} ${eyebrow ? "mt-4" : ""}`}>
            {title}
          </h1>
          {caption && (
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold sm:text-base">
              {caption}
            </p>
          )}
          {description && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-bone-soft">
              {description}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
