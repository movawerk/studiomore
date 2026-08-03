import { href, type Locale } from "@/lib/i18n";
import { nav, ui, projectCategoryLabels, t } from "@/lib/dictionary";
import { imageSize } from "@/lib/images";
import { publishedProjects } from "@/data/projects";
import { projectTitle } from "@/components/ProjectCard";
import { ProjectsExplorer, type ExplorerProject } from "@/components/ProjectsExplorer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactCta } from "@/components/ContactCta";
import type { ProjectCategory } from "@/data/types";

export function ProjectsPage({ locale }: { locale: Locale }) {
  // Only offer filters for categories that actually contain projects.
  const usedCategories = (Object.keys(projectCategoryLabels) as ProjectCategory[]).filter((c) =>
    publishedProjects.some((p) => p.categories.includes(c)),
  );

  const explorerProjects: ExplorerProject[] = publishedProjects.map((p) => ({
    slug: p.slug,
    title: projectTitle(p, locale),
    categories: p.categories,
    categoryLabels: p.categories.map((c) => t(projectCategoryLabels[c], locale)),
    location: p.location ? t(p.location, locale) : undefined,
    period: p.period,
    image: p.heroImage
      ? { src: p.heroImage.src, alt: t(p.heroImage.alt, locale), ...imageSize(p.heroImage.src) }
      : undefined,
  }));

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pt-36">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: t(ui.home, locale), href: href("home", locale) },
            { label: t(nav.projects, locale) },
          ]}
        />
        <h1 className="font-display mt-6 text-4xl text-ink md:text-5xl">{t(nav.projects, locale)}</h1>
        <p className="mt-4 max-w-2xl text-ink/70">
          {locale === "de"
            ? "Umbau, Sanierung, Neubau und Experiment – eine Auswahl unserer Arbeiten zwischen Bestand und Zukunft."
            : "Conversion, refurbishment, new construction and experiment – a selection of our work between existing fabric and the future."}
        </p>
        <div className="mt-12">
          <ProjectsExplorer
            projects={explorerProjects}
            filters={usedCategories.map((c) => ({ id: c, label: t(projectCategoryLabels[c], locale) }))}
            locale={locale}
          />
        </div>
      </div>
      <ContactCta locale={locale} />
    </>
  );
}
