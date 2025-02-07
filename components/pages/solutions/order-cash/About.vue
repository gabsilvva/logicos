<script setup>
defineProps({
  subtitle: String,
  title: String,
  text: String,
  button: String,
  url: String,
  bullets: Array
})
</script>

<template>
  <section class="pt-32 sm:pt-20">
    <LayoutContainer>
      <UiSubtitle :text="subtitle" class="pl-[84px] sm:pl-[36px]" />
      <UiTitle :text="title" />
      <div class="mt-16 sm:mt-6 flex gap-20 sm:flex-col sm:gap-8">
        <div class="max-w-[480px] w-full flex flex-col items-start gap-10 sm:gap-6 justify-between">
          <p>{{ text }}</p>
          <UiButton :href="url">{{ button }}</UiButton>
        </div>
        <UiBullets :items="bullets" />
      </div>
    </LayoutContainer>
  </section>
</template>