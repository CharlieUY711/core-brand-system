// CORE i18n — English.
// Mirrors the exact key structure of es.ts — see that file for the notes on
// deliberately untranslated frozen terminology. Typed against es.ts's
// Dictionary shape so a missing/mistyped key fails typecheck instead of
// silently falling back at runtime.
//
// Where approved English copy already existed in the frozen Brand Guidelines
// (§ 10's rule statement) and in CorporateModel's EN_CAPTIONS, this file
// reproduces it verbatim rather than retranslating from Spanish, so the
// portal and the guidelines can never state the corporate model in two
// different sets of words.

import type { Dictionary } from "./es";

const en: Dictionary = {
  a11y: {
    skipToContent: "Skip to main content",
    primaryNav: "Primary navigation",
    breadcrumbNav: "Breadcrumb",
    footerNav: "Footer",
    menuOpen: "Menu",
    menuClose: "Close",
    languageSwitcher: "Change language",
  },
  nav: {
    tagline: "Brand & System",
    portalVersion: "Portal v1.0",
    groups: {
      brand: "Brand",
      system: "System",
      architecture: "Corporate Architecture",
      resources: "Resources",
    },
    items: {
      brandGuidelines: "Brand Guidelines",
      brandDefinitions: "Brand Definitions",
      logoAssets: "Logo & Assets",
      colorSystem: "Color System",
      typography: "Typography",
      coreOrbit: "CORE Orbit",
      overview: "Overview",
      logistics: "CORE Logistics",
      rep: "CORE Rep",
      market: "CORE Market",
      services: "CORE Services",
      intelligence: "CORE Intelligence",
      finance: "CORE Finance",
      charlie: "Charlie",
      oddy: "ODDY",
      ondemand: "OnDemand",
      comita: "COMITA",
      facilia: "FACILIA",
      kora: "KORA",
      alma: "ALMA",
      assets: "Assets",
      icons: "Icons",
      uiTokens: "UI Tokens",
    },
  },
  breadcrumb: {
    root: "CORE",
    brand: "Brand",
    system: "System",
    architecture: "Corporate Architecture",
    resources: "Resources",
  },
  footer: {
    tagline: "CORE — Brand & System",
    legal: "© {year} CORE / ODDY. All rights reserved.",
    linkGuidelines: "Brand Guidelines",
    linkArchitecture: "Corporate Architecture",
    linkResources: "Resources",
  },
  home: {
    metaTitle: "CORE — Brand & System",
    eyebrow: "CORE Brand & System · Portal v1.0",
    tagline: "Brand & System",
    ledeBefore: "The identity, architecture and visual system of ",
    ledeAfter: " — the core that connects and orchestrates the ecosystem.",
    fact1Q: "What is CORE?",
    fact1A: "The ecosystem's Business Operating System — the platform, intelligence and orchestration layer.",
    fact2Q: "How does it relate to Charlie?",
    fact2A: "Charlie defines vision and governance. CORE executes it — CORE is the system Charlie operates, never its parent.",
    fact3Q: "What does this portal contain?",
    fact3A: "Brand identity, the CORE technology system, Corporate Architecture and reference resources.",
    fact4Q: "How do I navigate the portal?",
    fact4A: "Four numbered sections in the sidebar, or the system map below — every page shows a breadcrumb trail back to here.",
    systemMapEyebrow: "System map",
    systemMapTitle: "Four sections, one portal",
    corporateModelEyebrow: "Corporate model",
    corporateModelTitle: "One system. Clear responsibilities.",
    corporateModelLede: "Charlie defines. CORE orchestrates and executes. The entities and operations — ODDY (with OnDemand), COMITA, FACILIA, KORA and ALMA — carry out the business.",
  },
  architecture: {
    metaTitle: "Corporate Architecture",
    sectionTitle: "Corporate Architecture",
    lede: "Brand defines how CORE looks. Corporate Architecture defines how the ecosystem is organized and who does what — the two are never mixed. Charlie defines the vision; CORE is the Business Operating System that orchestrates and executes; ODDY (with its subsidiary OnDemand), COMITA, FACILIA, KORA and ALMA are the entities that carry out the business.",
    ruleText: "Charlie defines. CORE orchestrates and executes. ODDY operates territory logistics and is the parent of OnDemand, which operates free-trade-zone and international logistics. COMITA trades goods; FACILIA delivers services — never the other's function. KORA develops the group's own technology and ALMA looks after its people. ODDY is never a parent of CORE.",
    tableCaption: "Responsibilities by entity",
    tableColEntity: "Entity",
    tableColRole: "Role",
    diagram: {
      charlie: "Vision · Governance",
      core: "Business Operating System",
      oddy: "Territory / Last-Mile",
      ondemand: "Free Zone / International",
      comita: "Goods",
      facilia: "Facility Management",
      kora: "Technology",
      alma: "People",
    },
    tableRoles: {
      charlie: "Vision · governance — top conceptual level, not a product and not a vertical",
      core: "Business Operating System — platform · intelligence · orchestration",
      oddy: "Logistics brain and territory / last-mile operator — parent of OnDemand, not of CORE",
      ondemand: "ODDY's subsidiary — free-trade-zone and international logistics",
      comita: "Commerce — goods only (\"cuenta y orden\")",
      facilia: "Facility services — cleaning, maintenance, operational continuity; services only",
      kora: "Own technology — software, platforms, configurators, systems and methods of the group",
      alma: "People — talent, human resources, development, training and culture",
    },
  },
  entityPage: {
    metaTitleSuffix: "Corporate Architecture",
    restrictionLabel: "Restriction",
    immutableSuffix: "BRAND ASSET — IMMUTABLE",
    immutableNote: "{name} already has its own identity. It is never redrawn, modified or reinterpreted. The official file is not yet available in this repository — reference placeholder:",
    officialAssetPlaceholder: "{name} OFFICIAL ASSET — INSERT OFFICIAL FILE",
  },
  system: {
    metaTitle: "System",
    sectionTitle: "CORE System",
    lede: "CORE is the technology platform and the system that connects, orchestrates and supports the ecosystem.",
    operatorFacingLabel: "Operator-facing — technology layer for an operating entity",
    transversalLabel: "Transversal — not tied to a single operator",
  },
  verticalPage: {
    relations: "Relationships",
    relation: "Relationship",
    seeCorporateArchitecture: "see Corporate Architecture",
  },
  technologyLayer: {
    technologyPlatform: "TECHNOLOGY PLATFORM",
  },
  resources: {
    metaTitle: "Resources",
    sectionTitle: "Resources",
    lede: "Downloadable assets and implementation references. Nothing here is invented — modules with no exported file say so explicitly.",
    badgeLive: "Available",
    badgeComingNext: "Coming next",
    items: {
      assets: { label: "Assets", kind: "SVG · PNG", text: "Symbol and lockup exports." },
      icons: { label: "Icons", kind: "ICO · PNG", text: "Favicon and app-icon reduction scales." },
      tokens: { label: "UI Tokens", kind: "CSS variables", text: "Design tokens for product surfaces." },
    },
    assetsPage: {
      lede: "SVG and PNG exports of the symbol, CORE, CORE Group and the vertical lockups, generated from the master asset.",
      svgLabel: "SVG assets — not yet exported",
      svgNote: "Symbol, CORE, CORE Group and vertical lockups. Files are generated from components/brand/CoreSymbolDefs.tsx once export tooling is set up — nothing here is invented.",
      pngLabel: "PNG assets — not yet exported",
      pngNote: "Transparent, light-background and dark-background exports.",
    },
    iconsPage: {
      lede: "Same reduction scales validated in Brand Guidelines § 14–15.",
      faviconTab: "core.com.uy",
    },
    tokensPage: {
      lede: "Same system defined in Brand Guidelines § 18 — single source, not redefined here.",
    },
  },
  brand: {
    metaTitle: "Brand",
    sectionTitle: "Brand",
    lede: "CORE's visual identity and design language.",
    items: {
      guidelines: { label: "Brand Guidelines", text: "The complete, approved identity manual — 21 sections." },
      logo: { label: "Logo & Assets", text: "Official symbol and lockup assets." },
      color: { label: "Color System", text: "CORE Ink, CORE Signal and the support palette." },
      typography: { label: "Typography", text: "IBM Plex — display, text and UI roles." },
      orbit: { label: "CORE Orbit", text: "The compositional graphic resource, kept separate from the symbol." },
    },
    logoPage: {
      lede: "This page documents the official symbol and lockup assets — it does not replace the source file. Full construction spec in Brand Guidelines § 02–03.",
      symbolCaption: "Symbol — CORE SYMBOL MASTER",
      wordmarkCaption: "Wordmark — CORE",
      groupCaption: "Lockup — CORE Group",
      footnotePrefix: "Positive / negative / monochrome versions in",
      footnoteGuidelinesRef: "Brand Guidelines § 16",
      footnoteMid: ". Exportable SVG and PNG files in",
      footnoteLink: "Resources → Assets",
      footnoteSuffix: "once generated.",
    },
    colorPage: {
      lede: "CORE's official palette, inherited directly from Brand Guidelines § 06 — not redefined here.",
      neutralsHeading: "Neutrals",
      semanticHeading: "Semantic",
    },
    typographyPage: {
      lede: "Official family: IBM Plex — unchanged from Brand Guidelines § 07.",
      tableCaption: "Type scale",
      tableColRole: "Role",
      tableColWeight: "Weight",
      tableColSize: "Base size",
      tableColTracking: "Tracking",
      rows: {
        display: "Display / H1",
        h2: "Section H2",
        h3: "Subsection H3",
        body: "Body",
        uiLabel: "UI label / button",
        mono: "Mono / spec",
      },
    },
    definitionsPage: {
      title: "Brand Definitions",
      lede: "The official graphic definitions of every brand in the ecosystem: logo, name, three colors and two typefaces. Every value states where it comes from.",
      masterKind: "Master document",
      masterTitle: "Master Brand Definitions",
      masterText: "The ecosystem's brands in a single comparable table, linked to each sheet.",
      guideKind: "Guide",
      guideTitle: "Brand usage guide",
      guideText: "What the system is for and how to use it. Two pages.",
      sheetsLabel: "Individual sheets",
      pendingTag: "Pending",
      note: "The documents open as standalone pages, ready to print on A4. Brands marked pending have an initial graphic definition, not yet formally approved.",
    },
    orbitPage: {
      noteTag: "System graphic resource — not part of the symbol",
      noteText: "CORE Orbit is not part of the D3-C geometry. It is a separate compositional resource for covers, presentations, web pages, institutional backgrounds, diagrams, motion and storytelling.",
    },
  },
  entities: {
    charlie: {
      tag: "Vision / Governance",
      role: "Charlie is the ecosystem's top conceptual level — vision, governance and direction. CORE executes the vision Charlie defines.",
      bullets: [
        "Not a product",
        "Not an application",
        "Not an operating vertical",
        "Sits conceptually above CORE — vision and governance, not execution",
      ],
    },
    oddy: {
      tag: "Logistics — Territory / Last-Mile",
      role: "ODDY (from \"OnDemand Delivery\") is the ecosystem's logistics brain and the operator within the domestic territory — last mile and related operations, under the standard tax regime. ODDY is OnDemand's parent company.",
      bullets: [
        "Territory and last-mile logistics operation",
        "Transport, transformation, kitting and assembly of goods within its own territory",
        "OnDemand's parent company",
        "Operates under standard taxation (domestic / \"plaza\")",
      ],
    },
    ondemand: {
      tag: "Logistics — Free Zone / International",
      role: "OnDemand is ODDY's subsidiary, responsible for logistics in free-trade-zone territory and for international transport.",
      bullets: [
        "Logistics operation in free-trade-zone territory",
        "International transport",
        "Operates tax-exempt, unlike ODDY's domestic operation",
        "Transport, transformation, kitting and assembly of goods within its own territory",
      ],
      restriction: "OnDemand IS NOT COMMERCE. It must not be described as commerce, marketplace, retail, e-commerce or a commercial operation.",
    },
    comita: {
      tag: "Commerce — Goods",
      role: "COMITA imports and trades goods on behalf of clients (\"cuenta y orden\"). It transacts goods only.",
      bullets: [
        "Import and trade under \"cuenta y orden\"",
        "Goods only",
        "Sales and commercial operations",
      ],
      restriction: "COMITA does not deliver services. Service delivery is FACILIA's function, not COMITA's.",
      rule: "COMITA = TRADE IN GOODS",
    },
    facilia: {
      tag: "Services — Facility Management",
      role: "FACILIA delivers on-site services at client facilities — cleaning, maintenance and operational continuity. It delivers services only.",
      bullets: [
        "Cleaning",
        "Maintenance",
        "Operational continuity of the client's facilities",
        "Services only",
      ],
      restriction: "FACILIA does not transact goods. Trade in goods is COMITA's function, not FACILIA's.",
      rule: "FACILIA = SERVICES",
    },
    kora: {
      tag: "Technology — Own products and systems",
      role: "KORA develops and holds the group's own technology: software, platforms, digital tools, configurators, and systems and methods applied to operations.",
      bullets: [
        "Own technology products",
        "Software and platforms",
        "Configurators and digital tools",
        "Own systems and methods applied to operations",
      ],
      rule: "KORA = OWN TECHNOLOGY",
    },
    alma: {
      tag: "People — Talent and development",
      role: "ALMA is responsible for the group's people: talent, human resources, people administration and management, development, training and culture.",
      bullets: [
        "Talent and human resources",
        "People administration and management",
        "Development and training",
        "Culture",
      ],
      rule: "ALMA = PEOPLE",
    },
  },
  verticals: {
    logistics: {
      short: "technology layer for ODDY + OnDemand",
      role: "CORE's technology layer for the logistics function — serving both ODDY (domestic territory, last mile) and OnDemand (free zone, international), each within its own territory of competence.",
      note: "CORE Logistics does not run the operation — it is the platform that organizes, monitors and integrates it.",
      relations: {
        oddy: "ODDY operates territory / last-mile logistics",
        ondemand: "OnDemand operates free-zone / international logistics",
      },
    },
    rep: {
      short: "transversal representation capability",
      role: "Transversal technology capability related to representation and commercial management within the ecosystem — not tied to a single operator.",
      note: "Function being defined — no specific operating capabilities are documented yet beyond this description.",
    },
    market: {
      short: "technology layer for COMITA",
      role: "Technology platform for trade in goods within the CORE ecosystem.",
      note: "CORE Market is not an independent commercial legal entity and does not carry out commercial activity itself. Goods only — COMITA never delivers services.",
      relations: {
        comita: "COMITA transacts goods (\"cuenta y orden\")",
      },
    },
    services: {
      short: "technology layer for FACILIA",
      role: "Technology platform for facility services within the CORE ecosystem.",
      note: "CORE Services does not deliver the service itself — it is the platform that supports it. Services only — FACILIA never transacts goods.",
      relations: {
        facilia: "FACILIA delivers facility services",
      },
    },
    intelligence: {
      short: "transversal intelligence",
      role: "Transversal intelligence and data capability of the CORE ecosystem, serving all entities and operations.",
    },
    finance: {
      short: "transversal financial capability",
      role: "Transversal financial capability of the CORE ecosystem, serving all entities and operations.",
    },
  },
};

export default en;
