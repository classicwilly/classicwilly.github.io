---
layout: default
title: Daily Tracker
---

<div class="keep-grid">
  <div class="keep-card">
    <h2>📊 Daily Protocol Tracker</h2>
    <p>Track daily protocol completion. Check boxes, rate your day, plan tomorrow.</p>
    <p>Fill this out at Daily Dump (10:25 PM). Review patterns weekly.</p>
  </div>

  <div class="keep-card">
    <label for="tracker-date">Date:</label>
    <input type="date" id="tracker-date" />
  </div>
  <div class="keep-card">
    <label>Mode:</label>
    <label>
      <input type="radio" name="mode" value="solo" id="mode-solo" />
      Solo Execution
    </label>
    <label>
      <input type="radio" name="mode" value="family" id="mode-family" />
      Family Structure
    </label>
  </div>
</div>

---

## 🚀 QUICK JUMP TO SECTION

<div class="keep-grid">
  <a href="#foundational" class="keep-card">⚡ Foundational</a>
  <a href="#morning" class="keep-card">🌅 Morning</a>
  <a href="#mode-specific" class="keep-card">🎯 Mode-Specific</a>
  <a href="#emergency" class="keep-card">🚨 Emergency</a>
  <a href="#priority-check" class="keep-card">🎖️ Priority Check</a>
  <a href="#wins" class="keep-card">🌟 Today's Wins</a>
  <a href="#tomorrow" class="keep-card">📅 Tomorrow</a>
  <a href="#notes" class="keep-card">📝 Notes</a>
  <a href="#metrics" class="keep-card">📊 Metrics</a>
</div>

---

