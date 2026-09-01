"use client";

import { motion, useReducedMotion } from "framer-motion";

export function SectionGlow() {
  const shouldReduceMotion = useReducedMotion();

  return (
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
  );
}
