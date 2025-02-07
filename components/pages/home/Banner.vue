<script setup>
const props = defineProps({
    title: String,
    words: Array,
    text: String,
    button: String,
    url: String,
    video: Object,
    numbers: Array
})

const active = ref(0)

onMounted(() => setInterval(() => active.value === props.words.length - 1 ? active.value = 0 : active.value++, 3000))

const pause = ref(false)

function toggle() {
    const video = document.querySelector(".c-home-banner video")

    pause.value = !pause.value

    if(pause.value) video.pause()
    else video.play()
}
</script>

<template>
    <section class="c-home-banner relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[rgba(23,23,23,.64)] before:z-20 py-[200px] sm:py-topm">
        <LayoutContainer class="relative z-30 flex flex-col items-start">
            <h1 class="text-white mb-8 sm:mb-4 max-w-[700px] w-full">
                {{ title }}
                <div v-if="words.length" class="relative inline sm:block ml-4 sm:ml-0 sm:h-12">
                    <span
                        v-for="i, index in words"
                        :key="index"
                        :class="{ 'active': active === index }"
                        class="!font-bold text-white absolute top-0 left-0 whitespace-nowrap underline"
                    >
                        {{ i.word }}
                    </span>
                </div>
            </h1>
            <div v-if="text" v-html="text" class="mb-12 sm:mb-10 max-w-[640px] w-full p"></div>
            <div class="flex items-center gap-10 sm:justify-between sm:w-full">
                <UiButton v-if="button" :href="url">{{ button }}</UiButton>
                <button @click="toggle" type="button">
                    <VectorsUtilsPlay v-if="pause" />
                    <VectorsUtilsPause v-else />
                </button>
            </div>
        </LayoutContainer>
        <video v-if="video.mediaItemUrl" autoplay loop muted class="absolute top-0 left-0 w-full h-full object-cover z-10">
            <source :src="video.mediaItemUrl" :type="video?.mimeType">
        </video>
    </section>
    <section v-if="numbers.length" class="border-b border-light-gray bg-light-green">
        <LayoutContainer class="sm:!px-0">
            <ul class="flex sm:block">
                <li
                    v-for="i, index in numbers"
                    :key="index"
                    class="py-12 sm:py-8 flex-1 sm:px-sm"
                >
                    <div class="max-w-[280px] sm:max-w-full w-full">
                        <h2 class="flex items-start gap-2 mb-4 !leading-[100%] !font-bold"><span class="text-green !font-bold !text-3xl sm:!text-2xl !leading-[100%]">+</span>{{ i.number }}</h2>
                        <p>{{ i.text }}</p>
                    </div>
                </li>
            </ul>
        </LayoutContainer>
    </section>
</template>

<style lang="postcss" scoped>
h1 {

    span {
        opacity: 0;
        transform: translateY(-8px);

        &.active {
            opacity: 1;
            transform: translateY(0);
        }
    }
}

.p * {
    color: theme(colors.white);
}

li:not(:first-of-type) div {
    @apply mx-auto;
}

li:not(:last-of-type) {
    border-right: 1px solid theme(colors.light-gray);

    @media screen(sm) {
        border-right: unset;
        border-bottom: 1px solid theme(colors.light-gray);
    }
}
</style>