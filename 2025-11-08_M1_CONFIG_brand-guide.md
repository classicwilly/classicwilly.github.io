# The Wonky Sprout - Brand Guide v2.0
# The Wonky Sprout - Brand Guide v2.1

**Updated November 12, 2025 by William Johnson**

---

## Brand Name

**The Wonky Sprout**

---

## Core Identity

**The personal brand of William Johnson.** A system built to transform neurodivergent chaos into manageable, high-output structure.

This is not a corporate operation or a motivational brand. This is an **engineering solution** for neurodivergent life management.

---

## The Brand Slogan (The "Fix")

**"The Wonky Sprout: Structure Engineered for Chaos."**

Short, precise, and unapologetic — a promise of engineered outcomes, not platitudes.

---

## The "Why" (The Origin Story)

I was diagnosed with **Autism and ADHD at 40**. For my entire life, I've experienced the world through a lens of chaos—a brain I described as "a little man in my head bombarded with every possible thought."

During meditation, I had a profound experience where I watched my brain **file itself in real-time**, like a card catalog. This brand is the synthesis of that moment: **chaos organized into structure**.

As a **Navy Systems Diagnostician** for 15 years, my job was to find root causes, not patch holes. When I turned that diagnostic lens on my own life, the pattern became clear: **my brain is not broken—it's a high-performance engine that needs proper structure to absorb external chaos.**

---

## The Core Message (The "Wonky" Principle)

**"Structure and organization with a bit of chaos."**

This brand is the blend of two complementary forces:

- **The Sprout (Organic Chaos)**: Natural, non-linear, neurodivergent thinking.
- **The Mechanical (Structured Order)**: Systems, diagnostics, engineered solutions.

The fusion: chaos is the input; structure is the engineered output.

---

## The Vibe (How It Feels)

- **"Manly, still soft."** — Strong systems, gentle execution
- **"I fix stuff."** — Direct, action-oriented, no-BS engineering mindset
- **Authentic, direct, systems-first** — Not inspiration, not philosophy, solution

---

## Key Visuals

### The Emblem
A sprout growing from a base of circuit-hexagons: organic growth meeting engineered structure.

### The Logotype
"The Wonky Sprout" with the O's treated as mechanical/gear accents in display uses.

### The Palette (Primary hexes)
- Background (page): #0d1117
- Card / Surface: #161b22
- Text (primary): #c9d1d9
- Accent Teal: #1abc9c
- Accent Blue: #58a6ff
- Accent Green: #2ecc71
- Accent Orange: #ff8c42
- Accent Purple: #9b5de5
- Accent Yellow: #ffd166

Use the darker cards/background for default surfaces (dark-mode-first). Accent colors are for micro-interactions, alerts, and emphasis.

---

## The Engineering Metaphor (Core Framework)

| Element | Personal Brand | Engineering Parallel |
|---------|---------------:|---------------------:|
| Input | Life chaos (sensory, executive) | External load on system |
| Processor | ADHD/Autism brain (pattern recognition) | High-performance diagnostic engine |
| Output | SOPs, protocols, tools | Engineered solutions |
| Result | Functional life structure | System that absorbs chaos without failing |

---

## Voice & Tone (The "Anti-BS" Framework)

### What We DO
- Number steps and time/energy requirements
- Use direct language: "This fixes X"
- Acknowledge executive dysfunction and constraints
- Write for neurodivergent readers first

### What We DON'T
- Use corporate jargon or motivational fluff
- Hide complexity or promise unrealistic outcomes

---

## Card Component & Site UX Guidelines (NEW)

We standardize content into interactive, titled cards — consistent, low-friction, and accessible. This is the canonical UX pattern across the site.

Purpose: surface bite-sized chunks of information, reduce scatter, and provide a low-effort quick-view or modal for details.

Implementation contract (developer checklist):
- Use the include: `{% include card.html title="Title" content=section_X classes="about-card is-blue" %}` where `section_X` is captured via Liquid's `capture` tag.
- If `content` is provided, the include will render a hidden `.card-modal-content` which the frontend opens in an accessible modal.
- Card classes: `about-card`, `checklist-card`, `sop-card`, plus modifiers `is-blue`, `is-green`, `is-muted`.
- Links inside cards should remain semantic `<a>` tags; card click behavior should send keyboard Enter to the first in-card link (progressive enhancement). Disabled cards use `aria-disabled="true"`.

Examples (conceptual):

1) Capture + include pattern (Liquid):

```liquid
{% capture section_1 %}
Content here with lists and links.
{% endcapture %}

{% include card.html title="Section Title" content=section_1 classes="about-card" %}
```

2) Checklist card rules:
- Put a blank line before a task list so each checkbox starts on its own visual line. Prefer GitHub-flavored task lists (`- [ ] Task`) and avoid inline checkboxes in paragraphs.
- Use task text that describes a single actionable step and include time/energy estimates when relevant.

CSS note for content authors: the site sets checkboxes to start visually on their own lines within `.checklist-card` so lists render cleanly on desktop and mobile.

---

## Interaction Patterns & Accessibility

- Hover quick-view (pointer devices) shows `.card-preview` summary; on touch devices provide a visible quick-action button `.card-action` inside the card to open the modal.
- Modal behavior: focus moves into the modal, Escape closes, overlay click closes, and the first focusable element inside receives initial focus. A simple focus trap is maintained.
- Keyboard: Cards are keyboard-focusable. Enter/Space should activate the primary action (open modal or follow first link).
- ARIA: Use `role="button"` for clickable cards without native controls, `aria-expanded` when the modal is open, and `aria-disabled` for disabled cards.

Accessibility checklist for any new UX change:
- Contrast: Meet AA contrast for body text and buttons.
- Keyboard-only test: ensure all card actions reachable and operable.
- Screen reader: modal announces title and role (use `aria-labelledby` and `role="dialog"`).

---

## Content Rules for Checklists and SOPs

- Always provide a one-line summary at the top of an SOP card: what it fixes, time cost, and confidence level.
- Tasks should be atomized: one action per line.
- Prefer explicit failure modes and recovery steps (e.g., "If step 3 fails, do X").

---

## Non-Negotiables (Updated)

1. **Dark mode first** — prioritize low-gamut, low-glare surfaces.
2. **No fake motivation** — systems over pep talks.
3. **Exact instructions** — number steps and include times.
4. **Acknowledge dysfunction** — design for brains that need scaffolding.
5. **No 'Wonky AI' or AI-persona references** — remove any legacy or product names that suggest an autonomous AI persona; product is human-authored systems and tooling only.

---

## Quick Developer Notes

- Repo convention: new public pages follow `YYYY-MM-DD_M#_TYPE_description.md` (do not rename Jekyll core files).
- Use the `card.html` include — it is the single source of truth for card markup and ARIA wiring.
- When editing many pages, convert in batches and run `bundle exec jekyll build` between batches to catch Liquid/template issues early.

---

## Versioning

**Version:** 2.1  
**Updated:** November 12, 2025  
**Author:** William Johnson (classicwilly)  
**Status:** ✅ Production — includes card/UX guidelines and accessibility notes.

For the full visual token set and templates, see: `2025-11-09_M1_CONFIG_brand-guide-v2.md`
