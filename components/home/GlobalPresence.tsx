import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

import { locations } from "@/data/locations";
import { sectors } from "@/data/sectors";
import { services } from "@/data/services";
import { Reveal } from "@/components/shared/Reveal";

/**
 * Only figures the company itself publishes: the 40-year capital markets
 * experience claim from the homepage, and counts of the offices, services and
 * sectors that actually exist on the site. No AUM, funds raised or client
 * counts are asserted anywhere.
 */
const facts = [
  { value: "40", label: "Years in the capital markets" },
  { value: String(locations.length), label: "International offices" },
  { value: String(services.length), label: "Core service lines" },
  { value: String(sectors.length), label: "Specialist sectors" },
];

export function GlobalPresence() {
  return (
    <section
      aria-labelledby="presence-heading"
      className="bg-brand-800 py-20 text-brand-100 lg:py-28"
    >
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start lg:gap-20">
          <div>
            <p className="eyebrow text-brand-300 after:bg-brand-400/60">
              Global Presence
            </p>
            <h2
              id="presence-heading"
              className="mt-5 font-display text-h2 font-normal text-white"
            >
              A truly international perspective.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed">
              With offices in Vancouver, New York, London and Frankfurt, we are
              ideally positioned to put you in touch with the right
              opportunities across North America and Europe.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-white/15 pt-10 sm:grid-cols-4 lg:grid-cols-2">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="sr-only">{fact.label}</dt>
                  <dd>
                    <span className="block font-display text-h2 leading-none text-white">
                      {fact.value}
                    </span>
                    <span className="mt-2.5 block text-xs leading-relaxed text-brand-200">
                      {fact.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {locations.map((location, index) => (
              <Reveal as="li" key={location.slug} delay={index * 0.06}>
                <Link
                  href={`/${location.slug}/`}
                  className="group relative flex h-full min-h-[13rem] flex-col justify-end overflow-hidden rounded-sm p-6"
                >
                  <Image
                    src={location.image}
                    alt={location.imageAlt}
                    fill
                    sizes="(min-width: 640px) 21rem, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-brand-900/92 via-brand-900/45 to-brand-900/10"
                  />
                  <span className="relative">
                    <span className="flex items-center justify-between gap-3">
                      <span className="font-display text-xl text-white">
                        {location.city}
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-5 shrink-0 text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </span>
                    <span className="mt-1 block text-xs uppercase tracking-[0.16em] text-brand-300">
                      {location.region}
                    </span>
                    <span className="mt-3 flex items-center gap-2 text-sm text-brand-100">
                      <Phone aria-hidden="true" className="size-3.5" />
                      {location.phone}
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
