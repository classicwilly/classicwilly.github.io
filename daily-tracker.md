---
layout: default
title: Daily Tracker
---

<div style="text-align: center; margin-bottom: 3rem;">
  <h1 style="font-size: 2.5rem; margin: 0.16rem 0 1.16rem 0; border-bottom: none !important;">📊 <span style="color: var(--blue);">Daily Protocol Tracker</span></h1>
  <div style="height: 2px; width: 100%; background: linear-gradient(90deg, var(--blue), var(--purple), var(--pink), var(--yellow)); margin-bottom: 2.16rem;"></div>
  <p style="color: var(--text-light); font-size: 1.1rem; margin: 0 0 2.16rem 0;">Quick daily check-in for all foundational and mode-specific protocols.</p>
  <div style="height: 1px; width: 100%; background: var(--circuit-teal); opacity: 0.3;"></div>
</div>

<div class="page-navigation">
  <div class="nav-section">
    <h4>📍 WHERE AM I?</h4>
    <p>Comprehensive daily tracking page for <strong>all protocols</strong> in one place. This is your single source of truth for daily execution. Fill this out during your <strong>10:25 PM Daily Dump</strong>.</p>
  </div>
  
  <div class="nav-section">
    <h4>✅ WHAT CAN I DO HERE?</h4>
    <ul>
      <li><strong>Set today's date</strong> to track specific day</li>
      <li><strong>Select your mode</strong> (Solo Execution or Family Structure)</li>
      <li><strong>Check boxes</strong> throughout the day as you complete protocols</li>
      <li><strong>Review during Daily Dump</strong> (10:25 PM) to see completion rate</li>
      <li><strong>Export data for Weekly Review</strong> (pattern analysis)</li>
    </ul>
  </div>
  
  <div class="nav-section">
    <h4>💡 HOW THIS HELPS</h4>
    <p>Visual tracking creates <strong>accountability</strong> and <strong>pattern recognition</strong>. When you see "Water Protocol: 3/7 days this week," you know where the breakdown is. Saves to localStorage—your data persists across page loads. Use this for honest self-assessment, not perfection theater.</p>
  </div>
  
  <div class="nav-section">
    <h4>⚡ QUICK ACCESS</h4>
    <ul>
      <li><strong><a href="/checklists" style="color: var(--circuit-teal);">Checklists</a></strong> → All protocols</li>
      <li><strong><a href="/tracker-stats" style="color: var(--circuit-teal);">Stats</a></strong> → View trends</li>
      <li><strong><a href="/sop-vault" style="color: var(--circuit-teal);">SOP Vault</a></strong> → Full protocols</li>
      <li><strong><a href="/2025-11-08_M4_IPI_executive-dysfunction-emergency" style="color: var(--circuit-teal);">Emergency</a></strong> → When frozen</li>
    </ul>
  </div>
</div>

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

## 🚀 QUICK JUMP TO SECTION

<div class="quick-jump-grid">
  <a href="#foundational">⚡ Foundational</a>
  <a href="#morning">🌅 Morning</a>
  <a href="#mode-specific">🎯 Mode-Specific</a>
  <a href="#emergency">🚨 Emergency</a>
  <a href="#priority-check">🎖️ Priority Check</a>
  <a href="#wins">🌟 Today's Wins</a>
  <a href="#tomorrow">📅 Tomorrow</a>
  <a href="#notes">📝 Notes</a>
  <a href="#metrics">📊 Metrics</a>
</div>

---

<h2 id="foundational">FOUNDATIONAL PROTOCOLS (Required Daily)</h2>

### Morning Sequence

