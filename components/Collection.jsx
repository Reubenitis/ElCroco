import Image from "next/image";
import Reveal from "./Reveal";
import { COLLECTION } from "@/lib/data";

export default function Collection() {
  return (
    <section id="collection" className="bg-paper py-28 md:py-40">
      <div className="mx-auto max-w-editorial px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <p className="eyebrow">The Collection</p>
            <h2 className="display mt-7 max-w-3xl text-5xl md:text-6xl">
              Objects, not merchandise.
            </h2>
            <p className="mt-6 max-w-md font-serif text-lg italic text-ash">
              A curated set of Croco artifacts — each one acquired, never sold.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-x-10 gap-y-20 md:grid-cols-3">
          {COLLECTION.map((piece, idx) => (
            <Reveal key={piece.title} delay={idx * 0.08}>
              <figure className="group">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-ivory">
                  <Image
                    src={piece.image}
                    alt={piece.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-luxe group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="mt-6">
                  <p className="plaque-label text-gold">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl text-ink">
                    {piece.title}
                  </h3>
                  <p className="mt-1 font-serif text-base italic text-ash">
                    {piece.medium}
                  </p>
                  <p className="mt-3 plaque-label text-graphite">
                    {piece.edition}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
