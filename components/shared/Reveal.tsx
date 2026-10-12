"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Small stagger for grids. Kept short so nothing delays reading. */
  delay?: number;
  /** Rise distance in pixels. Larger reads as more deliberate. */
  distance?: number;
  /** Seconds. Longer suits a large element such as a photograph. */
  duration?: number;
  className?: string;
  as?: "div" | "li" | "section" | "p" | "h2";
};

/**
 * A single, restrained entrance animation used across the site: a short rise
 * and a fade, once, when the element first scrolls into view.
 *
 * When the visitor prefers reduced motion the element renders in its final
 * state immediately — content is never gated behind an animation.
 */
export function Reveal({
  children,
  delay = 0,
  distance = 18,
  duration = 0.5,
  className = "",
  as = "div",
}: Props) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  if (reduceMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Component
      // Paired with a <noscript> rule in the root layout so the content is
      // visible when scripts never run.
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
