<script setup>
import { computed } from 'vue'
const props = defineProps({ background: String })
const bgStyle = computed(() => {
  if (props.background) {
    return {
      backgroundImage: `url(${props.background}), linear-gradient(to bottom, #fff5e6 0%, #fce8cc 50%, #f0d4a8 100%)`,
      backgroundSize: 'contain, cover',
      backgroundPosition: 'left center, center',
      backgroundRepeat: 'no-repeat, no-repeat',
    }
  }
  return { background: 'var(--slidev-theme-background)' }
})
</script>

<template>
  <div class="slidev-layout closing" :style="bgStyle">
    <div class="flex h-full items-center justify-end pr-16">
      <div class="text-center">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.closing :deep(h1) {
  font-size: 2.5rem;
  display: inline-block;
  padding: 0.25em 0.5em;
  position: relative;
  z-index: 1;
  margin-bottom: 0.5rem;
}
.closing :deep(h1)::before {
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
.closing :deep(h1) {
  color: var(--slidev-theme-accents-vulcan, #0e131f);
}
.closing {
  color: #2d3748;
}
.closing :deep(a) {
  color: #1d6573;
  text-decoration: none;
}
.closing :deep(a:hover) {
  color: #11363e;
}
</style>
