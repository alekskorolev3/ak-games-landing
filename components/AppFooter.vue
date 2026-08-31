<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <img src="/logo.webp" alt="" class="brand-logo" width="28" height="28" />
        <span>AK&nbsp;Games</span>
      </div>
      <p class="footer-note">
        Craft-built casino slot games. &copy; {{ new Date().getFullYear() }} AK Games. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--line);
  background: var(--surface);
  color: #d9d3c9;
  padding-block: var(--space-4);
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  flex-wrap: wrap;
}

.footer-brand {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-display);
  font-weight: 700;
  color: #ffffff;
}

.brand-logo {
  width: 1.75rem;
  height: 1.75rem;
  object-fit: contain;
}

.footer-note {
  margin: 0;
  font-size: 0.85rem;
  color: #b9b2a6;
}
</style>
