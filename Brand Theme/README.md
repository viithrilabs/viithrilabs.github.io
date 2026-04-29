# ViiThri Labs — Design System

## Overview

**ViiThri Labs** is a games, apps, and digital products studio based in Chennai, India. The studio builds games, tools, mobile apps, client websites, and digital experiences. A secondary brand, **ViiThri's Oven**, is a home bakery under the same family umbrella.

**Contact:** support@viithrilabs.in  
**Location:** Chennai, India  
**Domain:** viithrilabs.in

---

## Sources

| Source | Location | Notes |
|--------|----------|-------|
| GitHub repo — ViiThri Labs | `viithrilabs/viithrilabs` (main) | Coming-soon website, single `index.html` |
| GitHub repo — ViiThri's Oven | `viithrilabs/viithrisoven` (main) | Coming-soon website, single `index.html` |
| Logo (icon) | `assets/viithrilabs-icon.svg` | Square icon mark |
| Logo (dark bg) | `assets/viithrilabs-logo-dark.svg` | Full wordmark for dark backgrounds |
| Logo (light bg) | `assets/viithrilabs-logo-light.svg` | Full wordmark for light backgrounds |
| Brand spec (user-provided) | This document | Canonical — indigo #6C63FF, dark #0C0C14, Georgia + DM Sans |

> ⚠️ **Color discrepancy:** The live site (`viithrilabs/viithrilabs`) currently uses navy `#1A3A5C` + gold `#C49A3C` with Playfair Display — apparently a legacy or interim design. The canonical spec provided by the user (indigo primary, dark background, Georgia display font) is treated as the design system's **source of truth**. Both are preserved in `colors_and_type.css`.

---

## Products

### 1. ViiThri Labs (viithrilabs.in)
The main studio website. Currently a "coming soon" page with an email waitlist. Services: Games, Mobile Apps, Web, VR/AR, Tools.

### 2. ViiThri's Oven (viithrisoven.in)
A separate consumer brand — a home bakery making custom cakes, cookies, and festive specials. Entirely separate visual identity (warm oranges, cream, Playfair Display italics). Email: orders@viithrisoven.in

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **Confident but warm.** Not corporate — human, craft-focused, studio energy.
- **"We" not "I."** First-person plural when speaking as the studio.
- **Direct and purposeful.** No filler. Headlines are declarative ("Building the digital future, one product at a time.").
- **Aspirational but grounded.** The copy doesn't over-promise; it implies quality through specificity.

### Casing & Punctuation
- **Headline case** for section headings and CTAs.
- **Sentence case** for body copy and descriptive labels.
- **ALL CAPS + wide tracking** reserved for status labels and eyebrow text only (e.g. "WEBSITE LAUNCHING SOON", "GAMES · MOBILE APPS · WEB").
- Em-dashes used for rhythm in headlines ("Building the digital future,\none product at a time.").
- Ellipses used sparingly for anticipation ("Something great is on its way.").

### Emoji Usage
- **ViiThri Labs:** No emoji in copy. Clean, professional.
- **ViiThri's Oven:** Emoji used decoratively as background texture (🍰🧁🍪🎂) at very low opacity — not in copy.

### Examples
- "A product and services studio crafting games, apps, tools, and digital experiences for the world."
- "We're putting the finishing touches on our digital home."
- "Something great is on its way."
- "Leave your email and we'll let you know the moment we go live."

---

## VISUAL FOUNDATIONS

### Color
- **Primary:** Indigo `#6C63FF` — electric, modern, tech-forward
- **Background dark:** `#0C0C14` — near-black with a deep indigo tint; feels like a studio at night
- **Background light:** `#FAFAFA` — clean off-white, not pure white
- **Legacy (live site):** Navy `#1A3A5C` + Gold `#C49A3C` — more traditional, professional feel
- **Accent subtle:** `rgba(108,99,255,0.12)` — used for hover states, tag backgrounds

### Typography
- **Display:** Georgia (system serif) — canonical. Playfair Display used on live site.
- **Body:** DM Sans — geometric sans, weights 300/400/500/600
- **Mono:** JetBrains Mono / Fira Code (code blocks, labels)
- Headlines are set tight (`line-height: 1.2`), body is relaxed (`1.75`)
- Uppercase tracking used only for labels/eyebrow text

