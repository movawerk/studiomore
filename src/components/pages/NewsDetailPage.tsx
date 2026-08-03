import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { href, projectHref, type Locale } from "@/lib/i18n";
import { nav, ui, t } from "@/lib/dictionary";
import { imageSize } from "@/lib/images";
import { newsCategoryLabels } from "@/data/news";
import { getProject } from "@/data/projects";
import { projectTitle } from "@/components/ProjectCard";
import type { NewsItem } from "@/data/types";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactCta } from "@/components/ContactCta";
import { formatDate } from "@/components/pages/HomePage";

export function NewsDetailPage({ item, locale }: { item: NewsItem; locale: Locale }) {
  const related = item.relatedProject ? getProject(item.relatedProject) : undefined;

  return (
    <>
      <article className="mx-auto max-w-4xl px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pt-36">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: t(ui.home, locale), href: href("home", locale) },
            { label: t(nav.news, locale), href: href("news", locale) },
            { label: t(item.title, locale) },
          ]}
        />
        <p className="meta-label mt-8">
          <time dateTime={item.date}>{formatDate(item.date, locale)}</time>
          {" · "}
          <span className="!text-intervention">{t(newsCategoryLabels[item.category], locale)}</span>
        </p>
        <h1 className="font-display mt-3 text-3xl text-ink md:text-5xl">{t(item.title, locale)}</h1>
        <p className="mt-4 max-w-2xl text-lg text-ink/75">{t(item.intro, locale)}</p>

        {item.image && (
          <figure className="mt-10">
            <Image
              src={item.image.src}
              alt={t(item.image.alt, locale)}
              {...imageSize(item.image.src)}
              loading="eager"
              sizes="(min-width: 896px) 832px, 100vw"
              className="max-h-[75svh] w-full object-cover"
            />
            {item.image.caption && (
              <figcaption className="mt-2 text-xs text-stone">{t(item.image.caption, locale)}</figcaption>
            )}
          </figure>
        )}

        <div className="mt-8 max-w-prose space-y-4 text-ink/80">
          {item.body?.map((p, i) => (
            <p key={i}>{t(p, locale)}</p>
          ))}
        </div>

        {item.gallery && item.gallery.length > 0 && (
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {item.gallery.map((img) => (
              <figure key={img.src}>
                <Image
                  src={img.src}
                  alt={t(img.alt, locale)}
                  {...imageSize(img.src)}
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="w-full object-cover"
                />
                {img.caption && <figcaption className="mt-2 text-xs text-stone">{t(img.caption, locale)}</figcaption>}
              </figure>
            ))}
          </div>
        )}

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-ink/15 pt-6 text-sm">
          <Link href={href("news", locale)} className="inline-flex items-center gap-2 font-medium text-ink/70 transition-colors hover:text-intervention">
            <ArrowLeft size={15} aria-hidden="true" /> {t(ui.backToNews, locale)}
          </Link>
          {related && (
            <Link
              href={projectHref(related.slug, locale)}
              className="inline-flex items-center gap-2 font-medium text-intervention hover:underline"
            >
              {t(ui.toProject, locale)}: {projectTitle(related, locale)} <ArrowRight size={15} aria-hidden="true" />
            </Link>
          )}
        </div>
      </article>
      <ContactCta locale={locale} />
    </>
  );
}
