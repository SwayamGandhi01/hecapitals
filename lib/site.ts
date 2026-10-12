/**
 * Single source of truth for company facts that appear in more than one place.
 * Every value here was transcribed from hecapitalmarkets.com on 2026-10-12.
 */
export const site = {
  name: "HE Capital Markets",
  legalName: "HE Capital Markets Ltd",
  url: "https://www.hecapitalmarkets.com",
  tagline: "Global Investor Relations Specialists",
  description:
    "HE Capital Markets is a full-service investor relations firm helping North American listed companies build visibility, attract investors and raise their profile across North America and Europe.",
  companyNumber: "11959029",
  email: "info@hecapitalmarkets.com",
  phone: "+44 (0) 207 096 0125",
  phoneHref: "+442070960125",
  fax: "+44 (0) 203 300 1647",
  address: {
    line1: "News Building",
    line2: "3 London Bridge Street",
    city: "London",
    postcode: "SE1 9SG",
    country: "United Kingdom",
  },
} as const;

export const addressLines = [
  site.address.line1,
  site.address.line2,
  site.address.city,
  site.address.postcode,
  site.address.country,
];