### Backgrounds & Texture
- **Dark theme default.** Deep indigo-black base (`#0C0C14`).
- Subtle radial gradients used as atmospheric depth (not gradient backgrounds per se).
- No hero images or full-bleed photography on the studio site.
- ViiThri's Oven uses a warm cream `#FDF8F2` background with very subtle gradient glows.

### Spacing & Layout
- 8px base grid. Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px.
- Generous whitespace — layouts breathe.
- Two-column split layout is a signature pattern (left brand panel / right action panel).

### Corner Radii
- `sm: 6px` — inputs, small elements
- `md: 10px` — buttons, cards
- `lg: 16px` — panels, modals
- `pill: 9999px` — tags, status badges

### Shadows
- Dark theme: deep black shadows with glow accent (`0 0 24px rgba(108,99,255,0.25)`)
- Light theme: soft grey shadows
- Cards use `border + shadow-md` — no single heavy drop-shadows

### Borders
- `rgba(255,255,255,0.10)` — default dark theme border
- `rgba(108,99,255,0.35)` — accent border for focused/active states
- 1–1.5px stroke weight

### Hover & Press States
- **Hover:** lighter shade for dark theme, darker for light. Subtle `0.2s ease` transition.
- **Press/Active:** `transform: scale(0.97–0.98)` micro-shrink
- **Focus:** accent-colored border ring (indigo)

### Animation
- `0.2s ease` for color/opacity transitions
- `0.1s` for transform (press feedback)
- Pulse animation: `2s ease-in-out infinite` for status dots
- No complex spring animations on the current site — clean, minimal

### Imagery
- No stock photography currently in use
- ViiThri's Oven: warm, homemade, artisanal feel implied through copy and color
- Illustrations: none currently (placeholders appropriate for new surfaces)

### Cards
- Dark theme: `bg-dark-800` background, `1px solid rgba(255,255,255,0.10)` border, `shadow-md`
- Light theme: `#FFFFFF` background, subtle border, `shadow-sm`
- Radius: `--radius-lg` (16px)

---

## ICONOGRAPHY

### Current Icon Usage
- **Logo icon:** Custom geometric SVG (`assets/viithrilabs-icon.svg`) — appears to use a 3×3 grid motif with a circle, suggesting a "labs" / modular identity.
- **Full wordmarks:** `assets/viithrilabs-logo-dark.svg` (for dark backgrounds), `assets/viithrilabs-logo-light.svg` (for light backgrounds).
- **UI icons on live site:** Inline SVGs only — a simple 2×2 grid + circle path for the logo mark, a checkmark circle for success states.
- No icon font or sprite system is currently in use.

### Recommended Icon System
- **Lucide Icons** (CDN: `https://unpkg.com/lucide@latest/dist/umd/lucide.min.js`) — stroke-based, clean, 24px grid, matches DM Sans aesthetic well.
- Stroke weight: 1.5px
- Size: 16px, 20px, 24px

### Emoji
- Not used in ViiThri Labs brand
- Used decoratively (very low opacity, background texture) in ViiThri's Oven only

---

## File Index

```
README.md                    ← You are here
colors_and_type.css          ← Full CSS design token system
SKILL.md                     ← Agent skill manifest

assets/
  viithrilabs-icon.svg       ← Brand icon mark
  viithrilabs-logo-dark.svg  ← Full logo (dark bg)
  viithrilabs-logo-light.svg ← Full logo (light bg)

preview/
  colors-primary.html        ← Indigo + dark bg palette
  colors-neutral.html        ← Neutral greys
  colors-semantic.html       ← Status / semantic colors
  colors-legacy.html         ← Navy + gold (live site)
  type-display.html          ← Display typeface specimens
  type-body.html             ← Body + label type
  type-scale.html            ← Full type scale
  spacing.html               ← Spacing tokens
  radius-shadow.html         ← Border radius + shadow system
  buttons.html               ← Button variants
  inputs.html                ← Form inputs
  badges.html                ← Tags and badges
  cards.html                 ← Card components

ui_kits/
  website/
    README.md                ← Website UI kit notes
    index.html               ← Interactive website prototype
    Header.jsx               ← Nav header component
    Hero.jsx                 ← Hero section
    Services.jsx             ← Services/product grid
    Footer.jsx               ← Footer
```
