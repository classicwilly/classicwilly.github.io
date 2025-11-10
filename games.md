---
layout: default
title: Stim Station
---

<div style="text-align: center; margin-bottom: 3rem;">
  <h1 style="font-size: 2.5rem; margin-bottom: 1.5rem;">🎮 <span style="color: var(--yellow);">Stim Station</span></h1>
  <p style="color: var(--text-light); font-size: 1.1rem;">Neurodivergent-friendly games for when you need to zone out.</p>
  <p style="color: var(--text-light); font-size: 0.95rem; margin-top: 0.5rem; margin-bottom: 1rem;">No scores. No timers. No pressure.</p>
  <div style="height: 1px; width: 100%; background: var(--circuit-teal); opacity: 0.3;"></div>
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

<style>
  .game-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
  }

  .game-card {
    background: var(--card-dark);
    border: 2px solid var(--border-gray);
    border-radius: 12px;
    padding: 2rem;
  }

  .game-card h2 {
    color: var(--circuit-teal);
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }

  .game-card p {
    color: var(--text-light);
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
  }

  /* Button Clicker */
  .clicker-game {
    text-align: center;
  }

  .big-click-button {
    width: 200px;
    height: 200px;
    font-size: 1.5rem;
    font-weight: 700;
    background: var(--circuit-teal);
    color: var(--darker-bg);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.1s ease;
    font-family: 'IBM Plex Mono', monospace;
  }

  .big-click-button:hover {
    background: var(--sprout-green);
    transform: scale(1.05);
  }

  .big-click-button:active {
    transform: scale(0.95);
  }

  .click-count {
    font-size: 2rem;
    color: var(--text-bright);
    margin: 1.5rem 0;
    font-family: 'IBM Plex Mono', monospace;
  }

  /* Balloon Popper */
  .balloon-container {
    position: relative;
    height: 400px;
    background: linear-gradient(to bottom, #1a1f2e 0%, #0d1117 100%);
    border: 2px solid var(--border-gray);
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 1rem;
  }

  .balloon {
    position: absolute;
    width: 50px;
    height: 60px;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    cursor: pointer;
    transition: transform 0.1s ease;
    animation: float 8s ease-in-out infinite;
  }

  .balloon:hover {
    transform: scale(1.1);
  }

  .balloon::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    width: 2px;
    height: 15px;
    background: rgba(255,255,255,0.3);
  }

  @keyframes float {
    0% {
      transform: translateY(0) translateX(0);
    }
    25% {
      transform: translateY(-100px) translateX(10px);
    }
    50% {
      transform: translateY(-200px) translateX(-5px);
    }
    75% {
      transform: translateY(-300px) translateX(8px);
    }
    100% {
      transform: translateY(-450px) translateX(0);
    }
  }

  .balloon-stats, .bubble-stats {
    display: flex;
    gap: 2rem;
    justify-content: center;
    margin: 1rem 0;
    color: var(--text-light);
    font-family: 'IBM Plex Mono', monospace;
  }

  /* Bubble Wrap */
  .bubble-grid {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 5px;
    margin-bottom: 1rem;
  }

  .bubble {
    aspect-ratio: 1;
    background: radial-gradient(circle at 30% 30%, rgba(26,188,156,0.3), rgba(26,188,156,0.1));
    border: 2px solid var(--circuit-teal);
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.1s ease;
  }

  .bubble:hover {
    background: radial-gradient(circle at 30% 30%, rgba(26,188,156,0.5), rgba(26,188,156,0.2));
    transform: scale(1.1);
  }

  .bubble.popped {
    background: var(--card-dark);
    border-color: var(--border-gray);
    cursor: default;
    transform: scale(0.8);
  }

  .bubble.popped:hover {
    transform: scale(0.8);
  }

  /* Color Mixer */
  .color-display {
    width: 100%;
    height: 200px;
    border: 2px solid var(--border-gray);
    border-radius: 8px;
    margin-bottom: 1rem;
    background: #808080;
    transition: background 0.3s ease;
  }

  .color-controls {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .color-controls label {
    color: var(--text-light);
    font-family: 'IBM Plex Mono', monospace;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .color-controls input[type="range"] {
    flex: 1;
    height: 8px;
    background: var(--border-gray);
    border-radius: 4px;
    outline: none;
  }

  .color-controls input[type="range"]::-webkit-slider-thumb {
    width: 20px;
    height: 20px;
    background: var(--circuit-teal);
    cursor: pointer;
    border-radius: 50%;
  }

  .color-code {
    text-align: center;
    color: var(--text-bright);
    font-family: 'IBM Plex Mono', monospace;
    font-size: 1.2rem;
    margin: 1rem 0;
  }

  /* Buttons */
  .spawn-button, .reset-button {
    font-family: 'IBM Plex Mono', monospace;
    padding: 0.75rem 1.5rem;
    border: 2px solid var(--circuit-teal);
    background: transparent;
    color: var(--circuit-teal);
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
    margin: 0.25rem;
  }

  .spawn-button:hover {
    background: var(--circuit-teal);
    color: var(--darker-bg);
  }

  .reset-button {
    border-color: var(--accent-orange);
    color: var(--accent-orange);
  }

  .reset-button:hover {
    background: var(--accent-orange);
    color: var(--darker-bg);
  }
</style>

<script>
  // Button Clicker
  let clicks = 0;
  const clickButton = document.getElementById('clickButton');
  const clickCount = document.getElementById('clickCount');
  const resetClicker = document.getElementById('resetClicker');

  // Load saved clicks
  if (localStorage.getItem('stim_clicks')) {
    clicks = parseInt(localStorage.getItem('stim_clicks'));
    clickCount.textContent = clicks;
  }

  clickButton.addEventListener('click', () => {
    clicks++;
    clickCount.textContent = clicks;
    localStorage.setItem('stim_clicks', clicks);
    
    // Fun effect
    clickButton.style.background = `hsl(${clicks % 360}, 70%, 50%)`;
  });

  resetClicker.addEventListener('click', () => {
    clicks = 0;
    clickCount.textContent = clicks;
    localStorage.setItem('stim_clicks', clicks);
    clickButton.style.background = 'var(--circuit-teal)';
  });

  // Balloon Popper
  let popped = 0;
  const balloonContainer = document.getElementById('balloonContainer');
  const poppedCount = document.getElementById('poppedCount');
  const activeCount = document.getElementById('activeCount');
  const spawnBalloon = document.getElementById('spawnBalloon');
  const spawnMany = document.getElementById('spawnMany');
  const resetBalloons = document.getElementById('resetBalloons');

  const balloonColors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#a29bfe', '#fd79a8', '#fdcb6e'];

  function createBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.background = balloonColors[Math.floor(Math.random() * balloonColors.length)];
    balloon.style.left = Math.random() * (balloonContainer.offsetWidth - 50) + 'px';
    balloon.style.bottom = '0px';
    balloon.style.animationDuration = (6 + Math.random() * 4) + 's';
    
    balloon.addEventListener('click', () => {
      balloon.style.animation = 'none';
      balloon.style.transform = 'scale(0)';
      setTimeout(() => balloon.remove(), 200);
      popped++;
      poppedCount.textContent = popped;
      updateActiveCount();
    });

    balloonContainer.appendChild(balloon);
    updateActiveCount();

    // Auto-remove after animation
    setTimeout(() => {
      if (balloon.parentNode) {
        balloon.remove();
        updateActiveCount();
      }
    }, parseFloat(balloon.style.animationDuration) * 1000);
  }

  function updateActiveCount() {
    activeCount.textContent = balloonContainer.children.length;
  }

  spawnBalloon.addEventListener('click', createBalloon);
  spawnMany.addEventListener('click', () => {
    for (let i = 0; i < 10; i++) {
      setTimeout(createBalloon, i * 100);
    }
  });

  resetBalloons.addEventListener('click', () => {
    balloonContainer.innerHTML = '';
    popped = 0;
    poppedCount.textContent = popped;
    updateActiveCount();
  });

  // Bubble Wrap
  let bubblesPoppedCount = 0;
  const bubbleGrid = document.getElementById('bubbleGrid');
  const bubbleCount = document.getElementById('bubbleCount');
  const resetBubbles = document.getElementById('resetBubbles');

  function createBubbleGrid() {
    bubbleGrid.innerHTML = '';
    bubblesPoppedCount = 0;
    bubbleCount.textContent = bubblesPoppedCount;

    for (let i = 0; i < 80; i++) {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      bubble.addEventListener('click', function() {
        if (!this.classList.contains('popped')) {
          this.classList.add('popped');
          bubblesPoppedCount++;
          bubbleCount.textContent = bubblesPoppedCount;
          
          // Play pop sound effect (visual feedback)
          this.style.transition = 'all 0.1s ease';
        }
      });
      bubbleGrid.appendChild(bubble);
    }
  }

  createBubbleGrid();
  resetBubbles.addEventListener('click', createBubbleGrid);

  // Color Mixer
  const colorDisplay = document.getElementById('colorDisplay');
  const redSlider = document.getElementById('redSlider');
  const greenSlider = document.getElementById('greenSlider');
  const blueSlider = document.getElementById('blueSlider');
  const colorCode = document.getElementById('colorCode');
  const randomColor = document.getElementById('randomColor');

  function updateColor() {
    const r = parseInt(redSlider.value);
    const g = parseInt(greenSlider.value);
    const b = parseInt(blueSlider.value);
    const hex = '#' + [r, g, b].map(x => {
      const hex = x.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }).join('');
    
    colorDisplay.style.background = hex;
    colorCode.textContent = hex;
  }

  redSlider.addEventListener('input', updateColor);
  greenSlider.addEventListener('input', updateColor);
  blueSlider.addEventListener('input', updateColor);

  randomColor.addEventListener('click', () => {
    redSlider.value = Math.floor(Math.random() * 256);
    greenSlider.value = Math.floor(Math.random() * 256);
    blueSlider.value = Math.floor(Math.random() * 256);
    updateColor();
  });
</script>

---

**No rules. No winning. No losing. Just stim.**
