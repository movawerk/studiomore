import { Camera, Mail, MessageCircle, Phone } from "lucide-react";
import { href, type Locale } from "@/lib/i18n";
import { nav, ui, t } from "@/lib/dictionary";
import { site } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";

export function ContactPage({ locale }: { locale: Locale }) {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pt-36">
      <Breadcrumbs
        locale={locale}
        items={[
          { label: t(ui.home, locale), href: href("home", locale) },
          { label: t(nav.contact, locale) },
        ]}
      />
      <h1 className="font-display mt-6 text-4xl text-ink md:text-5xl">{t(nav.contact, locale)}</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink/75">
        {locale === "de"
          ? "Vorhaben oder Idee? Wir bieten kostenlose Erstgespräche an und freuen uns auf einen spannenden Austausch."
          : "A project or an idea? We offer free initial consultations and look forward to an inspiring exchange."}
      </p>

      <div className="mt-14 grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="meta-label">{locale === "de" ? "Büro" : "Office"}</h2>
          <div className="drawing-rule mt-3" aria-hidden="true" />
          {/* TODO (developer): confirm this address with the client before launch – see docs/CONTENT-TODO.md */}
          <address className="mt-4 text-sm not-italic leading-relaxed text-ink/80">
            {site.name}
            <br />
            {site.address.street}
            <br />
            {site.address.zip} {site.address.city}
            <br />
            {locale === "de" ? site.address.country : site.address.countryEn}
          </address>

          <h2 className="meta-label mt-10">{locale === "de" ? "Direkt erreichen" : "Reach us directly"}</h2>
          <div className="drawing-rule mt-3" aria-hidden="true" />
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 text-ink/85 transition-colors hover:text-intervention">
                <Mail size={15} aria-hidden="true" /> {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 text-ink/85 transition-colors hover:text-intervention">
                <Phone size={15} aria-hidden="true" /> {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-ink/85 transition-colors hover:text-intervention">
                <MessageCircle size={15} aria-hidden="true" /> WhatsApp
              </a>
            </li>
            <li>
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-ink/85 transition-colors hover:text-intervention">
                <Camera size={15} aria-hidden="true" /> Instagram
              </a>
            </li>
          </ul>

          <p className="mt-10 border-l-2 border-intervention pl-4 text-sm text-ink/75">
            {t(ui.freeConsultation, locale)} –{" "}
            {locale === "de"
              ? "unverbindlich und persönlich, im Büro, bei Ihnen vor Ort oder per Video."
              : "personal and without obligation, at our office, on site or via video call."}
          </p>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <h2 className="font-display text-2xl text-ink">
            {locale === "de" ? "Schreiben Sie uns" : "Write to us"}
          </h2>
          <div className="mt-6">
            <ContactForm locale={locale} />
          </div>
        </div>
      </div>
    </div>
  );
}
