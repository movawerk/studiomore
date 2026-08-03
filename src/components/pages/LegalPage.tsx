import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { href, type Locale } from "@/lib/i18n";
import { nav, ui, t } from "@/lib/dictionary";
import { site } from "@/lib/site";

type LegalKind = "imprint" | "privacy";

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-ink/20 pt-5">
      <h2 className="font-display text-2xl text-ink">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-7 text-ink/75">{children}</div>
    </section>
  );
}

export function LegalPage({ locale, kind }: { locale: Locale; kind: LegalKind }) {
  const title = kind === "imprint" ? t(nav.imprint, locale) : t(nav.privacy, locale);
  return (
    <div className="mx-auto max-w-5xl px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pt-36">
      <Breadcrumbs
        locale={locale}
        items={[{ label: t(ui.home, locale), href: href("home", locale) }, { label: title }]}
      />
      <div className="mt-6 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="meta-label">studio more</p>
          <h1 className="font-display mt-3 text-4xl text-ink md:text-5xl">{title}</h1>
        </div>
        <div className="space-y-12 lg:col-span-8">
          {kind === "imprint" ? <Imprint locale={locale} /> : <Privacy locale={locale} />}
        </div>
      </div>
    </div>
  );
}

function Imprint({ locale }: { locale: Locale }) {
  return (
    <>
      <LegalSection title={locale === "de" ? "Angaben gemäß § 5 TMG" : "Provider information"}>
        {locale === "en" && <p>This English version is provided for convenience; the German version is authoritative.</p>}
        <address className="not-italic">
          {site.name}<br />
          Dr. Mostafa Aboughaly und Chiara Weiß, freie Architekten<br />
          {site.address.street}, {site.address.zip} {site.address.city}<br />
          T {site.phoneDisplay}<br />
          <a className="underline hover:text-intervention" href={`mailto:${site.email}`}>{site.email}</a>
        </address>
        <p>USt-IdNr: DE363996047<br />IdNr. 90319586279</p>
      </LegalSection>

      <LegalSection title={locale === "de" ? "Zuständige Kammer und Aufsichtsbehörde" : "Professional chamber and supervisory authority"}>
        <p>
          {locale === "de"
            ? "studio more Architekten PartGmbB ist Mitglied der Architektenkammer Baden-Württemberg."
            : "studio more Architekten PartGmbB is a member of the Baden-Württemberg Chamber of Architects."}
        </p>
        <address className="not-italic">
          Architektenkammer Baden-Württemberg<br />
          Danneckerstraße 54, 70182 Stuttgart<br />
          T +49 (0) 711 2196 0 · F +49 (0) 711 2196 101<br />
          info@akbw.de · <a className="underline hover:text-intervention" href="https://www.akbw.de" rel="noopener noreferrer">www.akbw.de</a>
        </address>
        <p>
          {locale === "de"
            ? "Die Berufsbezeichnung „Architekt“ wurde in der Bundesrepublik Deutschland verliehen. Die Berechtigung zur Führung der Berufsbezeichnung ergibt sich aus der Eintragung in die Architektenliste der Architektenkammer Baden-Württemberg."
            : "The professional title ‘Architekt’ was awarded in the Federal Republic of Germany. The right to use the title follows from registration with the Baden-Württemberg Chamber of Architects."}
        </p>
        <p>Chiara Weiß — Mitgliedsnummer AKBW 162793<br />Dr. Mostafa Aboughaly — Mitgliedsnummer AKBW 146117</p>
        <p>
          {locale === "de" ? "Berufsrechtliche Regelungen:" : "Professional regulations:"}{" "}
          <a className="underline hover:text-intervention" href="https://www.akbw.de/berufspolitik/recht/architektengesetz" rel="noopener noreferrer">Architektengesetz Baden-Württemberg</a>{" "}
          {locale === "de" ? "und" : "and"}{" "}
          <a className="underline hover:text-intervention" href="https://www.akbw.de/berufspolitik/recht/berufsordnung" rel="noopener noreferrer">Berufsordnung</a>.
        </p>
      </LegalSection>

      <LegalSection title={locale === "de" ? "Berufshaftpflichtversicherung" : "Professional indemnity insurance"}>
        <p>Markel Insurance SE, Nr. ON.MAI.28281</p>
      </LegalSection>

      <LegalSection title={locale === "de" ? "Urheberrecht" : "Copyright"}>
        <p>
          {locale === "de"
            ? "Alle auf dieser Website enthaltenen Inhalte, Textbeiträge und Abbildungen sind urheberrechtlich geschützt. Das Copyright liegt, soweit nicht anders angegeben, bei studio more Architekten PartGmbB. Downloads und Kopien sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Jede darüber hinausgehende Vervielfältigung, Bearbeitung, Verbreitung oder Verwertung bedarf der vorherigen schriftlichen Zustimmung der Rechteinhaber."
            : "All content, texts and images on this website are protected by copyright. Unless stated otherwise, copyright rests with studio more Architekten PartGmbB. Downloads and copies are permitted for private, non-commercial use only. Any further reproduction, editing, distribution or use requires prior written permission from the rights holders."}
        </p>
      </LegalSection>

      <LegalSection title={locale === "de" ? "Haftung für Links" : "External links"}>
        <p>
          {locale === "de"
            ? "Für Inhalte externer Websites, auf die wir verlinken, sind ausschließlich deren Betreiber verantwortlich. Zum Zeitpunkt der Verlinkung waren keine rechtswidrigen Inhalte erkennbar. Eine permanente Kontrolle externer Inhalte ist ohne konkrete Anhaltspunkte nicht zumutbar."
            : "The operators of external websites are solely responsible for their content. No unlawful content was apparent when the links were created. Permanent monitoring is not reasonable without specific indications of an infringement."}
        </p>
      </LegalSection>
    </>
  );
}

