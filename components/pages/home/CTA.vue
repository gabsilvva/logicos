<script setup>
defineProps({
  subtitle: String,
  title: String,
  button: String,
  url: String,
  image: String
})
</script>

<template>
  <section v-if="title" class="mt-32 sm:mt-20 h-[480px] sm:h-[400px] flex items-end pb-16" :style="`background: linear-gradient(-135deg, transparent 0%, #44BD32 100%), url('${image}') right/cover no-repeat;`">
    <LayoutContainer>
      <h6 v-if="subtitle" class="sm:!text-sm !text-xl text-white uppercase font-semibold mb-2 sm:text-center">{{ subtitle }}</h6>
      <div class="flex items-center gap-8 justify-between sm:flex-col">
        <h2 v-if="title" class="text-white !font-extrabold sm:!text-5xl !text-[120px] sm:text-center">{{ title }}</h2>
        <UiButton v-if="button" white :href="url">{{ button }}</UiButton>
      </div>
    </LayoutContainer>
  </section>
</template>