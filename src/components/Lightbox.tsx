import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react";
import type { Photo } from "../data/photos";
import { easeOutStrong } from "./Reveal";

type LightboxProps = {
  photos: Photo[];
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
};

export function Lightbox({ photos, index, onClose, onChange }: LightboxProps) {
  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange(((index ?? 0) + 1) % photos.length);
      if (e.key === "ArrowLeft") onChange(((index ?? 0) - 1 + photos.length) % photos.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, index, photos.length, onClose, onChange]);

  const photo = index !== null ? photos[index] : null;
  const btn =
  "flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors duration-150 hover:bg-cream hover:text-espresso focus:outline-none focus-visible:ring-2 focus-visible:ring-gold";

  return (
    <AnimatePresence>
      {photo &&
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Photo viewer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex flex-col bg-espresso/95 backdrop-blur-sm"
        onClick={onClose}>
        
          <div className="flex items-center justify-between px-6 py-5 text-sm text-cream/70">
            <span>
              {(index ?? 0) + 1} / {photos.length}
            </span>
            <button type="button" aria-label="Close" className={btn} onClick={onClose}>
              <XIcon strokeWidth={1.5} className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center gap-4 px-4 pb-6 md:px-10">
            <button
            type="button"
            aria-label="Previous photo"
            className={`${btn} hidden shrink-0 md:flex`}
            onClick={(e) => {
              e.stopPropagation();
              onChange(((index ?? 0) - 1 + photos.length) % photos.length);
            }}>
            
              <ChevronLeftIcon strokeWidth={1.5} className="h-5 w-5" />
            </button>
            <motion.figure
            key={photo.src}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: easeOutStrong }}
            className="flex max-h-full min-w-0 flex-col items-center"
            onClick={(e) => e.stopPropagation()}>
            
              <img
              src={photo.src}
              alt={photo.alt}
              className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain"
              style={{ height: "75vh", aspectRatio: `${photo.width} / ${photo.height}` }} />
            
              <figcaption className="mt-4 max-w-xl text-center text-sm text-cream/70">{photo.alt}</figcaption>
            </motion.figure>
            <button
            type="button"
            aria-label="Next photo"
            className={`${btn} hidden shrink-0 md:flex`}
            onClick={(e) => {
              e.stopPropagation();
              onChange(((index ?? 0) + 1) % photos.length);
            }}>
            
              <ChevronRightIcon strokeWidth={1.5} className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      }
    </AnimatePresence>);

}