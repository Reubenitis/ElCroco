"use client";

import { motion } from "framer-motion";

// Restrained scroll reveal: a slow fade with a gentle rise. No bounce,
// no parallax theatrics — Apple / Dior cadence. Respects reduced-motion
// via Framer Motion's built-in MotionConfig inheritance.
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
  as = "div",
}) {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
