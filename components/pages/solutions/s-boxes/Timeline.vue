<script setup>
defineProps({
  subtitle: String,
  items: Array
})
</script>

<template>
  <section class="pt-32 sm:pt-20">
    <LayoutContainer>
      <UiSubtitle center green :text="subtitle" class="!mb-16 sm:!mb-8" />
      <ul class="border-t border-light-gray">
        <li v-for="i, index in items" :key="index" class="flex items-start justify-between border-b border-light-gray py-16 sm:pb-10 sm:pt-10 sm:pl-20 sm:block relative overflow-hidden">
          <img class="absolute z-10 top-0 left-2/4 translate-x-[-50%] sm:left-6 sm:translate-x-0" src="/img/dotted-line.png" alt="Linha">
          <div class="flex-1 relative z-20 sm:mb-4 pt-1.5 sm:pt-0">
            <h4 class="max-w-[460px] w-full mx-auto" v-html="i.title"></h4>
          </div>
          <span class="bg-green text-white rounded-full w-16 h-16 flex items-center justify-center font-semibold text-2xl relative z-20 sm:absolute sm:top-10 sm:left-0 sm:w-12 sm:h-12 sm:text-xl">{{ index < 9 ? "0" : ""  }}{{ index + 1 }}</span>
          <div class="flex-1">
            <p class="max-w-[460px] w-full ml-auto relative z-20" v-html="i.text"></p>
          </div>
        </li>
      </ul>
    </LayoutContainer>
  </section>
</template>