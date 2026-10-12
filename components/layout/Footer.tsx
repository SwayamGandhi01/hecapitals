import Link from "next/link";
import { Mail, MapPin, Phone, Printer } from "lucide-react";

import { footerNav } from "@/data/navigation";
import { locations } from "@/data/locations";
import { addressLines, site } from "@/lib/site";
import { Logo } from "@/components/shared/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-900 text-brand-200">
      <div className="container-page py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,2fr)] lg:gap-20">
          <div>
            <Logo variant="onDark" />
            <p className="mt-6 max-w-sm text-card">
              {site.description}
            </p>

            <address className="mt-8 space-y-3.5 text-card not-italic">
              <p className="flex gap-3">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-brand-400"
                />
                <span>
                  {addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </p>
              <p className="flex gap-3">
                <Phone
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-brand-400"
                />
                <a
                  href={`tel:${site.phoneHref}`}
                  className="hover:text-white"
                >
                  {site.phone}
                </a>
              </p>
              <p className="flex gap-3">
                <Printer
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-brand-400"
                />
                <span>Fax {site.fax}</span>
              </p>
              <p className="flex gap-3">
                <Mail
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-brand-400"
                />
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </p>
            </address>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
            {footerNav.map((group) => (
              <nav key={group.heading} aria-label={group.heading}>
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/95">
                  {group.heading}
                </h2>
                <ul className="mt-5 space-y-1 text-card">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-block py-1.5 transition-colors duration-150 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((location) => (
            <div key={location.slug}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
                {location.city}
              </p>
              <a
                href={`tel:${location.phoneHref}`}
                className="mt-2 inline-block text-sm transition-colors duration-150 hover:text-white"
              >
                {location.phone}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-7 text-xs leading-relaxed sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.legalName}. All rights reserved.
          </p>
          <p>Company Registration Number: {site.companyNumber}</p>
        </div>
      </div>
    </footer>
  );
}
