<script setup lang="ts">
import { getGameBySlug, type SpecValue } from '~/data/games'

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))
const found = getGameBySlug(String(route.params.slug || ''))

if (!found) {
  throw createError({ statusCode: 404, statusMessage: 'Game not found' })
}

const game = computed(() => getGameBySlug(slug.value)!)

useSeoMeta({
  title: () => `${game.value!.title} — AK Games`,
  description: () => game.value!.summary
})

const demoFailed = ref(false)
const onDemoError = () => {
  demoFailed.value = true
}

watch(slug, () => {
  demoFailed.value = false
})

const specs = computed(() => {
  const g = game.value!
  return [
    { label: 'RTP', ...g.rtp },
    { label: 'House edge', ...g.houseEdge },
    { label: 'Volatility', ...g.volatility },
    { label: 'Max win', ...g.maxWin },
    { label: 'Mechanics', ...g.mechanics },
    { label: 'Release', ...g.releaseDate },
    { label: 'Platform', value: g.platform, confirmed: true }
  ] satisfies Array<{ label: string } & SpecValue>
})

const showDemoEmbed = computed(
  () => Boolean(game.value?.demoEmbedUrl) && !demoFailed.value
)

const lightboxIndex = ref<number | null>(null)
const lightboxOpen = computed(() => lightboxIndex.value !== null)
const lightboxSrc = computed(() =>
  lightboxIndex.value === null
    ? ''
    : game.value.screenshots[lightboxIndex.value] || ''
)

const openLightbox = (index: number) => {
  lightboxIndex.value = index
}
const closeLightbox = () => {
  lightboxIndex.value = null
}
const lightboxPrev = () => {
  if (lightboxIndex.value === null) return
  const len = game.value.screenshots.length
  lightboxIndex.value = (lightboxIndex.value - 1 + len) % len
}
const lightboxNext = () => {
  if (lightboxIndex.value === null) return
  const len = game.value.screenshots.length
  lightboxIndex.value = (lightboxIndex.value + 1) % len
}

const onLightboxKey = (e: KeyboardEvent) => {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') lightboxPrev()
  if (e.key === 'ArrowRight') lightboxNext()
}

watch(lightboxOpen, (open) => {
  if (!import.meta.client) return
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('keydown', onLightboxKey)
})
onUnmounted(() => {
  window.removeEventListener('keydown', onLightboxKey)
  document.body.style.overflow = ''
})

const isPortraitShot = (src: string) =>
  src === game.value.cover || /3x4|cover|tile/i.test(src)

</script>

