<script setup>
defineProps({
  title: String,
  text: String,
  items: Array
})
</script>

<template>
  <section v-if="items.length" class="pt-32 sm:pt-20">
    <LayoutContainer>
      <div class="flex items-center justify-between gap-4 sm:flex-col sm:items-start mb-16 sm:mb-2">
        <h4 class="max-w-[360px] w-full">{{ title }}</h4>
        <p class="max-w-[550px] w-full">{{ text }}</p>
      </div>
      <ul class="grid grid-cols-3 sm:grid-cols-1">
        <li v-for="i, index in items" :key="index" class="flex-1 px-10 pb-16 border-b border-light-gray sm:px-0 sm:pb-8 sm:pt-8" :class="{ 'border-r sm:border-r-0': index !== items.length - 1 }">
          <figure v-if="i.icon" class="mb-8 relative before:bg-green before:absolute before:left-0 before:bottom-0 before:z-10 before:w-full before:h-8 px-2 pb-2 max-w-[136px] w-full mx-auto">
            <div class="bg-[rgba(243,251,243,.8)] w-[120px] h-[120px] flex justify-center pt-5 relative z-20">
              <img class="h-[56px]" :src="i.icon" :alt="i.title">
            </div>
          </figure>
          <h6 class="text-center mb-6">{{ i.title }}</h6>
          <p class="text-center">{{ i.text }}</p>
        </li>
      </ul>
    </LayoutContainer>
  </section>
</template>