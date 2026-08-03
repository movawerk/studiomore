import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import { geist, newsreader } from "@/lib/fonts";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { SITE_URL, site } from "@/lib/site";
import { ui, t } from "@/lib/dictionary";

export function LocaleDocument({ children, locale }: { children: ReactNode; locale: Locale }) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "ArchitecturalService",
    name: site.name,
    url: SITE_URL,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.zip,
      addressLocality: site.address.city,
      addressCountry: "DE",
    },
    founder: site.founders.map((name) => ({ "@type": "Person", name })),
  };

  return (
    <html lang={locale} className={`${geist.variable} ${newsreader.variable}`}>
      <body>
        <a
          href="#main-content"
          className="fixed left-3 top-3 z-[100] -translate-y-24 bg-ink px-4 py-2 text-sm text-warm-white transition-transform focus:translate-y-0"
        >
          {t(ui.skipToContent, locale)}
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
        <SiteHeader locale={locale} />
        <main id="main-content">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
