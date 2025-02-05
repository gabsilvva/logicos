<script setup>
defineProps({
    title1: String,
    title2: String,
    subtitle: String,
    text: String,
    logo: String,
    name: String
})
</script>

<template>
    <section class="pt-32 sm:pt-20">
        <LayoutContainer>
            <div class="flex items-center justify-between sm:flex-col sm:items-start sm:gap-4 max-w-[930px] w-full mx-auto relative z-10">
                <div class="flex items-center gap-8 sm:gap-6 pl-7 sm:pl-0 sm:ml-auto" v-if="title1">
                    <h5 class="text-right sm:text-left" v-html="title1"></h5>
                    <VectorsPagesHomeIcon1 />
                </div>
                <div class="flex items-center gap-8 sm:gap-6" v-if="title2">
                    <VectorsPagesHomeIcon2 />
                    <h5 v-html="title2"></h5>
                </div>
            </div>
            <div v-if="logo" class="relative mt-[-152px] sm:mt-[-40px] mb-[-88px] sm:mb-[-40px] flex justify-center">
                <img class="absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] max-w-[275px] sm:max-w-[120px] min-h-[80px] w-full" :src="logo" :alt="name">
                <VectorsPagesHomeCircle class="h-auto" />
            </div>
            <div class="relative z-10">
                <h6 v-if="subtitle" class="mb-6 text-green text-center font-semibold text-lg uppercase">{{ subtitle }}</h6>
                <p v-if="text" class="text-center max-w-[750px] w-full mx-auto" v-html="text"></p>
            </div>
        </LayoutContainer>
    </section>
</template>