<div class="interactive-checklist">
  <label class="checkbox-item">
    <input type="checkbox" class="task-checkbox">
    <span class="checkbox-label"><strong>6:00 AM</strong> - Water Protocol (16 oz immediately upon waking)</span>
  </label>
  
  <label class="checkbox-item">
    <input type="checkbox" class="task-checkbox">
    <span class="checkbox-label"><strong>6:02 AM</strong> - Pill Protocol (all pills from organizer)</span>
  </label>
  
  <label class="checkbox-item">
    <input type="checkbox" class="task-checkbox">
    <span class="checkbox-label"><strong>6:03-6:10 AM</strong> - Movement (walk/stretch/exercise/shower - 7 min)</span>
  </label>
  
  <label class="checkbox-item">
    <input type="checkbox" class="task-checkbox">
    <span class="checkbox-label"><strong>6:10-6:15 AM</strong> - Caffeine Protocol (coffee/tea, no multitask)</span>
  </label>
</div>

### All Day

<div class="interactive-checklist">
  <label class="checkbox-item">
    <input type="checkbox" class="task-checkbox">
    <span class="checkbox-label"><strong>Capture Protocol Active</strong> - Used Soundcore Recorder or Google Keep for thoughts</span>
  </label>
  
  <label class="checkbox-item">
    <input type="checkbox" class="task-checkbox">
    <span class="checkbox-label"><strong>Hydration Maintained</strong> - 32+ oz water throughout day</span>
  </label>
  
  <label class="checkbox-item">
    <input type="checkbox" class="task-checkbox">
    <span class="checkbox-label"><strong>Bubble Shield Deployed</strong> - Wore headphones during focus time</span>
  </label>
</div>

### Evening Sequence

<div class="interactive-checklist">
  <label class="checkbox-item">
    <input type="checkbox" class="task-checkbox">
    <span class="checkbox-label"><strong>10:00 PM</strong> - Sleep Anchor Prep (wind down, screens off, lights dim)</span>
  </label>
  
  <label class="checkbox-item">
    <input type="checkbox" class="task-checkbox">
    <span class="checkbox-label"><strong>10:25 PM</strong> - Daily Dump (review tomorrow, write 3 critical tasks)</span>
  </label>
  
  <label class="checkbox-item">
    <input type="checkbox" class="task-checkbox">
    <span class="checkbox-label"><strong>10:30 PM</strong> - Sleep Anchor (in bed, no screens, DND mode)</span>
  </label>
</div>

---

<h2 id="morning">MORNING TRANSITION (6:00-7:00 AM)</h2>

<div class="interactive-checklist">
  <label class="checkbox-item">
    <input type="checkbox" class="task-checkbox">
    <span class="checkbox-label"><strong>Phase 1 Complete</strong> - Physical Activation (water, pills, movement, caffeine)</span>
  </label>
  
  <label class="checkbox-item">
    <input type="checkbox" class="task-checkbox">
    <span class="checkbox-label"><strong>Phase 2 Complete</strong> - Environment Setup (clear space, deploy Bubble Shield)</span>
  </label>
  
  <label class="checkbox-item">
    <input type="checkbox" class="task-checkbox">
    <span class="checkbox-label"><strong>Phase 3 Complete</strong> - Mental Calibration (calendar, 3 priority tasks selected)</span>
  </label>
  
  <label class="checkbox-item">
    <input type="checkbox" class="task-checkbox">
    <span class="checkbox-label"><strong>Phase 4 Complete</strong> - Execution Launch (first micro-action by 7:00 AM)</span>
  </label>
</div>

---

<h2 id="mode-specific">MODE-SPECIFIC PROTOCOLS</h2>

### If Solo Execution Mode (Mon 6 PM → Fri 4 PM)

<div class="interactive-checklist">
  <label class="checkbox-item">
    <input type="checkbox" class="task-checkbox">
    <span class="checkbox-label"><strong>Core Work Block 1</strong> (9:00 AM - 1:00 PM) - Protected focus time, Profile 1.0</span>
  </label>
  
  <label class="checkbox-item">
    <input type="checkbox" class="task-checkbox">
    <span class="checkbox-label"><strong>Meal Prep</strong> - Cooked/prepped meals for efficiency</span>
  </label>
  
  <label class="checkbox-item">
    <input type="checkbox" class="task-checkbox">
    <span class="checkbox-label"><strong>Core Work Block 2</strong> (2:00 PM - 5:00 PM) - Protected focus time</span>
  </label>
  
  <label class="checkbox-item">
    <input type="checkbox" class="task-checkbox">
    <span class="checkbox-label"><strong>Exercise Protocol</strong> - 30 min movement/gym time</span>
  </label>
