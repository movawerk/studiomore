import Image from "next/image";
import Link from "next/link";
import { projectHref, type Locale } from "@/lib/i18n";
import { projectCategoryLabels, t } from "@/lib/dictionary";
import { imageSize } from "@/lib/images";
import type { Project } from "@/data/types";

export function projectTitle(project: Project, locale: Locale): string {
  return locale === "en" && project.titleEn ? project.titleEn : project.title;
}

export function ProjectCard({
  project,
  locale,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
}: {
  project: Project;
  locale: Locale;
  sizes?: string;
}) {
  const hero = project.heroImage;
  return (
    <article>
      <Link href={projectHref(project.slug, locale)} className="group block">
        {hero && (
          <div className="relative overflow-hidden bg-stone/20">
            <Image
              src={hero.src}
              alt={t(hero.alt, locale)}
              {...imageSize(hero.src)}
              sizes={sizes}
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        )}
        <div className="mt-3 flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl text-ink transition-colors group-hover:text-intervention">
            {projectTitle(project, locale)}
          </h3>
          {project.period && <span className="meta-label shrink-0">{project.period}</span>}
        </div>
        <p className="mt-1 text-sm text-ink/60">
          {project.categories.map((c) => t(projectCategoryLabels[c], locale)).join(" · ")}
          {project.location ? ` — ${t(project.location, locale)}` : ""}
        </p>
      </Link>
    </article>
  );
}
