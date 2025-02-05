<script setup>
const accepted = useCookie("lgpd", { default: () => false })

defineProps({
  text: String,
  button: String
})
</script>

<template>
  <article
    class="cookies fixed bottom-10 right-10 z-[45] bg-[rgba(23,23,23,.9)] p-8 sm:py-4 md:px-md sm:px-sm max-w-[475px] w-full flex flex-col gap-6 sm:gap-4 sm:bottom-0 sm:right-0 opacity-0 invisible"
    :class="{ '!opacity-100 !visible': !accepted }"
  >
    <ClientOnly>
      <p class="text-sm" v-html="text"></p>
    </ClientOnly>
    <UiButton
      @click="accepted = true"
      full
    >
      {{ button }}
    </UiButton>
  </article>
</template>

<style lang="postcss">
.cookies {
  p {
    @apply text-white;
  }
}
</style>