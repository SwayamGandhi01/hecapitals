import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { sortedArticles } from "@/data/insights";
import { ArticleCard } from "@/components/shared/ArticleCard";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function InsightsSection() {
  if (sortedArticles.length === 0) return null;

  return (
    <section
      aria-labelledby="insights-heading"
      className="bg-brand-50 section-y"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Press Releases"
          title={<span id="insights-heading">Client announcements.</span>}
          aside={
            <>
              <p>
                Announcements issued by companies we have worked with. These are
                archive releases from February 2022 and are published here as a
                historical record.
              </p>
              <Link
                href="/insights/"
                className="mt-3 inline-flex items-center gap-2 py-2 text-sm font-semibold text-brand-500 transition-colors duration-200 hover:text-brand-700"
              >
                View all press releases
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </>
          }
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2">
          {sortedArticles.map((article, index) => (
            <Reveal as="li" key={article.slug} delay={index * 0.07}>
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
