import type { Localized } from "@/data/types";

export type Founder = {
  name: string;
  role: Localized;
  bio: { de: string[]; en: string[] };
};

/**
 * Founder biographies and team list migrated from the "About studio more"
 * page of the old website. No portrait photographs existed on the old site;
 * the team is therefore presented without images until the client provides
 * authentic photography (see docs/CONTENT-TODO.md).
 */
export const founders: Founder[] = [
  {
    name: "Dr. Mostafa Aboughaly",
    role: { de: "Gründungspartner, Freier Architekt", en: "Founding partner, architect" },
    bio: {
      de: [
        "Mostafa studierte Architektur an der Architectural Association School of Architecture (AA) in London, der Universität Stuttgart und der GUC. Er promovierte an der Universität Stuttgart, wo er seit 2017 in den Bereichen architektonischer Entwurf und experimentelles Bauen lehrt.",
        "Vor der Gründung von studio more im Jahr 2023 arbeitete er in Architekturbüros in London, München und Stuttgart und sammelte Erfahrung über ein breites Spektrum an Projekten und Maßstäben. Seine Arbeit konzentriert sich auf räumliche Klarheit, innovative Bausysteme und die Verbindung von Forschung und Praxis.",
        "Neben der Lehre hält Mostafa regelmäßig Vorträge, wird zu akademischen Jurys eingeladen und arbeitet an interdisziplinärer Forschung an der Schnittstelle von Architektur, Materialwissenschaft und Technologie.",
        "Gemeinsam mit Chiara leitete Mostafa Entwurf und Realisierung eines forschungsgetriebenen Holzbaus im Exzellenzcluster der Universität Stuttgart – ein kollaboratives Projekt, das ihr Verständnis von Architektur als Brücke zwischen Forschung und Realität verkörpert.",
      ],
      en: [
        "Mostafa studied architecture at the Architectural Association School of Architecture (AA) in London, the University of Stuttgart, and the GUC. He completed his PhD at the University of Stuttgart, where he has been teaching since 2017 in architectural design and experimental construction.",
        "Before founding studio more in 2023, he worked in architecture offices in London, Munich and Stuttgart, gaining experience across a wide range of projects and scales. His work focuses on spatial clarity, innovative building systems, and integrating research with practice.",
        "In addition to teaching, Mostafa regularly gives lectures, is invited to academic juries, and collaborates on interdisciplinary research at the intersection of architecture, material science and technology.",
        "Together with Chiara, Mostafa led the design and construction of a research-driven timber building within the Cluster of Excellence at the University of Stuttgart — a collaborative project that embodies their commitment to architecture as a bridge between research and reality.",
      ],
    },
  },
  {
    name: "Chiara Weiß",
    role: { de: "Gründungspartnerin, Freie Architektin", en: "Founding partner, architect" },
    bio: {
      de: [
        "Chiara studierte Architektur an der Technischen Hochschule Nürnberg Georg Simon Ohm, wo sie eine starke Grundlage in nachhaltigem Entwerfen und Gebäudetechnologien entwickelte. Anschließend arbeitete sie in mehreren renommierten Architekturbüros in Deutschland und Italien – unter anderem in München, Berlin, Belluno, Sizilien und Stuttgart. Diese vielfältigen Erfahrungen prägten ihre Sensibilität für Ort, Materialität und Atmosphäre.",
        "Seit 2018 lehrt Chiara Architektur und Entwurfsstudios auf Hochschulebene mit Schwerpunkt auf räumlicher Komposition, Tektonik und architektonischem Erzählen. Sie wird regelmäßig als Gastkritikerin und Jurymitglied an Architekturschulen in Deutschland eingeladen.",
        "Derzeit promoviert sie an der Universität Stuttgart; ihre Forschung untersucht das Zusammenspiel von architektonischer Qualität und nachhaltiger Entwicklung – wie Entwurfsexzellenz, Verantwortung und ökologisches Bewusstsein in der zeitgenössischen Architektur sinnvoll zusammenwirken können. Diese kritische, zukunftsorientierte Perspektive prägt ihre Praxis bei studio more und schlägt die Brücke zwischen Theorie und Umsetzung.",
      ],
      en: [
        "Chiara studied architecture at the Technische Hochschule Nürnberg Georg Simon Ohm, where she developed a strong foundation in sustainable design and building technologies. She went on to work in several renowned architecture offices across Germany and Italy, including practices in Munich, Berlin, Belluno, Sicily and Stuttgart. These diverse experiences shaped her sensitivity to place, materiality and atmosphere.",
        "Chiara has been teaching architecture and design studios at university level since 2018, focusing on spatial composition, tectonics and architectural storytelling. She is regularly invited as a guest critic and jury member at architecture schools across Germany.",
        "She is currently pursuing her PhD at the University of Stuttgart, where her research examines the interplay between architectural quality and sustainable development — how design excellence, responsibility and ecological awareness can coexist meaningfully in contemporary architecture. This critical, future-oriented perspective informs her practice at studio more, bridging the gap between theory and implementation.",
      ],
    },
  },
];

/** Team list as published on the old website. */
export const teamMembers: string[] = [
  "Chiara Weiß",
  "Christian Nolden",
  "Franka Eichinger",
  "Julia Grigorieva",
  "Marlene Wendlik",
  "Mostafa Aboughaly",
  "Sarah Dorfschmid",
  "Yara Capelnik",
];

export type Principle = {
  id: string;
  title: string;
  text: Localized;
};

/** The three "more:" principles, rewritten concisely from the old website. */
export const principles: Principle[] = [
  {
    id: "architecture",
    title: "more: architecture",
    text: {
      de: "Fokus auf die Qualität der Architektur und den künstlerischen, raumbildenden Entwurf – von der ersten Idee bis zum gebauten Detail.",
      en: "A focus on architectural quality and artistic, space-defining design – from the first idea to the built detail.",
    },
  },
  {
    id: "social",
    title: "more: social aspects",
    text: {
      de: "Wie kann gebaute Architektur unser Zusammenleben positiv beeinflussen? Wir achten auf die Wirkung des Gebauten und auf einen respektvollen Umgang mit allen Baubeteiligten.",
      en: "How can built architecture positively influence the way we live together? We pay attention to the effect of what is built and to respectful collaboration with everyone involved in construction.",
    },
  },
  {
    id: "responsibility",
    title: "more: responsibility",
    text: {
      de: "Nachhaltigkeit der Materialien, bewusster Umgang mit dem Kontext und dem (bau-)geschichtlichen Erbe – Verantwortung für unsere Umwelt.",
      en: "Sustainable materials, a conscious approach to context and to built heritage – responsibility for our environment.",
    },
  },
];
