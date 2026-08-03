/**
 * Central site configuration.
 *
 * TODO (developer, before launch):
 * - Confirm the office address with studio more. The current website lists
 *   "Forststraße 9, 70174 Stuttgart", while at least one other public profile
 *   lists a different address. The website address is preserved here until
 *   the client confirms it. See docs/CONTENT-TODO.md.
 * - Set SITE_URL to the production domain used at launch.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://studio-more.de";

export const site = {
  name: "studio more Architekten PartGmbB",
  shortName: "studio more",
  legalForm: "PartGmbB",
  founders: ["Dr. Mostafa Aboughaly", "Chiara Weiß"],
  foundedYear: 2023,
  email: "office@studio-more.de",
  phone: "+49 157 36889191",
  phoneDisplay: "+49 (0) 157 36889191",
  whatsappUrl: "https://wa.me/4915736889191",
  instagramUrl: "https://www.instagram.com/studio___more",
  address: {
    // TODO: confirm before launch (see note above).
    street: "Forststraße 9",
    zip: "70174",
    city: "Stuttgart",
    country: "Deutschland",
    countryEn: "Germany",
  },
} as const;
