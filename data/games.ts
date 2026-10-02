export type GameStatus = 'live' | 'coming-soon'

export type SpecValue = {
  value: string
  confirmed: boolean
}

export type Game = {
  slug: string
  title: string
  status: GameStatus
  tagline: string
  summary: string
  cover: string
  stakeUrl?: string
  /** Embeddable demo URL when available; otherwise Stake play link is used as CTA */
  demoEmbedUrl?: string
  trailerUrl?: string
  screenshots: string[]
  platform: string
  releaseDate: SpecValue
  rtp: SpecValue
  houseEdge: SpecValue
  volatility: SpecValue
  maxWin: SpecValue
  mechanics: SpecValue
  features: string[]
}

export const games: Game[] = [
  {
    slug: 'candy-cat',
    title: 'Candy Cat',
    status: 'coming-soon',
    tagline: 'Royal candy-land slot.',
    summary:
      'A 7×7 candy-royal cluster slot on Stake Engine with tumble wins, Wild Specials, jewel spill, bonus buys and free spins. Max win 50,000× — coming soon.',
    cover: '/games/candy-cat.webp',
    screenshots: [
      '/games/candy-cat.webp',
      '/games/candy-cat-play.webp',
      '/games/candy-cat-bonus.webp',
      '/games/candy-cat-win.webp'
    ],
    platform: 'Stake Engine',
    releaseDate: { value: 'Coming soon', confirmed: true },
    rtp: { value: '96.30%', confirmed: true },
    houseEdge: { value: '3.70%', confirmed: true },
    volatility: { value: 'Low (base) · High on Activate 1', confirmed: true },
    maxWin: { value: '50,000×', confirmed: true },
    mechanics: {
      value: '7×7 cluster · Tumble · Wild multipliers · Bonus buys',
      confirmed: true
    },
    features: [
      '7×7 cluster pays (12+ orthogonally connected)',
      'Tumble / cascading wins',
      'Wild multipliers (summed after cascade chain)',
      'Wild Special: Gingerbread — transform up to 8 neighbors',
      'Wild Special: Chocolate — self + neighbors become wilds',
      'Wild Special: Jewel Spill — 2–4 sticky Wild multipliers',
      'Free spins (4+ scatters)',
      'Bonus buy: Sugar Dust (5×)',
      'Bonus buy: Double Dip (40×)',
      'Bonus buy: Candy Court (250×)',
      'Bonus buy: Opening Ceremony (1000×) — 8 Free Spins + Frosting'
    ]
  },
  {
    slug: 'hollow-cat',
    title: 'Hollow Cat',
    status: 'live',
    tagline: 'Spooky-season slot.',
    summary:
      'A high-volatility spooky-season Stake Engine slot with cascading play, multipliers and free spins — live on Stake. Max win 30,000×.',
    cover: '/games/hollow-cat.webp',
    stakeUrl: 'https://stake.com/casino/games/akgames-hollow-cat',
    screenshots: [
      '/games/hollow-cat.webp',
      '/games/hollow-cat-play.webp',
      '/games/hollow-cat-bonus.webp',
      '/games/hollow-cat-chamber.webp',
      '/games/hollow-cat-win.webp',
      '/games/hollow-cat-fs.webp'
    ],
    platform: 'Stake Engine · Live on Stake · Only on Stake',
    releaseDate: { value: '2026', confirmed: true },
    rtp: { value: '96.30%', confirmed: true },
    houseEdge: { value: '3.70%', confirmed: true },
    volatility: { value: 'High', confirmed: true },
    maxWin: { value: '30,000×', confirmed: true },
    mechanics: {
      value: '5×5 · 3,125 ways · Cascading · Multipliers · Free spins',
      confirmed: true
    },
    features: [
      '3,125 ways to win',
      'Cascading reels',
      'Wilds & scatters',
      'Multipliers',
      'Free spins',
      'Hit rate (base): 50.56%',
      'Bonus buy: Double Haunt (2×) — chance to trigger Free Spins',
      'Bonus buy: Second Helping (20×) — one extra cascade wave',
      'Bonus buy: Spider Chamber (200×) — hold-and-spin, sticky Wilds, 3 lives',
      'Bonus buy: Midnight Ritual (1000×) — guaranteed Free Spins'
    ]
  },
  {
    slug: 'oktobercat',
    title: 'Oktobercat',
    status: 'live',
    tagline: 'Bavarian beer-fest slot.',
    summary:
      'A Bavarian beer-fest Stake Engine slot with tumbling wins, Ginger Hearts, free spins and bonus buys. Max win 10,000×.',
    cover: '/games/oktobercat.webp',
    stakeUrl: 'https://stake.com/casino/games/akgames-oktobercat',
    screenshots: [
      '/games/oktobercat.webp',
      '/games/oktobercat-play.webp',
      '/games/oktobercat-bonus.webp',
      '/games/oktobercat-action.webp',
      '/games/oktobercat-win.webp'
    ],
    platform: 'Stake Engine · Live on Stake',
    releaseDate: { value: '2026', confirmed: true },
    rtp: { value: '96.30%', confirmed: true },
    houseEdge: { value: '3.70%', confirmed: true },
    volatility: { value: 'Low', confirmed: true },
    maxWin: { value: '10,000×', confirmed: true },
    mechanics: {
      value: '5×5 · Tumbling · Ways · Multipliers · Free spins',
      confirmed: true
    },
    features: [
      'Tumbling / cascading wins',
      'Ways to win',
      'Wilds & scatters',
      'Ginger Hearts',
      'Multipliers',
      'Free spins',
      'Hit rate (base): 28.01%',
      'Bonus buy: Morning Round (5×) — extra Ginger Heart after winning tumble',
      'Bonus buy: Pretzel Hunt (50×) — extra pretzel after every winning tumble',
      'Bonus buy: Big Tent (500×) — force FS · two Ginger Hearts each bonus spin',
      'Bonus buy: Last Call (1000×) — force FS · full table + ×6 · 8 FS'
    ]
  },
  {
    slug: 'vice-heat-cat',
    title: 'Vice Heat Cat',
    status: 'live',
    tagline: 'Sunset-strip slot.',
    summary:
      'A Miami Vice–style Stake Engine slot on a 5×5 / 3,125-ways board with tumble cascades, Wanted stars and free spins. Max win 10,000×.',
    cover: '/games/vice-heat-cat.webp',
    stakeUrl: 'https://stake.com/casino/games/akgames-vice-heat-cat',
    screenshots: [
      '/games/vice-heat-cat.webp',
      '/games/vice-heat-cat-play.webp',
      '/games/vice-heat-cat-bonus.webp',
      '/games/vice-heat-cat-win.webp',
      '/games/vice-heat-cat-fs.webp'
    ],
    platform: 'Stake Engine · Live on Stake',
    releaseDate: { value: '2026', confirmed: true },
    rtp: { value: '96.30%', confirmed: true },
    houseEdge: { value: '3.70%', confirmed: true },
    volatility: { value: 'Low', confirmed: true },
    maxWin: { value: '10,000×', confirmed: true },
    mechanics: {
      value: '5×5 · 3,125 ways · Tumble · Wanted stars ×1–×6',
      confirmed: true
    },
    features: [
      '3,125 ways (left to right)',
      'Tumble cascades',
      'Wanted plaque — 0–5 stars → global ×1–×6',
      'Wilds (substitute all except scatters)',
      'Max Wanted — forces 5★ / ×6',
      'Free spins',
      'Hit rate (base): 50.56%',
      'Bonus buy: Wanted Kickstart (5×) — start each spin at ★2',
      'Bonus buy: Heat Map (50×) — mark reels after wins',
      'Bonus buy: Pursuit (500×) — force FS + heat tokens',
      'Bonus buy: Five-Star Entry (1000×) — 5★ + ×6 · 11 FS'
    ]
  },
  {
    slug: 'ancient-rus',
    title: 'Ancient Rus',
    status: 'live',
    tagline: 'Slavic-mythology slot.',
    summary:
      'A Slavic-mythology Stake Engine slot on a 6×4 / 4,096-ways board with tumble cascades, artifacts, Wild multipliers and three boss bonuses — Serpent’s Lair, Koschei and Makosh. Max win 10,000×.',
    cover: '/games/ancient-rus.webp',
    stakeUrl: 'https://stake.com/casino/games/akgames-ancient-rus',
    screenshots: [
      '/games/ancient-rus.webp',
      '/games/ancient-rus-play.webp',
      '/games/ancient-rus-bonus.webp',
      '/games/ancient-rus-serpent.webp',
      '/games/ancient-rus-koschei.webp',
      '/games/ancient-rus-makosh.webp',
      '/games/ancient-rus-win.webp'
    ],
    platform: 'Stake Engine · Live on Stake',
    releaseDate: { value: '3 September 2026', confirmed: true },
    rtp: { value: '96.70%', confirmed: true },
    houseEdge: { value: '3.30%', confirmed: true },
    volatility: { value: 'Low', confirmed: true },
    maxWin: { value: '10,000×', confirmed: true },
    mechanics: {
      value: '6×4 · 4,096 ways · Tumble · Artifacts · Free spins',
      confirmed: true
    },
    features: [
      '4,096 ways (left to right)',
      'Tumble cascades',
      'Artifacts & Wild multipliers',
      'Natural free spins (Base / Ante / Feature)',
      'Hit rate (base): 29.07%',
      'Ante: Blessing of Veles (2×) — double Free Spins chance',
      'Feature: Gift of the Volkhvs (13.5×) — artifact every spin',
      'Bonus: Serpent’s Lair (300×) — boss fight Free Spins',
      'Bonus: Koschei’s Chains (600×) — destroy 4 seals',
      'Bonus: Makosh’s Threads (1000×) — sticky multiplier frames'
    ]
  },
  {
    slug: 'lizard-kings-gold',
    title: 'Lizard Kings Gold',
    status: 'live',
    tagline: 'Mesoamerican temple slot.',
    summary:
      'A Mesoamerican temple Stake Engine slot on a 5×5 / 3,125-ways board with additive Wild multipliers, Golden Ways SuperSpin, Emerald Totem free spins and feature buys. Max win 5,000×.',
    cover: '/games/lizard-kings-gold.webp',
    stakeUrl: 'https://stake.com/casino/games/akgames-lizard-kings-gold',
    screenshots: [
      '/games/lizard-kings-gold.webp',
      '/games/lizard-kings-gold-play.webp',
      '/games/lizard-kings-gold-bonus.webp',
      '/games/lizard-kings-gold-fs.webp',
      '/games/lizard-kings-gold-totem.webp'
    ],
    platform: 'Stake Engine · Live on Stake',
    releaseDate: { value: '2026', confirmed: true },
    rtp: { value: '96.70%', confirmed: true },
    houseEdge: { value: '3.30%', confirmed: true },
    volatility: { value: 'Medium', confirmed: true },
    maxWin: { value: '5,000×', confirmed: true },
    mechanics: {
      value: '5×5 · 3,125 ways · Wild multipliers · Free spins',
      confirmed: true
    },
    features: [
      '3,125 ways (left to right)',
      'Wild multipliers add together before the win',
      'Hit rate (base): 29.07%',
      'Golden Ways / SuperSpin (2×) — Wild multipliers up to ×5 in base',
      'Bonus buy: Lizard King’s Multiplier (100×)',
      'Bonus buy: Imperial Sacrifice (250×) — Emerald Totem free spins'
    ]
  }
]

/** Coming soon first, then live titles in catalogue order. */
export const gamesOrdered = [...games].sort((a, b) => {
  if (a.status === b.status) return 0
  return a.status === 'coming-soon' ? -1 : 1
})

export const liveGamesCount = games.filter((g) => g.status === 'live').length

export function getGameBySlug(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug)
}

export const gameSlugs = games.map((g) => g.slug)
