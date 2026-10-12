import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href?: string };

type Props = {
  title: string;
  kicker?: string;
  summary?: string;
  image: string;
  imageAlt: string;
  breadcrumbs: Crumb[];
  /** Hero images are above the fold on every page, so they load eagerly. */
  priority?: boolean;
};

export function PageHero({
  title,
  kicker,
  summary,
  image,
  imageAlt,
  breadcrumbs,
  priority = true,
}: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-900">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/88 to-brand-900/55"
      />

      <div className="container-page relative flex min-h-[24rem] flex-col justify-end pb-16 pt-32 lg:min-h-[30rem] lg:pb-20 lg:pt-40">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-brand-200">
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {index > 0 ? (
                  <ChevronRight
                    aria-hidden="true"
                    className="size-3.5 text-brand-400"
                  />
                ) : null}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="transition-colors duration-150 hover:text-white"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-white">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {kicker ? (
          <p className="eyebrow mt-8 text-brand-300 after:bg-brand-400/60">
            {kicker}
          </p>
        ) : null}

        <h1 className="mt-5 max-w-3xl font-display text-h1 font-normal text-white">
          {title}
        </h1>

        {summary ? (
          <p className="mt-6 max-w-2xl leading-relaxed text-brand-100">
            {summary}
          </p>
        ) : null}
      </div>
    </section>
  );
}
