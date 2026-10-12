"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

import { navItemLinks, primaryNav, type NavLink } from "@/data/navigation";
import { Logo } from "@/components/shared/Logo";
import {
  MobileMenuPanel,
  MobileMenuToggle,
} from "@/components/layout/MobileMenu";

export function Navbar() {
  const pathname = usePathname();
  // The open dropdown is stored together with the route it was opened on, so
  // navigating closes it by derivation rather than through an effect.
  const [opened, setOpened] = useState<{ label: string; path: string } | null>(
    null,
  );
  const openMenu = opened?.path === pathname ? opened.label : null;
  const [scrolled, setScrolled] = useState(false);
  // Same derive-from-pathname pattern as the dropdowns: navigating closes it.
  const [mobileOpenedOn, setMobileOpenedOn] = useState<string | null>(null);
  const mobileOpen = mobileOpenedOn === pathname;
  const setMobileOpen = (next: boolean) =>
    setMobileOpenedOn(next ? pathname : null);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const setOpenMenu = (label: string | null) =>
    setOpened(label ? { label, path: pathname } : null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    // Read the initial position after paint — a browser restoring a scroll
    // position would otherwise leave the bar in its unscrolled state.
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Dismiss on Escape or on a click outside the bar.
  useEffect(() => {
    if (!openMenu) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpened(null);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpened(null);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [openMenu]);

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    [],
  );

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpened(null), 140);
  };

  const isActive = (href: string, links: NavLink[]) => {
    if (href !== "/" && pathname.startsWith(href)) return true;
    return links.some((link) => pathname.startsWith(link.href));
  };

  const triggerClass = (active: boolean) =>
    `relative inline-flex items-center gap-1.5 rounded-full px-3.5 py-2.5 text-sm font-medium transition-colors duration-200 after:absolute after:inset-x-3.5 after:bottom-1.5 after:h-px after:origin-left after:bg-brand-500 after:transition-transform after:duration-200 xl:px-4 ${
      active
        ? "text-brand-500 after:scale-x-100"
        : "text-brand-800 after:scale-x-0 hover:text-brand-500 hover:after:scale-x-100"
    }`;

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-4 sm:px-6 lg:top-6 lg:px-8">
      <nav
        ref={navRef}
        aria-label="Main"
        className={`glass-surface relative z-20 mx-auto flex h-[4.5rem] w-full max-w-[82.5rem] items-center gap-3 rounded-full pl-6 pr-3 transition-[background-image,box-shadow] duration-300 lg:grid lg:h-[5.5rem] lg:grid-cols-[auto_1fr_auto] lg:gap-6 lg:pl-10 lg:pr-4 ${
          scrolled ? "glass-surface-scrolled" : ""
        }`}
      >
        <Logo priority />

        {/* Centre column: the links sit in the middle of the bar, as in the
            reference, and cannot collide with the logo or the CTA. */}
        <ul className="hidden items-center justify-center gap-1 lg:flex">
          {primaryNav.map((item) => {
            const links = navItemLinks(item);
            const active = isActive(item.href, links);
            const open = openMenu === item.label;

            if (links.length === 0) {
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={triggerClass(active)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }

            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  cancelClose();
                  setOpenMenu(item.label);
                }}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  aria-haspopup="true"
                  onClick={() => setOpenMenu(open ? null : item.label)}
                  className={triggerClass(active || open)}
                >
                  {item.label}
                  <ChevronDown
                    aria-hidden="true"
                    className={`size-3.5 transition-transform duration-200 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {open ? (
                  <div
                    className="absolute left-1/2 top-full z-10 -translate-x-1/2 pt-4"
                    onMouseEnter={cancelClose}
                    onMouseLeave={scheduleClose}
                  >
                    <div
                      className={`glass-panel overflow-hidden rounded-3xl p-3 ${
                        item.groups ? "w-[34rem]" : "w-[20rem]"
                      }`}
                    >
                      {item.groups ? (
                        <div className="grid grid-cols-2 gap-2">
                          {item.groups.map((group) => (
                            <div key={group.heading}>
                              <p className="px-4 pb-1 pt-2 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-brand-500">
                                {group.heading}
                              </p>
                              <ul>
                                {group.links.map((link) => (
                                  <li key={link.href}>
                                    <PanelLink link={link} compact />
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <ul>
                          {links.map((link) => (
                            <li key={link.href}>
                              <PanelLink link={link} />
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>

        <div className="ml-auto flex items-center gap-2 lg:ml-0 lg:gap-4">
          <span
            aria-hidden="true"
            className="hidden h-8 w-px bg-brand-800/15 lg:block"
          />
          <Link
            href="/contact-us/"
            className="group hidden items-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_6px_18px_rgba(56,93,168,0.3)] transition-colors duration-200 hover:bg-brand-700 md:inline-flex lg:px-6 lg:py-3.5"
          >
            Discuss Your Goals
            <ArrowRight
              aria-hidden="true"
              className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
          <MobileMenuToggle open={mobileOpen} onOpenChange={setMobileOpen} />
        </div>
      </nav>

      <MobileMenuPanel open={mobileOpen} onOpenChange={setMobileOpen} />
    </header>
  );
}

function PanelLink({ link, compact }: { link: NavLink; compact?: boolean }) {
  return (
    <Link
      href={link.href}
      className="block rounded-2xl px-4 py-2.5 transition-colors duration-150 hover:bg-white/85"
    >
      <span className="block text-sm font-semibold text-brand-800">
        {link.label}
      </span>
      {link.description ? (
        <span
          className={`mt-0.5 block text-xs leading-relaxed text-body ${
            compact ? "sr-only" : ""
          }`}
        >
          {link.description}
        </span>
      ) : null}
    </Link>
  );
}
