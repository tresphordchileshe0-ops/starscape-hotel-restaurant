import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "dark" | "outline";
  size?: "md" | "sm";
  external?: boolean;
};

const variants = {
  gold: "bg-gold text-espresso hover:bg-cream",
  dark: "bg-espresso text-cream hover:bg-burgundy",
  outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-cream"
};

export function CtaButton({ href, children, variant = "gold", size = "md", external }: CtaButtonProps) {
  const sizing = size === "md" ? "h-12 px-7 text-sm" : "h-10 px-5 text-[13px]";
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.12 }}
      className={`group inline-flex items-center gap-3 whitespace-nowrap rounded-full font-medium tracking-wide transition-colors duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-espresso ${sizing} ${variants[variant]}`}>
      
      {children}
      <ArrowRightIcon
        aria-hidden="true"
        strokeWidth={1.5}
        className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
      
    </motion.a>);

}