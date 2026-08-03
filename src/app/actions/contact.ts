"use server";

import { site } from "@/lib/site";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  /** Field-level validation errors, keyed by field name. */
  errors?: Record<string, string>;
  /** General message key resolved client-side per locale. */
  message?: "sent" | "invalid" | "unavailable" | "failed";
};

const PROJECT_TYPES = [
  "umbau-sanierung",
  "neubau",
  "machbarkeitsstudie",
  "gewerbe-kultur-institution",
  "zusammenarbeit",
  "sonstiges",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Handles the contact form.
 *
 * Sending requires environment variables (see README.md):
 * - RESEND_API_KEY   API key for https://resend.com (plain REST, no SDK)
 * - CONTACT_TO_EMAIL recipient (defaults to the studio address)
 * - CONTACT_FROM_EMAIL verified sender, e.g. "website@studio-more.de"
 *
 * Development fallback: if RESEND_API_KEY is not configured, the action
 * returns an explicit "unavailable" state and the UI asks the visitor to
 * e-mail the studio directly. A successful submission is NEVER simulated.
 */
export async function submitContact(_prev: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Honeypot: real users never fill this hidden field.
  if ((formData.get("website") as string)?.trim()) {
    // Pretend nothing happened for bots, without sending anything.
    return { status: "error", message: "failed" };
  }

  const name = ((formData.get("name") as string) ?? "").trim();
  const email = ((formData.get("email") as string) ?? "").trim();
  const phone = ((formData.get("phone") as string) ?? "").trim();
  const projectType = ((formData.get("projectType") as string) ?? "").trim();
  const projectLocation = ((formData.get("projectLocation") as string) ?? "").trim();
  const message = ((formData.get("message") as string) ?? "").trim();
  const consent = formData.get("consent");

  const errors: Record<string, string> = {};
  if (name.length < 2 || name.length > 200) errors.name = "name";
  if (!EMAIL_RE.test(email) || email.length > 320) errors.email = "email";
  if (phone && phone.length > 50) errors.phone = "phone";
  if (!PROJECT_TYPES.includes(projectType)) errors.projectType = "projectType";
  if (projectLocation.length < 2 || projectLocation.length > 200) errors.projectLocation = "projectLocation";
  if (message.length < 10 || message.length > 5000) errors.message = "message";
  if (consent !== "on") errors.consent = "consent";

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors, message: "invalid" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY is not configured – submission rejected (no fake success).");
    return { status: "error", message: "unavailable" };
  }

  const to = process.env.CONTACT_TO_EMAIL ?? site.email;
  const from = process.env.CONTACT_FROM_EMAIL ?? `website@studio-more.de`;

  const text = [
    `Neue Anfrage über das Kontaktformular`,
    ``,
    `Name: ${name}`,
    `E-Mail: ${email}`,
    phone ? `Telefon: ${phone}` : null,
    `Art des Vorhabens: ${projectType}`,
    `Ort des Vorhabens: ${projectLocation}`,
    ``,
    `Nachricht:`,
    message,
  ]
    .filter((l): l is string => l !== null)
    .join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Website-Anfrage: ${projectType} – ${name}`,
        text,
      }),
    });
    if (!res.ok) {
      console.error("[contact] Resend API error", res.status, await res.text());
      return { status: "error", message: "failed" };
    }
    return { status: "success", message: "sent" };
  } catch (err) {
    console.error("[contact] Sending failed", err);
    return { status: "error", message: "failed" };
  }
}
