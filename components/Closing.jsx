import Image from "next/image";
import Reveal from "./Reveal";
import { ARTIST, LINKS } from "@/lib/data";

const CTAS = [
  { label: "Listen", href: LINKS.spotify, external: true },
  { label: "Collect", href: LINKS.inquiries, external: false },
  { label: "Follow", href: LINKS.instagram, external: true },
];

export default function Closing() {
  return (
    <section className="relative overflow-hidden bg-ink py-32 md:py-44">
      {/* faint single spotlight on black */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 70% at 50% 30%, rgba(255,255,255,0.07) 0%, rgba(14,14,13,0) 60%)",
        }}
      />

      <div className="relative mx-auto flex max-w-editorial flex-col items-center px-6 text-center">
        <Reveal className="w-full">
          <div className="relative mx-auto aspect-[16/10] w-full max-w-xl">
            <Image
              src="/img/hero/dice.jpg"
              alt="Croco Dice — final artifact"
              fill
              sizes="(max-width: 768px) 90vw, 576px"
              className="object-contain mix-blend-screen"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="display mt-8 text-4xl text-museum md:text-5xl">
            A luxury art brand
            <br className="hidden sm:block" /> that happens to release music.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <nav className="mt-14 flex items-center gap-10">
            {CTAS.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                target={cta.external ? "_blank" : undefined}
                rel={cta.external ? "noopener noreferrer" : undefined}
                className="font-sans text-sm uppercase tracking-plaque text-museum/80 transition-colors duration-500 ease-luxe hover:text-museum"
              >
                {cta.label}
              </a>
            ))}
          </nav>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-20 font-sans text-[0.7rem] uppercase tracking-wordmark text-museum/40">
            {ARTIST.name} — {ARTIST.location}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
