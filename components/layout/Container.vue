<template>
  <div class="w-full mx-auto px-md sm:px-sm">
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
div {
  max-width: calc(1128px + theme(padding.md) * 2);
}
</style>