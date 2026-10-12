import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { sectors } from "@/data/sectors";
import { sectorIntro } from "@/data/company";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function SectorsSection() {
  return (
    <section aria-labelledby="sectors-heading" className="bg-brand-50 section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Sectors"
          title={
            <span id="sectors-heading">
              Real expertise.{" "}
              <em className="italic text-brand-500">Real opportunities.</em>
            </span>
          }
          aside={<p>{sectorIntro.paragraphs[0]}</p>}
        />

        {/*
          All seven sectors the company publishes, every card at the same size
          and crop. The eighth cell completes the grid instead of leaving a gap,
          and carries the link that used to sit beside the heading.
        */}
        <ul className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {sectors.map((sector, index) => (
            <Reveal as="li" key={sector.slug} delay={Math.min(index, 5) * 0.05}>
              <Link
                href={`/${sector.slug}/`}
                className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-sm p-5"
              >
                <Image
                  src={sector.image}
                  alt={sector.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 18rem, (min-width: 768px) 31vw, 47vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-brand-900/95 via-brand-900/50 to-brand-900/10"
                />
                <span className="relative flex items-end justify-between gap-3">
                  <span className="font-display text-xl leading-tight text-white">
                    {sector.title}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-5 shrink-0 text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </Reveal>
          ))}

          <Reveal as="li" delay={0.3}>
            <Link
              href="/mining/"
              className="group flex aspect-[4/3] flex-col justify-between rounded-sm border border-brand-200 bg-white p-5 transition-colors duration-200 hover:border-brand-400"
            >
              <span className="font-display text-xl leading-tight text-ink">
                Explore every sector
              </span>
              <span className="inline-flex items-center gap-2 text-card font-semibold text-brand-500">
                View all {sectors.length}
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </span>
            </Link>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
