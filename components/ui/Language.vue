<script setup>
defineProps({
    flat: Boolean,
    top: Boolean,
    white: Boolean
})

const langs = ['EN', 'ES']
const open = ref(false)
</script>

<template>
    <div class="relative">
        <button :class="{ 'border border-light-gray py-3 px-4 rounded-full': !flat, '!border-[rgba(255,255,255,.32)]': white }" class="flex items-center" type="button" @click="open = !open">
            <VectorsUtilsLanguage :class="{ 'brightness-0 invert': flat || white }" />
            <span class="block ml-2 mr-4 font-medium text-base" :class="{ 'text-white': flat || white }">{{ langs[0] }}</span>
            <VectorsUtilsArrowSmall :class="{ 'rotate-[180deg]': open, 'brightness-0 invert': flat || white }" />
        </button>

        <article v-if="open" class="border border-light-gray text-left absolute bottom-[-8px] sm:bottom-[initial] sm:top-[-8px] sm:translate-y-[-100%] translate-y-[100%] left-0 w-full bg-white rounded-xl overflow-hidden z-40" :class="{ '!bottom-[initial] !top-[-8px] !translate-y-[-100%]': top }">
            <button
                type="button"
                v-for="i, index in langs"
                :key="index"
                class="block py-3 font-medium text-sm px-4 w-full text-left hover:bg-light-green"
                :class="{ 'border-b border-light-gray': index !== langs.length - 1 }"
            >
                {{ i }}
            </button>
        </article>
    </div>
</template>