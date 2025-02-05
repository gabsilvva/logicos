<script setup>
defineProps({
  submit: Boolean,
  href: String,
  blank: Boolean,
  full: Boolean,
  white: Boolean
})
</script>

<template>
  <NuxtLink
    v-if="href"
    :to="href"
    :target="blank ? '_blank' : '_self'"
    :class="{ full, white }"
  >
    <slot />
  </NuxtLink>
  <button
    v-else
    :type="submit ? 'submit' : 'button'"
    :class="{ full, white }"
  >
    <slot/>
  </button>
</template>

<style lang="postcss" scoped>
a,
button {
  @apply flex items-center justify-center gap-3 rounded-full px-12 h-[52px] text-base leading-[120%] font-bold bg-green text-white uppercase hover:bg-dark-green text-center;

  &.white {
    @apply !bg-white !text-green hover:!bg-dark-green hover:!text-white;
  }

  &.full {
    @apply w-full;
  }
}
</style>