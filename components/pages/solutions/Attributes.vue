<script setup>
defineProps({
    title: String,
    text: String,
    button: String,
    url: String,
    mockup: String,
    ballons: Array,
    cards: Array
})
</script>

<template>
    <section class="pt-32 sm:pt-20">
        <LayoutContainer>
            <UiTitle :text="title" />
            <div class="flex sm:flex-col-reverse justify-between gap-16 sm:gap-10 border-b border-light-gray pb-16 sm:pb-8">
                <div class="max-w-[660px] min-w-[660px] sm:min-w-0 w-full">
                    <figure class="relative">
                        <img class="w-full sm:hidden" src="/img/mockup.png" alt="Mockup">
                        <img class="absolute top-[18px] left-2/4 translate-x-[-50%] w-[570px] h-[358px] sm:relative sm:top-0 sm:left-0 sm:translate-x-0 sm:w-full sm:h-auto shadow-inner-[0_0_8px_rgba(0,0,0,.32)] sm:rounded-2xl sm:shadow-[0_0_48px_rgba(0,0,0,.16)]" :src="mockup" alt="Mockup">
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
                    <ul v-if="cards.length" class="mt-16 sm:mt-8 grid grid-cols-2 relative before:absolute before:w-px before:h-full before:bg-white before:top-0 before:right-0 after:absolute after:w-full after:h-px after:bg-white after:bottom-0 after:left-0">
                        <li
                            v-for="i, index in cards"
                            :key="index"
                            class="border-r border-b border-light-gray py-16 sm:py-8 sm:px-6"
                        >
                            <div class="flex flex-col items-center max-w-[240px] sm:max-w-full mx-auto w-full">
                                <figure class="h-[100px] sm:h-16 flex items-center justify-center">
                                    <img class="max-h-full" :src="i.icon" :alt="i.title">
                                </figure>
                                <h6 class="text-center sm:!text-lg mt-8 mb-4 sm:mt-6 sm:mb-3">{{ i.title }}</h6>
                                <p class="text-center sm:text-[13px]">{{ i.text }}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="max-w-[320px] w-full">
                    <div class="sticky sm:relative sm:top-0 sm:gap-6 top-32 flex flex-col items-start gap-10">
                        <p>{{ text }}</p>
                        <UiButton :href="url">{{ button }}</UiButton>
                    </div>
                </div>
            </div>
        </LayoutContainer>
    </section>
</template>