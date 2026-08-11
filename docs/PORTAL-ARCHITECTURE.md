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
ODDY, OnDemand and COMITA are peer entities under CORE. **ODDY must never
be rendered as CORE's parent.**

```text
                CHARLIE
           Vision · Governance
                   |
                  CORE
      Business Operating System
      Platform · Intelligence · Orchestration
        __________|__________
       |          |          |
     ODDY      OnDemand    COMITA
   Ecosystem   Logistics   Commerce
```

## Technology layers

- CORE Logistics = technology layer for OnDemand logistics operations
- CORE Market = technology layer for COMITA commerce
- CORE Rep, CORE Intelligence, CORE Finance = transversal capabilities, not tied to a single operator

## Terminology constraints

- `Charlie` is vision and governance — the top conceptual level. It is not a product, not an application, not an operating vertical.
- `CORE` is the Business Operating System: platform, intelligence, orchestration. It executes the vision Charlie defines. It is the vertex of the operational model, never a child of ODDY.
- `ODDY` is an ecosystem/brand entity that CORE connects, alongside OnDemand and COMITA. It must never be rendered or described as CORE's parent, and never as the logistics operator.
- `OnDemand` is logistics operations, including free-zone and regional operations. It is **not commerce**.
- `COMITA` is commerce.
- `COMITIA` is not a valid name and must never appear in the production portal.
