"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail, Menu, Phone, X } from "lucide-react";

import { navItemLinks, primaryNav } from "@/data/navigation";
import { site } from "@/lib/site";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

/**
 * The toggle lives inside the glass bar; the panel does not.
 *
 * `backdrop-filter` on the bar makes it the containing block for any
 * `position: fixed` descendant, which would pin the overlay to the bar's own
 * 358x72 box instead of the viewport. The panel is therefore rendered as a
 * sibling of the bar — see MobileMenuPanel.
 */
export function MobileMenuToggle({ open, onOpenChange }: Props) {
  return (
    <button
      type="button"
      onClick={() => onOpenChange(!open)}
      aria-expanded={open}
      aria-controls="mobile-menu"
      className="inline-flex size-12 items-center justify-center rounded-full border border-white/70 bg-white/60 text-brand-800 transition-colors duration-200 hover:bg-white lg:hidden"
    >
      {open ? (
        <X aria-hidden="true" className="size-5" />
      ) : (
        <Menu aria-hidden="true" className="size-5" />
      )}
      <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
    </button>
  );
}

export function MobileMenuPanel({ open, onOpenChange }: Props) {
  const reduceMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);

  // Lock the page behind the panel and allow Escape to dismiss it.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onOpenChange(false);
    };
    document.addEventListener("keydown", onKeyDown);

    // Move focus into the panel so the keyboard lands somewhere sensible.
    panelRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onOpenChange]);

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            key="scrim"
            aria-hidden="true"
            onClick={() => onOpenChange(false)}
            className="fixed inset-0 z-10 bg-brand-900/35 lg:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          {/* Anchored just under the floating bar rather than covering it, so
              the logo and the close control stay visible and in place. */}
          <motion.div
            id="mobile-menu"
            key="panel"
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="glass-panel fixed inset-x-4 top-[5.5rem] z-10 max-h-[calc(100dvh-7rem)] overflow-y-auto overscroll-contain rounded-3xl p-6 sm:inset-x-6 lg:hidden"
            initial={reduceMotion ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav
              aria-label="Mobile"
              // Closing on link click covers the one case the pathname cannot:
              // tapping a link to the page you are already on.
              onClick={(event) => {
                if ((event.target as HTMLElement).closest("a")) {
                  onOpenChange(false);
                }
              }}
            >
              <ul className="space-y-7">
                {primaryNav.map((item) => {
                  const links = navItemLinks(item);

                  if (links.length === 0) {
                    return (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="block rounded-xl py-1.5 font-display text-h3 text-brand-800 transition-colors duration-150 hover:text-brand-500"
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  }

                  return (
                    <li key={item.label}>
                      <p className="eyebrow mb-3">{item.label}</p>
                      <ul className="space-y-0.5">
                        {links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className="block rounded-xl py-2.5 text-base font-medium text-brand-800 transition-colors duration-150 hover:text-brand-500"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8 space-y-4 border-t border-brand-200/70 pt-6">
                <Link
                  href="/contact-us/"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-4 text-sm font-semibold text-white shadow-[0_6px_18px_rgba(56,93,168,0.3)] transition-colors duration-200 hover:bg-brand-700"
                >
                  Discuss Your Goals
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
                <div className="flex flex-col gap-1 text-card">
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="inline-flex items-center gap-2.5 py-1.5 hover:text-brand-500"
                  >
                    <Phone aria-hidden="true" className="size-4" />
                    {site.phone}
                  </a>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-2.5 py-1.5 hover:text-brand-500"
                  >
                    <Mail aria-hidden="true" className="size-4" />
                    {site.email}
                  </a>
                </div>
              </div>
            </nav>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
