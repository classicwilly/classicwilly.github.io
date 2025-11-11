---
layout: default
title: Accessibility & Safety Protocol
---

# 2025-11-10 — M4_SOP_accessibility-safety-protocol

Purpose
- Ensure the Wonky Sprout OS site is safe, stable, and usable for late-diagnosed and neurodivergent users.
- Provide a minimal, actionable checklist and developer workflow to prevent regressions that harm accessibility.

Why this matters
- Many people were mis-labeled as "lazy" when their brains needed different supports. The site must not add friction.

Quick rules (enforced before merge)
1. CI must pass: build + SCSS smoke-test (selectors present) + pa11y accessibility checks.
2. No visual regressions: run the local smoke-test (pwsh .\scripts\test-scss.ps1) and confirm PASS.
3. Respect prefers-reduced-motion and ensure visible focus states for keyboard users.

Local developer checklist
- Run the smoke-test which will build CSS locally if needed:

```pwsh
pwsh .\scripts\test-scss.ps1
```

- If you want manual control:

```pwsh
npm install
npm run build:css
```

Accessibility expectations
- All interactive elements must have a focus-visible style (we use a teal 3px outline).
- Animations and transitions must respect the user's reduced-motion preference.
- Add aria-label/role attributes for landmark navigation when appropriate.

Pa11y and CI
- The repository includes `.github/workflows/a11y.yml` which runs pa11y on the built site.
- Fixes flagged by pa11y should be small, incremental, and prioritized by severity.

Emergency rollback plan
- If a merged change causes a regresssion, revert the PR and open a hotfix branch. The CI smoke-test is intended to catch regressions before merge.

Notes for maintainers
- Keep this SOP short and focused. If a new accessibility failure type appears regularly, extend this document with a concrete fix recipe.

Commit message guidance
- Prefix accessibility-related commits with `a11y:` and include the pa11y error IDs if applicable.

Related files
- `scripts/test-scss.ps1` — smoke-test that supports local npm-based compilation.
- `_sass/_components.scss` — contains reduced-motion and focus-visible rules.
- `.github/workflows/a11y.yml` — automated pa11y checks.

Next steps
- Wait for CI validation on the `ci/remove-compiled-maincss` branch before permanently removing the compiled fallback.
