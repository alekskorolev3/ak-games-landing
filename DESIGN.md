---
name: AK Games Landing
description: Investor landing page for a small casino-slot studio
colors:
  navy: "#0f1b2d"
  ground: "#000000"
  surface: "#111111"
  surface-raised: "#1c1c1c"
  ink: "#faf8f5"
  ink-soft: "#b9c2cf"
  line: "#222222"
  gold: "#c9a02e"
  gold-bright: "#e3b94f"
  gold-soft: "#8a7030"
  green: "#2a8249"
  green-dark: "#247040"
  danger: "#d4553f"
  focus: "#4a9fd4"
  focus-glow: "rgba(74, 159, 212, 0.18)"
  navy-scrim: "rgba(0, 0, 0, 0.85)"
typography:
  display:
    fontFamily: "Sora, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Sora, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Sora, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.92rem"
    fontWeight: 600
  offer:
    fontFamily: "Sora, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.15rem, 2.4vw, 1.5rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  meta:
    fontFamily: "Sora, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 600
    letterSpacing: "0.1em"
  lead:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 400
  brand:
    fontFamily: "Sora, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 700
  note:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
  caption:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 400
  chip:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 700
    letterSpacing: "0.08em"
  mono:
    fontFamily: "Sora, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.4rem"
    fontWeight: 800
  stamp:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    letterSpacing: "0.08em"
rounded:
  sm: "6px"
  md: "12px"
  lg: "20px"
  pill: "999px"
  focus: "2px"
spacing:
  "1": "0.5rem"
  "2": "1rem"
  "3": "1.5rem"
  "4": "2rem"
  "5": "3rem"
  "6": "5rem"
  "7": "8rem"
components:
  btn-primary:
    backgroundColor: "{colors.green}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1.6rem"
  btn-primary-hover:
    backgroundColor: "{colors.green-dark}"
  btn-ghost:
    backgroundColor: transparent
    textColor: "{colors.navy}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1.6rem"
  btn-ghost-hover:
    backgroundColor: "{colors.navy}"
    textColor: "#ffffff"
  input:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: "0.8rem 1rem"
  nav:
    height: "4.25rem"
  game-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.3}"
---

# Design System: AK Games Landing

## Overview

**Creative North Star: "The Investor's Ledger"**

AK Games' landing page is a ledger: orderly, transparent, and built for trust. Every element earns its place by answering exactly one question — does this help an investor or partner decide to engage? The palette of warm off-white ground and deep navy ink creates a calm, authoritative reading experience. Green is saved for the single primary action; gold is reserved for moments of premium emphasis, always on navy. The page is flat by default, with no ornament, no gradients, no hero image, and no metrics. Spacing is generous, giving each section room to breathe, and the type pairing of Sora (display) and Manrope (body) strikes a balance between confident headlines and readable body text.

This is the category standard, played straight: a professional, credible, premium investor landing page that refuses both the casino-cliché trap (neon, gold motifs, playing-card imagery) and the startup-hype trap (hero metrics, big numbers, buzzwords). The craft bar is top iGaming studio level.

### Key Characteristics:
- Two-ground system: warm off-white (`#faf8f5`) body, deep navy (`#0f1b2d`) footer
- Flat by default; no box-shadows except the 3px focus ring
- Green as the single accent for primary action only
- Gold used exclusively on navy backgrounds (contrast-driven)
- No ornament, no gradients, no hero image, no metrics
- Generous section spacing (`5rem` block padding)
- Scoped synthetic placeholders are clearly marked and visually distinct

## Colors

A restrained palette of 12 colors built on two grounds, one ink, one accent green, one premium gold, and structural neutrals. Every color has a clear job; no color is decorative.

### Primary
- **Deep Navy** (`#0f1b2d`): The authoritative ground. Used for the footer, game-card cover backgrounds, brand mark, ghost button hover state, and link text. Evokes stability and depth.
- **Signal Green** (`#2d8a4e`): The single primary action. Used for the "Get in touch" and "Send message" buttons. Hover deepens to dark green (`#23703f`). Never used for decorative or secondary purposes.
- **Premium Gold** (`#c9a02e`): The reserved accent. Used only on navy backgrounds: game-card cover monograms, the footer brand mark, and `::selection` background. Gold-soft (`#e9d8a6`) is the selection background variant.

### Neutral
- **Warm Off-White** (`#faf8f5`): The body ground. Sets the tone for the entire page — warm, inviting, professional. Also used as the nav background (at 92% opacity with blur).
- **White** (`#ffffff`): Surface for cards, inputs, the studio section, and the success message box.
- **Ink** (`#1a1a1a`): Primary text color, near-black with a slight warmth.
- **Ink Soft** (`#4a4a46`): Secondary text for leads, descriptions, notes, and metadata.
- **Line** (`#e4ded6`): Borders between sections, cards, and table rows. A warm, muted line that respects the off-white ground.
- **Focus Blue** (`#1e5f8a`): The 3px focus ring on `:focus-visible` elements. A medium, slightly muted blue.
- **Danger Red** (`#b3422f`): Form validation error text and error borders.

