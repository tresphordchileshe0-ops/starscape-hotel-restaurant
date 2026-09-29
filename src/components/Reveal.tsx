import React from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
};

export const easeOutStrong = [0.23, 1, 0.32, 1] as const;

export function Reveal({ children, delay = 0, className, y = 18 }: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.3, delay, ease: easeOutStrong }}>
      
      {children}
    </motion.div>);

}