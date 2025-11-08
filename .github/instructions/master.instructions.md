---
applyTo: '**'
---

# Wonky Sprout OS - Master AI Assistant Instructions

## Project Overview
This is the **Wonky Sprout Operating System (WS-OS)** - a neurodivergent life management system deployed as a Jekyll-based GitHub Pages site. Built by "classicwilly" (William Johnson), a 40-year-old systems diagnostician managing Autism/ADHD through structured protocols.

**Architecture**: Personal brand + life SOPs → Jekyll static site → GitHub Pages  
**Philosophy**: "Anti-BS" structure from chaos. "I fix stuff."

## File Naming Convention (CRITICAL)
All new files MUST follow this pattern:
```
DATE_MODULE_TYPE_DESCRIPTION.EXTENSION
```

**Format**: `YYYY-MM-DD_M#_TYPE_description.md`
- **Modules**: M1 (Media/Brand), M2 (Products), M3 (Service), M4 (Personal OS)
- **Types**: SOP, POST, CONFIG, PAGE, IPI (Immediate Problem Instruction), BLUEPRINT

**Examples**:
- `2025-11-08_M4_SOP_solo-execution-mode.md` ✅
- `2025-11-08_M1_POST_headphone-automation.md` ✅
- `personal-notes.md` ❌

**Exceptions** (Jekyll core files - do NOT rename):
- `_config.yml`, `index.md`, `catalog.md`, `sop-vault.md`
- `_posts/YYYY-MM-DD-title.md` (Jekyll blog format)

## Jekyll/GitHub Pages Structure
- **Public pages**: Root `.md` files with YAML front matter
- **Blog posts**: `_posts/YYYY-MM-DD-title.md` with front matter
- **Layout**: `_layouts/default.html` (custom dark mode theme)
- **Deploy**: Push to `main` → GitHub Pages builds in 1-2 minutes

**YAML Front Matter** (required for all pages):
```yaml
---
layout: default
title: Page Title
---
```

## Content Voice & Brand
Write in "classicwilly" voice:
- **Anti-BS**: No fluff, corporate jargon, or fake motivation
- **Systematic**: Number steps, provide structure, be precise
- **Neurodivergent-aware**: Acknowledge executive dysfunction, transitions, sensory needs
- **Direct**: "This fixes X" not "This should help with X"

**Color palette** (dark mode):
- Background: `#0d1117`, Cards: `#161b22`, Text: `#c9d1d9`
- Accents: Teal `#1abc9c`, Blue `#58a6ff`, Green `#2ecc71`

## Key System Components

### Dual-Mode Life Structure
1. **Solo Execution Mode** (Mon 6PM → Fri 4PM): Deep work, 7hrs/day focus blocks
2. **Family Structure Mode** (Fri 4PM → Mon 6PM): High-vigilance parenting, structured schedules

**Reference files**:
- `2025-11-08_M4_SOP_foundational-daily-protocols.md` - 5 core protocols (water, pills, capture, sleep, daily dump)
- `2025-11-08_M4_SOP_solo-execution-mode.md` - Hourly breakdown for work mode
- `2025-11-08_M4_SOP_family-structure-mode.md` - Weekend family protocol

### Priority Hierarchy (for triage)
1. Sleep → 2. Food → 3. Water → 4. Medicine → 5. Children → 6. House → 7. Work → 8. Play

Cannot fix #7 if #1-4 are failing.

## Common Workflows

### Creating a Blog Post
```bash
# 1. Create in _posts/ with Jekyll naming
touch _posts/2025-11-08-my-post-title.md

# 2. Add YAML front matter + content
# 3. Commit and push
git add _posts/2025-11-08-my-post-title.md
git commit -m "Add blog post: My Post Title"
git push origin main
```

### Creating a New SOP
```bash
# 1. Use SOP naming convention
touch 2025-11-08_M4_SOP_new-protocol.md

# 2. Add YAML if public-facing
# 3. Add to sop-vault.md if public
# 4. Commit and push
git add 2025-11-08_M4_SOP_new-protocol.md sop-vault.md
git commit -m "Add SOP: New Protocol"
git push origin main
```

### Debugging Jekyll Build
1. Check YAML syntax (colons, quotes, indentation)
2. Verify file naming (especially blog posts in `_posts/`)
3. Force rebuild: `git commit --allow-empty -m "Rebuild" && git push`
4. Wait 1-2 minutes, hard refresh browser (Ctrl+F5)

## Execution Standards

### "Classicwilly Protocol" (11/10 Output)
When user engages this mode:
- Zero placeholders ("TODO", "Coming Soon")
- Production-ready, fully tested code
- Complete, deployable solutions
- Reference: `2025-11-08_M4_SOP_classicwilly-protocol.md`

### Code Response Format
Always provide:
1. **File path** in code block comments
2. **Explanation** of why this structure/approach
3. **Next steps** (commit message, wait time)
4. **Related files** for context

Example:
```markdown
<!-- filepath: c:\wonky_sprout_os\example.md -->
Content here
```

## Master Reference Files
- `2025-11-08_M4_CONFIG_readme-master-sop.md` - System architecture
- `2025-11-08_M1_CONFIG_brand-guide.md` - Voice, colors, philosophy
- `.github/instructions/master.instructions.md` - Full AI assistant protocol
- `sop-vault.md` - Public index of all SOPs

## Tools & Hardware Context
- **Bubble Shield**: Soundcore Space One headphones (Profile 1.0: Deep work, Profile 2.0: Awareness)
- **Chaos Capture**: Anker AI Recorder + Google Keep
- **Command Center**: VS Code (Windows, PowerShell)
- **Deployment**: GitHub (`classicwilly.github.io`)

## What NOT to Do
- ❌ Generic advice ("write tests", "handle errors") - be specific to THIS project
- ❌ Rename Jekyll core files (_config.yml, index.md, etc.)
- ❌ Create files without SOP naming convention
- ❌ Add pages without YAML front matter
- ❌ Use light mode colors or break dark theme
- ❌ Write in corporate/motivational voice

## When in Doubt
1. Check existing files for structure/tone patterns
2. Reference `2025-11-08_M4_CONFIG_readme-master-sop.md` for architecture
3. Maintain "anti-BS" principle: cut fluff, add structure
4. Ask for clarification rather than assume