<div class="keep-grid">
  <div class="keep-card" id="foundational">
    <h2>🌊 Foundational Protocols</h2>
    <p>Core protocols that must happen every day. <strong>Goal: 10+ of 11 completed.</strong></p>
    <h3>Morning Sequence</h3>
    <div>
      <label><input type="checkbox"><strong>6:00 AM</strong> - Water Protocol (16 oz immediately upon waking)</label>
      <label><input type="checkbox"><strong>6:02 AM</strong> - Pill Protocol (all pills from organizer)</label>
      <label><input type="checkbox"><strong>6:03-6:10 AM</strong> - Movement (walk/stretch/exercise/shower - 7 min)</label>
      <label><input type="checkbox"><strong>6:10-6:15 AM</strong> - Caffeine Protocol (coffee/tea, no multitask)</label>
    </div>
    <h3>All Day</h3>
    <div>
      <label><input type="checkbox"><strong>Capture Protocol Active</strong> - Used Soundcore Recorder or Google Keep for thoughts</label>
      <label><input type="checkbox"><strong>Hydration Maintained</strong> - 32+ oz water throughout day</label>
      <label><input type="checkbox"><strong>Bubble Shield Deployed</strong> - Wore headphones during focus time</label>
    </div>
    <h3>Evening Sequence</h3>
    <div>
      <label><input type="checkbox"><strong>10:00 PM</strong> - Sleep Anchor Prep (wind down, screens off, lights dim)</label>
      <label><input type="checkbox"><strong>10:25 PM</strong> - Daily Dump (review tomorrow, write 3 critical tasks)</label>
      <label><input type="checkbox"><strong>10:30 PM</strong> - Sleep Anchor (in bed, no screens, DND mode)</label>
    </div>
  </div>

  <div class="keep-card" id="morning">
    <h2>🌅 Morning Transition (6:00-7:00 AM)</h2>
    <p>4-phase protocol to go from bed → execution. <strong>Goal: All 4 phases complete by 7:00 AM.</strong></p>
    <div>
      <label><input type="checkbox"><strong>Phase 1 Complete</strong> - Physical Activation (water, pills, movement, caffeine)</label>
      <label><input type="checkbox"><strong>Phase 2 Complete</strong> - Environment Setup (clear space, deploy Bubble Shield)</label>
      <label><input type="checkbox"><strong>Phase 3 Complete</strong> - Mental Calibration (calendar, 3 priority tasks selected)</label>
      <label><input type="checkbox"><strong>Phase 4 Complete</strong> - Execution Launch (first micro-action by 7:00 AM)</label>
    </div>
  </div>

  <div class="keep-card" id="mode-specific">
    <h2>🎯 Mode-Specific Protocols</h2>
    <p>Different protocols for Solo Execution Mode vs Family Structure Mode. Check the section that matches today's mode.</p>
    <h3>If Solo Execution Mode (Mon 6 PM → Fri 4 PM)</h3>
    <div>
      <label><input type="checkbox"><strong>Core Work Block 1</strong> (9:00 AM - 1:00 PM) - Protected focus time, Profile 1.0</label>
      <label><input type="checkbox"><strong>Meal Prep</strong> - Cooked/prepped meals for efficiency</label>
      <label><input type="checkbox"><strong>Core Work Block 2</strong> (2:00 PM - 5:00 PM) - Protected focus time</label>
      <label><input type="checkbox"><strong>Exercise Protocol</strong> - 30 min movement/gym time</label>
    </div>
    <h3>If Family Structure Mode (Fri 4 PM → Mon 6 PM)</h3>
    <div>
      <label><input type="checkbox"><strong>Quiet Time Protocol</strong> (1:00-3:00 PM) - 2 hours mandatory recovery</label>
      <label><input type="checkbox"><strong>Bubble Shield Profile 2.0</strong> - Used during high-chaos times (meals, transitions)</label>
      <label><input type="checkbox"><strong>Structured Family Schedule</strong> - Maintained fixed meal/activity times</label>
      <label><input type="checkbox"><strong>Tag-Team Coordination</strong> - Communicated needs with spouse</label>
    </div>
  </div>

  <div class="keep-card" id="emergency">
    <h2>🚨 Emergency Protocols Used Today</h2>
    <p>Check any emergency protocols you needed today. <strong>If 2+ checked:</strong> System issue detected. Review root cause.</p>
    <div>
      <label><input type="checkbox"><strong>Executive Dysfunction Emergency</strong> - Needed reboot for frozen state</label>
      <label><input type="checkbox"><strong>Context Switching Recovery</strong> - Handled interruption with capture protocol</label>
      <label><input type="checkbox"><strong>Sensory Overload Emergency</strong> - Retreated for nervous system regulation</label>
    </div>
  </div>

  <div class="keep-card" id="priority-check">
    <h2>🎖️ Priority Hierarchy Check</h2>
    <p>Rate each foundational need 1-10. <strong>If any score below 7:</strong> This is the root problem. Fix this tomorrow.</p>
    <div>
      <div><label for="rating-sleep">Sleep (7-8 hrs):</label><input type="number" id="rating-sleep" min="1" max="10" placeholder="1-10" /> / 10</div>
      <div><label for="rating-food">Food (protein every 3 hrs):</label><input type="number" id="rating-food" min="1" max="10" placeholder="1-10" /> / 10</div>
      <div><label for="rating-water">Water (32+ oz):</label><input type="number" id="rating-water" min="1" max="10" placeholder="1-10" /> / 10</div>
      <div><label for="rating-medicine">Medicine (pills taken):</label><input type="number" id="rating-medicine" min="1" max="10" placeholder="1-10" /> / 10</div>
    </div>
  </div>

  <div class="keep-card" id="wins">
    <h2>🌟 Today's Wins (3 minimum)</h2>
    <p>List at least 3 things you accomplished today. Any size counts. This isn't motivational BS—it's pattern recognition.</p>
    <div>
      <div><label>1.</label><input type="text" id="win-1" placeholder="Enter your win..." /></div>
      <div><label>2.</label><input type="text" id="win-2" placeholder="Enter your win..." /></div>
      <div><label>3.</label><input type="text" id="win-3" placeholder="Enter your win..." /></div>
    </div>
  </div>

  <div class="keep-card" id="tomorrow">
    <h2>📅 Tomorrow's Top 3 Priorities</h2>
    <p>What are the 3 most critical tasks for tomorrow? Write these during Daily Dump (10:25 PM).</p>
    <div>
      <div><label>1.</label><input type="text" id="priority-1" placeholder="Enter priority..." /></div>
      <div><label>2.</label><input type="text" id="priority-2" placeholder="Enter priority..." /></div>
      <div><label>3.</label><input type="text" id="priority-3" placeholder="Enter priority..." /></div>
    </div>
  </div>

  <div class="keep-card" id="notes">
    <h2>📝 Notes / Observations</h2>
    <p>Note anything unusual, patterns you're seeing, or insights about what worked/didn't work today.</p>
    <div>
      <label for="notes">Use this space to note anything unusual, patterns, or insights:</label>
      <textarea id="notes" rows="5" placeholder="Enter your observations..."></textarea>
    </div>
  </div>

  <div class="keep-card" id="metrics">
    <h2>📊 Completion Metrics</h2>
    <p>Track completion rates for each protocol section. Use these metrics during Weekly Review to spot trends.</p>
    <div>
      <div><label for="metric-foundational">Foundational Protocols:</label><input type="number" id="metric-foundational" min="0" max="11" placeholder="0-11" /> / 11 completed (Goal: 10+)</div>
      <div><label for="metric-morning">Morning Transition:</label><input type="number" id="metric-morning" min="0" max="4" placeholder="0-4" /> / 4 phases completed (Goal: 4/4)</div>
      <div><label for="metric-mode">Mode-Specific:</label><input type="number" id="metric-mode" min="0" max="4" placeholder="0-4" /> / 4 completed (Goal: 3+)</div>
      <div><label for="metric-hierarchy">Priority Hierarchy:</label><input type="number" id="metric-hierarchy" min="0" max="4" placeholder="0-4" /> / 4 above 7/10 (Goal: 4/4)</div>
      <div><label for="overall-rating">Overall Day Rating:</label><input type="number" id="overall-rating" min="1" max="10" placeholder="1-10" /> / 10</div>
    </div>
    <p><strong>Daily Tracker Usage:</strong> Fill this out at Daily Dump (10:25 PM) before sleep. Check boxes throughout day as you complete protocols. Review patterns weekly during Weekly Review Protocol. <strong>If completion rates drop below 70% for 3+ days:</strong> Emergency system review required.</p>
  </div>
</div>

<div class="keep-grid">
  <a href="/tracker-stats" class="keep-card">
    <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">📊</div>
    <div style="font-weight: 600;">View Your Stats</div>
  </a>
  <a href="/sop-vault" class="keep-card">
    <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">📋</div>
    <div style="font-weight: 600;">All Protocols</div>
  </a>
  <a href="/checklists" class="keep-card">
    <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">✅</div>
    <div style="font-weight: 600;">Checklists</div>
  </a>
</div>
