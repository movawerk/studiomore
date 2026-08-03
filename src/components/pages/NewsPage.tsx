import Image from "next/image";
import Link from "next/link";
import { href, newsHref, type Locale } from "@/lib/i18n";
import { nav, ui, t } from "@/lib/dictionary";
import { imageSize } from "@/lib/images";
import { publishedNews, newsCategoryLabels } from "@/data/news";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactCta } from "@/components/ContactCta";
import { formatDate } from "@/components/pages/HomePage";

export function NewsPage({ locale }: { locale: Locale }) {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pt-36">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: t(ui.home, locale), href: href("home", locale) },
            { label: t(nav.news, locale) },
          ]}
        />
        <h1 className="font-display mt-6 text-4xl text-ink md:text-5xl">{t(nav.news, locale)}</h1>
        <p className="mt-4 max-w-2xl text-ink/70">
          {locale === "de"
            ? "Baustellen, Projektmeilensteine, Lehre und Exkursionen – Notizen aus dem Büroalltag."
            : "Construction sites, project milestones, teaching and excursions – notes from the studio."}
        </p>

        <ul className="mt-12 border-t border-ink/15">
          {publishedNews.map((item) => (
            <li key={item.slug} className="border-b border-ink/15">
              <Link
                href={newsHref(item.slug, locale)}
                className="group grid gap-6 py-8 md:grid-cols-12 md:items-center"
              >
                <div className="md:col-span-3">
                  <p className="meta-label">
                    <time dateTime={item.date}>{formatDate(item.date, locale)}</time>
                  </p>
                  <p className="meta-label mt-1 !text-intervention">
                    {t(newsCategoryLabels[item.category], locale)}
                  </p>
                </div>
                <div className="md:col-span-6">
                  <h2 className="font-display text-2xl text-ink transition-colors group-hover:text-intervention">
                    {t(item.title, locale)}
                  </h2>
                  <p className="mt-2 text-sm text-ink/70">{t(item.intro, locale)}</p>
                </div>
                {item.image && (
                  <div className="md:col-span-3">
                    <Image
                      src={item.image.src}
                      alt={t(item.image.alt, locale)}
                      {...imageSize(item.image.src)}
                      sizes="(min-width: 768px) 25vw, 100vw"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ContactCta locale={locale} />
    </>
  );
}
