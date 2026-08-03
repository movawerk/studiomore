"use client";

import Link from "next/link";
import { useActionState } from "react";
import { href, type Locale } from "@/lib/i18n";
import { submitContact, type ContactFormState } from "@/app/actions/contact";
import { site } from "@/lib/site";

const initialState: ContactFormState = { status: "idle" };

const labels = {
  name: { de: "Name", en: "Name" },
  email: { de: "E-Mail", en: "Email" },
  phone: { de: "Telefon (optional)", en: "Phone (optional)" },
  projectType: { de: "Art des Vorhabens", en: "Type of project" },
  projectLocation: { de: "Ort des Vorhabens", en: "Project location" },
  message: { de: "Nachricht", en: "Message" },
  consent: {
    de: "Ich habe die Datenschutzerklärung gelesen und bin mit der Verarbeitung meiner Angaben zur Beantwortung meiner Anfrage einverstanden.",
    en: "I have read the privacy policy and consent to my details being processed in order to answer my enquiry.",
  },
  submit: { de: "Anfrage senden", en: "Send enquiry" },
  select: { de: "Bitte wählen", en: "Please choose" },
} as const;

const projectTypes = [
  { value: "umbau-sanierung", de: "Umbau / Sanierung", en: "Conversion / refurbishment" },
  { value: "neubau", de: "Neubau", en: "New construction" },
  { value: "machbarkeitsstudie", de: "Machbarkeitsstudie", en: "Feasibility study" },
  { value: "gewerbe-kultur-institution", de: "Gewerbe / Kultur / Institution", en: "Commercial / cultural / institutional" },
  { value: "zusammenarbeit", de: "Zusammenarbeit", en: "Collaboration" },
  { value: "sonstiges", de: "Sonstiges", en: "Other" },
] as const;

const fieldErrors = {
  name: { de: "Bitte geben Sie Ihren Namen an.", en: "Please enter your name." },
  email: { de: "Bitte geben Sie eine gültige E-Mail-Adresse an.", en: "Please enter a valid email address." },
  phone: { de: "Bitte prüfen Sie die Telefonnummer.", en: "Please check the phone number." },
  projectType: { de: "Bitte wählen Sie die Art des Vorhabens.", en: "Please choose the type of project." },
  projectLocation: { de: "Bitte geben Sie den Ort des Vorhabens an.", en: "Please enter the project location." },
  message: { de: "Bitte beschreiben Sie Ihr Vorhaben (mindestens 10 Zeichen).", en: "Please describe your project (at least 10 characters)." },
  consent: { de: "Bitte stimmen Sie der Datenverarbeitung zu.", en: "Please consent to the data processing." },
} as const;

const messages = {
  sent: {
    de: "Vielen Dank! Ihre Anfrage wurde gesendet. Wir melden uns zeitnah bei Ihnen.",
    en: "Thank you! Your enquiry has been sent. We will get back to you shortly.",
  },
  invalid: {
    de: "Bitte prüfen Sie die markierten Felder.",
    en: "Please check the highlighted fields.",
  },
  unavailable: {
    de: `Das Formular ist derzeit nicht verfügbar. Bitte schreiben Sie uns direkt an ${site.email}.`,
    en: `The form is currently unavailable. Please email us directly at ${site.email}.`,
  },
  failed: {
    de: `Das Senden ist leider fehlgeschlagen. Bitte versuchen Sie es erneut oder schreiben Sie an ${site.email}.`,
    en: `Sending failed. Please try again or email ${site.email}.`,
  },
} as const;

