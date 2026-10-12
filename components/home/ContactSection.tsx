import { Mail, MapPin, Phone } from "lucide-react";

import { addressLines, site } from "@/lib/site";
import { ContactForm } from "@/components/shared/ContactForm";

export function ContactSection() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="bg-brand-50 section-y"
    >
      <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <div>
          <p className="eyebrow mb-5">Get In Touch</p>
          <h2 id="contact-heading" className="font-display text-h2 font-normal">
            Let&apos;s discuss your objectives.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed">
            Speak with our team to explore how we can support your company
            objectives and connect you with the right investors.
          </p>

          <ul className="mt-10 space-y-5 text-sm">
            <li>
              <a
                href={`tel:${site.phoneHref}`}
                className="group flex items-center gap-4 border-b border-line pb-5 pt-1 transition-colors duration-200 hover:text-brand-500"
              >
                <Phone
                  aria-hidden="true"
                  className="size-5 shrink-0 text-brand-500"
                  strokeWidth={1.5}
                />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-4 border-b border-line pb-5 pt-1 transition-colors duration-200 hover:text-brand-500"
              >
                <Mail
                  aria-hidden="true"
                  className="size-5 shrink-0 text-brand-500"
                  strokeWidth={1.5}
                />
                {site.email}
              </a>
            </li>
            <li className="flex gap-4">
              <MapPin
                aria-hidden="true"
                className="mt-0.5 size-5 shrink-0 text-brand-500"
                strokeWidth={1.5}
              />
              <address className="not-italic leading-relaxed">
                {addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </li>
          </ul>
        </div>

        <div className="rounded-sm border border-line bg-white p-7 lg:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
