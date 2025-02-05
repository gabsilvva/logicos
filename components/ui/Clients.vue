<script setup>
defineProps({
    title: String,
    text: String,
    logos: Array
})
</script>

<template>
    <section v-if="logos.length" class="overflow-hidden pt-32 sm:pt-20">
        <LayoutContainer>
            <div class="flex justify-between items-center gap-4 mb-16 sm:mb-8">
                <h2>{{ title }}</h2>
                <p v-html="text" class="text-right sm:hidden"></p>
            </div>
        </LayoutContainer>
        <section
            v-for="_, index in Array(2)"
            :key="index"
            :class="{ 'mb-10 sm:mb-4': index === 0 }"
            class="overflow- flex items-center gap-16 sm:gap-6"
        >
            <ul class="flex items-center gap-16 sm:gap-6 min-w-max">
                <li
                    v-for="i, index2 in logos"
                    :key="index2"
                >
                    <img class="max-h-[48px] sm:max-h-[40px] sm:max-w-[96px]" :src="i.logo" :alt="i.name">
                </li>
            </ul>
            <ul class="flex items-center gap-16 sm:gap-6 min-w-max">
                <li
                    v-for="i, index2 in logos"
                    :key="index2"
                >
                    <img class="max-h-[48px] sm:max-h-[40px] sm:max-w-[96px]" :src="i.logo" :alt="i.name">
                </li>
            </ul>
        </section>
        <LayoutContainer>
            <p v-html="text" class="text-right mt-8 hidden sm:block"></p>
        </LayoutContainer>
    </section>
</template>

<style lang="postcss" scoped>
section {
    
    & > section {
        
        &:first-of-type {
            
            ul {
                animation: scroll-left 32s linear infinite;
            }
        }
        
        &:last-of-type {
            
            ul {
                animation: scroll-right 32s linear infinite;
            }
        }
    }
}

@keyframes scroll-left {
    from { transform: translateX(0); }
    to { transform: translateX(-100%); }
}

@keyframes scroll-right {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
}
</style>