import React from "react";
import { dinnerPlatter, poolTable } from "../data/photos";
import { PhotoFrame } from "./PhotoFrame";
import { Reveal } from "./Reveal";

const diningNotes = [
{
  title: "Breakfast, on us",
  text: "Every stay includes breakfast in the dining room — start the day without leaving the building."
},
{
  title: "Lunch & dinner",
  text: "Generous, unhurried plates for guests and visitors alike. Stay in, pull up a chair, take your time."
}];


export function Restaurant() {
  return (
    <section id="dining" className="w-full bg-espresso py-24 text-cream md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <PhotoFrame
              photo={dinnerPlatter}
              tone="dark"
              caption="From the Starscape kitchen — dosa, fries and a sizzling platter." />
            
          </Reveal>

          <div className="lg:col-span-5 lg:pt-4">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-label text-gold">The Restaurant &amp; Bar</p>
              <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] md:text-6xl">
                The table is the <em className="text-gold">heart</em> of the house.
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-8 text-base leading-relaxed text-cream/75 md:text-lg">
                Starscape was built as much around its kitchen as its rooms. Come for a night, stay for dinner —
                or simply drop in from across Ndola.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <dl className="mt-10 divide-y divide-cream/15 border-y border-cream/15">
                {diningNotes.map((n) =>
                <div key={n.title} className="py-6">
                    <dt className="font-display text-2xl font-medium text-cream">{n.title}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-cream/70 md:text-base">{n.text}</dd>
                  </div>
                )}
              </dl>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid items-center gap-10 md:mt-28 md:grid-cols-12 md:gap-12">
          <Reveal className="md:col-span-5 lg:col-span-4 lg:col-start-2">
            <PhotoFrame photo={poolTable} tone="dark" className="mx-auto max-w-xs md:max-w-none" />
          </Reveal>
          <Reveal delay={0.06} className="md:col-span-7 lg:col-span-5 lg:col-start-7">
            <h3 className="font-display text-3xl font-medium leading-tight md:text-5xl">
              After dinner, the games room.
            </h3>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream/75 md:text-lg">
              Rack up at the pool table, order another round, and let the evening run its course. No need to call a
              cab — your room is just upstairs.
            </p>
          </Reveal>
        </div>
      </div>
    </section>);

}