### Named Rules
**The Precious Accent Rule.** Green is used for the primary action only. Gold is used only on navy backgrounds. Neither color appears on white or off-white surfaces. Their rarity is the point.

**The Two-Ground Rule.** The page has exactly two grounds: warm off-white for the body content area and deep navy for the footer. The nav is the body ground at 92% opacity. No third ground is introduced.

## Typography

**Display Font:** Sora (with `ui-sans-serif, system-ui, sans-serif` fallback)
**Body Font:** Manrope (with `ui-sans-serif, system-ui, sans-serif` fallback)

**Character:** Sora brings a geometric, confident presence to headlines — it has stature without being heavy. Manrope is a warm, readable sans-serif for body text that works quietly alongside Sora's display weight. The pairing is professional and approachable, not stark or cold.

### Hierarchy
- **Display** (700, `clamp(2.5rem, 6vw, 4rem)`, 1.12, `-0.03em`): The site name "AK Games" in the hero viewport. Title-weight lettering with tight tracking.
- **Headline** (600, `clamp(1.75rem, 4vw, 2.5rem)`, 1.12, `-0.02em`): Section headings (Games, Studio, Get in touch). Less dramatic than Display but still commanding.
- **Title** (600, `1.25rem`, 1.12, `-0.02em`): Game card titles, success message heading, sub-headings within sections.
- **Offer** (600, `clamp(1.15rem, 2.4vw, 1.5rem)`, 1.12, `-0.01em`, Sora): The one-line value proposition beneath the hero. Display-family, smaller than a headline, larger than body.
- **Body** (400, `1rem`, 1.6): All paragraph text, buttons, inputs, and navigation links. Max line length 68ch.
- **Label** (600, `0.92rem`, Manrope): Form field labels.
- **Meta** (600, `0.78rem`, Sora, `0.1em` uppercase): Game category tags (e.g., "5-reel · 20 lines"). Small, uppercase, display-family for scannability.

### Named Rules
**The Two-Family Rule.** Sora is reserved for display roles: headings, the hero offer, the brand, game tags, and studio fact labels. Manrope is used for everything else: body text, buttons, inputs, nav links. No mixing outside these roles.

## Layout

A single-column, centered layout with a fixed-width container.

**Container:** `min(1100px, 100% - 2rem)` — centered with `margin-inline: auto`.

**Section rhythm:** Every section has `5rem` block padding (`.section` class). The hero section uses `8rem` top padding and `5rem` bottom. Sections are separated by a 1px `--line` border-top.

**Page flow:** Sticky nav → Hero → Games portfolio (3-column grid) → Studio/Track record (2-column grid) → Contact (2-column grid) → Footer.

**Grid behavior:**
- Game grid: 3 columns at >900px, 2 columns at 560–900px, 1 column at <560px.
- Studio and Contact grids: 2 columns at >760px, 1 column below.
- Nav: links hidden at <640px, CTA shrinks.

**Spacing rhythm:** A 7-step scale from `0.5rem` to `8rem`, anchored at `1rem` (space-2), `1.5rem` (space-3), `2rem` (space-4), `3rem` (space-5), `5rem` (space-6), `8rem` (space-7). Headings have `1rem` bottom margin. Paragraphs have `1.5rem` bottom margin. Form fields are spaced at `1.5rem` gap.

## Elevation & Depth

The system is flat by default. Depth is conveyed through tonal layering (two grounds, one surface) and borders, not through shadows.

**No box-shadows** are used anywhere in the system except the 3px focus ring on inputs and `:focus-visible` elements.

**Depth model:**
- `--ground` (off-white) is the base layer.
- `--surface` (white) sits on top of ground for cards, the studio section, inputs, and the success message.
- `--navy` (deep navy) is the footer ground — a deliberate tonal shift, not a shadow-based elevation.
- The nav sits above content via `position: sticky` with a `backdrop-filter: blur(10px)` and a `1px` bottom border.

### Named Rules
**The Flat-By-Default Rule.** No surface casts a shadow. Containers are distinguished by borders (`1px solid var(--line)`) or by switching ground (off-white to white, or white to navy). The only exception is the 3px focus ring on `:focus-visible` and focused inputs.

## Shapes

A gentle, consistent corner language with three radius steps, used functionally.

- **Radius Small** (`6px`): Buttons, inputs, brand marks, the footer brand mark. The default corner for interactive elements.
- **Radius Medium** (`12px`): Game cards, the success message container. Used for larger containers that need a softer edge.
- **Radius Large** (`20px`): Defined in the scale but not yet used in the interface.

**Borders:** Every container distinction uses a `1px solid var(--line)` border. No border-radius is applied to section dividers, which use a full-width horizontal rule pattern (border-top on the section element).

