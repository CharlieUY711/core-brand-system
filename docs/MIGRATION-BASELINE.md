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
- FACILIA official logo as immutable external asset (has its own pre-existing identity, same as ODDY)
- 21 Brand Guidelines sections
- corrected corporate terminology
- COMITA spelling in all visible and internal references

## Canonical terminology

Corporate model: Charlie (vision/governance) sits above CORE conceptually.
CORE is the vertex — the Business Operating System that orchestrates and
executes. ODDY, COMITA and FACILIA are peer entities directly under CORE.
OnDemand is **ODDY's subsidiary** (nested under ODDY, not a direct peer
under CORE). ODDY is never CORE's parent — but it is a real logistics
operator, not just a brand/ecosystem label.

| Entity | Responsibility |
|---|---|
| Charlie | Vision · governance — top conceptual level, not a product or vertical |
| CORE | Business Operating System — platform, intelligence, orchestration |
| ODDY | Logistics brain + territory/last-mile operator (taxed). Parent of OnDemand — never a parent of CORE |
| OnDemand | ODDY's subsidiary — free-trade-zone + international logistics (untaxed). Not commerce |
| COMITA | Commerce — goods only ("cuenta y orden"). Never services |
| FACILIA | Facility services — cleaning, maintenance, operational continuity. Never goods |
| CORE Logistics | Technology layer for OnDemand |
| CORE Market | Technology layer for COMITA |
| CORE Rep, CORE Intelligence, CORE Finance | Transversal capabilities, not tied to a single operator |

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
- No claim that COMITA provides services or that FACILIA transacts goods.
- No representation of ODDY as CORE's parent (ODDY → CORE as a parent/child relationship). ODDY *is* correctly described as a logistics operator and as OnDemand's parent — that is not a violation of this criterion, which is specifically about ODDY vs. CORE.
- No modification of the ODDY or FACILIA logos.
- No modification of D3-C.
- No hardcoded deployment hostname in application logic.
- Existing Brand Guidelines remain navigable.
- Portal navigation and internal Brand Guidelines anchors coexist without collision.
