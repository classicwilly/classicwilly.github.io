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

  /* Inject an 'Ask Wonky AI' button into each card and wire actions */
  function injectAskButtons() {
    const cards = $$('.main-content > *:not(.keep-grid)');
    cards.forEach(card => {
      if (card.querySelector('.ask-wonky')) return; // already injected
      const btn = document.createElement('button');
      btn.className = 'ask-wonky';
      btn.type = 'button';
      btn.textContent = 'Ask Wonky AI';
      btn.setAttribute('aria-label', 'Ask Wonky AI about this content');
      btn.addEventListener('click', () => openModalForCard(card));
      // place button in top-right of card
      btn.style.cssText = 'position:absolute;top:8px;right:8px;z-index:10;';
      // ensure card is positioned relatively
      if (getComputedStyle(card).position === 'static') card.style.position = 'relative';
      card.appendChild(btn);
    });
  }

  /* Modal for card-specific suggestions */
  function createModal() {
    if ($('#wonky-modal')) return $('#wonky-modal');
    const modal = document.createElement('div');
    modal.id = 'wonky-modal';
    modal.className = 'wonky-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.hidden = true;
    modal.innerHTML = `
      <div class="wonky-modal-content">
        <button class="wonky-modal-close" aria-label="Close">×</button>
        <h3 class="wonky-modal-title">Wonky AI suggestions</h3>
        <div class="wonky-modal-body">
          <ul class="wonky-modal-list"></ul>
        </div>
      </div>`;
    document.body.appendChild(modal);
    modal.querySelector('.wonky-modal-close').addEventListener('click', () => closeModal(modal));
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(modal); });
    return modal;
  }

  function openModalForCard(card) {
    const modal = createModal();
    const list = modal.querySelector('.wonky-modal-list');
    list.innerHTML = '';
    const ctx = {
      title: card.querySelector('h1,h2,h3')?.textContent || document.title,
      excerpt: card.textContent.trim().slice(0, 400)
    };
    // make a few quick suggestions related to the card
    const suggestions = [
      { id: 'highlight', title: 'Highlight this card', desc: 'Add a subtle highlight to make this card stand out.', action: () => { card.style.boxShadow = '0 0 0 3px rgba(45,204,204,0.08)'; announce('Card highlighted'); } },
      { id: 'copy', title: 'Copy text', desc: 'Copy the main text of this card to your clipboard.', action: async () => { try { await navigator.clipboard.writeText(card.textContent.trim()); announce('Copied to clipboard'); } catch (e) { announce('Copy failed'); }}},
      { id: 'open-related', title: 'Show related SOPs', desc: 'Open the SOP vault in a new tab to find related procedures.', action: () => { window.open('/sop-vault', '_blank'); } }
    ];
    suggestions.forEach(s => {
      const li = document.createElement('li');
      li.className = 'modal-suggestion';
      const b = document.createElement('button'); b.type='button'; b.className='modal-action'; b.textContent = s.title;
      b.addEventListener('click', () => { if (confirm(`${s.title}\n\n${s.desc}\n\nApply?`)) { s.action(); } });
      const p = document.createElement('p'); p.className='modal-desc'; p.textContent = s.desc;
      li.appendChild(b); li.appendChild(p); list.appendChild(li);
    });
    modal.hidden = false;
    modal.querySelector('.wonky-modal-close').focus();
  }

  function closeModal(modal) { modal.hidden = true; }

  // Keyboard shortcut: Ctrl+K or / to open Wonky AI quick suggest
  function keyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault(); toggleContent(true); $('#wonky-suggest')?.focus();
      }
      if (e.key === '/') {
        const active = document.activeElement;
        if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA')) return;
        e.preventDefault(); toggleContent(true); $('#wonky-suggest')?.focus();
      }
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

  /* Remote integration / opt-in handling (privacy-first)
     - No remote calls are made unless user explicitly opts in.
     - The site owner must configure a server-side proxy endpoint by setting
       window.WONKY_REMOTE_ENDPOINT = '/api/wonky-proxy' (or similar) in a safe server-side config.
     - No API keys are present in client code. */
  const REMOTE_FLAG = 'wonky_remote_enabled';

  function isRemoteEnabled() {
    return localStorage.getItem(REMOTE_FLAG) === 'true';
  }

  function setRemoteEnabled(enabled) {
    localStorage.setItem(REMOTE_FLAG, enabled ? 'true' : 'false');
    const btn = $('#wonky-enable-remote');
    if (btn) btn.setAttribute('aria-pressed', String(enabled));
    updateRemoteBadge(enabled);
  }

  function updateRemoteBadge(enabled) {
    const header = $('#wonky-ai-header');
    if (!header) return;
    let badge = header.querySelector('.wonky-remote-badge');
    if (enabled) {
      if (!badge) {
        badge = document.createElement('span');
        badge.className = 'wonky-remote-badge';
        badge.textContent = 'Remote: ON';
        header.appendChild(badge);
      }
    } else {
      if (badge) badge.remove();
    }
  }

  function showConsentModal(onConfirm) {
    // create a simple consent modal for enabling remote AI
    if ($('#wonky-consent-modal')) return;
    const modal = document.createElement('div');
    modal.id = 'wonky-consent-modal';
    modal.className = 'wonky-modal';
    modal.innerHTML = `
      <div class="wonky-modal-content">
        <button class="wonky-modal-close" aria-label="Close">×</button>
        <h3>Enable remote AI (opt-in)</h3>
        <div class="wonky-modal-body">
          <p>Enabling remote AI will send text from your browser to a remote model for processing. Do not enable this on devices or networks you do not trust. No data is sent unless you confirm each action.</p>
          <label><input type="checkbox" id="wonky-consent-confirm"> I understand and consent to sending text to a remote service.</label>
          <div style="margin-top:0.75rem;"><button id="wonky-consent-apply" class="modal-action">Enable remote AI</button></div>
        </div>
      </div>`;
    document.body.appendChild(modal);
    modal.querySelector('.wonky-modal-close').addEventListener('click', () => modal.remove());
    modal.querySelector('#wonky-consent-apply').addEventListener('click', () => {
      const confirmed = modal.querySelector('#wonky-consent-confirm')?.checked;
      if (!confirmed) { alert('Please confirm consent to enable remote AI.'); return; }
      setRemoteEnabled(true);
      announce('Remote AI enabled locally');
      modal.remove();
      if (typeof onConfirm === 'function') onConfirm();
    });
  }

  async function safeRemoteGenerate(prompt) {
    // Only perform network call when user has opted in and endpoint is configured
    if (!isRemoteEnabled()) { throw new Error('Remote AI is not enabled by user'); }
    const endpoint = window.WONKY_REMOTE_ENDPOINT;
    if (!endpoint) { throw new Error('No remote endpoint configured'); }
    // Send minimal payload; server should handle API key & call to provider
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    if (!res.ok) throw new Error(`Remote request failed: ${res.status}`);
    return await res.json();
  }

  // Wire up UI
  document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('wonky-ai-toggle');
    const content = document.getElementById('wonky-ai-content');
    const suggestBtn = document.getElementById('wonky-suggest');
    const suggestionsList = document.getElementById('wonky-suggestions');
    const autoApply = document.getElementById('wonky-auto-apply');
    const guidedToggle = document.getElementById('wonky-guided-toggle');
    const remoteToggle = document.getElementById('wonky-enable-remote');

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

    // wire remote toggle
    if (remoteToggle) {
      // reflect stored state
      updateRemoteBadge(isRemoteEnabled());
      remoteToggle.addEventListener('click', () => {
        if (isRemoteEnabled()) {
          if (confirm('Disable remote AI? This will stop sending any text to remote services.')) {
            setRemoteEnabled(false);
            announce('Remote AI disabled');
          }
        } else {
          showConsentModal();
        }
      });
    }

    // Integrate Wonky AI across the site: inject ask buttons, modal, and keyboard shortcuts
    injectAskButtons();
    createModal();
    keyboardShortcuts();

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
