# Final "Classicwilly" System Deployment

**Project Goal**: Enforce the Wonky Sprout File Naming SOP and prepare the local WONKY_SPROUT_OS for final, permanent synchronization with the classicwilly.github.io website.

## Current State (Chaos)

- The system contains files with inconsistent naming.
- The required Jekyll folders (_posts, _layouts) are unpopulated or missing necessary content.
- The core files (_config.yml, catalog.md) need final structural code.

## 1. Phase 1: Enforce Naming Structure (The Audit)

**Task**: Rename all existing files to conform to the DATE_MODULE_TYPE_DESCRIPTION.EXTENSION SOP.

- README.md ➡️ 2025-11-08_M4_CONFIG_readme-master-sop.md
- SPROUT_001.md ➡️ 2025-11-08_M1_POST_why-wonky-sprout.md
- SPROUT_002.md ➡️ 2025-11-08_M1_POST_bubble-shield-fix.md
- _config.yml ➡️ 2025-11-08_M1_CONFIG_website-settings.yml
- CLASSICWILLY_SOP.md ➡️ 2025-11-08_M4_SOP_classicwilly-protocol.md
- ABOUT_PAGE.md ➡️ 2025-11-08_M1_PAGE_about-homepage.md (This will become index.md after setup, but we rename it first).
- MANIFESTO.md ➡️ 2025-11-08_M1_PAGE_manifesto.md

## 2. Phase 2: Build the Website Structure (The Jekyll Fix)

**Task**: Create and populate the mandatory Jekyll folders and files.

- **Create Folders**: Ensure _posts and _layouts folders exist in the root directory.
- **Move Posts**: Move all files named *\*\_POST\_.md* into the _posts folder.
- **Create Mandatory Layout File**: Create the file _layouts/default.html and leave it blank. (This satisfies Jekyll's minimum requirement).

## 3. Phase 3: Final File Content (The Fix-It Code)

**Task**: Populate the core website files with the final, working code.

### 3.1 _config.yml (The Website Settings)

**Action**: Ensure the file 2025-11-08_M1_CONFIG_website-settings.yml is in the root directory and contains the correct code for the theme and navigation:

```yaml
# THE "WONKY SPROUT" CONFIGURATION

# -- Site Vibe --
title: The Wonky Sprout
description: A card catalog for a chaotic world. "I fix stuff."

# -- The "Structure" (Theme) --
theme: jekyll-theme-cayman

# -- The "Card Catalog" (Navigation) --
navigation:
  - title: Home
    url: /
  - title: The Card Catalog
    url: /catalog
  - title: The Fix-It Blueprint
    url: /fix
```

### 3.2 catalog.md (The Automated Card Catalog)

**Action**: Create the file catalog.md in the root directory and populate it with the automated Jekyll code:

```markdown
---
layout: default
title: The Card Catalog
---

# THE CARD CATALOG

This is the "card catalog" of my "fixes," thoughts, and systems. This list updates automatically.

---

{% for post in site.posts %}
## [{{ post.title }}]({{ post.url }})
* **Date:** {{ post.date | date: "%B %d, %Y" }}
{% endfor %}
```

## 4. Phase 4: Final Deployment Commands

**Task**: Execute the final commands in the VS Code Terminal to deploy the fixed system.

- **Stage All Changes**: `git add .`
- **Commit the Fix**: `git commit -m "Final Structural Fix: Renamed all files to SOP, populated Jekyll folders, and added automated catalog code."`
- **Final Push**: `git push origin main`

**Goal**: This sequence resolves all naming inconsistencies and structural errors, ensuring the next push deploys a stable, automated website.