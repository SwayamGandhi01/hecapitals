import Image from "next/image";

import { locations } from "@/data/locations";
import { positioning } from "@/data/company";
import { ButtonLink } from "@/components/shared/Button";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-900">
      <Image
        src="/images/hero/london-city-skyline.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/*
        Two light scrims rather than one heavy one. The horizontal pass holds
        contrast behind the copy; the vertical pass seats the section on the
        page. Neither flattens the skyline into solid navy.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-900/80 to-brand-900/55 lg:via-brand-900/62 lg:to-brand-900/20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/15 to-transparent"
      />

      <div className="container-page relative flex min-h-[34rem] flex-col justify-center pb-20 pt-32 sm:min-h-[38rem] lg:min-h-[44rem] lg:pb-28 lg:pt-40">
        <div className="lg:max-w-3xl">
          <p className="eyebrow text-brand-300 after:bg-brand-400/60">
            {positioning.eyebrow}
          </p>

          <h1 className="mt-8 max-w-[17ch] font-display text-display font-normal text-white">
            {positioning.headlineLead}{" "}
            <em className="italic text-brand-300">
              {positioning.headlineAccent}
            </em>
          </h1>

          <p className="measure mt-8 text-lead text-brand-100">
            {positioning.standfirst}
          </p>

          <div className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <ButtonLink href="/contact-us/" variant="onDark" className="px-8">
              Discuss Your Goals
            </ButtonLink>
            <ButtonLink
              href="/investor-relations/"
              variant="outlineLight"
              className="px-8"
            >
              Explore Our Services
            </ButtonLink>
          </div>
        </div>

        {/* Offices — the reference's right-hand marker column. */}
        <ul className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/20 pt-8 lg:absolute lg:right-12 lg:top-1/2 lg:mt-0 lg:w-48 lg:-translate-y-1/2 lg:flex-col lg:gap-0 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          {locations.map((location) => (
            <li
              key={location.slug}
              className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-200 lg:border-b lg:border-white/10 lg:py-3.5 lg:last:border-b-0"
            >
              {location.city}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
