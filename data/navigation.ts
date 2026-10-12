import { locations } from "./locations";
import { sectors } from "./sectors";
import { services } from "./services";

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  heading: string;
  links: NavLink[];
};

export type NavItem = NavLink & {
  /** A single-column dropdown. */
  children?: NavLink[];
  /** A grouped dropdown rendered as labelled columns. */
  groups?: NavGroup[];
};

/**
 * One definition of the navigation, consumed by the desktop header, the mobile
 * menu and the footer. Every href below resolves to a real page in app/.
 *
 * Five top-level items keep the centred bar balanced. The office pages sit in
 * the About panel rather than taking a sixth slot, so every page stays one
 * click away without crowding the navigation.
 */
export const primaryNav: NavItem[] = [
  {
    label: "About",
    href: "/about/",
    groups: [
      {
        heading: "Company",
        links: [
          {
            label: "Who We Are",
            href: "/about/",
            description: "Our approach, principles and vision",
          },
          {
            label: "Our Clients",
            href: "/clients/",
            description: "Companies we have worked with",
          },
        ],
      },
      {
        heading: "Offices",
        links: locations.map((location) => ({
          label: location.city,
          href: `/${location.slug}/`,
          description: location.region,
        })),
      },
    ],
  },
  {
    label: "Services",
    href: "/investor-relations/",
    children: services.map((service) => ({
      label: service.title,
      href: `/${service.slug}/`,
      description: service.kicker,
    })),
  },
  {
    label: "Sectors",
    href: "/mining/",
    children: sectors.map((sector) => ({
      label: sector.title,
      href: `/${sector.slug}/`,
      description: sector.kicker,
    })),
  },
  { label: "Insights", href: "/insights/" },
  { label: "Contact", href: "/contact-us/" },
];

/** Every link a dropdown contains, flattened — used for active-state checks. */
export const navItemLinks = (item: NavItem): NavLink[] => [
  ...(item.children ?? []),
  ...(item.groups?.flatMap((group) => group.links) ?? []),
];

export const footerNav: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Services",
    links: services.map((service) => ({
      label: service.title,
      href: `/${service.slug}/`,
    })),
  },
  {
    heading: "Sectors",
    links: sectors.map((sector) => ({
      label: sector.title,
      href: `/${sector.slug}/`,
    })),
  },
  {
    heading: "Offices",
    links: locations.map((location) => ({
      label: location.city,
      href: `/${location.slug}/`,
    })),
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about/" },
      { label: "Clients", href: "/clients/" },
      { label: "Insights", href: "/insights/" },
      { label: "Contact Us", href: "/contact-us/" },
    ],
  },
];
