import Image from "next/image";
import Reveal from "./Reveal";
import { ALBUM, LINKS, TRACKS } from "@/lib/data";

export default function Music() {
  return (
    <section id="music" className="bg-paper py-28 md:py-40">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 border-b border-line pb-10 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Music</p>
              <h2 className="display mt-7 text-5xl md:text-6xl">
                {ALBUM.title}
              </h2>
              <p className="mt-3 plaque-label text-ash">
                {ALBUM.year} · {TRACKS.length} Works
              </p>
            </div>
            <div className="flex gap-7">
              <a
                href={LINKS.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
              >
                Spotify
              </a>
              <a
                href={LINKS.apple}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
              >
                Apple Music
              </a>
            </div>
          </div>
        </Reveal>

        <ol className="mt-4">
          {TRACKS.map((track, idx) => (
            <Reveal as="li" key={`${track.title}-${idx}`} y={16}>
              <a
                href={LINKS.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 border-b border-line py-5 transition-colors duration-500 ease-luxe hover:bg-museum"
              >
                <span className="plaque-label w-7 shrink-0 text-ash">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="relative h-12 w-12 shrink-0 overflow-hidden bg-ivory">
                  <Image
                    src={track.image}
                    alt={track.title}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </span>
                <span className="flex flex-1 flex-wrap items-baseline gap-x-3">
                  <span className="font-serif text-xl text-ink md:text-2xl">
                    {track.title}
                  </span>
                  {track.note && (
                    <span className="font-serif text-base italic text-ash">
                      ({track.note})
                    </span>
                  )}
                </span>
                <span
                  className="translate-x-2 text-ink opacity-0 transition-all duration-500 ease-luxe group-hover:translate-x-0 group-hover:opacity-100"
                  aria-hidden
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </a>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
