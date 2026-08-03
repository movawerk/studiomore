"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useMemo, useState } from "react";
import { LayoutGrid, Rows3 } from "lucide-react";
import { projectHref, type Locale } from "@/lib/i18n";
import { ui, t } from "@/lib/dictionary";

export type ExplorerProject = {
  slug: string;
  title: string;
  categories: string[];
  categoryLabels: string[];
  location?: string;
  period?: string;
  image?: { src: string; alt: string; width: number; height: number };
};

export type ExplorerFilter = { id: string; label: string };

/**
 * Accessible project archive with category filters and grid/list view.
 * Filters are semantic buttons, keyboard operable; the result count is
 * announced via a live region. Card heights are fixed to avoid layout shifts.
 */
export function ProjectsExplorer({
  projects,
  filters,
  locale,
}: {
  projects: ExplorerProject[];
  filters: ExplorerFilter[];
  locale: Locale;
}) {
  const [active, setActive] = useState<string>("all");
  const [view, setView] = useState<"grid" | "list">("grid");
  const listId = useId();

  const visible = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.categories.includes(active))),
    [active, projects],
  );

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div role="group" aria-label={t(ui.filterProjects, locale)} className="flex flex-wrap gap-2">
          {[{ id: "all", label: t(ui.all, locale) }, ...filters].map((f) => {
            const isActive = active === f.id;
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={isActive}
                aria-controls={listId}
                onClick={() => setActive(f.id)}
                className={`border px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? "border-intervention bg-intervention text-ink"
                    : "border-ink/25 text-ink/80 hover:border-intervention hover:text-intervention"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <div className="flex gap-1" role="group" aria-label={`${t(ui.gridView, locale)} / ${t(ui.listView, locale)}`}>
          <button
            type="button"
            aria-pressed={view === "grid"}
            aria-label={t(ui.gridView, locale)}
            onClick={() => setView("grid")}
            className={`flex h-10 w-10 items-center justify-center border transition-colors ${
              view === "grid" ? "border-ink bg-ink text-warm-white" : "border-ink/25 text-ink/60 hover:text-ink"
            }`}
          >
            <LayoutGrid size={16} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-pressed={view === "list"}
            aria-label={t(ui.listView, locale)}
            onClick={() => setView("list")}
            className={`flex h-10 w-10 items-center justify-center border transition-colors ${
              view === "list" ? "border-ink bg-ink text-warm-white" : "border-ink/25 text-ink/60 hover:text-ink"
            }`}
          >
            <Rows3 size={16} aria-hidden="true" />
          </button>
        </div>
      </div>

      <p aria-live="polite" className="sr-only">
        {visible.length} {locale === "de" ? "Projekte" : "projects"}
      </p>

      {visible.length === 0 ? (
        <p className="mt-10 text-ink/70">{t(ui.noResults, locale)}</p>
      ) : view === "grid" ? (
        <ul id={listId} className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <li key={p.slug} className={i % 5 === 0 ? "sm:col-span-2 lg:col-span-2" : ""}>
              <Link href={projectHref(p.slug, locale)} className="group block">
                {p.image && (
                  <span className="block overflow-hidden bg-stone/20">
                    <Image
                      src={p.image.src}
                      alt={p.image.alt}
                      width={p.image.width}
                      height={p.image.height}
                      sizes={
                        i % 5 === 0
                          ? "(min-width: 1024px) 66vw, 100vw"
                          : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      }
                      className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] ${
                        i % 5 === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                      }`}
                    />
                  </span>
                )}
                <span className="mt-3 flex items-baseline justify-between gap-3">
                  <span className="font-display text-xl text-ink transition-colors group-hover:text-intervention">{p.title}</span>
                  {p.period && <span className="meta-label shrink-0">{p.period}</span>}
                </span>
                <span className="mt-1 block text-sm text-ink/60">
                  {p.categoryLabels.join(" · ")}
                  {p.location ? ` — ${p.location}` : ""}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <ul id={listId} className="mt-10 border-t border-ink/15">
          {visible.map((p) => (
            <li key={p.slug} className="border-b border-ink/15">
              <Link
                href={projectHref(p.slug, locale)}
                className="group grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1 py-4 sm:grid-cols-[minmax(0,2fr)_minmax(0,2fr)_minmax(0,1fr)_auto]"
              >
                <span className="font-display text-lg text-ink transition-colors group-hover:text-intervention">{p.title}</span>
                <span className="col-span-2 text-sm text-ink/60 sm:col-span-1">{p.categoryLabels.join(" · ")}</span>
                <span className="hidden text-sm text-ink/60 sm:block">{p.location ?? ""}</span>
                <span className="meta-label justify-self-end">{p.period ?? ""}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
