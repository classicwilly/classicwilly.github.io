<!-- filepath: c:\wonky_sprout_os\DEVELOPMENT.md -->
---
layout: default
title: Development - Build & Test
---

# Development quick-start

This file lists the exact, minimal commands to build SCSS, run the smoke-test, and perform a local accessibility check. Designed for Windows PowerShell (pwsh).

Prereqs (recommended)
- Node.js (LTS) installed
- Optionally: Ruby + Jekyll if you want to run the full Jekyll build locally

Local CSS build (no global tools required)

1. Install dev dependencies (one-time per checkout):

```pwsh
npm install
```

2. Compile SCSS to CSS:

```pwsh
npm run build:css
```

3. Run the smoke-test (it will attempt Jekyll build, then try local sass/npm build automatically):

```pwsh
pwsh .\scripts\test-scss.ps1
```

Local accessibility check (manual)

1. Build the site with Jekyll (if you have Ruby/Jekyll) or run a simple build step and serve `_site`:

If you have Jekyll:

```pwsh
# From repository root
bundle exec jekyll build
# Serve locally (optional)
bundle exec jekyll serve --watch
```

If you don't have Jekyll but have Node, build SCSS and serve the repo root (or `_site` if you built with Jekyll):

```pwsh
# Build CSS
npm run build:css
# Serve either the repo root or the generated _site directory
npx http-server _site -p 4000
```

2. Run pa11y against the served URL (requires pa11y installed or use npx):

```pwsh
# If site is served at http://localhost:4000
npx pa11y http://localhost:4000
```

Notes & best practices
- Use `pwsh .\scripts\test-scss.ps1` before pushing changes that touch styles.
- If CI fails on `ci/remove-compiled-maincss`, don't merge — fix the SCSS and re-run the smoke-test locally until green.
- When fixing accessibility issues found by pa11y, reference the SOP `2025-11-10_M4_SOP_accessibility-safety-protocol.md` and include `a11y:` in the commit message.

Contact
- If you need help interpreting CI logs or pa11y output, paste the relevant logs here and I will help triage.
