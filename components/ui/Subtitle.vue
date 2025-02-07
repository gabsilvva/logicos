<script setup>
defineProps({
  text: String,
  green: Boolean,
  center: Boolean
})
</script>

<template>
  <h6 v-if="text" :class="{ '!text-green': green, 'text-center': center }" class="uppercase text-gray mb-8 sm:mb-4 font-medium text-lg sm:!text-base tracking-widest">{{ text }}</h6>
</template>