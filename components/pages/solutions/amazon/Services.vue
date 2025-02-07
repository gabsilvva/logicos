<script setup>
defineProps({
  items: Array
})

const active = ref(0)
</script>

<template>
  <section class="mb-4 sm:mb-0">
    <LayoutContainer>
      <nav
        class="sm:mt-8 flex items-center justify-between gap-10 sm:flex-col sm:gap-8 border-b border-light-gray sm:border-b-0">
        <template v-for="i, index in items" :key="index">
          <div class="sm:w-full">
            <button type="button"
              class="font-semibold text-2xl sm:text-xl flex items-center gap-6 sm:gap-3 py-10 sm:py-0 sm:w-full"
              @click="active = index">
              <span :class="{ 'before:!block !bg-light-green !border-light-green': active === index }"
                class="block h-8 min-w-[32px] sm:h-6 sm:min-w-[24px] sm:max-w-[24px] max-w-[32px] rounded-full border border-light-gray relative before:absolute before:top-2/4 before:left-2/4 before:bg-green before:rounded-full before:w-4 before:h-4 before:translate-y-[-50%] before:translate-x-[-50%] before:hidden sm:before:w-3 sm:before:h-3"></span>
              {{ i.name }}
            </button>
            <div v-if="active === index" class="hidden mt-4 sm:flex flex-col items-start">
              <p v-html="i.description"></p>
              <UiButton v-if="i.button" class="mt-6" href="{{ i.url }}">{{
                i.button }}</UiButton>
            </div>
          </div>
        </template>
      </nav>
      <div class="mt-10 flex flex-col items-center sm:hidden border-b border-light-gray pb-24 sm:pb-20">
        <p class="text-center max-w-[900px] w-full mx-auto" v-html="items[active].description"></p>
        <UiButton v-if="items[active].button" class="mt-10" href="{{ items[active].url }}">{{
          items[active].button }}</UiButton>
      </div>
    </LayoutContainer>
  </section>
</template>