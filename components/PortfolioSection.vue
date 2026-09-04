<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const trackRef = ref<HTMLElement | null>(null)
const canScroll = ref(false)
const canPrev = ref(false)
const canNext = ref(false)

const updateNav = () => {
  const el = trackRef.value
  if (!el) return
  canScroll.value = el.scrollWidth > el.clientWidth + 4
  canPrev.value = el.scrollLeft > 4
  canNext.value = el.scrollLeft < el.scrollWidth - el.clientWidth - 4
}

const scrollByCard = (dir: number) => {
  const el = trackRef.value
  if (!el) return
  const card = el.querySelector('.game-card') as HTMLElement | null
  const gap = parseFloat(getComputedStyle(el).gap) || 0
  const step = (card ? card.offsetWidth : el.clientWidth * 0.85) + gap
  el.scrollBy({ left: dir * step })
}

onMounted(() => {
  updateNav()
  trackRef.value?.addEventListener('scroll', updateNav, { passive: true })
  window.addEventListener('resize', updateNav)
})

onUnmounted(() => {
  trackRef.value?.removeEventListener('scroll', updateNav)
  window.removeEventListener('resize', updateNav)
})

const games = [
  {
    title: 'Hollow Cat',
    tag: 'Coming soon',
    note: 'Spooky-season slot. Details to be announced.',
    img: '/games/hollow-cat.webp',
    url: '',
    chip: 'Coming soon',
    chipLabel: 'Coming soon',
    soon: true
  },
  {
    title: 'Ancient Rus',
    tag: 'Live on Stake',
    note: 'Slavic-mythology slot. Three bonus games — Zmey Gorynych, Koschei and Mokosh.',
    img: '/games/ancient-rus.webp',
    url: 'https://stake.com/ru/casino/games/akgames-ancient-rus',
    chip: 'Live',
    chipLabel: 'Live game'
  },
  {
    title: 'Lizard Kings Gold',
    tag: 'Live on Stake',
    note: 'Stake Engine slot. House edge 3.30%. Gold-themed reptiles with a desert bonus round.',
    img: '/games/lizard-kings-gold.webp',
    url: 'https://stake.com/ru/casino/games/akgames-lizard-kings-gold',
    chip: 'Live',
    chipLabel: 'Live game'
  }
]
</script>

<template>
  <section id="games" class="section games">
    <div class="container">
      <h2>Games</h2>
      <p class="games-intro">
        Two titles released — Lizard Kings Gold live on Stake and the new
        Ancient Rus — each built to the same bar: clean math, sharp art,
        play that holds up.
      </p>
      <div ref="trackRef" class="game-track" role="region" aria-roledescription="carousel" aria-label="Games">
        <article v-for="game in games" :key="game.title" class="game-card">
          <div class="game-cover" aria-hidden="true">
            <img :src="game.img" :alt="game.title + ' game art'" class="game-cover-img" loading="lazy" decoding="async" width="408" height="546" />
          </div>
          <div class="game-body">
            <p class="game-tag">{{ game.tag }}</p>
            <h3>{{ game.title }}</h3>
            <p class="game-note">{{ game.note }}</p>
            <a v-if="game.url" :href="game.url" target="_blank" rel="noopener" class="game-play">Play on Stake →</a>
          </div>
          <span class="real-chip" :class="{ 'chip-soon': game.soon }" :aria-label="game.chipLabel">{{ game.chip }}</span>
        </article>
      </div>
      <div v-if="canScroll" class="games-controls">
        <button
          type="button"
          class="btn btn-ghost games-nav"
          :disabled="!canPrev"
          aria-label="Previous games"
          @click="scrollByCard(-1)"
        >
          <svg viewBox="0 0 16 16" width="18" height="18" aria-hidden="true" focusable="false"><path d="M10 3 5 8l5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
        </button>
        <button
          type="button"
          class="btn btn-ghost games-nav"
          :disabled="!canNext"
          aria-label="Next games"
          @click="scrollByCard(1)"
        >
          <svg viewBox="0 0 16 16" width="18" height="18" aria-hidden="true" focusable="false"><path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
        </button>
      </div>
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

.game-track {
  display: flex;
  gap: var(--space-4);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  padding-bottom: var(--space-1);
}

.game-track::-webkit-scrollbar {
  display: none;
}

.game-card {
  position: relative;
  flex: 0 0 min(340px, 85vw);
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.game-cover {
  position: relative;
  aspect-ratio: 1 / 1.25;
  background: var(--surface-raised);
  overflow: hidden;
}

.game-cover-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
}

.game-body {
  flex: 1;
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  margin: 0 0 var(--space-2);
}

.game-play {
  display: inline-block;
  margin-top: auto;
  font-weight: 700;
  font-size: 0.92rem;
  text-decoration: none;
}

.games-controls {
  display: flex;
  gap: var(--space-2);
  margin-top: var(--space-4);
}

.games-nav {
  min-width: 44px;
  min-height: 44px;
  padding: 0.6rem 0.8rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.games-nav:disabled {
  opacity: 0.35;
  cursor: default;
}

.games-nav:disabled:hover {
  background: transparent;
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

.real-chip.chip-soon {
  background: var(--gold);
  color: var(--navy);
}

@media (prefers-reduced-motion: reduce) {
  .game-track {
    scroll-behavior: auto;
  }
}
</style>
