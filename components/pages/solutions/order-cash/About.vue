<script setup>
defineProps({
  subtitle: String,
  title: String,
  text: String
})
</script>

<template>
  <section class="pt-32 sm:pt-20 mb-[-96px] sm:mb-[-48px]">
    <LayoutContainer>
      <UiSubtitle green :text="subtitle" />
      <h2 v-html="title"></h2>
      <p class="mt-10 sm:mt-6 max-w-[640px] w-full">{{ text }}</p>
    </LayoutContainer>
  </section>
</template>