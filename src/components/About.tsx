import React from "react";
import { business } from "../data/business";
import { balconyView } from "../data/photos";
import { PhotoFrame } from "./PhotoFrame";
import { Reveal } from "./Reveal";
import { StarRating } from "./StarRating";

export function About() {
  return (
    <section id="about" className="w-full bg-cream py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:px-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="font-display text-4xl font-medium leading-[1.05] text-ink md:text-6xl">
              Where Northrise comes to stay, <em className="text-burgundy">and to dine.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="mt-10 max-w-xl space-y-5 text-base leading-relaxed text-muted md:text-lg">
              <p>
                Starscape is a {business.classification} and restaurant on Broadway in Ndola&rsquo;s leafy Northrise
                neighbourhood — a calm place to sleep, with a kitchen and bar that give you a reason to stay in for the
                evening.
              </p>
              <p>
                Whether you&rsquo;re in the Copperbelt for business, visiting family, or simply passing through, the
                rooms are comfortable, breakfast is on the house, and there&rsquo;s always a table waiting downstairs.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-14 grid max-w-xl grid-cols-2 border-t border-ink/15 pt-8">
              <div>
                <dt className="sr-only">Guest rating</dt>
                <dd className="font-display text-6xl font-medium leading-none text-ink md:text-7xl">
                  {business.rating}
                </dd>
                <dd className="mt-3">
                  <StarRating value={business.rating} />
                </dd>
                <dd className="mt-3 text-sm text-muted">from {business.reviewCount} guest reviews</dd>
              </div>
              <div className="border-l border-ink/15 pl-6 md:pl-10">
                <dt className="sr-only">Classification</dt>
                <dd className="font-display text-3xl font-medium text-ink md:text-4xl">3-star</dd>
                <dd className="mt-2 text-sm text-muted">hotel classification</dd>
                <dt className="sr-only">Location score</dt>
                <dd className="mt-6 font-display text-3xl font-medium text-ink md:text-4xl">
                  {business.locationScore}
                </dd>
                <dd className="mt-2 text-sm text-muted">Northrise, rated great for visitors</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.08} className="lg:col-span-4 lg:col-start-9 lg:pt-24">
          <PhotoFrame
            photo={balconyView}
            caption="Looking out over Northrise from the upper balcony."
            className="mx-auto max-w-sm lg:max-w-none" />
          
        </Reveal>
      </div>
    </section>);

}