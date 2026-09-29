import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "../data/business";
import { CtaButton } from "./CtaButton";
import { easeOutStrong } from "./Reveal";

// Appears only once the hero has scrolled away, keeping the hero itself uncluttered.
export function Nav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible &&
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.25, ease: easeOutStrong }}
        className="fixed inset-x-0 top-0 z-40 border-b border-ink/10 bg-cream/90 backdrop-blur-md">
        
          <nav aria-label="Primary" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
            <a href="#top" className="font-display text-2xl font-medium text-ink">
              Starscape
            </a>
            <ul className="hidden items-center gap-8 lg:flex">
              {navLinks.map((l) =>
            <li key={l.href}>
                  <a
                href={l.href}
                className="text-[13px] font-medium tracking-wide text-muted transition-colors duration-150 hover:text-burgundy">
                
                    {l.label}
                  </a>
                </li>
            )}
            </ul>
            <CtaButton href="#visit" variant="dark" size="sm">
              Check availability
            </CtaButton>
          </nav>
        </motion.header>
      }
    </AnimatePresence>);

}