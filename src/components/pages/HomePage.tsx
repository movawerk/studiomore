import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { href, projectHref, newsHref, type Locale } from "@/lib/i18n";
import { ui, nav, projectCategoryLabels, t } from "@/lib/dictionary";
import { imageSize } from "@/lib/images";
import { featuredProjects, getProject } from "@/data/projects";
import { publishedNews, newsCategoryLabels } from "@/data/news";
import { services } from "@/data/services";
import { principles } from "@/data/team";
import { projectTitle } from "@/components/ProjectCard";
import { PlanLegend } from "@/components/PlanLegend";
import { ContactCta } from "@/components/ContactCta";
import type { Project } from "@/data/types";

const copy = {
  heroStatement: {
    de: "Architektur, die Bestehendes weiterdenkt.",
    en: "Architecture that rethinks what exists.",
  },
  heroSupport: {
    de: "studio more verbindet räumliche Qualität, Verantwortung und Forschung – von der ersten Idee bis zum gebauten Ergebnis.",
    en: "studio more connects spatial quality, responsibility and research – from the first idea to the built result.",
  },
  featuredLabel: { de: "Ausgewähltes Projekt", en: "Featured project" },
  selectedTitle: { de: "Ausgewählte Projekte", en: "Selected projects" },
  signatureLabel: { de: "Weiterbauen statt ersetzen", en: "Building on, not replacing" },
  signatureTitle: {
    de: "Haus U5 – ein Bestand aus den 1950ern, neu gedacht",
    en: "Haus U5 – a 1950s building, rethought",
  },
  signatureExisting: {
    de: "Ausgangslage: Ein Einfamilienhaus aus den 1950er-Jahren, geschossweise genutzt, räumlich und energetisch nicht mehr zeitgemäß.",
    en: "Existing condition: a 1950s detached house, used storey by storey, no longer adequate in spatial or energy terms.",
  },
  signatureIntervention: {
    de: "Eingriff: Der Durchbruch der Bestandsdecke über dem Keller öffnet den Wohnraum zum Garten und vernetzt Innen und Außen auf mehreren neuen Ebenen.",
    en: "Intervention: breaking through the existing slab above the basement opens the living space towards the garden, connecting inside and outside across several new levels.",
  },
  signatureQuality: {
    de: "Räumliche Qualität: Die Höhenniveaus zonieren, ohne zu separieren; die Sitztreppe wird zum erweiterten Wohnzimmer und Treffpunkt des Hauses.",
    en: "Spatial quality: the levels zone without separating; the seating staircase becomes an extended living room and the meeting point of the house.",
  },
  signatureEnergy: {
    de: "Energetische Maßnahmen: Wärmepumpe, Dreifachverglasung mit außenliegendem Sonnenschutz, Dämmung von Dach, Boden und Außenwand.",
    en: "Energy measures: heat pump, triple glazing with external sun protection, insulation of roof, floor and external walls.",
  },
  notationNote: {
    de: "Unsere Pläne sprechen eine klare Sprache: Schwarz zeigt den Bestand, Studio-Rosa den neuen Eingriff, Gelb den Abriss.",
    en: "Our drawings speak a clear language: black shows the existing fabric, studio pink the new intervention, yellow the demolition.",
  },
  servicesLabel: { de: "Leistungen", en: "Services" },
  servicesTitle: { de: "Vom Bestand bis zur Materialforschung", en: "From existing buildings to material research" },
  researchLabel: { de: "Forschung & Praxis", en: "Research & practice" },
  researchTitle: {
    de: "Ein Büro zwischen Baustelle und Hochschule",
    en: "A studio between building site and university",
  },
  researchText: {
    de: "Seit 2018 ist die Lehre fester Bestandteil von studio more – an der Technischen Hochschule Nürnberg und an der Universität Stuttgart in Baustofflehre und integrativer Gebäudetechnik. Die Materialforschung zu nachhaltigen, natürlichen Baustoffen fließt unmittelbar in unsere Bauprojekte zurück: Was wir erforschen, bauen wir – und was wir bauen, hinterfragen wir.",
    en: "Teaching has been part of studio more since 2018 – at the Technical University of Nuremberg and at the University of Stuttgart in building materials and integrative building technology. Our research into sustainable, natural building materials feeds directly back into our projects: what we research, we build – and what we build, we question.",
  },
  researchFounders: {
    de: "Gegründet wurde studio more 2023 in Stuttgart von Dr. Mostafa Aboughaly und Chiara Weiß – beide lehren, forschen und bauen.",
    en: "studio more was founded in Stuttgart in 2023 by Dr Mostafa Aboughaly and Chiara Weiß – both teach, research and build.",
  },
  aktuellTitle: { de: "Aktuell", en: "News" },
} as const;

