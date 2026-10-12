import Image from "next/image";
import Link from "next/link";

import { site } from "@/lib/site";

/**
 * The brand mark, in the two versions every logo needs.
 *
 * The supplied artwork sets "HE" and "MARKETS" in white and "CAPITAL" in the
 * brand blue, so it only reads on a dark background. `onLight` is that same
 * artwork with the white ink swapped for the brand navy (#17345F) — the
 * letterforms, proportions, spacing, globe and per-pixel alpha are untouched,
 * so it is a colour variant of the mark rather than a redraw.
 *
 * Generated from the supplied file; see README for how to regenerate it if the
 * brand owner supplies an official light-background version.
 */
const SOURCES = {
  onLight: "/brand/he-capital-markets-logo-on-light.png",
  onDark: "/brand/he-capital-markets-logo.png",
} as const;

type Props = {
  /** "onLight" for the glass header, "onDark" for the navy footer. */
  variant?: keyof typeof SOURCES;
  /** Only the header logo is above the fold; the footer one can wait. */
  priority?: boolean;
  className?: string;
};

export function Logo({
  variant = "onLight",
  priority = false,
  className = "",
}: Props) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`inline-flex shrink-0 items-center rounded-sm transition-opacity duration-200 hover:opacity-80 ${className}`}
    >
      <Image
        src={SOURCES[variant]}
        alt={site.name}
        width={280}
        height={75}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        // The supplied PNG is small and already the right size, so it is served
        // exactly as provided. Re-encoding a wordmark to lossy AVIF softens the
        // lettering, and skipping the optimiser also takes format negotiation
        // out of the path for the one asset that must always render.
        unoptimized
        className="h-8 w-auto sm:h-9"
      />
    </Link>
  );
}
