<script setup>
defineProps({
  title: String,
  text: String,
  button: String,
  url: String,
  items: Array
})
</script>

<template>
  <section v-if="items.length" class="pt-32 sm:pt-20">
    <LayoutContainer>
      <div class="flex items-center justify-between mb-16 sm:mb-8">
        <div>
          <h2 class="mb-4 sm:mb-3">{{ title }}</h2>
          <p v-if="text">{{ text }}</p>
        </div>
        <UiButton class="sm:!hidden" :href="url">{{ button }}</UiButton>
      </div>
      <ul class="bg-light-green rounded-2xl flex sm:block">
        <li v-for="i, index in items" :key="index" class="py-16 px-8 sm:px-sm sm:py-10" :class="{ 'border-r sm:border-r-0 sm:border-b border-light-gray': index !== items.length - 1 }">
          <figure class="pb-4 border-b-4 inline-block border-green mb-6">
            <img class="w-8" v-if="i.icon" :src="i.icon" :alt="i.title">
          </figure>
          <h6 class="text-xl mb-4" v-html="i.title"></h6>
          <p v-if="i.text">{{ i.text }}</p>
        </li>
      </ul>
      <div class="hidden sm:flex justify-center mt-8">
        <UiButton :href="url">{{ button }}</UiButton>
      </div>
    </LayoutContainer>
  </section>
</template>