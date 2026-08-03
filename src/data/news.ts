import type { NewsItem } from "@/data/types";

/**
 * News migrated from the "Aktuell" section of studio-more.de.
 * Wording lightly polished, no new factual claims.
 */
export const news: NewsItem[] = [
  {
    slug: "haus-u5-baustelle-januar-2025",
    date: "2025-03-06",
    category: "baustelle",
    title: {
      de: "Baustellenupdate Haus U5, Januar 2025",
      en: "Construction update Haus U5, January 2025",
    },
    intro: {
      de: "Die Bauarbeiten in unserem Projekt Haus U5 in Stuttgart gehen fleißig voran – nun stehen die Feinarbeiten an.",
      en: "Construction on our Haus U5 project in Stuttgart is progressing steadily – the finishing works are now underway.",
    },
    body: [
      {
        de: "Die Bauarbeiten in unserem Projekt „Haus U5“ in Stuttgart gehen fleißig voran. Nun stehen die Feinarbeiten an. Das gesamte Umbauvorhaben kann auf der Projektseite angesehen werden.",
        en: "Construction work on our ‘Haus U5’ project in Stuttgart is progressing steadily. The finishing works are now underway. The entire conversion project can be viewed on the project page.",
      },
    ],
    image: {
      src: "/images/news/haus-u5-baustelle-2025-01/ausbau.jpg",
      alt: { de: "Ausbauzustand Haus U5, Januar 2025", en: "Fit-out state of Haus U5, January 2025" },
      kind: "construction",
    },
    gallery: [
      {
        src: "/images/news/haus-u5-baustelle-2025-01/treppe.jpg",
        alt: { de: "Neue Treppe im Rohzustand, Haus U5", en: "New staircase in shell state, Haus U5" },
        caption: { de: "Update, Januar 2025", en: "Update, January 2025" },
        kind: "construction",
      },
    ],
    relatedProject: "haus-u5",
    published: true,
  },
  {
    slug: "haus-u5-baustelle-september-2024",
    date: "2024-09-08",
    category: "baustelle",
    title: {
      de: "Baustellenupdate Haus U5, September 2024",
      en: "Construction update Haus U5, September 2024",
    },
    intro: {
      de: "Die Abrissarbeiten in unserem Projekt Haus U5 in Stuttgart gehen voran – die Öffnungen für die neue Küche sind gesetzt.",
      en: "Demolition work on our Haus U5 project in Stuttgart is progressing – the openings for the new kitchen are in place.",
    },
    body: [
      {
        de: "Die Abrissarbeiten in unserem Projekt „Haus U5“ in Stuttgart gehen fleißig voran. Wir sind sehr gespannt auf alles, was kommt! Das gesamte Umbauvorhaben kann auf der Projektseite angesehen werden.",
        en: "The demolition work on our ‘Haus U5’ project in Stuttgart is progressing steadily. We are very excited about everything to come! The entire conversion project can be viewed on the project page.",
      },
    ],
    image: {
      src: "/images/news/haus-u5-baustelle-2024-09-2/kuechenoeffnung.jpg",
      alt: { de: "Öffnung für die neue Küche, Haus U5", en: "Opening for the new kitchen, Haus U5" },
      kind: "construction",
    },
    gallery: [
      {
        src: "/images/news/haus-u5-baustelle-2024-09-2/gaeste-wc.jpg",
        alt: { de: "Gäste-WC im Erdgeschoss, Rohbauzustand", en: "Ground-floor guest WC, shell state" },
        caption: { de: "Gäste-WC EG", en: "Guest WC, ground floor" },
        kind: "construction",
      },
    ],
    relatedProject: "haus-u5",
    published: true,
  },
  {
    slug: "haus-k10-baustelle-september-2024",
    date: "2024-09-02",
    category: "baustelle",
    title: {
      de: "Baustellenupdate Haus K10",
      en: "Construction update Haus K10",
    },
    intro: {
      de: "Bei unserem Umbauprojekt in Fellbach bei Stuttgart sind die Wände eingerissen – der neue Wohn- und Essbereich nimmt Form an.",
      en: "At our conversion project in Fellbach near Stuttgart the walls have come down – the new living and dining area is taking shape.",
    },
    body: [
      {
        de: "Und ebenso geht es bei unserem Umbauprojekt in Fellbach bei Stuttgart voran. Wände sind schon eingerissen, um den neuen Wohn- und Essbereich zu generieren. Weitere Informationen zum Haus K10 sind auf der Projektseite zu finden.",
        en: "Progress is also being made on our conversion project in Fellbach near Stuttgart. Walls have already been removed to create the new living and dining area. Further information on Haus K10 can be found on the project page.",
      },
    ],
    image: {
      src: "/images/news/haus-k10-baustelle-2024-09/wanddurchbruch.jpg",
      alt: { de: "Wanddurchbruch im künftigen Wohn- und Essbereich, Haus K10", en: "Wall opening in the future living and dining area, Haus K10" },
      kind: "construction",
    },
    relatedProject: "haus-k10",
    published: true,
  },
  {
    slug: "haus-u5-abriss-september-2024",
    date: "2024-09-02",
    category: "baustelle",
    title: {
      de: "Abrissarbeiten Haus U5 gestartet",
      en: "Demolition started at Haus U5",
    },
    intro: {
      de: "Die Abrissarbeiten in unserem Projekt Haus U5 in Stuttgart haben begonnen – Obergeschoss und Dachgeschoss sind entkernt.",
      en: "Demolition has begun on our Haus U5 project in Stuttgart – the upper floor and attic have been gutted.",
    },
    body: [
      {
        de: "Die Abrissarbeiten in unserem Projekt „Haus U5“ in Stuttgart gehen fleißig voran. Wir sind sehr gespannt auf alles, was kommt!",
        en: "The demolition work on our ‘Haus U5’ project in Stuttgart is progressing steadily. We are very excited about everything to come!",
      },
    ],
    image: {
      src: "/images/news/haus-u5-baustelle-2024-09/rohbau-og.jpg",
      alt: { de: "Rohbauzustand nach Abriss im 1. Obergeschoss, Haus U5", en: "Shell state after demolition on the first floor, Haus U5" },
      kind: "construction",
    },
    gallery: [
      {
        src: "/images/news/haus-u5-baustelle-2024-09/dachgeschoss.jpg",
        alt: { de: "Entkerntes Dachgeschoss, Haus U5", en: "Gutted attic, Haus U5" },
        caption: { de: "Entkerntes Dachgeschoss", en: "Gutted attic" },
        kind: "construction",
      },
    ],
    relatedProject: "haus-u5",
    published: true,
  },
  {
    slug: "exkursion-pavillon-le-corbusier",
    date: "2024-08-25",
    category: "exkursion",
    title: {
      de: "Exkursion: Pavillon Le Corbusier, Zürich",
      en: "Excursion: Pavillon Le Corbusier, Zurich",
    },
    intro: {
      de: "studio more Exkursionen – Bauten, die uns inspirieren und von denen wir lernen.",
      en: "studio more excursions – buildings that inspire us and that we learn from.",
    },
    body: [
      {
        de: "Pavillon Le Corbusier, Zürich, Schweiz. Architekt: Le Corbusier (fertiggestellt von Jean Prouvé), Landschaft: Pierre Zbinden, Jahr: 1967. Fotos: studio more, August 2024.",
        en: "Pavillon Le Corbusier, Zurich, Switzerland. Architect: Le Corbusier (completed by Jean Prouvé), landscape: Pierre Zbinden, year: 1967. Photos: studio more, August 2024.",
      },
    ],
    image: {
      src: "/images/news/pavillon-le-corbusier/suedfassade.jpg",
      alt: { de: "Südfassade des Pavillon Le Corbusier in Zürich", en: "South façade of the Pavillon Le Corbusier in Zurich" },
      kind: "photo",
    },
    gallery: [
      {
        src: "/images/news/pavillon-le-corbusier/innenraum.jpg",
        alt: { de: "Innenraum des Pavillon Le Corbusier", en: "Interior of the Pavillon Le Corbusier" },
        caption: { de: "Innenraum", en: "Interior" },
        kind: "photo",
      },
      {
        src: "/images/news/pavillon-le-corbusier/dachterrasse.jpg",
        alt: { de: "Dachterrasse des Pavillon Le Corbusier", en: "Roof terrace of the Pavillon Le Corbusier" },
        caption: { de: "Dachterrasse", en: "Roof terrace" },
        kind: "photo",
      },
    ],
    published: true,
  },
];

export const publishedNews = news
  .filter((n) => n.published)
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export function getNewsItem(slug: string): NewsItem | undefined {
  return publishedNews.find((n) => n.slug === slug);
}

export const newsCategoryLabels: Record<string, { de: string; en: string }> = {
  baustelle: { de: "Baustelle", en: "Construction" },
  buero: { de: "Büro", en: "Studio" },
  exkursion: { de: "Exkursion", en: "Excursion" },
  forschung: { de: "Forschung", en: "Research" },
  lehre: { de: "Lehre", en: "Teaching" },
};
