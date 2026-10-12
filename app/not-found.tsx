import type { Metadata } from "next";
import Link from "next/link";

import { ButtonLink } from "@/components/shared/Button";
import { services } from "@/data/services";
import { sectors } from "@/data/sectors";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[70vh] flex-col justify-center pb-24 pt-40">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-6 max-w-2xl font-display text-h1 font-normal">
        We could not find that page.
      </h1>
      <p className="mt-6 max-w-xl leading-relaxed">
        The page you were looking for may have moved or no longer exists. You
        can return to the homepage, or pick up from one of the sections below.
      </p>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <ButtonLink href="/">Back to the homepage</ButtonLink>
        <ButtonLink href="/contact-us/" variant="secondary">
          Contact us
        </ButtonLink>
      </div>

      <div className="mt-16 grid gap-10 border-t border-line pt-12 sm:grid-cols-2">
        <nav aria-label="Services">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
            Services
          </h2>
          <ul className="mt-5 space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/${service.slug}/`}
                  className="inline-block py-1.5 transition-colors duration-150 hover:text-brand-500"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Sectors">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
            Sectors
          </h2>
          <ul className="mt-5 space-y-2 text-sm">
            {sectors.map((sector) => (
              <li key={sector.slug}>
                <Link
                  href={`/${sector.slug}/`}
                  className="inline-block py-1.5 transition-colors duration-150 hover:text-brand-500"
                >
                  {sector.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
