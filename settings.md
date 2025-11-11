---
layout: default
title: Settings & Contact - The Wonky Sprout
---

<div class="settings-header">
  <h1>⚙️ <span class="header-accent">Settings & Contact</span></h1>
  <div class="header-divider"></div>
  <p>System preferences, contact info, and site details.</p>
  <p class="text-sm">Configure your Wonky Sprout experience.</p>
</div>

---

## 👤 About classicwilly

<div class="about-card">
  <div class="about-icon">🌱</div>
  <div class="about-content">
    <h3>William Johnson (classicwilly)</h3>
    <p>
        40-year-old systems diagnostician. Late-diagnosed Autism/ADHD. Full-time dad navigating neurodivergent life through structured protocols.
    </p>
    <p>
      <strong class="philosophy-accent">Philosophy:</strong> "I fix stuff." Structure over chaos. Anti-BS. If it doesn't work for neurodivergent brains under real-world stress, it doesn't belong here.
    </p>
  </div>
</div>

---

## 📬 Contact

<div class="contact-grid">
  <div class="contact-card email">
    <div class="contact-icon">📧</div>
    <h3>Email</h3>
    <p>Direct communication</p>
    <a href="mailto:contact@wonkysprout.com">contact@wonkysprout.com</a>
  </div>

  <div class="contact-card github">
    <div class="contact-icon">🐙</div>
    <h3>GitHub</h3>
    <p>Repository and issues</p>
    <a href="https://github.com/classicwilly" target="_blank" rel="noopener noreferrer">@classicwilly</a>
  </div>

  <div class="contact-card feedback">
    <div class="contact-icon">💬</div>
    <h3>Feedback</h3>
    <p>Suggest improvements</p>
    <a href="https://github.com/classicwilly/classicwilly.github.io/issues" target="_blank" rel="noopener noreferrer">Open an issue →</a>
  </div>
</div>

<div class="about-card" style="border-color: var(--orange);">
  <h3 style="color: var(--orange);">⚠️ Response Time Expectations</h3>
  <p>
    I'm a solo parent with Autism/ADHD managing Priority #5 (children) above all else. Responses may take 3-7 days depending on current mode (Solo Execution vs. Family Structure). Emergency protocol overrides suspend all non-critical communication. Thanks for understanding.
  </p>
</div>

---

## 🎨 Site Preferences

<div class="about-card" style="border-color: var(--teal);">
  <h3 style="color: var(--teal);">Theme Settings</h3>
  
  <div class="form-group">
    <label for="theme-select" class="form-label">Color Scheme:</label>
    <select id="theme-select" class="form-select">
      <option value="dark">Dark Mode (Default)</option>
      <option value="auto">Auto (System Preference)</option>
    </select>
  </div>
  
  <div class="form-group">
    <label for="font-size-select" class="form-label">Font Size:</label>
    <select id="font-size-select" class="form-select">
      <option value="normal">Normal (Default)</option>
      <option value="large">Large (+2px)</option>
      <option value="xlarge">Extra Large (+4px)</option>
    </select>
  </div>
  
  <div class="form-group">
    <label class="form-label">Reduced Motion:</label>
    <label class="form-checkbox-group">
      <input type="checkbox" id="reduced-motion">
      <span>Disable animations (for vestibular/sensory sensitivity)</span>
    </label>
  </div>
  
  <button onclick="savePreferences()" class="btn btn-primary" style="width: 100%; margin-top: 1.5rem;">
    💾 Save Preferences
  </button>
  
  <div id="pref-status" class="form-status" style="display: none;">
    <p id="pref-message"></p>
  </div>
</div>

---

## 📊 Data & Privacy

<div class="about-card" style="border-color: var(--purple);">
  <h3 style="color: var(--purple);">Local Storage Data</h3>
  
  <p>
    The Wonky Sprout stores all tracker data and preferences locally in your browser using localStorage. <strong>Nothing is sent to external servers.</strong> Your data never leaves your device.
  </p>
  
  <!-- ... content for stored/not collected data ... -->
  
  <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; width: 100%;">
    <button onclick="exportData()" class="btn btn-secondary" style="flex: 1; min-width: 180px;">
      📤 Export Data (JSON)
    </button>
    <button onclick="clearAllData()" class="btn btn-danger" style="flex: 1; min-width: 180px;">
      🗑️ Clear All Data
    </button>
  </div>
  
  <div id="data-status" class="form-status" style="display: none;">
    <p id="data-message"></p>
  </div>
