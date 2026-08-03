import type { Locale } from "@/lib/i18n";
import { ui, projectCategoryLabels, t } from "@/lib/dictionary";
import type { Project } from "@/data/types";

/** Drawing-style fact sheet. Unknown values are omitted entirely. */
export function ProjectFacts({ project, locale }: { project: Project; locale: Locale }) {
  const rows: { label: string; value: string }[] = [];
  if (project.period) rows.push({ label: t(ui.period, locale), value: project.period });
  if (project.location) rows.push({ label: t(ui.location, locale), value: t(project.location, locale) });
  if (project.clientType) rows.push({ label: t(ui.client, locale), value: t(project.clientType, locale) });
  if (project.use) rows.push({ label: t(ui.use, locale), value: t(project.use, locale) });
  if (project.scope) rows.push({ label: t(ui.scope, locale), value: t(project.scope, locale) });
  if (project.status) rows.push({ label: t(ui.status, locale), value: t(project.status, locale) });
  rows.push({
    label: t(ui.category, locale),
    value: project.categories.map((c) => t(projectCategoryLabels[c], locale)).join(", "),
  });

  return (
    <aside aria-label={t(ui.facts, locale)}>
      <h2 className="meta-label">{t(ui.facts, locale)}</h2>
      <div className="drawing-rule mt-3" aria-hidden="true" />
      <dl className="mt-4 space-y-3 text-sm">
        {rows.map((row) => (
          <div key={row.label} className="grid grid-cols-[7.5rem_1fr] gap-2">
            <dt className="text-stone">{row.label}</dt>
            <dd className="text-ink">{row.value}</dd>
          </div>
        ))}
        {project.collaborators && project.collaborators.length > 0 && (
          <div className="grid grid-cols-[7.5rem_1fr] gap-2">
            <dt className="text-stone">{t(ui.collaborators, locale)}</dt>
            <dd className="text-ink">
              <ul className="space-y-1">
                {project.collaborators.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </dd>
          </div>
        )}
      </dl>
    </aside>
  );
}
