// CORE System verticals — technology layers of the CORE platform.
// CORE Logistics and CORE Market are technology layers, not the operating
// entities themselves. The operating entities live in Corporate Architecture.

export type Vertical = {
  slug: "logistics" | "rep" | "market" | "intelligence" | "finance";
  name: string;
  color: string;
  short: string;
  role: string;
  note?: string;
  relation?: { label: string; href: string };
  showFlow?: boolean;
};

export const verticals: Vertical[] = [
  {
    slug: "logistics",
    name: "CORE Logistics",
    color: "#2E6690",
    short: "technology layer for OnDemand",
    role: "Technology layer of CORE for managing logistics operations.",
    note: "CORE Logistics does not execute the operation — it is the platform that organizes, monitors and integrates it.",
    relation: { label: "OnDemand operates logistics", href: "/architecture/ondemand" },
  },
  {
    slug: "rep",
    name: "CORE Rep",
    color: "#A9722F",
    short: "representation capability",
    role: "Technology capability related to representation and commercial management within the ecosystem.",
    note: "Function under definition — no specific operative capabilities are documented yet beyond this description.",
  },
  {
    slug: "market",
    name: "CORE Market",
    color: "#217A63",
    short: "technology layer for COMITA",
    role: "Technology platform for commerce, marketplace and e-commerce within the CORE ecosystem.",
    note: "CORE Market is not an independent commercial legal entity and does not carry out commercial activity itself.",
    relation: { label: "COMITA develops commerce", href: "/architecture/comita" },
    showFlow: true,
  },
  {
    slug: "intelligence",
    name: "CORE Intelligence",
    color: "#5A56A8",
    short: "data & analytics",
    role: "Data and intelligence platform / capability of the CORE ecosystem.",
  },
  {
    slug: "finance",
    name: "CORE Finance",
    color: "#2E7D53",
    short: "invoicing & payments",
    role: "Financial platform / capability of the CORE ecosystem.",
  },
];
