import type { Metadata } from "next";

import { ArticleCard } from "@/components/shared/ArticleCard";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { sortedArticles } from "@/data/insights";

export const metadata: Metadata = {
  title: "Press Releases",
  description:
    "Archive of press releases issued by companies HE Capital Markets has worked with.",
  alternates: { canonical: "/insights/" },
  openGraph: {
    title: "Press Releases | HE Capital Markets",
    description:
      "Archive of press releases issued by companies HE Capital Markets has worked with.",
    url: "/insights/",
    images: [{ url: "/images/insights/insights-banner.webp" }],
  },
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        title="Press releases"
        kicker="Insights"
        summary="Announcements issued by companies we have worked with."
        image="/images/insights/insights-banner.webp"
        imageAlt="Business news headlines on a financial newspaper"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Press Releases" }]}
      />

      <section className="container-page section-y">
        {sortedArticles.length > 0 ? (
          <>
            {/* These are archive releases, so the page says so plainly rather
                than presenting them as current news. */}
            <p className="mb-12 max-w-2xl rounded-sm border border-line bg-brand-50 p-6 text-card">
              <strong className="font-semibold text-ink">
                Archive notice.
              </strong>{" "}
              The releases below were published in February 2022 and are kept
              here as a historical record. They are not current announcements
              and should not be relied on as an indication of present
              circumstances.
            </p>

            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {sortedArticles.map((article, index) => (
                <Reveal as="li" key={article.slug} delay={index * 0.07}>
                  <ArticleCard article={article} />
                </Reveal>
              ))}
            </ul>
          </>
        ) : (
          <div className="rounded-sm border border-line p-12 text-center">
            <h2 className="font-display text-h3 font-normal">
              No press releases yet
            </h2>
            <p className="mx-auto mt-4 max-w-md leading-relaxed">
              There are no published releases at the moment. Please check back,
              or contact us for the latest news from our clients.
            </p>
          </div>
        )}
      </section>

      <ContactCTA />
    </>
  );
}
