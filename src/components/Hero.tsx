import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { exterior } from "../data/photos";
import { CtaButton } from "./CtaButton";
import { easeOutStrong } from "./Reveal";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "14%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-18%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, reduce ? 1 : 0]);

  const enter = (delay: number) =>
  reduce ?
  {} :
  {
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, delay, ease: easeOutStrong }
  };

  return (
    <section
      id="top"
      ref={ref}
      aria-label="Starscape Hotel & Restaurant"
      className="relative flex min-h-[100svh] w-full items-end overflow-hidden bg-espresso">
      
      <motion.img
        src={exterior.src}
        alt={exterior.alt}
        style={{ y: imgY }}
        className="absolute inset-0 h-[112%] w-full object-cover object-center" />
      
      <div aria-hidden="true" className="absolute inset-0 bg-espresso/60" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-espresso/40" />

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative mx-auto w-full max-w-7xl px-6 pb-20 md:px-10 md:pb-28">
        
        <motion.p {...enter(0.05)} className="text-xs font-medium uppercase tracking-label text-gold">
          Hotel &amp; Restaurant
        </motion.p>
        <motion.h1
          {...enter(0.12)}
          className="mt-4 font-display text-[clamp(4rem,13vw,11rem)] font-medium leading-[0.85] tracking-tight text-cream">
          
          Starscape
        </motion.h1>
        <motion.p
          {...enter(0.2)}
          className="mt-8 max-w-xl font-display text-2xl italic leading-snug text-cream/85 md:text-3xl">
          
          A room to rest, a table to linger — the evening is yours.
        </motion.p>
        <motion.div {...enter(0.28)} className="mt-10">
          <CtaButton href="#visit">Check availability</CtaButton>
        </motion.div>
      </motion.div>
    </section>);

}