<script setup>
defineProps({
  title: String,
  button: String,
  url: String,
  image: String
})
</script>

<template>
  <section class="bg-light-green pt-top sm:pt-topm relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-32 sm:before:h-20 before:bg-white before:z-10">
    <LayoutContainer>
      <div class="flex items-center justify-between sm:block mb-20 sm:mb-12">
        <h1 class="max-w-[700px] w-full sm:mb-4">{{ title }}</h1>
        <UiButton :to="url">{{ button }}</UiButton>
      </div>
      <img class="relative z-20 w-full rounded-3xl" :src="image" :alt="title">
    </LayoutContainer>
  </section>
</template>