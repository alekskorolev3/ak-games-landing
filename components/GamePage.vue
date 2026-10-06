<template>
  <section class="game-section section" data-v-gamepage>
    <div class="container" data-v-gamepage>
      <div class="game-header" data-v-gamepage>
        <div class="game-cover" data-v-gamepage>
          <img
            src="/games/lizard-kings-gold.png"
            alt="Lizard Kings Gold game art"
            class="game-cover-img"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div class="game-body" data-v-gamepage>
          <h2 class="game-title" data-v-gamepage>Lizard Kings Gold</h2>

          <div class="game-meta" data-v-gamepage>
            <div class="game-chip" data-v-gamepiece>
              <span>LIVE</span>
            </div>

            <dl class="game-facts" data-v-gamepiece>
              <div class="fact-row" data-v-gamepiece>
                <dt class="fact-label" data-v-gamepiece>RTP</dt>
                <dd class="fact-value" data-v-gamepiece>96%</dd>
              </div>
              <div class="fact-row" data-v-gamepiece>
                <dt class="fact-label" data-v-gamepiece>Provider</dt>
                <dd class="fact-value" data-v-gamepiece>AK Games</dd>
              </div>
              <div class="fact-row" data-v-gamepiece>
                <dt class="fact-label" data-v-gamepiece>Theme</dt>
                <dd class="fact-value" data-v-gamepiece>Desert / Ancient Egypt</dd>
              </div>
            </dl>
          </div>

          <p class="game-description" data-v-gamepiece>
            Clean math, sharp art, desert theme. Lizard Kings Gold builds on the
            proven Hold & Win mechanic with crisp visuals and a focused feature
            set. Designed for operators who value math consistency and art quality
            over extravagant themes.
          </p>
        </div>
      </div>

      <div class="game-actions" data-v-gamepiece>
        <a
          href="#"
          class="btn btn-primary"
          data-v-gamepiece
          >Demo Play
        </a>
        <a
          href="#"
          class="btn btn-ghost"
          data-v-gamepiece
          >Info
        </a>
      </div>

      <div class="game-features" data-v-gamepiece>
        <h3 class="section-title" data-v-gamepiece>Key Features</h3>
        <ul class="feature-list" data-v-gamepiece>
          <li class="feature-item" data-v-gamepiece>
            <span class="feature-icon" data-v-gamepiece>◆</span>
            <span class="feature-text" data-v-gamepiece>
              Single-player experience with Hold & Win bonus round
            </span>
          </li>
          <li class="feature-item" data-v-gamepiece>
            <span class="feature-icon" data-v-gamepiece>◆</span>
            <span class="feature-text" data-v-gamepiece>
              Desert-themed symbols: lizards, gold relics, ancient icons
            </span>
          </li>
          <li class="feature-item" data-v-gamepiece>
            <span class="feature-icon" data-v-gamepiece>◆</span>
            <span class="feature-text" data-v-gamepiece>
              Gold Bonus Buy levels available
            </span>
          </li>
          <li class="feature-item" data-v-gamepiece>
            <span class="feature-icon" data-v-gamepiece>◆</span>
            <span class="feature-text" data-v-gamepiece>
              96% RTP, mathematically verified math model
            </span>
          </li>
        </ul>
      </div>

      <div class="promo-pack" data-v-gamepiece>
        <h3 class="section-title" data-v-gamepiece>Promo Pack</h3>
        <p class="promo-note" data-v-gamepiece>
          Press materials, screenshots, and game assets.
        </p>
        <a
          href="#"
          class="btn btn-ghost"
          data-v-gamepiece
          >Download assets
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
/* ---- Game Section ---- */
.game-section {
  padding: var(--space-8) 0 var(--space-5);
}

/* ---- Game Header ---- */
.game-header {
  display: grid;
  gap: var(--space-3);
}

@media (min-width: 900px) {
  .game-header {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 560px) {
  .game-header {
    grid-template-columns: 1fr;
  }
}

/* ---- Game Cover ---- */
.game-cover {
  position: relative;
  aspect-ratio: 320 / 480;
}

.game-cover-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius.md);
}

/* ---- Game Body ---- */
.game-body {
  background-color: var(--color-surface);
  padding: var(--space-3);
  border: 1px solid var(--color-line);
  border-radius: var(--radius.md);
}

.game-title {
  font-family: var(--font-display);
  font-weight: var(--font-weight-600);
  font-size: var(--font-size-title);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
  color: var(--color-ink);
  margin-bottom: var(--space-1);
  text-align: center;
}

.game-meta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: var(--space-2);
}

.game-chip {
  font-family: var(--font-chip);
  font-size: var(--font-size-chip);
  font-weight: var(--font-weight-chip);
  letter-spacing: var(--letter-spacing-chip);
  text-transform: uppercase;
  color: var(--color-white);
  background-color: var(--color-gold);
  border-radius: var(--radius-pill);
  padding: var(--space-05) var(--space-1);
  font-style: normal;
}

.game-facts {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  width: 100%;
  max-width: 200px;
}

.fact-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.fact-label {
  font-family: var(--font-body);
  font-size: var(--font-size-caption);
  font-weight: var(--font-weight-stamp);
  color: var(--color-ink-soft);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-stamp);
}

.fact-value {
  font-family: var(--font-body);
  font-size: var(--font-size-chrome);
  font-weight: var(--font-weight-800);
  color: var(--color-navy);
}

/* ---- Game Description ---- */
.game-description {
  font-family: var(--font-body);
  font-size: var(--font-size-body);
  line-height: var(--line-height-relaxed);
  color: var(--color-ink);
  margin-bottom: var(--space-4);
  text-align: center;
}

/* ---- Actions ---- */
.game-actions {
  display: flex;
  gap: var(--space-3);
  justify-content: center;
  margin-top: var(--space-4);
}

.btn-primary,
.btn-ghost {
  font-family: var(--font-body);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-600);
  padding: var(--button-padding-primary) var(--button-padding-ghost);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: background-color 0.18s, color 0.18s, transform 0.12s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-primary {
  background-color: var(--color-green);
  color: var(--color-white);
}
.btn-primary:hover {
  background-color: var(--color-green-dark);
}
.btn-primary:active {
  transform: translateY(1px);
}

.btn-ghost {
  background-color: transparent;
  color: var(--color-navy);
  border: 1px solid var(--color-line);
}
.btn-ghost:hover {
  background-color: var(--color-navy);
  color: var(--color-white);
}

/* ---- Features ---- */
.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: var(--font-weight-600);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
  color: var(--color-navy);
  margin-bottom: var(--space-4);
  text-align: center;
}

.feature-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 360px;
  margin: 0 auto;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.feature-icon {
  color: var(--color-gold);
  font-size: var(--font-size-chrome);
  line-height: 1;
}

.feature-text {
  font-family: var(--font-body);
  font-size: var(--font-size-body);
  line-height: var(--line-height-relaxed);
  color: var(--color-ink-soft);
}

/* ---- Promo Pack ---- */
.promo-pack {
  max-width: 360px;
  margin: var(--space-5) auto 0;
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-line);
}

.promo-note {
  font-family: var(--font-body);
  font-size: var(--font-size-caption);
  color: var(--color-ink-soft);
  text-align: center;
  margin-bottom: var(--space-3);
}
</style>