</div>

### If Family Structure Mode (Fri 4 PM → Mon 6 PM)

<div class="interactive-checklist">
  <label class="checkbox-item">
    <input type="checkbox" class="task-checkbox">
    <span class="checkbox-label"><strong>Quiet Time Protocol</strong> (1:00-3:00 PM) - 2 hours mandatory recovery</span>
  </label>
  
  <label class="checkbox-item">
    <input type="checkbox" class="task-checkbox">
    <span class="checkbox-label"><strong>Bubble Shield Profile 2.0</strong> - Used during high-chaos times (meals, transitions)</span>
  </label>
  
  <label class="checkbox-item">
    <input type="checkbox" class="task-checkbox">
    <span class="checkbox-label"><strong>Structured Family Schedule</strong> - Maintained fixed meal/activity times</span>
  </label>
  
  <label class="checkbox-item">
    <input type="checkbox" class="task-checkbox">
    <span class="checkbox-label"><strong>Tag-Team Coordination</strong> - Communicated needs with spouse</span>
  </label>
</div>

---

<h2 id="emergency">EMERGENCY PROTOCOLS USED TODAY</h2>

<div class="interactive-checklist">
  <label class="checkbox-item">
    <input type="checkbox" class="task-checkbox">
    <span class="checkbox-label"><strong>Executive Dysfunction Emergency</strong> - Needed reboot for frozen state</span>
  </label>
  
  <label class="checkbox-item">
    <input type="checkbox" class="task-checkbox">
    <span class="checkbox-label"><strong>Context Switching Recovery</strong> - Handled interruption with capture protocol</span>
  </label>
  
  <label class="checkbox-item">
    <input type="checkbox" class="task-checkbox">
    <span class="checkbox-label"><strong>Sensory Overload Emergency</strong> - Retreated for nervous system regulation</span>
  </label>
</div>

**If 2+ emergency protocols used**: System issue detected. Review root cause.

---

<h2 id="priority-check">PRIORITY HIERARCHY CHECK</h2>

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

<h2 id="wins">TODAY'S WINS (3 minimum)</h2>

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

<h2 id="tomorrow">TOMORROW'S TOP 3 PRIORITIES</h2>

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

<h2 id="notes">NOTES / OBSERVATIONS</h2>

<div class="notes-section">
  <label for="notes">Use this space to note anything unusual, patterns, or insights:</label>
  <textarea id="notes" rows="5" placeholder="Enter your observations..."></textarea>
</div>

---

<h2 id="metrics">COMPLETION METRICS</h2>

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

<div style="text-align: center; margin: 2rem 0;">
  <a href="/tracker-stats" style="display: inline-block; margin: 0 1.5rem; padding: 0.75rem 1.5rem; background: var(--card-dark); border-radius: 8px; color: var(--text-bright); text-decoration: none; font-weight: 600; transition: all 0.3s ease;">📊 View Your Stats</a>
  <a href="/sop-vault" style="display: inline-block; margin: 0 1.5rem; padding: 0.75rem 1.5rem; background: var(--card-dark); border-radius: 8px; color: var(--text-bright); text-decoration: none; font-weight: 600; transition: all 0.3s ease;">📋 All Protocols</a>
  <a href="/checklists" style="display: inline-block; margin: 0 1.5rem; padding: 0.75rem 1.5rem; background: var(--card-dark); border-radius: 8px; color: var(--text-bright); text-decoration: none; font-weight: 600; transition: all 0.3s ease;">✅ Checklists</a>
</div>