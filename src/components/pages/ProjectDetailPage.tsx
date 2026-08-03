import Image from "next/image";
import { href, projectHref, type Locale } from "@/lib/i18n";
import { nav, ui, projectCategoryLabels, t } from "@/lib/dictionary";
import { imageSize } from "@/lib/images";
import { relatedProjects } from "@/data/projects";
import type { Project } from "@/data/types";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProjectFacts } from "@/components/ProjectFacts";
import { ProjectGallery, type GalleryRowData } from "@/components/ProjectGallery";
import { ProjectCard, projectTitle } from "@/components/ProjectCard";
import { ContactCta } from "@/components/ContactCta";
import { SITE_URL } from "@/lib/site";

export function ProjectDetailPage({ project, locale }: { project: Project; locale: Locale }) {
  const title = projectTitle(project, locale);
  const hero = project.heroImage;
  const related = relatedProjects(project);

  const galleryRows: GalleryRowData[] = project.gallery.map((row) => ({
    layout: row.layout,
    images: row.images.map((img) => ({
      src: img.src,
      alt: t(img.alt, locale),
      ...imageSize(img.src),
    })),
    caption: row.caption ? t(row.caption, locale) : undefined,
    legend: row.legend,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    url: `${SITE_URL}${projectHref(project.slug, locale)}`,
    ...(project.summary ? { description: t(project.summary, locale) } : {}),
    ...(hero ? { image: `${SITE_URL}${hero.src}` } : {}),
    creator: { "@type": "Organization", name: "studio more Architekten PartGmbB" },
    ...(project.location ? { locationCreated: { "@type": "Place", name: t(project.location, locale) } } : {}),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ---------------------------------------------------- Introduction */}
      <div className="mx-auto max-w-7xl px-4 pt-28 sm:px-6 lg:px-8 lg:pt-36">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: t(ui.home, locale), href: href("home", locale) },
            { label: t(nav.projects, locale), href: href("projects", locale) },
            { label: title },
          ]}
        />
        <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="meta-label">
              {project.categories.map((c) => t(projectCategoryLabels[c], locale)).join(" · ")}
            </p>
            <h1 className="font-display mt-3 text-4xl text-ink md:text-5xl">{title}</h1>
          </div>
          {project.summary && (
            <p className="max-w-xl text-ink/75 lg:col-span-4">{t(project.summary, locale)}</p>
          )}
        </div>
      </div>

      {hero && (
        <div className="mx-auto mt-10 max-w-[1600px] px-0 sm:px-4">
          <Image
            src={hero.src}
            alt={t(hero.alt, locale)}
            {...imageSize(hero.src)}
            loading="eager"
            sizes="100vw"
            className="max-h-[82svh] w-full object-cover"
          />
        </div>
      )}

      {/* ------------------------------------------- Facts + narrative */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* On mobile the facts come before the long narrative. */}
          <div className="order-1 lg:order-2 lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <ProjectFacts project={project} locale={locale} />
            </div>
          </div>
          <div className="order-2 space-y-10 lg:order-1 lg:col-span-7">
            {project.sections?.map((section) => (
              <section key={section.id} aria-labelledby={`section-${section.id}`}>
                <h2 id={`section-${section.id}`} className="font-display text-2xl text-ink">
                  {t(ui.sectionHeadings[section.id], locale)}
                </h2>
                <div className="drawing-rule mt-3 max-w-24" aria-hidden="true" />
                <p className="mt-4 max-w-prose text-ink/80">{t(section.text, locale)}</p>
              </section>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------- Gallery */}
      {galleryRows.length > 0 && (
        <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
          <ProjectGallery rows={galleryRows} locale={locale} />
        </div>
      )}

      {/* --------------------------------------------------------- Related */}
      {related.length > 0 && (
        <section aria-labelledby="related-title" className="border-t border-ink/10 bg-warm-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 id="related-title" className="font-display text-2xl text-ink md:text-3xl">
              {t(ui.relatedProjects, locale)}
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} locale={locale} />
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCta locale={locale} />
    </>
  );
}
