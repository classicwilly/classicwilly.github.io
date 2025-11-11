---
layout: default
title: Stim Station
---
 
<div class="game-header">
  <h1>🎮 <span class="game-title-accent">Stim Station</span></h1>
  <div class="game-header-divider"></div>
  <p>Neurodivergent-friendly games for when you need to zone out.</p>
  <p class="text-sm my-3">No scores. No timers. No pressure.</p>
  <div class="game-header-sub-divider"></div>
</div>

<div class="game-container">
  <div class="game-card">
    <h2>Button Clicker</h2>
    <p>Click the button. That's it. Watch the number go up.</p>
    <div class="clicker-game">
      <button id="clickButton" class="big-click-button">CLICK ME</button>
      <div class="click-count">Clicks: <span id="clickCount">0</span></div>
      <button id="resetClicker" class="reset-button">Reset</button>
    </div>
  </div>

  <div class="game-card">
    <h2>Balloon Popper</h2>
    <p>Click balloons to pop them. They float up. That's the whole game.</p>
    <div class="balloon-game">
      <div id="balloonContainer" class="balloon-container"></div>
      <div class="balloon-stats">
        <div>Popped: <span id="poppedCount">0</span></div>
        <div>Active: <span id="activeCount">0</span></div>
      </div>
      <button id="spawnBalloon" class="spawn-button">Spawn Balloon</button>
      <button id="spawnMany" class="spawn-button">Spawn 10</button>
      <button id="resetBalloons" class="reset-button">Clear All</button>
    </div>
  </div>

  <div class="game-card">
    <h2>Bubble Wrap</h2>
    <p>Pop virtual bubble wrap. Infinite bubbles. Satisfying clicks.</p>
    <div class="bubble-game">
      <div id="bubbleGrid" class="bubble-grid"></div>
      <div class="bubble-stats">Popped: <span id="bubbleCount">0</span></div>
      <button id="resetBubbles" class="reset-button">New Sheet</button>
    </div>
  </div>

  <div class="game-card">
    <h2>Color Mixer</h2>
    <p>Mix colors. No goal. Just pretty colors.</p>
    <div class="color-game">
      <div id="colorDisplay" class="color-display"></div>
      <div class="color-controls">
        <label>Red: <input type="range" id="redSlider" min="0" max="255" value="128"></label>
        <label>Green: <input type="range" id="greenSlider" min="0" max="255" value="128"></label>
        <label>Blue: <input type="range" id="blueSlider" min="0" max="255" value="128"></label>
      </div>
      <div class="color-code">Color: <span id="colorCode">#808080</span></div>
      <button id="randomColor" class="spawn-button">Random Color</button>
    </div>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  // --- Button Clicker Game ---
  (() => {
    const clickButton = document.getElementById('clickButton');
    const clickCountEl = document.getElementById('clickCount');
    const resetClicker = document.getElementById('resetClicker');
    if (!clickButton) return;

    let clicks = parseInt(localStorage.getItem('stim_clicks')) || 0;
    clickCountEl.textContent = clicks;

    clickButton.addEventListener('click', () => {
      clicks++;
      clickCountEl.textContent = clicks;
      localStorage.setItem('stim_clicks', clicks);
      clickButton.style.background = `hsl(${clicks % 360}, 70%, 50%)`;
    });

    resetClicker.addEventListener('click', () => {
      clicks = 0;
      clickCountEl.textContent = clicks;
      localStorage.setItem('stim_clicks', clicks);
      clickButton.style.background = 'var(--circuit-teal)';
    });
  })();

  // --- Balloon Popper Game ---
  (() => {
    const balloonContainer = document.getElementById('balloonContainer');
    if (!balloonContainer) return;

    let popped = 0;
    const poppedCountEl = document.getElementById('poppedCount');
    const activeCountEl = document.getElementById('activeCount');
    const spawnBalloonBtn = document.getElementById('spawnBalloon');
    const spawnManyBtn = document.getElementById('spawnMany');
    const resetBalloonsBtn = document.getElementById('resetBalloons');
    const balloonColors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#a29bfe', '#fd79a8', '#fdcb6e'];

    function updateActiveCount() {
      activeCountEl.textContent = balloonContainer.children.length;
    }

    function createBalloon() {
      const balloon = document.createElement('div');
      balloon.className = 'balloon';
      balloon.style.background = balloonColors[Math.floor(Math.random() * balloonColors.length)];
      balloon.style.left = Math.random() * (balloonContainer.offsetWidth - 50) + 'px';
      balloon.style.bottom = '0px';
      const duration = 6 + Math.random() * 4;
      balloon.style.animationDuration = duration + 's';

      balloon.addEventListener('click', () => {
        balloon.style.animation = 'none';
        balloon.style.transition = 'transform 0.2s ease-out';
        balloon.style.transform = 'scale(0)';
        setTimeout(() => balloon.remove(), 200);
        popped++;
        poppedCountEl.textContent = popped;
        updateActiveCount();
      }, { once: true });

      balloonContainer.appendChild(balloon);
      updateActiveCount();

      setTimeout(() => {
        if (balloon.parentNode) {
          balloon.remove();
          updateActiveCount();
        }
      }, duration * 1000);
    }

    spawnBalloonBtn.addEventListener('click', createBalloon);
    spawnManyBtn.addEventListener('click', () => {
      for (let i = 0; i < 10; i++) {
        setTimeout(createBalloon, i * 100);
      }
    });

    resetBalloonsBtn.addEventListener('click', () => {
      balloonContainer.innerHTML = '';
      popped = 0;
      poppedCountEl.textContent = popped;
      updateActiveCount();
    });
  })();

  // --- Bubble Wrap Game ---
  (() => {
    const bubbleGrid = document.getElementById('bubbleGrid');
    if (!bubbleGrid) return;

    const bubbleCountEl = document.getElementById('bubbleCount');
    const resetBubblesBtn = document.getElementById('resetBubbles');
    let bubblesPoppedCount = 0;

    function createBubbleGrid() {
      bubbleGrid.innerHTML = '';
      bubblesPoppedCount = 0;
      bubbleCountEl.textContent = bubblesPoppedCount;

      for (let i = 0; i < 80; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.addEventListener('click', function() {
          if (!this.classList.contains('popped')) {
            this.classList.add('popped');
            bubblesPoppedCount++;
            bubbleCountEl.textContent = bubblesPoppedCount;
          }
        }, { once: true });
        bubbleGrid.appendChild(bubble);
      }
    }

    createBubbleGrid();
    resetBubblesBtn.addEventListener('click', createBubbleGrid);
  })();

  // --- Color Mixer Game ---
  (() => {
    const colorDisplay = document.getElementById('colorDisplay');
    if (!colorDisplay) return;

    const redSlider = document.getElementById('redSlider');
    const greenSlider = document.getElementById('greenSlider');
    const blueSlider = document.getElementById('blueSlider');
    const colorCodeEl = document.getElementById('colorCode');
    const randomColorBtn = document.getElementById('randomColor');

    function updateColor() {
      const r = parseInt(redSlider.value);
      const g = parseInt(greenSlider.value);
      const b = parseInt(blueSlider.value);
      const hex = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
      colorDisplay.style.background = hex;
      colorCodeEl.textContent = hex;
    }

    [redSlider, greenSlider, blueSlider].forEach(slider => slider.addEventListener('input', updateColor));

    randomColorBtn.addEventListener('click', () => {
      redSlider.value = Math.floor(Math.random() * 256);
      greenSlider.value = Math.floor(Math.random() * 256);
      blueSlider.value = Math.floor(Math.random() * 256);
      updateColor();
    });

    updateColor(); // Initial color set
  })();
});
</script>

---

**No rules. No winning. No losing. Just stim.**