</div>

---

## 🔧 Technical Details

<!-- ... Technical Details section ... -->

---

## 📚 Resources

<!-- ... Resources section ... -->

---

## 🌱 The Wonky Sprout Philosophy

<!-- ... Philosophy section ... -->

---

<!-- ... Final section ... -->

<script>
// Load saved preferences on page load
document.addEventListener('DOMContentLoaded', function() {
  loadPreferences();
});

function loadPreferences() {
  const prefs = JSON.parse(localStorage.getItem('wonky-sprout-preferences') || '{}');
  
  if (prefs.theme) {
    document.getElementById('theme-select').value = prefs.theme;
  }
  
  if (prefs.fontSize) {
    document.getElementById('font-size-select').value = prefs.fontSize;
    applyFontSize(prefs.fontSize);
  }
  
  if (prefs.reducedMotion) {
    document.getElementById('reduced-motion').checked = true;
    applyReducedMotion(true);
  }
}

function savePreferences() {
  const prefs = {
    theme: document.getElementById('theme-select').value,
    fontSize: document.getElementById('font-size-select').value,
    reducedMotion: document.getElementById('reduced-motion').checked
  };
  
  localStorage.setItem('wonky-sprout-preferences', JSON.stringify(prefs));
  
  // Apply preferences
  applyFontSize(prefs.fontSize);
  applyReducedMotion(prefs.reducedMotion);
  
  // Show success message
  const statusDiv = document.getElementById('pref-status');
  const messageEl = document.getElementById('pref-message');
  statusDiv.style.display = 'block';
  messageEl.textContent = '✅ Preferences saved! Changes applied.';
  
  setTimeout(() => {
    statusDiv.style.display = 'none';
  }, 3000);
}

function applyFontSize(size) {
  const root = document.documentElement;
  
  switch(size) {
    case 'large':
      root.style.fontSize = '18px';
      break;
    case 'xlarge':
      root.style.fontSize = '20px';
      break;
    default:
      root.style.fontSize = '16px';
  }
}

function applyReducedMotion(enabled) {
  if (enabled) {
    document.documentElement.style.setProperty('--transition-speed', '0s');
  } else {
    document.documentElement.style.setProperty('--transition-speed', '0.3s');
  }
}

function exportData() {
  const data = {};
  
  // Collect all localStorage data
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('wonky-sprout') || key.includes('tracker') || key.includes('legal-threat')) {
      data[key] = localStorage.getItem(key);
    }
  }
  
  // Create downloadable JSON
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `wonky-sprout-data-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
  
  // Show success message
  const statusDiv = document.getElementById('data-status');
  const messageEl = document.getElementById('data-message');
  statusDiv.style.display = 'block';
  messageEl.textContent = '✅ Data exported! JSON file downloaded.';
  
  setTimeout(() => {
    statusDiv.style.display = 'none';
  }, 3000);
}

function clearAllData() {
  if (!confirm('⚠️ This will delete ALL tracker data, checkboxes, and preferences. Are you sure?')) {
    return;
  }
  
  if (!confirm('🚨 FINAL WARNING: This cannot be undone. Export your data first if you want a backup.')) {
    return;
  }
  
  // Clear all Wonky Sprout data
  const keysToRemove = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('wonky-sprout') || key.includes('tracker') || key.includes('legal-threat')) {
      keysToRemove.push(key);
    }
  }
  
  keysToRemove.forEach(key => localStorage.removeItem(key));
  
  // Show success message
  const statusDiv = document.getElementById('data-status');
  const messageEl = document.getElementById('data-message');
  statusDiv.style.display = 'block';
  messageEl.textContent = `✅ Cleared ${keysToRemove.length} items. Page will reload in 2 seconds...`;
  
  setTimeout(() => {
    location.reload();
  }, 2000);
}
</script>
