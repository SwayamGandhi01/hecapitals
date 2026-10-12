import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone, Printer } from "lucide-react";

import { ContactForm } from "@/components/shared/ContactForm";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { directContacts, locations } from "@/data/locations";
import { addressLines, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact HE Capital Markets at ${site.address.line1}, ${site.address.line2}, ${site.address.city} ${site.address.postcode}, or call ${site.phone}.`,
  alternates: { canonical: "/contact-us/" },
  openGraph: {
    title: "Contact HE Capital Markets",
    description:
      "Speak with our team in London, New York, Vancouver or Frankfurt.",
    url: "/contact-us/",
    images: [{ url: "/images/contact/london-bridge-map.webp" }],
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact us"
        kicker="Get In Touch"
        summary="Speak with our team to explore how we can support your company objectives and connect you with the right investors."
        image="/images/locations/london-banner.webp"
        imageAlt="The City of London at dusk, with red buses passing the Gherkin tower"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="container-page section-y grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-20">
        <div>
          <h2 className="font-display text-h3 font-normal">
            Head office
          </h2>
          <address className="mt-6 space-y-5 text-sm not-italic">
            <p className="flex gap-4">
              <MapPin
                aria-hidden="true"
                className="mt-0.5 size-5 shrink-0 text-brand-500"
                strokeWidth={1.5}
              />
              <span className="leading-relaxed">
                <span className="block font-semibold text-ink">
                  {site.legalName}
                </span>
                {addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </p>
            <p className="flex gap-4">
              <Phone
                aria-hidden="true"
                className="mt-0.5 size-5 shrink-0 text-brand-500"
                strokeWidth={1.5}
              />
              <a
                href={`tel:${site.phoneHref}`}
                className="inline-block py-1 transition-colors duration-150 hover:text-brand-500"
              >
                {site.phone}
              </a>
            </p>
            <p className="flex gap-4">
              <Printer
                aria-hidden="true"
                className="mt-0.5 size-5 shrink-0 text-brand-500"
                strokeWidth={1.5}
              />
              <span>Fax {site.fax}</span>
            </p>
            <p className="flex gap-4">
              <Mail
                aria-hidden="true"
                className="mt-0.5 size-5 shrink-0 text-brand-500"
                strokeWidth={1.5}
              />
              <a
                href={`mailto:${site.email}`}
                className="inline-block py-1 transition-colors duration-150 hover:text-brand-500"
              >
                {site.email}
              </a>
            </p>
          </address>

          <div className="relative mt-9 aspect-[16/9] overflow-hidden rounded-sm border border-line">
            <Image
              src="/images/contact/london-bridge-map.webp"
              alt="Map showing the HE Capital Markets office at 3 London Bridge Street, London"
              fill
              sizes="(min-width: 1024px) 32rem, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="rounded-sm border border-line bg-white p-7 lg:p-10">
          <h2 className="font-display text-h3 font-normal">
            Send us an enquiry
          </h2>
          <p className="mt-4 text-card">
            Tell us about your company and objectives. A member of our team will
            respond directly.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="direct-contacts-heading"
        className="bg-brand-50 section-y"
      >
        <div className="container-page">
          <SectionHeading
            eyebrow="Direct Contacts"
            title={<span id="direct-contacts-heading">Speak to our team.</span>}
            aside={
              <p>
                All three are based at our London head office and share its
                telephone and fax numbers.
              </p>
            }
          />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {directContacts.map((contact, index) => (
              <Reveal as="li" key={contact.email} delay={index * 0.07}>
                <div className="flex h-full flex-col rounded-sm border border-line bg-white p-7">
                  <h3 className="font-display text-xl text-ink">
                    {contact.name}
                  </h3>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-500">
                    {contact.role}
                  </p>
                  <div className="mt-6 space-y-2.5 text-sm">
                    <p>
                      <a
                        href={`mailto:${contact.email}`}
                        className="inline-block break-all py-1 transition-colors duration-150 hover:text-brand-500"
                      >
                        {contact.email}
                      </a>
                    </p>
                    <p>
                      <a
                        href={`tel:${site.phoneHref}`}
                        className="inline-block py-1 transition-colors duration-150 hover:text-brand-500"
                      >
                        {site.phone}
                      </a>
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="offices-heading"
        className="container-page section-y"
      >
        <SectionHeading
          eyebrow="Our Offices"
          title={<span id="offices-heading">Where to find us.</span>}
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((location, index) => (
            <Reveal as="li" key={location.slug} delay={index * 0.06}>
              <Link
                href={`/${location.slug}/`}
                className="group flex h-full flex-col overflow-hidden rounded-sm border border-line transition-colors duration-200 hover:border-brand-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={location.image}
                    alt={location.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 18rem, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl text-ink">
                    {location.city}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-body">
                    {location.region}
                  </p>
                  <p className="mt-4 flex-1 text-sm">{location.phone}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-500">
                    Office details
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
