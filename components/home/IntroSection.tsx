import Image from "next/image";

import { introduction } from "@/data/company";
import { ButtonLink } from "@/components/shared/Button";
import { Reveal } from "@/components/shared/Reveal";

const [lead, ...supporting] = introduction.paragraphs;

/** ~100ms between elements: enough to read as a sequence, not as a wait. */
const step = 0.1;

export function IntroSection() {
  return (
    <section aria-labelledby="intro-heading" className="bg-white section-y">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        {/* Left: the photograph, layered over two flat geometric accents.
            The padding on this wrapper is what the accents peek out of, so
            they can never push the layout sideways. */}
        <div className="relative mx-auto w-full max-w-lg pl-5 pt-5 lg:mx-0 lg:max-w-none lg:pl-8 lg:pt-8">
          <Reveal delay={step} duration={0.8}>
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 size-32 bg-brand-100 sm:size-44 lg:size-56"
            />
          </Reveal>
          <div
            aria-hidden="true"
            className="absolute bottom-12 left-0 hidden w-28 border border-brand-300 lg:block lg:top-44 xl:w-32"
          />

          <Reveal distance={28} duration={0.9}>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm lg:aspect-[3/4]">
              <Image
                src="/images/about/london-skyline.webp"
                alt="The City of London skyline at sunset, with the Walkie-Talkie and surrounding towers"
                fill
                sizes="(min-width: 1280px) 33rem, (min-width: 1024px) 40vw, (min-width: 640px) 30rem, 90vw"
                className="object-cover object-center"
              />
            </div>
          </Reveal>
        </div>

        {/* Right: the company introduction, revealed in reading order. */}
        <div>
          <Reveal>
            <p className="eyebrow">Who We Are</p>
          </Reveal>

          <Reveal delay={step}>
            <h2
              id="intro-heading"
              className="mt-6 max-w-[16ch] font-display text-h2 font-normal text-brand-800"
            >
              {introduction.heading}
            </h2>
          </Reveal>

          <Reveal delay={step * 2}>
            <p className="measure mt-7 text-lead text-ink">{lead}</p>
          </Reveal>

          {supporting.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 40)} delay={step * (3 + index)}>
              <p className="measure mt-5">{paragraph}</p>
            </Reveal>
          ))}

          {/* The company's own experience and network statement, quoted as such. */}
          <Reveal delay={step * (3 + supporting.length)}>
            <blockquote className="mt-9 border-l-[3px] border-brand-500 bg-brand-50 px-7 py-6">
              <p className="font-display text-lg leading-relaxed text-brand-800">
                {introduction.networkClaim}
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={step * (4 + supporting.length)}>
            <ButtonLink
              href="/about/"
              variant="outlineBrand"
              className="mt-9"
            >
              More about HE Capital Markets
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
