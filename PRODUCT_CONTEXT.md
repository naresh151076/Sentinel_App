# Sentinel App — Product Context

> What this repo is, what we're building, and what's in scope right now.
> Read alongside `AGENTS.md` (framework conventions), `DESIGN_SYSTEM.md`
> (UI rules), and the parent `../CLAUDE.md` (full SocGen Sentinel engagement
> knowledge base — existing systems, stakeholders, drivers). This file is the
> bridge between that business context and this codebase.

## 0. What this repo actually is

This is a **prototype** — an "art of the possible" UX build for the Photon
proposal to Société Générale's CDO. It is **not** a production app, has
**no real backend**, and does **not** integrate with SGI, DataGO, or the
Data/Application Catalogs. All data is mocked in `controllers/*.ts` and
`models/*.ts`. The goal is to make Sentinel's target experience tangible
enough to demo and discuss with SG stakeholders.

**Current build scope is deliberately 4 pages, not the full nav:**

1. **Home** ("Ask Sentinel") — `/` — route group `(workspace)`, most built out.
2. **New Request** — `/requests/new` — in progress.
3. **My Requests** — `/requests` (list) + `/assessments` (detail/assessment
   view) — currently placeholders. See §4 note on why these are treated as
   one page conceptually.
4. **Monitoring** — `/monitoring` — currently a placeholder.

The sidebar (`src/constants/navigation.ts`) also scaffolds **Patterns
library**, **Policies & controls**, and **Reports** as nav items/routes —
these map to modules in the Expected Features list (see §5) but are **out
of scope for now**. Don't build these out unless explicitly asked; they
exist as placeholders so the nav matches the target IA, not as a to-do list.

## 1. The one-line pitch (why this app exists)

SG's CDO wants **Sentinel**: an AI governance intelligence layer that sits
**on top of** SGI (intake), DataGO (approval), and the Data/Application
Catalogs (metadata) — turning slow, manual, case-by-case data-usage
approvals into natural-language intake + metadata-driven, pattern-based,
mostly-automated decisions, with humans validating exceptions only.

Today's reality this app is designing an alternative to: SGI's ~186-question
form, 8–12 day typical approval cycle (up to ~4 months for complex cases),
repeated manual re-entry of data already sitting in the catalogs, and
DUA reviewers in DataGO reconstructing context from scratch every time.

**Governing UX principle, surfaced literally in the UI (banners, copy):**
**"AI recommends · rules evaluate · humans decide."** Every recommendation
in this app should read as traceable to data + rule + rationale, never as
an opaque automated decision.

Full detail on SGI/DataGO/Data Catalog/Application Catalog, stakeholders,
regulatory drivers, and SG's 4-layer Sentinel Framework lives in the parent
`../CLAUDE.md` — that's the source of truth for "why," this file is the
source of truth for "what we're building here."

## 2. The pilot scenario — use this as the running example

Chosen "art of the possible" scenario: **Data Usage Approval** — e.g. *FR
retail transaction data being reused for a loyalty/marketing model*. When
inventing mock data, copy, or example requests for any of the 4 pages,
default to variations on this scenario (or clearly-labeled siblings like
cloud migration, cross-border access, AI/model training) so the prototype
feels like one coherent product rather than four disconnected screens.

## 3. What each of the 4 pages is for

Feature detail below is reproduced/paraphrased from the estimates workbook
("Sentinel Feature list" + "Draft – Userflow", see parent `CLAUDE.md` §7)
via the `Existing Systems/07_Expected_Features.html` reference doc. Treat
these as the feature inventory to design against — not a rigid spec; use
judgement on layout/grouping like the existing Home page already does.

### 3.1 Home (`/`, "Ask Sentinel" in nav) — most built out already
Entry point. Purpose: let a user describe a governance request in plain
language and see, at a glance, what's happening across their requests.
- **NL input box + Go button** — starts the New Request flow.
- **Common pattern cards** — Data Usage, Cloud Migration, Share with Third
  Party, AI/Model Training, Cross-Border Access — quick-start entry points.
- **Dashboard at a glance** — My Recent Requests, My Pending Reviews,
  Active Approvals, Alerts — each with a count + "View all."
- **Compliance banner** — communicates that Sentinel continuously monitors
  approved usages for compliance (ties to Monitoring page).
- Existing components: `src/components/views/ask-sentinel/*`
  (`ask-sentinel-workspace.tsx`, `ask-sentinel-right-panel.tsx`,
  `pattern-grid.tsx`, `recent-requests.tsx`, `stat-card.tsx`,
  `attention-required.tsx`, `governance-glance.tsx`, etc.)
- Data: `src/controllers/conversation.controller.ts`,
  `src/controllers/governance.controller.ts`.

### 3.2 New Request (`/requests/new`) — in progress
Purpose: conversational intake. The user's request has already been
interpreted; this screen shows what Sentinel understood and lets the user
confirm or correct it before it becomes a tracked request.
- **Conversational intake** — shows the user's submitted request + Sentinel's
  response confirming key info was captured and matched to a pattern.
- **Intent and context** — intent, primary dataset, data owner, geography,
  data type, purpose.
- **Matched pattern** — e.g. "Data Usage – Marketing / Loyalty" + typical
  approval path.
- **Confidence indicator** — confidence in the pattern match, based on
  metadata + similar past requests.
- **Metadata sources** — Data Catalogue, Application Catalogue, DataGO, SGI
  Reference — where the evidence came from.
- **View full context** — drill into full supporting evidence.
- **Request actions** — Confirm / Adjust / Add more context.
- Existing components: `src/components/views/new-request/*`
  (`request-summary-card.tsx`, `readiness-card.tsx`, `found-items-card.tsx`,
  `confirmation-card.tsx`, `next-step-actions-banner.tsx`) plus shared
  pieces reused from `ask-sentinel/` (right panel, evidence row).
