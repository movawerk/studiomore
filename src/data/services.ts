import type { Localized } from "@/data/types";

/**
 * Services content, written client-friendly from verified statements on the
 * old website ("What do we do?" section and project pages).
 *
 * servicePhaseStatus: the old website mentions specific HOAI service phases
 * for new construction. The exact planning scope offered must be confirmed
 * by the client before specific HOAI phases are published.
 * See docs/CONTENT-TODO.md.
 */
export const servicePhaseStatus = "needs-confirmation" as const;

export type Service = {
  id: string;
  index: string;
  title: Localized;
  text: Localized;
  projectSlugs?: string[];
};

export const services: Service[] = [
  {
    id: "umbau-sanierung",
    index: "01",
    title: { de: "Umbau & Sanierung", en: "Conversion & refurbishment" },
    text: {
      de: "studio more ist auf den Umbau von Gebäudebestand nach aktuellen Anforderungen und Bedürfnissen spezialisiert. Gemeinsam mit Fachplaner:innen bieten wir diese Leistung vollumfänglich an – von der Bestandsaufnahme über die energetische Sanierung bis zur räumlichen Neuordnung.",
      en: "studio more specialises in converting existing buildings to meet current requirements and needs. Together with specialist planners, we offer this service in its entirety – from the building survey and energy refurbishment to spatial reorganisation.",
    },
    projectSlugs: ["haus-u5", "haus-k10", "haus-b36", "haus-c1"],
  },
  {
    id: "neubau",
    index: "02",
    title: { de: "Neubau", en: "New construction" },
    text: {
      de: "Wie kann man aus heutiger Sicht attraktiv neu bauen? Diese Frage beschäftigt uns aus nachhaltiger, wirtschaftlicher und entwerferischer Perspektive und prägt unsere Entwürfe für Neubauten – vom Wohnhaus bis zum hybriden Stadtbaustein. Kollaborationen mit weiteren Planenden und Ausführenden sind ausdrücklich willkommen.",
      en: "How can new buildings be attractive from today's perspective? This question drives us in terms of sustainability, economy and design, and shapes our new-build projects – from houses to hybrid urban buildings. Collaborations with other planners and contractors are very welcome.",
    },
    projectSlugs: ["haus-m41", "haus-m1", "k21-hotel-plus"],
  },
  {
    id: "studien-wettbewerbe",
    index: "03",
    title: { de: "Studien, Machbarkeit & Wettbewerbe", en: "Studies, feasibility & competitions" },
    text: {
      de: "Ob ein Grundstück trägt, ein Bestand sich lohnt oder ein Programm aufgeht – Studien und Machbarkeitsprüfungen schaffen früh Klarheit. Fundiertes Wissen und Umsetzungspraxis in Studien und Wettbewerben haben wir unter anderem durch die Mitarbeit in führenden Büros wie allmannwappner und COBE Berlin – Vanessa Carlow gesammelt.",
      en: "Whether a plot has potential, an existing building is worth keeping or a programme adds up – studies and feasibility checks create clarity early on. We gathered in-depth knowledge and hands-on experience in studies and competitions, among other things through working in leading offices such as allmannwappner and COBE Berlin – Vanessa Carlow.",
    },
    projectSlugs: ["pavillon-s", "k21-hotel-plus"],
  },
  {
    id: "planung-realisierung",
    index: "04",
    title: { de: "Planung & Realisierung", en: "Planning & realisation" },
    text: {
      de: "Wir begleiten Projekte von der ersten Idee bis zum gebauten Ergebnis: Entwurf, Genehmigung, Ausführungsplanung, Vergabe und Bauüberwachung – in enger Abstimmung mit Bauherrschaft, Fachplaner:innen und Handwerk. Den genauen Leistungsumfang definieren wir gemeinsam, passend zu Ihrem Vorhaben.",
      en: "We accompany projects from the first idea to the built result: design, permitting, detailed planning, tendering and site supervision – in close coordination with clients, specialist planners and trades. We define the exact scope together, tailored to your project.",
    },
    projectSlugs: ["haus-u5", "haus-k10"],
  },
  {
    id: "forschung-material",
    index: "05",
    title: { de: "Forschung & Materialentwicklung", en: "Research & material development" },
    text: {
      de: "Wir beschäftigen uns mit Materialforschung und -entwicklung mit dem Ziel, das Wissen um nachhaltige, natürliche Baustoffe und deren Einsatz voranzubringen. Erkenntnisse aus Lehre und Forschung fließen unmittelbar in unsere Bauprojekte zurück.",
      en: "We are engaged in materials research and development with the aim of advancing the knowledge and use of sustainable, natural building materials. Findings from teaching and research feed directly back into our building projects.",
    },
    projectSlugs: ["haus-m", "pavillon-s"],
  },
];
