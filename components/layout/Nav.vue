<script setup>
const open = ref(false)
const fixed = ref(false)
const el = ref(null)
const white = ref(false)
const route = useRoute()
const routes = [
    '/',
    '/solutions/amazon',
    '/solutions/shipping',
    '/solutions/subscription-boxes',
]

function nav() {
  if(document.body.scrollTop > 24 || document.documentElement.scrollTop > 24) fixed.value = true
  else fixed.value = false
}

onMounted(() => {
  nav()
  window.addEventListener("scroll", nav)
})

defineProps({
    logo: String,
    logoWhite: String,
    name: String,
    menu: Array,
    button: String,
    url: String,
    white: Boolean
})

watch(() => route.path, (newPath) => {
  white.value = routes.includes(newPath)
}, { immediate: true })
</script>

<template>
    <nav ref="el" class="py-8 sm:py-6 fixed top-0 left-0 w-full z-50" :class="{ 'bg-white !py-4 shadow-[0_8px_48px_rgba(0,0,0,.04)]': fixed }">
        <LayoutContainer>
            <div class="flex items-center justify-between">
                <NuxtLink class="relative z-50" @click="open = false" to="/">
                    <NuxtImg class="h-10 sm:h-8" :src="white && !open && !fixed ? logoWhite : logo" :alt="name" />
                </NuxtLink>
    
                <div
                    class="flex items-center flex-[2] sm:fixed sm:top-0 sm:left-0 sm:w-full sm:h-full sm:bg-white sm:opacity-0 sm:invisible sm:translate-x-[-100%] sm:px-sm sm:pb-8 sm:z-40 sm:overflow-y-auto sm:pt-24 sm:flex-col sm:gap-6"
                    :class="{ 'sm:!opacity-100 sm:!visible sm:!translate-x-0': open }"
                >
                    <ul class="flex-[2] flex items-center sm:flex-col sm:gap-4 sm:w-full justify-center gap-12 sm:justify-start sm:items-start">
                        <template
                            v-for="link, index in menu"
                            :key="index"
                        >
                            <li
                                v-if="!link.parentId"
                                class="group relative sm:w-full"
                            >
                                <NuxtLink
                                    class="font-medium text-base flex items-center gap-2 text-gray hover:text-black"
                                    :class="{ '!text-[rgba(255,255,255,.8)] hover:!text-white': white && !open && !fixed }"
                                    :to="link.uri"
                                    :target="link.target"
                                    @click="open = false"
                                >
                                    {{ link.label }}
                                    <VectorsUtilsArrowSmall
                                        v-if="link.childItems.nodes.length"
                                        class="group-hover:rotate-[180deg] sm:hidden"
                                        :class="{ 'invert brightness-0 opacity-80': white && !open && !fixed }"
                                    />
                                </NuxtLink>
                                <div
                                    v-if="link.childItems.nodes.length"
                                    class="pt-5 sm:pt-0 absolute left-2/4 bottom-0 translate-y-[100%] translate-x-[-50%] opacity-0 invisible group-hover:opacity-100 group-hover:visible sm:relative sm:left-0 sm:translate-y-0 sm:translate-x-0 sm:opacity-100 sm:visible sm:p-0 min-w-[200px] max-w-[200px] w-full sm:min-w-[initial] sm:max-w-full"
                                >
                                    <ul class="relative bg-white border border-light-gray rounded-xl sm:bg-transparent sm:border-0 overflow-hidden sm:overflow-visible">
                                        <li
                                            v-for="linkSubmenu, index2 in link.childItems.nodes"
                                            :key="linkSubmenu.label"
                                        >
                                            <NuxtLink
                                                class="block py-3 px-4 sm:px-0 font-medium text-sm w-full text-left hover:bg-light-green whitespace-nowrap sm:whitespace-normal sm:border-b sm:border-light-gray"
                                                :class="{ 'border-b border-light-gray': index2 !== link.childItems.nodes.length - 1 }"
                                                :to="linkSubmenu.uri"
                                                :target="linkSubmenu.target"
                                                @click="open = false"
                                            >
                                                {{ linkSubmenu.label }}
                                            </NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </template>
                    </ul>

                    <div class="flex items-center sm:justify-between sm:w-full gap-10 sm:gap-6">
                        <NuxtLink
                            :to="url"
                            class="flex items-center gap-2 font-bold text-[15px] uppercase group"
                            :class="{ 'text-white': white && !open && !fixed }"
                        >
                            {{ button }}
                            <VectorsUtilsArrowLink class="group-hover:translate-x-[4px]" :class="{ 'invert brightness-0': white && !open && !fixed }" />
                        </NuxtLink>
    
                        <!-- <UiLanguage :white="white && !open && !fixed" /> -->
                    </div>
                </div>
    
                <button
                    @click="open = !open"
                    class="hidden sm:flex items-center justify-end relative z-50 w-7"
                    type="button"
                >
                    <VectorsNavClose v-if="open" :class="{ 'brightness-0 invert': white && !open && !fixed }" />
                    <VectorsNavMenu v-else :class="{ 'brightness-0 invert': white && !open && !fixed }" />
                </button>
            </div>
        </LayoutContainer>

        <Style v-if="open" type="text/css" children="html { overflow: hidden; }"></Style>
    </nav>
</template>