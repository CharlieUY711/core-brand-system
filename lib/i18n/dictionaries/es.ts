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
      kora: "KORA",
      alma: "ALMA",
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
    corporateModelLede: "Charlie define. CORE orquesta y ejecuta. Las entidades y operaciones — ODDY (con OnDemand), COMITA, FACILIA, KORA y ALMA — llevan adelante el negocio.",
  },
  architecture: {
    metaTitle: "Arquitectura Corporativa",
    sectionTitle: "Arquitectura Corporativa",
    lede: "La marca define cómo se ve CORE. La Arquitectura Corporativa define cómo está organizado el ecosistema y quién hace qué — las dos cosas nunca se mezclan. Charlie define la visión; CORE es el Business Operating System que orquesta y ejecuta; ODDY (con su subsidiaria OnDemand), COMITA, FACILIA, KORA y ALMA son las entidades que llevan adelante el negocio.",
    ruleText: "Charlie define. CORE orquesta y ejecuta. ODDY opera logística en el territorio doméstico y es la empresa madre de OnDemand, que opera logística de zona franca e internacional. COMITA comercializa bienes; FACILIA presta servicios — nunca la función de la otra. KORA desarrolla la tecnología propia del grupo y ALMA gestiona sus personas. ODDY nunca es madre de CORE.",
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
      kora: "Tecnología",
      alma: "Personas",
    },
    tableRoles: {
      charlie: "Visión · gobernanza — nivel conceptual superior, no es un producto ni una vertical",
      core: "Business Operating System — plataforma · inteligencia · orquestación",
      oddy: "Cerebro logístico y operador de territorio / última milla — madre de OnDemand, no de CORE",
      ondemand: "Subsidiaria de ODDY — logística de zona franca e internacional",
      comita: "Comercio — solo bienes (\"cuenta y orden\")",
      facilia: "Servicios de facility — limpieza, mantenimiento, continuidad operativa; solo servicios",
      kora: "Tecnología propia — software, plataformas, configuradores, sistemas y métodos del grupo",
      alma: "Personas — talento, recursos humanos, desarrollo, capacitación y cultura",
    },
  },
  entityPage: {
    metaTitleSuffix: "Arquitectura Corporativa",
    restrictionLabel: "Restricción",
    immutableSuffix: "ASSET DE MARCA — INMUTABLE",
    immutableNote: "{name} ya tiene su propia identidad. Nunca se redibuja, modifica ni reinterpreta. El archivo oficial todavía no está disponible en este repositorio — placeholder de referencia:",
    immutableNoteHeld: "{name} ya tiene su propia identidad. Nunca se redibuja, modifica ni reinterpreta. El archivo oficial está en este repositorio y se reproduce sin alterar:",
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
      lede: "Exportaciones del símbolo CORE generadas desde el maestro D3-C. Ningún archivo se redibujó: el script sólo cambia relleno y fondo, y rasteriza.",
      svgLabel: "Masters SVG",
      svgKind: "vectorial",
      svgNote: "Positivo en Ink, negativo en blanco y monocromático con currentColor, que hereda el color del contexto. Más el maestro del que derivan los tres.",
      pngLabel: "Símbolo PNG",
      pngKind: "512 · 1024 · 2048",
      pngNote: "Transparente para componer, y sobre fondo claro y oscuro ya resueltos. 2048 para impresión, 1024 para pantalla.",
      iconsLabel: "Favicon e ícono de app",
      iconsKind: "16 → 512 px",
      iconsNote: "Favicon en las diez escalas habituales desde 16 px, e ícono de app sobre Ink desde 32 px, según § 14–15. Misma geometría en todas: el símbolo no necesita adaptación al reducirse.",
      logoLabel: "Wordmark y lockup CORE Group — pendientes",
      logoNote: "Se componen en IBM Plex Sans 700, y la única IBM Plex Sans de este repositorio es la variable del cache de next/font: se pueden extraer contornos de su instancia por defecto (400) pero no de la 700. Generarlos en 400 sería publicar el logotipo con el peso equivocado. Falta una IBM Plex Sans Bold estática.",
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
      definitions: { label: "Brand Definitions", text: "Logo, nombre, colores y tipografías de cada marca del ecosistema." },
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
  // Brand Guidelines v1.0 — el manual de identidad aprobado, 21 secciones.
  // Los valores técnicos (rx 86 · ry 52, viewBox, px/mm, hex) y la
  // terminología congelada (D3-C, CORE SYMBOL MASTER, IBM Plex, los nombres
  // de marca y de vertical) no se traducen: viven en el componente.
  // Las claves que terminan en `Rich` admiten <strong>/<b> y se renderizan
  // como HTML — son constantes de autor, no entrada de usuario.
  guidelines: {
    metaTitle: "Brand Guidelines",
    crumbRoot: "CORE Brand & System",
    crumbVersion: "Brand Guidelines v1.0",
    frozen: "D3-C congelado",
    tocNavLabel: "Secciones de las Brand Guidelines",
    toc: [
      "Concepto",
      "Símbolo D3-C",
      "Construcción",
      "Espacio de respiro",
      "Tamaños mínimos",
      "Paleta",
      "Tipografía",
      "Wordmark",
      "CORE Group",
      "Arquitectura de marca",
      "Relación con ODDY",
      "CORE Orbit",
      "Reducción",
      "Favicon",
      "Ícono de app",
      "Versiones",
      "Usos incorrectos",
      "Sistema de color de UI",
      "Verticales",
      "Aplicaciones",
      "Reglas maestras",
    ],
    heroEyebrow: "CORE Group — Brand Guidelines · v1.0",
    heroTitle: "El núcleo que conecta y orquesta un sistema.",
    heroThesisRich:
      "CORE no es un círculo. No es una O estilizada. No es un punto con decoración alrededor. Es un <b>núcleo dominante</b> sosteniendo un <b>sistema subordinado</b> — la misma lectura que su geometría, su arquitectura de marca y su lenguaje visual repiten en cada aplicación.",

    s01Title: "Concepto",
    s01CorrectHead: "Lectura correcta",
    s01CorrectRich:
      "CORE es el <strong>núcleo</strong> que conecta y orquesta un <strong>sistema</strong>. El anillo exterior domina porque es identidad; el anillo interior es subordinado porque es relación, conexión, circulación — nunca compite con el núcleo, lo acompaña.",
    s01AvoidHead: "Lecturas a evitar",
    s01AvoidRich:
      "“CORE es un círculo.” — pierde la jerarquía núcleo/órbita.<br />“CORE es una O estilizada.” — lo reduce a una variación de ODDY.<br />“CORE es un punto con decoración.” — invierte el peso: el núcleo deja de dominar.",

    s02Title: "Símbolo D3-C — CORE Symbol Master",
    s02Lede:
      "Asset maestro. Toda aplicación posterior de este documento deriva de esta única fuente — nunca se redibuja a mano.",
    s02Caption: "Datos del símbolo",
    s02AssetName: "Nombre del asset",
    s02Variant: "Variante",
    s02Concept: "Concepto",
    s02ConceptValue: "núcleo dominante + órbita interior",
    s02Status: "Estado",
    s02StatusValue: "congelado — 41/50 en validación comparativa",
    s02Origin: "Origen geométrico",
    s02OriginValue: "el ADN del anillo de ODDY, reinterpretado",

    s03Title: "Construcción",
    s03Lede:
      "Especificación técnica fiel al maestro. Reproducir estos valores exactos — no calcular a ojo.",
    s03Nucleus: "Núcleo (anillo exterior)",
    s03Orbit: "Órbita interior",
    s03OuterRadius: "Radio exterior",
    s03InnerCut: "Corte interior",
    s03CutOffset: "Desplazamiento del corte",
    s03CutOffsetFrom: "desde el centro",
    s03Thickness: "Grosor resultante",
    s03ThicknessValue: "22 / 18 (≈25% del radio)",
    s03Gap: "Separación del núcleo",
    s03RefBox: "Caja de referencia",
    s03RefBoxValue: "viewBox 200 × 200, centro 100,100",
    s03Incline: "Inclinación",
    s03InclineValue: "-20°, aplicada por igual a ambas capas",
    s03TestColor: "Color de prueba en este documento",
    s03TestColorValue: "#152238 — ver § 06 Paleta",

    s04Title: "Espacio de respiro",
    s04Lede: "Una unidad derivada del propio símbolo — nunca un valor arbitrario en píxeles.",
    s04FormulaRich: "<strong>X = altura total del símbolo ÷ 4.</strong>",
    s04TextRich:
      "Ningún elemento ajeno (texto, borde de contenedor, otro logo) puede invadir un margen menor a 1X alrededor del símbolo. El wordmark <strong>CORE</strong> y el lockup <strong>CORE Group</strong> heredan la misma unidad X, calculada sobre la altura del símbolo dentro de cada lockup — no sobre la composición completa.",

    s05Title: "Tamaños mínimos",
    s05Lede: "Tres criterios distintos — no son intercambiables.",
    s05ColElement: "Elemento",
    s05ColDigital: "Mínimo digital",
    s05ColPrint: "Mínimo impreso",
    s05ColComfort: "Mínimo cómodo",
    s05RowSymbol: "Símbolo aislado",
    s05RowWordmark: "Wordmark CORE",
    s05Height: "de alto",

    s06Title: "Paleta",
    s06Lede:
      "El color se definió por lo que necesitaba comunicar, no al revés. CORE necesitaba distancia real respecto de ODDY — no sólo otro tono, otro registro: donde ODDY es azul vívido y luminoso (marca operativa, energía), CORE es un azul profundo, casi grafito (plataforma, sistema, sobriedad institucional). Mismo linaje cromático, roles opuestos.",
    s06Neutrals: "Neutros",
    s06Semantic: "Semánticos",

    s07Title: "Tipografía",
    s07Lede:
      "IBM Plex — una sola superfamilia que cubre display, texto, UI y datos sin fragmentar el sistema.",
    s07Display: "Display — Plex Sans 700/600",
    s07Text: "Texto — Plex Sans 400/500",
    s07Data: "UI / Datos — Plex Mono",

    s08Title: "Wordmark",
    s08Lede:
      "El símbolo nunca compite con la palabra. Configuración principal: horizontal, símbolo a la izquierda.",
    s08Primary: "Principal — horizontal, símbolo + palabra",
    s08Secondary: "Secundaria — apilada, para formatos cuadrados",
    s08Isolated: "Símbolo aislado — favicon, avatar, ícono de app",

    s09Title: "CORE Group",
    s09Lede:
      "Expresión corporativa superior. No es otra empresa — el mismo símbolo con una segunda línea de jerarquía, más chica.",
    s09Note:
      "“Group” nunca supera el 40% del tamaño de “CORE” y nunca compite en peso visual — es endoso de estructura corporativa, no un segundo nombre de marca.",

    s10Title: "Arquitectura de marca",
    s10Lede: "Cuatro niveles. Cada uno responde una pregunta distinta.",
    s10L1: "Marca corporativa / origen. Identidad externa, inmutable — CORE no la reemplaza ni la reinterpreta.",
    s10L2: "Plataforma / sistema. La capa tecnológica que orquesta el ecosistema — el símbolo D3-C vive en este nivel.",
    s10L3: "Estructura corporativa del ecosistema, cuando el contexto lo exige (manuales, comunicación institucional).",
    s10L4Name: "Verticales / productos",
    s10L4:
      "CORE Logistics, CORE Rep, CORE Market, CORE Services, CORE Intelligence, CORE Finance — extensiones subordinadas, nunca marcas independientes. CORE Logistics es la capa tecnológica de la función logística — ODDY (territorio, última milla) y OnDemand (zona franca, internacional), cada una en su territorio; CORE Market es la capa tecnológica de COMITA (solo bienes); CORE Services, la de FACILIA (solo servicios); CORE Rep, CORE Intelligence y CORE Finance son capacidades transversales de la plataforma, no atadas a un único operador. CORE provee el sistema — no opera logística ni comercio. Ver § 19.",
    s10ModelTitle: "Modelo operativo: quién hace qué",
    s10ModelNote:
      "Esta relación es funcional, no una segunda jerarquía de marca — no reemplaza los cuatro niveles de arriba.",
    s10Rule:
      "Charlie define. CORE orquesta y ejecuta. ODDY opera logística de territorio y es la empresa madre de OnDemand, que opera logística de zona franca e internacional. COMITA comercializa bienes; FACILIA presta servicios — nunca la función de la otra. KORA desarrolla la tecnología propia del grupo y ALMA gestiona sus personas. ODDY nunca es madre de CORE.",

    s11Title: "Relación con ODDY",
    s11Lede:
      "Tres formas de convivir, resueltas por jerarquía, espacio y tipografía — nunca por fusión gráfica. Las marcas de abajo son los archivos oficiales de ODDY, reproducidos sin alterar.",
    s11AHead: "EJEMPLO A — LADO A LADO",
    s11ANote:
      "Dos marcas compartiendo una superficie, sin que ninguna endose a la otra. Uso: pie institucional, cierre de presentación conjunta, materiales B2B. Es co-presencia de marca, no un enunciado de jerarquía — corporativamente, ODDY depende de CORE.",
    s11BHead: "EJEMPLO B — ENDOSO",
    s11BParent: "empresa madre de",
    s11BNote:
      "El único endoso que ODDY lleva es el que da: OnDemand está endosada por ODDY. ODDY no toma endoso — no se escribe “by CORE”, y CORE nunca se escribe “by ODDY”.",
    s11CHead: "EJEMPLO C — ESTRUCTURA",
    s11CNote:
      "CORE Group como paraguas, ODDY listada como unidad operativa. Uso: manual, organigrama, documentación institucional.",
    s11ImmutableTag: "ASSET DE MARCA ODDY — INMUTABLE",
    s11Immutable:
      "El logotipo, símbolo, construcción, proporciones, colores y tipografía de ODDY no se modifican, rediseñan, reinterpretan ni fusionan con CORE en ninguna parte de este documento. Las marcas mostradas arriba son los archivos aprobados, reproducidos a escala y nada más. Aparecen únicamente sobre fondos claros: el logotipo de ODDY combina navy y azul, y sobre fondo oscuro su primera “D” desaparece y la marca se lee “O DY”.",

    s12Title: "CORE Orbit",
    s12Tag: "Recurso compositivo, no forma parte del símbolo",
    s12Text:
      "La guía Orbit es una herramienta de comunicación institucional — portadas, presentaciones, motion. El símbolo D3-C (§ 02) funciona completo sin ella. Nunca se combinan en un único asset de logo.",

    s13Title: "Sistema de reducción",
    s13Lede:
      "No hace falta ninguna adaptación técnica — el maestro ya se validó a 16 px en la ronda previa de micro-tests. Misma geometría, sin excepción, en las cinco escalas.",

    s14Title: "Favicon",
    s14Lede: "16 px, geometría idéntica a la del maestro.",

    s15Title: "Ícono de app",
    s15Lede:
      "32 px en adelante. El símbolo funciona con margen generoso — no necesita un fondo de color para sostenerse.",

    s16Title: "Versiones",
    s16Lede:
      "Positiva, negativa, monocromática. Geometría D3-C sin excepción en las tres.",
    s16Positive: "Positiva — fondo claro",
    s16Negative: "Negativa — fondo oscuro",
    s16Mono: "Monocromática — negro / blanco",

    s17Title: "Usos incorrectos",
    s17Lede:
      "Ilustrados sólo para documentar el error — ninguno de estos ejemplos es una variante válida.",
    s17Immutable:
      "No modifiques ODDY para resolver ningún problema de esta sección. Si CORE choca con ODDY en una aplicación, la corrección ocurre del lado de CORE y en la composición — nunca sobre el asset de ODDY.",

    s18Title: "Sistema de color de UI",
    s18Lede:
      "Los productos consumen tokens, no valores hex sueltos. Todos derivan de la arquitectura CORE — no hay paletas aisladas por aplicación.",
    s18Shipments: "Envíos activos",
    s18Delivered: "entregado",
    s18InTransit: "en tránsito",
    s18Delayed: "demorado",
    s18Failed: "fallido",
    s18Processed: "142 envíos procesados hoy",
    s18NewOrder: "Nueva orden",

    s19Title: "Verticales",
    s19Lede:
      "Extensiones del sistema CORE, no marcas independientes: mismo símbolo, mismo wordmark, un tinte identificatorio por vertical, siempre en la misma banda de saturación y luminosidad.",

    s20Title: "Aplicaciones",
    s20Digital: "Digital",
    s20Corporate: "Corporativas",
    s20SignIn: "Iniciar sesión en CORE",
    s20Continue: "Continuar",
    s20Login: "login",
    s20Navbar: "barra de navegación",
    s20NavItems: "Dashboard · Envíos · Facturación",
    s20MobileHeader: "encabezado móvil",
    s20MobileDash: "Dashboard móvil",
    s20Alerts: "3 alertas nuevas",
    s20SlideSub: "Propuesta comercial · 2026",
    s20SlideCover: "portada de presentación",
    s20FullName: "Nombre y Apellido",
    s20Role: "CORE — Plataforma",
    s20BizCard: "tarjeta personal",
    s20DocHeader: "encabezado de documento",
    s20DocText: "Propuesta técnica",

    s21Title: "Reglas maestras — resumen",
    s21Rule: "REGLA",
    s21Rules: [
      "El D3-C está congelado.",
      "ODDY está congelada.",
      "No hay D4.",
      "No se rediseña ODDY.",
      "No se fusionan ODDY + CORE.",
      "CORE debe tener identidad propia.",
      "CORE Orbit es un recurso gráfico, no parte del logo.",
      "Las verticales son extensiones del sistema CORE, no marcas independientes.",
      "La geometría se mantiene idéntica en todas las aplicaciones.",
      "La prioridad es construir un sistema, no un logo lindo.",
    ],
    s21Q1: "¿Se modificó de alguna forma el logo de ODDY?",
    s21Q2: "¿Se modificó de alguna forma la geometría D3-C?",
    s21No: "NO.",
    s21ClosingRich:
      "Este documento es la base de <strong>CORE Brand Guidelines v1.0</strong> y el punto de partida para producción real: exportación SVG/PNG del símbolo maestro, generación de favicon e ícono de app, componentes de UI sobre los tokens definidos en § 18, y piezas corporativas sobre los lockups de § 08–09.",
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
    kora: {
      tag: "Tecnología — Productos y sistemas propios",
      role: "KORA desarrolla y contiene la tecnología propia del grupo: software, plataformas, herramientas digitales, configuradores, sistemas y métodos aplicados a la operación.",
      bullets: [
        "Productos tecnológicos propios",
        "Software y plataformas",
        "Configuradores y herramientas digitales",
        "Sistemas y métodos propios aplicados a operaciones",
      ],
      rule: "KORA = TECNOLOGÍA PROPIA",
    },
    alma: {
      tag: "Personas — Talento y desarrollo",
      role: "ALMA es responsable de las personas del grupo: talento, recursos humanos, administración y gestión de personas, desarrollo, capacitación y cultura.",
      bullets: [
        "Talento y recursos humanos",
        "Administración y gestión de personas",
        "Desarrollo y capacitación",
        "Cultura",
      ],
      rule: "ALMA = PERSONAS",
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
