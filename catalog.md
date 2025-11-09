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
</div>

This is the "card catalog" of my "fixes," thoughts, and systems. This list updates automatically.

---

{% for post in site.posts %}
## [{{ post.title }}]({{ post.url }})
* **Date:** {{ post.date | date: "%B %d, %Y" }}
{% endfor %}