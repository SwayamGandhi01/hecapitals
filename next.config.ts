import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The original site served every page with a trailing slash. Keeping that
  // convention means the rebuilt URLs match the indexed ones exactly.
  // The dev-tools badge is a development-only overlay; switching it off keeps
  // local screenshots and design reviews clean. It never shipped to production.
  devIndicators: false,
  trailingSlash: true,
  poweredByHeader: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Articles moved under /insights/; the old flat URLs still resolve.
      {
        source: "/blog",
        destination: "/insights/",
        permanent: true,
      },
      {
        source: "/opawica-intercepts-visible-gold",
        destination: "/insights/opawica-intercepts-visible-gold/",
        permanent: true,
      },
      {
        source: "/boosh-revenues-surge",
        destination: "/insights/boosh-revenues-surge/",
        permanent: true,
      },
      {
        source: "/some-of-our-clients",
        destination: "/clients/",
        permanent: true,
      },
      // The old theme used /blockchain/ in places and /block-chain/ in others.
      {
        source: "/blockchain",
        destination: "/block-chain/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
