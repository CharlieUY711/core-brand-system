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

```text
ODDY
Corporate Ecosystem
        |
       CORE
Technology Platform / System
     /          \
OnDemand      COMITA
Logistics     Commerce
```

## Technology layers

- CORE Logistics = technology layer for OnDemand logistics operations
- CORE Market = technology layer for COMITA commerce

## Terminology constraints

- `OnDemand` is logistics operations, including free-zone and regional operations. It is **not commerce**.
- `COMITA` is commerce.
- `CORE` is the technology platform/system.
- `ODDY` is the corporate ecosystem.
- `COMITIA` is not a valid name and must never appear in the production portal.
