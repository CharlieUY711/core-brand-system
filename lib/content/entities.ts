// Corporate Architecture entities.
//
// Canonical model (corrected — do not revert to ODDY -> CORE):
//
//                CHARLIE  (vision / governance)
//                   |
//                  CORE   (Business Operating System — platform,
//                          intelligence, orchestration; executes the
//                          vision Charlie defines)
//        ___________|___________
//       |           |           |
//     ODDY       OnDemand     COMITA
//   Ecosystem    Logistics   Commerce
//
// CHARLIE sits above CORE conceptually (vision/governance), never the
// other way round. ODDY, OnDemand and COMITA are peer entities that CORE
// orchestrates — ODDY must never be represented as CORE's parent, and
// must never be described as the logistics operator.
// COMITA is the only correct spelling. "COMITIA" must never appear.

export type Entity = {
  slug: "charlie" | "oddy" | "ondemand" | "comita";
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
  },
  {
    slug: "oddy",
    name: "ODDY",
    tag: "Ecosystem / Brand",
    role: "ODDY is a corporate brand and ecosystem entity that CORE connects and orchestrates, alongside OnDemand and COMITA. ODDY does not sit above CORE, and is not the logistics operator — OnDemand is.",
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
