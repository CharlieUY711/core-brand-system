// CORE i18n — Spanish (default locale).
//
// `entities` and `verticals` below hold the editorial/display text for each
// Corporate Architecture entity and System vertical (tag, role, bullets,
// restriction, rule, short, note, relation labels) — keyed by the same
// `slug` values as lib/content/entities.ts / lib/content/verticals.ts.
// Those content files hold ONLY structural/business data (slug, name,
// parent, orbitCategory, orbitColor, relations-as-slugs, color, showFlow) —
// no natural-language text. This split is deliberate (V1.4.1 correction):
// semantic model and localized copy must not live in the same object.
//
// Deliberately untranslated (frozen terminology, kept identical in pt.ts):
// CORE, Charlie, ODDY, OnDemand, FACILIA, COMITA, CORE Logistics, CORE
// Market, CORE Services, CORE Intelligence, CORE Finance, CORE Rep,
// Business Operating System, CORE Orbit, Brand Guidelines, D3-C.

import type { EntityContent, EntitySlug } from "@/lib/content/entities";
import type { VerticalContent, VerticalSlug } from "@/lib/content/verticals";

const es = {
  a11y: {
    skipToContent: "Saltar al contenido principal",
    primaryNav: "Navegación principal",
    breadcrumbNav: "Ruta de navegación",
    footerNav: "Pie de página",
    menuOpen: "Menú",
    menuClose: "Cerrar",
    languageSwitcher: "Cambiar idioma",
  },
  nav: {
    tagline: "Marca y Sistema",
    portalVersion: "Portal v1.0",
    groups: {
      brand: "Marca",
      system: "Sistema",
      architecture: "Arquitectura Corporativa",
      resources: "Recursos",
    },
    items: {
      brandGuidelines: "Brand Guidelines",
      brandDefinitions: "Brand Definitions",
      logoAssets: "Logo y Assets",
      colorSystem: "Sistema de Color",
      typography: "Tipografía",
      coreOrbit: "CORE Orbit",
      overview: "Resumen",
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
      assets: "Assets",
      icons: "Íconos",
      uiTokens: "UI Tokens",
    },
  },
  breadcrumb: {
    root: "CORE",
    brand: "Marca",
    system: "Sistema",
    architecture: "Arquitectura Corporativa",
    resources: "Recursos",
  },
  footer: {
    tagline: "CORE — Marca y Sistema",
    legal: "© {year} CORE / ODDY. Todos los derechos reservados.",
    linkGuidelines: "Brand Guidelines",
    linkArchitecture: "Arquitectura Corporativa",
    linkResources: "Recursos",
  },
  home: {
    metaTitle: "CORE — Marca y Sistema",
    eyebrow: "CORE Marca y Sistema · Portal v1.0",
    tagline: "Marca y Sistema",
    ledeBefore: "La identidad, arquitectura y sistema visual de ",
    ledeAfter: " — el núcleo que conecta y orquesta el ecosistema.",
    fact1Q: "¿Qué es CORE?",
    fact1A: "El Business Operating System del ecosistema — la capa de plataforma, inteligencia y orquestación.",
    fact2Q: "¿Cómo se relaciona con Charlie?",
    fact2A: "Charlie define visión y gobernanza. CORE la ejecuta — CORE es el sistema que Charlie opera, nunca su padre.",
    fact3Q: "¿Qué contiene este portal?",
    fact3A: "Identidad de marca, el sistema tecnológico CORE, Arquitectura Corporativa y recursos de referencia.",
    fact4Q: "¿Cómo navego el portal?",
    fact4A: "Cuatro secciones numeradas en el menú lateral, o el mapa del sistema más abajo — cada página muestra una ruta de navegación de regreso hasta acá.",
    systemMapEyebrow: "Mapa del sistema",
    systemMapTitle: "Cuatro secciones, un solo portal",
    corporateModelEyebrow: "Modelo corporativo",
    corporateModelTitle: "Un sistema. Responsabilidades claras.",
    corporateModelLede: "Charlie define. CORE orquesta y ejecuta. Las entidades y operaciones — ODDY (con OnDemand), COMITA, FACILIA — llevan adelante el negocio.",
  },
  architecture: {
    metaTitle: "Arquitectura Corporativa",
    sectionTitle: "Arquitectura Corporativa",
    lede: "La marca define cómo se ve CORE. La Arquitectura Corporativa define cómo está organizado el ecosistema y quién hace qué — las dos cosas nunca se mezclan. Charlie define la visión; CORE es el Business Operating System que orquesta y ejecuta; ODDY (con su subsidiaria OnDemand), COMITA y FACILIA son las entidades que llevan adelante el negocio.",
    ruleText: "Charlie define. CORE orquesta y ejecuta. ODDY opera logística en el territorio doméstico y es la empresa madre de OnDemand, que opera logística de zona franca e internacional. COMITA comercializa bienes; FACILIA presta servicios — nunca la función de la otra. ODDY nunca es madre de CORE.",
    tableCaption: "Responsabilidades por entidad",
    tableColEntity: "Entidad",
    tableColRole: "Rol",
    diagram: {
      charlie: "Visión · Gobernanza",
      core: "Business Operating System",
      oddy: "Territorio / Última Milla",
      ondemand: "Zona Franca / Internacional",
      comita: "Bienes",
      facilia: "Gestión de Instalaciones",
    },
    tableRoles: {
      charlie: "Visión · gobernanza — nivel conceptual superior, no es un producto ni una vertical",
      core: "Business Operating System — plataforma · inteligencia · orquestación",
      oddy: "Cerebro logístico y operador de territorio / última milla — madre de OnDemand, no de CORE",
      ondemand: "Subsidiaria de ODDY — logística de zona franca e internacional",
      comita: "Comercio — solo bienes (\"cuenta y orden\")",
      facilia: "Servicios de facility — limpieza, mantenimiento, continuidad operativa; solo servicios",
    },
  },
  entityPage: {
    metaTitleSuffix: "Arquitectura Corporativa",
    restrictionLabel: "Restricción",
    immutableSuffix: "ASSET DE MARCA — INMUTABLE",
    immutableNote: "{name} ya tiene su propia identidad. Nunca se redibuja, modifica ni reinterpreta. El archivo oficial todavía no está disponible en este repositorio — placeholder de referencia:",
    officialAssetPlaceholder: "{name} ASSET OFICIAL — INSERTAR ARCHIVO OFICIAL",
  },
  system: {
    metaTitle: "Sistema",
    sectionTitle: "Sistema CORE",
    lede: "CORE es la plataforma tecnológica y el sistema que conecta, orquesta y da soporte al ecosistema.",
    operatorFacingLabel: "Frente a operadores — capa tecnológica para una entidad operadora",
    transversalLabel: "Transversal — no está atado a un único operador",
  },
  verticalPage: {
    relations: "Relaciones",
    relation: "Relación",
    seeCorporateArchitecture: "ver Arquitectura Corporativa",
  },
  technologyLayer: {
    technologyPlatform: "PLATAFORMA TECNOLÓGICA",
  },
  resources: {
    metaTitle: "Recursos",
    sectionTitle: "Recursos",
    lede: "Assets descargables y referencias de implementación. Nada acá está inventado — los módulos sin archivo exportado lo indican explícitamente.",
    badgeLive: "Disponible",
    badgeComingNext: "Próximamente",
    items: {
      assets: { label: "Assets", kind: "SVG · PNG", text: "Exportaciones del símbolo y los lockups." },
      icons: { label: "Íconos", kind: "ICO · PNG", text: "Favicon y escalas de reducción del ícono de app." },
      tokens: { label: "UI Tokens", kind: "Variables CSS", text: "Design tokens para superficies de producto." },
    },
    assetsPage: {
      lede: "Exportaciones SVG y PNG del símbolo, CORE, CORE Group y los lockups de vertical, generadas a partir del asset maestro.",
      svgLabel: "Assets SVG — todavía no exportados",
      svgNote: "Símbolo, CORE, CORE Group y lockups de vertical. Los archivos se generan desde components/brand/CoreSymbolDefs.tsx una vez configurado el tooling de exportación — nada acá está inventado.",
      pngLabel: "Assets PNG — todavía no exportados",
      pngNote: "Exportaciones transparentes, sobre fondo claro y sobre fondo oscuro.",
    },
    iconsPage: {
      lede: "Mismas escalas de reducción validadas en Brand Guidelines § 14–15.",
      faviconTab: "core.com.uy",
    },
    tokensPage: {
      lede: "Mismo sistema definido en Brand Guidelines § 18 — fuente única, no redefinido acá.",
    },
  },
  brand: {
    metaTitle: "Marca",
    sectionTitle: "Marca",
    lede: "La identidad visual y el lenguaje de diseño de CORE.",
    items: {
      guidelines: { label: "Brand Guidelines", text: "El manual de identidad completo y aprobado — 21 secciones." },
      logo: { label: "Logo y Assets", text: "Assets oficiales del símbolo y los lockups." },
      color: { label: "Sistema de Color", text: "CORE Ink, CORE Signal y la paleta de soporte." },
      typography: { label: "Tipografía", text: "IBM Plex — roles de display, texto y UI." },
      orbit: { label: "CORE Orbit", text: "El recurso gráfico compositivo, mantenido separado del símbolo." },
    },
    logoPage: {
      lede: "Esta página documenta el símbolo oficial y los assets de lockup — no reemplaza el archivo fuente. Especificación completa de construcción en Brand Guidelines § 02–03.",
      symbolCaption: "Símbolo — CORE SYMBOL MASTER",
      wordmarkCaption: "Wordmark — CORE",
      groupCaption: "Lockup — CORE Group",
      footnotePrefix: "Versiones positiva / negativa / monocromática en",
      footnoteGuidelinesRef: "Brand Guidelines § 16",
      footnoteMid: ". Archivos SVG y PNG exportables en",
      footnoteLink: "Recursos → Assets",
      footnoteSuffix: "una vez generados.",
    },
    colorPage: {
      lede: "La paleta oficial de CORE, heredada directamente de Brand Guidelines § 06 — no redefinida acá.",
      neutralsHeading: "Neutros",
      semanticHeading: "Semántico",
    },
    typographyPage: {
      lede: "Familia oficial: IBM Plex — sin cambios respecto a Brand Guidelines § 07.",
      tableCaption: "Escala tipográfica",
      tableColRole: "Rol",
      tableColWeight: "Peso",
      tableColSize: "Tamaño base",
      tableColTracking: "Tracking",
      rows: {
        display: "Display / H1",
        h2: "H2 sección",
        h3: "H3 subsección",
        body: "Cuerpo",
        uiLabel: "Label de UI / botón",
        mono: "Mono / spec",
      },
    },
    definitionsPage: {
      title: "Brand Definitions",
      lede: "Las definiciones gráficas oficiales de cada marca del ecosistema: logo, nombre, tres colores y dos tipografías. Cada dato indica de dónde sale.",
      masterKind: "Documento maestro",
      masterTitle: "Master Brand Definitions",
      masterText: "Las marcas del ecosistema en una sola tabla comparable, con enlaces a cada ficha.",
      guideKind: "Guía",
      guideTitle: "Guía de uso de marca",
      guideText: "Para qué sirve el sistema y cómo se usa. Dos carillas.",
      sheetsLabel: "Fichas individuales",
      pendingTag: "Pendiente",
      note: "Los documentos se abren como páginas independientes, listas para imprimir en A4. Las marcas marcadas como pendientes tienen una definición gráfica inicial, sin aprobación formal.",
    },
    orbitPage: {
      noteTag: "Recurso gráfico del sistema — no forma parte del símbolo",
      noteText: "CORE Orbit no forma parte de la geometría D3-C. Es un recurso compositivo separado para portadas, presentaciones, páginas web, fondos institucionales, diagramas, motion y storytelling.",
    },
  },
  entities: {
    charlie: {
      tag: "Visión / Gobernanza",
      role: "Charlie es el nivel conceptual superior del ecosistema — visión, gobernanza y dirección. CORE ejecuta la visión que Charlie define.",
      bullets: [
        "No es un producto",
        "No es una aplicación",
        "No es una vertical operativa",
        "Se ubica conceptualmente por encima de CORE — visión y gobernanza, no ejecución",
      ],
    },
    oddy: {
      tag: "Logística — Territorio / Última Milla",
      role: "ODDY (de \"OnDemand Delivery\") es el cerebro logístico del ecosistema y el operador dentro del territorio doméstico — última milla y operaciones relacionadas, bajo el régimen impositivo estándar. ODDY es la empresa madre de OnDemand.",
      bullets: [
        "Operación logística de territorio y última milla",
        "Transporte, transformación, kitting y ensamblaje de bienes dentro de su propio territorio",
        "Empresa madre de OnDemand",
        "Opera bajo tributación estándar (doméstica / \"plaza\")",
      ],
    },
    ondemand: {
      tag: "Logística — Zona Franca / Internacional",
      role: "OnDemand es la subsidiaria de ODDY, responsable de la logística en territorio de zona franca y del transporte internacional.",
      bullets: [
        "Operación logística en territorio de zona franca",
        "Transporte internacional",
        "Opera exenta de impuestos, a diferencia de la operación doméstica de ODDY",
        "Transporte, transformación, kitting y ensamblaje de bienes dentro de su propio territorio",
      ],
      restriction: "OnDemand NO ES COMERCIO. No debe describirse como comercio, marketplace, minorista, e-commerce u operación comercial.",
    },
    comita: {
      tag: "Comercio — Bienes",
      role: "COMITA importa y comercializa bienes por cuenta de clientes (\"cuenta y orden\"). Solo transacciona bienes.",
      bullets: [
        "Importación y comercialización bajo \"cuenta y orden\"",
        "Solo bienes",
        "Ventas y operaciones comerciales",
      ],
      restriction: "COMITA no presta servicios. La prestación de servicios es función de FACILIA, no de COMITA.",
      rule: "COMITA = COMERCIO DE BIENES",
    },
    facilia: {
      tag: "Servicios — Gestión de Instalaciones",
      role: "FACILIA presta servicios en el sitio en las instalaciones de los clientes — limpieza, mantenimiento y continuidad operativa. Solo presta servicios.",
      bullets: [
        "Limpieza",
        "Mantenimiento",
        "Continuidad operativa de las instalaciones del cliente",
        "Solo servicios",
      ],
      restriction: "FACILIA no transacciona bienes. El comercio de bienes es función de COMITA, no de FACILIA.",
      rule: "FACILIA = SERVICIOS",
    },
  } as Record<EntitySlug, EntityContent>,
  verticals: {
    logistics: {
      short: "capa tecnológica para ODDY + OnDemand",
      role: "Capa tecnológica de CORE para la función logística — da servicio tanto a ODDY (territorio doméstico, última milla) como a OnDemand (zona franca, internacional), cada una en su propio territorio de competencia.",
      note: "CORE Logistics no ejecuta la operación — es la plataforma que la organiza, monitorea e integra.",
      relations: {
        oddy: "ODDY opera la logística de territorio / última milla",
        ondemand: "OnDemand opera la logística de zona franca / internacional",
      },
    },
    rep: {
      short: "capacidad transversal de representación",
      role: "Capacidad tecnológica transversal relacionada con representación y gestión comercial dentro del ecosistema — no atada a un único operador.",
      note: "Función en definición — todavía no hay capacidades operativas específicas documentadas más allá de esta descripción.",
    },
    market: {
      short: "capa tecnológica para COMITA",
      role: "Plataforma tecnológica para el comercio de bienes dentro del ecosistema CORE.",
      note: "CORE Market no es una entidad legal comercial independiente y no realiza actividad comercial por sí misma. Solo bienes — COMITA nunca presta servicios.",
      relations: {
        comita: "COMITA transacciona bienes (\"cuenta y orden\")",
      },
    },
    services: {
      short: "capa tecnológica para FACILIA",
      role: "Plataforma tecnológica para servicios de facility dentro del ecosistema CORE.",
      note: "CORE Services no presta el servicio en sí — es la plataforma que lo respalda. Solo servicios — FACILIA nunca transacciona bienes.",
      relations: {
        facilia: "FACILIA presta servicios de facility",
      },
    },
    intelligence: {
      short: "inteligencia transversal",
      role: "Capacidad transversal de inteligencia y datos del ecosistema CORE, al servicio de todas las entidades y operaciones.",
    },
    finance: {
      short: "capacidad financiera transversal",
      role: "Capacidad financiera transversal del ecosistema CORE, al servicio de todas las entidades y operaciones.",
    },
  } as Record<VerticalSlug, VerticalContent>,
};

export type Dictionary = typeof es;
export default es;
