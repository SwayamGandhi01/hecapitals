import { NextResponse } from "next/server";

import { site } from "@/lib/site";
import {
  hasErrors,
  normaliseContactInput,
  validateContact,
} from "@/lib/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * In-memory, per-instance rate limit. It is deliberately simple: enough to
 * blunt casual abuse without pulling in a database. A serverless deployment
 * running many instances will enforce it per instance, which is acceptable
 * for a low-volume enquiry form.
 */
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const hits = new Map<string, number[]>();

function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS,
  );
  recent.push(now);
  hits.set(key, recent);

  // Keep the map from growing without bound on a long-lived instance.
  if (hits.size > 500) {
    for (const [existingKey, times] of hits) {
      if (times.every((time) => now - time >= RATE_LIMIT_WINDOW_MS)) {
        hits.delete(existingKey);
      }
    }
  }

  return recent.length > RATE_LIMIT_MAX;
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Could not read that request." },
      { status: 400 },
    );
  }

  const payload = normaliseContactInput(body);

  // Honeypot — silently accepted so a bot gets no signal, never delivered.
  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  const errors = validateContact(payload);
  if (hasErrors(errors)) {
    return NextResponse.json(
      { ok: false, errors, message: "Please check the highlighted fields." },
      { status: 400 },
    );
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Too many enquiries from this connection. Please try again shortly or call us directly.",
      },
      { status: 429 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  // No provider configured: report the failure honestly rather than showing
  // a success message for an email that was never sent.
  if (!apiKey || !to || !from) {
    console.error(
      "[contact] Email delivery is not configured. Set RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL.",
    );
    return NextResponse.json(
      {
        ok: false,
        code: "not_configured",
        message: `This form is not yet connected to an email service. Please email ${site.email} or call ${site.phone}.`,
      },
      { status: 503 },
    );
  }

  const rows: [string, string][] = [
    ["Name", payload.name],
    ["Email", payload.email],
    ["Company", payload.company || "—"],
    ["Phone", payload.phone || "—"],
    ["Service", payload.service || "—"],
    ["Sector", payload.sector || "—"],
  ];

  const html = [
    `<h2>New enquiry from ${escapeHtml(site.url)}</h2>`,
    "<table cellpadding='6' style='border-collapse:collapse'>",
    ...rows.map(
      ([label, value]) =>
        `<tr><td style="font-weight:600">${label}</td><td>${escapeHtml(value)}</td></tr>`,
    ),
    "</table>",
    "<h3>Message</h3>",
    `<p>${escapeHtml(payload.message).replace(/\n/g, "<br />")}</p>`,
  ].join("");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: payload.email,
        subject: `Website enquiry — ${payload.name}${
          payload.company ? ` (${payload.company})` : ""
        }`,
        html,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("[contact] Provider rejected the message:", detail);
      return NextResponse.json(
        {
          ok: false,
          message: `We could not send your message. Please email ${site.email} or call ${site.phone}.`,
        },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("[contact] Delivery failed:", error);
    return NextResponse.json(
      {
        ok: false,
        message: `We could not send your message. Please email ${site.email} or call ${site.phone}.`,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
