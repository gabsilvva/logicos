<script setup>
defineProps({
  items: Array
})
</script>

<template>
  <section class="pt-16 sm:pt-10" v-if="items.length">
    <div
      v-for="i, index in items"
      :key="index"
    >
      <LayoutContainer>
        <div class="flex border-b sm:flex-col-reverse border-light-gray px-16 sm:px-0" :class="{ 'border-t': index === 0, 'flex-row-reverse': (index % 2) === 0 }">
          <figure class="flex-1">
            <img class="w-full min-h-[360px] sm:min-h-0 sm:h-[240px] object-cover" :src="i.image" :alt="i.title">
          </figure>
          <div class="py-16 flex-1 sm:py-10">
            <div class="flex items-start flex-col pr-16 sm:pr-0" :class="{ 'pl-16 pr-0 sm:pl-0': (index % 2) !== 0 }">
              <h5>{{ i.title }}</h5>
              <p v-if="i.text" v-html="i.text" class="mt-6 sm:mt-4 !text-base"></p>
              <UiButton v-if="i.button" :href="i.url" class="mt-8 sm:mt-6">{{ i.button }}</UiButton>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </div>
  </section>
</template>