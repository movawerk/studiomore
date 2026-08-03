import Link from "next/link";
import { Camera, Mail, MessageCircle, Phone } from "lucide-react";
import { href, type Locale } from "@/lib/i18n";
import { nav, ui, t } from "@/lib/dictionary";
import { site } from "@/lib/site";

export function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink/15 bg-warm-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-2xl text-ink">
              studio<span className="text-intervention">&nbsp;more</span>
            </p>
            <p className="mt-2 max-w-sm text-sm text-ink/70">
              {locale === "de"
                ? "Architektur und „more“ in Stuttgart – Umbau, Sanierung, Neubau, Forschung."
                : "Architecture and ‘more’ in Stuttgart – conversion, refurbishment, new construction, research."}
            </p>
            <address className="mt-6 text-sm not-italic leading-relaxed text-ink/70">
              {site.name}
              <br />
              {site.address.street}, {site.address.zip} {site.address.city}
              <br />
              {locale === "de" ? site.address.country : site.address.countryEn}
            </address>
          </div>

          <nav aria-label={t(ui.mainNavigation, locale)} className="md:col-span-3">
            <p className="meta-label">{locale === "de" ? "Navigation" : "Navigation"}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {(
                [
                  ["projects", nav.projects],
                  ["services", nav.services],
                  ["studio", nav.studio],
                  ["research", nav.research],
                  ["news", nav.news],
                  ["faq", nav.faq],
                  ["contact", nav.contact],
                ] as const
              ).map(([key, label]) => (
                <li key={key}>
                  <Link href={href(key, locale)} className="text-ink/80 transition-colors hover:text-intervention">
                    {t(label, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="meta-label">{t(nav.contact, locale)}</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 text-ink/80 transition-colors hover:text-intervention">
                  <Mail size={15} aria-hidden="true" /> {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 text-ink/80 transition-colors hover:text-intervention">
                  <Phone size={15} aria-hidden="true" /> {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={site.whatsappUrl} rel="noopener noreferrer" target="_blank" className="inline-flex items-center gap-2 text-ink/80 transition-colors hover:text-intervention">
                  <MessageCircle size={15} aria-hidden="true" /> WhatsApp
                </a>
              </li>
              <li>
                <a href={site.instagramUrl} rel="noopener noreferrer" target="_blank" className="inline-flex items-center gap-2 text-ink/80 transition-colors hover:text-intervention">
                  <Camera size={15} aria-hidden="true" /> Instagram
                </a>
              </li>
            </ul>
            <p className="mt-6 text-sm text-ink/70">{t(ui.freeConsultation, locale)}</p>
          </div>
        </div>

        <div className="drawing-rule mt-12" aria-hidden="true" />

        <div className="mt-6 flex flex-col gap-3 text-xs text-stone sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}
          </p>
          <p className="flex gap-4">
            <Link href={href("imprint", locale)} className="transition-colors hover:text-intervention">
              {t(nav.imprint, locale)}
            </Link>
            <Link href={href("privacy", locale)} className="transition-colors hover:text-intervention">
              {t(nav.privacy, locale)}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
