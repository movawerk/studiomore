import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { href, projectHref, type Locale } from "@/lib/i18n";
import { nav, ui, t } from "@/lib/dictionary";
import { services } from "@/data/services";
import { faqGroups } from "@/data/faq";
import { getProject } from "@/data/projects";
import { projectTitle } from "@/components/ProjectCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactCta } from "@/components/ContactCta";
import { FAQGroup } from "@/components/FAQGroup";

/*
 * NOTE (developer): the exact planning scope (HOAI service phases) offered by
 * the office has servicePhaseStatus = "needs-confirmation" (src/data/services.ts).
 * Specific phase claims are deliberately NOT published here.
 */

const processSteps = [
  {
    de: ["Erstgespräch", "Kostenlos und unverbindlich: Wir hören zu, stellen Fragen und schätzen ein, was Ihr Vorhaben braucht."],
    en: ["Initial consultation", "Free and without obligation: we listen, ask questions and assess what your project needs."],
  },
  {
    de: ["Analyse & Studie", "Bestandsaufnahme, Prüfung der Rahmenbedingungen und erste Machbarkeitsüberlegungen schaffen Klarheit."],
    en: ["Analysis & study", "Building survey, review of the framework conditions and first feasibility considerations create clarity."],
  },
  {
    de: ["Entwurf", "Wir entwickeln räumliche Konzepte mit klarer Haltung – abgestimmt auf Ort, Budget und Bedürfnisse."],
    en: ["Design", "We develop spatial concepts with a clear position – tuned to place, budget and needs."],
  },
  {
    de: ["Genehmigung & Ausführungsplanung", "Wir bereiten die erforderlichen Unterlagen vor, stimmen uns mit Behörden ab und detaillieren die Planung."],
    en: ["Permits & detailed planning", "We prepare the required documents, coordinate with the authorities and detail the design."],
  },
  {
    de: ["Vergabe & Bau", "Ausschreibung, Angebotsvergleich und Bauüberwachung – bis zur Übergabe des fertigen Projekts."],
    en: ["Tender & construction", "Tendering, comparison of offers and site supervision – through to handover of the finished project."],
  },
] as const;

export function ServicesPage({ locale }: { locale: Locale }) {
  // A short, relevant FAQ selection for this page.
  const relevantFaq = faqGroups
    .find((g) => g.id === "kosten-leistungen")!
    .items.slice(0, 3)
    .map((item) => ({
      id: item.id,
      question: t(item.question, locale),
      answer: item.answer[locale],
    }));

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pt-36">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: t(ui.home, locale), href: href("home", locale) },
            { label: t(nav.services, locale) },
          ]}
        />
        <div className="mt-6 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h1 className="font-display text-4xl text-ink md:text-5xl">{t(nav.services, locale)}</h1>
            <p className="mt-5 max-w-2xl text-lg text-ink/75">
              {locale === "de"
                ? "Von der ersten Idee bis zum gebauten Ergebnis: Wir begleiten private Bauherrschaften, Projektentwickler und Institutionen bei Umbau, Sanierung, Neubau und Studien – mit besonderem Schwerpunkt auf dem Bauen im Bestand."
                : "From the first idea to the built result: we accompany private clients, developers and institutions through conversion, refurbishment, new construction and studies – with a particular focus on building within existing structures."}
            </p>
          </div>
        </div>

        {/* Service index */}
        <ol className="mt-16 space-y-0 border-t border-ink/15">
          {services.map((s) => {
            const linkedProjects = (s.projectSlugs ?? [])
              .map((slug) => getProject(slug))
              .filter((p): p is NonNullable<typeof p> => Boolean(p))
              .slice(0, 3);
            return (
              <li key={s.id} id={s.id} className="border-b border-ink/15 py-10">
                <div className="grid gap-6 md:grid-cols-12">
                  <span aria-hidden="true" className="font-display text-4xl text-intervention/60 md:col-span-2">
                    {s.index}
                  </span>
                  <div className="md:col-span-4">
                    <h2 className="font-display text-2xl text-ink md:text-3xl">{t(s.title, locale)}</h2>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-ink/75">{t(s.text, locale)}</p>
                    {linkedProjects.length > 0 && (
                      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm">
                        {linkedProjects.map((p) => (
                          <li key={p.slug}>
                            <Link href={projectHref(p.slug, locale)} className="text-intervention hover:underline">
                              {projectTitle(p, locale)} →
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Collaboration */}
        <section aria-labelledby="collab-title" className="mt-20 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="collab-title" className="font-display text-2xl text-ink md:text-3xl">
              {locale === "de" ? "Zusammenarbeit mit Fachplaner:innen" : "Working with specialist planners"}
            </h2>
            <div className="drawing-rule mt-4 max-w-32" aria-hidden="true" />
          </div>
          <p className="max-w-2xl text-ink/75 lg:col-span-8">
            {locale === "de"
              ? "Gute Gebäude entstehen im Team. Wir arbeiten eng mit Tragwerksplanung, Energieberatung und weiteren Fachdisziplinen zusammen und koordinieren alle Beteiligten – damit Entwurf, Technik und Ausführung ein stimmiges Ganzes ergeben. Kollaborationen mit weiteren Planenden und Ausführenden sind ausdrücklich willkommen."
              : "Good buildings are made by teams. We work closely with structural engineers, energy consultants and other disciplines and coordinate everyone involved – so that design, engineering and execution form a coherent whole. Collaborations with other planners and contractors are very welcome."}
          </p>
        </section>

        {/* Simplified process */}
        <section aria-labelledby="process-title" className="mt-20">
          <h2 id="process-title" className="font-display text-2xl text-ink md:text-3xl">
            {locale === "de" ? "So läuft Ihr Projekt ab" : "How your project unfolds"}
          </h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-5">
            {processSteps.map((step, i) => (
              <li key={i} className="border-t-2 border-intervention pt-3">
                <span className="meta-label" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 font-medium text-ink">{step[locale][0]}</h3>
                <p className="mt-2 text-sm text-ink/70">{step[locale][1]}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Relevant FAQ */}
        <section aria-labelledby="services-faq" className="mt-20">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <FAQGroup
                title={locale === "de" ? "Häufige Fragen zu Kosten und Leistungen" : "Frequent questions on costs and services"}
                items={relevantFaq}
              />
              <Link
                href={href("faq", locale)}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-intervention hover:underline"
              >
                {locale === "de" ? "Alle Fragen und Antworten" : "All questions and answers"}{" "}
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </div>
      <ContactCta locale={locale} />
    </>
  );
}
