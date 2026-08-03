import type { FaqGroup } from "@/data/types";

/**
 * FAQ content migrated (in selection) from the old website's FAQ page.
 *
 * IMPORTANT: Items flagged with `reviewStatus: "needs-professional-review"`
 * contain statements about prices, durations, HOAI, funding programmes
 * (KfW/BAFA), GEG, planning law or technical regulations. These must be
 * reviewed by the client / a qualified professional before launch.
 * The flag is never rendered publicly. See docs/CONTENT-TODO.md.
 */
export const faqGroups: FaqGroup[] = [
  {
    id: "start-ablauf",
    title: { de: "Start und Ablauf", en: "Getting started" },
    items: [
      {
        id: "was-macht-architekt",
        question: { de: "Was macht ein Architekt bzw. eine Architektin?", en: "What does an architect do?" },
        answer: {
          de: [
            "Architekt:innen entwerfen Räume, koordinieren die Planungsbeteiligten, erstellen Genehmigungsunterlagen, begleiten die Ausführung und steuern die Kosten. Dabei balancieren wir:",
            "- Funktion und Gestaltung",
            "- rechtliche und technische Anforderungen",
            "- Wirtschaftlichkeit und architektonische Qualität",
            "- Nachhaltigkeit und Anpassungsfähigkeit",
          ],
          en: [
            "An architect designs spaces, coordinates planning disciplines, prepares permit documents, manages costs and supervises execution. We balance:",
            "- function and form",
            "- legal and technical standards",
            "- budget and architectural quality",
            "- sustainability and future flexibility",
          ],
        },
      },
      {
        id: "richtigen-architekten-finden",
        question: { de: "Wie finde ich das richtige Architekturbüro?", en: "How do I choose the right architect?" },
        answer: {
          de: [
            "Wichtig sind:",
            "- gegenseitiges Vertrauen und offene Kommunikation",
            "- eine gemeinsame architektonische Haltung",
            "- Erfahrung mit vergleichbaren Projekten",
            "- klare Verträge und nachvollziehbare Kostengestaltung",
            "Wir bieten ein kostenloses Erstgespräch an – so lernen wir uns und Ihr Vorhaben unverbindlich kennen.",
          ],
          en: [
            "Key factors are:",
            "- trust and transparent communication",
            "- a shared architectural vision and values",
            "- relevant experience with your building type",
            "- a clear contract and cost structure",
            "We offer a free initial consultation – a chance to get to know each other and your project without obligation.",
          ],
        },
      },
      {
        id: "dauer-planung",
        question: { de: "Wie lange dauert die Planung eines Hauses?", en: "How long does it take to design a house?" },
        answer: {
          de: [
            "Die Planungsphase dauert meist 3–6 Monate, abhängig von Entwurfsumfang und Genehmigungsdauer. Die Bauausführung benötigt weitere 12–18 Monate, je nach Projektgröße und äußeren Bedingungen.",
          ],
          en: [
            "Design and permitting typically take 3–6 months, depending on the scope of the design and the permit review. Construction adds a further 12–18 months, depending on project size and external conditions.",
          ],
        },
        reviewStatus: "needs-professional-review",
      },
      {
        id: "dauer-bau",
        question: { de: "Wie lange dauert ein Bauvorhaben insgesamt?", en: "How long does construction take overall?" },
        answer: {
          de: [
            "Vom ersten Entwurf bis zur Fertigstellung dauert ein Bauvorhaben in der Regel 18 bis 24 Monate:",
            "- 3–6 Monate: Planung",
            "- 2–4 Monate: Genehmigungsverfahren",
            "- 12–15 Monate: Bauausführung",
            "Individuelle Umstände wie Witterung oder Materialverfügbarkeit können Einfluss nehmen.",
          ],
          en: [
            "From first design to handover, a project usually takes 18 to 24 months:",
            "- 3–6 months: planning",
            "- 2–4 months: permit review",
            "- 12–15 months: construction",
            "Individual factors such as weather or the availability of trades can affect the schedule.",
          ],
        },
        reviewStatus: "needs-professional-review",
      },
    ],
  },
  {
    id: "umbau-sanierung",
    title: { de: "Umbau und Sanierung", en: "Conversion and refurbishment" },
    items: [
      {
        id: "haus-sanieren",
        question: { de: "Kann mein Haus saniert werden?", en: "Can my house be renovated?" },
        answer: {
          de: [
            "Ja, selbstverständlich. Vor der Sanierung prüfen wir:",
            "- Standsicherheit, ggf. mit Tragwerksplaner:innen",
            "- Einhaltung geltender Vorschriften (z. B. Energie-, Brand- und Schallschutz)",
            "- Möglichkeiten der Raumoptimierung",
            "- Potenziale für Fördermittel und energetische Verbesserung",
            "Wir entwickeln nachhaltige Sanierungskonzepte – auch in Etappen – und koordinieren alle Beteiligten.",
          ],
          en: [
            "Absolutely. Before renovating, we evaluate:",
            "- structural stability, in coordination with structural engineers where needed",
            "- compliance with current codes (e.g. energy, fire protection, sound insulation)",
            "- the feasibility of spatial reorganisation",
            "- energy and funding potential",
            "We develop sustainable, phased renovation strategies and coordinate everyone involved.",
          ],
        },
        reviewStatus: "needs-professional-review",
      },
      {
        id: "wohnen-waehrend-sanierung",
        question: { de: "Kann ich während der Sanierung wohnen bleiben?", en: "Can I live at home during the renovation?" },
        answer: {
          de: [
            "Das hängt vom Umfang und der Art der Maßnahmen ab. Bei reinen Innenraumarbeiten oder nichttragenden Umbauten ist eine Nutzung oft möglich. Wir planen:",
            "- Etappierung, Raum für Raum",
            "- Staubschutz und temporäre Zugänge",
            "- Lärmminimierung und funktionale Übergangsregelungen",
          ],
          en: [
            "It depends on the scope and type of renovation. For interior upgrades without structural work, phased occupation is often possible. We organise:",
            "- construction in stages, room by room",
            "- dust protection and temporary access",
            "- minimisation of noise and downtime",
          ],
        },
      },
      {
        id: "architekt-fuer-anbau",
        question: { de: "Brauche ich Architekt:innen für einen Anbau?", en: "Do I need an architect for an extension?" },
        answer: {
          de: [
            "Ja. Auch bei kleineren Anbauten ist die Einbindung von Architekt:innen sinnvoll und oft notwendig:",
            "- Einhaltung von Bauordnung und Statik",
            "- stimmige Einfügung in den Bestand",
            "- Optimierung von Raum, Licht und Erschließung",
            "- Vermeidung teurer Fehlplanungen",
          ],
          en: [
            "Yes. Even small extensions affect the structure, fire protection and the legal framework. An architect ensures:",
            "- compliance with building codes and structural requirements",
            "- a coherent integration into the existing building",
            "- optimisation of space, light and circulation",
            "- avoidance of costly planning mistakes",
          ],
        },
        reviewStatus: "needs-professional-review",
      },
      {
        id: "denkmalschutz",
        question: { de: "Unterstützen Sie bei denkmalgeschützten Gebäuden?", en: "Can you help with listed buildings?" },
        answer: {
          de: [
            "Ja. Bei denkmalgeschützten Gebäuden übernehmen wir:",
            "- Dokumentation und Zustandserfassung",
            "- Entwurf denkmalverträglicher, reversibler Maßnahmen",
            "- Abstimmung mit der zuständigen Denkmalschutzbehörde",
            "- Integration von Brandschutz, Barrierefreiheit und Energiefragen",
          ],
          en: [
            "Yes. Renovating listed buildings requires close cooperation with heritage conservation authorities. We offer:",
            "- inventory analysis and documentation",
            "- design of sensitive, reversible interventions",
            "- coordination with the authorities",
            "- integration of fire protection, accessibility and energy measures",
          ],
        },
        reviewStatus: "needs-professional-review",
      },
    ],
  },
  {
    id: "kosten-leistungen",
    title: { de: "Kosten und Leistungen", en: "Costs and services" },
    items: [
      {
        id: "baukosten-kontrollieren",
        question: { de: "Wie kann ich Baukosten kontrollieren?", en: "How can I control construction costs?" },
        answer: {
          de: [
            "Eine zuverlässige Kostenkontrolle beginnt früh im Projektverlauf. Wir gewährleisten:",
            "- fundierte Kostenschätzungen in jeder Projektphase",
            "- transparente Ausschreibung und Angebotsvergleich",
            "- Kostenverfolgung während der Bauausführung",
            "- klare Trennung von Bau- und Baunebenkosten",
            "Durch professionelle Ausschreibung, Vertragsgestaltung und Bauleitung lassen sich unvorhergesehene Kosten minimieren.",
          ],
          en: [
            "Effective cost control begins in the early planning phases. We ensure:",
            "- reliable cost estimates in every project phase",
            "- transparent tendering and comparison of offers",
            "- continuous cost tracking during construction",
            "- a clear separation of construction and incidental costs",
            "Professional tendering, contract design and site supervision minimise unforeseen costs.",
          ],
        },
        reviewStatus: "needs-professional-review",
      },
      {
        id: "handwerkerangebote",
        question: { de: "Helfen Sie bei Handwerkerangeboten?", en: "Can you help with contractor quotes?" },
        answer: {
          de: [
            "Ja. Wir übernehmen:",
            "- Erstellung der Leistungsverzeichnisse",
            "- Einholung und Auswertung von Angeboten",
            "- Vergleich der Positionen im Preisspiegel",
            "- Unterstützung bei der Vertragsvergabe",
            "So erhalten Sie belastbare Angebote und vermeiden spätere Nachträge.",
          ],
          en: [
            "Yes. We take over:",
            "- preparation of tender documents",
            "- solicitation and evaluation of offers",
            "- comparative analysis of pricing",
            "- advice during contract negotiations",
            "This ensures transparency and quality before construction begins.",
          ],
        },
        reviewStatus: "needs-professional-review",
      },
      {
        id: "bauleitung",
        question: { de: "Bieten Sie Bauleitung an?", en: "Do you offer site supervision?" },
        answer: {
          de: [
            "Ja. Wir übernehmen die Objektüberwachung und vertreten die Interessen der Bauherrschaft auf der Baustelle:",
            "- Kontrolle von Terminen, Kosten und Qualität",
            "- Durchführung von Baubesprechungen",
            "- Rechnungsprüfung",
            "- Überwachung der Ausführung und der verwendeten Materialien",
            "- Dokumentation und Übergabe",
          ],
          en: [
            "Yes. We perform construction supervision and represent the client's interests on site:",
            "- monitoring time, cost and quality",
            "- site meetings and protocols",
            "- approval of invoices",
            "- review of materials and execution",
            "- documentation and handover",
          ],
        },
        reviewStatus: "needs-professional-review",
      },
      {
        id: "gewerke-koordinieren",
        question: { de: "Koordinieren Sie die Gewerke?", en: "Do you coordinate the trades?" },
        answer: {
          de: [
            "Ja. Wir koordinieren als verantwortliches Architekturbüro:",
            "- Ablauf- und Bauzeitenplanung",
            "- Schnittstellenkoordination aller Gewerke",
            "- Kontrolle auf der Baustelle zur Vermeidung von Kollisionen",
            "- Kommunikation zwischen Bauherrschaft, Handwerker:innen und Fachplaner:innen",
            "Diese Rolle ist entscheidend für Qualität und Terminsicherheit.",
          ],
          en: [
            "Yes. As the responsible architects, we manage:",
            "- scheduling and construction sequences",
            "- coordination between all trades",
            "- on-site supervision to avoid clashes and delays",
            "- communication between client, contractors and consultants",
            "This role is essential for quality and schedule reliability.",
          ],
        },
      },
    ],
  },
  {
    id: "energie-nachhaltigkeit",
    title: { de: "Energie und Nachhaltigkeit", en: "Energy and sustainability" },
    items: [
      {
        id: "energieeffiziente-sanierung",
        question: { de: "Was ist eine energieeffiziente Sanierung?", en: "What counts as an energy-efficient renovation?" },
        answer: {
          de: [
            "Eine energieeffiziente Sanierung umfasst Maßnahmen zur deutlichen Senkung des Wärmeverlusts und des Energiebedarfs eines Gebäudes:",
            "- Dämmung von Dach, Fassade und Kellerdecke",
            "- Dreifachverglasung und luftdichte Fensteranschlüsse",
            "- Umstieg auf effiziente Heiztechnik, etwa Wärmepumpen",
            "- kontrollierte Lüftung mit Wärmerückgewinnung",
            "- Minimierung von Wärmebrücken",
          ],
          en: [
            "An energy-efficient renovation significantly reduces a building's heat loss and energy demand:",
            "- high-performance insulation of roof, façade and basement ceiling",
            "- triple-glazed windows and airtight joinery",
            "- modern, efficient heating such as heat pumps",
            "- controlled ventilation with heat recovery",
            "- minimisation of thermal bridges",
          ],
        },
        reviewStatus: "needs-professional-review",
      },
      {
        id: "kfw-bafa",
        question: { de: "Was sind KfW- und BAFA-Förderungen?", en: "What are KfW and BAFA subsidies?" },
        answer: {
          de: [
            "KfW und BAFA sind Förderprogramme der Bundesregierung für energieeffizientes Bauen und Sanieren:",
            "- KfW: zinsvergünstigte Kredite und Tilgungszuschüsse für Neubau und Sanierung",
            "- BAFA: direkte Zuschüsse für Einzelmaßnahmen wie Wärmepumpen, Lüftungsanlagen oder Energieberatung",
            "Wir beraten bei der Auswahl geeigneter Programme und unterstützen bei der Antragstellung über qualifizierte Energieberater:innen.",
          ],
          en: [
            "KfW and BAFA are German federal funding programmes for energy-efficient building and renovation:",
            "- KfW: low-interest loans and repayment grants for new construction and renovation",
            "- BAFA: direct grants for individual measures such as heat pumps, ventilation systems or energy consulting",
            "We advise on suitable programmes and support the application process together with qualified energy consultants.",
          ],
        },
        reviewStatus: "needs-professional-review",
      },
      {
        id: "waermepumpe",
        question: { de: "Sollte ich eine Wärmepumpe einsetzen?", en: "Should I use a heat pump?" },
        answer: {
          de: [
            "Wärmepumpen sind ein zentraler Bestandteil einer klimafreundlichen Wärmeversorgung. Sie arbeiten besonders effizient in gut gedämmten Gebäuden mit Niedertemperatur-Heizsystemen. Mögliche Systeme:",
            "- Luft-Wasser-Wärmepumpen (geringerer Aufwand)",
            "- Sole-Wasser-Wärmepumpen (höherer Wirkungsgrad, höhere Investition)",
            "- Hybridsysteme, z. B. in Bestandsgebäuden",
          ],
          en: [
            "Heat pumps are a key technology for decarbonising buildings. They are most efficient in well-insulated buildings with low-temperature heating. Options include:",
            "- air-to-water heat pumps (lower investment)",
            "- ground-source heat pumps (higher efficiency, higher investment)",
            "- hybrid systems, e.g. in existing buildings",
          ],
        },
        reviewStatus: "needs-professional-review",
      },
      {
        id: "nachhaltiges-bauen",
        question: { de: "Was bedeutet nachhaltiges Bauen für Sie?", en: "What is sustainable design for you?" },
        answer: {
          de: [
            "Nachhaltiges Bauen verbindet ökologische Verantwortung mit Nutzungskomfort:",
            "- kompakte, anpassungsfähige Grundrisse",
            "- Verwendung nachwachsender oder recycelter Materialien",
            "- Minimierung des Energiebedarfs",
            "- Vorbereitung auf zukünftige Anforderungen",
            "- Lebenszyklusbetrachtung: Rückbau und Wiederverwendung",
          ],
          en: [
            "Sustainable design combines ecological responsibility with user comfort:",
            "- compact, flexible floor plans",
            "- renewable or recycled materials",
            "- low energy demand through passive design",
            "- adaptability to future use",
            "- lifecycle thinking: deconstruction and reuse",
          ],
        },
      },
    ],
  },
  {
    id: "genehmigung-bau",
    title: { de: "Genehmigung und Bauausführung", en: "Permits and construction" },
    items: [
      {
        id: "baugenehmigung",
        question: { de: "Brauche ich eine Baugenehmigung?", en: "Do I need planning permission?" },
        answer: {
          de: [
            "In der Regel ja. Ausnahmen gelten nur für bestimmte genehmigungsfreie Vorhaben nach der jeweiligen Landesbauordnung. Genehmigungspflicht besteht insbesondere bei:",
            "- Neubauten",
            "- An- und Umbauten",
            "- Nutzungsänderungen",
            "- Eingriffen in die tragende Substanz",
            "Wir übernehmen den gesamten Genehmigungsprozess inklusive Abstimmung mit den Behörden und Erstellung der vollständigen Unterlagen.",
          ],
          en: [
            "In most cases, yes. Exceptions exist only for certain minor structures, depending on the state building code. Permission is required in particular for:",
            "- new buildings",
            "- extensions and conversions",
            "- changes of use",
            "- structural alterations",
            "We handle the entire permit process, including coordination with the authorities and preparation of all necessary documentation.",
          ],
        },
        reviewStatus: "needs-professional-review",
      },
      {
        id: "bebauungsplan",
        question: { de: "Was ist ein Bebauungsplan?", en: "What is a Bebauungsplan (development plan)?" },
        answer: {
          de: [
            "Ein Bebauungsplan ist ein verbindlicher Bauleitplan. Er legt unter anderem fest:",
            "- zulässige Nutzung (z. B. Wohnen, Gewerbe)",
            "- Baugrenzen und Baulinien",
            "- Gebäudehöhen und Geschossanzahl",
            "- Grundflächen- und Geschossflächenzahl",
            "- Dachformen, Materialien und gestalterische Vorgaben",
            "Bauvorhaben müssen sich daran orientieren oder gezielt Ausnahmen und Befreiungen beantragen.",
          ],
          en: [
            "A Bebauungsplan is a legally binding development plan. Among other things it defines:",
            "- permitted use (e.g. residential, commercial)",
            "- building lines and setbacks",
            "- building heights and number of storeys",
            "- plot coverage and floor-area ratio",
            "- roof shapes, materials and design guidelines",
            "Projects must conform to it or apply for specific exemptions.",
          ],
        },
        reviewStatus: "needs-professional-review",
      },
      {
        id: "bodengutachten",
        question: { de: "Brauche ich ein Bodengutachten?", en: "Do I need a soil survey?" },
        answer: {
          de: [
            "In der Regel ja. Ein Baugrundgutachten ist erforderlich für:",
            "- den Tragfähigkeitsnachweis des Baugrunds",
            "- die Ermittlung von Grundwasserständen oder Altlasten",
            "- die Vermeidung von Setzungsschäden",
            "Das Gutachten ist Grundlage für die Gründung und kann die Baukosten maßgeblich beeinflussen.",
          ],
          en: [
            "Usually yes. A soil survey is essential to:",
            "- determine the load-bearing capacity of the ground",
            "- identify groundwater levels or contamination",
            "- prevent settlement or foundation damage",
            "It informs the foundation type and can significantly influence construction costs.",
          ],
        },
        reviewStatus: "needs-professional-review",
      },
      {
        id: "barrierefrei",
        question: { de: "Planen Sie barrierefrei?", en: "Do you offer barrier-free design?" },
        answer: {
          de: [
            "Ja. Wir planen barrierefrei gemäß den einschlägigen Normen und den Anforderungen der jeweiligen Landesbauordnung. Typische Maßnahmen:",
            "- stufenlose Erschließung",
            "- ausreichende Türbreiten",
            "- Bewegungsflächen in Bad und Küche",
            "- vorausschauende Planung für altersgerechtes Wohnen",
          ],
          en: [
            "Yes. We plan in accordance with the relevant standards and the requirements of the state building code. Typical measures:",
            "- step-free access",
            "- sufficient door widths",
            "- turning circles in bathrooms and kitchens",
            "- future adaptability for ageing in place",
          ],
        },
        reviewStatus: "needs-professional-review",
      },
    ],
  },
];
