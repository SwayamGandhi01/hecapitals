import type { MetadataRoute } from "next";

import { articles } from "@/data/insights";
import { locations } from "@/data/locations";
import { sectors } from "@/data/sectors";
import { services } from "@/data/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${site.url}${path}`;
  const lastModified = new Date();

  return [
    { url: url("/"), lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: url("/about/"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    ...services.map((service) => ({
      url: url(`/${service.slug}/`),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.9,
    })),
    ...sectors.map((sector) => ({
      url: url(`/${sector.slug}/`),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
    ...locations.map((location) => ({
      url: url(`/${location.slug}/`),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    {
      url: url("/clients/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: url("/insights/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...articles.map((article) => ({
      url: url(`/insights/${article.slug}/`),
      // Archive content — its own publication date is the correct lastmod.
      lastModified: new Date(`${article.date}T00:00:00Z`),
      changeFrequency: "yearly" as const,
      priority: 0.4,
    })),
    {
      url: url("/contact-us/"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.9,
    },
  ];
}
