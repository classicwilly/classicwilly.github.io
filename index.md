---
layout: default
title: Home - The Wonky Sprout
---

<div style="text-align: center; margin-bottom: 3rem;">
  <h1 style="font-size: 2.5rem; margin: 0.16rem 0 1.16rem 0; border-bottom: none !important;">🧩 <span style="color: var(--circuit-teal);">ClassicWilly</span></h1>
  <div style="height: 2px; width: 100%; background: linear-gradient(90deg, var(--blue), var(--purple), var(--pink), var(--yellow)); margin-bottom: 2.16rem;"></div>
  <p style="color: var(--text-light); font-size: 1.1rem; margin: 0;">A neurodivergent father engineering structure from chaos</p>
</div>

---

<style>
  .journey-path {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem 1rem;
  }
  
  .path-line {
    position: absolute;
    left: 50%;
    top: 0;
    width: 4px;
    height: 100%;
    transform: translateX(-50%);
    background: linear-gradient(180deg, 
      var(--circuit-teal) 0%, 
      var(--purple) 25%, 
      var(--orange) 50%, 
      var(--yellow) 75%, 
      var(--green) 100%
    );
    opacity: 0.3;
    z-index: 0;
  }
  
  .story-card {
    position: relative;
    background: var(--card-dark);
    border-radius: 16px;
    padding: 2rem;
    margin-bottom: 4rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
    transition: all 0.4s ease;
    z-index: 1;
    opacity: 0;
    transform: translateY(30px);
  }
  
  .story-card.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .story-card:hover {
    transform: scale(1.02) translateY(-5px);
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.7);
  }
  
  .story-card.left {
    margin-right: 55%;
    border-left: 6px solid var(--accent);
  }
  
  .story-card.right {
    margin-left: 55%;
    border-right: 6px solid var(--accent);
  }
  
  .story-card.center {
    margin: 0 auto 4rem;
    max-width: 700px;
    border: 3px solid var(--accent);
  }
  
  .story-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5));
    animation: float 3s ease-in-out infinite;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  .story-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 2rem;
    margin-bottom: 1rem;
    color: var(--accent);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  .story-highlight {
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--text-bright);
    line-height: 1.7;
    margin-bottom: 1rem;
  }
  
  .story-text {
    line-height: 1.8;
    color: var(--text-light);
    margin-bottom: 1rem;
  }
  
  .story-emphasis {
    color: var(--accent);
    font-weight: 600;
  }
  
  .chapter-marker {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 60px;
    background: var(--accent);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8), 0 0 40px var(--accent-glow);
    z-index: 2;
    animation: pulse 2s ease-in-out infinite;
    margin: 3rem auto 2rem;
  }
  
  @keyframes pulse {
    0%, 100% { transform: translateX(-50%) scale(1); }
    50% { transform: translateX(-50%) scale(1.1); }
  }
  
  @media (max-width: 768px) {
    .story-card.left,
    .story-card.right {
      margin-left: 0;
      margin-right: 0;
      border-left: 6px solid var(--accent);
      border-right: none;
    }
    
    .path-line {
      left: 1rem;
    }
    
    .chapter-marker {
      left: 1rem;
    }
  }
</style>

