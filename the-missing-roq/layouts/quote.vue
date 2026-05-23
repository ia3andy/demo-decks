<template>
  <div class="slidev-layout quote" :style="{ background: 'var(--slidev-theme-background)' }">
    <div class="flex flex-col justify-center h-full px-16">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.quote :deep(h1) {
  font-size: 2.2rem;
  line-height: 1.4;
  font-style: italic;
  color: var(--slidev-theme-color, #f3eff5);
  border-left: 4px solid var(--slidev-theme-accents-yellow);
  padding-left: 1.2em;
  margin-bottom: 1.5rem;
}
.quote :deep(h1)::before {
  display: none;
}
.quote :deep(p) {
  font-size: 1.3rem;
  color: var(--slidev-theme-accents-yellow);
  padding-left: 1.2em;
  margin-left: 4px;
}
</style>
