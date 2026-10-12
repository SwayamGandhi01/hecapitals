import Image from "next/image";

import { site } from "@/lib/site";
import { ButtonLink } from "@/components/shared/Button";

type Props = {
  heading?: string;
  body?: string;
};

export function ContactCTA({
  heading = "Turn opportunity into progress.",
  body = "Speak with our team to explore how we can support your strategic objectives and connect you with the right investors.",
}: Props) {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative isolate overflow-hidden bg-brand-900"
    >
      <Image
        src="/images/about/london-city-day.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-brand-900/88"
      />

      <div className="container-page relative grid gap-10 py-20 lg:grid-cols-2 lg:items-center lg:gap-20 lg:py-24">
        <div>
          <p className="eyebrow text-brand-300 after:bg-brand-400/60">
            Let&apos;s Talk
          </p>
          <h2
            id="cta-heading"
            className="mt-5 font-display text-h2 font-normal text-white"
          >
            {heading}
          </h2>
        </div>

        <div className="lg:justify-self-end">
          <p className="max-w-md leading-relaxed text-brand-100">{body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <ButtonLink href="/contact-us/" variant="onDark">
              Discuss Your Goals
            </ButtonLink>
            <a
              href={`tel:${site.phoneHref}`}
              className="inline-flex items-center justify-center py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:text-brand-300"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
