<script setup>
defineProps({
    logo: String,
    name: String,
    socials: Array,
    subtext: String,
    menu: Object,
    subtitle: String,
    email: String,
    contact: String,
    privacy: String,
    terms: String
})
</script>

<template>
    <footer class="bg-black mt-32 sm:mt-20">
        <LayoutContainer>
            <div class="py-20 sm:py-16 flex items-start justify-between sm:flex-col gap-12">
                <div>
                    <NuxtLink to="/">
                        <NuxtImg class="h-12" :src="logo" :alt="name" />
                    </NuxtLink>
                    <div class="flex items-center gap-6 mt-12 sm:mt-8">
                        <ul v-if="socials.length">
                            <li
                                v-for="social, index in socials"
                                :key="index"
                            >
                                <a :href="social.url" target="_blank">
                                    <img class="min-w-[56px] max-w-[56px]" :src="social.icon.sourceUrl" :alt="social.name">
                                </a>
                            </li>
                        </ul>
                        <p v-if="subtext" class="text-sm leading-[160%] max-w-[280px] w-full">{{ subtext }}</p>
                    </div>
                </div>
                <div v-if="menu.menuItems.nodes.length">
                    <h6 class="text-white font-semibold text-lg mb-8 sm:mb-6">{{ menu.name }}</h6>
                    <ul class="flex flex-col gap-5">
                        <li
                            v-for="link, index in menu.menuItems.nodes"
                            :key="index"
                        >
                            <a class="font-medium text-base text-gray hover:text-white" :href="link.uri" :target="link.target ? '_blank' : '_self'">{{ link.label }}</a>
                        </li>
                    </ul>
                </div>
                <div class="max-w-[360px] w-full">
                    <h5 v-if="subtitle" class="font-semibold text-3xl leading-[120%] text-white mb-8 sm:mb-6" v-html="subtitle"></h5>
                    <div v-if="email">
                        <small class="text-gray mb-1 uppercase font-normal text-xs block">E-mail</small>
                        <a :href="`mailto:${email}`" target="_blank" class="font-semibold text-xl text-white">{{ email }}</a>
                    </div>
                    <small class="text-gray mb-1 uppercase font-normal text-xs block mt-4">OR</small>   
                    <a class="inline-flex items-center gap-2 font-semibold text-xl text-green pb-1 border-b border-green" v-if="contact" href="/contact-us" target="_blank">
                        {{ contact }}
                        <VectorsUtilsArrowGreen />
                    </a>
                </div>
            </div>

            <div class="flex items-center sm:flex-col gap-6 justify-between py-8 border-t border-[rgba(255,255,255,.32)]">
                <div class="flex gap-8 sm:gap-y-1 sm:justify-center sm:flex-wrap">
                    <p class="font-regular text-xs leading-[160%] text-white text-center sm:w-full sm:text-center">{{ name }} © {{ new Date().getFullYear() }} | All rights reserved.</p>
                    <a class="font-regular text-xs leading-[160%] underline text-white text-center" v-if="privacy" href="/policy-privacy" target="_blank">{{ privacy }}</a>
                    <a class="font-regular text-xs leading-[160%] underline text-white text-center" v-if="terms" href="/terms-of-use" target="_blank">{{ terms }}</a>
                </div>
                <UiLanguage flat top />
            </div>
        </LayoutContainer>
    </footer>
</template>