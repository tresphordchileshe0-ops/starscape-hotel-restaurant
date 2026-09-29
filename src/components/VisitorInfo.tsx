import React from "react";
import { business } from "../data/business";
import { CtaButton } from "./CtaButton";
import { Reveal } from "./Reveal";

export function VisitorInfo() {
  const rows = [
  { label: "Address", value: `${business.addressLine}, ${business.country}` },
  { label: "Neighbourhood", value: `${business.neighbourhood} — rated ${business.locationScore}, great for visitors` },
  { label: "Plus code", value: business.plusCode }];


  return (
    <section id="visit" className="w-full bg-cream py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:px-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <h2 className="font-display text-4xl font-medium leading-[1.05] text-ink md:text-6xl">
              Find us on <em className="text-burgundy">Broadway.</em>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">
              To check availability or reserve a table, call the front desk — we&rsquo;ll take it from there.
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <a
              href={business.phoneHref}
              className="mt-10 block font-display text-4xl font-medium text-ink transition-colors duration-150 hover:text-burgundy md:text-5xl">
              
              {business.phoneDisplay}
            </a>
            <dl className="mt-10 divide-y divide-ink/15 border-y border-ink/15">
              {rows.map((r) =>
              <div key={r.label} className="grid grid-cols-[8rem_1fr] gap-4 py-4 text-sm md:text-base">
                  <dt className="text-muted">{r.label}</dt>
                  <dd className="text-ink">{r.value}</dd>
                </div>
              )}
            </dl>
            <div className="mt-10 flex flex-wrap gap-3">
              <CtaButton href={business.phoneHref} variant="dark">
                Call to check availability
              </CtaButton>
              <CtaButton href={business.directionsHref} variant="outline" external>
                Get directions
              </CtaButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08} className="lg:col-span-7">
          <div className="h-full min-h-[360px] overflow-hidden rounded-2xl border border-ink/10 bg-parchment md:min-h-[480px]">
            <iframe
              title="Map showing Starscape Hotel & Restaurant on Broadway, Ndola"
              src={business.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[360px] w-full border-0 md:min-h-[480px]"
              style={{ filter: "grayscale(0.35) sepia(0.12)" }} />
            
          </div>
        </Reveal>
      </div>
    </section>);

}