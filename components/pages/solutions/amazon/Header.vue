<script setup>
defineProps({
    title: String,
    icon1: String,
    icon2: String,
    text: String,
    image: String
})
</script>

<template>
    <section class="pt-top sm:pt-topm bg-black">
        <LayoutContainer>
            <div class="mb-8 sm:mb-6 flex items-center">
                <UiIcon icon="/temp/a.png" class="!m-0" />
                <span class="w-6 h-6 bg-black mx-[-8px] rounded-full relative z-10"></span>
                <UiIcon bg="#44BD32" icon="/temp/li.svg" class="!m-0" />
            </div>
            <div class="flex items-center gap-2 justify-between mb-20 sm:mb-10 sm:flex-col sm:items-start">
                <h1 class="text-white">{{ title }}</h1>
                <p class="text-white max-w-[460px] w-full">{{ text }}</p>
            </div>
            <img class="rounded-tl-3xl rounded-tr-3xl" :src="image" :alt="title">
        </LayoutContainer>
    </section>
</template>