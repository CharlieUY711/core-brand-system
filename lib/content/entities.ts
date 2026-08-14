// Corporate Architecture entities.
//
// Canonical model (corrected):
//
//                CHARLIE  (vision / governance)
//                   |
//                  CORE   (Business Operating System — platform,
//                          intelligence, orchestration; executes the
//                          vision Charlie defines)
//        ___________|_______________________
//       |                |                  |
//     ODDY             COMITA             FACILIA
//  logistics brain +   Goods (cuenta      Services (cleaning,
//  territory operator  y orden)           maintenance, operational
//       |              — no services      continuity) — no goods
//   OnDemand
//  free-trade-zone +
//  international
//  transport
//
// CHARLIE sits above CORE conceptually (vision/governance), never the
// other way round. ODDY is the ecosystem's logistics brain AND the
// operator within the (taxed) domestic territory, including last-mile —
// it IS a logistics operator, and it is the parent of OnDemand, its
// subsidiary for free-trade-zone and international transport (untaxed).
// COMITA and FACILIA are peer entities under CORE, mutually exclusive by
// design: COMITA only transacts goods (import / "cuenta y orden"),
// FACILIA only provides services — neither does the other's function.
// ODDY must never be represented as CORE's parent.
// COMITA is the only correct spelling. "COMITIA" must never appear.

export type Entity = {
  slug: "charlie" | "oddy" | "ondemand" | "comita" | "facilia";
  name: string;
  tag: string;
  role: string;
  bullets?: string[];
  restriction?: string;
  rule?: string;
  immutable?: boolean;
  /** Slug of the entity this one is a subsidiary of, for rendering as a
   * nested branch instead of a direct peer under CORE. */
  parent?: "oddy";
  /** Short (one-word-ish) function label for compact visual contexts —
   * e.g. CORE Orbit's orbit chips — where the full `tag` is too long.
   * Kept in sync with the absolute rules: ODDY/OnDemand = LOGISTICS,
   * FACILIA = SERVICES, COMITA = COMMERCE, CHARLIE = ECOSYSTEM. */
  orbitCategory?: string;
  /** Reference accent color for compact visual contexts (CORE Orbit).
   * Distinct from CORE's own design tokens — this is each entity's own
   * approximate identity color for visual differentiation in a
   * composition, not a CORE Ink/Signal value. */
  orbitColor?: string;
};

export const entities: Entity[] = [
  {
    slug: "charlie",
    name: "Charlie",
    tag: "Vision / Governance",
    role: "Charlie is the top conceptual level of the ecosystem — vision, governance and direction. CORE executes the vision Charlie defines.",
    bullets: [
      "Not a product",
      "Not an application",
      "Not an operating vertical",
      "Sits above CORE conceptually — vision and governance, not execution",
    ],
    orbitCategory: "ECOSYSTEM",
    orbitColor: "#D9641C",
  },
  {
    slug: "oddy",
    name: "ODDY",
    tag: "Logistics — Territory / Last-Mile",
    role: "ODDY (from \"OnDemand Delivery\") is the ecosystem's logistics brain and the operator within the domestic territory — last-mile and related operations, under the standard tax regime. ODDY is the parent of OnDemand.",
    bullets: [
      "Territory and last-mile logistics operation",
      "Transport, transformation, kitting and assembly of goods within its own territory",
      "Parent company of OnDemand",
      "Operates under standard taxation (domestic / \"plaza\")",
    ],
    immutable: true,
    orbitCategory: "LOGISTICS",
    orbitColor: "#1D5FD6",
  },
  {
    slug: "ondemand",
    name: "OnDemand",
    tag: "Logistics — Free Zone / International",
    role: "OnDemand is ODDY's subsidiary, responsible for logistics in free-trade-zone territory and international transport.",
    bullets: [
      "Logistics operation in free-trade-zone territory",
      "International transport",
      "Operates tax-exempt, unlike ODDY's domestic operation",
      "Transport, transformation, kitting and assembly of goods within its own territory",
    ],
    restriction:
      "OnDemand IS NOT COMMERCE. It must not be described as commerce, marketplace, retailer, e-commerce or commercial operation.",
    parent: "oddy",
    orbitCategory: "LOGISTICS",
    orbitColor: "#2AA8D8",
  },
  {
    slug: "comita",
    name: "COMITA",
    tag: "Commerce — Goods",
    role: "COMITA imports and commercializes goods on behalf of clients (\"cuenta y orden\"). It transacts goods only.",
    bullets: [
      "Import and commercialization under \"cuenta y orden\"",
      "Goods only",
      "Sales and commercial operations",
    ],
    restriction: "COMITA does not provide services. Service delivery is FACILIA's function, not COMITA's.",
    rule: "COMITA = GOODS COMMERCE",
    orbitCategory: "COMMERCE",
    orbitColor: "#1F7A4D",
  },
  {
    slug: "facilia",
    name: "FACILIA",
    tag: "Services — Facility Management",
    role: "FACILIA delivers on-site services at client facilities — cleaning, maintenance and operational continuity. It provides services only.",
    bullets: [
      "Cleaning",
      "Maintenance",
      "Operational continuity of client facilities",
      "Services only",
    ],
    restriction: "FACILIA does not transact goods. Goods commerce is COMITA's function, not FACILIA's.",
    rule: "FACILIA = SERVICES",
    immutable: true,
    orbitCategory: "SERVICES",
    orbitColor: "#16264A",
  },
];
