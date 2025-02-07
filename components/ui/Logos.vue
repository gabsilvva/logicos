<script setup>
defineProps({
  title: String,
  items: Array
})
</script>

<template>
  <section v-if="items.length">
    <LayoutContainer>
      <h4 v-if="title" class="mb-6">{{ title }}</h4>
      <ul class="grid grid-cols-6 sm:grid-cols-2 relative before:w-px before:h-full before:bg-white before:z-10 before:absolute before:top-0 before:right-0">
        <li
          v-for="i, index in items"
          :key="index"
          class="px-4 sm:px-2 h-[128px] sm:h-[80px] relative before:w-px before:h-3/4 before:bg-light-gray before:absolute before:top-2/4 before:translate-y-[-50%] before:right-0"
        >
          <NuxtLink class="border-b border-light-gray flex items-center justify-center w-full h-full p-2" :to="i.url" target="_blank">
            <img class="max-h-full" :src="i.logo" :alt="i.name">
          </NuxtLink>
        </li>
      </ul>
    </LayoutContainer>
  </section>
</template>