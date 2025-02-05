<script setup>
const config = useRuntimeConfig()
const { data, refresh, pending } = await useFetch(
  config.public.apiBase,
  {
    method: 'get',
    query: {
      query: `
              query Home {
                page(id: "273", idType: DATABASE_ID) {
                  seo {
                    title
                    metaDesc
                  }
                  home {
                    bannerButton
                    bannerNumbers {
                      number
                      text
                    }
                    bannerText
                    bannerTitle
                    bannerUrl
                    bannerWords {
                      word
                    }
                    bannerVideo {
                      mimeType
                      mediaItemUrl
                    }
                  }
                }
              }
    `
  }, 
  transform(data) { return data.data }
})

useSeoMeta({
  title: data.value.page.seo.title,
  description: data.value.page.seo.metaDesc,
  ogTitle: data.value.page.seo.title,
  ogDescription: data.value.page.seo.metaDesc,
})
</script>

<template>
  <div>
    <PagesHomeBanner
      :title="data.page.home.bannerTitle"
      :words="data.page.home.bannerWords"
      :text="data.page.home.bannerText"
      :button="data.page.home.bannerButton"
      :url="data.page.home.bannerUrl"
      :video="data.page.home.bannerVideo"
      :numbers="data.page.home.bannerNumbers"
    />
  </div>
</template>