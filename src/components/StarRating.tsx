import React from "react";
import { StarIcon } from "lucide-react";

type StarRatingProps = {
  value: number;
  className?: string;
};

export function StarRating({ value, className = "" }: StarRatingProps) {
  const pct = `${value / 5 * 100}%`;
  const row = (filled: boolean) =>
  Array.from({ length: 5 }).map((_, i) =>
  <StarIcon
    key={i}
    strokeWidth={1.25}
    className={`h-5 w-5 shrink-0 ${filled ? "fill-gold text-gold" : "text-gold/50"}`} />

  );
  return (
    <div className={`relative inline-flex ${className}`} role="img" aria-label={`${value} out of 5 stars`}>
      <div className="flex gap-1">{row(false)}</div>
      <div className="absolute inset-y-0 left-0 flex gap-1 overflow-hidden" style={{ width: pct }}>
        {row(true)}
      </div>
    </div>);

}