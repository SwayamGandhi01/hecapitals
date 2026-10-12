"use client";

import { useId, useRef, useState } from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

import { enquirySectors, enquiryServices } from "@/data/company";
import { site } from "@/lib/site";
import {
  emptyContactPayload,
  hasErrors,
  normaliseContactInput,
  validateContact,
  type ContactPayload,
  type FieldErrors,
} from "@/lib/validation";
import { Button } from "@/components/shared/Button";

type Status = "idle" | "submitting" | "success" | "error";

// One shared field style keeps inputs, selects and the textarea on the same
// height and baseline, which native select rendering otherwise breaks.
const fieldClass =
  "block w-full min-h-[3.25rem] rounded-sm border bg-white px-4 py-3.5 text-card leading-normal text-ink placeholder:text-body/70 transition-colors duration-200 focus:border-brand-500";

// Selects additionally drop the native control and draw their own chevron, so
// they match the inputs on every platform instead of sizing themselves.
const selectClass =
  "appearance-none bg-[length:1.1rem] bg-[right_0.9rem_center] bg-no-repeat pr-11 " +
  "bg-[url(\"data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%2366758a%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpath d=%27m6 9 6 6 6-6%27/%3E%3C/svg%3E\")]";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const formId = useId();
  const [values, setValues] = useState<ContactPayload>(emptyContactPayload);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [formMessage, setFormMessage] = useState("");
  const statusRef = useRef<HTMLDivElement>(null);
  // State updates are not synchronous, so a second click in the same frame
  // would otherwise slip past a `status === "submitting"` check.
  const inFlight = useRef(false);

  const update =
    (field: keyof ContactPayload) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setValues((current) => ({ ...current, [field]: event.target.value }));
      // Clear a field's error as soon as the visitor edits it.
      setErrors((current) => {
        if (!current[field]) return current;
        const next = { ...current };
        delete next[field];
        return next;
      });
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inFlight.current) return;

    const payload = normaliseContactInput(values);
    const nextErrors = validateContact(payload);

    if (hasErrors(nextErrors)) {
      setErrors(nextErrors);
      setStatus("error");
      setFormMessage("Please check the highlighted fields and try again.");
      statusRef.current?.focus();
      return;
    }

    inFlight.current = true;
    setErrors({});
    setStatus("submitting");
    setFormMessage("");

    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        errors?: FieldErrors;
        message?: string;
      };

      if (!response.ok || !data.ok) {
        setErrors(data.errors ?? {});
        setStatus("error");
        setFormMessage(
          data.message ??
            `We could not send your message. Please email ${site.email} or call ${site.phone}.`,
        );
        statusRef.current?.focus();
        return;
      }

      setStatus("success");
      setValues(emptyContactPayload);
      setFormMessage(
        "Thank you — your enquiry has been sent. A member of our team will be in touch.",
      );
      statusRef.current?.focus();
    } catch {
      setStatus("error");
      setFormMessage(
        `We could not reach the server. Please email ${site.email} or call ${site.phone}.`,
      );
      statusRef.current?.focus();
    } finally {
      inFlight.current = false;
    }
  };

  const describedBy = (field: keyof ContactPayload) =>
    errors[field] ? `${formId}-${field}-error` : undefined;

  const borderFor = (field: keyof ContactPayload) =>
    errors[field] ? "border-red-600" : "border-line";

  // A plain render helper, not a component: declaring a component inside
  // render would give it a fresh identity on every keystroke.
  const fieldError = (field: keyof ContactPayload) =>
    errors[field] ? (
      <p
        id={`${formId}-${field}-error`}
        className="mt-2 flex items-start gap-1.5 text-xs text-red-700"
      >
        <AlertCircle aria-hidden="true" className="mt-px size-3.5 shrink-0" />
        {errors[field]}
      </p>
    ) : null;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot: hidden from people and from assistive technology. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={update("website")}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor={`${formId}-name`}
            className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.12em] text-ink"
          >
            Full name <span className="text-brand-500">*</span>
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            value={values.name}
            onChange={update("name")}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={describedBy("name")}
            className={`${fieldClass} ${borderFor("name")}`}
          />
          {fieldError("name")}
        </div>

        <div>
          <label
            htmlFor={`${formId}-email`}
            className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.12em] text-ink"
          >
            Work email <span className="text-brand-500">*</span>
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            value={values.email}
            onChange={update("email")}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={describedBy("email")}
            className={`${fieldClass} ${borderFor("email")}`}
          />
          {fieldError("email")}
        </div>

        <div>
          <label
            htmlFor={`${formId}-company`}
            className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.12em] text-ink"
          >
            Company
          </label>
          <input
            id={`${formId}-company`}
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={update("company")}
            className={`${fieldClass} ${borderFor("company")}`}
          />
        </div>

        <div>
          <label
            htmlFor={`${formId}-phone`}
            className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.12em] text-ink"
          >
            Phone
          </label>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={update("phone")}
            className={`${fieldClass} ${borderFor("phone")}`}
          />
        </div>

        {!compact ? (
          <>
            <div>
              <label
                htmlFor={`${formId}-service`}
                className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.12em] text-ink"
              >
                Service of interest
              </label>
              <select
                id={`${formId}-service`}
                name="service"
                value={values.service}
                onChange={update("service")}
                aria-invalid={errors.service ? true : undefined}
                aria-describedby={describedBy("service")}
                className={`${fieldClass} ${selectClass} ${borderFor("service")}`}
              >
                <option value="">Please choose an option</option>
                {enquiryServices.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {fieldError("service")}
            </div>

            <div>
              <label
                htmlFor={`${formId}-sector`}
                className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.12em] text-ink"
              >
                Your sector
              </label>
              <select
                id={`${formId}-sector`}
                name="sector"
                value={values.sector}
                onChange={update("sector")}
                aria-invalid={errors.sector ? true : undefined}
                aria-describedby={describedBy("sector")}
                className={`${fieldClass} ${selectClass} ${borderFor("sector")}`}
              >
                <option value="">Please choose an option</option>
                {enquirySectors.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {fieldError("sector")}
            </div>
          </>
        ) : null}
      </div>

      <div>
        <label
          htmlFor={`${formId}-message`}
          className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.12em] text-ink"
        >
          How can we help? <span className="text-brand-500">*</span>
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          required
          rows={compact ? 4 : 6}
          value={values.message}
          onChange={update("message")}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={describedBy("message")}
          className={`${fieldClass} resize-y ${borderFor("message")}`}
        />
        {fieldError("message")}
      </div>

      {/* One live region for the whole form, focusable so it can be announced. */}
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className={formMessage ? "" : "sr-only"}
      >
        {formMessage ? (
          <p
            className={`flex items-start gap-2.5 rounded-sm border p-4 text-sm ${
              status === "success"
                ? "border-brand-200 bg-brand-50 text-brand-800"
                : "border-red-200 bg-red-50 text-red-800"
            }`}
          >
            {status === "success" ? (
              <CheckCircle2
                aria-hidden="true"
                className="mt-px size-4 shrink-0"
              />
            ) : (
              <AlertCircle aria-hidden="true" className="mt-px size-4 shrink-0" />
            )}
            {formMessage}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          disabled={status === "submitting"}
          withArrow={status !== "submitting"}
          className="w-full sm:w-auto"
        >
          {status === "submitting" ? (
            <>
              <Loader2
                aria-hidden="true"
                className="size-4 shrink-0 animate-spin"
              />
              Sending…
            </>
          ) : (
            "Send enquiry"
          )}
        </Button>
        <p className="text-xs leading-relaxed text-body sm:max-w-xs">
          We use your details only to respond to your enquiry. They are not
          shared with third parties.
        </p>
      </div>
    </form>
  );
}
