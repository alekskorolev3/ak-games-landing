const directionContract = `<!--
  AK Games - direction contract
  THESIS: A single-page investor landing page for a small casino-slot studio. The category standard, played straight: professional, credible, premium. It refuses both the casino-cliche trap (neon, gold, playing-card motifs) and the startup-hype trap (hero metrics, big numbers, buzzwords).
  OWN-WORLD: Deep navy #0F1B2D ground with raised surfaces at #141E33; gold #C9A02E reserved for links and premium accent; green #35A25C for the primary action. Sora for display, Manrope for body. One clean grid, generous spacing, no ornament. Dark theme adopted August 2026.
  STORY: An investor arrives asking whether this studio can deliver. The page answers: a real studio, real craft, games shipped, and an open door. The portfolio proves the product exists, the track record proves the team delivers, the contact form is the open door.
  FIRST VIEWPORT: "AK GAMES" in Sora display above the warm crease; the one-line offer "Small studio, craft-built casino slots." beneath; one green CTA "Get in touch" in the lower third. Spare composition on a warm off-white ground, no hero image, no metrics.
  FORM: Category standard (canon), played straight. Shape roll seed key a82cfd38.
  FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
-->`

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html) => {
    html.bodyPrepend.push(directionContract)
  })
})
