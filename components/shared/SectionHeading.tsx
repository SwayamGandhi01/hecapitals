import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  /** Rendered beside the title on wide screens, under it on narrow ones. */
  aside?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  aside,
  align = "left",
  tone = "light",
  className = "",
}: Props) {
  const centered = align === "center";

  return (
    <div
      className={`flex flex-col gap-6 ${
        aside ? "lg:flex-row lg:items-end lg:justify-between lg:gap-16" : ""
      } ${centered ? "items-center text-center" : ""} ${className}`}
    >
      <div className={`max-w-2xl ${centered ? "mx-auto" : ""}`}>
        {eyebrow ? (
          <p
            className={`eyebrow mb-5 ${
              tone === "dark" ? "text-brand-300 after:bg-brand-400/60" : ""
            }`}
          >
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={`font-display text-h2 font-normal ${
            tone === "dark" ? "text-white" : ""
          }`}
        >
          {title}
        </h2>
      </div>
      {aside ? (
        <div
          className={`max-w-md text-card ${
            tone === "dark" ? "text-brand-200" : "text-body"
          }`}
        >
          {aside}
        </div>
      ) : null}
    </div>
  );
}
