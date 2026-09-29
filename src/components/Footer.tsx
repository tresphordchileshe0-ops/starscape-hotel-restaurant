import React from "react";
import { business, navLinks, socialLinks } from "../data/business";

export function Footer() {
  const linkCls = "text-cream/70 transition-colors duration-150 hover:text-gold";
  return (
    <footer className="w-full bg-espresso text-cream">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-20 md:px-10 md:pt-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-5xl font-medium md:text-6xl">Starscape</p>
            <p className="mt-2 text-xs font-medium uppercase tracking-label text-gold">Hotel &amp; Restaurant</p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/60">
              A {business.classification} and restaurant in Northrise, Ndola.
            </p>
          </div>

          <div className="md:col-span-3">
            <h2 className="text-xs font-medium uppercase tracking-label text-cream/50">Contact</h2>
            <address className="mt-5 space-y-3 text-sm not-italic">
              <a href={business.phoneHref} className={`block ${linkCls}`}>
                {business.phoneDisplay}
              </a>
              <p className="text-cream/70">
                {business.addressLine}
                <br />
                {business.country}
              </p>
              <a href={business.directionsHref} target="_blank" rel="noopener noreferrer" className={`block ${linkCls}`}>
                {business.plusCode}
              </a>
            </address>
          </div>

          <nav aria-label="Footer" className="md:col-span-2">
            <h2 className="text-xs font-medium uppercase tracking-label text-cream/50">Explore</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((l) =>
              <li key={l.href}>
                  <a href={l.href} className={linkCls}>
                    {l.label}
                  </a>
                </li>
              )}
            </ul>
          </nav>

          <div className="md:col-span-2">
            <h2 className="text-xs font-medium uppercase tracking-label text-cream/50">Follow</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {socialLinks.map((s) =>
              <li key={s.label}>
                  <a href={s.href} className={linkCls}>
                    {s.label}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-cream/15 pt-8 text-xs text-cream/50 md:flex-row md:justify-between">
          <p>© 2026 {business.fullName}. All rights reserved.</p>
          <p>Broadway, Northrise · Ndola, Zambia</p>
        </div>
      </div>
    </footer>);

}