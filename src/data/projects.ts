import type { Project } from "@/data/types";

/**
 * Project content migrated from studio-more.de (customer-owned text and images).
 * Wording was lightly polished without adding factual claims.
 *
 * Entries with `published: false` had duplicated or missing content on the old
 * website and must not go live until correct content is supplied by the client.
 * See docs/CONTENT-TODO.md.
 */
export const projects: Project[] = [
  // ---------------------------------------------------------------- Haus U5
  {
    slug: "haus-u5",
    title: "Haus U5",
    categories: ["umbau-sanierung", "wohnen"],
    location: { de: "Stuttgart", en: "Stuttgart" },
    period: "2023–2025",
    clientType: { de: "privat", en: "private" },
    use: { de: "Wohnen", en: "Residential" },
    scope: { de: "Alle Leistungsphasen", en: "Full planning scope" },
    collaborators: [
      "Energiekonzept: Energieberatung Strauss",
      "Statik: Ingenieurbüro Rebstock",
    ],
    summary: {
      de: "Umbau und energetische Sanierung eines Einfamilienhauses aus den 1950er-Jahren – ein Deckendurchbruch öffnet den Wohnraum zum Garten und verbindet Innen und Außen auf mehreren Ebenen.",
      en: "Conversion and energy refurbishment of a 1950s detached house – a ceiling opening connects the living space to the garden across several new levels.",
    },
    sections: [
      {
        id: "ausgangslage",
        text: {
          de: "Das bestehende Einfamilienhaus aus den 1950er-Jahren wurde geschossweise genutzt und entsprach weder räumlich noch energetisch den heutigen Bedürfnissen seiner Bewohner:innen.",
          en: "The existing detached house from the 1950s was used storey by storey and no longer met the spatial or energy needs of its residents.",
        },
      },
      {
        id: "entwurfsidee",
        text: {
          de: "Das Haus wurde vollumfänglich neu gedacht. Neben der kompletten energetischen Sanierung stand das Neudenken des architektonischen Raumes im Fokus: Durch einen Durchbruch der Bestandsdecke über dem Keller öffnet sich der Wohnraum in Richtung Garten und vernetzt Innen und Außen auf mehreren neu gewonnenen Ebenen.",
          en: "The house was completely rethought. Alongside a full energy refurbishment, the focus was on reimagining the architectural space: by breaking through the existing ceiling above the basement, the living space opens towards the garden and connects interior and exterior across several newly created levels.",
        },
      },
      {
        id: "raum",
        text: {
          de: "Die unterschiedlichen Höhenniveaus im Innenraum zonieren, ohne zu separieren, und bereiten einen ebenerdigen Zugang zur neuen Terrasse. Durch das Entfernen der Decke entsteht ein großzügiger, einladender Wohnbereich; die Sitztreppe fungiert als erweitertes Wohnzimmer und Treffpunkt des Hauses. Im Obergeschoss wird die bestehende Küche in das neue Familienbad umgewandelt.",
          en: "The different height levels zone the interior without separating it and provide level access to the new terrace. Removing the ceiling creates a generous, inviting living area; the seating staircase acts as an extended living room and meeting point of the house. On the upper floor, the former kitchen becomes the new family bathroom.",
        },
      },
      {
        id: "material-energie",
        text: {
          de: "Energetische Sanierung: Wärmepumpe, Fenstertausch mit Dreifach-Isolierverglasung und außenliegendem Sonnenschutz als sommerlicher Wärmeschutz, Dämmung des oberen und unteren Raumabschlusses sowie Außenwanddämmung mit Mineralwolle.",
          en: "Energy refurbishment: heat pump, window replacement with triple insulating glazing and external sun protection as summer heat protection, insulation of the upper and lower building envelope, and external wall insulation with mineral wool.",
        },
      },
      {
        id: "ergebnis",
        text: {
          de: "Der Ausbau der Sitztreppe ist als zweiter Bauabschnitt geplant; bis dahin bildet sich neben der neuen Treppe eine ruhige Raumnische des Wohnzimmers. Der Baustellenprozess ist in Vorher-nachher-Aufnahmen dokumentiert.",
          en: "The build-out of the seating staircase is planned as a second construction phase; until then, a calm alcove forms next to the new stair. The construction process is documented in before-and-after photographs.",
        },
      },
    ],
    heroImage: {
      src: "/images/projects/haus-u5/render-wohnraum.jpg",
      alt: {
        de: "Haus U5 – doppelt hoher Wohnraum mit Sitztreppe und Blick in den Garten",
        en: "Haus U5 – double-height living space with seating staircase and garden view",
      },
      kind: "render",
    },
    gallery: [
      {
        layout: "full",
        images: [
          {
            src: "/images/projects/haus-u5/render-sitztreppe.jpg",
            alt: { de: "Blick über die Sitztreppe in den offenen Wohnbereich", en: "View across the seating staircase into the open living area" },
            kind: "render",
          },
        ],
        caption: {
          de: "Die Sitztreppe fungiert als erweitertes Wohnzimmer – Treffpunkt des Hauses.",
          en: "The seating staircase acts as an extended living room – the meeting point of the house.",
        },
      },
      {
        layout: "pair",
        images: [
          {
            src: "/images/projects/haus-u5/diagramm-bestand.jpg",
            alt: { de: "Diagramm: Bestandsgebäude, geschossweise genutzt", en: "Diagram: existing building, used storey by storey" },
            kind: "diagram",
          },
          {
            src: "/images/projects/haus-u5/diagramm-deckenoeffnung.jpg",
            alt: { de: "Diagramm: Entfernen der Geschossdecke für doppelt hohen Raum", en: "Diagram: removal of the floor slab to create a double-height space" },
            kind: "diagram",
          },
        ],
        caption: {
          de: "Bestandsgebäude / Entfernen der Geschossdecke für den doppelt hohen Raum.",
          en: "Existing building / removal of the floor slab to create the double-height space.",
        },
      },
      {
        layout: "pair",
        images: [
          {
            src: "/images/projects/haus-u5/diagramm-gartenzugang.jpg",
            alt: { de: "Diagramm: neu geschaffener Gartenzugang erweitert den Wohnraum ins Freie", en: "Diagram: newly created garden access extends the living space outdoors" },
            kind: "diagram",
          },
          {
            src: "/images/projects/haus-u5/diagramm-fenster.jpg",
            alt: { de: "Diagramm: großflächige Fensteröffnungen für maximalen Tageslichteinfall", en: "Diagram: large window openings for maximum daylight" },
            kind: "diagram",
          },
        ],
        caption: {
          de: "Neuer Gartenzugang / großflächige Fensteröffnungen für maximalen Tageslichteinfall.",
          en: "New garden access / large window openings for maximum daylight.",
        },
      },
      {
        layout: "pair",
        images: [
          {
            src: "/images/projects/haus-u5/grundriss-eg-bestand.png",
            alt: { de: "Grundriss Erdgeschoss, Bestand", en: "Ground floor plan, existing building" },
            kind: "plan",
          },
          {
            src: "/images/projects/haus-u5/grundriss-eg-umbau.png",
            alt: { de: "Grundriss Erdgeschoss, Umbau – Bestand schwarz, neue Eingriffe koralle, Abriss gelb", en: "Ground floor plan, conversion – existing black, new interventions coral, demolition yellow" },
            kind: "plan",
          },
        ],
        caption: { de: "Grundriss Erdgeschoss: Bestand / Umbau.", en: "Ground floor plan: existing / conversion." },
        legend: true,
      },
      {
        layout: "pair",
        images: [
          {
            src: "/images/projects/haus-u5/grundriss-og-bestand.png",
            alt: { de: "Grundriss 1. Obergeschoss, Bestand", en: "First floor plan, existing building" },
            kind: "plan",
          },
          {
            src: "/images/projects/haus-u5/grundriss-og-umbau.png",
            alt: { de: "Grundriss 1. Obergeschoss, Umbau", en: "First floor plan, conversion" },
            kind: "plan",
          },
        ],
        caption: { de: "Grundriss 1. Obergeschoss: Bestand / Umbau.", en: "First floor plan: existing / conversion." },
        legend: true,
      },
      {
        layout: "pair",
        images: [
          {
            src: "/images/projects/haus-u5/schnitt-bestand.png",
            alt: { de: "Schnitt, Bestand", en: "Section, existing building" },
            kind: "plan",
          },
          {
            src: "/images/projects/haus-u5/schnitt-umbau.png",
            alt: { de: "Schnitt, Umbau", en: "Section, conversion" },
            kind: "plan",
          },
        ],
        caption: { de: "Schnitt: Bestand / Umbau.", en: "Section: existing / conversion." },
        legend: true,
      },
      {
        layout: "full",
        images: [
          {
            src: "/images/projects/haus-u5/render-split-level.jpg",
            alt: { de: "Split-Level-Wohnraum mit Blick auf die neuen Ebenen", en: "Split-level living space showing the new levels" },
            kind: "render",
          },
        ],
      },
      {
        layout: "pair",
        images: [
          {
            src: "/images/projects/haus-u5/vorher-nachher-1.jpg",
            alt: { de: "Vorher-nachher-Vergleich, Bestandsfoto Juli 2024", en: "Before-and-after comparison, existing condition July 2024" },
            kind: "photo",
          },
          {
            src: "/images/projects/haus-u5/vorher-nachher-2.jpg",
            alt: { de: "Vorher-nachher-Vergleich, Umbauzustand August 2024", en: "Before-and-after comparison, conversion state August 2024" },
            kind: "photo",
          },
        ],
        caption: {
          de: "Vorher / nachher: Bestandsfoto Juli 2024 und Umbauzustand August 2024.",
          en: "Before / after: existing condition July 2024 and conversion state August 2024.",
        },
      },
      {
        layout: "pair",
        images: [
          {
            src: "/images/projects/haus-u5/foto-treppe.jpg",
            alt: { de: "Neue Treppe mit Raumnische im Wohnzimmer", en: "New staircase with living-room alcove" },
            kind: "photo",
          },
          {
            src: "/images/projects/haus-u5/foto-luftraum.jpg",
            alt: { de: "Blick in den neuen doppelt hohen Luftraum", en: "View into the new double-height void" },
            kind: "photo",
          },
        ],
        caption: { de: "Fotografien aus dem Umbau.", en: "Photographs from the conversion." },
      },
      {
        layout: "full",
        images: [
          {
            src: "/images/projects/haus-u5/foto-wohnraum.jpg",
            alt: { de: "Wohnraum nach dem Umbau", en: "Living space after the conversion" },
            kind: "photo",
          },
        ],
      },
    ],
    related: ["haus-k10", "haus-b36", "haus-c1"],
    featured: true,
    published: true,
    contentStatus: "verified",
  },

  // --------------------------------------------------------------- Haus K10
  {
    slug: "haus-k10",
    title: "Haus K10",
    categories: ["umbau-sanierung", "wohnen"],
    location: { de: "Stuttgart", en: "Stuttgart" },
    period: "2024–2025",
    clientType: { de: "privat", en: "private" },
    use: { de: "Wohnen", en: "Residential" },
    scope: { de: "Alle Leistungsphasen", en: "Full planning scope" },
    summary: {
      de: "Behutsamer Umbau eines Wohnhauses von 1928 – die Öffnung des Wohn- und Essbereichs macht den Garten zum integralen Bestandteil des Raumerlebnisses.",
      en: "Careful conversion of a 1928 house – opening up the living and dining area makes the garden an integral part of the spatial experience.",
    },
    sections: [
      {
        id: "ausgangslage",
        text: {
          de: "Das Wohngebäude von 1928 sollte zum zentralen Ort einer jungen Familie werden. Innerhalb des gegebenen Budgets galt es, eine maximale räumliche Qualität zu erzielen.",
          en: "The 1928 residential building was to become the central place for a young family. The task was to achieve the highest possible spatial quality within the given budget.",
        },
      },
      {
        id: "entwurfsidee",
        text: {
          de: "Im Mittelpunkt des Umbaus stand die Öffnung des Wohn- und Essbereichs. Durch großflächige Fensteröffnungen und neue Zugänge zum Garten wurde die Verbindung zwischen Innen- und Außenraum gestärkt, sodass der Außenraum integraler Bestandteil der räumlichen Erfahrung wird.",
          en: "The focal point of the conversion was opening up the living and dining area. Large window openings and new access points to the garden strengthen the connection between interior and exterior, making the outdoor space an integral part of the spatial experience.",
        },
      },
      {
        id: "bestand-eingriff",
        text: {
          de: "Mit dem Gebäudebestand von 1928 wurde bewusst sanft gearbeitet. Der Entwurfsfokus lag auf dem Hauptraum im Erdgeschoss; die übrigen Räume wurden modernisiert, blieben jedoch in ihrer Grundstruktur unangetastet. So konnte die vorhandene Architektur weiterentwickelt werden, ohne ihre Substanz grundlegend zu verändern.",
          en: "The 1928 building fabric was treated deliberately gently. The design focus was placed on the main ground-floor space; the remaining rooms were modernised but left structurally unchanged. The existing architecture was thus developed further without fundamentally altering its substance.",
        },
      },
      {
        id: "material-energie",
        text: {
          de: "Der Fenstertausch erfolgt im Sinne der energetischen Nachhaltigkeit. Als Nachhaltigkeitskonzept werden eine innenliegende Dachdämmung sowie anteilig Photovoltaik angedacht.",
          en: "Windows were replaced with energy sustainability in mind. The sustainability concept considers internal roof insulation and a proportion of photovoltaics.",
        },
      },
      {
        id: "ergebnis",
        text: {
          de: "Das Entfernen der Innenwand schafft einen offenen Familienmittelpunkt; Fenstertüren und Terrasse erweitern den Innenraum nach außen und aktivieren beide Gartenbereiche.",
          en: "Removing the interior wall creates an open centre for family life; french windows and a terrace extend the interior outwards and activate both garden areas.",
        },
      },
    ],
    heroImage: {
      src: "/images/projects/haus-k10/foto-1.jpg",
      alt: { de: "Haus K10 – offener Wohn- und Essbereich nach dem Umbau", en: "Haus K10 – open living and dining area after the conversion" },
      kind: "photo",
    },
    gallery: [
      {
        layout: "pair",
        images: [
          {
            src: "/images/projects/haus-k10/foto-2.jpg",
            alt: { de: "Wohnbereich mit neuen Fenstertüren zum Garten", en: "Living area with new french windows to the garden" },
            kind: "photo",
          },
          {
            src: "/images/projects/haus-k10/foto-3.jpg",
            alt: { de: "Essbereich mit Blick in den Garten", en: "Dining area with garden view" },
            kind: "photo",
          },
        ],
      },
      {
        layout: "full",
        images: [
          {
            src: "/images/projects/haus-k10/axonometrie.jpg",
            alt: {
              de: "Axonometrie der Eingriffe – Bestand schwarz, neue Eingriffe koralle, Abriss gelb",
              en: "Axonometric of the interventions – existing black, new interventions coral, demolition yellow",
            },
            kind: "diagram",
          },
        ],
        caption: {
          de: "Entfernen der Innenwand für den offenen Familienmittelpunkt, Aktivierung der Gartenbereiche, Erweiterung des Innenraums nach außen.",
          en: "Removing the interior wall for the open family centre, activating the garden areas, extending the interior outwards.",
        },
        legend: true,
      },
      {
        layout: "pair",
        images: [
          {
            src: "/images/projects/haus-k10/grundriss-eg-bestand.png",
            alt: { de: "Grundriss Erdgeschoss, Bestand", en: "Ground floor plan, existing building" },
            kind: "plan",
          },
          {
            src: "/images/projects/haus-k10/grundriss-eg-umbau.png",
            alt: { de: "Grundriss Erdgeschoss, Umbau", en: "Ground floor plan, conversion" },
            kind: "plan",
          },
        ],
        caption: { de: "Grundriss Erdgeschoss: Bestand / Umbau.", en: "Ground floor plan: existing / conversion." },
        legend: true,
      },
      {
        layout: "pair",
        images: [
          {
            src: "/images/projects/haus-k10/schnitt-bestand.png",
            alt: { de: "Schnitt, Bestand", en: "Section, existing building" },
            kind: "plan",
          },
          {
            src: "/images/projects/haus-k10/schnitt-umbau.png",
            alt: { de: "Schnitt, Umbau", en: "Section, conversion" },
            kind: "plan",
          },
        ],
        caption: { de: "Schnitt: Bestand / Umbau.", en: "Section: existing / conversion." },
        legend: true,
      },
      {
        layout: "pair",
        images: [
          {
            src: "/images/projects/haus-k10/baustelle-1.jpg",
            alt: { de: "Baustelle: Entfernen der Trennwand im Erdgeschoss", en: "Construction site: removing the partition wall on the ground floor" },
            kind: "construction",
          },
          {
            src: "/images/projects/haus-k10/baustelle-2.jpg",
            alt: { de: "Baustelle: Einzug des Stahlträgers im neuen Wohn-Essbereich", en: "Construction site: installing the steel beam in the new living-dining area" },
            kind: "construction",
          },
        ],
        caption: {
          de: "Fotos von der Baustelle: Entfernen der Trennwand und Einzug des Stahlträgers.",
          en: "Photos from the construction site: removing the partition wall and installing the steel beam.",
        },
      },
      {
        layout: "pair",
        images: [
          {
            src: "/images/projects/haus-k10/foto-4.jpg",
            alt: { de: "Neuer Wohnraum mit maximiertem Tageslicht", en: "New living space with maximised daylight" },
            kind: "photo",
          },
          {
            src: "/images/projects/haus-k10/foto-5.jpg",
            alt: { de: "Detail des neuen Wohn-Essbereichs", en: "Detail of the new living-dining area" },
            kind: "photo",
          },
        ],
      },
      {
        layout: "full",
        images: [
          {
            src: "/images/projects/haus-k10/foto-6.jpg",
            alt: { de: "Blick durch den geöffneten Wohnbereich zum Garten", en: "View through the opened living area towards the garden" },
            kind: "photo",
          },
        ],
      },
    ],
    related: ["haus-u5", "haus-b36", "haus-c1"],
    featured: true,
    published: true,
    contentStatus: "verified",
  },

  // --------------------------------------------------------------- Haus B36
  {
    slug: "haus-b36",
    title: "Haus B36",
    categories: ["umbau-sanierung", "wohnen"],
    location: { de: "Ulm", en: "Ulm" },
    period: "2023–2024",
    clientType: { de: "privat", en: "private" },
    use: { de: "Wohnen", en: "Residential" },
    scope: { de: "Entwurf", en: "Design" },
    summary: {
      de: "Sanierung eines Reihenendhauses in Ulm – ungenutzter Kellerraum wird durch Deckendurchbruch und Landschaftsterrassen zu attraktivem Wohnraum am Garten.",
      en: "Refurbishment of an end-terrace house in Ulm – an unused basement becomes attractive garden-level living space through a ceiling opening and landscape terraces.",
    },
    sections: [
      {
        id: "ausgangslage",
        text: {
          de: "Das bestehende Reihenendhaus in Ulm verfügt über ein dreiseitig geräumiges Grundstück, dessen Potenzial bislang ungenutzt blieb – ebenso wie der Kellerraum.",
          en: "The existing end-terrace house in Ulm sits on a plot that is spacious on three sides – potential that, like the basement, had remained untapped.",
        },
      },
      {
        id: "entwurfsidee",
        text: {
          de: "Der Entwurf nutzt das Grundstück für eine Wohnraumerweiterung ins Untergeschoss: Nicht genutzter Kellerraum wird durch den Deckendurchbruch zu attraktivem Wohnraum. Der Garten wird durch Landschaftsterrassen auf mehreren Ebenen nutzbar und durch Terrassen erweitert.",
          en: "The design extends the living space into the basement: the unused cellar becomes attractive living space through an opening in the ceiling. The garden becomes usable through landscape terraces on several levels.",
        },
      },
      {
        id: "raum",
        text: {
          de: "Die „Grünstufen“ dienen als Hochbeete für Kräuter, Blumen und Nutzpflanzen, optimal erreichbar von der neuen offenen Wohnküche. Der neue doppelt hohe Luftraum als Familienmittelpunkt wird durch Schlafzimmer im Obergeschoss und ein optional erweiterbares Dachgeschoss ergänzt.",
          en: "The ‘green steps’ serve as raised beds for herbs, flowers and edible plants, directly accessible from the new open kitchen-living space. The new double-height void, as the family centrepiece, is complemented by bedrooms upstairs and an optionally expandable attic.",
        },
      },
      {
        id: "material-energie",
        text: {
          de: "Energetische Sanierung: Wärmepumpe, Fenstertausch mit Dreifach-Isolierverglasung und außenliegendem Sonnenschutz, Dämmung des oberen und unteren Raumabschlusses sowie Außenwanddämmung mit Mineralwolle.",
          en: "Energy refurbishment: heat pump, window replacement with triple insulating glazing and external sun protection, insulation of the upper and lower building envelope, and external wall insulation with mineral wool.",
        },
      },
    ],
    heroImage: {
      src: "/images/projects/haus-b36/render-garten.jpg",
      alt: { de: "Haus B36 – terrassierter Garten mit neuem Kellerzugang", en: "Haus B36 – terraced garden with new basement access" },
      kind: "render",
    },
    gallery: [
      {
        layout: "full",
        images: [
          {
            src: "/images/projects/haus-b36/render-essbereich.jpg",
            alt: { de: "Essbereich der neuen offenen Wohnküche", en: "Dining area of the new open kitchen-living space" },
            kind: "render",
          },
        ],
      },
      {
        layout: "pair",
        images: [
          {
            src: "/images/projects/haus-b36/diagramm-bestand.jpg",
            alt: { de: "Diagramm: Bestandsgebäude", en: "Diagram: existing building" },
            kind: "diagram",
          },
          {
            src: "/images/projects/haus-b36/diagramm-garten.jpg",
            alt: { de: "Diagramm: Neumodellierung des Gartens mit Kellerzugang", en: "Diagram: remodelling the garden with basement access" },
            kind: "diagram",
          },
        ],
        caption: { de: "Bestandsgebäude / Neumodellierung Garten: Kellerzugang.", en: "Existing building / remodelled garden: basement access." },
      },
      {
        layout: "pair",
        images: [
          {
            src: "/images/projects/haus-b36/diagramm-deckenoeffnung.jpg",
            alt: { de: "Diagramm: Deckendurchbruch – Neugewinn Wohnräume", en: "Diagram: ceiling opening – new living spaces" },
            kind: "diagram",
          },
          {
            src: "/images/projects/haus-b36/diagramm-belichtung.jpg",
            alt: { de: "Diagramm: natürliche Belichtung durch großflächige neue Fenster", en: "Diagram: natural lighting through large new windows" },
            kind: "diagram",
          },
        ],
        caption: { de: "Deckendurchbruch / natürliche Belichtung durch neue Fenster.", en: "Ceiling opening / natural lighting through new windows." },
      },
      {
        layout: "pair",
        images: [
          {
            src: "/images/projects/haus-b36/schnitt-bestand.jpg",
            alt: { de: "Schnitt A–A, Bestand", en: "Section A–A, existing building" },
            kind: "plan",
          },
          {
            src: "/images/projects/haus-b36/schnitt-umbau.jpg",
            alt: { de: "Schnitt A–A, Umbau", en: "Section A–A, conversion" },
            kind: "plan",
          },
        ],
        caption: { de: "Schnitt: Bestand / Umbau.", en: "Section: existing / conversion." },
        legend: true,
      },
      {
        layout: "pair",
        images: [
          {
            src: "/images/projects/haus-b36/grundriss-ug-bestand.jpg",
            alt: { de: "Grundriss Souterrain, Bestand", en: "Basement plan, existing building" },
            kind: "plan",
          },
          {
            src: "/images/projects/haus-b36/grundriss-ug-umbau.jpg",
            alt: { de: "Grundriss Souterrain, Umbau", en: "Basement plan, conversion" },
            kind: "plan",
          },
        ],
        caption: { de: "Grundriss Souterrain: Bestand / Umbau.", en: "Basement plan: existing / conversion." },
        legend: true,
      },
      {
        layout: "pair",
        images: [
          {
            src: "/images/projects/haus-b36/grundriss-eg-bestand.jpg",
            alt: { de: "Grundriss Erdgeschoss, Bestand", en: "Ground floor plan, existing building" },
            kind: "plan",
          },
          {
            src: "/images/projects/haus-b36/grundriss-eg-umbau.jpg",
            alt: { de: "Grundriss Erdgeschoss, Umbau", en: "Ground floor plan, conversion" },
            kind: "plan",
          },
        ],
        caption: { de: "Grundriss Erdgeschoss: Bestand / Umbau.", en: "Ground floor plan: existing / conversion." },
        legend: true,
      },
      {
        layout: "full",
        images: [
          {
            src: "/images/projects/haus-b36/axonometrie-umgebung.jpg",
            alt: { de: "Axonometrie mit Umgebung", en: "Axonometric with surroundings" },
            kind: "diagram",
          },
        ],
      },
    ],
    related: ["haus-u5", "haus-k10"],
    featured: true,
    published: true,
    contentStatus: "verified",
  },

  // ---------------------------------------------------------------- Haus C1
  {
    slug: "haus-c1",
    title: "Haus C1",
    categories: ["umbau-sanierung", "wohnen"],
    period: "2023–2025",
    clientType: { de: "privat", en: "private" },
    use: { de: "Wohnen, Büro", en: "Residential, office" },
    scope: { de: "Alle Leistungsphasen", en: "Full planning scope" },
    summary: {
      de: "Umbau einer Bestandsgarage zu einer Maisonette-Wohnung mit Bürofläche – Abbruchmaterial wird als akustisch wirksames Ziermauerwerk wiederverwendet.",
      en: "Conversion of an existing garage into a maisonette with office space – demolition material is reused as an acoustically effective decorative brick wall.",
    },
    sections: [
      {
        id: "ausgangslage",
        text: {
          de: "In einem Wohngebiet wird eine Wohneinheit eines Mehrfamilienhauses umgebaut. Die Garage wird zur attraktiven Wohnfläche mit Gartenzugang umgenutzt und mit der darüberliegenden Wohnung verknüpft.",
          en: "In a residential area, one unit of an apartment building is being converted. The garage is repurposed as attractive living space with garden access and linked to the flat above.",
        },
      },
      {
        id: "raum",
        text: {
          de: "Es entsteht eine großzügige Maisonette-Wohnung über zwei Geschosse mit Wohn- und separat nutzbarem Bürobereich. Das Erdgeschoss ist als Wohn- und Essbereich offen gestaltet; vorhandene Tragwerksstützen sowie gezielt gesetzte Einbauten wie die Kochinsel zonieren den Raum. Gartengeschoss und Erdgeschoss verbindet eine neue selbsttragende Steintreppe, die zugleich als Sitzstufe einer Wohnzimmerecke mit Gartenblick dient.",
          en: "The result is a generous two-storey maisonette with a living area and separately usable office space. The ground floor is designed as an open living and dining area; existing structural columns and purposefully placed built-ins such as the kitchen island zone the space. A new self-supporting stone staircase connects garden level and ground floor, doubling as seating steps for a living-room corner with garden views.",
        },
      },
      {
        id: "bestand-eingriff",
        text: {
          de: "Die Schlafzimmer im Obergeschoss ordnen sich größtenteils dem bestehenden Layout unter, während für die Bürofläche bestehende Trennwände weichen mussten. Die dabei gewonnenen Rohmaterialien wurden für das Ziermauerwerk im Wohnzimmer („Zick-Zack-Wand“) eingesetzt – eine Akustikwand für ein angenehmes Wohnklima.",
          en: "The bedrooms upstairs largely follow the existing layout, while partition walls had to make way for the office space. The reclaimed raw material was used to build the decorative brickwork in the living room (the ‘zig-zag wall’) – an acoustic wall for a pleasant living environment.",
        },
      },
      {
        id: "material-energie",
        text: {
          de: "Die Bestandswände wurden vollumfänglich gedämmt, um technische Maßnahmen der Klimaregulierung zu minimieren. Der ägyptische Marmor, am Bauort ein lokales Material, definiert die Ausstattung des Sanitärraums. Die Fußböden übersetzen ein traditionelles arabisches Motiv in moderne Materialien: Das Ornament aus lokalem Stein wird in Fließestrich eingelegt.",
          en: "The existing walls were fully insulated to minimise technical climate-control measures. Egyptian marble, a local material at the building's location, defines the bathroom fit-out. The floors translate a traditional Arabic motif into modern materials: the ornament, made of local stone, is inlaid in flowing screed.",
        },
      },
      {
        id: "ergebnis",
        text: {
          de: "Im neu gewonnenen Garten wird Vegetation gepflanzt, die dem extremen Klima standhält; eine Textilpergola spendet angenehmen Schatten. Im Hauptschlafzimmer sind die Grenzen zwischen Schlafen, Ankleiden und Baden fließend – der Kleiderschrank definiert als eingestelltes Element die Raumzonen.",
          en: "The newly gained garden is planted with vegetation that withstands the extreme climate; a textile pergola provides pleasant shade. In the main bedroom, the boundaries between sleeping, dressing and bathing are fluid – the wardrobe, as an inserted element, defines the zones.",
        },
      },
    ],
    heroImage: {
      src: "/images/projects/haus-c1/render-wohnbereich.jpg",
      alt: { de: "Haus C1 – offener Wohn- und Essbereich mit akustisch wirksamer Ziegelwand", en: "Haus C1 – open living and dining area with acoustically effective brick wall" },
      kind: "render",
    },
    gallery: [
      {
        layout: "full",
        images: [
          {
            src: "/images/projects/haus-c1/axonometrie-eingriffe.jpg",
            alt: {
              de: "Axonometrie der Eingriffe – Bestand schwarz, neue Wände koralle, Abbruch gelb",
              en: "Axonometric of the interventions – existing black, new walls coral, demolition yellow",
            },
            kind: "diagram",
          },
        ],
        caption: { de: "Gartengeschoss mit Wohngeschoss: Bestand / Neubau / Abriss.", en: "Garden level with living floor: existing / new / demolition." },
        legend: true,
      },
      {
        layout: "pair",
        images: [
          {
            src: "/images/projects/haus-c1/render-treppe.jpg",
            alt: { de: "Selbsttragende Steintreppe als Sitzstufe mit Gartenblick", en: "Self-supporting stone staircase doubling as seating steps with garden view" },
            kind: "render",
          },
          {
            src: "/images/projects/haus-c1/render-kueche.jpg",
            alt: { de: "Offene Küche mit zonierender Kochinsel", en: "Open kitchen with zoning kitchen island" },
            kind: "render",
          },
        ],
      },
      {
        layout: "full",
        images: [
          {
            src: "/images/projects/haus-c1/render-garten.jpg",
            alt: { de: "Neuer Garten mit klimaresistenter Vegetation und Textilpergola", en: "New garden with climate-resilient vegetation and textile pergola" },
            kind: "render",
          },
        ],
      },
      {
        layout: "pair",
        images: [
          {
            src: "/images/projects/haus-c1/detail-boden-1.jpg",
            alt: { de: "Bodendetail: Ornament aus lokalem Stein in Fließestrich", en: "Floor detail: local stone ornament inlaid in flowing screed" },
            kind: "render",
          },
          {
            src: "/images/projects/haus-c1/detail-boden-2.jpg",
            alt: { de: "Bodendetail: traditionelles arabisches Motiv in modernen Materialien", en: "Floor detail: traditional Arabic motif in modern materials" },
            kind: "render",
          },
        ],
        caption: {
          de: "Die Fußböden übersetzen ein traditionelles arabisches Motiv mit modernen Materialien.",
          en: "The floors translate a traditional Arabic motif using modern materials.",
        },
      },
      {
        layout: "pair",
        images: [
          {
            src: "/images/projects/haus-c1/render-schlafzimmer.jpg",
            alt: { de: "Hauptschlafzimmer mit raumzonierendem Kleiderschrank", en: "Main bedroom with zone-defining wardrobe" },
            kind: "render",
          },
          {
            src: "/images/projects/haus-c1/render-bad.jpg",
            alt: { de: "Bad mit Duschnische und ägyptischem Marmor", en: "Bathroom with shower recess and Egyptian marble" },
            kind: "render",
          },
        ],
      },
    ],
    related: ["haus-u5", "haus-m", "haus-m1"],
    featured: true,
    published: true,
    contentStatus: "verified",
  },

  // ---------------------------------------------------------------- Haus M1
  {
    slug: "haus-m1",
    title: "Haus M1",
    categories: ["neubau", "wohnen"],
    location: { de: "Kairo, Ägypten", en: "Cairo, Egypt" },
    period: "2024–",
    clientType: { de: "privat", en: "private" },
    use: { de: "Wohnen", en: "Residential" },
    scope: { de: "Alle Leistungsphasen", en: "Full planning scope" },
    summary: {
      de: "Neubau eines eingeschossigen Hofhauses in Kairo – die Höfe sind das Herzstück und ermöglichen natürliche, passive Klimatisierung im Wüstenklima.",
      en: "New single-storey courtyard house in Cairo – the courtyards form the heart of the design and enable natural, passive climate control in the desert climate.",
    },
    sections: [
      {
        id: "ausgangslage",
        text: {
          de: "Für die Bauaufgabe eines Einfamilienhauses in Kairo wurden verschiedene Typologien untersucht. Umwelteinflüsse wie Klima, Hitze und Sandsturm sowie Raumqualitäten flossen in eine Reihe von Hofhaus-Studien ein.",
          en: "For a single-family house in Cairo, various typologies were examined. Environmental factors such as climate, heat and sandstorms as well as spatial qualities informed a series of courtyard-house studies.",
        },
      },
      {
        id: "entwurfsidee",
        text: {
          de: "Das Klima des Bauorts erfordert andere Maßnahmen in Entwurf und Konstruktion. Das Hofhaus erweist sich als geeignete Typologie zur natürlichen und passiven Klimatisierung: Die Höfe sind das Herzstück des Neubaus, sämtliche weitere Raumstrukturen ordnen sich um sie an.",
          en: "The local climate calls for different measures in design and construction. The courtyard house proves an apt typology for natural, passive climate control: the courtyards are the heart of the new building, and all other spatial structures are organised around them.",
        },
      },
      {
        id: "raum",
        text: {
          de: "Verschiedene Raumcluster mit jeweils eigenem Innenhof definieren die Nutzungsbereiche: Empfangsbereich, Küche mit dienenden Räumen, Schlafbereich, Gästebereich sowie eine Sport- und Hobbyzone. Die Räume um den Innenhof werden im Windmühlen-Prinzip angeordnet.",
          en: "Different room clusters, each with its own courtyard, define the areas of use: reception, kitchen with serving rooms, sleeping area, guest area, and a sports and hobby zone. The rooms around each courtyard are arranged on the windmill principle.",
        },
      },
      {
        id: "material-energie",
        text: {
          de: "Strategien der natürlichen Be- und Entlüftung im heißen Wüstenklima prägen den Entwurf und reduzieren den Bedarf an technischer Kühlung.",
          en: "Strategies for natural ventilation in the hot desert climate shape the design and reduce the need for mechanical cooling.",
        },
      },
    ],
    heroImage: {
      src: "/images/projects/haus-m1/render-hof-pool.jpg",
      alt: { de: "Haus M1 – Innenhof mit Pool", en: "Haus M1 – courtyard with pool" },
      kind: "render",
    },
    gallery: [
      {
        layout: "pair",
        images: [
          {
            src: "/images/projects/haus-m1/diagramm-hoefe.png",
            alt: { de: "Diagramm: System der Hoftypologie mit verschieden programmierten Raumclustern", en: "Diagram: courtyard typology with differently programmed room clusters" },
            kind: "diagram",
          },
          {
            src: "/images/projects/haus-m1/diagramm-lueftung.png",
            alt: { de: "Diagramm: Strategien der natürlichen Be- und Entlüftung im Wüstenklima", en: "Diagram: strategies for natural ventilation in the desert climate" },
            kind: "diagram",
          },
        ],
        caption: {
          de: "Hoftypologie mit Raumclustern / natürliche Be- und Entlüftung im heißen Wüstenklima.",
          en: "Courtyard typology with room clusters / natural ventilation in the hot desert climate.",
        },
      },
      {
        layout: "full",
        images: [
          {
            src: "/images/projects/haus-m1/axonometrie.jpg",
            alt: { de: "Axonometrie des Hofhauses", en: "Axonometric of the courtyard house" },
            kind: "diagram",
          },
        ],
      },
      {
        layout: "pair",
        images: [
          {
            src: "/images/projects/haus-m1/render-schlafhof.png",
            alt: { de: "Innenhof am Schlafbereich", en: "Courtyard at the sleeping area" },
            kind: "render",
          },
          {
            src: "/images/projects/haus-m1/render-bad.jpg",
            alt: { de: "Bad mit natürlichem Lichteinfall", en: "Bathroom with natural light" },
            kind: "render",
          },
        ],
      },
    ],
    related: ["haus-m", "haus-m41"],
    published: true,
    contentStatus: "verified",
  },

  // --------------------------------------------------------------- Haus M41
  {
    slug: "haus-m41",
    title: "Haus M41",
    categories: ["neubau", "wohnen"],
    location: { de: "Stuttgart", en: "Stuttgart" },
    period: "2024",
    clientType: { de: "privat", en: "private" },
    use: { de: "Wohnen", en: "Residential" },
    scope: { de: "Entwurf", en: "Design" },
    summary: {
      de: "Neubau eines Wohnhauses in Stuttgart – die Fensterformate der Fassade staffeln sich nach der Hierarchie von Ausblick und Tageslicht.",
      en: "New residential building in Stuttgart – the façade's window formats are staggered according to the hierarchy of view and daylight.",
    },
    sections: [
      {
        id: "ausgangslage",
        text: {
          de: "Das Grundstück in Stuttgart besticht durch einen unverbaubaren Blick und viel Vegetation im nahen Umfeld. Diese Besonderheit nimmt der Entwurf auf und richtet sich gezielt danach aus.",
          en: "The Stuttgart plot impresses with an unobstructed view and abundant vegetation nearby. The design takes up this quality and orients itself deliberately towards it.",
        },
      },
      {
        id: "entwurfsidee",
        text: {
          de: "Die verschiedenen Fensterformate der Fassade staffeln sich nach der Hierarchie des Ausblicks und des Tageslichteinfalls. Eine Hülle definiert klare Baukörpergrenzen und schafft geschützte, verschattete Zwischenzonen im Außenbereich.",
          en: "The different window formats of the façade are staggered according to the hierarchy of view and daylight. An envelope defines clear building boundaries and creates protected, shaded intermediate zones outdoors.",
        },
      },
      {
        id: "raum",
        text: {
          de: "Das Erdgeschoss – das Raumprogramm wurde von der Bauherrin definiert – zeigt einen offenen Wohn- und Essbereich sowie das Hauptschlafzimmer mit angrenzendem Wellness- und Badebereich. Das Obergeschoss fasst weitere Schlafzimmer und flexible Bereiche für Homeoffice und Hobbys. Terrasse und Pool werden von der vorspringenden Fassade gefasst, die Schatten spendet und Privatsphäre garantiert.",
          en: "The ground floor – with a brief defined by the client – features an open living and dining area and the main bedroom with adjoining wellness and bathing area. The upper floor holds further bedrooms and flexible spaces for home office and hobbies. Terrace and pool are framed by the projecting façade, which provides shade and privacy.",
        },
      },
      {
        id: "ergebnis",
        text: {
          de: "Der offene Wohn- und Essbereich gibt den Blick in die Natur frei; die zweite, perforierte Fassade erzeugt eine außergewöhnliche Lichtstimmung. Die Badewanne grenzt nahtlos an den Außenpool, während der vielseitig nutzbare Fliesensims die Farbigkeit aufnimmt.",
          en: "The open living and dining area frames the natural surroundings; the second, perforated façade creates an extraordinary quality of light. The bathtub seamlessly adjoins the outdoor pool, while the versatile tiled ledge picks up the colour scheme.",
        },
      },
    ],
    heroImage: {
      src: "/images/projects/haus-m41/render-wohnraum.jpg",
      alt: { de: "Haus M41 – offener Wohn- und Essbereich mit Blick in die Natur", en: "Haus M41 – open living and dining area with view of the landscape" },
      kind: "render",
    },
    gallery: [
      {
        layout: "pair",
        images: [
          {
            src: "/images/projects/haus-m41/diagramm-1.jpg",
            alt: { de: "Diagramm: Ausrichtung der Raumvolumen", en: "Diagram: orientation of the spatial volumes" },
            kind: "diagram",
          },
          {
            src: "/images/projects/haus-m41/diagramm-2.jpg",
            alt: { de: "Diagramm: Hülle zur Definition klarer Baukörpergrenzen und geschützter Zwischenzonen", en: "Diagram: envelope defining clear building boundaries and protected intermediate zones" },
            kind: "diagram",
          },
        ],
        caption: { de: "Idee und Maßnahmen: Ausrichtung der Raumvolumen / Hülle mit verschatteten Zwischenzonen.", en: "Idea and interventions: orientation of the volumes / envelope with shaded intermediate zones." },
      },
      {
        layout: "full",
        images: [
          {
            src: "/images/projects/haus-m41/schnitt.jpg",
            alt: { de: "Schnitt durch das Wohnhaus", en: "Section through the house" },
            kind: "plan",
          },
        ],
      },
      {
        layout: "full",
        images: [
          {
            src: "/images/projects/haus-m41/render-bad.jpg",
            alt: { de: "Schlafzimmer mit Wellnessbereich – die Badewanne grenzt an den Außenpool", en: "Bedroom with wellness area – the bathtub adjoins the outdoor pool" },
            kind: "render",
          },
        ],
      },
    ],
    related: ["haus-m1", "haus-m", "k21-hotel-plus"],
    published: true,
    contentStatus: "verified",
  },

  // ----------------------------------------------------------------- Haus M
  {
    slug: "haus-m",
    title: "Haus M",
    categories: ["neubau", "wohnen"],
    location: { de: "Kairo, Ägypten", en: "Cairo, Egypt" },
    period: "2024–2025",
    clientType: { de: "privat", en: "private" },
    use: { de: "Wohnen", en: "Residential" },
    scope: { de: "Entwurf", en: "Design" },
    summary: {
      de: "Neuinterpretation traditioneller Architektur für ein heißes Klima – Hofhaus mit Gewölbedächern aus tragenden Lehmwänden, gekühlt ohne energieintensive Technik.",
      en: "Reimagining traditional architecture for a hot climate – a courtyard house with vaulted roofs on load-bearing mud walls, cooled without energy-intensive technology.",
    },
    sections: [
      {
        id: "ausgangslage",
        text: {
          de: "Inmitten der trockenen Landschaft Ägyptens sollte ein Haus entstehen, das sich nahtlos in seine Umgebung einfügt und der extremen Hitze der Region gerecht wird – ohne auf moderne, energieintensive Kühlsysteme angewiesen zu sein.",
          en: "In the heart of Egypt's arid landscape, the task was to design a home that integrates seamlessly into its environment and responds to the region's extreme heat – without relying on modern, energy-intensive cooling systems.",
        },
      },
      {
        id: "entwurfsidee",
        text: {
          de: "Nach eingehender Untersuchung der traditionellen Architektur erwies sich die Typologie des Hofhauses in Kombination mit gewölbten Dächern als wirksamste Lösung. Sie minimiert die Sonneneinstrahlung, maximiert die thermische Effizienz und schafft ein kühles, schattiges Mikroklima. Im Zentrum liegt ein geräumiger Innenhof als Herzstück des Hauses – alle Räume sind zu ihm hin ausgerichtet.",
          en: "An in-depth study of vernacular architecture showed the courtyard typology, combined with vaulted roofs, to be the most effective solution. It minimises sun exposure, maximises thermal efficiency and creates a cool, shaded microclimate. At the centre lies a spacious courtyard as the heart of the house – all rooms are oriented towards it.",
        },
      },
      {
        id: "raum",
        text: {
          de: "Anstelle konventioneller Flachdächer wurde eine Reihe von Gewölbedecken eingeführt. Sie reduzieren den Wärmestau, verbessern die Luftzirkulation und machen Stahlbetondecken überflüssig – es kommen ausschließlich tragende Lehmwände zum Einsatz. Die unterschiedlichen Gewölbehöhen formen ein dynamisches Raumerlebnis; jeder Raum ist durch die Krümmung seiner Decke einzigartig geprägt. Mashrabiya-Fenster filtern an den Außenseiten das Licht, während die hofseitigen Öffnungen ungehinderte Blicke und Querlüftung erlauben.",
          en: "Instead of conventional flat roofs, a series of vaulted ceilings was introduced. They reduce heat accumulation, improve airflow and eliminate the need for reinforced-concrete slabs – only load-bearing mud walls are used. The varying vault heights create a dynamic spatial experience; each room is uniquely shaped by the curvature of its ceiling. Mashrabiya screens filter the light on the outer façades, while the courtyard-facing openings allow unobstructed views and cross-ventilation.",
        },
      },
      {
        id: "material-energie",
        text: {
          de: "Jedes Material wurde nach Nachhaltigkeit, Verfügbarkeit und Leistungsfähigkeit im extremen Klima gewählt. Die gesamte Struktur besteht aus lokalen Lehmziegeln; der orange-rosa Farbton fügt sich in die sandige Umgebung und reflektiert das intensive Sonnenlicht. Ein Pool mit Wasserfall vor dem Innenhof befeuchtet die Luft und kühlt passiv – umgekehrte Gewölbe dienen dabei als Wasserkanäle. Palmen, Olivenbäume und Kakteen spenden Schatten und schützen vor Wind.",
          en: "Every material was chosen for sustainability, availability and performance in an extreme climate. The entire structure is built of local mud bricks; the orange-rose hue blends into the sandy surroundings and reflects the intense sunlight. A pool with a cascading waterfall in front of the courtyard humidifies the air and cools passively – inverted vaults serve as its water channels. Palms, olive trees and cacti provide shade and wind protection.",
        },
      },
      {
        id: "ergebnis",
        text: {
          de: "Das Projekt verbindet historisches Erbe mit modernen Nachhaltigkeitsprinzipien: Durch natürliche Materialien, passive Kühlstrategien und räumliche Harmonie bleibt das Haus die meiste Zeit des Jahres ohne mechanische Kühlung angenehm temperiert – ein Beleg dafür, dass die nachhaltigsten Lösungen oft seit Jahrhunderten existieren.",
          en: "The project fuses heritage with modern sustainability principles: through natural materials, passive cooling strategies and spatial harmony, the house stays comfortable for most of the year without mechanical cooling – proof that the most sustainable solutions have often existed for centuries.",
        },
      },
    ],
    heroImage: {
      src: "/images/projects/haus-m/render-hof.jpg",
      alt: { de: "Haus M – Innenhof mit Gewölbedächern und Pool", en: "Haus M – courtyard with vaulted roofs and pool" },
      kind: "render",
    },
    gallery: [
      {
        layout: "full",
        images: [
          {
            src: "/images/projects/haus-m/render-vorhang.jpg",
            alt: { de: "Schattiger Übergangsraum mit Vorhang am Innenhof", en: "Shaded threshold space with curtain at the courtyard" },
            kind: "render",
          },
        ],
      },
      {
        layout: "pair",
        images: [
          {
            src: "/images/projects/haus-m/kontext.jpg",
            alt: { de: "Kontext: Lage in der Wüstenlandschaft", en: "Context: setting in the desert landscape" },
            kind: "diagram",
          },
          {
            src: "/images/projects/haus-m/schnitt.jpg",
            alt: { de: "Schnitt durch die Gewölberäume", en: "Section through the vaulted spaces" },
            kind: "plan",
          },
        ],
        caption: { de: "Kontext und Schnitt – Linearität des Bauwerks.", en: "Context and section – linearity of the building." },
      },
      {
        layout: "full",
        images: [
          {
            src: "/images/projects/haus-m/grundriss.jpg",
            alt: { de: "Grundriss des eingeschossigen Hofhauses", en: "Plan of the single-storey courtyard house" },
            kind: "plan",
          },
        ],
      },
      {
        layout: "pair",
        images: [
          {
            src: "/images/projects/haus-m/modell-1.jpg",
            alt: { de: "Arbeitsmodell zur Analyse der Hitzeverteilung im Innenraum", en: "Working model analysing indoor heat distribution" },
            kind: "model",
          },
          {
            src: "/images/projects/haus-m/modell-2.jpg",
            alt: { de: "Arbeitsmodell der Gebäudeform", en: "Working model of the building geometry" },
            kind: "model",
          },
        ],
        caption: {
          de: "Modelle zur Analyse der Hitzeverteilung im Innenraum in Abhängigkeit der Gebäudeform.",
          en: "Models analysing indoor heat distribution as a function of building geometry.",
        },
      },
      {
        layout: "pair",
        images: [
          {
            src: "/images/projects/haus-m/mauerwerk.jpg",
            alt: { de: "Traditionelle Konstruktion: Mauerwerksverbände mit ungebrannten Lehmsteinen", en: "Traditional construction: masonry bonds with unfired clay bricks" },
            kind: "photo",
          },
          {
            src: "/images/projects/haus-m/modell-3.jpg",
            alt: { de: "Modellfoto des Hofhauses", en: "Model photograph of the courtyard house" },
            kind: "model",
          },
        ],
        caption: {
          de: "Mauerwerksverbände mit ungebrannten Lehmsteinen / Arbeitsmodell.",
          en: "Masonry bonds with unfired clay bricks / working model.",
        },
      },
    ],
    related: ["haus-m1", "haus-c1"],
    published: true,
    contentStatus: "verified",
  },

  // ------------------------------------------------------------ K21 Hotel+
  {
    slug: "k21-hotel-plus",
    title: "K21 Hotel+",
    categories: ["neubau", "wohnen"],
    location: { de: "Ulm", en: "Ulm" },
    period: "2023–2024",
    clientType: { de: "privat", en: "private" },
    use: {
      de: "Hybrid: Läden, Café, Fitness, Kita, Hotel",
      en: "Hybrid: shops, café, fitness, day-care, hotel",
    },
    scope: { de: "Entwurf", en: "Design" },
    summary: {
      de: "Hybridgebäude auf einem Eckgrundstück in Ulm – die Drehung des Entwurfsrasters um 45 Grad denkt die Wohnungstypologie neu.",
      en: "Hybrid building on a corner plot in Ulm – rotating the design grid by 45 degrees rethinks the housing typology.",
    },
    sections: [
      {
        id: "ausgangslage",
        text: {
          de: "In Ulm wird ein neues Wohngebäude geplant: Auf einem Eckgrundstück in Zentrumsnähe soll ein Hybridgebäude mit Läden, Cafés, einer Kita, einem Fitnessstudio und kleinen Apartments zur Kurz- und Langzeitmiete entstehen. Das Eckgrundstück stellt eine Herausforderung für das Programm der kleinen Wohneinheiten dar.",
          en: "A new residential building is planned in Ulm: a hybrid building with shops, cafés, a day-care centre, a gym and small apartments for short- and long-term rental on a corner plot near the centre. The corner plot poses a challenge for the programme of small residential units.",
        },
      },
      {
        id: "entwurfsidee",
        text: {
          de: "Die prominente Position an der Straßenecke und die Form des Grundstücks erfordern und erlauben ein Umdenken der Wohnungstypologie: Die Drehung des Entwurfsrasters um 45 Grad zu den Grundstücksgrenzen ermöglicht eine neue Anordnung der rund 40 Wohneinheiten – mit privaten Freibereichen für jede Wohnung und optimaler Belichtung über den Tag.",
          en: "The prominent corner position and the plot's shape require and allow the housing typology to be rethought: rotating the design grid by 45 degrees to the property boundaries enables a new arrangement of the roughly 40 units – with private outdoor space for each apartment and optimal daylight throughout the day.",
        },
      },
      {
        id: "raum",
        text: {
          de: "Die Kleinstwohnungen erhalten ein Schlafdeck über der Sanitäreinheit; zur Fassade entsteht ein doppelt hoher, frei nutzbarer Wohn-, Ess- und Kochbereich, in den hohe Verglasungen das Tageslicht tief eindringen lassen. Rücksprünge im Erdgeschoss ermöglichen soziale Interaktion im Stadtraum und definieren gefasste Eingangssituationen ohne Konflikt zum angrenzenden Geh- und Radweg.",
          en: "The micro-apartments are planned with a sleeping deck above the sanitary unit; towards the façade, a double-height, freely usable living, dining and cooking space allows tall glazing to bring daylight deep into the units. Recesses on the ground floor enable social interaction in the urban space and define sheltered entrances without conflicting with the adjacent foot and cycle path.",
        },
      },
      {
        id: "material-energie",
        text: {
          de: "Vegetation ist ein wesentlicher Faktor: Das Eckgebäude bringt Grün in die stark versiegelte Nachbarschaft, als Filter im Schwellenraum zwischen Innen und Außen. Die vielzähligen Balkone sollen von den Nutzenden lebhaft begrünt werden; die Terrassierung zum Innenhof erzeugt das Bild grüner Stadtkaskaden. Auf dem Dach sind großzügige Terrassen geplant – teils den Wohneinheiten, teils der Gemeinschaft zugeordnet, unter anderem für Urban Gardening.",
          en: "Vegetation is a key factor: the corner building brings greenery into a heavily sealed neighbourhood, acting as a filter in the threshold between inside and outside. The numerous balconies are to be planted vividly by their users; the terracing towards the courtyard creates the image of green urban cascades. Generous roof terraces are planned – some allocated to individual units, some communal, including space for urban gardening.",
        },
      },
    ],
    heroImage: {
      src: "/images/projects/k21-hotel-plus/render-strassenecke.jpg",
      alt: { de: "K21 Hotel+ – Hybridgebäude an der Straßenecke in Ulm", en: "K21 Hotel+ – hybrid building on the street corner in Ulm" },
      kind: "render",
    },
    gallery: [
      {
        layout: "full",
        images: [
          {
            src: "/images/projects/k21-hotel-plus/render-fassade.jpg",
            alt: { de: "Begrünte Fassade mit gedrehten Balkonen", en: "Planted façade with rotated balconies" },
            kind: "render",
          },
        ],
      },
      {
        layout: "pair",
        images: [
          {
            src: "/images/projects/k21-hotel-plus/diagramm-1.jpg",
            alt: { de: "Diagramm: Herausforderung des Eckgrundstücks", en: "Diagram: the challenge of the corner plot" },
            kind: "diagram",
          },
          {
            src: "/images/projects/k21-hotel-plus/diagramm-2.jpg",
            alt: { de: "Diagramm: Drehung des Entwurfsrasters um 45 Grad", en: "Diagram: rotating the design grid by 45 degrees" },
            kind: "diagram",
          },
        ],
        caption: {
          de: "Das Eckgrundstück / Drehung des Entwurfsrasters um 45 Grad zu den Grundstücksgrenzen.",
          en: "The corner plot / rotating the design grid by 45 degrees to the property boundaries.",
        },
      },
      {
        layout: "pair",
        images: [
          {
            src: "/images/projects/k21-hotel-plus/diagramm-3.jpg",
            alt: { de: "Diagramm: private Freibereiche und Belichtung", en: "Diagram: private outdoor spaces and daylighting" },
            kind: "diagram",
          },
          {
            src: "/images/projects/k21-hotel-plus/diagramm-4.jpg",
            alt: { de: "Diagramm: Dachterrassen für Wohneinheiten und Gemeinschaft", en: "Diagram: roof terraces for units and community" },
            kind: "diagram",
          },
        ],
        caption: {
          de: "Private Freibereiche und optimale Belichtung / großzügige Dachterrassen, u. a. für Urban Gardening.",
          en: "Private outdoor spaces and optimal daylight / generous roof terraces, including urban gardening.",
        },
      },
      {
        layout: "full",
        images: [
          {
            src: "/images/projects/k21-hotel-plus/render-hof.jpg",
            alt: { de: "Innenhof mit grünen Stadtkaskaden", en: "Courtyard with green urban cascades" },
            kind: "render",
          },
        ],
      },
      {
        layout: "pair",
        images: [
          {
            src: "/images/projects/k21-hotel-plus/grundriss-wohnen.png",
            alt: { de: "Grundriss Wohnebene 1", en: "Floor plan, apartments level 1" },
            kind: "plan",
          },
          {
            src: "/images/projects/k21-hotel-plus/grundriss-schlafdeck.png",
            alt: { de: "Grundriss Wohnebene 2 mit Schlafdecks", en: "Floor plan, apartments level 2 with sleeping decks" },
            kind: "plan",
          },
        ],
        caption: { de: "Grundrisse: Wohnen Level 1 / Level 2 mit Schlafdecks.", en: "Floor plans: apartments level 1 / level 2 with sleeping decks." },
      },
      {
        layout: "pair",
        images: [
          {
            src: "/images/projects/k21-hotel-plus/grundriss-fitness.png",
            alt: { de: "Grundriss 1. Obergeschoss: Fitness", en: "First floor plan: fitness" },
            kind: "plan",
          },
          {
            src: "/images/projects/k21-hotel-plus/grundriss-dach.png",
            alt: { de: "Grundriss Dachgeschoss: Wohnen und Dachterrassen", en: "Top floor plan: apartments and roof terraces" },
            kind: "plan",
          },
        ],
        caption: { de: "Grundrisse: Fitness im 1. Obergeschoss / Dachgeschoss mit Terrassen.", en: "Floor plans: first-floor fitness / top floor with terraces." },
      },
      {
        layout: "full",
        images: [
          {
            src: "/images/projects/k21-hotel-plus/axonometrie.jpg",
            alt: { de: "Axonometrie des Hybridgebäudes", en: "Axonometric of the hybrid building" },
            kind: "diagram",
          },
        ],
      },
    ],
    related: ["haus-m41", "pavillon-s"],
    featured: true,
    published: true,
    contentStatus: "verified",
  },

  // -------------------------------------------------------------- Pavillon S
  {
    slug: "pavillon-s",
    title: "Pavillon S – Green Sound Proofing",
    titleEn: "Pavilion S – Green Sound Proofing",
    categories: ["kultur", "forschung-experiment"],
    location: { de: "Hamburg", en: "Hamburg" },
    period: "2025",
    use: { de: "Wettbewerb", en: "Competition" },
    collaborators: ["In Zusammenarbeit mit: VibeLab und Fraunhofer IAO"],
    summary: {
      de: "Modularer Pavillon in Hamburg, entworfen mit VibeLab und Fraunhofer IAO – begrünter Schallschutz für ein nachhaltiges urbanes Nachtleben.",
      en: "Modular pavilion in Hamburg, designed with VibeLab and Fraunhofer IAO – green soundproofing for sustainable urban nightlife.",
    },
    sections: [
      {
        id: "ausgangslage",
        text: {
          de: "In Zusammenarbeit mit VibeLab und dem Fraunhofer IAO entwarf studio more den Green-Sound-Proofing-Pavillon in Hamburg – eine flexible, modulare Struktur, die das Zusammenspiel von urbanem Nachtleben, Nachhaltigkeit und akustischer Kontrolle neu definiert.",
          en: "In collaboration with VibeLab and Fraunhofer IAO, studio more designed the Green Sound Proofing pavilion in Hamburg – a flexible, modular structure that redefines the interplay of urban nightlife, sustainability and acoustic control.",
        },
      },
      {
        id: "entwurfsidee",
        text: {
          de: "Der Pavillon basiert auf einem einzigen Modul, das gestapelt und horizontal erweitert werden kann. Jedes Modul ist vorgefertigt und vor Ort leicht montierbar – das reduziert Bauzeit und Umweltbelastung und erlaubt eine ständige Neukonfiguration mit den sich wandelnden Bedürfnissen der Stadt.",
          en: "The pavilion is built from a single module that can be stacked and extended horizontally. Each module is prefabricated and easily assembled on site – reducing construction time and environmental impact while allowing continuous reconfiguration as the city's needs evolve.",
        },
      },
      {
        id: "material-energie",
        text: {
          de: "Die Forschung des Fraunhofer IAO konzentrierte sich auf die Integration von Schallschutz und Vegetation: Dichtes Grün kombiniert mit innovativen akustischen Materialien absorbiert Lärm, verbessert Luftqualität und Artenvielfalt und schafft einen ruhigen Zufluchtsort in der Stadt.",
          en: "Fraunhofer IAO's research focused on integrating soundproofing with vegetation: dense greenery combined with innovative acoustic materials absorbs noise, improves air quality and biodiversity, and creates a quiet refuge in the city.",
        },
      },
      {
        id: "ergebnis",
        text: {
          de: "VibeLab brachte seine Expertise in urbanem Nachtleben und kultureller Aktivierung ein: Mit anpassungsfähigen Räumen für Aufführungen und Zusammenkünfte wird der Pavillon zum Knotenpunkt gemeinschaftlichen Engagements. Konzipiert für Auf- und Rückbau, verfolgt er einen zirkulären Ansatz der Stadtgestaltung – an der Schnittstelle von Architektur, Ökologie und Nachtleben.",
          en: "VibeLab contributed its expertise in urban nightlife and cultural activation: with adaptable spaces for performances and gatherings, the pavilion becomes a hub for community engagement. Designed for assembly and disassembly, it takes a circular approach to urban design – at the intersection of architecture, ecology and nightlife.",
        },
      },
    ],
    heroImage: {
      src: "/images/projects/pavillon-s/render-1.jpg",
      alt: { de: "Pavillon S – begrünte modulare Struktur im Stadtraum", en: "Pavilion S – planted modular structure in the urban space" },
      kind: "render",
    },
    gallery: [
      {
        layout: "pair",
        images: [
          {
            src: "/images/projects/pavillon-s/diagramm-module.jpg",
            alt: { de: "Diagramm: das Einzelmodul und seine Stapelung", en: "Diagram: the single module and its stacking" },
            kind: "diagram",
          },
          {
            src: "/images/projects/pavillon-s/diagramm-konfiguration.jpg",
            alt: { de: "Diagramm: mögliche Raumkonfigurationen", en: "Diagram: possible spatial configurations" },
            kind: "diagram",
          },
        ],
        caption: {
          de: "Ein Modul, unendliche Konfigurationen: Stapelung und horizontale Erweiterung.",
          en: "One module, endless configurations: stacking and horizontal extension.",
        },
      },
      {
        layout: "full",
        images: [
          {
            src: "/images/projects/pavillon-s/render-2.jpg",
            alt: { de: "Pavillon bei Nacht als Ort des urbanen Nachtlebens", en: "The pavilion at night as a place of urban nightlife" },
            kind: "render",
          },
        ],
      },
      {
        layout: "pair",
        images: [
          {
            src: "/images/projects/pavillon-s/visual-1.jpg",
            alt: { de: "Begrünte Module mit akustisch wirksamen Oberflächen", en: "Planted modules with acoustically effective surfaces" },
            kind: "render",
          },
          {
            src: "/images/projects/pavillon-s/visual-2.jpg",
            alt: { de: "Innenraum des Pavillons", en: "Interior of the pavilion" },
            kind: "render",
          },
        ],
      },
    ],
    related: ["k21-hotel-plus", "haus-m"],
    featured: true,
    published: true,
    contentStatus: "verified",
  },

  // ------------------------------------------ Unpublished / needs confirmation
  {
    slug: "catholic-church-in-transformation",
    title: "Catholic Church in Transformation",
    categories: ["kultur"],
    gallery: [],
    published: false,
    contentStatus: "needs-confirmation",
    internalNote:
      "The old website page for this project contained text and facts duplicated from K21 Hotel+. Correct project content must be supplied by the client before publication.",
  },
  {
    slug: "ms-16",
    title: "MS 16",
    categories: ["neubau"],
    gallery: [],
    published: false,
    contentStatus: "needs-confirmation",
    internalNote:
      "The old website page for this project contained text and facts duplicated from K21 Hotel+. Correct project content must be supplied by the client before publication.",
  },
  {
    slug: "hw-99",
    title: "HW 99",
    categories: ["umbau-sanierung"],
    gallery: [],
    published: false,
    contentStatus: "needs-confirmation",
    internalNote:
      "The old website page for this project contained text and facts duplicated from Haus U5 (including its Fachplaner credits). Correct project content must be supplied by the client before publication.",
  },
  {
    slug: "senegal-school",
    title: "Senegal School",
    categories: ["kultur"],
    gallery: [],
    published: false,
    contentStatus: "needs-confirmation",
    internalNote:
      "The old website page for this project contained text and facts duplicated from K21 Hotel+. Correct project content must be supplied by the client before publication.",
  },
];

export const publishedProjects = projects.filter((p) => p.published);
export const featuredProjects = publishedProjects.filter((p) => p.featured).slice(0, 6);

export function getProject(slug: string): Project | undefined {
  return publishedProjects.find((p) => p.slug === slug);
}

export function relatedProjects(project: Project): Project[] {
  return (project.related ?? [])
    .map((slug) => getProject(slug))
    .filter((p): p is Project => Boolean(p))
    .slice(0, 3);
}
