<script setup>
defineProps({
    text: String
})
</script>

<template>
    <h2 class="pl-20 sm:pl-8 border-l-4 border-green mb-16 sm:mb-8 max-w-[1030px] w-full" v-html="text"></h2>
</template>