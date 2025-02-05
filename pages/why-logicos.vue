<script setup>
// const config = useRuntimeConfig()
// const { data, refresh, pending } = await useFetch(
//   config.public.apiBase,
//   {
//     method: 'get',
//     query: {
//       query: `
//         query Consultor {
//         page(id: "213", idType: DATABASE_ID) {
//           consultorArquiplan {
//             bannerFoto {
//               sourceUrl
//             }
//             bannerItens1 {
//               texto
//             }
//             bannerItens2 {
//               texto
//               icone {
//                 sourceUrl
//               }
//             }
//             bannerSubtitulo
//             bannerTitulo
//             formularioBotao1
//             formularioBotao2
//             formularioSubtitulo
//             formularioTexto
//             formularioTitulo
//             formularioUrl1
//             formularioUrl2
//             video
//             videoSubtitulo
//             videoThumbnail {
//               sourceUrl
//             }
//             videoTitulo
//           }
//           seo {
//             metaDesc
//             title
//           }
//         }
//       }
//     `
//   }, 
//   transform(data) { return data.data.page }
// })

// useSeoMeta({
//   title: data.value.seo.title,
//   description: data.value.seo.metaDesc,
//   ogTitle: data.value.seo.title,
//   ogDescription: data.value.seo.metaDesc
// })
</script>

<template>
    <div>
        <PagesWhyHeader
            title="Why companies decide to work with us"
            text="
                Whether you’re a new eCommerce venture or an established brand in the B2B or B2C space, we are the logistics partner you’ve been looking for. Our services are designed to help you cut logistics costs, simplify your operations, and focus on scaling your business without the headaches of managing the backend.
                <br /><br />
                We specialize in working with ambitious, digital-native brands that are ready to grow and thrive.
                <br /><br />
                <strong>Leave the logistics to us, so you can concentrate on what truly matters: growing your business and making your customers happy.</strong>
            "
            button="Get started"
            url="/contact"
        />
        <PagesWhySecond
            title="What sets us apart"
            text="Thanks to the combination of digital platforms for managing logistics processes and the experience of our professionals, we offer SMEs around the world a reliable solution for managing their logistics operations. We simplify the logistics of our clients, improving their businesses and their lives."
            :cards=" [
                {
                    icon: '/temp/relentless.svg',
                    title: 'Relentlessly Resourceful',
                    text: 'The answer is yes. What do you need? Whatever the operation that must be carried out, we always find the way and the necessary resources to carry it out and meet the needs of our clients. '
                },
                {
                    icon: '/temp/omnichannel.svg',
                    title: 'Omnichannel',
                    text: 'We perfectly understand both worlds thanks to our experience making deliveries to retailers such as Carrefour, Costco or El Corte Inglés and thanks to our origin as a cosmetics ecommerce. '
                },
                {
                    icon: '/temp/simplicity.svg',
                    title: 'Simplicity',
                    text: 'We simplify everything that makes logistics complicated. We offer fair and transparent rates, fast and easy integrations, software with a simple interface and a team at your disposal.'
                }
            ]"
        />
        <UiIntegrations
            number="58"
            title="Integrations"
            text="With our software Plug&Sell you can connect to the leading ecommerce platforms or ERPs you use. And if you work with your own built system, you can integrate with our API. All in one place."
            :logos="[
                {
                    logo: '/temp/facebook.png',
                    name: 'Facebook'
                },
                {
                    logo: '/temp/shopify.png',
                    name: 'Shopify'
                },
                {
                    logo: '/temp/amazon.png',
                    name: 'Amazon'
                },
                {
                    logo: '/temp/woo.png',
                    name: 'Woo'
                },
                {
                    logo: '/temp/instagram.png',
                    name: 'Instagram'
                },
                {
                    logo: '/temp/tiktok.png',
                    name: 'TikTok'
                },
                {
                    logo: '/temp/sap.png',
                    name: 'SAP'
                },
                {
                    logo: '/temp/miravia.png',
                    name: 'Miravia'
                },
                {
                    logo: '/temp/sendcloud.png',
                    name: 'Sendcloud'
                },
                {
                    logo: '/temp/zoho.png',
                    name: 'Zoho Inventory'
                },
                {
                    logo: '/temp/prestashop.png',
                    name: 'PrestaShop'
                },
                {
                    logo: '/temp/wix.png',
                    name: 'Wix'
                },
                {
                    logo: '/temp/sftp.png',
                    name: 'SFTP'
                }
            ]"
        />
        <PagesWhyCards
            title="We make it look easy."
            button="Get started"
            url="/contact"
            :cards="[
                {
                    icon: '/temp/intuitive.svg',
                    title: 'Intuitive <br /> Software',
                    text: 'Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry.'
                },
                {
                    icon: '/temp/import.svg',
                    title: 'Import and Export management',
                    text: 'Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry.'
                },
                {
                    icon: '/temp/fast.svg',
                    title: 'Fast <br /> onboarding',
                    text: 'Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry.'
                },
                {
                    icon: '/temp/transportation.svg',
                    title: 'Transportation Management',
                    text: 'Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry.'
                },
                {
                    icon: '/temp/multilingual.svg',
                    title: 'Multilingual professionals',
                    text: 'Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry.'
                },
                {
                    icon: '/temp/100.svg',
                    title: '100+ <br /> Integrations',
                    text: 'Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry.'
                },
                {
                    icon: '/temp/customer.svg',
                    title: 'Customer success team',
                    text: 'Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry.'
                },
                {
                    icon: '/temp/reports.svg',
                    title: 'Reports on <br /> your activity',
                    text: 'Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry.'
                },
                {
                    icon: '/temp/b2b.svg',
                    title: 'B2B/B2C <br /> expertise',
                    text: 'Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry.'
                }
            ]"
            subtitle="Industries"
            :words="['Cosmetics', 'Clothing and fashion', 'Supplements', 'Electronic Devices', 'Amazon', 'Collectibles', 'Sports', 'And more...']"
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
        <PagesWhyAbout
            title1="Useful <br /> Technology"
            title2="Extraordinary <br /> Operations"
            subtitle="What we aim for"
            text="
                Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since.
                <br /><br />
                But also the leap into electronic typesetting,  remaining essentially unchanged. It was popularised in the 1960s with  the release of Letraset sheets containing Lorem Ipsum passages, and more  recently with desktop publishing software like Aldus PageMaker  including versions of Lorem Ipsum.
                <br /><br />
                Lorem Ipsum passages, and more  recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            "
            logo="/temp/logo.svg"
            name="Lógicos"
        />
    </div>
</template>