---
title: Wonky Sprout OS Theme Engine
layout: theme-layout
---

# Theme Engine Overview

This folder contains the new ground-up theme for Wonky Sprout OS, built for neurodivergent accessibility and anti-BS clarity.

## Structure
- `2025-11-11_M1_CONFIG_theme-base.scss`: Core dark mode styles, high-contrast, readable fonts.
- `2025-11-11_M1_CONFIG_theme-layout.html`: Canonical layout, header/nav/footer, max-width, anti-BS.
- `2025-11-11_M1_CONFIG_theme-card-include.html`: Card include for SOPs, checklists, and posts.
- `2025-11-11_M1_PAGE_theme-homepage-demo.md`: Demo homepage using new theme engine.

## Usage
- Set `layout: theme-layout` in page front matter.
- Use `{% include theme-card-include.html ... %}` for cards.
- SCSS: Compile `theme-base.scss` to CSS and link in layout.

## Next Steps
1. Compile SCSS to CSS (`theme-base.scss` → `assets/css/theme-base.css`).
2. Migrate SOP/checklist pages to new card format.
3. Update navigation and accessibility panel as needed.

---
Classicwilly protocol: 11/10 output, no fluff, production-ready.
