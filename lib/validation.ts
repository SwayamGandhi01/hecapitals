import { enquiryServices, enquirySectors } from "@/data/company";

export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  sector: string;
  message: string;
  /** Honeypot: must stay empty. Real people never see this field. */
  website: string;
};

export type FieldErrors = Partial<Record<keyof ContactPayload, string>>;

export const emptyContactPayload: ContactPayload = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  sector: "",
  message: "",
  website: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const asString = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

/**
 * Strip control characters and cap length. Used on both the client (for
 * immediate feedback) and the server (where it actually matters).
 */
const sanitise = (value: string, maxLength: number) =>
  value
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);

export function normaliseContactInput(input: unknown): ContactPayload {
  const raw = (input ?? {}) as Record<string, unknown>;
  return {
    name: sanitise(asString(raw.name), 120),
    email: sanitise(asString(raw.email), 200).toLowerCase(),
    company: sanitise(asString(raw.company), 160),
    phone: sanitise(asString(raw.phone), 40),
    service: sanitise(asString(raw.service), 80),
    sector: sanitise(asString(raw.sector), 80),
    // Newlines are preserved in the message, everything else is collapsed.
    message: asString(raw.message)
        .replace(/[\u0000-\u0009\u000b-\u001f\u007f]/g, " ")
      .slice(0, 4000)
      .trim(),
    website: asString(raw.website).slice(0, 200),
  };
}

export function validateContact(payload: ContactPayload): FieldErrors {
  const errors: FieldErrors = {};

  if (payload.name.length < 2) {
    errors.name = "Please enter your full name.";
  }
  if (!payload.email) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(payload.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (payload.message.length < 10) {
    errors.message = "Please tell us a little more — at least 10 characters.";
  }
  if (payload.service && !enquiryServices.includes(payload.service)) {
    errors.service = "Please choose one of the listed services.";
  }
  if (payload.sector && !enquirySectors.includes(payload.sector)) {
    errors.sector = "Please choose one of the listed sectors.";
  }

  return errors;
}

export const hasErrors = (errors: FieldErrors) =>
  Object.keys(errors).length > 0;
