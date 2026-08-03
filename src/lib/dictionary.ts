import type { Locale } from "@/lib/i18n";
import type { ProjectCategory } from "@/data/types";

export const nav = {
  projects: { de: "Projekte", en: "Projects" },
  services: { de: "Leistungen", en: "Services" },
  studio: { de: "Büro", en: "Studio" },
  research: { de: "Forschung & Lehre", en: "Research & Teaching" },
  news: { de: "Aktuell", en: "News" },
  faq: { de: "FAQ", en: "FAQ" },
  contact: { de: "Kontakt", en: "Contact" },
  imprint: { de: "Impressum", en: "Imprint" },
  privacy: { de: "Datenschutz", en: "Privacy" },
  cta: { de: "Projekt besprechen", en: "Discuss a project" },
} as const;

export const ui = {
  skipToContent: { de: "Zum Inhalt springen", en: "Skip to content" },
  openMenu: { de: "Menü öffnen", en: "Open menu" },
  closeMenu: { de: "Menü schließen", en: "Close menu" },
  mainNavigation: { de: "Hauptnavigation", en: "Main navigation" },
  home: { de: "Startseite", en: "Home" },
  allProjects: { de: "Alle Projekte", en: "All projects" },
  discoverProjects: { de: "Projekte entdecken", en: "Discover projects" },
  scrollDown: { de: "Weiter scrollen", en: "Scroll to continue" },
  readMore: { de: "Mehr erfahren", en: "Read more" },
  toProject: { de: "Zum Projekt", en: "View project" },
  relatedProjects: { de: "Verwandte Projekte", en: "Related projects" },
  gridView: { de: "Rasteransicht", en: "Grid view" },
  listView: { de: "Listenansicht", en: "List view" },
  filterProjects: { de: "Projekte filtern", en: "Filter projects" },
  all: { de: "Alle", en: "All" },
  noResults: { de: "Keine Projekte in dieser Kategorie.", en: "No projects in this category." },
  facts: { de: "Projektdaten", en: "Project facts" },
  period: { de: "Zeitraum", en: "Period" },
  location: { de: "Ort", en: "Location" },
  client: { de: "Bauherrschaft", en: "Client" },
  use: { de: "Nutzung", en: "Use" },
  scope: { de: "Umfang", en: "Scope" },
  status: { de: "Status", en: "Status" },
  collaborators: { de: "Fachplanung / Kooperation", en: "Consultants / collaboration" },
  category: { de: "Kategorie", en: "Category" },
  legendTitle: { de: "Zeichnungslegende", en: "Drawing legend" },
  legendExisting: { de: "Bestand", en: "Existing fabric" },
  legendNew: { de: "Neubau / Eingriff", en: "New intervention" },
  legendDemolition: { de: "Abriss", en: "Demolition" },
  closeLightbox: { de: "Großansicht schließen", en: "Close enlarged view" },
  enlargeImage: { de: "Bild vergrößern", en: "Enlarge image" },
  previousImage: { de: "Vorheriges Bild", en: "Previous image" },
  nextImage: { de: "Nächstes Bild", en: "Next image" },
  founders: { de: "Gründung", en: "Founders" },
  team: { de: "Team", en: "Team" },
  newsArchive: { de: "Alle Beiträge", en: "All posts" },
  backToNews: { de: "Zurück zu Aktuell", en: "Back to news" },
  contactCtaTitle: { de: "Was möchten Sie weiterdenken?", en: "What would you like to rethink?" },
  contactCtaText: {
    de: "Vorhaben oder Idee? Wir bieten kostenlose Erstgespräche an und freuen uns auf einen spannenden Austausch.",
    en: "A project or an idea? We offer free initial consultations and look forward to an inspiring exchange.",
  },
  bookConsultation: { de: "Erstgespräch vereinbaren", en: "Book an initial consultation" },
  freeConsultation: { de: "Kostenloses Erstgespräch", en: "Free initial consultation" },
  breadcrumb: { de: "Brotkrumennavigation", en: "Breadcrumb" },
  languageSwitch: { de: "Sprache wechseln", en: "Switch language" },
  notFoundTitle: { de: "Seite nicht gefunden", en: "Page not found" },
  notFoundText: {
    de: "Die angeforderte Seite existiert nicht oder wurde verschoben.",
    en: "The requested page does not exist or has been moved.",
  },
  backHome: { de: "Zur Startseite", en: "Back to home" },
  sectionHeadings: {
    ausgangslage: { de: "Ausgangslage", en: "Starting point" },
    entwurfsidee: { de: "Entwurfsidee", en: "Design idea" },
    raum: { de: "Räumliche Maßnahmen", en: "Spatial interventions" },
    "bestand-eingriff": { de: "Bestand und Eingriff", en: "Existing fabric and intervention" },
    "material-energie": { de: "Material, Energie, Nachhaltigkeit", en: "Material, energy, sustainability" },
    ergebnis: { de: "Ergebnis", en: "Result" },
  },
} as const;

export const projectCategoryLabels: Record<ProjectCategory, { de: string; en: string }> = {
  "umbau-sanierung": { de: "Umbau & Sanierung", en: "Conversion & refurbishment" },
  neubau: { de: "Neubau", en: "New construction" },
  wohnen: { de: "Wohnen", en: "Housing" },
  kultur: { de: "Kultur", en: "Culture" },
  "forschung-experiment": { de: "Forschung / Experiment", en: "Research / experiment" },
};

export function t<T extends Record<Locale, string>>(entry: T, locale: Locale): string {
  return entry[locale];
}
