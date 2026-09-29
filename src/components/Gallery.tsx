import React, { useCallback, useState } from "react";
import { MaximizeIcon } from "lucide-react";
import { galleryPhotos } from "../data/photos";
import { Lightbox } from "./Lightbox";
import { Reveal } from "./Reveal";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <section id="gallery" className="w-full bg-parchment py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-4xl font-medium leading-[1.05] text-ink md:text-6xl">Around the house</h2>
          <p className="max-w-sm text-base text-muted">Rooms, plates and quiet corners at Starscape.</p>
        </Reveal>

        {/* Masonry columns keep every photo at its own aspect ratio — nothing cropped. */}
        <div className="mt-14 columns-2 gap-4 md:mt-20 md:gap-6 lg:columns-3">
          {galleryPhotos.map((p, i) =>
          <Reveal key={p.src} delay={Math.min(i * 0.04, 0.2)} className="mb-4 break-inside-avoid md:mb-6">
              <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View larger: ${p.alt}`}
              className="group relative block w-full overflow-hidden rounded-2xl bg-cream focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2 focus-visible:ring-offset-parchment"
              style={{ aspectRatio: `${p.width} / ${p.height}` }}>
              
                <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover" />
                <span className="absolute inset-0 bg-espresso/0 transition-colors duration-200 ease-out group-hover:bg-espresso/30" />
                <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-cream text-ink opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 group-focus-visible:opacity-100">
                  <MaximizeIcon aria-hidden="true" strokeWidth={1.5} className="h-4 w-4" />
                </span>
              </button>
            </Reveal>
          )}
        </div>
      </div>
      <Lightbox photos={galleryPhotos} index={active} onClose={close} onChange={setActive} />
    </section>);

}