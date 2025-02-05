<script setup>
defineProps({
    title: String,
    items: Array
})
</script>

<template>
    <section class="c-testimonials bg-light-green mt-32 sm:mt-20 sm:py-20">
        <LayoutContainer>
            <div class="flex justify-between sm:flex-col-reverse">
                <div class="mt-8 items-center gap-4 hidden sm:flex">
                    <button data-prev class="relative z-20" type="button">
                        <VectorsUtilsPrev />
                    </button>
                    <button data-next class="relative z-20" type="button">
                        <VectorsUtilsNext />
                    </button>
                </div>
                <Swiper
                    class="max-w-[460px] w-full mx-0 !py-32 sm:!py-0"
                    :modules="[SwiperNavigation]"
                    :slides-per-view="1"
                    :loop="true"
                    :navigation="{
                        prevEl: '.c-testimonials [data-prev]',
                        nextEl: '.c-testimonials [data-next]'
                    }"
                >
                    <SwiperSlide
                        v-for="i, index in items"
                        :key="index"
                    >
                        <VectorsUtilsQuote />
                        <h6 class="mt-8 mb-10 !font-medium">{{ i.text }}</h6>
                        <div class="flex items-center">
                            <div class="border-r border-light-gray pr-12 mr-12">
                                <p><strong class="!text-lg">{{ i.name }}</strong></p>
                                <p class="!font-light">{{ i.ocupation }} of {{ i.company }}</p>
                            </div>
                            <img class="max-h-[48px] sm:max-h-[40px]" :src="i.logo" :alt="i.company">
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div class="flex flex-col items-center justify-center gap-4 relative before:w-px before:h-full before:bg-light-gray before:absolute before:left-2/4 before:top-0 before:translate-x-[-50%] before:z-10 sm:hidden">
                    <button data-prev class="relative z-20" type="button">
                        <VectorsUtilsPrev />
                    </button>
                    <button data-next class="relative z-20" type="button">
                        <VectorsUtilsNext />
                    </button>
                </div>
                <h3 class="max-w-[380px] w-full flex items-center sm:mb-8">{{ title }}</h3>
            </div>
        </LayoutContainer>
    </section>
</template>