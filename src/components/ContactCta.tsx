import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { href, type Locale } from "@/lib/i18n";
import { ui, t } from "@/lib/dictionary";
import { site } from "@/lib/site";

/** Generous final contact section, reused across pages. */
export function ContactCta({ locale }: { locale: Locale }) {
  return (
    <section aria-labelledby="contact-cta-title" className="bg-ink text-warm-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="meta-label !text-warm-white/50">{t(ui.freeConsultation, locale)}</p>
            <h2 id="contact-cta-title" className="font-display mt-4 text-4xl text-warm-white md:text-5xl">
              {t(ui.contactCtaTitle, locale)}
            </h2>
            <p className="mt-5 max-w-xl text-warm-white/80">{t(ui.contactCtaText, locale)}</p>
            <Link
              href={href("contact", locale)}
              className="mt-8 inline-flex border border-intervention bg-intervention px-6 py-3 font-medium text-ink transition-colors hover:bg-transparent hover:text-intervention"
            >
              {t(ui.bookConsultation, locale)}
            </Link>
          </div>
          <div className="flex flex-col justify-end gap-3 text-sm lg:col-span-5 lg:items-end">
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 text-warm-white/80 transition-colors hover:text-intervention">
              <Mail size={15} aria-hidden="true" /> {site.email}
            </a>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 text-warm-white/80 transition-colors hover:text-intervention">
              <Phone size={15} aria-hidden="true" /> {site.phoneDisplay}
            </a>
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-warm-white/80 transition-colors hover:text-intervention">
              <MessageCircle size={15} aria-hidden="true" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
