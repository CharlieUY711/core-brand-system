// Corporate Architecture entities — who does what in the ecosystem.
// COMITA is the only correct spelling. "COMITIA" must never appear.

export type Entity = {
  slug: "oddy" | "ondemand" | "comita";
  name: string;
  tag: string;
  role: string;
  bullets?: string[];
  restriction?: string;
  rule?: string;
  immutable?: boolean;
};

export const entities: Entity[] = [
  {
    slug: "oddy",
    name: "ODDY",
    tag: "Corporate Ecosystem / Brand",
    role: "ODDY is the brand and the corporate ecosystem of origin. The entire group structure — CORE, OnDemand, COMITA and the verticals — operates within the ODDY ecosystem.",
    immutable: true,
  },
  {
    slug: "ondemand",
    name: "OnDemand",
    tag: "Logistics Operations",
    role: "Responsible for the logistics operation of the ecosystem.",
    bullets: [
      "Logistics operation in free-trade-zone territory",
      "Regional logistics operation",
      "Operational execution",
      "Logistics coordination",
      "Processes and services associated with the logistics operation",
    ],
    restriction:
      "OnDemand IS NOT COMMERCE. It must not be described as commerce, marketplace, retailer, e-commerce or commercial operation.",
  },
  {
    slug: "comita",
    name: "COMITA",
    tag: "Commerce",
    role: "Responsible for the commercial activity of the ecosystem.",
    bullets: [
      "Commerce and commercial activity",
      "Products",
      "E-commerce",
      "Marketplace when applicable",
      "Sales and commercial operations",
    ],
    rule: "COMITA = COMMERCE",
  },
];