**Focus ring:** A `3px solid var(--focus)` outline with `3px` offset, rendered as `border-radius: 2px` on the page's `:focus-visible` rule. Inputs receive a `3px` soft navy box-shadow instead of the outline on focus.

## Components

### Buttons
- **Shape:** Gently rounded corners (6px radius). No shadow. Font-weight 600, 1rem, Manrope.
- **Primary:** Solid green background (`#2d8a4e`), white text, padding 0.85rem 1.6rem. On hover, background deepens to `#23703f`. On active, pressed down 1px (`translateY(1px)`). Transition: 0.18s background, 0.12s transform.
- **Ghost:** Transparent background, navy text, 1px navy border. On hover, fills navy and text inverts to white. Same padding and radius as primary.
- **States:** All buttons have `cursor: pointer` and inherit the page's `:focus-visible` outline behavior.

### Cards
- **Corner Style:** Medium rounded corners (12px radius).
- **Background:** White surface (`#ffffff`).
- **Border:** 1px solid `var(--line)`.
- **Shadow Strategy:** None. Cards are flat.
- **Internal Padding:** 1.5rem (`var(--space-3)`).
- **Cover:** A 180px navy (`#0f1b2d`) area at the top of each card, with a gold (`#c9a02e`) monogram of the game's initials in Sora 800 weight, 2.4rem.

### Inputs / Fields
- **Style:** White background, 1px solid `var(--line)` border, 6px radius. Padding 0.8rem 1rem. Manrope 1rem. Full width.
- **Focus:** Navy border replaces line, plus a 3px soft navy box-shadow (`0 0 0 3px rgba(15, 27, 45, 0.12)`). The browser's default `outline` is removed.
- **Error:** Border shifts to `var(--danger)` red. Error message text appears below in 0.85rem red.
- **Disabled:** Not styled in the current system (not used).
- **Labels:** Block display, 0.92rem, weight 600, 0.5rem bottom margin.

### Navigation
- **Style:** Fixed sticky at top of viewport. Background: black at 92% opacity with `backdrop-filter: blur(10px)`. Bottom border: 1px solid `var(--line)`. Height: 4.25rem.
- **Brand:** The white logo mark on a raised-surface tile with 6px radius, plus "AK Games" in Sora 700, 1.05rem, ink.
- **Links:** Three text links (Games, Studio, Contact) in Manrope 600, 0.95rem, ink. Hover turns gold-bright.
- **CTA:** A compact green primary button (padding 0.55rem 1.2rem, 0.92rem) in the nav.
- **Mobile (<640px):** Text links are hidden. The CTA shrinks to 0.5rem 1rem padding, 0.85rem font.

### Game Card (signature component)
- **Layout:** Cards ride a left-aligned scroll-snap carousel (340px cards, newest first) with ghost prev/next arrows — compact vertical cards with a square top-anchored art crop (1/1, title lives in the body) on top and body below; cards stretch to equal height, Play links pinned to the bottom edge. Native swipe on touch, no autoplay, arrows disable at the ends.
- **Cover:** Real game art (`/games/lizard-kings-gold.png`), `object-fit: cover`, raised-surface ground.
- **Body:** Surface background, 1.5rem padding, 1px line border, 12px radius. Game title (h3), category tag (Sora 600, 0.78rem, uppercase, 0.1em spacing, ink-soft), descriptive note (0.95rem, ink-soft), and a gold "Play on Stake →" link.
- **Live chip:** A green status pill (999px radius, uppercase white text) marks the game as live on Stake. Unreleased titles use the same pill in gold with navy text ("Coming soon") — green never marks anything but live.

## Do's and Don'ts

### Do:
- **Do** use green only for the primary action button, the Live chip, and the form success state.
- **Do** use gold for links, the hero offer line, confirmed facts, and on dark surfaces.
- **Do** keep the body ground black (`#000000`) and the surface `#111111` with a raised `#1c1c1c` step.
- **Do** use Sora for display roles (headings, offer, brand, tags, labels) and Manrope for everything else.
- **Do** use the 7-step spacing scale (`0.5rem` through `8rem`) for all gaps, padding, and margins.
- **Do** use 6px radius for interactive elements (buttons, inputs) and 12px radius for containers (cards, success box).
- **Do** use the 3px focus ring (`#4a9fd4` with 3px offset) for all interactive elements.
- **Do** keep the page flat — no box-shadows, no gradients as decoration.

### Don't:
- **Don't** use green or gold on light surfaces — there are no light surfaces in this theme.
- **Don't** introduce further background elevations beyond the two documented surfaces.
- **Don't** use Sora for body text, buttons, or form labels.
- **Don't** use kickers, eyebrows, or decorative labels above headings.
- **Don't** add metrics, hero images, or big numbers to the hero viewport.
- **Don't** use casino-cliché motifs (neon, playing cards, dice, chips) or startup-hype patterns (hero stats, testimonials, carousels).
- **Don't** use the Live chip's pill shape (999px radius) as a general system pattern — it is a status badge, not a design token.