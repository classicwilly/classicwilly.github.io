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