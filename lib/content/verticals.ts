// CORE System verticals — technology layers of the CORE platform.
// These are technology layers, not the operating entities themselves.
// The operating entities live in Corporate Architecture (lib/content/entities.ts).
//
// Functional mapping (frozen):
//   CORE Logistics -> ODDY + OnDemand (both are the LOGISTICS function,
//                     each operating in its own territory)
//   CORE Market    -> COMITA (goods commerce only)
//   CORE Services  -> FACILIA (services only)

export type Relation = { label: string; href: string };

export type Vertical = {
  slug: "logistics" | "rep" | "market" | "services" | "intelligence" | "finance";
  name: string;
  color: string;
  short: string;
  role: string;
  note?: string;
  relations?: Relation[];
  showFlow?: boolean;
};

export const verticals: Vertical[] = [
  {
    slug: "logistics",
    name: "CORE Logistics",
    color: "#2E6690",
    short: "technology layer for ODDY + OnDemand",
    role: "Technology layer of CORE for the logistics function — serving both ODDY (domestic territory, last-mile) and OnDemand (free-trade-zone, international), each in its own territory of competence.",
    note: "CORE Logistics does not execute the operation — it is the platform that organizes, monitors and integrates it.",
    relations: [
      { label: "ODDY operates territory / last-mile logistics", href: "/architecture/oddy" },
      { label: "OnDemand operates free-zone / international logistics", href: "/architecture/ondemand" },
    ],
  },
  {
    slug: "rep",
    name: "CORE Rep",
    color: "#A9722F",
    short: "transversal representation capability",
    role: "Transversal technology capability related to representation and commercial management within the ecosystem — not tied to a single operator.",
    note: "Function under definition — no specific operative capabilities are documented yet beyond this description.",
  },
  {
    slug: "market",
    name: "CORE Market",
    color: "#217A63",
    short: "technology layer for COMITA",
    role: "Technology platform for goods commerce within the CORE ecosystem.",
    note: "CORE Market is not an independent commercial legal entity and does not carry out commercial activity itself. Goods only — COMITA never provides services.",
    relations: [{ label: "COMITA transacts goods (\"cuenta y orden\")", href: "/architecture/comita" }],
    showFlow: true,
  },
  {
    slug: "services",
    name: "CORE Services",
    color: "#16264A",
    short: "technology layer for FACILIA",
    role: "Technology platform for facility services within the CORE ecosystem.",
    note: "CORE Services does not deliver the service itself — it is the platform that supports it. Services only — FACILIA never transacts goods.",
    relations: [{ label: "FACILIA delivers facility services", href: "/architecture/facilia" }],
    showFlow: true,
  },
  {
    slug: "intelligence",
    name: "CORE Intelligence",
    color: "#5A56A8",
    short: "transversal intelligence",
    role: "Transversal intelligence and data capability of the CORE ecosystem, serving every entity and operation.",
  },
  {
    slug: "finance",
    name: "CORE Finance",
    color: "#2E7D53",
    short: "transversal financial capability",
    role: "Transversal financial capability of the CORE ecosystem, serving every entity and operation.",
  },
];
