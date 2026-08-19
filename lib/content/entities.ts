// Corporate Architecture entities — structural/business data only.
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
//
// i18n note (V1.4.1 correction): this file holds ONLY canonical/structural
// data — slug, frozen brand name, hierarchy (parent), CORE Orbit category
// and color, and the immutable flag. All editorial/display text (tag,
// role, bullets, restriction, rule) lives in lib/i18n/dictionaries/{es,pt}.ts
// under `entities.<slug>`, keyed by the same slug used here. Semantic model
// and localized copy are deliberately kept in separate files so translating
// content can never accidentally alter a corporate relationship, and so the
// entity data has no locale dependency at all.

export type EntitySlug = "charlie" | "oddy" | "ondemand" | "comita" | "facilia";

/** Shape of the editorial content each entity has in
 * lib/i18n/dictionaries/{es,pt}.ts under `entities.<slug>`. Declared here,
 * next to the canonical slugs, so both dictionaries are forced (by the
 * `Record<EntitySlug, EntityContent>` annotation at their call site) to
 * cover every entity with the same shape — a missing or extra key fails
 * typecheck instead of silently drifting. */
export type EntityContent = {
  tag: string;
  role: string;
  bullets?: string[];
  restriction?: string;
  rule?: string;
};

export type Entity = {
  slug: EntitySlug;
  name: string;
  immutable?: boolean;
  /** Slug of the entity this one is a subsidiary of, for rendering as a
   * nested branch instead of a direct peer under CORE. */
  parent?: "oddy";
  /** Short (one-word-ish) function label for compact visual contexts —
   * e.g. CORE Orbit's orbit chips — where the full `tag` is too long.
   * Kept in sync with the absolute rules: ODDY/OnDemand = LOGISTICS,
   * FACILIA = SERVICES, COMITA = COMMERCE, CHARLIE = ECOSYSTEM. Not
   * localized: CoreOrbit.tsx (frozen) reads this as a plain string. */
  orbitCategory?: string;
  /** Accent color for compact visual contexts (CORE Orbit). Distinct from
   * CORE's own design tokens — this is each entity's own identity color,
   * not a CORE Ink/Signal value.
   *
   * These were placeholders until each brand's identity was closed. They now
   * carry the official value from Master Brand Definitions: the colour the
   * brand is actually recognised by. ODDY and OnDemand share one palette, so
   * they take its two poles — Navy for the parent, Blue for the sub-brand —
   * which keeps them distinguishable in the orbit while staying inside the
   * family. */
  orbitColor?: string;
};

export const entities: Entity[] = [
  {
    slug: "charlie",
    name: "Charlie",
    orbitCategory: "ECOSYSTEM",
    orbitColor: "#F26522", // Naranja Charlie
  },
  {
    slug: "oddy",
    name: "ODDY",
    immutable: true,
    orbitCategory: "LOGISTICS",
    orbitColor: "#0B2A61", // Navy ODDY
  },
  {
    slug: "ondemand",
    name: "OnDemand",
    parent: "oddy",
    orbitCategory: "LOGISTICS",
    orbitColor: "#0169F5", // Blue — el otro polo de la paleta ODDY
  },
  {
    slug: "comita",
    name: "COMITA",
    orbitCategory: "COMMERCE",
    orbitColor: "#1F7A4D", // Verde COMITA
  },
  {
    slug: "facilia",
    name: "FACILIA",
    immutable: true,
    orbitCategory: "SERVICES",
    orbitColor: "#D97400", // Orange — color distintivo de la unidad
  },
];