<template>
  <main v-if="game" class="game-page">
    <section class="section game-hero">
      <div class="container">
        <NuxtLink to="/#games" class="back-link">← All games</NuxtLink>
        <div class="hero-grid">
          <div class="hero-cover">
            <img
              :src="game.cover"
              :alt="`${game.title} cover art`"
              width="480"
              height="640"
              decoding="async"
            />
            <span
              class="status-chip"
              :class="{ soon: game.status === 'coming-soon' }"
            >
              {{ game.status === 'coming-soon' ? 'Coming soon' : 'Live' }}
            </span>
          </div>
          <div class="hero-copy">
            <h1>{{ game.title }}</h1>
            <p class="offer">{{ game.tagline }}</p>
            <p class="lead">{{ game.summary }}</p>
            <div class="hero-actions">
              <a
                v-if="game.stakeUrl"
                :href="game.stakeUrl"
                class="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Play on Stake
              </a>
              <a href="/#contact" class="btn btn-ghost">Talk distribution</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section specs-section">
      <div class="container">
        <h2>Specs</h2>
        <dl class="specs">
          <div v-for="row in specs" :key="row.label" class="spec-row">
            <dt>{{ row.label }}</dt>
            <dd :class="{ confirmed: row.confirmed, pending: !row.confirmed }">
              {{ row.value }}
              <span v-if="!row.confirmed" class="pending-mark">to confirm</span>
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <section v-if="game.features.length" class="section features-section">
      <div class="container">
        <h2>Features</h2>
        <ul class="features">
          <li v-for="feature in game.features" :key="feature">{{ feature }}</li>
        </ul>
      </div>
    </section>

    <section class="section demo-section">
      <div class="container">
        <h2>Demo</h2>
        <p class="section-lead">
          <template v-if="game.status === 'coming-soon'">
            A playable demo will land here at launch.
          </template>
          <template v-else-if="showDemoEmbed">
            Playable demo — same build that runs on Stake Engine.
          </template>
          <template v-else>
            Full playable session opens on Stake.
          </template>
        </p>

        <div class="demo-shell" :class="{ embed: showDemoEmbed }">
          <iframe
            v-if="showDemoEmbed"
            class="demo-frame"
            :src="game.demoEmbedUrl"
            :title="`${game.title} demo`"
            allow="autoplay; fullscreen; payment"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            @error="onDemoError"
          />
          <div v-else class="demo-fallback">
            <img
              :src="game.cover"
              :alt="''"
              class="demo-poster"
              width="120"
              height="160"
              decoding="async"
            />
            <div class="demo-fallback-copy">
              <p v-if="game.stakeUrl">
                Launch the playable game on Stake.
              </p>
              <p v-else>
                Demo unavailable until release.
              </p>
              <a
                v-if="game.stakeUrl"
                :href="game.stakeUrl"
                class="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Play on Stake →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section media-section">
      <div class="container">
        <h2>Media</h2>
        <p class="section-lead">
          Cover art and stills — click any image to view full size. Trailers land
          here when published.
        </p>

        <div v-if="game.trailerUrl" class="trailer">
          <iframe
            :src="game.trailerUrl"
            :title="`${game.title} trailer`"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy"
          />
        </div>

        <div class="shots">
          <button
            v-for="(shot, i) in game.screenshots"
            :key="shot"
            type="button"
            class="shot"
            :class="{ portrait: isPortraitShot(shot) }"
            :aria-label="`View ${game.title} media ${i + 1} full size`"
            @click="openLightbox(i)"
          >
            <img
              :src="shot"
              :alt="`${game.title} screenshot ${i + 1}`"
              loading="lazy"
              decoding="async"
              width="960"
              height="540"
            />
          </button>
        </div>
      </div>
    </section>

    <Teleport to="body">
      <div
        v-if="lightboxOpen"
        class="lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="`${game.title} media viewer`"
        @click.self="closeLightbox"
      >
        <button
          type="button"
          class="lightbox-close"
          aria-label="Close"
          @click="closeLightbox"
        >
          ×
        </button>
        <button
          v-if="game.screenshots.length > 1"
          type="button"
          class="lightbox-nav lightbox-prev"
          aria-label="Previous image"
          @click="lightboxPrev"
        >
          ‹
        </button>
        <img
          class="lightbox-img"
          :src="lightboxSrc"
          :alt="`${game.title} full size`"
        />
        <button
          v-if="game.screenshots.length > 1"
          type="button"
          class="lightbox-nav lightbox-next"
          aria-label="Next image"
          @click="lightboxNext"
        >
          ›
        </button>
      </div>
    </Teleport>
  </main>
</template>

<style scoped>
.game-page {
  border-top: 1px solid var(--line);
}

.back-link {
  display: inline-block;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  color: var(--gold);
  margin-bottom: var(--space-4);
}

.back-link:hover {
  color: var(--gold-bright);
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(220px, 320px) 1fr;
  gap: var(--space-5);
  align-items: start;
}

.hero-cover {
  position: relative;
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--surface-raised);
  aspect-ratio: 3 / 4;
}

.hero-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
}

.status-chip {
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

.status-chip.soon {
  background: var(--gold);
  color: var(--navy);
}

.hero-copy h1 {
  margin-bottom: var(--space-2);
}

.offer {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(1.15rem, 2.4vw, 1.5rem);
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--gold);
}

.lead {
  color: var(--ink-soft);
  margin-top: var(--space-3);
  max-width: var(--measure);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-4);
}

