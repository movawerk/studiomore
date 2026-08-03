import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import { ui, t } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items, locale }: { items: Crumb[]; locale: Locale }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  };

  return (
    <nav aria-label={t(ui.breadcrumb, locale)} className="text-xs text-stone">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true">→</span>}
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-intervention">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink/70">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
