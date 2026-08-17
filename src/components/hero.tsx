"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { CalendarCheck } from "@phosphor-icons/react/dist/ssr";
import { SectionDots } from "@/components/section-dots";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-line-brass/30 bg-void">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-gold/15 blur-3xl sm:h-[36rem] sm:w-[36rem]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          shouldReduceMotion
            ? { opacity: 1, scale: 1 }
            : { opacity: [1, 1, 0.15, 1], scale: [1, 1, 0.96, 1] }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0.01 }
            : {
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.625, 0.8125, 1],
              }
        }
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-[24rem] w-[24rem] rounded-full bg-brass/10 blur-3xl"
      />
      <SectionDots />
      <SectionDots position="bottom" />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[80vw] w-[80vw] -translate-x-1/2 -translate-y-1/2 sm:h-[39rem] sm:w-[39rem]"
        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.94 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: shouldReduceMotion ? 0.01 : 1.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src="/lace-a-mark.png"
          alt=""
          fill
          priority
          sizes="(max-width: 640px) 30rem, 39rem"
          className="object-contain"
        />
      </motion.div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 [background:radial-gradient(ellipse_at_center,rgba(10,9,8,0.7)_0%,rgba(10,9,8,0.35)_45%,transparent_75%)]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-28 text-center sm:py-36"
      >
        <motion.h1
          variants={item}
          className="font-wordmark text-4xl font-bold leading-tight tracking-tight text-bone sm:text-6xl"
        >
          Supporting <span className="text-gold">Apprentices</span> At{" "}
          <span className="text-gold">Every</span> Stage
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-lg text-lg leading-relaxed text-bone-soft"
        >
          Join a network that helps you build confidence, create
          connections, and unlock opportunities.
        </motion.p>

        <motion.div variants={item} className="mt-10">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-void transition-colors duration-fast hover:bg-gold-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-void"
          >
            <CalendarCheck size={18} aria-hidden="true" />
            See upcoming events
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
