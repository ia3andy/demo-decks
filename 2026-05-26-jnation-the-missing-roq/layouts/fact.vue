<template>
  <div class="slidev-layout fact" :style="{ background: 'var(--slidev-theme-background)' }">
    <div class="flex flex-col items-center justify-center h-full text-center px-12">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.fact :deep(h1) {
  font-size: 3.5rem;
  line-height: 1.2;
  margin-bottom: 1rem;
  display: inline-block;
  padding: 0.25em 0.5em;
  position: relative;
  z-index: 1;
}
.fact :deep(h1)::before {
  content: " ";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  margin-left: -0.5em;
  margin-top: -0.25em;
  z-index: -1;
  transform: rotate(-1deg);
  background: var(--slidev-theme-accents-yellow);
  box-shadow: var(--slidev-theme-header-shadow);
}
.fact :deep(h1) {
  color: var(--slidev-theme-accents-vulcan, #0e131f);
}
.fact :deep(h2) {
  font-size: 2rem;
  margin-top: 1.5rem;
  color: var(--slidev-theme-color, #f3eff5);
}
</style>
