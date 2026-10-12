import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { ContactCTA } from "@/components/shared/ContactCTA";
import { PageHero } from "@/components/shared/PageHero";
import {
  articles,
  formatArticleDate,
  getArticle,
  sortedArticles,
} from "@/data/insights";
import { ArticleCard } from "@/components/shared/ArticleCard";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/insights/${slug}/` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `/insights/${slug}/`,
      publishedTime: article.date,
      images: [{ url: article.image }],
    },
  };
}

export default async function ArticlePage({
  params,
}: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const others = sortedArticles.filter((entry) => entry.slug !== slug);

  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    datePublished: article.date,
    description: article.excerpt,
    image: `${site.url}${article.image}`,
    // The release was issued by the client company, not by HE Capital Markets.
    author: { "@type": "Organization", name: article.subject },
    publisher: { "@type": "Organization", name: article.subject },
  };

  return (
    <>
      <PageHero
        title={article.title}
        kicker={article.category}
        image={article.image}
        imageAlt={article.imageAlt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Press Releases", href: "/insights/" },
          { label: article.subject },
        ]}
      />

      <article className="container-page py-16 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-line pb-6 text-xs font-semibold uppercase tracking-[0.16em] text-brand-500">
            <time dateTime={article.date}>
              {formatArticleDate(article.date)}
            </time>
            <span aria-hidden="true" className="text-brand-300">
              /
            </span>
            <span className="text-body">{article.subject}</span>
          </div>

          <p className="mt-8 rounded-sm bg-brand-50 p-5 text-card">
            This is an archived press release issued by {article.subject} on{" "}
            {formatArticleDate(article.date)}. It is reproduced here as a
            historical record and is not a current announcement.
          </p>

          <div className="mt-10">
            {article.blocks.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={index}
                    className="mt-12 font-display text-h3 font-normal first:mt-0"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "list") {
                return (
                  <ul key={index} className="mt-6 space-y-4">
                    {block.items.map((item) => (
                      <li key={item.slice(0, 40)} className="flex gap-4">
                        <span
                          aria-hidden="true"
                          className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand-400"
                        />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.type === "quote") {
                return (
                  <blockquote
                    key={index}
                    className="mt-10 border-l-2 border-brand-300 bg-brand-50 p-6"
                  >
                    <p className="font-display text-lg leading-relaxed text-brand-800">
                      &ldquo;{block.text}&rdquo;
                    </p>
                    <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-body">
                      {block.attribution}
                    </footer>
                  </blockquote>
                );
              }
              return (
                <p key={index} className="mt-5 leading-relaxed">
                  {block.text}
                </p>
              );
            })}
          </div>

          <div className="mt-14 border-t border-line pt-8">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
              Important notices
            </h2>
            {article.disclaimer.map((text) => (
              <p
                key={text.slice(0, 40)}
                className="mt-4 text-xs leading-relaxed text-body"
              >
                {text}
              </p>
            ))}
          </div>

          <Link
            href="/insights/"
            className="group mt-12 inline-flex items-center gap-2 py-2 text-sm font-semibold text-brand-500 transition-colors duration-200 hover:text-brand-700"
          >
            <ArrowLeft
              aria-hidden="true"
              className="size-4 transition-transform duration-200 group-hover:-translate-x-1"
            />
            All press releases
          </Link>
        </div>
      </article>

      {others.length > 0 ? (
        <section
          aria-labelledby="more-releases"
          className="bg-brand-50 section-y"
        >
          <div className="container-page">
            <h2
              id="more-releases"
              className="font-display text-h2 font-normal"
            >
              More press releases
            </h2>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((entry) => (
                <li key={entry.slug}>
                  <ArticleCard article={entry} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <ContactCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
