<script setup>
defineProps({
    number: String,
    title: String,
    text: String,
    logos: Array
})
</script>

<template>
    <section class="bg-light-green py-32 sm:py-20 mt-32 sm:mt-20">
        <LayoutContainer>
            <div class="flex gap-12 sm:block">
                <h2 class="text-green !font-bold !text-[128px] sm:!text-[80px] whitespace-nowrap">{{ number }}+</h2>
                <aside class="w-full">
                    <h4 class="mb-4">{{ title }}</h4>
                    <p class="mb-10 max-w-[650px] w-full">{{ text }}</p>
                    <ul class="flex flex-wrap items-center gap-x-7 gap-y-8 sm:gap-x-8 sm:gap-y-6">
                        <li
                            v-for="i, index in logos"
                            :key="index"
                        >
                            <img class="max-h-[40px] sm:max-h-[32px] grayscale" :src="i.logo" :alt="i.name">
                        </li>
                    </ul>
                </aside>
            </div>
        </LayoutContainer>
    </section>
</template>