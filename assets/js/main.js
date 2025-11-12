// Interactive block-card behavior + accessible modal + touch quick-action
document.addEventListener('DOMContentLoaded', function () {
  // Single entry point for card behaviors
  const mainContent = document.querySelector('.main-content');

  // Helper: find first usable link inside a node
  const firstLink = (node) => node.querySelector && node.querySelector('a[href]:not([href^="javascript:"])');

  // New: Card creation logic from headings
  if (mainContent && !mainContent.closest('.no-card-creation')) {
    const headings = Array.from(mainContent.querySelectorAll('h2'));
    headings.forEach(h2 => {
      // Don't card-ify the quick jump section by checking its content
      if (h2.textContent.includes('QUICK JUMP')) return;

      const cardWrapper = document.createElement('div');
      cardWrapper.className = 'card block-card';
      cardWrapper.setAttribute('role', 'region');
      cardWrapper.setAttribute('tabindex', '0');
      cardWrapper.setAttribute('aria-labelledby', h2.id);

      mainContent.insertBefore(cardWrapper, h2);

      const content = [h2];
      let nextEl = h2.nextElementSibling;
      while (nextEl && nextEl.tagName !== 'H2') {
        content.push(nextEl);
        nextEl = nextEl.nextElementSibling;
      }

      content.forEach(el => cardWrapper.appendChild(el));

      // Make card clickable if it contains a link
      const link = firstLink(cardWrapper);
      if (link) {
        const href = link.getAttribute('href');
        cardWrapper.classList.add('is-clickable');
        cardWrapper.dataset.href = href;

        const navigate = () => { window.location.href = href; };

        cardWrapper.addEventListener('click', function (e) {
          const interactiveTags = ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT', 'LABEL'];
          if (e.target.closest(interactiveTags.join(','))) return;
          navigate();
        });

        cardWrapper.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') {
            // Allow spacebar for inputs
            if (e.key === ' ' && e.target.matches('input, textarea, button')) return;
            e.preventDefault();
            navigate();
          }
        });
      }
    });
  }

  // -----------------------------
  // Modal plumbing (accessible)
  // -----------------------------
  const modal = document.getElementById('card-modal');
  const modalBody = modal && modal.querySelector('.card-modal-body');
  const modalClose = modal && modal.querySelector('.card-modal-close');
  const modalOverlay = modal && modal.querySelector('.card-modal-overlay');
  let lastFocused = null;

  function openModal(html) {
    if (!modal || !modalBody) return;
    lastFocused = document.activeElement;
    modalBody.innerHTML = html || '';
    modal.removeAttribute('aria-hidden');
    modal.classList.add('open');
    document.body.classList.add('has-open-modal');
    if (modalClose) modalClose.focus();
    document.addEventListener('keydown', handleKeydown);
  }

  function closeModal() {
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'true');
    modal.classList.remove('open');
    document.body.classList.remove('has-open-modal');
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
    document.removeEventListener('keydown', handleKeydown);
    if (modalBody) modalBody.innerHTML = '';
  }

  function handleKeydown(e) {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'Tab' && modal && modal.classList.contains('open')) {
      const focusable = modal.querySelectorAll('a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

  // Attach click handlers for cards that contain hidden modal content
  document.querySelectorAll('.card').forEach(node => {
    try {
      const modalContent = node.querySelector && node.querySelector('.card-modal-content');
      if (modalContent) {
        node.addEventListener('click', function (e) {
          const interactiveTags = ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT', 'LABEL'];
          if (interactiveTags.includes(e.target.tagName)) return;
          e.preventDefault();
          openModal(modalContent.innerHTML);
        });
      }
    } catch (err) {
      // ignore individual node errors
    }
  });

  // Touch quick-action: open modal when .card-action is tapped
  document.addEventListener('click', function (e) {
    const action = e.target.closest && e.target.closest('.card-action');
    if (!action) return;
    const card = action.closest && action.closest('.card, a');
    if (!card) return;
    const modalContent = card.querySelector('.card-modal-content');
    if (modalContent) {
      e.preventDefault();
      openModal(modalContent.innerHTML);
    } else if (card.dataset && card.dataset.href) {
      // fallback: follow link if no modal content
      window.location.href = card.dataset.href;
    }
  });

  // -----------------------------
  // Accessibility Preferences (persisted)
  // -----------------------------
  function applyPrefClasses(prefs) {
    document.body.classList.toggle('pref-reduced-motion', !!prefs.reducedMotion);
    document.body.classList.toggle('pref-large-text', !!prefs.largeText);
    document.body.classList.toggle('pref-simplified', !!prefs.simplifiedView);
    document.body.classList.toggle('pref-high-contrast', !!prefs.highContrast);
  }

  function loadPrefs() {
    try { return JSON.parse(localStorage.getItem('ws_accessibility_prefs') || '{}'); }
    catch (e) { return {}; }
  }

  function savePrefs(prefs) {
    localStorage.setItem('ws_accessibility_prefs', JSON.stringify(prefs));
    applyPrefClasses(prefs);
  }

  // Render/accessibility panel include if present in DOM
  (function wireAccessibility() {
    // Insert include markup if not already present
    const includeEl = document.getElementById('accessibility-toggle');
    if (!includeEl) {
      // try to fetch the include fragment (server-side include already present on pages via include)
      const fragment = document.querySelector('#accessibility-panel');
      if (!fragment) return; // no panel on this page
    }

    const panel = document.getElementById('accessibility-panel');
    const toggle = document.getElementById('accessibility-toggle');
    const closeBtn = document.getElementById('accessibility-close');
    const resetBtn = document.getElementById('accessibility-reset');
    const inputs = panel && panel.querySelectorAll('input[data-pref]');

    const prefs = Object.assign({ reducedMotion: false, largeText: false, simplifiedView: false, highContrast: false }, loadPrefs());
    applyPrefClasses(prefs);

    if (!toggle || !panel) return;

    function openPanel() {
      panel.setAttribute('aria-hidden', 'false');
      toggle.setAttribute('aria-expanded', 'true');
      panel.classList.add('open');
      // set inputs
      if (inputs) inputs.forEach(i => { i.checked = !!prefs[i.dataset.pref]; });
    }

    function closePanel() {
      panel.setAttribute('aria-hidden', 'true');
      toggle.setAttribute('aria-expanded', 'false');
      panel.classList.remove('open');
    }

    toggle.addEventListener('click', function () { const expanded = toggle.getAttribute('aria-expanded') === 'true'; if (expanded) closePanel(); else openPanel(); });
    if (closeBtn) closeBtn.addEventListener('click', closePanel);

    if (inputs) inputs.forEach(inp => {
      inp.addEventListener('change', function () {
        prefs[inp.dataset.pref] = inp.checked;
        savePrefs(prefs);
      });
    });

    if (resetBtn) resetBtn.addEventListener('click', function (e) { e.preventDefault(); const newPrefs = { reducedMotion: false, largeText: false, simplifiedView: false, highContrast: false }; savePrefs(newPrefs); if (inputs) inputs.forEach(i => i.checked = false); });

    // close on Escape when open
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') panel && panel.classList.contains('open') && panel.setAttribute('aria-hidden', 'true'); });

  })();

});
