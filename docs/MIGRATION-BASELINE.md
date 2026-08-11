# CORE Brand & System — Migration Baseline v1.0

## Purpose

This document freezes the migration contract from the approved Claude artifact into the production repository.

## Source artifact

The approved visual/conceptual reference is the CORE Brand & System artifact currently maintained in Claude.

The artifact must be treated as a reference, not as the long-term production architecture.

## Migration rule

Reproduce the approved experience first. Refactor second. Redesign never, unless a new explicit design decision is approved.

## Preserve exactly

- D3-C / N0-R0 symbol geometry
- CORE Ink `#152238`
- CORE Signal `#0E8A82`
- IBM Plex typography system
- CORE Orbit as a distinct system graphic
- ODDY official logo as immutable external asset
- 21 Brand Guidelines sections
- corrected corporate terminology
- COMITA spelling in all visible and internal references

## Canonical terminology

| Entity | Responsibility |
|---|---|
| ODDY | Corporate ecosystem |
| CORE | Technology platform / system |
| OnDemand | Logistics operations, free-zone and regional |
| COMITA | Commerce |
| CORE Logistics | Technology layer for OnDemand |
| CORE Market | Technology layer for COMITA |

## First production milestone

The first implementation milestone is a functional portal shell containing:

1. Home
2. Brand overview
3. Existing Brand Guidelines content
4. System overview
5. Corporate Architecture overview
6. Resources overview
7. Route structure matching `docs/PORTAL-ARCHITECTURE.md`

Incomplete modules must remain explicit placeholders. Do not invent product capabilities.

## Acceptance criteria

- No `COMITIA` occurrence.
- No claim that OnDemand is commerce.
- No claim that ODDY is the logistics operator.
- No modification of the ODDY logo.
- No modification of D3-C.
- No hardcoded deployment hostname in application logic.
- Existing Brand Guidelines remain navigable.
- Portal navigation and internal Brand Guidelines anchors coexist without collision.
