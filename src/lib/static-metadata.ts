import type { Locale, RouteKey } from "@/lib/i18n";
import { href, routes } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

const copy: Record<RouteKey, { title: { de: string; en: string }; description: { de: string; en: string } }> = {
  home: {
    title: { de: "Architekturbüro für Bauen im Bestand", en: "Architecture for existing buildings" },
    description: {
      de: "studio more ist ein Architekturbüro in Stuttgart für Umbau, Sanierung, Neubau, Forschung und verantwortungsvolle Architektur.",
      en: "studio more is a Stuttgart architecture practice for conversion, refurbishment, new construction, research and responsible architecture.",
    },
  },
  projects: {
    title: { de: "Projekte", en: "Projects" },
    description: {
      de: "Ausgewählte Projekte von studio more: Umbau, Sanierung, Wohnungsbau, Neubau und experimentelle Architektur.",
      en: "Selected studio more projects: conversion, refurbishment, housing, new construction and experimental architecture.",
    },
  },
  services: {
    title: { de: "Leistungen", en: "Services" },
    description: {
      de: "Architekturleistungen für Umbau, energetische Sanierung, Neubau, Machbarkeitsstudien, Planung und Realisierung.",
      en: "Architectural services for conversion, energy refurbishment, new construction, feasibility studies, planning and realisation.",
    },
  },
  studio: {
    title: { de: "Büro", en: "Studio" },
    description: {
      de: "Über studio more, gegründet 2023 in Stuttgart von Dr. Mostafa Aboughaly und Chiara Weiß.",
      en: "About studio more, founded in Stuttgart in 2023 by Dr Mostafa Aboughaly and Chiara Weiß.",
    },
  },
  research: {
    title: { de: "Forschung & Lehre", en: "Research & Teaching" },
    description: {
      de: "Forschung, Lehre und Materialentwicklung als Teil der architektonischen Praxis von studio more.",
      en: "Research, teaching and material development as part of studio more’s architectural practice.",
    },
  },
  news: {
    title: { de: "Aktuell", en: "News" },
    description: {
      de: "Baustellen, Projektmeilensteine, Lehre und Exkursionen aus dem Büroalltag von studio more.",
      en: "Building sites, project milestones, teaching and excursions from everyday life at studio more.",
    },
  },
  faq: {
    title: { de: "Häufige Fragen", en: "Frequently asked questions" },
    description: {
      de: "Antworten zu Projektstart, Umbau, Sanierung, Leistungen, Energie, Genehmigung und Bauausführung.",
      en: "Answers about starting a project, conversion, refurbishment, services, energy, permits and construction.",
    },
  },
  contact: {
    title: { de: "Kontakt", en: "Contact" },
    description: {
      de: "Kostenloses Erstgespräch mit studio more Architekten in Stuttgart vereinbaren.",
      en: "Arrange a free initial consultation with studio more architects in Stuttgart.",
    },
  },
  imprint: {
    title: { de: "Impressum", en: "Imprint" },
    description: { de: "Impressum von studio more Architekten PartGmbB.", en: "Legal notice for studio more Architekten PartGmbB." },
  },
  privacy: {
    title: { de: "Datenschutz", en: "Privacy" },
    description: { de: "Datenschutzerklärung von studio more Architekten PartGmbB.", en: "Privacy notice for studio more Architekten PartGmbB." },
  },
};

export function staticPageMetadata(key: RouteKey, locale: Locale) {
  const other: Locale = locale === "de" ? "en" : "de";
  return buildMetadata({
    title: copy[key].title[locale],
    description: copy[key].description[locale],
    locale,
    path: href(key, locale),
    alternatePath: routes[key][other],
    ogImage: "/images/projects/haus-u5/render-wohnraum.jpg",
  });
}
