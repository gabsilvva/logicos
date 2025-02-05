<script setup>
defineProps({
    title: String,
    button: String,
    url: String,
    mockup: String,
    ballons: Array
})
</script>

<template>
    <section class="pt-32 sm:pt-20">
        <LayoutContainer>
            <div class="flex flex-col items-center">
                <h2 class="mb-16 sm:mb-10 text-center" v-html="title"></h2>
                <figure class="relative max-w-[660px] w-full mx-auto">
                    <img class="w-full sm:hidden" src="/img/mockup.png" alt="Mockup">
                    <img class="absolute top-[18px] left-2/4 translate-x-[-50%] w-[570px] h-[358px] sm:relative sm:top-0 sm:left-0 sm:translate-x-0 sm:w-full sm:h-auto shadow-inner-[0_0_8px_rgba(0,0,0,.32)] sm:rounded-2xl sm:shadow-[0_0_48px_rgba(0,0,0,.16)]" src="/temp/transparent.png" alt="Mockup">
                    <img
                        v-for="i, index in ballons"
                        :key="index"
                        :src="i"
                        alt="Informações"
                        class="absolute shadow-[0_8px_48px_rgba(0,0,0,.08)] w-full sm:hidden"
                        :class="{
                            'top-40 left-[-32px] max-w-[300px]': index === 0,
                            'top-16 right-[-32px] max-w-[300px]': index === 1,
                            'bottom-20 right-[-32px] max-w-[200px]': index === 2
                        }"
                    >
                </figure>
                <UiButton v-if="button" :href="url" class="mt-16 sm:mt-10">{{ button }}</UiButton>
            </div>
        </LayoutContainer>
    </section>
</template>