<div class="journey-path">
  <div class="path-line"></div>
  
  <!-- Chapter 1: The Diagnosis -->
  <div class="chapter-marker" style="--accent: var(--circuit-teal); --accent-glow: rgba(26, 188, 156, 0.5);">
    🔍
  </div>
  
  <div class="story-card left" style="--accent: var(--circuit-teal);">
    <div class="story-icon">🧩</div>
    <h2 class="story-title">The Diagnosis</h2>
    <p class="story-highlight">At forty years old, the unwritten script of my entire life was finally given a title: Autism and ADHD.</p>
  </div>
  
  <div class="story-card right" style="--accent: var(--circuit-teal);">
    <p class="story-text">For decades, I was simply the "fixer." The 15-year Navy Systems Diagnostician who could build a blueprint for any complex machine, but couldn't find the blueprint for the unstructured chaos in my own head.</p>
  </div>
  
  <div class="story-card left" style="--accent: var(--circuit-teal);">
    <p class="story-text">I was the one called a <span class="story-emphasis">"hothead"</span> in the office. The socially awkward engineer who avoided group projects, running my life on an operating system that was constantly overheating into autistic burnout.</p>
  </div>
  
  <div class="story-card center" style="--accent: var(--purple);">
    <p class="story-highlight">That diagnosis wasn't a failure. It was the key.</p>
    <p class="story-text">I wasn't broken; I was just running on a different architecture. It was the <span class="story-emphasis">feature</span>, not the bug, that explains why I see the patterns in the noise.</p>
  </div>
  
  <!-- Chapter 2: The Shift -->
  <div class="chapter-marker" style="--accent: var(--orange); --accent-glow: rgba(255, 152, 0, 0.5);">
    ⚡
  </div>
  
  <div class="story-card right" style="--accent: var(--orange);">
    <div class="story-icon">👨‍👧‍👦</div>
    <h2 class="story-title">The Shift</h2>
    <p class="story-highlight">But this isn't just my story anymore. I am not just a fixer—I am a father.</p>
  </div>
  
  <div class="story-card left" style="--accent: var(--orange);">
    <p class="story-text">I have two <span class="story-emphasis">"wonky sprouts"</span> of my own—a nine-year-old son and a six-year-old daughter. I see my own energy, my own chaos, my own need for structure reflected in them.</p>
  </div>
  
  <div class="story-card right" style="--accent: var(--orange);">
    <p class="story-text">I see them navigating the same unwritten script that I did, and my pursuit is no longer just about fixing machines.</p>
    <p class="story-highlight">It's about being the father they deserve.</p>
  </div>
  
  <div class="story-card center" style="--accent: var(--pink);">
    <p class="story-text">I can't give them a map I was never given.</p>
    <p class="story-highlight">So, we are learning to draw one together.</p>
  </div>
  
  <!-- Chapter 3: The Blueprint -->
  <div class="chapter-marker" style="--accent: var(--yellow); --accent-glow: rgba(255, 193, 7, 0.5);">
    🌱
  </div>
  
  <div class="story-card left" style="--accent: var(--yellow);">
    <div class="story-icon">🛡️</div>
    <h2 class="story-title">The Blueprint</h2>
    <p class="story-text">We are building our own <span class="story-emphasis">"bubble shield"</span> as a team. Finding the structure that makes our chaos feel safe.</p>
  </div>
  
  <div class="story-card right" style="--accent: var(--yellow);">
    <p class="story-highlight">This is The Wonky Sprout.</p>
    <p class="story-text">Our shared journey. The "Internal Blueprint" we are co-authoring for a world that wasn't built for us.</p>
  </div>
  
  <div class="story-card center" style="--accent: var(--green); border-width: 4px; background: linear-gradient(135deg, rgba(22, 27, 34, 0.95), rgba(13, 17, 23, 0.95)); box-shadow: 0 12px 48px rgba(46, 204, 113, 0.3);">
    <p class="story-highlight" style="font-size: 1.3rem; text-align: center;">The structure of a Systems Diagnostician, softened by the chaos of a neurodivergent father.</p>
    <p class="story-text" style="text-align: center; margin-bottom: 0; font-style: italic; color: var(--green);">A system that is strong, authentic, and has feeling.</p>
  </div>
</div>

<script>
  // Intersection Observer for scroll-triggered animations
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.story-card').forEach(card => {
    observer.observe(card);
  });
</script>

