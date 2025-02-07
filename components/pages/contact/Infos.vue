<script setup>
defineProps({
  title: String,
  text: String,
  email: String,
  phone: String,
  address: String
})
</script>

<template>
  <div class="max-w-[400px] w-full">
    <h1 class="mb-6 sm:mb-4">{{ title }}</h1>
    <p v-if="text" class="mb-12 sm:mb-6">{{ text }}</p>
    <ul class="flex flex-col gap-6 sm:gap-4">
      <template
        v-for="i, index in [
          {
            icon: 'email',
            text: email
          },
          {
            icon: 'phone',
            text: phone
          },
          {
            icon: 'address',
            text: address
          }
        ]"
        :key="index"
      >
        <li v-if="i.text" class="flex items-center">
          <img class="sm:w-6" :src="`/img/${i.icon}.svg`" :alt="i.icon">
          <p v-html="i.text" class="text-black pl-8 sm:pl-4 ml-8 sm:ml-4 py-2 sm:py-1 border-l border-light-gray font-medium"></p>
        </li>
      </template>
    </ul>
  </div>
</template>