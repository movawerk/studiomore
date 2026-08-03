export type Localized = { de: string; en: string };

export type ImageKind = "photo" | "render" | "plan" | "diagram" | "model" | "construction";

export type ProjectImage = {
  src: string;
  alt: Localized;
  caption?: Localized;
  kind: ImageKind;
};

/** A row in the project gallery: one full-width image or a pair (e.g. Bestand/Umbau). */
export type GalleryRow = {
  layout: "full" | "pair";
  images: ProjectImage[];
  caption?: Localized;
  /** Show the black/coral/yellow drawing legend below this row. */
  legend?: boolean;
};

export type NarrativeSectionId =
  | "ausgangslage"
  | "entwurfsidee"
  | "raum"
  | "bestand-eingriff"
  | "material-energie"
  | "ergebnis";

export type ContentStatus = "verified" | "needs-review" | "needs-confirmation";

export type ProjectCategory =
  | "umbau-sanierung"
  | "neubau"
  | "wohnen"
  | "kultur"
  | "forschung-experiment";

export type Project = {
  slug: string;
  title: string;
  titleEn?: string;
  categories: ProjectCategory[];
  location?: Localized;
  period?: string;
  clientType?: Localized;
  use?: Localized;
  scope?: Localized;
  status?: Localized;
  collaborators?: string[];
  /** One-line thesis shown on cards and at the top of the project page. */
  summary?: Localized;
  sections?: { id: NarrativeSectionId; text: Localized }[];
  heroImage?: ProjectImage;
  gallery: GalleryRow[];
  related?: string[];
  featured?: boolean;
  published: boolean;
  contentStatus: ContentStatus;
  /** Internal note for unpublished/unconfirmed entries. Never rendered. */
  internalNote?: string;
};

export type NewsCategory = "baustelle" | "buero" | "exkursion" | "forschung" | "lehre";

export type NewsItem = {
  slug: string;
  date: string; // ISO
  category: NewsCategory;
  title: Localized;
  intro: Localized;
  body?: Localized[];
  image?: ProjectImage;
  gallery?: ProjectImage[];
  relatedProject?: string;
  published: boolean;
};

export type FaqItem = {
  id: string;
  question: Localized;
  /** Paragraphs / bullet lines. Lines starting with "- " are rendered as list items. */
  answer: { de: string[]; en: string[] };
  /**
   * Internal flag: answers touching prices, durations, HOAI, funding (KfW/BAFA),
   * GEG, planning law or technical regulations require professional review
   * before launch. Never rendered publicly. See docs/CONTENT-TODO.md.
   */
  reviewStatus?: "needs-professional-review";
};

export type FaqGroup = {
  id: string;
  title: Localized;
  items: FaqItem[];
};
