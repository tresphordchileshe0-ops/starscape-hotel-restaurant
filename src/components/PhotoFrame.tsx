import React from "react";
import type { Photo } from "../data/photos";

type PhotoFrameProps = {
  photo: Photo;
  caption?: string;
  className?: string;
  tone?: "light" | "dark";
};

// The frame always takes the photo's native aspect ratio, so nothing is cropped or stretched.
export function PhotoFrame({ photo, caption, className = "", tone = "light" }: PhotoFrameProps) {
  return (
    <figure className={className}>
      <div
        className={`overflow-hidden rounded-2xl ${tone === "dark" ? "bg-wine" : "bg-parchment"}`}
        style={{ aspectRatio: `${photo.width} / ${photo.height}` }}>
        
        <img src={photo.src} alt={photo.alt} loading="lazy" className="block h-full w-full object-cover" />
      </div>
      {caption &&
      <figcaption className={`mt-3 text-xs tracking-wide ${tone === "dark" ? "text-cream/60" : "text-muted"}`}>
          {caption}
        </figcaption>
      }
    </figure>);

}