<div style="text-align: center; margin: 4rem auto; padding: 3rem; background: var(--darker-bg); border-radius: 12px; border: 2px solid var(--circuit-teal); max-width: 1200px;">
  <h2 style="font-size: 2.5rem; color: var(--circuit-teal); margin-bottom: 1rem;">It's okay to be a little wonky.</h2>
  <p style="font-size: 1.2rem; color: var(--text-light); margin-bottom: 2rem;">Welcome to our blueprint.</p>
  
  <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin: 0 auto;">
    <a href="/sop-vault" class="cta-button" style="border-color: var(--circuit-teal);">
      <div style="font-size: 2rem; margin-bottom: 0.5rem;">📚</div>
      <div>SOP Vault</div>
    </a>
    
    <a href="/kids" class="cta-button" style="border-color: var(--orange);">
      <div style="font-size: 2rem; margin-bottom: 0.5rem;">👨‍👧‍👦</div>
      <div>Kids Protocols</div>
    </a>
    
    <a href="/daily-tracker" class="cta-button" style="border-color: var(--yellow);">
      <div style="font-size: 2rem; margin-bottom: 0.5rem;">📊</div>
      <div>Daily Tracker</div>
    </a>
    
    <a href="/workspace" class="cta-button" style="border-color: var(--green);">
      <div style="font-size: 2rem; margin-bottom: 0.5rem;">🤖</div>
      <div>Workspace</div>
    </a>
    
    <a href="/catalog" class="cta-button" style="border-color: var(--blue);">
      <div style="font-size: 2rem; margin-bottom: 0.5rem;">📡</div>
      <div>M1: Media</div>
    </a>
    
    <a href="/catalog" class="cta-button" style="border-color: var(--purple);">
      <div style="font-size: 2rem; margin-bottom: 0.5rem;">⬡</div>
      <div>M2: Products</div>
    </a>
    
    <a href="/2025-11-09_M1_PAGE_manifesto-v2" class="cta-button" style="border-color: var(--pink);">
      <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔧</div>
      <div>M3: Service</div>
    </a>
    
    <a href="/sop-vault" class="cta-button" style="border-color: var(--orange);">
      <div style="font-size: 2rem; margin-bottom: 0.5rem;">🧠</div>
      <div>M4: Personal OS</div>
    </a>
  </div>
</div>

<style>
  @media (max-width: 1024px) {
    div[style*="grid-template-columns: repeat(4, 1fr)"] {
      grid-template-columns: repeat(3, 1fr) !important;
    }
  }
  
  @media (max-width: 768px) {
    div[style*="grid-template-columns: repeat(4, 1fr)"] {
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }
</style>

<script>
  // Populate status cards from localStorage
  (function() {
    // Get current mode (weekend/weekday)
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const isFriday = day === 5 && hour >= 16;
    const isMonday = day === 1 && hour < 18;
    const isWeekend = day === 0 || day === 6 || isFriday || isMonday;
    
    const modeEl = document.getElementById('status-mode');
    if (modeEl) {
      modeEl.textContent = isWeekend ? 'FAMILY' : 'SOLO';
      modeEl.style.color = isWeekend ? 'var(--orange)' : 'var(--circuit-teal)';
    }
    
    // Get streak from localStorage (daily tracker data)
    const streakEl = document.getElementById('status-streak');
    const trackerData = JSON.parse(localStorage.getItem('dailyTrackerData') || '{}');
    const dates = Object.keys(trackerData).sort();
    let currentStreak = 0;
    
    if (dates.length > 0) {
      const today = new Date().toISOString().split('T')[0];
      let checkDate = new Date(today);
      
      while (true) {
        const dateStr = checkDate.toISOString().split('T')[0];
        if (trackerData[dateStr]) {
          currentStreak++;
          checkDate.setDate(checkDate.getDate() - 1);
        } else {
          break;
        }
      }
    }
    
    if (streakEl) {
      streakEl.textContent = currentStreak > 0 ? currentStreak : '--';
    }
    
    // Get today's completed tasks
    const tasksEl = document.getElementById('status-tasks');
    const today = new Date().toISOString().split('T')[0];
    const todayData = trackerData[today];
    let completedTasks = 0;
    
    if (todayData) {
      // Count completed checkboxes
      completedTasks = Object.values(todayData).filter(v => v === true).length;
    }
    
    if (tasksEl) {
      tasksEl.textContent = completedTasks > 0 ? completedTasks : '--';
    }
    
    // Get energy level from today's tracker
    const energyEl = document.getElementById('status-energy');
    if (todayData && todayData.energyLevel) {
      energyEl.textContent = todayData.energyLevel + '/10';
    } else {
      energyEl.textContent = '--';
    }
  })();
</script>
