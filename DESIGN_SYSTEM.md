# Sentinel App — Design System Rules

> Binding design/UX rules for this codebase. Read alongside `AGENTS.md` (framework
> conventions) and the SocGen `CLAUDE.md` (product/brand context). When writing or
> reviewing UI code, these rules override generic shadcn/Tailwind defaults.

## 0. Quick rules (check before writing UI code)

- Two font families only: **Montserrat** for headings, **Source Sans 3** for
  everything else. Never introduce a third family or inline `font-family`.
- Buttons are **always pill-shaped** (`rounded-full`). Never give a `Button`
  a square or soft-rounded corner override.
- Inputs, cards, and containers are **not** pill-shaped — they use the
  `--radius` scale (`rounded-lg` / `rounded-xl` / `rounded-3xl`). Only buttons
  and status/count badges go full-round.
- Never hardcode hex colors or raw Tailwind palette classes (`bg-red-100`,
  `text-gray-900`, `#E9041E`, etc.) in feature code. Use the CSS variables /
  Tailwind tokens in §2, or extend the token set first.
- New UI primitives go in `src/components/ui/` and follow the shadcn
  `cva`-variant pattern already used by `button.tsx` / `badge.tsx`. Don't
  create one-off styled `<button>`/`<span>` elements in view code.
- Page content lives inside the workspace shell (`WorkspaceShell` → sidebar +
  topbar); don't build new top-level page chrome.

## 1. Typography

Defined in `src/app/globals.css` (`@theme inline`) and loaded in
`src/app/layout.tsx`.

| Token | Value | Usage |
|---|---|---|
| `--font-heading` (`font-heading`) | `"Montserrat", ui-sans-serif, system-ui, ...` | All headings, card/dialog/sheet titles, section titles, button labels for emphasis-heavy CTAs |
| `--font-sans` (`font-sans`, body default) | `"Source Sans 3", ui-sans-serif, system-ui, ..., Arial, sans-serif` | Body copy, paragraphs, table/list content, form labels, nav items |

Rules:
- `h1`–`h6` get `font-heading` automatically via the base layer in
  `globals.css` — do **not** add `font-heading` manually to a heading tag.
- Only opt a `<div>`/`<span>` styled as a heading (e.g. `CardTitle`,
  `DialogTitle`) into `font-heading` explicitly, as the existing UI
  primitives already do.
- Everything else (buttons, inputs, body text) inherits `font-sans` — leave
  it inherited, don't set a font family per-component.
- `headingTracking: -0.02em` and `bodyLineHeight: 1.5` (see
  `src/constants/design-tokens.ts`) are the reference values if you need to
  hand-tune a heading or paragraph outside the base styles.

## 2. Color tokens

Never use raw hex or default Tailwind palette colors for brand/semantic
meaning. All tokens live in `src/app/globals.css` (`:root` / `.dark`) and are
exposed as Tailwind classes (`bg-primary`, `text-muted-foreground`, etc.) via
`@theme inline`.

| Tailwind class | CSS var | Value (light) | Use for |
|---|---|---|---|
| `bg-primary` / `text-primary` | `--primary` | `#E9041E` (SG brand red) | Primary actions, active/selected states, focus ring, brand accents |
| `bg-primary-foreground` | `--primary-foreground` | `#FFFFFF` | Text/icons on primary surfaces |
| `bg-secondary` | `--secondary` | `#F4F4F4` | Secondary buttons, subtle fills |
| `bg-muted` / `text-muted-foreground` | `--muted` / `--muted-foreground` | `#F4F4F4` / `#666666` | De-emphasized text, disabled-ish surfaces |
| `bg-destructive` / `text-destructive` | `--destructive` | red (oklch) | Errors, destructive actions |
| `bg-background` / `text-foreground` | `--background` / `--foreground` | `#FFFFFF` / `#333333` | Page/app background and default body text |
| `bg-surface-main` | `--surface-main` | `#F9F9F9` | Large content surfaces (e.g. hero panel) |
| `bg-surface-container` | `--surface-container` | `#FFFFFF` | Cards, sidebar, elevated panels |
| `bg-surface-low` | `--surface-low` | `#F3F3F4` | App chrome background (shell, topbar) |
| `border-border` / `border-input` | `--border` / `--input` | `#E0E0E0` | Default borders and input outlines |
| `ring-ring` / `--ring` | `--ring` | `#E9041E` | Focus rings |
| `bg-sidebar*` tokens | see `globals.css` | — | Sidebar-specific surfaces (dark-mode aware) |

Dark mode: every token has a `.dark` override in `globals.css`. Brand red
(`--primary`) stays `#E9041E` in both modes — never theme the brand color
itself.

**Known deviation to fix opportunistically:** `src/components/views/status-badge.tsx`
hardcodes `bg-red-100 text-red-800`, `bg-gray-100 text-gray-800`,
`bg-gray-900 text-white` instead of tokens. Don't copy this pattern for new
components — if you touch this file, migrate it to token-based colors
(`bg-destructive/10 text-destructive`, `bg-muted text-muted-foreground`,
etc.) or add dedicated semantic tokens if the palette doesn't cover it.

## 3. Radius scale

Base scale in `globals.css`, derived from `--radius: 0.5rem`:

