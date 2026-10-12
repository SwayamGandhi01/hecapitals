import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { marqueeRowOne, marqueeRowTwo } from "@/data/clients";
import { LogoMarquee } from "@/components/shared/LogoMarquee";

export function ClientLogoStrip() {
  return (
    <section
      aria-labelledby="clients-heading"
      className="border-b border-line bg-white"
    >
      <div className="container-page py-14 lg:py-16">
        <div className="flex flex-col gap-9 lg:flex-row lg:items-center lg:gap-14">
          {/* The heading column stays put while the rows move beside it. */}
          <div className="shrink-0 lg:w-52">
            <h2
              id="clients-heading"
              className="text-xs font-semibold uppercase leading-relaxed tracking-[0.18em] text-body"
            >
              Companies we have worked with
            </h2>
            <Link
              href="/clients/"
              className="group mt-3 inline-flex items-center gap-2 py-1 text-sm font-semibold text-brand-500 transition-colors duration-200 hover:text-brand-700"
            >
              View all clients
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* min-w-0 stops the tracks, which are far wider than the viewport,
              from stretching this flex item and overflowing the page. */}
          <div className="min-w-0 flex-1 space-y-6 sm:space-y-7">
            <LogoMarquee items={marqueeRowOne} direction="ltr" duration={44} />
            <LogoMarquee items={marqueeRowTwo} direction="rtl" duration={38} />
          </div>
        </div>
      </div>
    </section>
  );
}
