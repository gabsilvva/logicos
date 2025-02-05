<script setup>
defineProps({
    title: String,
    text: String,
    cards: Array
})
</script>

<template>
    <section class="pt-32 sm:pt-20">
        <LayoutContainer>
            <h2 class="text-center">{{ title }}</h2>
            <p class="max-w-[700px] text-center w-full mx-auto mt-8 sm:mt-6 mb-16 sm:mb-8">{{ text }}</p>
            <ul class="flex justify-center gap-16 sm:items-center flex-wrap">
                <li
                    v-for="i, index in cards"
                    :key="index"
                    class="flex flex-col items-center max-w-[330px] w-full"
                >
                    <img class="h-[100px]" :src="i.icon" :alt="i.title">
                    <h6 class="text-center mt-6 mb-4">{{ i.title }}</h6>
                    <p class="text-center">{{ i.text }}</p>
                </li>
            </ul>
        </LayoutContainer>
    </section>
</template>