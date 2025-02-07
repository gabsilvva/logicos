<script setup>
defineProps({
  title: String,
  items: Array
})
</script>

<template>
  <section v-if="items.length" class="pt-32 sm:pt-20">
    <LayoutContainer>
      <h3 class="mb-16 sm:mb-8 text-center">{{ title }}</h3>
      <div class="flex justify-center gap-20 sm:gap-8 flex-wrap">
        <div v-for="i, index in items" :key="index" class="p-10 sm:pb-sm sm:pt-40 sm:px-sm rounded-3xl sm:rounded-2xl h-[560px] sm:h-auto max-w-[520px] w-full flex flex-col items-start justify-end" :style="`background: linear-gradient(to bottom, transparent 0%, rgba(23,23,23,.8) 50%), url('${i.image}') center/cover no-repeat;`">
          <h5 class="mb-8 sm:mb-4 text-white" v-html="i.title"></h5>
          <UiBullets white :items="i.bullets" />
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>