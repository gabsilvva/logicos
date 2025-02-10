<script setup>
defineProps({
  title: String,
  text: String,
  logos: Array,
  bullets: Array
})
</script>

<template>
  <section class="pt-32 sm:pt-20">
    <LayoutContainer>
      <UiTitle :text="title" />
      <div class="flex justify-between gap-10 sm:flex-col sm:gap-6">
        <ul v-if="logos.length" class="grid grid-cols-2 gap-6 sm:gap-4 max-w-[460px] w-full">
          <li v-for="i, index in logos" :key="index" class="bg-light-green flex items-center justify-center rounded-2xl p-4 h-[80px] group flex-1">
            <img class="grayscale group-hover:grayscale-0 max-h-full" :src="i.logo" :alt="i.name">
          </li>
        </ul>
        <div class="max-w-[590px] w-full">
          <p v-if="text">{{ text }}</p>
          <UiBullets class="mt-8 sm:mt-6" :items="bullets" />
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>