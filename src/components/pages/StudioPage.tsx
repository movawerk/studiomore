import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { href, type Locale } from "@/lib/i18n";
import { nav, ui, t } from "@/lib/dictionary";
import { imageSize } from "@/lib/images";
import { founders, teamMembers, principles } from "@/data/team";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactCta } from "@/components/ContactCta";

const milestones = [
  {
    year: "2017/18",
    de: "Beginn der Lehrtätigkeit der Gründer:innen – architektonischer Entwurf, experimentelles Bauen und Gebäudelehre.",
    en: "The founders begin teaching – architectural design, experimental construction and building theory.",
  },
  {
    year: "2023",
    de: "Gründung von studio more Architekten PartGmbB in Stuttgart durch Mostafa Aboughaly und Chiara Weiß.",
    en: "studio more Architekten PartGmbB is founded in Stuttgart by Mostafa Aboughaly and Chiara Weiß.",
  },
  {
    year: "2023–",
    de: "Umbauten, energetische Sanierungen und Neubauten für private Bauherrschaften – u. a. Haus U5, Haus K10 und Haus C1 über alle Leistungsphasen.",
    en: "Conversions, energy refurbishments and new buildings for private clients – including Haus U5, Haus K10 and Haus C1 across the full planning scope.",
  },
  {
    year: "IBA’27",
    de: "Mitwirkung an Entwicklung und Ausführung des Forschungsgebäudes des Exzellenzclusters der Universität Stuttgart, anerkannt als IBA’27-Projekt.",
    en: "Involvement in the development and realisation of the research building of the University of Stuttgart's Cluster of Excellence, recognised as an IBA’27 project.",
  },
] as const;

