import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import type { Locale } from "@/lib/i18n";

type PageMeta = {
  title: string;
  description: string;
  locale: Locale;
  /** Path of this page (canonical), e.g. "/projekte" */
  path: string;
  /** Path of the same page in the other locale */
  alternatePath: string;
  ogImage?: string;
};

export function buildMetadata({ title, description, locale, path, alternatePath, ogImage }: PageMeta): Metadata {
  const de = locale === "de" ? path : alternatePath;
  const en = locale === "en" ? path : alternatePath;
  const fullTitle = `${title} | studio more Architekten Stuttgart`;
  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: `${SITE_URL}${path}`,
      languages: {
        de: `${SITE_URL}${de}`,
        en: `${SITE_URL}${en}`,
        "x-default": `${SITE_URL}${de}`,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: `${SITE_URL}${path}`,
      siteName: "studio more Architekten PartGmbB",
      locale: locale === "de" ? "de_DE" : "en_GB",
      type: "website",
      images: ogImage ? [{ url: `${SITE_URL}${ogImage}` }] : undefined,
    },
  };
}
