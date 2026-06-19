"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ARTIST, HERO_ARTIFACTS } from "@/lib/data";

const INTERVAL = 7200; // ms each artifact holds before the slow cross-fade

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setI((p) => (p + 1) % HERO_ARTIFACTS.length),
      INTERVAL
    );
    return () => clearInterval(t);
  }, []);

  const artifact = HERO_ARTIFACTS[i];

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Museum environment: warm white with a single soft spotlight + vignette */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 34%, #FFFFFF 0%, #F7F6F2 46%, #ECE9E1 100%)",
        }}
      />

      {/* The spotlighted artifact — slow cross-fade between the two icons */}
      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center">
        <div className="relative aspect-[16/10] w-full">
          <AnimatePresence mode="sync">
            <motion.div
              key={i}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 2.0, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Gentle, continuous breathing — restrained, not flashy */}
              <motion.div
                className="relative h-full w-full"
                animate={{ y: [0, -10, 0], scale: [1, 1.012, 1] }}
                transition={{
                  duration: 11,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <Image
                  src={artifact.image}
                  alt={artifact.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 768px"
                  className="object-contain"
                  style={{
                    filter: "drop-shadow(0 38px 42px rgba(20,18,12,0.16))",
                  }}
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Museum object label / wordmark */}
        <motion.div
          className="mt-6 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-sans text-[2.1rem] uppercase tracking-wordmark text-ink sm:text-[3.1rem] md:text-[3.9rem]">
            {ARTIST.name}
          </h1>
          <div className="mt-5 h-px w-16 bg-gold/70" />
          <p className="mt-5 plaque-label text-graphite">{ARTIST.location}</p>
          <p className="mt-2 plaque-label text-ash">{ARTIST.roles}</p>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#album"
        aria-label="Scroll to ORO PURO"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.25, 0.7, 0.25] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="block h-10 w-px bg-ink/40" />
      </motion.a>
    </section>
  );
}
