<script setup>
// const config = useRuntimeConfig()
// const { data, refresh, pending } = await useFetch(
//   config.public.apiBase,
//   {
//     method: 'get',
//     query: {
//       query: `
//               query Home {
//                 page(id: "273", idType: DATABASE_ID) {
//                   seo {
//                     title
//                     metaDesc
//                   }
//                   home {
//                     bannerButton
//                     bannerNumbers {
//                       number
//                       text
//                     }
//                     bannerText
//                     bannerTitle
//                     bannerUrl
//                     bannerWords {
//                       word
//                     }
//                     bannerVideo {
//                       mimeType
//                       mediaItemUrl
//                     }
//                   }
//                 }
//               }
//     `
//   }, 
//   transform(data) { return data.data }
// })

// useSeoMeta({
//   title: data.value.page.seo.title,
//   description: data.value.page.seo.metaDesc,
//   ogTitle: data.value.page.seo.title,
//   ogDescription: data.value.page.seo.metaDesc,
// })

useHead({
  titleTemplate: title => `${title} | Simplifying logistics`
})
</script>

<template>
  <div>
    <!-- <PagesHomeBanner
      :title="data.page.home.bannerTitle"
      :words="data.page.home.bannerWords"
      :text="data.page.home.bannerText"
      :button="data.page.home.bannerButton"
      :url="data.page.home.bannerUrl"
      :video="data.page.home.bannerVideo"
      :numbers="data.page.home.bannerNumbers"
    /> -->
    <PagesHomeBanner
      title="Simplifying logistics for"
      :words="[{ word: 'SMEs' }, { word: 'Digital native brands' }, { word: 'Entrepreneurs' }, { word: 'Distributors' }, { word: 'Manufactures' }]"
      text="<p>Our deal is simple, we work hard to simplify your operations so you can focus on what really matters: <strong>growing and improving your business</strong>.</p>"
      button="Get started"
      url="/contact"
      :video="{ mediaItemUrl: '/temp/video2.mp4' }"
      :numbers="[
        {
          number: '600',
          text: 'Lorem Ipsum is simply dummy text of the printing.'
        },
        {
          number: '315',
          text: 'Lorem Ipsum is simply dummy text of the printing.'
        },
        {
          number: '58',
          text: 'Lorem Ipsum is simply dummy text of the printing.'
        }
      ]"
    />
    <PagesHomeSecond
        title="We make it simple"
        text="...and it doesn't just seem like it"
        button="Get started"
        url="/contact"
        :items="[
          {
            icon: '/temp/h12.svg',
            title: 'We make the process easier for you',
            text: 'We love logistics and we know that it is a complicated process, thats why we take care of everything for you.'
          },
          {
            icon: '/temp/h22.svg',
            title: 'We want  go <br /> see you grow',
            text: 'We optimize operations so you can scale your business model. If you grow, we grow with you.'
          },
          {
            icon: '/temp/h32.svg',
            title: 'We are <br /> transparent',
            text: 'We work with a unique billing system, without hidden costs, where you can see everything you pay.'
          }
        ]"
    />
    <UiTabs
      :tabs="[
          {
            name: 'E-commerce',
            icon: '/temp/iecommerce.svg',
            title: 'E-commerce',
            text: 'Our warehouses are strategically designed so that each client has their space. This helps us get the most out of our space and reduce costs for you.',
            button: 'See more',
            url: '/solutions/e-commerce',
            bullets: []
          },
          {
            name: 'B2B & Retail',
            icon: '/temp/b2bi2.svg',
            title: 'B2B & Retail',
            text: 'Save time and costs: we have strategically designed our storage system to assign each customer a designated area. This optimizes storage locations and reduces costs for you.',
            button: 'See more',
            url: '/solutions/b2b-retail',
            bullets: []
          },
          {
            name: 'Amazon',
            icon: '/temp/az.svg',
            title: 'Amazon',
            text: 'Whether you use FBA, FBM or SFP, we can offer a solution for your business.',
            button: 'See more',
            url: '/solutions/amazon',
            bullets: []
          }
      ]"
    />
    <UiServices
        title="We are here for you"
        :items="[
            {
                icon: '/temp/intuitive.svg',
                text: 'Intuitive Software',
            },
            {
                icon: '/temp/import.svg',
                text: 'Import and Export management',
            },
            {
                icon: '/temp/fast.svg',
                text: 'Fast onboarding',
            },
            {
                icon: '/temp/transportation.svg',
                text: 'Transportation Management',
            },
            {
                icon: '/temp/multilingual.svg',
                text: 'Multilingual professionals',
            },
            {
                icon: '/temp/100.svg',
                text: '100+ Integrations',
            },
            {
                icon: '/temp/customer.svg',
                text: 'Customer success team',
            },
            {
                icon: '/temp/reports.svg',
                text: 'Reports on your activity',
            },
            {
                icon: '/temp/b2b.svg',
                text: 'B2B/B2C expertise'
            }
        ]"
    />
    <UiTestimonials
        title="Read what our customers say"
        :items="[
            {
                text: 'Lógicos offers us the flexibility we need, it gives us a lot of peace of mind to have a contact person for day-to-day operations.',
                name: 'Ramón Acin',
                ocupation: 'CEO',
                company: 'Beston',
                logo: '/temp/beston.png'
            },
            {
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys.',
                name: 'Maria Silva',
                ocupation: 'Director',
                company: 'Wells',
                logo: '/temp/wells.png'
            },
            {
                text: 'Lógicos offers us the flexibility we need, it gives us a lot of peace of mind to have a contact.',
                name: 'John Doe',
                ocupation: 'Owner',
                company: 'Carrefour',
                logo: '/temp/carrefour.png'
            }
        ]"
    />
    <UiClients
        title="Retailers we work with"
        text="and <br /> + partners"
        :logos="[
            {
                logo: '/temp/costco.png',
                name: 'Costco'
            },
            {
                logo: '/temp/druni.png',
                name: 'Druni'
            },
            {
                logo: '/temp/continente.png',
                name: 'Continente'
            },
            {
                logo: '/temp/etos.png',
                name: 'Etos'
            },
            {
                logo: '/temp/carrefour.png',
                name: 'Carrefour'
            },
            {
                logo: '/temp/primor.png',
                name: 'Primor'
            },
            {
                logo: '/temp/monoprix.png',
                name: 'Monoprix'
            },
            {
                logo: '/temp/wells.png',
                name: 'Wells'
            }
        ]"
    />
  </div>
</template>