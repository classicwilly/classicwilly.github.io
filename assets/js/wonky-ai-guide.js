// assets/js/wonky-ai-guide.js
// Lightweight client-side Wonky AI guide — no external API calls.
// Provides simple suggestions and optional auto-apply behavior.

(function () {
  'use strict';

  // Utility: safe DOM selector
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  function toggleContent(open) {
    const content = $('#wonky-ai-content');
    const toggle = $('#wonky-ai-toggle');
    if (!content) return;
    if (open === undefined) open = content.hidden;
    content.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Close' : 'Open';
  }

  function collectContext() {
    // Basic page context used to form suggestions
    return {
      title: document.title || document.querySelector('h1')?.textContent || 'page',
      url: location.pathname,
      headings: $$('.main-content h1, .main-content h2').slice(0,3).map(h => h.textContent.trim()),
      nav: $$('.sidebar-nav a').map(a => ({text: a.textContent.trim(), href: a.getAttribute('href')}))
    };
  }

  function makeSuggestions(ctx) {
    const suggestions = [];
    // Suggest compact mode for dense pages
    suggestions.push({
      id: 'compact-layout',
      title: 'Use compact layout',
      desc: 'Reduce card padding for denser display to help scanning.',
      action: () => {
        document.querySelector('.main-content')?.classList.add('compact');
        announce('Applied compact layout');
      }
    });

    // Suggest navigation actions based on sidebar items
    if (ctx.nav && ctx.nav.length) {
      // suggest the top two sidebar entries that aren't current
      ctx.nav.slice(0,4).forEach((n, i) => {
        const href = n.href;
        suggestions.push({
          id: 'nav-' + i,
          title: `Go to ${n.text}`,
          desc: `Open ${n.text} for quick access.`,
          action: () => { window.location.href = href; }
        });
      });
    }

    // Suggest opening daily tracker if present
    const hasDaily = ctx.nav.find(n => /daily|tracker/i.test(n.text));
    if (hasDaily) {
      suggestions.unshift({
        id: 'open-daily',
        title: 'Open Daily Tracker',
        desc: 'Quickly open your daily tracker to capture progress.',
        action: () => { window.location.href = hasDaily.href; }
      });
    }

    // Safety: always include a no-op rollback suggestion
    suggestions.push({
      id: 'rollback-compact',
      title: 'Reset layout',
      desc: 'Revert compact layout and return to default spacing.',
      action: () => {
        document.querySelector('.main-content')?.classList.remove('compact');
        announce('Layout reset');
      }
    });

    return suggestions;
  }

  function renderSuggestions(list, suggestions, autoApply) {
    list.innerHTML = '';
    suggestions.forEach(s => {
      const li = document.createElement('li');
      li.className = 'suggestion-item';
      const btn = document.createElement('button');
      btn.className = 'suggestion-action';
      btn.type = 'button';
      btn.textContent = s.title;
      btn.title = s.desc;
      btn.addEventListener('click', async () => {
        if (autoApply) {
          if (!confirm(`Wonky AI will: ${s.title}. Confirm?`)) return;
          try { s.action(); } catch (e) { announce('Action failed'); }
        } else {
          // show detail and allow apply
          if (confirm(`${s.title}\n\n${s.desc}\n\nApply this action?`)) {
            try { s.action(); } catch (e) { announce('Action failed'); }
          }
        }
      });
      const p = document.createElement('p');
      p.className = 'suggestion-desc';
      p.textContent = s.desc;
      li.appendChild(btn);
      li.appendChild(p);
      list.appendChild(li);
    });
  }

  function announce(message) {
    const live = document.getElementById('wonky-ai-widget');
    if (!live) return;
    // small aria live region; append a visually-hidden element
    const node = document.createElement('div');
    node.className = 'sr-only';
    node.textContent = message;
    live.appendChild(node);
    setTimeout(() => node.remove(), 2000);
  }

  // Wire up UI
  document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('wonky-ai-toggle');
    const content = document.getElementById('wonky-ai-content');
    const suggestBtn = document.getElementById('wonky-suggest');
    const suggestionsList = document.getElementById('wonky-suggestions');
    const autoApply = document.getElementById('wonky-auto-apply');
    const guidedToggle = document.getElementById('wonky-guided-toggle');

    if (toggle) toggle.addEventListener('click', () => toggleContent());

    if (suggestBtn && suggestionsList) {
      suggestBtn.addEventListener('click', () => {
        const ctx = collectContext();
        const suggestions = makeSuggestions(ctx);
        renderSuggestions(suggestionsList, suggestions, autoApply?.checked);
        // If guided toggle is enabled, also highlight the first suggestion
        if (guidedToggle?.checked && suggestions[0]) {
          announce(`Suggested: ${suggestions[0].title}`);
        }
      });
    }

    // expose a small API (for testing or future integration)
    window.WonkyAI = {
      suggest: () => {
        const ctx = collectContext();
        const suggestions = makeSuggestions(ctx);
        return suggestions;
      },
      applySuggestionById: (id) => {
        const suggestions = makeSuggestions(collectContext());
        const s = suggestions.find(x => x.id === id);
        if (s) s.action();
      }
    };
  });

})();
