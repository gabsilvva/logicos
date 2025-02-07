<script setup>
defineProps({
    title: String,
    text: String,
    button: String,
    url: String,
    image: String
})
</script>

<template>
    <section class="relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-20 before:bg-white before:z-10 pt-top sm:pt-topm bg-light-green">
        <LayoutContainer class="relative z-20">
            <h1 class="mb-6 sm:mb-4">{{ title }}</h1>
            <div class="flex items-center justify-between sm:flex-col sm:items-start gap-6">
                <p class="max-w-[550px] w-full">{{ text }}</p>
                <UiButton :href="url">{{ button }}</UiButton>
            </div>
            <img class="mt-20 sm:mt-8 w-full rounded-3xl" :src="image" :alt="title">
        </LayoutContainer>
    </section>
</template>