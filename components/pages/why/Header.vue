<script setup>
defineProps({
    title: String,
    text: String,
    button: String,
    url: String
})
</script>

<template>
    <section class="pt-top sm:pt-topm pb-32 bg-light-green">
        <LayoutContainer>
            <div class="flex flex-col items-center max-w-[840px] mx-auto w-full">
                <h1 class="text-center">{{ title }}</h1>
                <p class="text-center mb-12 sm:mb-6 mt-10 sm:mt-6" v-html="text"></p>
                <UiButton :href="url">{{ button }}</UiButton>
            </div>
        </LayoutContainer>
    </section>
</template>