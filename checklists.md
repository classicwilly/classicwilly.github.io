---
layout: default
title: Interactive Checklists
---

<div class="settings-header">
  <h1>✅ <span style="color: var(--green);">Interactive Checklists</span></h1>
  <div class="header-divider"></div>
  <p>Printable, trackable checklists for every protocol in the Wonky Sprout OS.</p>
  <p class="text-sm">Check boxes save automatically. Print for physical use. Reset anytime.</p>
</div>

<!-- Daily Protocols Section -->
<div class="checklist-section">
  <h2 class="section-title">📅 Daily Protocols</h2>
  
  <div class="checklist-grid">
    
    <!-- Foundational Daily -->
    {% include card.html href="/checklist-foundational-daily" icon="🌱" title="Foundational Daily" desc="The 5 non-negotiables: Water, Pills, Capture, Sleep Anchor, Daily Dump" meta="Every single day" classes="checklist-card is-green" %}
    
    <!-- Morning Transition -->
    {% include card.html href="/checklist-morning-transition" icon="☀️" title="Morning Transition" desc="60-min bridge from sleep to execution (6:00-7:00 AM)" meta="Every morning" classes="checklist-card is-yellow" %}
    
    <!-- Daily Tracker -->
    {% include card.html href="/daily-tracker" icon="📊" title="Daily Tracker" desc="Comprehensive single-page daily check-in with metrics" meta="Fill during Daily Dump (10:25 PM)" classes="checklist-card is-blue" %}
    
  </div>
</div>

<!-- Weekly Protocols Section -->
<div class="checklist-section">
  <h2 class="section-title">📆 Weekly Protocols</h2>
  
  <div class="checklist-grid">
    
    <!-- Weekly Review -->
    {% include card.html href="/checklist-weekly-review" icon="🔄" title="Weekly Review" desc="60-min maintenance: process chaos, review tasks, plan ahead" meta="Solo: Fri 3-4 PM | Family: Sun 8:30-9:30 PM" classes="checklist-card is-purple" %}
    
  </div>
</div>

<!-- Emergency Protocols Section -->
<div class="checklist-section">
  <h2 class="section-title">🚨 Emergency Protocols</h2>
  
  <div class="checklist-grid">
    
    <!-- Executive Dysfunction -->
    {% include card.html disabled=true icon="🧠" title="Executive Dysfunction" desc="Quick-reference for frozen executive function" meta="Coming Soon" %}
    
    <!-- Context Switching -->
    {% include card.html disabled=true icon="🔀" title="Context Switching Recovery" desc="Fast capture-interrupt-reload for disruptions" meta="Coming Soon" %}
    
    <!-- Sensory Overload -->
    {% include card.html disabled=true icon="🔇" title="Sensory Overload" desc="Rapid sensory reduction and retreat protocol" meta="Coming Soon" %}
    
  </div>
</div>

<!-- How To Use Section -->
<div class="info-box is-teal">
  <h3 class="card-title" style="margin-top: 0;">💡 How To Use These Checklists</h3>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-top: 1rem;">
    
    <div>
      <h4 class="card-title" style="font-size: 1rem; color: var(--text-bright);">📱 In Browser (Interactive)</h4>
      <p class="card-desc">Click any checklist, check boxes to track progress (saves automatically), and reset anytime.</p>
    </div>
    
    <div>
      <h4 class="card-title" style="font-size: 1rem; color: var(--text-bright);">🖨️ Printed (Physical)</h4>
      <p class="card-desc">Click any checklist, use your browser's print function, and store in your physical SOP binder.</p>
    </div>
    
  </div>
</div>

<!-- Philosophy Section -->
<div class="info-box is-green">
  <h3 class="card-title" style="color: var(--green); margin-top: 0;">🧠 Checklist Philosophy</h3>
  <p class="card-desc">Why checklists matter for neurodivergent brains:</p>
  <ul class="card-desc" style="line-height: 1.6; margin: 0; padding-left: 1.25rem;">
    <li><strong>Reduce working memory load</strong> - Don't hold steps in your head</li>
    <li><strong>Prevent skipped steps</strong> - Visual confirmation of completion</li>
    <li><strong>Remove decision fatigue</strong> - Just follow the list</li>
    <li><strong>Build momentum</strong> - Checking boxes feels good (dopamine)</li>
  </ul>
  <p class="card-body" style="color: var(--text-bright); margin: 1rem 0 0 0; font-style: italic;">Checklists are not micromanagement. They're cognitive prosthetics.</p>
</div>