export function ContactForm({ locale }: { locale: Locale }) {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  const inputClass = (field: string) =>
    `w-full border bg-warm-white px-3 py-2.5 text-ink placeholder:text-stone focus:border-intervention ${
      state.errors?.[field] ? "border-intervention" : "border-ink/25"
    }`;

  const errorFor = (field: keyof typeof fieldErrors) =>
    state.errors?.[field] ? (
      <p id={`${field}-error`} className="mt-1 text-sm text-intervention">
        {fieldErrors[field][locale]}
      </p>
    ) : null;

  if (state.status === "success") {
    return (
      <p role="status" className="border border-ink/20 bg-warm-white p-6 text-ink">
        {messages.sent[locale]}
      </p>
    );
  }

  return (
    <form action={formAction} noValidate className="space-y-5">
      {state.status === "error" && state.message && state.message !== "invalid" && (
        <p role="alert" className="border border-intervention bg-intervention/10 p-4 text-sm text-ink">
          {messages[state.message][locale]}
        </p>
      )}
      {state.status === "error" && state.message === "invalid" && (
        <p role="alert" className="text-sm text-intervention">
          {messages.invalid[locale]}
        </p>
      )}

      {/* Honeypot – hidden from real users, including assistive technology */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium">
            {labels.name[locale]} *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            aria-invalid={Boolean(state.errors?.name)}
            aria-describedby={state.errors?.name ? "name-error" : undefined}
            className={inputClass("name")}
          />
          {errorFor("name")}
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium">
            {labels.email[locale]} *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            aria-invalid={Boolean(state.errors?.email)}
            aria-describedby={state.errors?.email ? "email-error" : undefined}
            className={inputClass("email")}
          />
          {errorFor("email")}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium">
            {labels.phone[locale]}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={Boolean(state.errors?.phone)}
            aria-describedby={state.errors?.phone ? "phone-error" : undefined}
            className={inputClass("phone")}
          />
          {errorFor("phone")}
        </div>
        <div>
          <label htmlFor="projectType" className="mb-1 block text-sm font-medium">
            {labels.projectType[locale]} *
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            defaultValue=""
            aria-invalid={Boolean(state.errors?.projectType)}
            aria-describedby={state.errors?.projectType ? "projectType-error" : undefined}
            className={inputClass("projectType")}
          >
            <option value="" disabled>
              {labels.select[locale]}
            </option>
            {projectTypes.map((pt) => (
              <option key={pt.value} value={pt.value}>
                {pt[locale]}
              </option>
            ))}
          </select>
          {errorFor("projectType")}
        </div>
      </div>

      <div>
        <label htmlFor="projectLocation" className="mb-1 block text-sm font-medium">
          {labels.projectLocation[locale]} *
        </label>
        <input
          id="projectLocation"
          name="projectLocation"
          type="text"
          required
          aria-invalid={Boolean(state.errors?.projectLocation)}
          aria-describedby={state.errors?.projectLocation ? "projectLocation-error" : undefined}
          className={inputClass("projectLocation")}
        />
        {errorFor("projectLocation")}
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          {labels.message[locale]} *
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          aria-invalid={Boolean(state.errors?.message)}
          aria-describedby={state.errors?.message ? "message-error" : undefined}
          className={inputClass("message")}
        />
        {errorFor("message")}
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            aria-invalid={Boolean(state.errors?.consent)}
            aria-describedby={state.errors?.consent ? "consent-error" : undefined}
            className="mt-1 h-4 w-4 shrink-0 accent-[#D95A4E]"
          />
          <label htmlFor="consent" className="text-sm text-ink/80">
            {locale === "de" ? "Ich habe die " : "I have read the "}
            <Link href={href("privacy", locale)} className="underline decoration-ink/30 underline-offset-2 hover:text-intervention">
              {locale === "de" ? "Datenschutzerklärung" : "privacy policy"}
            </Link>
            {locale === "de"
              ? " gelesen und bin mit der Verarbeitung meiner Angaben zur Beantwortung meiner Anfrage einverstanden."
              : " and consent to my details being processed in order to answer my enquiry."}{" "}
            *
          </label>
        </div>
        {errorFor("consent")}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="border border-ink bg-ink px-6 py-3 font-medium text-warm-white transition-colors hover:border-intervention hover:bg-intervention hover:text-ink disabled:opacity-60"
      >
        {pending ? (locale === "de" ? "Wird gesendet…" : "Sending…") : labels.submit[locale]}
      </button>
    </form>
  );
}
