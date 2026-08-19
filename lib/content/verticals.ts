// CORE System verticals — structural/business data only.
// These are technology layers, not the operating entities themselves.
// The operating entities live in Corporate Architecture (lib/content/entities.ts).
//
// Functional mapping (frozen):
//   CORE Logistics -> ODDY + OnDemand (both are the LOGISTICS function,
//                     each operating in its own territory)
//   CORE Market    -> COMITA (goods commerce only)
//   CORE Services  -> FACILIA (services only)
//
// i18n note (V1.4.1 correction): this file holds ONLY canonical/structural
// data — slug, frozen product name, accent color, the showFlow flag, and
// `relations` as plain entity slugs (the business relationship: which
// operating entities this vertical serves). All editorial/display text
// (short, role, note, and the relation label sentences) lives in
// lib/i18n/dictionaries/{es,pt}.ts under `verticals.<slug>`, keyed by the
// same slug used here.

export type VerticalSlug = "logistics" | "rep" | "market" | "services" | "intelligence" | "finance";
export type RelatedEntitySlug = "oddy" | "ondemand" | "comita" | "facilia";

/** Shape of the editorial content each vertical has in
 * lib/i18n/dictionaries/{es,pt}.ts under `verticals.<slug>`. See the note on
 * EntityContent in entities.ts — same reasoning. */
export type VerticalContent = {
  short: string;
  role: string;
  note?: string;
  relations?: Partial<Record<RelatedEntitySlug, string>>;
};

export type Vertical = {
  slug: VerticalSlug;
  name: string;
  color: string;
  /** Entity slugs this vertical is the technology layer for. */
  relations?: RelatedEntitySlug[];
  showFlow?: boolean;
};

export const verticals: Vertical[] = [
  {
    slug: "logistics",
    name: "CORE Logistics",
    color: "#2E6690",
    relations: ["oddy", "ondemand"],
    showFlow: true,
  },
  {
    slug: "rep",
    name: "CORE Rep",
    color: "#A9722F",
  },
  {
    slug: "market",
    name: "CORE Market",
    color: "#217A63",
    relations: ["comita"],
    showFlow: true,
  },
  {
    slug: "services",
    name: "CORE Services",
    color: "#16264A",
    relations: ["facilia"],
    showFlow: true,
  },
  {
    slug: "intelligence",
    name: "CORE Intelligence",
    color: "#5A56A8",
  },
  {
    slug: "finance",
    name: "CORE Finance",
    color: "#2E7D53",
  },
];