.specs-section,
.features-section,
.demo-section,
.media-section {
  border-top: 1px solid var(--line);
}

.section-lead {
  color: var(--ink-soft);
  max-width: var(--measure);
  margin-bottom: var(--space-4);
}

.specs {
  margin: 0;
  border-top: 1px solid var(--line);
  max-width: 42rem;
}

.spec-row {
  display: grid;
  grid-template-columns: 9rem 1fr;
  gap: var(--space-3);
  padding: var(--space-3) 0;
  border-bottom: 1px solid var(--line);
}

.spec-row dt {
  font-family: var(--font-display);
  font-weight: 600;
  color: var(--ink-soft);
}

.spec-row dd {
  margin: 0;
  font-weight: 600;
}

.spec-row dd.confirmed {
  color: var(--gold);
}

.spec-row dd.pending {
  color: var(--ink-soft);
  font-weight: 400;
}

.pending-mark {
  margin-left: 0.5rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink-soft);
}

.features {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0;
  border-top: 1px solid var(--line);
  max-width: 42rem;
}

.features li {
  padding: var(--space-3) 0;
  border-bottom: 1px solid var(--line);
  font-weight: 600;
  color: var(--ink);
}

.demo-shell {
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--surface);
}

.demo-shell.embed {
  min-height: 0;
}

.demo-frame {
  width: 100%;
  min-height: 480px;
  border: 0;
  display: block;
  background: #000;
}

.demo-fallback {
  display: grid;
  grid-template-columns: 120px minmax(0, 1fr);
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3);
  min-height: 0;
}

.demo-poster {
  width: 120px;
  height: 160px;
  object-fit: cover;
  object-position: top center;
  display: block;
  border-radius: calc(var(--radius-md) - 2px);
  background: var(--surface-raised);
}

.demo-fallback-copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--space-2);
  padding-right: var(--space-2);
}

.demo-fallback-copy p {
  margin: 0;
  color: var(--ink-soft);
  font-size: 0.95rem;
  line-height: 1.4;
}

.trailer {
  margin-bottom: var(--space-4);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  overflow: hidden;
  aspect-ratio: 16 / 9;
  background: var(--surface);
}

.trailer iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}

.shots {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--space-3);
}

.shot {
  margin: 0;
  padding: 0;
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--surface-raised);
  aspect-ratio: 16 / 10;
  cursor: zoom-in;
  display: block;
  width: 100%;
  transition: border-color 0.18s ease-out;
}

.shot.portrait {
  aspect-ratio: 3 / 4;
}

.shot:hover,
.shot:focus-visible {
  border-color: var(--gold-soft);
}

.shot img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
  background: #0a0a0a;
}

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 80;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4);
}

.lightbox-img {
  max-width: min(1100px, 100%);
  max-height: min(90vh, 100%);
  object-fit: contain;
  border-radius: var(--radius-sm);
  display: block;
}

.lightbox-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.75rem;
  height: 2.75rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--surface);
  color: var(--ink);
  font-size: 1.6rem;
  line-height: 1;
  cursor: pointer;
}

.lightbox-close:hover {
  border-color: var(--gold-soft);
  color: var(--gold-bright);
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 2.75rem;
  height: 2.75rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--surface);
  color: var(--ink);
  font-size: 1.75rem;
  line-height: 1;
  cursor: pointer;
}

.lightbox-prev {
  left: 1rem;
}

.lightbox-next {
  right: 1rem;
}

.lightbox-nav:hover {
  border-color: var(--gold-soft);
  color: var(--gold-bright);
}

@media (max-width: 760px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }

  .demo-fallback {
    grid-template-columns: 96px minmax(0, 1fr);
    gap: var(--space-2);
    padding: var(--space-2);
  }

  .demo-poster {
    width: 96px;
    height: 128px;
  }

  .spec-row {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }

  .demo-frame {
    min-height: 360px;
  }

  .lightbox-nav {
    display: none;
  }
}
</style>
