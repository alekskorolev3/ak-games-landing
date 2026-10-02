<script setup lang="ts">
const links = [
  { to: '/#games', label: 'Games' },
  { to: '/#studio', label: 'Studio' },
  { to: '/#contact', label: 'Contact' }
]
</script>

<template>
  <header class="nav">
    <div class="container nav-inner">
      <NuxtLink to="/" class="brand" aria-label="AK Games — home">
        <img
          src="/logo.webp"
          alt=""
          class="brand-logo"
          width="32"
          height="32"
        />
        <span class="brand-name">AK&nbsp;Games</span>
      </NuxtLink>
      <nav class="nav-links" aria-label="Primary">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="nav-link"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink to="/#contact" class="btn btn-primary nav-cta">
          Get in touch
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(0, 0, 0, 0.92);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.25rem;
  gap: var(--space-3);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  color: var(--ink);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: -0.01em;
}

.brand-logo {
  width: 2.1rem;
  height: 2.1rem;
  border-radius: var(--radius-sm);
  background: var(--surface-raised);
  object-fit: contain;
  padding: 0.2rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.nav-link {
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--ink);
}

.nav-link:hover {
  color: var(--gold-bright);
}

.nav-cta {
  padding: 0.55rem 1.2rem;
  font-size: 0.92rem;
}

@media (max-width: 640px) {
  .nav-link {
    display: none;
  }

  .nav-cta {
    padding: 0.7rem 1rem;
    font-size: 0.85rem;
  }
}
</style>
