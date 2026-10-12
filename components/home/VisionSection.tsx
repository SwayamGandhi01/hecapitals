import { Megaphone, Target, TrendingUp, Users } from "lucide-react";

import { sectorIntro, visionPillars } from "@/data/company";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

/**
 * This section stands where a testimonial carousel would normally sit.
 * The source site publishes no testimonials, endorsements or client
 * quotations, so its own "Our Vision" pillars are used instead of inventing
 * any.
 */
const icons = [TrendingUp, Megaphone, Users, Target];

export function VisionSection() {
  return (
    <section
      aria-labelledby="vision-heading"
      className="bg-white section-y"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Vision"
          title={<span id="vision-heading">How we work with you.</span>}
          aside={<p>{sectorIntro.paragraphs[1]}</p>}
        />

        <ul className="mt-14 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {visionPillars.map((pillar, index) => {
            const Icon = icons[index];
            return (
              <Reveal
                as="li"
                key={pillar.title}
                delay={index * 0.06}
                className="bg-white"
              >
                <div className="flex h-full flex-col p-8">
                  <Icon
                    aria-hidden="true"
                    className="size-6 text-brand-500"
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-card">{pillar.body}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <p className="mt-12 text-center font-display text-h3 text-brand-800">
          {sectorIntro.closing}
        </p>
      </div>
    </section>
  );
}
