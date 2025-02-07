<script setup>
defineProps({
  items: Array,
  white: Boolean,
  line: Boolean
})
</script>

<template>
  <ul v-if="items.length" class="flex flex-col gap-2" :class="{ '!flex-row sm:flex-col justify-between flex-wrap': line }">
    <li v-for="i, index in items" :key="index" class="flex items-start gap-4">
      <VectorsUtilsCheck class="min-w-[24px] max-w-[24px]" />
      <p :class="{ '!text-white': white }" class="font-semibold text-base w-full text-black">{{ i }}</p>
    </li>
  </ul>
</template>