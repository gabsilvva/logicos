<script setup>
defineProps({
  title: String,
  text: String,
  logos: Array
})
</script>

<template>
  <section class="pt-32 sm:pt-16">
    <LayoutContainer>
      <h3 v-if="title" class="mb-8 sm:mb-6">{{ title }}</h3>
      <p v-if="text" v-html="text" class="mb-8 sm:mb-4 max-w-[780px] w-full"></p>
    </LayoutContainer>
    <UiLogos :items="logos" />
  </section>
</template>