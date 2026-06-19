import Image from "next/image";
import Reveal from "./Reveal";
import { GALLERY } from "@/lib/data";

// Editorial spans (desktop, 6-col grid) — an intentional, uneven gallery rhythm.
const SPANS = [
  "md:col-span-4",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-4",
  "md:col-span-3",
  "md:col-span-3",
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-museum py-28 md:py-40">
      <div className="mx-auto max-w-editorial px-6 md:px-10">
        <Reveal>
          <div className="mb-16 flex flex-col items-start">
            <p className="eyebrow">The Gallery</p>
            <h2 className="display mt-7 text-5xl md:text-6xl">Archive</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-6 md:gap-5">
          {GALLERY.map((item, idx) => (
            <Reveal
              key={item.image}
              delay={(idx % 2) * 0.08}
              className={SPANS[idx % SPANS.length]}
            >
              <figure className="group relative overflow-hidden">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={item.image}
                    alt={item.caption}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover transition-transform duration-[1400ms] ease-luxe group-hover:scale-[1.05]"
                  />
                </div>
                <figcaption className="pointer-events-none absolute bottom-0 left-0 right-0 flex items-end p-5 opacity-0 transition-opacity duration-700 ease-luxe group-hover:opacity-100">
                  <span
                    className="plaque-label text-museum"
                    style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
                  >
                    {item.caption}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
