import React from "react";
import { business } from "../data/business";
import { roomBurgundy, roomTeal } from "../data/photos";
import { CtaButton } from "./CtaButton";
import { PhotoFrame } from "./PhotoFrame";
import { Reveal } from "./Reveal";

export function Rooms() {
  return (
    <section id="rooms" className="w-full bg-parchment py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-6">
            <h2 className="font-display text-4xl font-medium leading-[1.05] text-ink md:text-6xl">
              Rooms kept simple, cool and quiet.
            </h2>
          </Reveal>
          <Reveal delay={0.06} className="lg:col-span-5 lg:col-start-8">
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Each room is finished in bold, restful colour, with air conditioning, a mosquito net and fresh linen —
              everything you need after a long day, and nothing you don&rsquo;t.
            </p>
          </Reveal>
        </div>

        {/* Column fractions match the photos' aspect ratios so both sit at equal height, uncropped. */}
        <Reveal delay={0.08}>
          <div className="mt-14 grid gap-4 sm:grid-cols-[16fr_9fr] md:mt-20 md:gap-6">
            <PhotoFrame photo={roomTeal} caption="A guest room in cool teal." />
            <PhotoFrame photo={roomBurgundy} caption="A guest room with a deep red feature wall." />
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-14 flex flex-col gap-6 border-t border-ink/15 pt-10 md:flex-row md:items-center md:justify-between">
            <p className="max-w-lg text-sm leading-relaxed text-muted md:text-base">
              Room types and current rates are confirmed directly with our front desk. Call{" "}
              <span className="font-medium text-ink">{business.phoneDisplay}</span> and we&rsquo;ll find the right
              room for your dates.
            </p>
            <CtaButton href="#visit" variant="outline">
              Check availability
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>);

}