import type { Metadata } from "next";
import Image from "next/image";

import { ContactCTA } from "@/components/shared/ContactCTA";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlobalPresence } from "@/components/home/GlobalPresence";
import { aboutSections, aboutTabs, introduction, visionPillars } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "HE Capital Markets builds market value through strategic consultation, financial marketing, brand positioning and targeted investor communications.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About HE Capital Markets",
    description:
      "Who we are, how we work, and the vision behind our investor relations and capital markets practice.",
    url: "/about/",
    images: [{ url: "/images/about/about-banner.webp" }],
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About HE Capital Markets"
        kicker="Effective comprehensive communications"
        summary="With the right strategy in place, there is no limit to what your company can achieve."
        image="/images/about/about-banner.webp"
        imageAlt="Modern office towers viewed from a city walkway"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="container-page section-y grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          {aboutSections.map((section, index) => (
            <Reveal key={section.heading} className={index > 0 ? "mt-12" : ""}>
              <h2 className="font-display text-h3 font-normal">
                {section.heading}
              </h2>
              <div className="prose-he mt-5">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src="/images/about/approach.webp"
              alt="Office towers and a pedestrian bridge in a financial district"
              fill
              sizes="(min-width: 1024px) 36rem, 100vw"
              className="object-cover"
            />
          </div>
          <blockquote className="mt-6 border-l-2 border-brand-300 bg-brand-50 p-6">
            <p className="font-display text-lg leading-relaxed text-brand-800">
              {introduction.networkClaim}
            </p>
          </blockquote>
        </Reveal>
      </section>

      {/* The three panels the original site presents as tabs, laid out as
          columns so no content is hidden behind an interaction. */}
      <section
        aria-labelledby="approach-heading"
        className="bg-brand-50 section-y"
      >
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Approach"
            title={<span id="approach-heading">How we work.</span>}
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-line bg-line lg:grid-cols-3">
            {aboutTabs.map((tab, index) => (
              <Reveal key={tab.id} delay={index * 0.07} className="bg-white">
                <div className="flex h-full flex-col p-8 lg:p-10">
                  <h3 className="font-display text-h3 font-normal">
                    {tab.label}
                  </h3>
                  <div className="prose-he mt-5 text-sm">
                    {tab.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="vision-heading"
        className="bg-white section-y"
      >
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Vision"
            title={<span id="vision-heading">Capital. Communication. Clients. Campaign.</span>}
          />
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {visionPillars.map((pillar, index) => (
              <Reveal as="li" key={pillar.title} delay={index * 0.06}>
                <div className="flex h-full flex-col rounded-sm border border-line p-8">
                  <span className="font-display text-h3 text-brand-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-card">{pillar.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <GlobalPresence />
      <ContactCTA />
    </>
  );
}
