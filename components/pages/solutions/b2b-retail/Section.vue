<script setup>
defineProps({
    title: String,
    image: String,
    text: String,
    button: String,
    url: String
})
</script>

<template>
    <section class="pt-32 sm:pt-20">
        <LayoutContainer>
            <UiTitle v-if="title" :text="title" />
            <img v-if="image" :src="image" :alt="title" class="w-full rounded-3xl">
            <div class="mt-16 sm:mt-8 flex items-center justify-between sm:flex-col sm:items-start gap-6">
                <p v-if="text" class="max-w-[600px] w-full">{{ text }}</p>
                <UiButton v-if="button" :href="url">{{ button }}</UiButton>
            </div>
        </LayoutContainer>
    </section>
</template>