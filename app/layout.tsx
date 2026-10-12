import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { locations } from "@/data/locations";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  // The hero accent and pull quotes use the italic, so load it rather than
  // letting the browser synthesise a slant.
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.tagline} | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.tagline} | ${site.name}`,
    description: site.description,
    url: site.url,
    locale: "en_GB",
    images: [
      {
        url: "/images/hero/london-city-skyline.webp",
        width: 1600,
        height: 680,
        alt: "The London skyline along the River Thames",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.tagline} | ${site.name}`,
    description: site.description,
    images: ["/images/hero/london-city-skyline.webp"],
  },
  robots: { index: true, follow: true },
};

/**
 * Organization data limited to facts published on the company's own site:
 * legal name, registered address, contact details and office cities. No
 * ratings, awards, founding dates or employee counts are asserted.
 */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  description: site.description,
  email: site.email,
  telephone: site.phone,
  faxNumber: site.fax,
  logo: `${site.url}/brand/he-capital-markets-logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: site.address.city,
    postalCode: site.address.postcode,
    addressCountry: "GB",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: site.phone,
    email: site.email,
    areaServed: ["GB", "US", "CA", "DE"],
    availableLanguage: "English",
  },
  areaServed: locations.map((location) => location.city),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${sourceSerif.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        {/* Scroll reveals start at opacity 0; without JS they must not stay there. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col overflow-x-hidden bg-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-sm focus:bg-brand-800 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1 scroll-mt-32">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          // Static, build-time constant assembled from lib/site.ts.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}

export const viewport = {
  themeColor: "#17345f",
};
