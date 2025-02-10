<script setup>
defineProps({
  title: String,
  items: Array
})
</script>

<template>
  <section class="pt-32 sm:pt-20 c-services overflow-hidden">
    <LayoutContainer>
      <h3 v-if="title" class="mb-10 sm:mb-8 sm:text-center">{{ title }}</h3>
      <Swiper
        class="!pb-px"
        :modules="[SwiperAutoplay]"
        :breakpoints="{
          300: {
            slidesPerView: 2,
            spaceBetween: 16
          },
          1080: {
            slidesPerView: 3,
            spaceBetween: 24
          }
        }"
        :autoplay="{
          delay: 1000,
          disableOnInteraction: false,
        }"
        :loop="true"
      >
        <SwiperSlide
          v-for="i, index in items"
          :key="index"
          class="p-6 sm:p-4 border border-light-gray rounded-2xl !h-auto"
        >
          <img class="h-8 sm:h-6 mb-10 sm:mb-6" :src="i.icon" :alt="i.text">
          <h6 class="sm:!text-base" v-html="i.text"></h6>
        </SwiperSlide>
      </Swiper>
    </LayoutContainer>
  </section>
</template>

<style lang="postcss">
.c-services {
  .swiper {
    @apply overflow-visible;
  }
}
</style>