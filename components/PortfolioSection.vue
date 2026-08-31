<script setup lang="ts">
const game = {
  title: 'Lizard Kings Gold',
  tag: 'Live on Stake',
  note: 'Stake Engine slot. House edge 3.30%. Gold-themed reptiles with a desert bonus round.',
  img: '/games/lizard-kings-gold.webp',
  url: 'https://stake.com/ru/casino/games/akgames-lizard-kings-gold'
}
</script>

<template>
  <section id="games" class="section games">
    <div class="container">
      <h2>Games</h2>
      <p class="games-intro">
        One title live on Stake, with the next games in the pipeline — each built
        to the same bar: clean math, sharp art, play that holds up.
      </p>
      <article class="game-card">
        <div class="game-cover" aria-hidden="true">
          <img :src="game.img" :alt="game.title + ' game art'" class="game-cover-img" loading="lazy" decoding="async" width="408" height="546" />
        </div>
        <div class="game-body">
          <p class="game-tag">{{ game.tag }}</p>
          <h3>{{ game.title }}</h3>
          <p class="game-note">{{ game.note }}</p>
          <a :href="game.url" target="_blank" rel="noopener" class="game-play">Play on Stake →</a>
        </div>
        <span class="real-chip" aria-label="Live game">Live</span>
      </article>
    </div>
  </section>
</template>

<style scoped>
.games {
  border-top: 1px solid var(--line);
}

.games-intro {
  color: var(--ink-soft);
  margin-bottom: var(--space-5);
  max-width: 52ch;
}

.game-card {
  position: relative;
  display: grid;
  grid-template-columns: 320px 1fr;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  overflow: hidden;
  max-width: 720px;
}

.game-cover {
  min-height: 220px;
  background: var(--surface-raised);
}

.game-cover-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.game-body {
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.game-body h3 {
  margin-bottom: var(--space-1);
}

.game-tag {
  font-family: var(--font-display);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-soft);
  margin-bottom: var(--space-2);
}

.game-note {
  font-size: 0.95rem;
  color: var(--ink-soft);
  margin: 0;
}

.game-play {
  display: inline-block;
  margin-top: var(--space-2);
  font-weight: 700;
  font-size: 0.92rem;
  text-decoration: none;
}

.real-chip {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #ffffff;
  background: var(--green);
  padding: 0.3rem 0.55rem;
  border-radius: 999px;
}

@media (max-width: 640px) {
  .game-card {
    grid-template-columns: 1fr;
  }

  .game-cover {
    min-height: 220px;
  }
}
</style>
