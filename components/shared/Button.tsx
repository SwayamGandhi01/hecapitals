import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant =
  | "primary"
  | "secondary"
  | "ghost"
  | "onDark"
  | "outlineLight"
  | "outlineBrand";

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-sm px-7 py-4 text-sm font-semibold tracking-tight transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-brand-500 text-white hover:bg-brand-700",
  secondary:
    "border border-line bg-white text-ink hover:border-brand-300 hover:bg-brand-50",
  ghost: "px-0 py-1.5 text-brand-500 hover:text-brand-700",
  onDark: "bg-white text-brand-800 hover:bg-brand-100",
  // Outlined in the brand blue rather than the neutral border — used where the
  // button sits against plain white and needs to read as the section's action.
  outlineBrand:
    "border border-brand-300 bg-white text-brand-500 hover:border-brand-500 hover:bg-brand-50",
  // Sits beside `onDark`: clearly a button, clearly the secondary one.
  outlineLight:
    "border border-white/45 text-white hover:border-white hover:bg-white/10",
};

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({
  href,
  variant = "primary",
  withArrow = true,
  className = "",
  children,
}: ButtonLinkProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {withArrow ? (
        <ArrowRight
          aria-hidden="true"
          className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
        />
      ) : null}
    </Link>
  );
}

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: Variant;
  withArrow?: boolean;
};

export function Button({
  variant = "primary",
  withArrow = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
      {withArrow ? (
        <ArrowRight
          aria-hidden="true"
          className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
        />
      ) : null}
    </button>
  );
}