- Data: `src/controllers/new-request.controller.ts`,
  `src/models/new-request.ts`.

### 3.3 My Requests (`/requests` list + `/assessments` detail) — placeholder
Purpose: where a request lives after intake — its status, the decision
Sentinel is preparing or has made, and the evidence behind it. In the
target design (parent `CLAUDE.md` §6) this is **one conceptual screen**
("My Requests/Assessment") that lists requests and drills into a selected
request's assessment; this app currently scaffolds it as two routes/nav
items (`My requests` list + `Assessments` detail). Treat them as one
journey when designing: list → select → assessment detail with tabs.
- **Request header** — title, current status, Export Summary action.
- **Header tabs** — Assessment Summary · Required Approvals · Applicable
  Policies · Evidence · History & Changes.
- **Decision basis** — matched pattern, applicable rules, policy alignment,
  similar past approvals (+ view details).
- **Risk outcome** — risk level + confidence score (e.g. "Low Risk, 92%").
- **Recommendation** — e.g. "Approve with conditions" + rationale + link to
  conditions.
- **Key evidence** — dataset classification, geography check, security
  controls, policy mapping.
- **Estimated approval path** — e.g. Data Owner → Privacy Review → DUA
  Review.
- **Next step** — the concrete next action (e.g. "Submit for Approval").
- **Governance banner** — "AI recommends · rules evaluate · humans decide."
- Files today: `src/app/(workspace)/requests/page.tsx` and
  `src/app/(workspace)/assessments/page.tsx` both render
  `PlaceholderScreen`. No dedicated `views/` folder yet — follow the
  `ask-sentinel/` / `new-request/` pattern when building this out (see §5).

### 3.4 Monitoring (`/monitoring`) — placeholder
Purpose: the control tower. Once requests are approved, Sentinel is meant
to keep watching the underlying metadata (catalogs) for change and surface
what needs re-review — this is what makes approvals non-static.
- **Governance control tower** — central view: approvals, compliance
  status, governance health.
- **Filters** — narrow what the control tower shows.
- **Governance metrics** — governance health, active approvals, approvals
  at risk, metadata changes, overdue revalidations — each with "View
  details."
- **Alerts requiring attention** — e.g. "dataset classification changed,"
  "application moved region," "data owner changed" — with impact level,
  affected count, status (New / In Review).
- **Top domains** — distribution across e.g. Retail Banking, HR, Finance,
  IT & Operations.
- **Monitoring workflow** — Continuous Monitoring → Change Detected →
  Action Taken → Data Security & Privacy by Design.
- Files today: `src/app/(workspace)/monitoring/page.tsx` renders
  `PlaceholderScreen`. No dedicated `views/` folder yet.

## 4. Out of scope for now (don't build unless asked)

These exist as nav items / route stubs (all currently `PlaceholderScreen`)
because they're part of the target IA per the Expected Features doc, but
they are **not** part of the current 4-page prototype push:
- **Patterns library** (`/patterns`) — browse/compare/recommend governance
  patterns (AI training, cross-border, cloud migration, etc.).
- **Policies & controls** (`/policies`) — policy catalogue, applicability
  mapping, control recommendations, conflict/gap detection.
- **Reports** (`/reports`) — intelligence reports, pattern/policy/risk
  analytics, exportable intelligence packs.

If asked to work on these later, the same feature detail lives in
`Existing Systems/07_Expected_Features.html` (modules: Patterns Library,
Policies & Controls, Reports).

## 5. Code conventions already established (follow these)

The app uses a lightweight **Model → Controller → View** split. When
building out My Requests or Monitoring, mirror this rather than inventing
a new pattern:
- **`src/models/*.ts`** — plain TypeScript `interface`/`type` definitions
  for the data a screen needs (e.g. `NewRequestDraft`, `FoundItem` in
  `models/new-request.ts`). No logic.
- **`src/controllers/*.ts`** — functions (e.g. `getNewRequestDraft()`) that
  return mock data shaped to the models. This is the seam where real API
  calls would eventually plug in — keep page components ignorant of
  where the data comes from.
- **`src/components/views/<feature>/*.tsx`** — presentational components
  for one feature area, named by role (`*-card.tsx`, `*-row.tsx`,
  `*-banner.tsx`), composed from `src/components/ui/*` primitives.
- **`src/app/(workspace)/<route>/page.tsx`** — thin: calls the controller,
  passes data into view components, lays them out. No business logic, no
  page-level chrome (chrome is `WorkspaceShell`, per `DESIGN_SYSTEM.md`).
- Barrel files (`models/index.ts`, `controllers/index.ts`) re-export
  everything — add new model/controller files there too.

## 6. Source material map

- `../CLAUDE.md` — full engagement knowledge base (existing systems in
  depth, SG's 4-layer Sentinel Framework, stakeholders, positioning).
- `../Existing Systems/*.html` — the detailed reference pack this file
  summarizes from: `01_SGI.html`, `02_DataGO.html`, `03_Data_Catalog.html`,
  `04_Application_Catalog.html` (current state), `05_Existing_Features.html`
  (99 as-is features), `06_Future_State.html` (to-be ecosystem + agent
  pipeline), `07_Expected_Features.html` (95 target Sentinel features +
  draft MVP user-flow — the primary source for §3 above).
- `AGENTS.md` — this-is-not-the-Next.js-you-know framework note; read
  `node_modules/next/dist/docs/` before writing Next.js code.
- `DESIGN_SYSTEM.md` — binding typography/color/radius/component rules.
