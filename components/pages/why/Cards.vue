<script setup>
defineProps({
    title: String,
    button: String,
    url: String,
    cards: Array,
    subtitle: String,
    words: Array
})
</script>

<template>
    <section class="pt-32 sm:pt-20">
        <LayoutContainer>
            <div class="flex items-center justify-between mb-16 sm:mb-8">
                <h2 class="sm:text-center">{{ title }}</h2>
                <UiButton class="sm:!hidden" :href="url">{{ button }}</UiButton>
            </div>
            <ul class="grid grid-cols-3 sm:grid-cols-1 gap-6 sm:gap-4">
                <li
                    v-for="i, index in cards"
                    :key="index"
                    class="bg-light-green pt-4 px-4 pb-8 rounded-xl"
                >
                    <div class="bg-white p-6 rounded-xl h-[182px] sm:h-auto">
                        <img class="mb-10 sm:mb-6" :src="i.icon" :alt="i.title">
                        <h6 v-html="i.title"></h6>
                    </div>
                    <p class="pt-10 sm:pt-8 px-6">{{ i.text }}</p>
                </li>
            </ul>
            <div class="hidden sm:flex mt-8 justify-center">
                <UiButton :href="url">{{ button }}</UiButton>
            </div>
            <div v-if="words.length">
                <h5 class="pt-20 sm:pt-12 sm:pb-6 pb-8 sm:text-center">{{ subtitle }}</h5>
                <ul class="flex flex-wrap sm:justify-center sm:gap-3 gap-4">
                    <li
                        v-for="i, index in words"
                        :key="index"
                    >
                        <p
                            class="border border-light-gray text-gray uppercase text-base sm:text-sm font-medium leading-[100%] rounded-full px-6 sm:px-4 sm:py-2 py-3"
                            :class="{ 'text-green bg-light-green border-0': index === words.length - 1 }"
                        >
                            {{ i }}
                        </p>
                    </li>
                </ul>
            </div>
        </LayoutContainer>
    </section>
</template>