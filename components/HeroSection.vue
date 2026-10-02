<template>
  <section id="top" class="hero">
    <div class="container hero-inner">
      <h1>AK Games</h1>
      <p class="hero-offer">Small studio, craft-built casino slots.</p>
      <p class="hero-lead">
        We design and build slot games with the care of a boutique studio —
        for operators and partners who value quality over volume.
      </p>
      <div class="hero-actions">
        <a href="#contact" class="btn btn-primary hero-cta">
          <svg class="reel-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
            <g class="reel-col">
              <rect x="2" y="4" width="5.4" height="16" rx="1.6" fill="rgba(255,255,255,0.85)" />
              <circle cx="4.7" cy="9.2" r="1.1" class="reel-dot" />
              <circle cx="4.7" cy="12.2" r="1.1" class="reel-dot" />
              <circle cx="4.7" cy="15.2" r="1.1" class="reel-dot" />
            </g>
            <g class="reel-col reel-col-2">
              <rect x="9.3" y="4" width="5.4" height="16" rx="1.6" fill="rgba(255,255,255,0.85)" />
              <circle cx="12" cy="9.2" r="1.1" class="reel-dot" />
              <circle cx="12" cy="12.2" r="1.1" class="reel-dot" />
              <circle cx="12" cy="15.2" r="1.1" class="reel-dot" />
            </g>
            <g class="reel-col reel-col-3">
              <rect x="16.6" y="4" width="5.4" height="16" rx="1.6" fill="rgba(255,255,255,0.85)" />
              <circle cx="19.3" cy="9.2" r="1.1" class="reel-dot" />
              <circle cx="19.3" cy="12.2" r="1.1" class="reel-dot" />
              <circle cx="19.3" cy="15.2" r="1.1" class="reel-dot" />
            </g>
          </svg>
          Get in touch
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-block: var(--space-7) var(--space-6);
}

.hero-inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-1);
}

.hero-offer {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(1.15rem, 2.4vw, 1.5rem);
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--gold);
  margin-top: var(--space-2);
}

.hero-lead {
  font-size: 1.1rem;
  color: var(--ink-soft);
  margin-top: var(--space-2);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-3);
}

.hero-cta.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.05rem;
  padding: 0.95rem 2rem;
}

.reel-icon {
  flex: none;
  overflow: visible;
}

.reel-dot {
  fill: var(--gold-bright);
}

.hero-cta.btn-primary:hover {
  background: var(--green);
  box-shadow: 0 0 0 1px var(--gold), 0 0 18px rgba(201, 160, 46, 0.28);
}

.hero-cta.btn-primary:hover .reel-col {
  animation: reel-roll 0.5s ease-out;
}

.hero-cta.btn-primary:hover .reel-col-2 {
  animation-delay: 0.09s;
}

.hero-cta.btn-primary:hover .reel-col-3 {
  animation-delay: 0.18s;
}

@keyframes reel-roll {
  0% { transform: translateY(0); }
  35% { transform: translateY(-3px); }
  100% { transform: translateY(0); }
}

@media (max-width: 640px) {
  .hero {
    padding-block: var(--space-5) var(--space-5);
  }

  .hero-cta.btn-primary {
    font-size: 0.95rem;
    padding: 0.8rem 1.4rem;
  }
}
</style>
