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
    immutableNoteHeld: "{name} already has its own identity. It is never redrawn, modified or reinterpreted. The official file is in this repository and is reproduced unaltered:",
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
      definitions: { label: "Brand Definitions", text: "Logo, name, colors and typefaces of every brand in the ecosystem." },
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
  // Brand Guidelines v1.0. English is the language the approved manual was
  // written in, so every string here is the original wording, verbatim —
  // the Spanish and Portuguese blocks are translations of this, not the
  // other way round.
  guidelines: {
    metaTitle: "Brand Guidelines",
    crumbRoot: "CORE Brand & System",
    crumbVersion: "Brand Guidelines v1.0",
    frozen: "D3-C frozen",
    tocNavLabel: "Brand Guidelines sections",
    toc: [
      "Concept",
      "Symbol D3-C",
      "Construction",
      "Clear space",
      "Minimum sizes",
      "Palette",
      "Typography",
      "Wordmark",
      "CORE Group",
      "Brand architecture",
      "ODDY relationship",
      "CORE Orbit",
      "Reduction",
      "Favicon",
      "App icon",
      "Versions",
      "Incorrect uses",
      "UI color system",
      "Verticals",
      "Applications",
      "Master rules",
    ],
    heroEyebrow: "CORE Group — Brand Guidelines · v1.0",
    heroTitle: "The nucleus that connects and orchestrates a system.",
    heroThesisRich:
      "CORE is not a circle. It is not a stylized O. It is not a dot with decoration around it. It is a <b>dominant nucleus</b> holding a <b>subordinate system</b> — the same reading its geometry, brand architecture and visual language repeat in every application.",

    s01Title: "Concept",
    s01CorrectHead: "Correct reading",
    s01CorrectRich:
      "CORE is the <strong>nucleus</strong> that connects and orchestrates a <strong>system</strong>. The outer ring dominates because it is identity; the inner ring is subordinate because it is relation, connection, circulation — it never competes with the nucleus, it accompanies it.",
    s01AvoidHead: "Readings to avoid",
    s01AvoidRich:
      "&quot;CORE is a circle.&quot; — loses the nucleus/orbit hierarchy.<br />&quot;CORE is a stylized O.&quot; — reduces it to a variation of ODDY.<br />&quot;CORE is a dot with decoration.&quot; — inverts the weight: the nucleus stops dominating.",

    s02Title: "Symbol D3-C — CORE Symbol Master",
    s02Lede:
      "Master asset. Every later application in this document derives from this single source — it is never redrawn by hand.",
    s02Caption: "Symbol facts",
    s02AssetName: "Asset name",
    s02Variant: "Variant",
    s02Concept: "Concept",
    s02ConceptValue: "dominant nucleus + inner orbit",
    s02Status: "Status",
    s02StatusValue: "frozen — 41/50 in comparative validation",
    s02Origin: "Geometric origin",
    s02OriginValue: "ODDY's ring DNA, reinterpreted",

    s03Title: "Construction",
    s03Lede:
      "Technical specification faithful to the master. Reproduce these exact values — do not eyeball it.",
    s03Nucleus: "Nucleus (outer ring)",
    s03Orbit: "Inner orbit",
    s03OuterRadius: "Outer radius",
    s03InnerCut: "Inner cut",
    s03CutOffset: "Cut offset",
    s03CutOffsetFrom: "from center",
    s03Thickness: "Resulting thickness",
    s03ThicknessValue: "22 / 18 (≈25% of radius)",
    s03Gap: "Gap from nucleus",
    s03RefBox: "Reference box",
    s03RefBoxValue: "viewBox 200 × 200, center 100,100",
    s03Incline: "Incline",
    s03InclineValue: "-20°, applied equally to both layers",
    s03TestColor: "Test color in this document",
    s03TestColorValue: "#152238 — see § 06 Palette",

    s04Title: "Clear space",
    s04Lede: "A unit derived from the symbol itself — never an arbitrary pixel value.",
    s04FormulaRich: "<strong>X = total symbol height ÷ 4.</strong>",
    s04TextRich:
      "No foreign element (text, container border, another logo) may invade a margin smaller than 1X around the symbol. The <strong>CORE</strong> wordmark and the <strong>CORE Group</strong> lockup inherit the same X unit, calculated on the symbol's height within each lockup — not on the full composition.",

    s05Title: "Minimum sizes",
    s05Lede: "Three distinct criteria — not interchangeable.",
    s05ColElement: "Element",
    s05ColDigital: "Minimum digital",
    s05ColPrint: "Minimum print",
    s05ColComfort: "Minimum comfortable",
    s05RowSymbol: "Isolated symbol",
    s05RowWordmark: "CORE wordmark",
    s05Height: "height",

    s06Title: "Palette",
    s06Lede:
      "Color was defined by what it needed to communicate, not the other way around. CORE needed real distance from ODDY — not just a different hue, a different register: where ODDY is vivid, luminous blue (operating brand, energy), CORE is a deep, almost graphite blue (platform, system, institutional sobriety). Same chromatic lineage, opposite roles.",
    s06Neutrals: "Neutrals",
    s06Semantic: "Semantic",

    s07Title: "Typography",
    s07Lede:
      "IBM Plex — one super-family covering display, text, UI and data without fragmenting the system.",
    s07Display: "Display — Plex Sans 700/600",
    s07Text: "Text — Plex Sans 400/500",
    s07Data: "UI / Data — Plex Mono",

    s08Title: "Wordmark",
    s08Lede:
      "The symbol never competes with the word. Primary configuration: horizontal, symbol on the left.",
    s08Primary: "Primary — horizontal, symbol + word",
    s08Secondary: "Secondary — stacked, for square formats",
    s08Isolated: "Isolated symbol — favicon, avatar, app icon",

    s09Title: "CORE Group",
    s09Lede:
      "Superior corporate expression. Not a different company — the same symbol with a smaller second line of hierarchy.",
    s09Note:
      "\"Group\" never exceeds 40% of \"CORE\"'s size and never competes in visual weight — it is corporate structure endorsement, not a second brand name.",

    s10Title: "Brand architecture",
    s10Lede: "Four levels. Each answers a different question.",
    s10L1: "Corporate brand / origin. External identity, immutable — CORE does not replace or reinterpret it.",
    s10L2: "Platform / system. The technology layer that orchestrates the ecosystem — the D3-C symbol lives at this level.",
    s10L3: "Corporate structure of the ecosystem, when context requires it (manuals, institutional communication).",
    s10L4Name: "Verticals / products",
    s10L4:
      "CORE Logistics, CORE Rep, CORE Market, CORE Services, CORE Intelligence, CORE Finance — subordinate extensions, never independent brands. CORE Logistics is the technology layer for the logistics function — ODDY (territory, last-mile) and OnDemand (free zone, international), each in its own territory; CORE Market is the technology layer for COMITA (goods only); CORE Services is the technology layer for FACILIA (services only); CORE Rep and CORE Intelligence and CORE Finance are transversal capabilities of the platform, not tied to a single operator. CORE provides the system — it does not operate logistics or commerce. See § 19.",
    s10ModelTitle: "Operational model: who does what",
    s10ModelNote:
      "This relationship is functional, not a second brand hierarchy — it does not replace the four levels above.",
    s10Rule:
      "Charlie defines. CORE orchestrates and executes. ODDY operates territory logistics and is the parent of OnDemand, which operates free-trade-zone and international logistics. COMITA trades goods; FACILIA delivers services — never the other's function. KORA develops the group's own technology and ALMA looks after its people. ODDY is never a parent of CORE.",

    s11Title: "Relationship with ODDY",
    s11Lede:
      "Three ways of coexisting, resolved by hierarchy, space and typography — never by graphic fusion. The marks below are ODDY's official files, reproduced unaltered.",
    s11AHead: "EXAMPLE A — SIDE BY SIDE",
    s11ANote:
      "Two brands sharing a surface, neither endorsing the other. Use: institutional footer, joint presentation closing, B2B materials. This is brand co-presence, not a statement of hierarchy — corporately, ODDY sits under CORE.",
    s11BHead: "EXAMPLE B — ENDORSEMENT",
    s11BParent: "parent of",
    s11BNote:
      "The only endorsement ODDY carries is the one it gives: OnDemand is endorsed by ODDY. ODDY itself takes no endorsement — it is not written \"by CORE\", and CORE is never written \"by ODDY\".",
    s11CHead: "EXAMPLE C — STRUCTURE",
    s11CNote:
      "CORE Group as the umbrella, ODDY listed as an operating unit. Use: manual, org chart, institutional documentation.",
    s11ImmutableTag: "ODDY BRAND ASSET — IMMUTABLE",
    s11Immutable:
      "ODDY's logotype, symbol, construction, proportions, colors and typography are not modified, redesigned, reinterpreted or fused with CORE anywhere in this document. The marks shown above are the approved files, reproduced at scale and nothing else. They appear on light grounds only: ODDY's logotype combines navy and blue, and on a dark ground its first \"D\" disappears and the mark reads \"O DY\".",

    s12Title: "CORE Orbit",
    s12Tag: "Compositional resource, not part of the symbol",
    s12Text:
      "The Orbit guide is an institutional communication tool — covers, presentations, motion. The D3-C symbol (§ 02) works complete without it. They are never combined into a single logo asset.",

    s13Title: "Reduction system",
    s13Lede:
      "No technical adaptation is necessary — the master was already validated at 16px in the prior micro-test round. Same geometry, no exception, across all five scales.",

    s14Title: "Favicon",
    s14Lede: "16px, geometry identical to the master.",

    s15Title: "App icon",
    s15Lede:
      "32px and above. The symbol works with generous margin — it does not need a color background to hold up.",

    s16Title: "Versions",
    s16Lede:
      "Positive, negative, monochrome. D3-C geometry with no exception across the three.",
    s16Positive: "Positive — light ground",
    s16Negative: "Negative — dark ground",
    s16Mono: "Monochrome — black / white",

    s17Title: "Incorrect uses",
    s17Lede:
      "Illustrated only to document the error — none of these examples is a valid variant.",
    s17Immutable:
      "Do not modify ODDY to solve any problem in this section. If CORE clashes with ODDY in an application, the fix happens on CORE's side and in the composition — never on ODDY's asset.",

    s18Title: "UI color system",
    s18Lede:
      "Products consume tokens, not loose hex values. All of them derive from the CORE architecture — there are no isolated per-application palettes.",
    s18Shipments: "Active shipments",
    s18Delivered: "delivered",
    s18InTransit: "in transit",
    s18Delayed: "delayed",
    s18Failed: "failed",
    s18Processed: "142 shipments processed today",
    s18NewOrder: "New order",

    s19Title: "Verticals",
    s19Lede:
      "Extensions of the CORE system, not independent brands: same symbol, same wordmark, one identifying tint per vertical, always in the same saturation/lightness band.",

    s20Title: "Applications",
    s20Digital: "Digital",
    s20Corporate: "Corporate",
    s20SignIn: "Sign in to CORE",
    s20Continue: "Continue",
    s20Login: "login",
    s20Navbar: "navbar",
    s20NavItems: "Dashboard · Shipments · Billing",
    s20MobileHeader: "mobile header",
    s20MobileDash: "Mobile dashboard",
    s20Alerts: "3 new alerts",
    s20SlideSub: "Business proposal · 2026",
    s20SlideCover: "presentation cover",
    s20FullName: "Full Name",
    s20Role: "CORE — Platform",
    s20BizCard: "business card",
    s20DocHeader: "document header",
    s20DocText: "Technical proposal",

    s21Title: "Master rules — summary",
    s21Rule: "RULE",
    s21Rules: [
      "D3-C is frozen.",
      "ODDY is frozen.",
      "No D4.",
      "No redesigning ODDY.",
      "No fusing ODDY + CORE.",
      "CORE must have its own identity.",
      "CORE Orbit is a graphic resource, not part of the logo.",
      "Verticals are extensions of the CORE system, not independent brands.",
      "Geometry stays identical across all applications.",
      "The priority is building a system, not a pretty logo.",
    ],
    s21Q1: "Was the ODDY logo modified in any way?",
    s21Q2: "Was the D3-C geometry modified in any way?",
    s21No: "NO.",
    s21ClosingRich:
      "This document stands as the base for <strong>CORE Brand Guidelines v1.0</strong> and the starting point for real production: SVG/PNG export of the master symbol, favicon and app icon generation, UI components on the tokens defined in § 18, and corporate pieces on the lockups in § 08–09.",
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
