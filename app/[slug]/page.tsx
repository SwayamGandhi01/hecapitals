import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DetailPage } from "@/components/shared/DetailPage";
import { locations, getLocation } from "@/data/locations";
import { sectors, getSector } from "@/data/sectors";
import { services, getService } from "@/data/services";

/**
 * The original site published its services, sectors and office pages as
 * top-level slugs (/mining/, /investor-relations/, /investor-relations-london/).
 * Those URLs are preserved here by resolving one dynamic segment against the
 * three content collections, rather than by repeating fifteen near-identical
 * page files.
 *
 * `dynamicParams = false` means anything not in generateStaticParams renders
 * the 404 page, so this route cannot swallow unknown URLs.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return [...services, ...sectors, ...locations].map((entry) => ({
    slug: entry.slug,
  }));
}

type Resolved =
  | { kind: "service"; entry: (typeof services)[number] }
  | { kind: "sector"; entry: (typeof sectors)[number] }
  | { kind: "location"; entry: (typeof locations)[number] };

function resolve(slug: string): Resolved | null {
  const service = getService(slug);
  if (service) return { kind: "service", entry: service };
  const sector = getSector(slug);
  if (sector) return { kind: "sector", entry: sector };
  const location = getLocation(slug);
  if (location) return { kind: "location", entry: location };
  return null;
}

export async function generateMetadata({
  params,
}: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const resolved = resolve(slug);
  if (!resolved) return {};

  const { entry } = resolved;
  return {
    title: entry.metaTitle,
    description: entry.metaDescription,
    alternates: { canonical: `/${slug}/` },
    openGraph: {
      title: entry.metaTitle,
      description: entry.metaDescription,
      url: `/${slug}/`,
      images: [{ url: entry.banner }],
    },
  };
}

export default async function SlugPage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const resolved = resolve(slug);
  if (!resolved) notFound();

  const otherServices = services
    .filter((service) => service.slug !== slug)
    .map((service) => ({ label: service.title, href: `/${service.slug}/` }));
  const sectorLinks = sectors.map((sector) => ({
    label: sector.title,
    href: `/${sector.slug}/`,
  }));
  const otherSectors = sectorLinks.filter(
    (link) => link.href !== `/${slug}/`,
  );
  const serviceLinks = services.map((service) => ({
    label: service.title,
    href: `/${service.slug}/`,
  }));
  const otherOffices = locations
    .filter((location) => location.slug !== slug)
    .map((location) => ({
      label: location.city,
      href: `/${location.slug}/`,
    }));

  if (resolved.kind === "service") {
    const service = resolved.entry;
    return (
      <DetailPage
        title={service.title}
        kicker={service.kicker}
        summary={service.summary}
        banner={service.banner}
        imageAlt={service.imageAlt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
          { label: service.title },
        ]}
        sections={service.sections}
        closing={service.closing}
        highlights={service.highlights}
        related={[
          { heading: "Other services", links: otherServices },
          { heading: "Sector expertise", links: sectorLinks },
        ]}
      />
    );
  }

  if (resolved.kind === "sector") {
    const sector = resolved.entry;
    return (
      <DetailPage
        title={sector.title}
        kicker={sector.kicker}
        summary={sector.summary}
        banner={sector.banner}
        imageAlt={sector.imageAlt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sectors" },
          { label: sector.title },
        ]}
        sections={sector.sections}
        closing={sector.closing}
        related={[
          { heading: "Services expertise", links: serviceLinks },
          { heading: "Other sectors", links: otherSectors },
        ]}
        cta={{
          heading: `Ready to raise your profile in ${sector.title.toLowerCase()}?`,
        }}
      />
    );
  }

  const location = resolved.entry;
  return (
    <DetailPage
      title={location.title}
      kicker={location.kicker}
      summary={location.summary}
      banner={location.banner}
      imageAlt={location.imageAlt}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Offices" },
        { label: location.city },
      ]}
      sections={location.sections}
      closing={location.closing}
      phone={{ label: location.phone, href: location.phoneHref }}
      related={[
        { heading: "Other offices", links: otherOffices },
        { heading: "Services expertise", links: serviceLinks },
      ]}
      cta={{
        heading: `Speak with our ${location.city} team.`,
      }}
    />
  );
}
