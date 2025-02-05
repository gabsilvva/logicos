<script setup>
defineProps({
    icon: String,
    title: String,
    text: String,
    button: String,
    url: String,
    image: String
})
</script>

<template>
    <section class="relative pt-top sm:pt-topm bg-light-green before:absolute before:bottom-0 before:left-0 before:w-full before:h-20 before:bg-white before:z-10">
        <LayoutContainer class="relative z-20">
            <div class="flex flex-col items-center">
                <UiIcon v-if="icon" :icon="icon" />
                <h1 class="text-center">{{ title }}</h1>
                <p class="mt-4 text-center">{{ text }}</p>
                <UiButton class="mt-8 sm:mt-8 relative z-20" :href="url">{{ button }}</UiButton>
                <img class="relative z-10 mt-[-52px]" :src="image" alt="Foto">
            </div>
        </LayoutContainer>
    </section>
</template>