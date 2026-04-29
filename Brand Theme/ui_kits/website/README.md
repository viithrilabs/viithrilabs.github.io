# ViiThri Labs — Website UI Kit

## Overview

A high-fidelity recreation of the ViiThri Labs studio website (viithrilabs.in) using the **canonical design system** (indigo primary, dark background, Georgia + DM Sans) rather than the legacy navy/gold palette of the current live site.

**Note:** As of April 2026 the live site is a coming-soon page only. This UI kit recreates that page faithfully and extends it with additional components (nav, services, footer) that represent likely future surfaces.

## Files

| File | Description |
|------|-------------|
| `index.html` | Interactive prototype entry point |
| `Header.jsx` | Top navigation bar with logo + links |
| `Hero.jsx` | Split-panel coming-soon / hero section |
| `Services.jsx` | Services grid and product showcase |
| `Footer.jsx` | Footer with links and branding |

## Design decisions

- Uses canonical indigo `#6C63FF` primary (not live-site navy `#1A3A5C`)
- Georgia for display headings
- Dark theme by default (`#0C0C14` background)
- Components accept a `theme` prop (`"dark"` | `"light"`) for flexibility
- Icon system: inline SVG (no icon font dependency)

## Usage

Open `index.html` in a browser to see the interactive prototype. Components are exported to `window` and can be composed individually.