| Class | Formula | ≈px | Typical use |
|---|---|---|---|
| `rounded-sm` | `radius * 0.6` | 4.8px | Small chips, inline controls |
| `rounded-md` | `radius * 0.8` | 6.4px | Compact controls (`xs`/`sm` button sizes pre-pill) |
| `rounded-lg` | `radius * 1.0` | 8px | Inputs, form controls, small popovers |
| `rounded-xl` | `radius * 1.4` | 11.2px | Cards (`Card` root, card image corners) |
| `rounded-2xl`–`rounded-4xl` | `radius * 1.8 / 2.2 / 2.6` | 14.4–20.8px | Large containers, pill-ish elements (`Badge` uses `rounded-4xl`) |
| `rounded-full` | — | pill/circle | **Buttons (all variants/sizes) and icon buttons** |

Rule of thumb: **interactive "action" elements (buttons) are pill-shaped;
containers (cards, panels, inputs, dialogs) use the radius scale, not full
rounding.** This mirrors the real SG site (see brand reference screenshot:
square/structured containers, fully pill CTAs).

## 4. Core components

### Button (`src/components/ui/button.tsx`)
- Single source of truth for every clickable action in the app — do not
  hand-roll a styled `<button>` in a view component.
- All variants (`default`, `outline`, `secondary`, `ghost`, `destructive`,
  `link`) and all sizes (`xs`, `sm`, `default`, `lg`, `icon*`) use
  `rounded-full`. If you add a new size/variant, keep it pill-shaped.
- `default` variant = brand-red pill (`bg-primary text-primary-foreground`)
  — this is the "Find out more" style CTA from the brand reference. Use it
  for the primary action in any given screen/section; use `outline`/
  `secondary`/`ghost` for secondary actions.
- Icon-only buttons (`size="icon"`, `icon-xs`, `icon-sm`, `icon-lg`) render
  as circles (square dimensions + `rounded-full`).

### Card (`src/components/ui/card.tsx`)
- `rounded-xl` container, `ring-1 ring-foreground/10`, spacing driven by the
  `--card-spacing` CSS var (`sm` size = tighter padding).
- `CardTitle` uses `font-heading`; `CardDescription`/`CardContent` inherit
  body font. Don't override the title's font family.

### Badge (`src/components/ui/badge.tsx`)
- Pill-shaped (`rounded-4xl`), small (`h-5`), used for compact status/count
  chips. Variants map to the same semantic tokens as buttons
  (`default`/`secondary`/`destructive`/`outline`/`ghost`/`link`).
- Prefer `Badge` over the ad hoc `StatusBadge` pattern in
  `src/components/views/status-badge.tsx` for new status chips; if
  `StatusBadge`'s specific variant set (`critical`/`neutral`/`dark`) is
  needed, port it to token colors rather than copying its hardcoded grays.

### Inputs / forms (`input.tsx`, `select.tsx`, `label.tsx`)
- `rounded-lg`, `border-input`, `focus-visible:ring-3 ring-ring/50`. Keep
  form controls on this radius — do not make inputs pill-shaped.

### Icons
- `lucide-react` only. Default size is `size-4` (buttons enforce this via
  `[&_svg:not([class*='size-'])]:size-4`); topbar/utility icons use
  `h-5 w-5`. Don't mix in another icon set.

## 5. Layout & composition

- App chrome: `WorkspaceShell` (`src/components/layout/workspace-shell.tsx`)
  = fixed-width `Sidebar` (`w-64`) + flex column of `Topbar` + page content,
  `h-screen overflow-hidden` at the root so only inner regions scroll.
- Every route under `src/app/(workspace)/` renders inside this shell via
  the route-group `layout.tsx` — new pages should not introduce their own
  page-level chrome (no custom top bars, no reimplemented nav).
- Sidebar background: `bg-surface-container`; shell/topbar background:
  `bg-surface-low` — this contrast is what visually separates chrome from
  content; don't flatten it by reusing the same token for both.
- Content surfaces inside a page (e.g. the Ask Sentinel hero panel) sit on
  `bg-surface-main` with generous radius (`rounded-3xl`) and padding
  (`p-12`), contained by `max-w-3xl` for centered reading-width content.
- Standard content padding for chrome regions: `px-8` (topbar), `px-4 py-4`
  (sidebar nav area). Match these instead of inventing new spacing values
  for chrome-adjacent elements.
- Breadcrumb-style page title in the topbar (`WORKSPACE_LABEL / pageTitle`)
  is derived from `getPageTitle()` — add new routes to the navigation
  controller/constants rather than hardcoding titles in page components.

## 6. Source of truth files

Treat these as the canonical, load-bearing files for any design-system
change — update them together, not just the visual output:

- `src/app/globals.css` — CSS variables, theme mapping, base layer rules.
- `src/app/layout.tsx` — font loading (`<link>` tags for Google Fonts).
- `src/constants/design-tokens.ts` — typed re-export of color/typography/
  radius tokens for use in TS/JS (not CSS).
- `src/components/ui/*` — shadcn-style primitives; this is the design
  system's component layer. Feature code should compose these, not
  reimplement their styling.
- `src/components/layout/*` — app shell/navigation chrome.

## 7. Brand reference

Brand red `#E9041E`, black, white — from the live Société Générale site
(Montserrat headings, Source Sans Pro–family body, fully pill-shaped red
CTAs with square/structured content containers around them). See the parent
`CLAUDE.md` (§7b, "Design system") for the wider SG brand/token context this
app's tokens are derived from.
