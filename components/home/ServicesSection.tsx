import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { services } from "@/data/services";
import { ButtonLink } from "@/components/shared/Button";
import { Reveal } from "@/components/shared/Reveal";

/**
 * Editorial rhythm rather than a uniform grid: the two services the company
 * leads with run full width as horizontal cards, and the two between them sit
 * side by side. Nothing is squeezed into a column too narrow to read.
 */
const WIDE = new Set([0, 3]);

export function ServicesSection() {
  return (
    <section aria-labelledby="services-heading" className="bg-white section-y">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,2.2fr)] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow mb-5">Our Services</p>
            <h2 id="services-heading" className="font-display text-h2 font-normal">
              Strategic expertise for a global stage.
            </h2>
            <p className="measure-sm mt-6">
              From investor relations to capital markets advisory, we help
              listed companies tell their story, connect with global investors
              and build long-term value.
            </p>
            <ButtonLink href="/investor-relations/" variant="ghost" className="mt-7">
              Explore all services
            </ButtonLink>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2">
            {services.map((service, index) => {
              const wide = WIDE.has(index);
              // On a wide card the image sits beside the copy; the second one
              // mirrors the first so the section does not read as a repeat.
              const mirrored = index === 3;

              return (
                <Reveal
                  as="li"
                  key={service.slug}
                  delay={Math.min(index, 3) * 0.06}
                  className={wide ? "sm:col-span-2" : ""}
                >
                  <Link
                    href={`/${service.slug}/`}
                    className={`group flex h-full overflow-hidden rounded-sm border border-line transition-colors duration-200 hover:border-brand-300 hover:bg-brand-50/60 ${
                      wide ? "flex-col sm:flex-row" : "flex-col"
                    } ${mirrored ? "sm:flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`relative overflow-hidden ${
                        wide
                          ? "aspect-[16/10] shrink-0 sm:aspect-auto sm:min-h-[17rem] sm:w-1/2"
                          : "aspect-[16/10]"
                      }`}
                    >
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes={
                          wide
                            ? "(min-width: 1024px) 30rem, (min-width: 640px) 50vw, 100vw"
                            : "(min-width: 1024px) 28rem, (min-width: 640px) 50vw, 100vw"
                        }
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>

                    <div
                      className={`flex flex-1 flex-col p-7 lg:p-9 ${
                        wide ? "justify-center" : ""
                      }`}
                    >
                      <span className="text-xs font-semibold tracking-[0.18em] text-brand-500">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-4 font-display text-h3 font-normal">
                        {service.title}
                      </h3>
                      <p className="measure mt-3 flex-1 text-card">
                        {service.cardSummary}
                      </p>
                      <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-500">
                        Learn more
                        <ArrowRight
                          aria-hidden="true"
                          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
