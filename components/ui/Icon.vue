<script setup>
defineProps({
    icon: String,
    bg: String
})
</script>

<template>
    <div class="flex items-center justify-center rounded-full w-12 h-12 sm:w-10 sm:h-10 mb-4 sm:mb-3" :style="`background: ${bg ?? '#FFFFFF'};`">
        <img class="max-w-[32px] max-h-[32px] sm:max-w-[24px] sm:max-h-[24px]" :src="icon" alt="Icon">
    </div>
</template>