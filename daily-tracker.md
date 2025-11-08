---
layout: default
title: Daily Tracker
---

# DAILY PROTOCOL TRACKER

**Quick daily check-in for all foundational and mode-specific protocols.**

<div class="tracker-header">
  <div class="tracker-date">
    <label for="tracker-date">Date:</label>
    <input type="date" id="tracker-date" />
  </div>
  <div class="tracker-mode">
    <label>Mode:</label>
    <label class="mode-option">
      <input type="radio" name="mode" value="solo" id="mode-solo" />
      Solo Execution
    </label>
    <label class="mode-option">
      <input type="radio" name="mode" value="family" id="mode-family" />
      Family Structure
    </label>
  </div>
</div>

---

## FOUNDATIONAL PROTOCOLS (Required Daily)

### Morning Sequence
- [ ] **6:00 AM** - Water Protocol (16 oz immediately upon waking)
- [ ] **6:02 AM** - Pill Protocol (all pills from organizer)
- [ ] **6:03-6:10 AM** - Movement (walk/stretch/exercise/shower - 7 min)
- [ ] **6:10-6:15 AM** - Caffeine Protocol (coffee/tea, no multitask)

### All Day
- [ ] **Capture Protocol Active** - Used Soundcore Recorder or Google Keep for thoughts
- [ ] **Hydration Maintained** - 32+ oz water throughout day
- [ ] **Bubble Shield Deployed** - Wore headphones during focus time

### Evening Sequence  
- [ ] **10:00 PM** - Sleep Anchor Prep (wind down, screens off, lights dim)
- [ ] **10:25 PM** - Daily Dump (review tomorrow, write 3 critical tasks)
- [ ] **10:30 PM** - Sleep Anchor (in bed, no screens, DND mode)

---

## MORNING TRANSITION (6:00-7:00 AM)

- [ ] **Phase 1 Complete** - Physical Activation (water, pills, movement, caffeine)
- [ ] **Phase 2 Complete** - Environment Setup (clear space, deploy Bubble Shield)
- [ ] **Phase 3 Complete** - Mental Calibration (calendar, 3 priority tasks selected)
- [ ] **Phase 4 Complete** - Execution Launch (first micro-action by 7:00 AM)

---

## MODE-SPECIFIC PROTOCOLS

### If Solo Execution Mode (Mon 6 PM → Fri 4 PM)
- [ ] **Core Work Block 1** (9:00 AM - 1:00 PM) - Protected focus time, Profile 1.0
- [ ] **Meal Prep** - Cooked/prepped meals for efficiency
- [ ] **Core Work Block 2** (2:00 PM - 5:00 PM) - Protected focus time
- [ ] **Exercise Protocol** - 30 min movement/gym time

### If Family Structure Mode (Fri 4 PM → Mon 6 PM)
- [ ] **Quiet Time Protocol** (1:00-3:00 PM) - 2 hours mandatory recovery
- [ ] **Bubble Shield Profile 2.0** - Used during high-chaos times (meals, transitions)
- [ ] **Structured Family Schedule** - Maintained fixed meal/activity times
- [ ] **Tag-Team Coordination** - Communicated needs with spouse

---

## EMERGENCY PROTOCOLS USED TODAY

- [ ] **Executive Dysfunction Emergency** - Needed reboot for frozen state
- [ ] **Context Switching Recovery** - Handled interruption with capture protocol
- [ ] **Sensory Overload Emergency** - Retreated for nervous system regulation

**If 2+ emergency protocols used**: System issue detected. Review root cause.

---

## PRIORITY HIERARCHY CHECK

<div class="priority-ratings">
  <div class="rating-row">
    <label for="rating-sleep">Sleep (7-8 hrs):</label>
    <input type="number" id="rating-sleep" min="1" max="10" placeholder="1-10" /> / 10
  </div>
  <div class="rating-row">
    <label for="rating-food">Food (protein every 3 hrs):</label>
    <input type="number" id="rating-food" min="1" max="10" placeholder="1-10" /> / 10
  </div>
  <div class="rating-row">
    <label for="rating-water">Water (32+ oz):</label>
    <input type="number" id="rating-water" min="1" max="10" placeholder="1-10" /> / 10
  </div>
  <div class="rating-row">
    <label for="rating-medicine">Medicine (pills taken):</label>
    <input type="number" id="rating-medicine" min="1" max="10" placeholder="1-10" /> / 10
  </div>
</div>

**If any score below 7**: This is the root problem. Fix this tomorrow.

---

## TODAY'S WINS (3 minimum)

<div class="wins-section">
  <div class="win-row">
    <label>1.</label>
    <input type="text" id="win-1" placeholder="Enter your win..." />
  </div>
  <div class="win-row">
    <label>2.</label>
    <input type="text" id="win-2" placeholder="Enter your win..." />
  </div>
  <div class="win-row">
    <label>3.</label>
    <input type="text" id="win-3" placeholder="Enter your win..." />
  </div>
</div>

---

## TOMORROW'S TOP 3 PRIORITIES

<div class="priorities-section">
  <div class="priority-row">
    <label>1.</label>
    <input type="text" id="priority-1" placeholder="Enter priority..." />
  </div>
  <div class="priority-row">
    <label>2.</label>
    <input type="text" id="priority-2" placeholder="Enter priority..." />
  </div>
  <div class="priority-row">
    <label>3.</label>
    <input type="text" id="priority-3" placeholder="Enter priority..." />
  </div>
</div>

---

## NOTES / OBSERVATIONS

<div class="notes-section">
  <label for="notes">Use this space to note anything unusual, patterns, or insights:</label>
  <textarea id="notes" rows="5" placeholder="Enter your observations..."></textarea>
</div>

---

## COMPLETION METRICS

<div class="metrics-section">
  <div class="metric-row">
    <label for="metric-foundational">Foundational Protocols:</label>
    <input type="number" id="metric-foundational" min="0" max="11" placeholder="0-11" /> / 11 completed (Goal: 10+)
  </div>
  <div class="metric-row">
    <label for="metric-morning">Morning Transition:</label>
    <input type="number" id="metric-morning" min="0" max="4" placeholder="0-4" /> / 4 phases completed (Goal: 4/4)
  </div>
  <div class="metric-row">
    <label for="metric-mode">Mode-Specific:</label>
    <input type="number" id="metric-mode" min="0" max="4" placeholder="0-4" /> / 4 completed (Goal: 3+)
  </div>
  <div class="metric-row">
    <label for="metric-hierarchy">Priority Hierarchy:</label>
    <input type="number" id="metric-hierarchy" min="0" max="4" placeholder="0-4" /> / 4 above 7/10 (Goal: 4/4)
  </div>
  <div class="metric-row overall-rating">
    <label for="overall-rating">Overall Day Rating:</label>
    <input type="number" id="overall-rating" min="1" max="10" placeholder="1-10" /> / 10
  </div>
</div>

---

**Daily Tracker Usage:**
- Fill this out at Daily Dump (10:25 PM) before sleep
- Check boxes throughout day as you complete protocols
- Review patterns weekly during Weekly Review Protocol
- If completion rates drop below 70% for 3+ days: Emergency system review required

**[View All Protocols →](sop-vault) | [Full Checklists →](checklists)**