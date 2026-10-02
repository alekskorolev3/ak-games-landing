<script setup lang="ts">
import { liveGamesCount } from '~/data/games'

const facts = [
  { label: 'Focus', value: 'Casino slot games', confirmed: true },
  { label: 'Founded', value: '2026', confirmed: true },
  { label: 'Team', value: 'Lean specialist team', confirmed: true },
  { label: 'Games shipped', value: String(liveGamesCount), confirmed: true },
  { label: 'Platform', value: 'Stake Engine', confirmed: true }
]

const capabilities = [
  {
    title: 'Math',
    body: 'Outcome tables, RTP targeting and volatility shaping for Stake Engine’s static math format.'
  },
  {
    title: 'Art pipeline',
    body: 'Theme, symbols and UI built as a single visual system — from tile to in-game presentation.'
  },
  {
    title: 'Stake Engine',
    body: 'Native RGS integration: launch, settle, free-spin modes and provably fair delivery on Stake.'
  }
]

const roadmap = [
  {
    title: 'Candy Cat',
    note: 'Royal candy-land slot — 50,000× max win. Next release.',
    status: 'Coming soon'
  },
  {
    title: 'Further release',
    note: 'Queued after Candy Cat. Theme and specs to be announced.',
    status: 'Queued'
  },
  {
    title: 'Catalogue growth',
    note: 'Additional Stake Engine titles planned beyond the live five.',
    status: 'Planned'
  }
]
</script>

<template>
  <section id="studio" class="section studio">
    <div class="container studio-inner">
      <div class="studio-head">
        <h2>Studio</h2>
        <p>
          AK Games is a lean specialist team building casino slots with the care of
          a boutique studio. We treat each title as a full product — math, art and
          balance — rather than a slot in a volume pipeline.
        </p>
      </div>
      <dl class="studio-facts">
        <div v-for="fact in facts" :key="fact.label" class="fact-row">
          <dt>{{ fact.label }}</dt>
          <dd :class="{ 'fact-confirmed': fact.confirmed }">
            {{ fact.value }}
          </dd>
        </div>
      </dl>
    </div>

    <div class="container studio-block">
      <h3>What we ship</h3>
      <ul class="capability-list">
        <li v-for="item in capabilities" :key="item.title">
          <strong>{{ item.title }}</strong>
          <span>{{ item.body }}</span>
        </li>
      </ul>
    </div>

    <div class="container studio-block">
      <h3>Roadmap</h3>
      <ul class="roadmap-list">
        <li v-for="item in roadmap" :key="item.title">
          <div class="roadmap-top">
            <strong>{{ item.title }}</strong>
            <span class="roadmap-status">{{ item.status }}</span>
          </div>
          <span class="roadmap-note">{{ item.note }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.studio {
  border-top: 1px solid var(--line);
  background: var(--surface);
}

.studio-inner {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: var(--space-6);
  align-items: start;
}

.studio-head p {
  color: var(--ink-soft);
  margin: 0;
}

.studio-facts {
  margin: 0;
  border-top: 1px solid var(--line);
}

.fact-row {
  display: grid;
  grid-template-columns: 9rem 1fr;
  gap: var(--space-3);
  padding: var(--space-3) 0;
  border-bottom: 1px solid var(--line);
}

.fact-row dt {
  font-family: var(--font-display);
  font-weight: 600;
  color: var(--ink-soft);
}

.fact-row dd {
  margin: 0;
  font-weight: 600;
}

.fact-confirmed {
  color: var(--gold);
}

.studio-block {
  margin-top: var(--space-5);
  padding-top: var(--space-4);
  border-top: 1px solid var(--line);
}

.studio-block h3 {
  margin-bottom: var(--space-3);
}

.capability-list,
.roadmap-list {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--line);
  max-width: 48rem;
}

.capability-list li,
.roadmap-list li {
  display: grid;
  gap: 0.35rem;
  padding: var(--space-3) 0;
  border-bottom: 1px solid var(--line);
}

.capability-list strong,
.roadmap-top strong {
  font-family: var(--font-display);
  font-weight: 600;
  color: var(--ink);
}

.capability-list span,
.roadmap-note {
  color: var(--ink-soft);
}

.roadmap-top {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem 1rem;
}

.roadmap-status {
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--gold);
}

@media (max-width: 760px) {
  .studio-inner {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
}

@media (max-width: 480px) {
  .fact-row {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }
}
</style>
