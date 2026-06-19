"use client";

import { useEffect, useState } from "react";
import { ARTIST } from "@/lib/data";

const SECTIONS = [
  { id: "album", label: "Oro Puro" },
  { id: "collection", label: "Collection" },
  { id: "gallery", label: "Gallery" },
  { id: "music", label: "Music" },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-luxe ${
        solid
          ? "bg-museum/90 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-editorial items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#top"
          className="font-sans text-[0.82rem] uppercase tracking-wordmark text-ink"
          aria-label={`${ARTIST.name} — home`}
        >
          {ARTIST.name}
        </a>
        <div className="hidden items-center gap-9 md:flex">
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="link-underline">
              {s.label}
            </a>
          ))}
        </div>
        <a href="#music" className="link-underline md:hidden">
          Listen
        </a>
      </nav>
    </header>
  );
}
