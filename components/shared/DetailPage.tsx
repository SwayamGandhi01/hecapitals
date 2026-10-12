import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import type { ReactNode } from "react";

import { ContactForm } from "@/components/shared/ContactForm";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { PageHero, type Crumb } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";

export type ContentSection = {
  heading: string;
  paragraphs?: string[];
  pullQuote?: string;
  intro?: string;
  bullets?: string[];
};

type RelatedGroup = {
  heading: string;
  links: { label: string; href: string }[];
};

type Props = {
  title: string;
  kicker: string;
  summary: string;
  banner: string;
  imageAlt: string;
  breadcrumbs: Crumb[];
  sections: ContentSection[];
  closing: { heading: string; points: string[]; paragraph: string };
  /** Service capability list, shown as a checked panel in the sidebar. */
  highlights?: string[];
  /** Office phone number, shown for location pages. */
  phone?: { label: string; href: string };
  related: RelatedGroup[];
  cta?: { heading?: string; body?: string };
  children?: ReactNode;
};

export function DetailPage({
  title,
  kicker,
  summary,
  banner,
  imageAlt,
  breadcrumbs,
  sections,
  closing,
  highlights,
  phone,
  related,
  cta,
}: Props) {
  return (
    <>
      <PageHero
        title={title}
        kicker={kicker}
        summary={summary}
        image={banner}
        imageAlt={imageAlt}
        breadcrumbs={breadcrumbs}
      />

      <div className="container-page section-y grid gap-14 lg:grid-cols-[minmax(0,1.75fr)_minmax(0,1fr)] lg:gap-20">
        <article>
          {sections.map((section, index) => {
            // In a section that leads with a bulleted list, `paragraphs` is
            // the summary that closes it, so the list has to come first.
            const paragraphs = section.paragraphs ? (
              <div className="prose-he mt-6">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            ) : null;

            return (
              <Reveal
                as="section"
                key={section.heading}
                className={index > 0 ? "mt-14" : ""}
              >
                <h2 className="font-display text-h2 font-normal">
                  {section.heading}
                </h2>

                {section.bullets ? (
                  <>
                    {section.intro ? (
                      <p className="mt-6 leading-relaxed">{section.intro}</p>
                    ) : null}
                    <ul className="mt-7 space-y-4">
                      {section.bullets.map((bullet) => (
                        <li key={bullet.slice(0, 48)} className="flex gap-4">
                          <span
                            aria-hidden="true"
                            className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand-400"
                          />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    {paragraphs}
                  </>
                ) : (
                  paragraphs
                )}

                {section.pullQuote ? (
                  <p className="mt-8 border-l-2 border-brand-300 bg-brand-50 p-6 font-display text-lg leading-relaxed text-brand-800">
                    {section.pullQuote}
                  </p>
                ) : null}
              </Reveal>
            );
          })}

          <Reveal as="section" className="mt-14 border-t border-line pt-12">
            <h2 className="font-display text-h3 font-normal">
              {closing.heading}
            </h2>
            <ul className="mt-6 space-y-3">
              {closing.points.map((point) => (
                <li key={point} className="flex gap-3.5">
                  <Check
                    aria-hidden="true"
                    className="mt-0.5 size-5 shrink-0 text-brand-500"
                    strokeWidth={1.75}
                  />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-relaxed">{closing.paragraph}</p>
          </Reveal>
        </article>

        <aside className="space-y-8 lg:sticky lg:top-32 lg:self-start">
          {highlights ? (
            <div className="rounded-sm border border-line p-7">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
                What this includes
              </h2>
              <ul className="mt-5 space-y-3 text-sm">
                {highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-brand-500"
                      strokeWidth={2}
                    />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {phone ? (
            <div className="rounded-sm bg-brand-800 p-7 text-brand-100">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
                Call this office
              </h2>
              <a
                href={`tel:${phone.href}`}
                className="mt-4 inline-flex items-center gap-3 font-display text-xl text-white transition-colors duration-200 hover:text-brand-300"
              >
                <Phone aria-hidden="true" className="size-5 shrink-0" />
                {phone.label}
              </a>
            </div>
          ) : null}

          {related.map((group) => (
            <nav
              key={group.heading}
              aria-label={group.heading}
              className="rounded-sm border border-line p-7"
            >
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
                {group.heading}
              </h2>
              <ul className="mt-5 space-y-1 text-sm">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between gap-3 py-2 transition-colors duration-150 hover:text-brand-500"
                    >
                      {link.label}
                      <ArrowRight
                        aria-hidden="true"
                        className="size-4 shrink-0 text-brand-400 transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </aside>
      </div>

      <section
        aria-labelledby="enquiry-heading"
        className="bg-brand-50 section-y"
      >
        <div className="container-page max-w-3xl">
          <h2
            id="enquiry-heading"
            className="text-center font-display text-h2 font-normal"
          >
            Contact us now
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-center leading-relaxed">
            Tell us about your company and objectives, and a member of our team
            will be in touch.
          </p>
          <div className="mt-10 rounded-sm border border-line bg-white p-7 lg:p-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <ContactCTA heading={cta?.heading} body={cta?.body} />
    </>
  );
}
