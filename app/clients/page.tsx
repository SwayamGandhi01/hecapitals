import type { Metadata } from "next";
import Image from "next/image";

import { ContactCTA } from "@/components/shared/ContactCTA";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { clients } from "@/data/clients";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "A selection of the listed companies HE Capital Markets has worked with across mining, technology, energy and life sciences.",
  alternates: { canonical: "/clients/" },
  openGraph: {
    title: "Clients | HE Capital Markets",
    description:
      "A selection of the listed companies HE Capital Markets has worked with.",
    url: "/clients/",
    images: [{ url: "/images/services/investor-relations-banner.webp" }],
  },
};

export default function ClientsPage() {
  return (
    <>
      <PageHero
        title="Companies we have worked with"
        kicker="Our Clients"
        summary="We partner with listed companies across the sectors we specialise in, from exploration and energy to technology and life sciences."
        image="/images/services/investor-relations-banner.webp"
        imageAlt="Hands holding a tablet displaying a rising financial performance chart"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Clients" }]}
      />

      <section className="container-page section-y">
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
          {clients.map((client, index) => (
            <Reveal
              as="li"
              key={client.name}
              delay={Math.min(index, 11) * 0.03}
              className="bg-white"
            >
              <div className="flex h-36 items-center justify-center p-7">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  sizes="(min-width: 1024px) 18rem, (min-width: 640px) 30vw, 45vw"
                  className="h-full w-full object-contain"
                />
              </div>
            </Reveal>
          ))}
        </ul>

        <p className="mt-10 max-w-2xl text-card">
          Logos are shown to identify companies we have worked with. They remain
          the property of their respective owners and their inclusion does not
          imply any endorsement of HE Capital Markets.
        </p>
      </section>

      <ContactCTA
        heading="Could your company be next?"
        body="Speak with our team about building a targeted capital markets programme for your listed company."
      />
    </>
  );
}