function Privacy({ locale }: { locale: Locale }) {
  return (
    <>
      {locale === "en" && <p className="text-sm text-ink/65">This English version is provided for convenience; the German version is authoritative.</p>}
      <LegalSection title={locale === "de" ? "1. Verantwortlicher" : "1. Controller"}>
        <address className="not-italic">
          {site.name}<br />
          {site.address.street}, {site.address.zip} {site.address.city}<br />
          T {site.phoneDisplay}<br />
          <a className="underline hover:text-intervention" href={`mailto:${site.email}`}>{site.email}</a>
        </address>
      </LegalSection>

      <LegalSection title={locale === "de" ? "2. Besuch unserer Website" : "2. Visiting this website"}>
        <p>
          {locale === "de"
            ? "Sie können diese Website ohne Registrierung aufrufen. Beim Aufruf verarbeitet der Hosting-Anbieter technisch erforderliche Verbindungsdaten, insbesondere IP-Adresse, Zeitpunkt, angeforderte Ressource, übertragene Datenmenge, Referrer und Browserinformationen, um die Website sicher und zuverlässig bereitzustellen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO."
            : "You can use this website without registering. When it is accessed, the hosting provider processes technically necessary connection data, in particular the IP address, time, requested resource, amount of data transferred, referrer and browser information, in order to provide the website securely and reliably. The legal basis is Art. 6(1)(f) GDPR."}
        </p>
      </LegalSection>

      <LegalSection title={locale === "de" ? "3. Kontaktaufnahme und Formular" : "3. Contact and enquiry form"}>
        <p>
          {locale === "de"
            ? "Wenn Sie uns per E-Mail, Telefon, WhatsApp oder über das Kontaktformular kontaktieren, verarbeiten wir die übermittelten Angaben zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bei vorvertraglicher oder vertraglicher Kommunikation und im Übrigen Art. 6 Abs. 1 lit. f DSGVO. Formulardaten werden über den konfigurierten E-Mail-Dienst an studio more übermittelt. Wir speichern die Angaben nur so lange, wie dies zur Bearbeitung und aufgrund gesetzlicher Aufbewahrungspflichten erforderlich ist."
            : "If you contact us by email, telephone, WhatsApp or via the enquiry form, we process the information you provide in order to handle your enquiry. The legal basis is Art. 6(1)(b) GDPR for pre-contractual or contractual communication and otherwise Art. 6(1)(f) GDPR. Form data is transmitted to studio more using the configured email service. We retain it only for as long as necessary to handle the enquiry and meet legal retention obligations."}
        </p>
        <p>
          {locale === "de"
            ? "Bitte beachten Sie, dass E-Mail- und WhatsApp-Kommunikation über Dienste Dritter erfolgt. Nutzen Sie für vertrauliche Inhalte einen mit uns abgestimmten sicheren Übertragungsweg."
            : "Please note that email and WhatsApp communications use third-party services. For confidential information, please agree a secure transmission method with us."}
        </p>
      </LegalSection>

      <LegalSection title={locale === "de" ? "4. Externe Links und soziale Medien" : "4. External links and social media"}>
        <p>
          {locale === "de"
            ? "Diese Website enthält lediglich Links zu Instagram und WhatsApp; Inhalte dieser Dienste werden nicht eingebettet. Erst wenn Sie einen solchen Link aufrufen, gelten die Datenschutzbestimmungen des jeweiligen Anbieters."
            : "This website only links to Instagram and WhatsApp; content from these services is not embedded. The respective provider’s privacy terms apply only after you follow such a link."}
        </p>
      </LegalSection>

      <LegalSection title={locale === "de" ? "5. Ihre Rechte" : "5. Your rights"}>
        <p>
          {locale === "de"
            ? "Unter den gesetzlichen Voraussetzungen haben Sie Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Sie haben außerdem das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren."
            : "Subject to the statutory requirements, you have rights of access, rectification, erasure, restriction of processing, data portability and objection. You may withdraw consent at any time with future effect. You also have the right to lodge a complaint with a data protection supervisory authority."}
        </p>
        <p>
          {locale === "de" ? "Anfragen richten Sie bitte an" : "Please direct requests to"}{" "}
          <a className="underline hover:text-intervention" href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </LegalSection>

      <p className="text-xs text-stone">
        {locale === "de" ? "Stand: August 2026" : "Last updated: August 2026"} ·{" "}
        <Link className="underline hover:text-intervention" href={href("imprint", locale)}>{t(nav.imprint, locale)}</Link>
      </p>
    </>
  );
}
