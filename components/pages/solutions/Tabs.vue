<script setup>
defineProps({
    title: String,
    tabs: Array
})

const active = ref(0)
</script>

<template>
    <section class="pt-32 sm:pt-20">
        <LayoutContainer>
            <h2 class="text-center mb-16 sm:mb-10">{{ title }}</h2>
        </LayoutContainer>
        <nav class="flex justify-center sm:justify-start sm:px-sm gap-10 sm:gap-6 border-b border-light-gray pb-8 sm:pb-6 mb-16 sm:mb-10 overflow-x-auto">
            <button
                v-for="i, index in tabs"
                :key="index"
                type="button"
                @click="active = index"
                class="flex items-center gap-3 sm:gap-2 min-w-max font-semibold text-lg sm:text-base whitespace-nowrap text-gray group"
                :class="{ '!text-black': active === index }"
            >
                <img
                    class="max-h-[24px] grayscale group-hover:grayscale-0"
                    :class="{ '!grayscale-0': active === index }"
                    :src="i.icon"
                    :alt="i.name"
                >
                {{ i.name }}
            </button>
        </nav>
        <LayoutContainer>
            <div class="flex items-center justify-between gap-16 sm:gap-10 sm:block">
                <figure v-if="tabs[active].image" class="max-w-[450px] sm:max-w-full w-full flex items-center justify-center sm:mb-8">
                    <img :src="tabs[active].image" :alt="tabs[active].name">
                </figure>
                <div class="max-w-[500px] sm:max-w-full w-full flex flex-col items-start">
                    <h4>{{ tabs[active].name }}</h4>
                    <p v-if="tabs[active].description" class="mt-6 mb-10 sm:mt-4 sm:mb-8">{{ tabs[active].description }}</p>
                    <UiButton v-if="tabs[active].button" :href="tabs[active].url">{{ tabs[active].button }}</UiButton>
                </div>
            </div>
        </LayoutContainer>
    </section>
</template>