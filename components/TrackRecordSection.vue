<script setup lang="ts">
const facts = [
  { label: 'Focus', value: 'Casino slot games', confirmed: true },
  { label: 'Founded', value: '2026', confirmed: true },
  { label: 'Team', value: '2', confirmed: true },
  { label: 'Games shipped', value: '4', confirmed: true },
  { label: 'Locations', value: '—', confirmed: false }
]
</script>

<template>
  <section id="studio" class="section studio">
    <div class="container studio-inner">
      <div class="studio-head">
        <h2>Studio</h2>
        <p>
          AK Games is a small team. We believe a slot game is a product of
          craft — from math and art to the last balancing pass — and that a
          small studio can hold a higher bar than a large pipeline.
        </p>
      </div>
      <dl class="studio-facts">
        <div v-for="fact in facts" :key="fact.label" class="fact-row">
          <dt>{{ fact.label }}</dt>
          <dd :class="{ 'fact-confirmed': fact.confirmed, 'fact-pending': !fact.confirmed }">
            {{ fact.value }}<span v-if="!fact.confirmed" class="fact-pending-mark">to confirm</span>
          </dd>
        </div>
      </dl>
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

.fact-pending {
  color: var(--ink-soft);
  font-weight: 400;
}

.fact-pending-mark {
  margin-left: 0.5rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink-soft);
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
