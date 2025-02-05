<script setup>
defineProps({
    icon: String,
    title: String,
    text: String,
    button: String,
    url: String
})
</script>

<template>
    <section class="relative pt-top sm:pt-topm pb-24 sm:pb-20 bg-light-green">
        <LayoutContainer>
            <div class="flex flex-col items-center">
                <UiIcon v-if="icon" :icon="icon" />
                <h1 class="text-center">{{ title }}</h1>
                <p class="mt-4 text-center">{{ text }}</p>
                <UiButton class="mt-8 sm:mt-8" :href="url">{{ button }}</UiButton>
            </div>
        </LayoutContainer>
    </section>
</template>