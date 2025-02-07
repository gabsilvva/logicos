<script setup>
defineProps({
  title: String,
  number: String,
  text: String
})
</script>

<template>
  <section class="bg-light-green pt-top sm:pt-topm pb-24 sm:pb-16">
    <LayoutContainer>
      <div class="flex justify-center sm:flex-col gap-20 sm:gap-8">
        <h1 class="max-w-[770px] w-full">{{ title }}</h1>
        <div v-if="number" class="border-l border-light-gray pl-20 sm:pl-0 sm:border-l-0 sm:border-t sm:w-full sm:pt-6">
          <h2 v-if="number" class="mb-2 !text-8xl sm:!text-6xl !font-bold text-green">{{ number }}</h2>
          <p v-if="text" class="text-gray font-normal text-3xl sm:text-2xl">{{ text }}</p>
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>