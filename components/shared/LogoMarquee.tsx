import Image from "next/image";

import type { Client } from "@/data/clients";

type Props = {
  items: Client[];
  /** "ltr" scrolls the logos left to right, "rtl" right to left. */
  direction: "ltr" | "rtl";
  /** Seconds for one full pass. Higher is slower. */
  duration?: number;
  className?: string;
};

/**
 * A continuously scrolling row of client logos.
 *
 * The animation is pure CSS, so this stays a Server Component — no client
 * bundle, no timers, no React state per frame. The sequence is rendered twice
 * inside one track; see globals.css for why spacing uses a right margin rather
 * than a flex gap.
 */
export function LogoMarquee({
  items,
  direction,
  duration = 40,
  className = "",
}: Props) {
  const sequence = (duplicate: boolean) => (
    <ul
      className="flex shrink-0 items-center"
      // The second pass exists only to make the loop seamless; it must not be
      // read out a second time.
      aria-hidden={duplicate || undefined}
    >
      {items.map((client) => (
        <li
          key={client.name}
          className="mr-8 flex h-8 w-24 shrink-0 items-center justify-center sm:mr-12 sm:h-10 sm:w-[7.75rem]"
        >
          <Image
            src={client.logo}
            alt={duplicate ? "" : client.name}
            width={client.width}
            height={client.height}
            sizes="160px"
            // The duplicate pass sits outside the clipped container, so lazy
            // loading would never trigger for it and the row would show gaps.
            loading="eager"
            className="h-full w-full object-contain opacity-85 transition-opacity duration-200 hover:opacity-100"
          />
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`marquee ${className}`}>
      <div
        className={`marquee-track ${
          direction === "ltr" ? "marquee-track-ltr" : "marquee-track-rtl"
        }`}
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {sequence(false)}
        {sequence(true)}
      </div>
    </div>
  );
}
