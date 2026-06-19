import Image from "next/image";
import Reveal from "./Reveal";
import { ALBUM } from "@/lib/data";

export default function Album() {
  return (
    <section id="album" className="bg-museum py-28 md:py-40">
      <div className="mx-auto grid max-w-editorial items-center gap-14 px-6 md:grid-cols-2 md:gap-20 md:px-10">
        {/* The work — a transparent product cut-out, floating with a
            silhouette shadow rather than a hard frame */}
        <Reveal>
          <div className="relative mx-auto aspect-[1083/823] w-full max-w-[620px]">
            <Image
              src={ALBUM.cover}
              alt={`${ALBUM.title} — album artwork`}
              fill
              sizes="(max-width: 768px) 90vw, 620px"
              className="object-contain [filter:drop-shadow(0_30px_38px_rgba(20,18,12,0.30))]"
            />
          </div>
        </Reveal>

        {/* The plaque */}
        <Reveal delay={0.1}>
          <div className="md:pl-4">
            <p className="eyebrow">Current Exhibition</p>

            <h2 className="display mt-7 text-6xl md:text-7xl lg:text-8xl">
              {ALBUM.title}
            </h2>

            <dl className="mt-8 space-y-3">
              <div className="flex gap-5">
                <dt className="plaque-label w-20 shrink-0 pt-[3px]">Year</dt>
                <dd className="font-serif text-xl text-graphite">
                  {ALBUM.year}
                </dd>
              </div>
              <div className="flex gap-5">
                <dt className="plaque-label w-20 shrink-0 pt-[3px]">Medium</dt>
                <dd className="font-serif text-xl italic text-graphite">
                  {ALBUM.medium}
                </dd>
              </div>
            </dl>

            <div className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href={ALBUM.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-ink transition-colors duration-500 ease-luxe group-hover:bg-ink">
                  <svg
                    viewBox="0 0 24 24"
                    className="ml-[2px] h-4 w-4 fill-ink transition-colors duration-500 ease-luxe group-hover:fill-museum"
                    aria-hidden
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="link-underline">Play</span>
              </a>

              <a
                href={ALBUM.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
              >
                Spotify
              </a>
              <a
                href={ALBUM.apple}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
              >
                Apple Music
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