export function StudioPage({ locale }: { locale: Locale }) {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pt-36">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: t(ui.home, locale), href: href("home", locale) },
            { label: t(nav.studio, locale) },
          ]}
        />

        {/* Introduction */}
        <div className="mt-6 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1 className="font-display text-4xl text-ink md:text-5xl">
              {locale === "de" ? "Büro" : "Studio"}
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-ink/80">
              {locale === "de"
                ? "studio more ist ein zeitgenössisches Architekturbüro, 2023 in Stuttgart gegründet. Wir sind ein junges, engagiertes Team von Architekt:innen, das die gebaute Umwelt durch innovative, nachhaltige und kontextbezogene Architektur neu denkt und gestaltet."
                : "studio more is a contemporary architecture office, founded in Stuttgart in 2023. We are a young, committed team of architects rethinking and shaping the built environment through innovative, sustainable and contextual architecture."}
            </p>
            <p className="mt-4 max-w-3xl text-ink/75">
              {locale === "de"
                ? "Für uns ist Architektur mehr als Bauen – sie ist ein Werkzeug, um Leben zu verbessern, Konventionen zu hinterfragen und Räume mit Bedeutung zu schaffen. Unsere Projekte reichen von Wohnhäusern und kulturellen Bauten bis zu Pavillons und experimentellen Strukturen, in denen wir neue Materialien und Konstruktionsweisen erforschen. Jeder Entwurf basiert auf architektonischer Forschung – und ist zugleich fest im Alltag verankert."
                : "For us, architecture is more than construction – it is a tool to improve lives, challenge conventions and create spaces that matter. Our work spans residential and cultural projects, pavilions and experimental structures exploring new materials and methods of making. Every design is rooted in architectural research, yet grounded in everyday reality."}
            </p>
            <p className="mt-4 max-w-3xl text-ink/75">
              {locale === "de"
                ? "Eine wichtige Aufgabe besteht derzeit in der Dekarbonisierung unserer gebauten und neu zu bauenden Umwelt: Umbauten und energetische Sanierungen von Bestandsgebäuden sind essenzieller Teil unserer Arbeit. Mit weniger mehr schaffen – daher der Name studio more."
                : "A key task today is the decarbonisation of our built environment: conversions and energy refurbishments of existing buildings are an essential part of our work. Making more with less – hence the name, studio more."}
            </p>
          </div>
        </div>

        {/* Principles */}
        <section aria-labelledby="principles-title" className="mt-20">
          <h2 id="principles-title" className="meta-label">
            {locale === "de" ? "Drei Prinzipien" : "Three principles"}
          </h2>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            {principles.map((p, i) => (
              <div key={p.id} className="border-t-2 border-intervention pt-4">
                <span aria-hidden="true" className="meta-label">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-2 text-2xl text-ink">{p.title}</h3>
                <p className="mt-3 text-sm text-ink/75">{t(p.text, locale)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Founders */}
        <section aria-labelledby="founders-title" className="mt-20">
          <h2 id="founders-title" className="font-display text-3xl text-ink md:text-4xl">
            {t(ui.founders, locale)}
          </h2>
          <div className="mt-10 grid gap-14 lg:grid-cols-2">
            {founders.map((f) => (
              <article key={f.name}>
                <h3 className="font-display text-2xl text-ink">{f.name}</h3>
                <p className="meta-label mt-1">{t(f.role, locale)}</p>
                <div className="drawing-rule mt-4" aria-hidden="true" />
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-ink/80">
                  {f.bio[locale].map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Team */}
        <section aria-labelledby="team-title" className="mt-20">
          <h2 id="team-title" className="font-display text-3xl text-ink md:text-4xl">
            {t(ui.team, locale)}
          </h2>
          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-ink/15 pt-6 sm:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((name) => (
              <li key={name} className="text-ink/85">
                {name}
              </li>
            ))}
          </ul>
        </section>

        {/* Collaboration + milestones */}
        <section aria-labelledby="collab-title" className="mt-20 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="collab-title" className="font-display text-2xl text-ink md:text-3xl">
              {locale === "de" ? "Zusammenarbeit" : "Collaboration"}
            </h2>
            <p className="mt-4 text-ink/75">
              {locale === "de"
                ? "Mit Sitz im Herzen von Stuttgart arbeiten wir mit Bauherr:innen, Forscher:innen und Institutionen in ganz Deutschland und darüber hinaus zusammen. Unser wachsendes Portfolio spiegelt unsere zentralen Werte wider: Klarheit, Verantwortung und das Streben nach architektonischer Qualität."
                : "Based in the heart of Stuttgart, we collaborate with clients, researchers and institutions across Germany and beyond. Our growing portfolio reflects our core values: clarity, responsibility and the pursuit of architectural quality."}
            </p>
            <p className="mt-4 text-ink/75">
              {locale === "de"
                ? "Wenn Sie Architekt:innen suchen, die kritisch denken, kreativ bauen und Innovation genauso schätzen wie handwerkliche Qualität – sprechen Sie uns an."
                : "If you're looking for architects who think critically, build creatively and value innovation as much as craft — let's talk."}
            </p>
            <Link
              href={href("contact", locale)}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-intervention hover:underline"
            >
              {t(nav.cta, locale)} <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl text-ink md:text-3xl">
              {locale === "de" ? "Ausgewählte Stationen" : "Selected milestones"}
            </h2>
            <ol className="mt-6 border-t border-ink/15">
              {milestones.map((m) => (
                <li key={m.year} className="grid grid-cols-[6rem_1fr] gap-4 border-b border-ink/15 py-4">
                  <span className="meta-label !text-intervention">{m.year}</span>
                  <p className="text-sm text-ink/80">{m[locale]}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Studio image */}
        <figure className="mt-20">
          <Image
            src="/images/projects/haus-u5/foto-wohnraum.jpg"
            alt={
              locale === "de"
                ? "Umbau Haus U5 – gebautes Ergebnis eines studio-more-Projekts"
                : "Haus U5 conversion – built result of a studio more project"
            }
            {...imageSize("/images/projects/haus-u5/foto-wohnraum.jpg")}
            sizes="(min-width: 1280px) 1120px, 100vw"
            className="max-h-[70svh] w-full object-cover"
          />
          <figcaption className="mt-2 text-xs text-stone">
            {locale === "de" ? "Umbau Haus U5, Stuttgart." : "Haus U5 conversion, Stuttgart."}
          </figcaption>
        </figure>
      </div>
      <ContactCta locale={locale} />
    </>
  );
}
