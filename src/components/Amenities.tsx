import React from "react";
import { amenities } from "../data/amenities";
import { Reveal } from "./Reveal";

export function Amenities() {
  return (
    <section id="amenities" className="w-full bg-cream py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:px-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-4">
          <h2 className="font-display text-4xl font-medium leading-[1.05] text-ink md:text-6xl">
            Included, <em className="text-burgundy">always.</em>
          </h2>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
            The essentials come with every stay — no add-ons, no surprises at checkout.
          </p>
        </Reveal>

        <ul className="grid gap-x-12 sm:grid-cols-2 lg:col-span-8">
          {amenities.map((a, i) => {
            const Icon = a.icon;
            return (
              <li key={a.title} className="border-t border-ink/15">
                <Reveal delay={Math.min(i * 0.04, 0.2)} className="flex gap-5 py-8">
                  <Icon aria-hidden="true" strokeWidth={1.25} className="h-7 w-7 shrink-0 text-brass" />
                  <div>
                    <h3 className="font-display text-2xl font-medium text-ink">{a.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted md:text-[15px]">{a.description}</p>
                  </div>
                </Reveal>
              </li>);

          })}
        </ul>
      </div>
    </section>);

}