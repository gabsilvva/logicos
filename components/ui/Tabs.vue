<script setup>
defineProps({
    tabs: Array
})

const active = ref(0)
</script>

<template>
    <section class="pt-32 sm:pt-20">
        <LayoutContainer class="sm:!px-0">
            <div class="flex justify-between items-start gap-16">
                <div class="max-w-[550px] w-full flex flex-col items-start sm:hidden pt-8">
                    <h4 v-if="tabs[active].title">{{ tabs[active].title }}</h4>
                    <p v-if="tabs[active].text" class="mt-6">{{ tabs[active].text }}</p>
                    <ul v-if="tabs[active].bullets.length" class="mt-8 flex flex-col gap-4">
                        <li
                            v-for="i, index in tabs[active].bullets"
                            :key="index"
                            class="flex items-start gap-2"
                        >
                            <img class="min-w-[24px] max-w-[24px]" src="/temp/check.svg" alt="Check">
                            <p class="w-full"><strong class="!font-semibold">{{ i }}</strong></p>
                        </li>
                    </ul>
                    <UiButton v-if="tabs[active].button" :href="tabs[active].url" class="mt-12">{{ tabs[active].button }}</UiButton>
                </div>
                <nav class="max-w-[460px] sm:max-w-full w-full border-t border-light-gray">
                    <template
                        v-for="i, index in tabs"
                        :key="index"
                    >
                        <button
                            type="button"
                            class="flex items-center gap-8 sm:gap-6 text-gray font-semibold text-2xl sm:text-xl border-b border-light-gray w-full h-[112px] px-12 sm:px-sm sm:h-20"
                            :class="{ '!text-black bg-light-green': active === index }"
                            @click="active = index"
                        >
                            <img class="min-w-[32px] max-w-[32px] sm:min-w-[24px] sm:max-w-[24px]" :class="{ 'brightness-0 opacity-50': active !== index }" :src="i.icon" :alt="i.name">
                            {{ i.name }}
                        </button>
                        <div v-if="active === index" class="hidden sm:flex flex-col items-start pt-8 pb-4 px-sm">
                            <h4 v-if="i.title">{{ i.title }}</h4>
                            <p v-if="i.text" class="mt-4">{{ i.text }}</p>
                            <ul v-if="i.bullets.length" class="flex flex-col gap-4 mt-6">
                                <li
                                    v-for="i, index in i.bullets"
                                    :key="index"
                                    class="flex items-start gap-2"
                                >
                                    <img class="min-w-[24px] max-w-[24px]" src="/temp/check.svg" alt="Check">
                                    <p class="w-full"><strong class="!font-semibold">{{ i }}</strong></p>
                                </li>
                            </ul>
                            <UiButton v-if="i.button" :href="i.url" class="mt-8">{{ i.button }}</UiButton>
                        </div>
                    </template>
                </nav>
            </div>
        </LayoutContainer>
    </section>
</template>