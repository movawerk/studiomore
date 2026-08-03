import type { Locale } from "@/lib/i18n";
import { ui, t } from "@/lib/dictionary";

/**
 * Textual legend for drawings using the office's notation:
 * black = existing fabric, coral = new intervention, yellow = demolition.
 * Colour is never the only carrier of information – each swatch is labelled.
 */
export function PlanLegend({ locale, className = "" }: { locale: Locale; className?: string }) {
  const entries = [
    { color: "bg-ink", label: t(ui.legendExisting, locale) },
    { color: "bg-intervention", label: t(ui.legendNew, locale) },
    { color: "bg-drawing-yellow", label: t(ui.legendDemolition, locale) },
  ];
  return (
    <dl aria-label={t(ui.legendTitle, locale)} className={`flex flex-wrap items-center gap-x-5 gap-y-1 ${className}`}>
      {entries.map((e) => (
        <div key={e.label} className="flex items-center gap-2">
          <dt className="flex items-center gap-2">
            <span aria-hidden="true" className={`inline-block h-2.5 w-2.5 ${e.color}`} />
            <span className="sr-only">{t(ui.legendTitle, locale)}:</span>
          </dt>
          <dd className="meta-label !text-ink/60">{e.label}</dd>
        </div>
      ))}
    </dl>
  );
}
