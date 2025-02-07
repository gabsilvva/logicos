<script setup>
defineProps({
  title: String,
  text: String,
  button: String,
  url: String
})
</script>

<template>
  <section class="relative pt-top sm:pt-topm pb-24 sm:pb-16 bg-green overflow-hidden">
    <LayoutContainer>
      <div class="relative z-20 flex flex-col items-center">
        <div class="mb-8 sm:mb-6 flex items-center">
          <UiIcon bg="rgba(255,255,255,.24)" icon="/temp/sb1.svg" class="!m-0" />
          <span class="w-6 h-6 bg-green mx-[-8px] rounded-full relative z-10"></span>
          <UiIcon bg="rgba(255,255,255,.24)" icon="/temp/sb2.svg" class="!m-0" />
        </div>
        <h1 class="text-white text-center mb-6 sm:mb-4">{{ title }}</h1>
        <p class="text-white text-center mx-auto w-full max-w-[750px] mb-10 sm:mb-8">{{ text }}</p>
        <UiButton white :href="url">{{ button }}</UiButton>
      </div>
    </LayoutContainer>
    <img class="absolute bottom-0 left-2/4 translate-x-[-50%] sm:max-w-min z-10" src="/img/calendar.svg" alt="Calendar">
  </section>
</template>