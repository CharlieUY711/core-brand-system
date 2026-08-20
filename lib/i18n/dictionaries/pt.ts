// CORE i18n — Portuguese (Brazilian, neutral/international register).
// Mirrors the exact key structure of es.ts — see that file for the notes on
// deliberately untranslated frozen terminology. Typed against es.ts's
// Dictionary shape so a missing/mistyped key fails typecheck instead of
// silently falling back at runtime.

import type { Dictionary } from "./es";

const pt: Dictionary = {
  a11y: {
    skipToContent: "Ir para o conteúdo principal",
    primaryNav: "Navegação principal",
    breadcrumbNav: "Trilha de navegação",
    footerNav: "Rodapé",
    menuOpen: "Menu",
    menuClose: "Fechar",
    languageSwitcher: "Mudar idioma",
  },
  nav: {
    tagline: "Marca e Sistema",
    portalVersion: "Portal v1.0",
    groups: {
      brand: "Marca",
      system: "Sistema",
      architecture: "Arquitetura Corporativa",
      resources: "Recursos",
    },
    items: {
      brandGuidelines: "Brand Guidelines",
      brandDefinitions: "Brand Definitions",
      logoAssets: "Logo e Assets",
      colorSystem: "Sistema de Cores",
      typography: "Tipografia",
      coreOrbit: "CORE Orbit",
      overview: "Visão geral",
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
      icons: "Ícones",
      uiTokens: "UI Tokens",
    },
  },
  breadcrumb: {
    root: "CORE",
    brand: "Marca",
    system: "Sistema",
    architecture: "Arquitetura Corporativa",
    resources: "Recursos",
  },
  footer: {
    tagline: "CORE — Marca e Sistema",
    legal: "© {year} CORE / ODDY. Todos os direitos reservados.",
    linkGuidelines: "Brand Guidelines",
    linkArchitecture: "Arquitetura Corporativa",
    linkResources: "Recursos",
  },
  home: {
    metaTitle: "CORE — Marca e Sistema",
    eyebrow: "CORE Marca e Sistema · Portal v1.0",
    tagline: "Marca e Sistema",
    ledeBefore: "A identidade, arquitetura e sistema visual da ",
    ledeAfter: " — o núcleo que conecta e orquestra o ecossistema.",
    fact1Q: "O que é a CORE?",
    fact1A: "O Business Operating System do ecossistema — a camada de plataforma, inteligência e orquestração.",
    fact2Q: "Como ela se relaciona com a Charlie?",
    fact2A: "A Charlie define visão e governança. A CORE a executa — a CORE é o sistema que a Charlie opera, nunca sua controladora.",
    fact3Q: "O que este portal contém?",
    fact3A: "Identidade de marca, o sistema tecnológico CORE, Arquitetura Corporativa e recursos de referência.",
    fact4Q: "Como eu navego pelo portal?",
    fact4A: "Quatro seções numeradas no menu lateral, ou o mapa do sistema mais abaixo — cada página mostra uma trilha de navegação de volta até aqui.",
    systemMapEyebrow: "Mapa do sistema",
    systemMapTitle: "Quatro seções, um só portal",
    corporateModelEyebrow: "Modelo corporativo",
    corporateModelTitle: "Um sistema. Responsabilidades claras.",
    corporateModelLede: "A Charlie define. A CORE orquestra e executa. As entidades e operações — ODDY (com OnDemand), COMITA, FACILIA, KORA e ALMA — tocam o negócio.",
  },
  architecture: {
    metaTitle: "Arquitetura Corporativa",
    sectionTitle: "Arquitetura Corporativa",
    lede: "A marca define a aparência da CORE. A Arquitetura Corporativa define como o ecossistema está organizado e quem faz o quê — as duas coisas nunca se misturam. A Charlie define a visão; a CORE é o Business Operating System que orquestra e executa; ODDY (com sua subsidiária OnDemand), COMITA, FACILIA, KORA e ALMA são as entidades que tocam o negócio.",
    ruleText: "A Charlie define. A CORE orquestra e executa. A ODDY opera logística no território doméstico e é a controladora da OnDemand, que opera logística de zona franca e internacional. A COMITA comercializa bens; a FACILIA presta serviços — nunca a função uma da outra. A KORA desenvolve a tecnologia própria do grupo e a ALMA cuida das suas pessoas. A ODDY nunca é controladora da CORE.",
    tableCaption: "Responsabilidades por entidade",
    tableColEntity: "Entidade",
    tableColRole: "Função",
    diagram: {
      charlie: "Visão · Governança",
      core: "Business Operating System",
      oddy: "Território / Última Milha",
      ondemand: "Zona Franca / Internacional",
      comita: "Bens",
      facilia: "Gestão de Instalações",
      kora: "Tecnologia",
      alma: "Pessoas",
    },
    tableRoles: {
      charlie: "Visão · governança — nível conceitual superior, não é um produto nem uma vertical",
      core: "Business Operating System — plataforma · inteligência · orquestração",
      oddy: "Cérebro logístico e operador de território / última milha — controladora da OnDemand, não da CORE",
      ondemand: "Subsidiária da ODDY — logística de zona franca e internacional",
      comita: "Comércio — apenas bens (\"conta e ordem\")",
      facilia: "Serviços de facilities — limpeza, manutenção, continuidade operacional; apenas serviços",
      kora: "Tecnologia própria — software, plataformas, configuradores, sistemas e métodos do grupo",
      alma: "Pessoas — talento, recursos humanos, desenvolvimento, capacitação e cultura",
    },
  },
  entityPage: {
    metaTitleSuffix: "Arquitetura Corporativa",
    restrictionLabel: "Restrição",
    immutableSuffix: "ATIVO DE MARCA — IMUTÁVEL",
    immutableNote: "A {name} já tem identidade própria. Nunca é redesenhada, modificada ou reinterpretada. O arquivo oficial ainda não está disponível neste repositório — placeholder de referência:",
    immutableNoteHeld: "A {name} já tem identidade própria. Nunca é redesenhada, modificada ou reinterpretada. O arquivo oficial está neste repositório e é reproduzido sem alteração:",
    officialAssetPlaceholder: "ATIVO OFICIAL DA {name} — INSERIR ARQUIVO OFICIAL",
  },
  system: {
    metaTitle: "Sistema",
    sectionTitle: "Sistema CORE",
    lede: "A CORE é a plataforma tecnológica e o sistema que conecta, orquestra e dá suporte ao ecossistema.",
    operatorFacingLabel: "Voltado a operadores — camada tecnológica para uma entidade operadora",
    transversalLabel: "Transversal — não vinculado a um único operador",
  },
  verticalPage: {
    relations: "Relações",
    relation: "Relação",
    seeCorporateArchitecture: "ver Arquitetura Corporativa",
  },
  technologyLayer: {
    technologyPlatform: "PLATAFORMA TECNOLÓGICA",
  },
  resources: {
    metaTitle: "Recursos",
    sectionTitle: "Recursos",
    lede: "Assets para download e referências de implementação. Nada aqui é inventado — os módulos sem arquivo exportado dizem isso explicitamente.",
    badgeLive: "Disponível",
    badgeComingNext: "Em breve",
    items: {
      assets: { label: "Assets", kind: "SVG · PNG", text: "Exportações do símbolo e dos lockups." },
      icons: { label: "Ícones", kind: "ICO · PNG", text: "Favicon e escalas de redução do ícone do app." },
      tokens: { label: "UI Tokens", kind: "Variáveis CSS", text: "Design tokens para superfícies de produto." },
    },
    assetsPage: {
      lede: "Exportações SVG e PNG do símbolo, CORE, CORE Group e dos lockups de vertical, geradas a partir do asset mestre.",
      svgLabel: "Assets SVG — ainda não exportados",
      svgNote: "Símbolo, CORE, CORE Group e lockups de vertical. Os arquivos são gerados a partir de components/brand/CoreSymbolDefs.tsx assim que o tooling de exportação estiver configurado — nada aqui é inventado.",
      pngLabel: "Assets PNG — ainda não exportados",
      pngNote: "Exportações transparentes, em fundo claro e em fundo escuro.",
    },
    iconsPage: {
      lede: "Mesmas escalas de redução validadas em Brand Guidelines § 14–15.",
      faviconTab: "core.com.uy",
    },
    tokensPage: {
      lede: "Mesmo sistema definido em Brand Guidelines § 18 — fonte única, não redefinido aqui.",
    },
  },
  brand: {
    metaTitle: "Marca",
    sectionTitle: "Marca",
    lede: "A identidade visual e a linguagem de design da CORE.",
    items: {
      guidelines: { label: "Brand Guidelines", text: "O manual de identidade completo e aprovado — 21 seções." },
      definitions: { label: "Brand Definitions", text: "Logo, nome, cores e tipografias de cada marca do ecossistema." },
      logo: { label: "Logo e Assets", text: "Assets oficiais do símbolo e dos lockups." },
      color: { label: "Sistema de Cores", text: "CORE Ink, CORE Signal e a paleta de apoio." },
      typography: { label: "Tipografia", text: "IBM Plex — papéis de display, texto e UI." },
      orbit: { label: "CORE Orbit", text: "O recurso gráfico compositivo, mantido separado do símbolo." },
    },
    logoPage: {
      lede: "Esta página documenta o símbolo oficial e os assets de lockup — não substitui o arquivo fonte. Especificação completa de construção em Brand Guidelines § 02–03.",
      symbolCaption: "Símbolo — CORE SYMBOL MASTER",
      wordmarkCaption: "Wordmark — CORE",
      groupCaption: "Lockup — CORE Group",
      footnotePrefix: "Versões positiva / negativa / monocromática em",
      footnoteGuidelinesRef: "Brand Guidelines § 16",
      footnoteMid: ". Arquivos SVG e PNG exportáveis em",
      footnoteLink: "Recursos → Assets",
      footnoteSuffix: "assim que forem gerados.",
    },
    colorPage: {
      lede: "A paleta oficial da CORE, herdada diretamente de Brand Guidelines § 06 — não redefinida aqui.",
      neutralsHeading: "Neutros",
      semanticHeading: "Semântico",
    },
    typographyPage: {
      lede: "Família oficial: IBM Plex — sem alterações em relação a Brand Guidelines § 07.",
      tableCaption: "Escala tipográfica",
      tableColRole: "Papel",
      tableColWeight: "Peso",
      tableColSize: "Tamanho base",
      tableColTracking: "Tracking",
      rows: {
        display: "Display / H1",
        h2: "H2 seção",
        h3: "H3 subseção",
        body: "Corpo",
        uiLabel: "Label de UI / botão",
        mono: "Mono / spec",
      },
    },
    definitionsPage: {
      title: "Brand Definitions",
      lede: "As definições gráficas oficiais de cada marca do ecossistema: logo, nome, três cores e duas tipografias. Cada dado indica de onde vem.",
      masterKind: "Documento mestre",
      masterTitle: "Master Brand Definitions",
      masterText: "As marcas do ecossistema em uma única tabela comparável, com links para cada ficha.",
      guideKind: "Guia",
      guideTitle: "Guia de uso da marca",
      guideText: "Para que serve o sistema e como se usa. Duas páginas.",
      sheetsLabel: "Fichas individuais",
      pendingTag: "Pendente",
      note: "Os documentos abrem como páginas independentes, prontas para imprimir em A4. As marcas assinaladas como pendentes têm uma definição gráfica inicial, sem aprovação formal.",
    },
    orbitPage: {
      noteTag: "Recurso gráfico do sistema — não faz parte do símbolo",
      noteText: "O CORE Orbit não faz parte da geometria D3-C. É um recurso compositivo separado para capas, apresentações, páginas web, fundos institucionais, diagramas, motion e storytelling.",
    },
  },
  guidelines: {
    metaTitle: "Brand Guidelines",
    crumbRoot: "CORE Brand & System",
    crumbVersion: "Brand Guidelines v1.0",
    frozen: "D3-C congelado",
    tocNavLabel: "Seções das Brand Guidelines",
    toc: [
      "Conceito",
      "Símbolo D3-C",
      "Construção",
      "Área de respiro",
      "Tamanhos mínimos",
      "Paleta",
      "Tipografia",
      "Wordmark",
      "CORE Group",
      "Arquitetura de marca",
      "Relação com a ODDY",
      "CORE Orbit",
      "Redução",
      "Favicon",
      "Ícone de app",
      "Versões",
      "Usos incorretos",
      "Sistema de cor de UI",
      "Verticais",
      "Aplicações",
      "Regras mestras",
    ],
    heroEyebrow: "CORE Group — Brand Guidelines · v1.0",
    heroTitle: "O núcleo que conecta e orquestra um sistema.",
    heroThesisRich:
      "A CORE não é um círculo. Não é um O estilizado. Não é um ponto com decoração em volta. É um <b>núcleo dominante</b> sustentando um <b>sistema subordinado</b> — a mesma leitura que sua geometria, sua arquitetura de marca e sua linguagem visual repetem em cada aplicação.",

    s01Title: "Conceito",
    s01CorrectHead: "Leitura correta",
    s01CorrectRich:
      "A CORE é o <strong>núcleo</strong> que conecta e orquestra um <strong>sistema</strong>. O anel externo domina porque é identidade; o anel interno é subordinado porque é relação, conexão, circulação — nunca compete com o núcleo, acompanha-o.",
    s01AvoidHead: "Leituras a evitar",
    s01AvoidRich:
      "“A CORE é um círculo.” — perde a hierarquia núcleo/órbita.<br />“A CORE é um O estilizado.” — reduz a marca a uma variação da ODDY.<br />“A CORE é um ponto com decoração.” — inverte o peso: o núcleo deixa de dominar.",

    s02Title: "Símbolo D3-C — CORE Symbol Master",
    s02Lede:
      "Asset mestre. Toda aplicação posterior deste documento deriva desta única fonte — nunca é redesenhada à mão.",
    s02Caption: "Dados do símbolo",
    s02AssetName: "Nome do asset",
    s02Variant: "Variante",
    s02Concept: "Conceito",
    s02ConceptValue: "núcleo dominante + órbita interna",
    s02Status: "Status",
    s02StatusValue: "congelado — 41/50 na validação comparativa",
    s02Origin: "Origem geométrica",
    s02OriginValue: "o DNA do anel da ODDY, reinterpretado",

    s03Title: "Construção",
    s03Lede:
      "Especificação técnica fiel ao mestre. Reproduzir estes valores exatos — não calcular no olho.",
    s03Nucleus: "Núcleo (anel externo)",
    s03Orbit: "Órbita interna",
    s03OuterRadius: "Raio externo",
    s03InnerCut: "Corte interno",
    s03CutOffset: "Deslocamento do corte",
    s03CutOffsetFrom: "a partir do centro",
    s03Thickness: "Espessura resultante",
    s03ThicknessValue: "22 / 18 (≈25% do raio)",
    s03Gap: "Distância do núcleo",
    s03RefBox: "Caixa de referência",
    s03RefBoxValue: "viewBox 200 × 200, centro 100,100",
    s03Incline: "Inclinação",
    s03InclineValue: "-20°, aplicada igualmente às duas camadas",
    s03TestColor: "Cor de teste neste documento",
    s03TestColorValue: "#152238 — ver § 06 Paleta",

    s04Title: "Área de respiro",
    s04Lede: "Uma unidade derivada do próprio símbolo — nunca um valor arbitrário em pixels.",
    s04FormulaRich: "<strong>X = altura total do símbolo ÷ 4.</strong>",
    s04TextRich:
      "Nenhum elemento estranho (texto, borda de contêiner, outro logo) pode invadir uma margem menor que 1X ao redor do símbolo. O wordmark <strong>CORE</strong> e o lockup <strong>CORE Group</strong> herdam a mesma unidade X, calculada sobre a altura do símbolo dentro de cada lockup — não sobre a composição inteira.",

    s05Title: "Tamanhos mínimos",
    s05Lede: "Três critérios distintos — não são intercambiáveis.",
    s05ColElement: "Elemento",
    s05ColDigital: "Mínimo digital",
    s05ColPrint: "Mínimo impresso",
    s05ColComfort: "Mínimo confortável",
    s05RowSymbol: "Símbolo isolado",
    s05RowWordmark: "Wordmark CORE",
    s05Height: "de altura",

    s06Title: "Paleta",
    s06Lede:
      "A cor foi definida pelo que precisava comunicar, não o contrário. A CORE precisava de distância real em relação à ODDY — não só outro tom, outro registro: onde a ODDY é azul vívido e luminoso (marca operacional, energia), a CORE é um azul profundo, quase grafite (plataforma, sistema, sobriedade institucional). Mesma linhagem cromática, papéis opostos.",
    s06Neutrals: "Neutros",
    s06Semantic: "Semânticos",

    s07Title: "Tipografia",
    s07Lede:
      "IBM Plex — uma única superfamília cobrindo display, texto, UI e dados sem fragmentar o sistema.",
    s07Display: "Display — Plex Sans 700/600",
    s07Text: "Texto — Plex Sans 400/500",
    s07Data: "UI / Dados — Plex Mono",

    s08Title: "Wordmark",
    s08Lede:
      "O símbolo nunca compete com a palavra. Configuração principal: horizontal, símbolo à esquerda.",
    s08Primary: "Principal — horizontal, símbolo + palavra",
    s08Secondary: "Secundária — empilhada, para formatos quadrados",
    s08Isolated: "Símbolo isolado — favicon, avatar, ícone de app",

    s09Title: "CORE Group",
    s09Lede:
      "Expressão corporativa superior. Não é outra empresa — o mesmo símbolo com uma segunda linha de hierarquia, menor.",
    s09Note:
      "“Group” nunca ultrapassa 40% do tamanho de “CORE” e nunca compete em peso visual — é endosso de estrutura corporativa, não um segundo nome de marca.",

    s10Title: "Arquitetura de marca",
    s10Lede: "Quatro níveis. Cada um responde a uma pergunta diferente.",
    s10L1: "Marca corporativa / origem. Identidade externa, imutável — a CORE não a substitui nem a reinterpreta.",
    s10L2: "Plataforma / sistema. A camada tecnológica que orquestra o ecossistema — o símbolo D3-C vive neste nível.",
    s10L3: "Estrutura corporativa do ecossistema, quando o contexto exige (manuais, comunicação institucional).",
    s10L4Name: "Verticais / produtos",
    s10L4:
      "CORE Logistics, CORE Rep, CORE Market, CORE Services, CORE Intelligence, CORE Finance — extensões subordinadas, nunca marcas independentes. CORE Logistics é a camada tecnológica da função logística — ODDY (território, última milha) e OnDemand (zona franca, internacional), cada uma em seu território; CORE Market é a camada tecnológica da COMITA (apenas bens); CORE Services, a da FACILIA (apenas serviços); CORE Rep, CORE Intelligence e CORE Finance são capacidades transversais da plataforma, não vinculadas a um único operador. A CORE fornece o sistema — não opera logística nem comércio. Ver § 19.",
    s10ModelTitle: "Modelo operacional: quem faz o quê",
    s10ModelNote:
      "Esta relação é funcional, não uma segunda hierarquia de marca — não substitui os quatro níveis acima.",
    s10Rule:
      "A Charlie define. A CORE orquestra e executa. A ODDY opera logística de território e é a controladora da OnDemand, que opera logística de zona franca e internacional. A COMITA comercializa bens; a FACILIA presta serviços — nunca a função uma da outra. A KORA desenvolve a tecnologia própria do grupo e a ALMA cuida das suas pessoas. A ODDY nunca é controladora da CORE.",

    s11Title: "Relação com a ODDY",
    s11Lede:
      "Três formas de coexistir, resolvidas por hierarquia, espaço e tipografia — nunca por fusão gráfica. As marcas abaixo são os arquivos oficiais da ODDY, reproduzidos sem alteração.",
    s11AHead: "EXEMPLO A — LADO A LADO",
    s11ANote:
      "Duas marcas dividindo uma superfície, sem que nenhuma endosse a outra. Uso: rodapé institucional, encerramento de apresentação conjunta, materiais B2B. É co-presença de marca, não um enunciado de hierarquia — corporativamente, a ODDY está sob a CORE.",
    s11BHead: "EXEMPLO B — ENDOSSO",
    s11BParent: "controladora da",
    s11BNote:
      "O único endosso que a ODDY carrega é o que ela dá: a OnDemand é endossada pela ODDY. A ODDY não recebe endosso — não se escreve “by CORE”, e a CORE nunca se escreve “by ODDY”.",
    s11CHead: "EXEMPLO C — ESTRUTURA",
    s11CNote:
      "CORE Group como guarda-chuva, ODDY listada como unidade operacional. Uso: manual, organograma, documentação institucional.",
    s11ImmutableTag: "ATIVO DE MARCA ODDY — IMUTÁVEL",
    s11Immutable:
      "O logotipo, símbolo, construção, proporções, cores e tipografia da ODDY não são modificados, redesenhados, reinterpretados nem fundidos com a CORE em nenhuma parte deste documento. As marcas mostradas acima são os arquivos aprovados, reproduzidos em escala e nada mais. Aparecem apenas sobre fundos claros: o logotipo da ODDY combina navy e azul, e sobre fundo escuro seu primeiro “D” desaparece e a marca se lê “O DY”.",

    s12Title: "CORE Orbit",
    s12Tag: "Recurso compositivo, não faz parte do símbolo",
    s12Text:
      "O guia Orbit é uma ferramenta de comunicação institucional — capas, apresentações, motion. O símbolo D3-C (§ 02) funciona completo sem ele. Nunca se combinam em um único asset de logo.",

    s13Title: "Sistema de redução",
    s13Lede:
      "Nenhuma adaptação técnica é necessária — o mestre já foi validado a 16 px na rodada anterior de micro-testes. Mesma geometria, sem exceção, nas cinco escalas.",

    s14Title: "Favicon",
    s14Lede: "16 px, geometria idêntica à do mestre.",

    s15Title: "Ícone de app",
    s15Lede:
      "32 px em diante. O símbolo funciona com margem generosa — não precisa de um fundo colorido para se sustentar.",

    s16Title: "Versões",
    s16Lede:
      "Positiva, negativa, monocromática. Geometria D3-C sem exceção nas três.",
    s16Positive: "Positiva — fundo claro",
    s16Negative: "Negativa — fundo escuro",
    s16Mono: "Monocromática — preto / branco",

    s17Title: "Usos incorretos",
    s17Lede:
      "Ilustrados apenas para documentar o erro — nenhum destes exemplos é uma variante válida.",
    s17Immutable:
      "Não modifique a ODDY para resolver qualquer problema desta seção. Se a CORE conflita com a ODDY em uma aplicação, a correção acontece do lado da CORE e na composição — nunca sobre o ativo da ODDY.",

    s18Title: "Sistema de cor de UI",
    s18Lede:
      "Os produtos consomem tokens, não valores hex soltos. Todos derivam da arquitetura CORE — não há paletas isoladas por aplicação.",
    s18Shipments: "Envios ativos",
    s18Delivered: "entregue",
    s18InTransit: "em trânsito",
    s18Delayed: "atrasado",
    s18Failed: "falhou",
    s18Processed: "142 envios processados hoje",
    s18NewOrder: "Novo pedido",

    s19Title: "Verticais",
    s19Lede:
      "Extensões do sistema CORE, não marcas independentes: mesmo símbolo, mesmo wordmark, um tom identificador por vertical, sempre na mesma faixa de saturação e luminosidade.",

    s20Title: "Aplicações",
    s20Digital: "Digital",
    s20Corporate: "Corporativas",
    s20SignIn: "Entrar na CORE",
    s20Continue: "Continuar",
    s20Login: "login",
    s20Navbar: "barra de navegação",
    s20NavItems: "Dashboard · Envios · Faturamento",
    s20MobileHeader: "cabeçalho mobile",
    s20MobileDash: "Dashboard mobile",
    s20Alerts: "3 novos alertas",
    s20SlideSub: "Proposta comercial · 2026",
    s20SlideCover: "capa de apresentação",
    s20FullName: "Nome Completo",
    s20Role: "CORE — Plataforma",
    s20BizCard: "cartão de visita",
    s20DocHeader: "cabeçalho de documento",
    s20DocText: "Proposta técnica",

    s21Title: "Regras mestras — resumo",
    s21Rule: "REGRA",
    s21Rules: [
      "O D3-C está congelado.",
      "A ODDY está congelada.",
      "Não existe D4.",
      "Não se redesenha a ODDY.",
      "Não se fundem ODDY + CORE.",
      "A CORE deve ter identidade própria.",
      "CORE Orbit é um recurso gráfico, não parte do logo.",
      "As verticais são extensões do sistema CORE, não marcas independentes.",
      "A geometria permanece idêntica em todas as aplicações.",
      "A prioridade é construir um sistema, não um logo bonito.",
    ],
    s21Q1: "O logo da ODDY foi modificado de alguma forma?",
    s21Q2: "A geometria D3-C foi modificada de alguma forma?",
    s21No: "NÃO.",
    s21ClosingRich:
      "Este documento é a base do <strong>CORE Brand Guidelines v1.0</strong> e o ponto de partida para produção real: exportação SVG/PNG do símbolo mestre, geração de favicon e ícone de app, componentes de UI sobre os tokens definidos no § 18, e peças corporativas sobre os lockups do § 08–09.",
  },
  entities: {
    charlie: {
      tag: "Visão / Governança",
      role: "A Charlie é o nível conceitual superior do ecossistema — visão, governança e direção. A CORE executa a visão que a Charlie define.",
      bullets: [
        "Não é um produto",
        "Não é uma aplicação",
        "Não é uma vertical operacional",
        "Está posicionada conceitualmente acima da CORE — visão e governança, não execução",
      ],
    },
    oddy: {
      tag: "Logística — Território / Última Milha",
      role: "A ODDY (de \"OnDemand Delivery\") é o cérebro logístico do ecossistema e a operadora dentro do território doméstico — última milha e operações relacionadas, sob o regime tributário padrão. A ODDY é a controladora da OnDemand.",
      bullets: [
        "Operação logística de território e última milha",
        "Transporte, transformação, kitting e montagem de bens dentro do seu próprio território",
        "Controladora da OnDemand",
        "Opera sob tributação padrão (doméstica / \"praça\")",
      ],
    },
    ondemand: {
      tag: "Logística — Zona Franca / Internacional",
      role: "A OnDemand é a subsidiária da ODDY, responsável pela logística em território de zona franca e pelo transporte internacional.",
      bullets: [
        "Operação logística em território de zona franca",
        "Transporte internacional",
        "Opera isenta de impostos, diferente da operação doméstica da ODDY",
        "Transporte, transformação, kitting e montagem de bens dentro do seu próprio território",
      ],
      restriction: "A OnDemand NÃO É COMÉRCIO. Não deve ser descrita como comércio, marketplace, varejista, e-commerce ou operação comercial.",
    },
    comita: {
      tag: "Comércio — Bens",
      role: "A COMITA importa e comercializa bens por conta de clientes (\"conta e ordem\"). Só transaciona bens.",
      bullets: [
        "Importação e comercialização sob \"conta e ordem\"",
        "Apenas bens",
        "Vendas e operações comerciais",
      ],
      restriction: "A COMITA não presta serviços. A prestação de serviços é função da FACILIA, não da COMITA.",
      rule: "COMITA = COMÉRCIO DE BENS",
    },
    facilia: {
      tag: "Serviços — Gestão de Instalações",
      role: "A FACILIA presta serviços no local nas instalações dos clientes — limpeza, manutenção e continuidade operacional. Só presta serviços.",
      bullets: [
        "Limpeza",
        "Manutenção",
        "Continuidade operacional das instalações do cliente",
        "Apenas serviços",
      ],
      restriction: "A FACILIA não transaciona bens. O comércio de bens é função da COMITA, não da FACILIA.",
      rule: "FACILIA = SERVIÇOS",
    },
    kora: {
      tag: "Tecnologia — Produtos e sistemas próprios",
      role: "A KORA desenvolve e abriga a tecnologia própria do grupo: software, plataformas, ferramentas digitais, configuradores, sistemas e métodos aplicados à operação.",
      bullets: [
        "Produtos tecnológicos próprios",
        "Software e plataformas",
        "Configuradores e ferramentas digitais",
        "Sistemas e métodos próprios aplicados a operações",
      ],
      rule: "KORA = TECNOLOGIA PRÓPRIA",
    },
    alma: {
      tag: "Pessoas — Talento e desenvolvimento",
      role: "A ALMA é responsável pelas pessoas do grupo: talento, recursos humanos, administração e gestão de pessoas, desenvolvimento, capacitação e cultura.",
      bullets: [
        "Talento e recursos humanos",
        "Administração e gestão de pessoas",
        "Desenvolvimento e capacitação",
        "Cultura",
      ],
      rule: "ALMA = PESSOAS",
    },
  },
  verticals: {
    logistics: {
      short: "camada tecnológica para ODDY + OnDemand",
      role: "Camada tecnológica da CORE para a função logística — atende tanto a ODDY (território doméstico, última milha) quanto a OnDemand (zona franca, internacional), cada uma em seu próprio território de competência.",
      note: "A CORE Logistics não executa a operação — é a plataforma que a organiza, monitora e integra.",
      relations: {
        oddy: "A ODDY opera a logística de território / última milha",
        ondemand: "A OnDemand opera a logística de zona franca / internacional",
      },
    },
    rep: {
      short: "capacidade transversal de representação",
      role: "Capacidade tecnológica transversal relacionada à representação e gestão comercial dentro do ecossistema — não vinculada a um único operador.",
      note: "Função em definição — ainda não há capacidades operacionais específicas documentadas além desta descrição.",
    },
    market: {
      short: "camada tecnológica para COMITA",
      role: "Plataforma tecnológica para o comércio de bens dentro do ecossistema CORE.",
      note: "A CORE Market não é uma entidade legal comercial independente e não realiza atividade comercial por si mesma. Apenas bens — a COMITA nunca presta serviços.",
      relations: {
        comita: "A COMITA transaciona bens (\"conta e ordem\")",
      },
    },
    services: {
      short: "camada tecnológica para FACILIA",
      role: "Plataforma tecnológica para serviços de facilities dentro do ecossistema CORE.",
      note: "A CORE Services não presta o serviço em si — é a plataforma que o sustenta. Apenas serviços — a FACILIA nunca transaciona bens.",
      relations: {
        facilia: "A FACILIA presta serviços de facilities",
      },
    },
    intelligence: {
      short: "inteligência transversal",
      role: "Capacidade transversal de inteligência e dados do ecossistema CORE, a serviço de todas as entidades e operações.",
    },
    finance: {
      short: "capacidade financeira transversal",
      role: "Capacidade financeira transversal do ecossistema CORE, a serviço de todas as entidades e operações.",
    },
  },
};

export default pt;
