<script setup>
defineProps({
  title: String,
  text: String,
  button: String,
  url: String,
  bullets: Array
})
</script>

<template>
  <section class="pt-top sm:pt-topm bg-light-green">
    <LayoutContainer>
      <div class="flex flex-col items-center">
        <h1 class="text-center mb-8 sm:mb-4">{{ title }}</h1>
        <p class="mb-10 sm:mb-6 mx-auto max-w-[750px] w-full text-center">{{ text }}</p>
        <UiButton :href="url">{{ button }}</UiButton>
        <div class="w-full border-t border-b border-light-gray py-8 sm:py-6 mt-20 sm:mt-10">
          <UiBullets
            line
            :items="bullets"
          />
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>