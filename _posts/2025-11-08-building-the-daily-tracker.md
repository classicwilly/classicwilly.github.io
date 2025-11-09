---
layout: default
title: "Building the Daily Tracker: How I Made Habit Tracking Actually Work for ADHD"
date: 2025-11-08
---

# Building the Daily Tracker: How I Made Habit Tracking Actually Work for ADHD

**The problem:** Every habit tracker I tried assumed I had working executive function.

**The reality:** Autism + ADHD means I forget to open apps, lose paper planners, and abandon systems within 3 days.

**The solution:** Build tracking directly into my homepage. No separate app. No login. No excuses.

---

## Why Existing Trackers Fail (For Me)

I've tried:
- **Notion:** Too many clicks. Template fatigue. Database anxiety.
- **Habitica:** Gamification = dopamine spike → crash → guilt spiral.
- **Bullet journal:** Lost the notebook. Twice.
- **Phone apps:** Out of sight = out of existence. Never opened them.

**Core issue:** Every system required *remembering to use the system*. That's the exact skill I don't have.

---

## The Design Constraint

**Rule:** Tracking must happen where I already am.

I'm in VS Code 7+ hours per day building Wonky Sprout OS. My homepage (`index.md`) loads in my browser constantly for testing. 

**Insight:** Put the tracker *on the homepage*. If I see it, I'll use it. If I have to go find it, I won't.

---

## Technical Decisions (And Why)

### Decision 1: localStorage, Not a Database

**Why not build a proper backend?**
- Setting up a database = 2-3 hours of work
- Authentication = security headaches
- Server costs = $5-20/month
- Deployment complexity = more failure points

**Why localStorage works:**
- Browser-native API (zero dependencies)
- Data persists automatically
- No server = nothing to break
- Free forever
- Works offline

**Tradeoff:** Data lives in browser only. If I clear cache, I lose history. But I'm not clearing cache, and I can export JSON if paranoid.

---

### Decision 2: Forms That Save Themselves

**The ADHD-aware interaction model:**

1. User types in field
2. Field auto-saves after 500ms pause (debounced)
3. No "Submit" button required
4. Page refresh = data still there

**Code snippet (simplified):**
```javascript
function autosaveField(fieldId, value) {
    const today = new Date().toISOString().split('T')[0];
    const storageKey = `daily_tracker_${today}`;
    let data = JSON.parse(localStorage.getItem(storageKey) || '{}');
    data[fieldId] = value;
    localStorage.setItem(storageKey, JSON.stringify(data));
}
```

**Why this works:** No executive function required to "remember to save." Typing = saving. Done.

---

### Decision 3: Streak Calculation That Doesn't Punish

Most trackers: Miss 1 day = streak resets to zero = motivation destroyed.

**My approach:** 
- Calculate streak by checking consecutive dates
- Yesterday's entry exists → streak continues
- Skip a day → streak resets, but history remains visible
- Focus on *progress*, not *perfection*

**Philosophy:** The system should support recovery, not induce shame spirals.

---

## What I Track (And Why)

### 5 Foundational Protocols (0-10 ratings):

1. **Hydration** - Brain fog correlates directly with water intake
2. **Medication** - Miss ADHD meds = entire day collapses
3. **Chaos Capture** - Did I write down the brain noise or let it spiral?
4. **Sleep Hygiene** - Bedtime routine = next-day quality predictor
5. **Daily Dump** - End-of-day brain clear = better sleep

### Mode Toggle (Solo Execution vs Family Structure):

Context-switching between work mode (Mon 6PM - Fri 4PM) and parenting mode (Fri 4PM - Mon 6PM) is hard. Explicitly tracking *which mode I'm in* reduces decision fatigue.

### Priority Health (Emergency Detection):

If any rating drops below 7 → system flags it as **WARNING**.  
Below 5 → **CRITICAL**.

This turns subjective feelings into objective data: "I feel bad" → "Hydration = 3, that's fixable."

---

## The Build Process (Actual Timeline)

**Day 1 (2 hours):** Built basic form with localStorage save. No styling. Ugly but functional.

**Day 2 (3 hours):** Added date picker, auto-load for selected date, streak calculation logic. Still ugly.

**Day 3 (4 hours):** Built stats dashboard - heatmap grid showing 30-day history, average ratings, protocol completion percentages. Realized I was procrastinating on styling by adding features.

**Day 4 (2 hours):** Dark mode CSS, teal accents, card-based layout. Made it not hurt to look at.

**Day 5 (1 hour):** Added "insights" section - system reads ratings and generates plain-language feedback ("Your sleep hygiene is slipping. Prioritize bedtime routine tonight."). This was the moment it clicked from "tool" to "system."

**Total:** ~12 hours. Would've taken 40+ hours if I'd insisted on a proper database/app architecture.

---

## What Actually Works

**Unexpected wins:**

1. **Seeing yesterday's data auto-loads** - I don't have to remember what I did. The form remembers for me.
2. **Heatmap visualization** - Green/yellow/red squares make patterns obvious. "Oh, I haven't tracked in 5 days" vs. "I've hit 14 days straight."
3. **Live stats on homepage hero section** - Current streak shows on landing page. Gamification without a separate game.
4. **No app to open** - Removing friction = system survives. I see tracker every time I test the site.

**What doesn't work yet:**

- No mobile optimization (desktop-first build)
- No data export (JSON dump is manual)
- No reminders (relies on me seeing homepage)

But it's *functional*. And functional beats perfect-but-never-deployed.

---

## Lessons for Building Neurodivergent Tools

### 1. Reduce Friction to Zero

Every click is a decision point. Every decision point is a failure opportunity. Eliminate clicks.

### 2. Auto-Save Everything

Don't trust working memory. System should assume user will get distracted mid-sentence and navigate away.

### 3. Make Data Visible

Out of sight = out of mind. Heatmap, streak counter, live stats - shove progress in user's face constantly.

### 4. Design for Recovery, Not Perfection

Missed a day? System should say "Start again" not "You failed." Shame spirals kill momentum.

### 5. Build Where You Already Are

Don't create a new destination. Embed tools into existing workflows.

---

## The Meta-Lesson

**I didn't build this to sell it. I built it because I needed it.**

That constraint forced honesty:
- No fake motivation ("You got this!" ❌)
- No gamification gimmicks (cartoon avatars ❌)
- No feature bloat (social sharing ❌)

Just: "Did you drink water today? Rate it 0-10. System saved. Done."

**Anti-BS design works because it respects the user's reality.** My reality = executive dysfunction, context-switching costs, decision fatigue. So I built a system that works *with* those constraints, not against them.

---

## Try It Yourself

The tracker is live on [wonkysprout.com](/) (scroll down past hero section).

**Source code:** All JavaScript is inline in `_layouts/default.html`. localStorage keys follow pattern `daily_tracker_YYYY-MM-DD`. View browser console to see data structure.

**Want to adapt it?** Copy the HTML form + JavaScript functions. Modify tracked items to fit your protocols. Deploy anywhere (static site, local HTML file, whatever).

**No permission needed. No attribution required. Just fix your own chaos.**

---

**[Back to Home](/) | [View All SOPs](/sop-vault) | [Service: Fix-It Blueprint](/fix)**
