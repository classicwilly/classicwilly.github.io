---
layout: default
title: The Card Catalog
---

# THE CARD CATALOG

<div class="page-navigation">
  <div class="nav-section">
    <h4>📍 WHERE AM I?</h4>
    <p>The <strong>blog archive</strong>—reverse chronological list of all posts. This is the M1 (Media) module: unfiltered neurodivergent life, system builds, product fixes, and thought dumps. No polish, no marketing, no BS.</p>
  </div>
  
  <div class="nav-section">
    <h4>✅ WHAT CAN I DO HERE?</h4>
    <ul>
      <li><strong>Browse all posts</strong> by date (newest first)</li>
      <li><strong>Read unfiltered writing</strong> about ADHD/Autism life</li>
      <li><strong>See system evolution</strong> (how SOPs get built and refined)</li>
      <li><strong>Find product breakdowns</strong> (hardware reviews, fixes, automation)</li>
    </ul>
  </div>
  
  <div class="nav-section">
    <h4>💡 HOW THIS HELPS</h4>
    <p>This is my public thinking log. You'll see <strong>real struggles, real wins, real chaos</strong>. No curated feed, no highlight reel. If you're neurodivergent and feel alone in the mess—read here. You'll see you're not broken, just different. And different needs different systems.</p>
  </div>
  
  <div class="nav-section">
    <h4>⚡ QUICK ACCESS</h4>
    <ul>
      <li><strong><a href="/" style="color: var(--circuit-teal);">Home</a></strong> → Main page</li>
      <li><strong><a href="/sop-vault" style="color: var(--circuit-teal);">SOP Vault</a></strong> → All protocols</li>
      <li><strong><a href="/2025-11-08_M1_PAGE_manifesto" style="color: var(--circuit-teal);">Manifesto</a></strong> → Philosophy</li>
      <li><strong><a href="/fix" style="color: var(--circuit-teal);">Fix-It</a></strong> → How I work</li>
    </ul>
  </div>
</div>

This is the "card catalog" of my "fixes," thoughts, and systems. This list updates automatically.

---
<div class="checklist-grid">
  {% for post in site.posts %}
    {% include card.html href=post.url title=post.title classes="checklist-card" %}
  {% endfor %}
</div>