import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { href, projectHref, type Locale } from "@/lib/i18n";
import { nav, ui, t } from "@/lib/dictionary";
import { imageSize } from "@/lib/images";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactCta } from "@/components/ContactCta";

/**
 * Research & teaching – confirmed content only (old website, team page):
 * teaching since 2018, "Entwerfen und Gebäudelehre" at TH Nürnberg
 * (Prof. Carola Dietrich), building materials science and integrative building
 * technology at the University of Stuttgart, materials research on natural
 * building materials, research building of the Cluster of Excellence
 * (University of Stuttgart) recognised as an IBA'27 project.
 */
const fields = [
  {
    title: { de: "Entwerfen und Gebäudelehre", en: "Design and building theory" },
    org: { de: "Technische Hochschule Nürnberg, bei Prof. Carola Dietrich", en: "Technical University of Nuremberg, with Prof. Carola Dietrich" },
    text: {
      de: "Lehre im architektonischen Entwerfen – räumliche Komposition, Typologie und die Frage, wie Gebäude unser Zusammenleben prägen.",
      en: "Teaching architectural design – spatial composition, typology and the question of how buildings shape the way we live together.",
    },
  },
  {
    title: { de: "Baustofflehre & integrative Gebäudetechnik", en: "Building materials & integrative building technology" },
    org: { de: "Universität Stuttgart", en: "University of Stuttgart" },
    text: {
      de: "Lehre und Forschung zu Baustoffen und integrativer Gebäudetechnik – die technische Grundlage für verantwortungsvolles Konstruieren.",
      en: "Teaching and research on building materials and integrative building technology – the technical foundation for responsible construction.",
    },
  },
  {
    title: { de: "Materialforschung", en: "Materials research" },
    org: { de: "Nachhaltige, natürliche Baustoffe", en: "Sustainable, natural building materials" },
    text: {
      de: "Materialforschung und -entwicklung mit dem Ziel, das Wissen um nachhaltige, natürliche Baustoffe und deren Einsatz voranzubringen.",
      en: "Materials research and development, advancing the knowledge and use of sustainable, natural building materials.",
    },
  },
  {
    title: { de: "Forschungsgebäude, Exzellenzcluster", en: "Research building, Cluster of Excellence" },
    org: { de: "Universität Stuttgart · IBA’27-Projekt", en: "University of Stuttgart · IBA’27 project" },
    text: {
      de: "studio more war Teil der Entwicklungs- und Ausführungsphase des Forschungsgebäudes des Exzellenzclusters der Universität Stuttgart – ein forschungsgetriebener Holzbau, der erfreulicherweise als IBA’27-Projekt anerkannt wurde.",
      en: "studio more was part of the development and realisation phase of the research building of the University of Stuttgart's Cluster of Excellence – a research-driven timber building, gladly recognised as an IBA’27 project.",
    },
  },
] as const;

export function ResearchPage({ locale }: { locale: Locale }) {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pt-36">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: t(ui.home, locale), href: href("home", locale) },
            { label: t(nav.research, locale) },
          ]}
        />
        <div className="mt-6 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1 className="font-display text-4xl text-ink md:text-5xl">{t(nav.research, locale)}</h1>
            <p className="mt-6 max-w-3xl text-lg text-ink/80">
              {locale === "de"
                ? "Seit 2018 ist die Lehre ein wichtiger Bestandteil von studio more. Forschung ist bei uns kein akademischer Nebenschauplatz, sondern Teil der architektonischen Praxis: Erkenntnisse aus Hochschule und Labor fließen unmittelbar in reale Bauprojekte – und die Erfahrungen von der Baustelle zurück in die Lehre."
                : "Teaching has been an important part of studio more since 2018. For us, research is not an academic sideline but part of architectural practice: findings from university and lab flow directly into real building projects – and experience from the building site feeds back into teaching."}
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-12 md:grid-cols-2">
          {fields.map((f, i) => (
            <section key={i} aria-labelledby={`field-${i}`} className="border-t-2 border-ink pt-4">
              <span aria-hidden="true" className="meta-label">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 id={`field-${i}`} className="font-display mt-2 text-2xl text-ink">
                {t(f.title, locale)}
              </h2>
              <p className="meta-label mt-1 !text-intervention">{t(f.org, locale)}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{t(f.text, locale)}</p>
            </section>
          ))}
        </div>

        <figure className="mt-20">
          <div className="grid gap-4 sm:grid-cols-2">
            <Image
              src="/images/projects/haus-m/modell-2.jpg"
              alt={locale === "de" ? "Arbeitsmodell aus dem Projekt Haus M" : "Working model from the Haus M project"}
              {...imageSize("/images/projects/haus-m/modell-2.jpg")}
              sizes="(min-width: 640px) 50vw, 100vw"
              className="aspect-[4/3] w-full object-cover"
            />
            <Image
              src="/images/projects/haus-m/mauerwerk.jpg"
              alt={
                locale === "de"
                  ? "Mauerwerksverbände mit ungebrannten Lehmsteinen, Projekt Haus M"
                  : "Masonry bonds with unfired clay bricks, Haus M project"
              }
              {...imageSize("/images/projects/haus-m/mauerwerk.jpg")}
              sizes="(min-width: 640px) 50vw, 100vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <figcaption className="mt-2 text-xs text-stone">
            {locale === "de"
              ? "Forschung am Objekt: Arbeitsmodelle und traditionelle Lehmziegel-Verbände aus dem Projekt Haus M."
              : "Research in practice: working models and traditional clay-brick bonds from the Haus M project."}
          </figcaption>
        </figure>

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="font-display text-2xl text-ink md:text-3xl">
              {locale === "de" ? "Warum Forschung Projekte besser macht" : "Why research makes projects better"}
            </h2>
            <p className="mt-4 max-w-2xl text-ink/75">
              {locale === "de"
                ? "Wer Baustoffe erforscht, wählt Materialien bewusster. Wer lehrt, muss Entwurfsentscheidungen präzise begründen. Und wer experimentelle Strukturen realisiert, weiß, wie weit sich Konstruktionen tragfähig denken lassen. Projekte wie Haus M – mit tragenden Lehmwänden und passiver Kühlung – oder der Pavillon S mit Fraunhofer IAO zeigen, wie dieser Kreislauf aus Forschung und Praxis gebaute Qualität erzeugt."
                : "Researching building materials means choosing them more consciously. Teaching means justifying design decisions precisely. And realising experimental structures means knowing how far construction can be pushed. Projects such as Haus M – with load-bearing mud walls and passive cooling – or Pavilion S with Fraunhofer IAO show how this cycle of research and practice produces built quality."}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <Link href={projectHref("haus-m", locale)} className="inline-flex items-center gap-1 font-medium text-intervention hover:underline">
                Haus M <ArrowRight size={14} aria-hidden="true" />
              </Link>
              <Link href={projectHref("pavillon-s", locale)} className="inline-flex items-center gap-1 font-medium text-intervention hover:underline">
                {locale === "de" ? "Pavillon S" : "Pavilion S"} <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ContactCta locale={locale} />
    </>
  );
}