export function HomePage({ locale }: { locale: Locale }) {
  const heroProject = getProject("haus-u5")!;
  const hero = heroProject.heroImage!;
  const heroDims = imageSize(hero.src);
  const signature = getProject("haus-u5")!;
  const selected = featuredProjects;
  const latestNews = publishedNews.slice(0, 3);

  return (
    <>
      {/* ------------------------------------------------------------ Hero */}
      <section className="relative min-h-svh overflow-hidden bg-ink" aria-labelledby="hero-title">
        <Image
          src={hero.src}
          alt={t(hero.alt, locale)}
          {...heroDims}
          loading="eager"
          sizes="100vw"
          className="hero-image absolute inset-0 h-full w-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,23,22,.82)_0%,rgba(23,23,22,.48)_48%,rgba(23,23,22,.12)_100%)]" />
        <div aria-hidden="true" className="architectural-grid absolute inset-0 opacity-35" />
        <div aria-hidden="true" className="outline-word absolute -right-[0.04em] top-[8vh] text-[clamp(8rem,24vw,23rem)] leading-none">
          more
        </div>

        <div className="relative mx-auto flex min-h-svh w-full max-w-[1600px] flex-col px-4 pb-8 pt-28 sm:px-6 lg:px-10 lg:pb-10 lg:pt-32">
          <div className="grid grid-cols-12 border-t border-warm-white/35 pt-3 text-warm-white/70">
            <p className="meta-label !text-warm-white/70 col-span-8 sm:col-span-6">
              {t(copy.featuredLabel, locale)} / {projectTitle(heroProject, locale)}
            </p>
            <p className="meta-label !text-warm-white/70 col-span-4 text-right sm:col-span-3 sm:col-start-10">
              01 / 06
            </p>
          </div>

          <div className="mt-auto grid grid-cols-12 items-end gap-y-8 pb-10 pt-32 lg:gap-x-6 lg:pb-14">
            <div className="col-span-12 lg:col-span-9">
              <p className="meta-label !text-drawing-yellow mb-5">
                {heroProject.categories
                  .slice(0, 1)
                  .map((c) => t(projectCategoryLabels[c], locale))
                  .join("")}
                {heroProject.location ? ` — ${t(heroProject.location, locale)}` : ""}
              </p>
              <h1
                id="hero-title"
                className="font-display max-w-5xl text-[clamp(3.25rem,8.1vw,8rem)] leading-[0.87] text-warm-white"
              >
                {locale === "de" ? (
                  <>Architektur, die<br /><span className="text-intervention">Bestehendes</span><br />weiterdenkt.</>
                ) : (
                  <>Architecture that<br /><span className="text-intervention">rethinks</span><br />what exists.</>
                )}
              </h1>
            </div>

            <div className="col-span-12 border-l border-warm-white/40 pl-4 sm:col-span-8 lg:col-span-3 lg:pl-6">
              <p className="text-base leading-relaxed text-warm-white/85">{t(copy.heroSupport, locale)}</p>
              <div className="mt-7 flex flex-col items-start gap-3">
                <Link
                  href={href("contact", locale)}
                  className="group inline-flex items-center gap-3 border border-intervention bg-intervention px-5 py-3 font-medium text-ink transition-colors hover:bg-transparent hover:text-warm-white"
                >
                  {t(nav.cta, locale)} <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
                <Link
                  href={href("projects", locale)}
                  className="inline-flex items-center gap-3 py-2 text-sm font-medium text-warm-white underline decoration-warm-white/40 underline-offset-4 transition-colors hover:text-intervention"
                >
                  {t(ui.discoverProjects, locale)}
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 items-end border-t border-warm-white/35 pt-3">
            <p className="meta-label !text-warm-white/60 col-span-6">
              studio more / Stuttgart / 2023—
            </p>
            <div aria-hidden="true" className="col-span-6 flex items-center justify-end gap-3 text-warm-white/70">
              <span className="meta-label !text-warm-white/60 hidden sm:inline">{t(ui.scrollDown, locale)}</span>
              <ArrowDown className="animate-nudge" size={18} />
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- Positioning */}
      <section className="relative overflow-hidden" aria-labelledby="positioning-title">
        <div aria-hidden="true" className="absolute -left-[0.05em] top-[-0.12em] select-none font-display text-[clamp(12rem,34vw,34rem)] leading-none text-ink/[0.035]">
          more
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="meta-label">02 / {locale === "de" ? "Haltung" : "Position"}</p>
              <div className="drawing-rule mt-3 max-w-40" aria-hidden="true" />
            </div>
            <div className="lg:col-span-9">
              <h2 id="positioning-title" className="font-display max-w-4xl text-[clamp(2.25rem,5vw,4.75rem)] leading-[1.02] text-ink">
              {locale === "de"
                ? "Für uns ist Architektur mehr als Bauen – ein Werkzeug, um Konventionen zu hinterfragen und Räume mit Bedeutung zu schaffen."
                : "For us, architecture is more than construction – a tool to challenge conventions and create spaces that matter."}
              </h2>
              <p className="mt-8 max-w-2xl text-lg text-ink/70">
              {locale === "de"
                ? "Unsere Projekte reichen von Umbau und energetischer Sanierung über Wohnhäuser und hybride Stadtbausteine bis zu Pavillons und experimentellen Strukturen. Jeder Entwurf basiert auf architektonischer Forschung – und ist zugleich fest in realen Bedürfnissen und Randbedingungen verankert. Mit weniger mehr schaffen: daher der Name studio more."
                : "Our projects range from conversion and energy refurbishment to houses, hybrid urban buildings, pavilions and experimental structures. Every design is rooted in architectural research – and grounded in real needs and constraints. Making more with less: hence the name, studio more."}
              </p>
            </div>
          </div>

          <ol className="mt-20 border-t border-ink/25 lg:ml-[25%]">
            {principles.map((p, i) => (
              <li key={p.id} className="group grid gap-3 border-b border-ink/20 py-7 sm:grid-cols-12 sm:items-baseline sm:gap-6 lg:py-9">
                <span className="meta-label !text-intervention-ink sm:col-span-1" aria-hidden="true">0{i + 1}</span>
                <h3 className="font-display text-2xl text-ink transition-transform duration-300 group-hover:translate-x-2 sm:col-span-4 lg:text-3xl">
                  {p.title}
                </h3>
                <p className="max-w-xl text-sm leading-relaxed text-ink/70 sm:col-span-7">{t(p.text, locale)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ----------------------------------------------- Selected projects */}
      <section className="relative overflow-hidden bg-warm-white" aria-labelledby="selected-title">
        <div aria-hidden="true" className="absolute bottom-0 left-0 top-0 w-1 bg-intervention md:w-2" />
        <div className="mx-auto max-w-[1500px] px-4 py-24 sm:px-6 lg:px-10 lg:py-36">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-3">
              <p className="meta-label">03 / {locale === "de" ? "Werkverzeichnis" : "Works index"}</p>
              <p className="mt-3 text-sm text-ink/55">06 / {String(selected.length).padStart(2, "0")}</p>
            </div>
            <div className="lg:col-span-7">
              <h2 id="selected-title" className="font-display text-[clamp(3rem,7vw,7rem)] leading-[0.9] text-ink">
                {locale === "de" ? <>Ausgewählte<br /><em className="font-normal text-intervention-ink">Projekte</em></> : <>Selected<br /><em className="font-normal text-intervention-ink">projects</em></>}
              </h2>
            </div>
            <div className="lg:col-span-2 lg:text-right">
              <Link
                href={href("projects", locale)}
                className="group inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-medium text-ink transition-colors hover:border-intervention hover:text-intervention"
              >
                {t(ui.allProjects, locale)} <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-12 lg:gap-x-10 lg:gap-y-24">
            {selected.map((project, i) => {
              const layout = [
                "md:col-span-8",
                "md:col-span-4 md:mt-28",
                "md:col-span-4",
                "md:col-span-8 md:mt-20",
                "md:col-span-7",
                "md:col-span-5 md:mt-32",
              ][i];
              const portrait = i === 1 || i === 2 || i === 5;
              return (
                <div key={project.slug} className={layout}>
                  <HomeProject project={project} locale={locale} index={i + 1} portrait={portrait} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --------------------------------------- Weiterbauen statt ersetzen */}
      <section className="relative overflow-hidden bg-sand" aria-labelledby="signature-title">
        <div aria-hidden="true" className="material-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <p className="meta-label lg:col-span-3">04 / {t(copy.signatureLabel, locale)}</p>
            <h2 id="signature-title" className="font-display max-w-4xl text-[clamp(2.75rem,6vw,6rem)] leading-[0.94] text-ink lg:col-span-9">
              {t(copy.signatureTitle, locale)}
            </h2>
          </div>

          <div className="mt-16 grid gap-16 lg:grid-cols-12 lg:gap-10">
            <div className="order-2 lg:order-1 lg:col-span-5 lg:pt-20">
              <ol className="border-t border-ink/25">
                {(
                  [
                    [copy.signatureExisting, "text-ink"],
                    [copy.signatureIntervention, "text-intervention-ink"],
                    [copy.signatureQuality, "text-intervention-ink"],
                    [copy.signatureEnergy, "text-drawing-yellow"],
                  ] as const
                ).map(([entry, color], i) => (
                  <li key={i} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-ink/20 py-5">
                    <span className={`font-display text-xl ${color}`} aria-hidden="true">0{i + 1}</span>
                    <p className="text-sm leading-relaxed text-ink/75">{t(entry, locale)}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-7 border-l-2 border-intervention pl-4">
                <p className="text-sm text-ink/60">{t(copy.notationNote, locale)}</p>
                <PlanLegend locale={locale} className="mt-3" />
              </div>
              <Link
                href={projectHref(signature.slug, locale)}
                className="group mt-8 inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-medium text-ink transition-colors hover:border-intervention hover:text-intervention"
              >
                {t(ui.toProject, locale)}: {projectTitle(signature, locale)} <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-7">
              <div className="relative pb-6 sm:pb-20 lg:pb-28">
                <figure className="ml-auto w-[92%] sm:w-[86%]">
                  <Image
                    src="/images/projects/haus-u5/render-sitztreppe.jpg"
                    alt={locale === "de" ? "Haus U5 – Sitztreppe als erweitertes Wohnzimmer" : "Haus U5 – seating staircase as an extended living room"}
                    {...imageSize("/images/projects/haus-u5/render-sitztreppe.jpg")}
                    sizes="(min-width: 1024px) 52vw, 92vw"
                    className="aspect-[4/5] w-full object-cover sm:aspect-[4/3]"
                  />
                  <figcaption className="mt-2 text-xs text-ink/50">
                    {locale === "de" ? "Der Eingriff wird zum bewohnbaren Raum." : "The intervention becomes inhabitable space."}
                  </figcaption>
                </figure>

                <div className="mt-5 grid grid-cols-2 gap-2 border border-ink/20 bg-warm-white p-3 sm:absolute sm:-bottom-2 sm:left-0 sm:mt-0 sm:w-[72%] sm:gap-4 sm:p-5">
                  <figure>
                    <Image
                      src="/images/projects/haus-u5/schnitt-bestand.png"
                      alt={locale === "de" ? "Haus U5, Schnitt Bestand" : "Haus U5, section of the existing building"}
                      {...imageSize("/images/projects/haus-u5/schnitt-bestand.png")}
                      sizes="(min-width: 1024px) 20vw, 45vw"
                      className="w-full"
                    />
                    <figcaption className="meta-label mt-2">01 / {locale === "de" ? "Bestand" : "Existing"}</figcaption>
                  </figure>
                  <figure>
                    <Image
                      src="/images/projects/haus-u5/schnitt-umbau.png"
                      alt={locale === "de" ? "Haus U5, Schnitt Umbau – Bestand schwarz, Eingriff rosa, Abriss gelb" : "Haus U5, section of the conversion – existing black, intervention pink, demolition yellow"}
                      {...imageSize("/images/projects/haus-u5/schnitt-umbau.png")}
                      sizes="(min-width: 1024px) 20vw, 45vw"
                      className="w-full"
                    />
                    <figcaption className="meta-label mt-2 !text-intervention-ink">02 / {locale === "de" ? "Eingriff" : "Intervention"}</figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- Services */}
      <section className="relative overflow-hidden bg-deep-clay text-warm-white" aria-labelledby="services-title">
        <div aria-hidden="true" className="outline-word absolute -bottom-[0.25em] -left-[0.04em] text-[clamp(12rem,37vw,36rem)] leading-none opacity-25">05</div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <p className="meta-label !text-warm-white/60 lg:col-span-3">05 / {t(copy.servicesLabel, locale)}</p>
            <h2 id="services-title" className="font-display text-[clamp(2.75rem,6vw,6rem)] leading-[0.94] lg:col-span-7">
              {t(copy.servicesTitle, locale)}
            </h2>
            <div className="lg:col-span-2 lg:text-right">
              <Link href={href("services", locale)} className="group inline-flex items-center gap-2 border-b border-warm-white/50 pb-1 text-sm font-medium text-warm-white hover:border-intervention hover:text-intervention">
                {t(nav.services, locale)} <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <ol className="mt-16 border-t border-warm-white/30 lg:ml-[25%]">
            {services.map((s) => (
              <li key={s.id} className="group border-b border-warm-white/25">
                <div className="grid gap-4 py-7 md:grid-cols-12 md:items-baseline md:gap-6 lg:py-9">
                  <span className="font-display text-2xl text-intervention md:col-span-1" aria-hidden="true">{s.index}</span>
                  <h3 className="font-display text-2xl transition-transform duration-300 group-hover:translate-x-2 md:col-span-5 lg:text-3xl">{t(s.title, locale)}</h3>
                  <p className="text-sm leading-relaxed text-warm-white/70 md:col-span-6">{t(s.text, locale)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ------------------------------------------------ Research & studio */}
      <section className="relative overflow-hidden" aria-labelledby="research-title">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5 lg:col-start-2">
              <p className="meta-label">06 / {t(copy.researchLabel, locale)}</p>
              <h2 id="research-title" className="font-display mt-5 text-[clamp(2.75rem,5vw,5rem)] leading-[0.96] text-ink">
              {t(copy.researchTitle, locale)}
              </h2>
              <div className="mt-8 border-l border-ink/30 pl-5">
                <p className="text-ink/75">{t(copy.researchText, locale)}</p>
                <p className="mt-4 text-ink/75">{t(copy.researchFounders, locale)}</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                <Link href={href("research", locale)} className="group inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-medium text-ink hover:border-intervention hover:text-intervention">
                  {t(nav.research, locale)} <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
                <Link href={href("studio", locale)} className="group inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-medium text-ink hover:border-intervention hover:text-intervention">
                  {t(nav.studio, locale)} <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="relative pb-16 lg:col-span-5 lg:pb-24">
              <figure className="ml-auto w-[88%]">
                <Image
                  src="/images/projects/haus-m/modell-1.jpg"
                  alt={locale === "de" ? "Arbeitsmodell aus dem Projekt Haus M zur Analyse der Hitzeverteilung" : "Working model from the Haus M project analysing heat distribution"}
                  {...imageSize("/images/projects/haus-m/modell-1.jpg")}
                  sizes="(min-width: 1024px) 38vw, 88vw"
                  className="aspect-[4/5] w-full object-cover"
                />
              </figure>
              <figure className="absolute bottom-0 left-0 w-[52%] border-[10px] border-paper sm:border-[14px]">
                <Image
                  src="/images/projects/haus-m/mauerwerk.jpg"
                  alt={locale === "de" ? "Mauerwerksstudien aus ungebrannten Lehmsteinen" : "Masonry studies using unfired clay bricks"}
                  {...imageSize("/images/projects/haus-m/mauerwerk.jpg")}
                  sizes="(min-width: 1024px) 20vw, 48vw"
                  className="aspect-square w-full object-cover"
                />
                <figcaption className="meta-label bg-paper pt-2">Haus M / {locale === "de" ? "Materialstudie" : "Material study"}</figcaption>
              </figure>
              <div aria-hidden="true" className="absolute right-0 top-1/4 h-20 w-2 bg-drawing-yellow sm:-right-3 sm:h-32" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Aktuell */}
      <section className="border-t border-ink/15 bg-warm-white" aria-labelledby="news-title">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <p className="meta-label lg:col-span-3">07 / {locale === "de" ? "Journal" : "Journal"}</p>
            <h2 id="news-title" className="font-display text-[clamp(3rem,6vw,6rem)] leading-none text-ink lg:col-span-7">
              {t(copy.aktuellTitle, locale)}
            </h2>
            <div className="lg:col-span-2 lg:text-right">
              <Link href={href("news", locale)} className="group inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-medium text-ink hover:border-intervention hover:text-intervention">
                {t(ui.newsArchive, locale)} <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-12">
            {latestNews[0] && (
              <article className="lg:col-span-7">
                <NewsTeaser item={latestNews[0]} locale={locale} large />
              </article>
            )}
            <div className="space-y-10 lg:col-span-5 lg:border-l lg:border-ink/20 lg:pl-10">
              {latestNews.slice(1).map((item, i) => (
                <article key={item.slug} className={i > 0 ? "border-t border-ink/20 pt-10" : ""}>
                  <NewsTeaser item={item} locale={locale} />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCta locale={locale} />
    </>
  );
}

function HomeProject({
  project,
  locale,
  index,
  portrait,
}: {
  project: Project;
  locale: Locale;
  index: number;
  portrait: boolean;
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
              sizes={portrait ? "(min-width: 768px) 34vw, 100vw" : "(min-width: 768px) 66vw, 100vw"}
              className={`home-project-image w-full object-cover ${portrait ? "aspect-[4/5]" : "aspect-[16/10]"}`}
            />
            <span className="absolute left-0 top-0 bg-warm-white px-3 py-2 font-display text-xl text-ink" aria-hidden="true">
              {String(index).padStart(2, "0")}
            </span>
            <span aria-hidden="true" className="absolute bottom-0 right-0 h-0 w-0 border-b-[30px] border-l-[30px] border-b-intervention border-l-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        )}
        <div className="mt-4 grid grid-cols-[1fr_auto] items-baseline gap-4 border-t border-ink/25 pt-3">
          <h3 className="font-display text-2xl text-ink transition-colors group-hover:text-intervention lg:text-3xl">
            {projectTitle(project, locale)}
          </h3>
          {project.period && <span className="meta-label">{project.period}</span>}
        </div>
        <p className="mt-2 text-sm text-ink/60">
          {project.categories.map((category) => t(projectCategoryLabels[category], locale)).join(" · ")}
          {project.location ? ` — ${t(project.location, locale)}` : ""}
        </p>
      </Link>
    </article>
  );
}

function NewsTeaser({ item, locale, large = false }: { item: (typeof publishedNews)[number]; locale: Locale; large?: boolean }) {
  return (
    <Link href={newsHref(item.slug, locale)} className="group block">
      {item.image && (
        <div className="overflow-hidden">
          <Image
            src={item.image.src}
            alt={t(item.image.alt, locale)}
            {...imageSize(item.image.src)}
            sizes={large ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 35vw, 100vw"}
            className={`home-project-image w-full object-cover ${large ? "aspect-[16/10]" : "aspect-[16/8]"}`}
          />
        </div>
      )}
      <p className="meta-label mt-4">
        <time dateTime={item.date}>{formatDate(item.date, locale)}</time>
        {" · "}{t(newsCategoryLabels[item.category], locale)}
      </p>
      <h3 className={`mt-2 font-display text-ink transition-colors group-hover:text-intervention ${large ? "text-3xl lg:text-4xl" : "text-2xl"}`}>
        {t(item.title, locale)}
      </h3>
      <p className="mt-2 max-w-xl text-sm text-ink/65">{t(item.intro, locale)}</p>
    </Link>
  );
}

export function formatDate(iso: string, locale: Locale): string {
  return new Date(iso).toLocaleDateString(locale === "de" ? "de-DE" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
