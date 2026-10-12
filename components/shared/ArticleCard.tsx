import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { formatArticleDate, type Article } from "@/data/insights";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/insights/${article.slug}/`}
      className="group flex h-full flex-col overflow-hidden rounded-sm border border-line bg-white transition-colors duration-200 hover:border-brand-300"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          sizes="(min-width: 1024px) 24rem, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-500">
          <span>{article.category}</span>
          <span aria-hidden="true" className="text-brand-300">
            /
          </span>
          <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
        </p>
        <h3 className="mt-4 font-display text-h4 text-ink">
          {article.title}
        </h3>
        <p className="mt-3 flex-1 text-card">
          {article.excerpt}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-500">
          Read more
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform duration-200 group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
