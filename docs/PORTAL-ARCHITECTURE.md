# CORE Brand & System — Portal Architecture

## Canonical domain

`core.com.uy`

The portal uses one canonical domain with path-based sections rather than multiple brand subdomains.

## Route map

```text
/
/brand
/brand/guidelines
/brand/logo
/brand/color
/brand/typography
/brand/orbit
/system
/system/logistics
/system/rep
/system/market
/system/intelligence
/system/finance
/architecture
/architecture/charlie
/architecture/oddy
/architecture/ondemand
/architecture/comita
/architecture/facilia
/resources
/resources/assets
/resources/icons
/resources/tokens
```

## Source of truth

The approved CORE Brand & System artifact is the visual and conceptual baseline for the migration. The production implementation must preserve the frozen identity decisions.

## Frozen decisions

- CORE symbol: D3-C / N0-R0
- ODDY logo: immutable; only the official asset may be used
- CORE Ink: `#152238`
- CORE Signal: `#0E8A82`
- Typography: IBM Plex
- CORE Orbit is a system graphic and must remain visually distinct from the D3-C symbol

## Corporate model

CHARLIE sits above CORE conceptually (vision, governance). CORE is the
vertex — the Business Operating System that orchestrates and executes.
ODDY, COMITA and FACILIA are peer entities directly under CORE. OnDemand
is **ODDY's subsidiary**, not CORE's peer — it is nested one level below
ODDY. **ODDY must never be rendered as CORE's parent**, but it *is* a
logistics operator itself (this is a deliberate correction from an
earlier draft of this document, which said the opposite).

```text
                         CHARLIE
                  VISION · GOVERNANCE
                           |
                         CORE
             BUSINESS OPERATING SYSTEM
          PLATFORM · INTELLIGENCE · ORCHESTRATION
              ______________|______________
             |              |              |
           ODDY           COMITA         FACILIA
      (logistics brain,   Goods only    Services only
       territory /         ("cuenta       (cleaning,
       last-mile,           y orden")     maintenance,
       taxed)                             continuity)
             |
         OnDemand
    (free-trade-zone +
     international,
     untaxed)
```

## Technology layers

- CORE Logistics = technology layer for OnDemand logistics operations
- CORE Market = technology layer for COMITA commerce
- CORE Rep, CORE Intelligence, CORE Finance = transversal capabilities, not tied to a single operator

## Terminology constraints

- `Charlie` is vision and governance — the top conceptual level. It is not a product, not an application, not an operating vertical.
- `CORE` is the Business Operating System: platform, intelligence, orchestration. It executes the vision Charlie defines. It is the vertex of the operational model, never a child of ODDY.
- `ODDY` (from "OnDemand Delivery") is the ecosystem's logistics brain **and** the operator within the domestic territory — last-mile and related operations, under standard taxation. It is the parent of OnDemand. It must never be rendered or described as CORE's parent.
- `OnDemand` is ODDY's subsidiary, responsible for logistics in free-trade-zone territory and international transport (untaxed). It is **not commerce**.
- `COMITA` imports and commercializes goods on behalf of clients ("cuenta y orden"). Goods only — **never services**.
- `FACILIA` delivers on-site client services (cleaning, maintenance, operational continuity). Services only — **never goods**. FACILIA already has its own brand identity; like ODDY, it is never redesigned.
- `COMITIA` is not a valid name and must never appear in the production portal.
