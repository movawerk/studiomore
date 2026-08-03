export type Locale = "de" | "en";

export const locales: Locale[] = ["de", "en"];
export const defaultLocale: Locale = "de";

/**
 * Static route map: German routes live at the root, English routes under /en
 * with localized path names. Used for navigation, the language switcher,
 * canonical URLs and hreflang alternates.
 */
export const routes = {
  home: { de: "/", en: "/en" },
  projects: { de: "/projekte", en: "/en/projects" },
  services: { de: "/leistungen", en: "/en/services" },
  studio: { de: "/buero", en: "/en/studio" },
  research: { de: "/forschung-und-lehre", en: "/en/research-and-teaching" },
  news: { de: "/aktuell", en: "/en/news" },
  faq: { de: "/faq", en: "/en/faq" },
  contact: { de: "/kontakt", en: "/en/contact" },
  imprint: { de: "/impressum", en: "/en/imprint" },
  privacy: { de: "/datenschutz", en: "/en/privacy" },
} as const;

export type RouteKey = keyof typeof routes;

export function href(key: RouteKey, locale: Locale): string {
  return routes[key][locale];
}

export function projectHref(slug: string, locale: Locale): string {
  return locale === "de" ? `/projekte/${slug}` : `/en/projects/${slug}`;
}

export function newsHref(slug: string, locale: Locale): string {
  return locale === "de" ? `/aktuell/${slug}` : `/en/news/${slug}`;
}

/** Returns the counterpart path in the other locale for a given static route key. */
export function alternates(key: RouteKey): { de: string; en: string } {
  return { de: routes[key].de, en: routes[key].en };
}

/** Maps a concrete pathname to its counterpart in the other locale. */
export function switchLocalePath(pathname: string, target: Locale): string {
  // Dynamic routes: project and news detail pages share slugs across locales.
  const projectDe = pathname.match(/^\/projekte\/([^/]+)\/?$/);
  if (projectDe) return target === "de" ? pathname : `/en/projects/${projectDe[1]}`;
  const projectEn = pathname.match(/^\/en\/projects\/([^/]+)\/?$/);
  if (projectEn) return target === "en" ? pathname : `/projekte/${projectEn[1]}`;
  const newsDe = pathname.match(/^\/aktuell\/([^/]+)\/?$/);
  if (newsDe) return target === "de" ? pathname : `/en/news/${newsDe[1]}`;
  const newsEn = pathname.match(/^\/en\/news\/([^/]+)\/?$/);
  if (newsEn) return target === "en" ? pathname : `/aktuell/${newsEn[1]}`;

  for (const key of Object.keys(routes) as RouteKey[]) {
    if (routes[key].de === pathname || routes[key].en === pathname) {
      return routes[key][target];
    }
  }
  // Fallback: home of the target locale.
  return target === "de" ? "/" : "/en";
}
