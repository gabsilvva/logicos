<script setup>
// const config = useRuntimeConfig()
// const { data, refresh, pending } = await useFetch(
//   config.public.apiBase,
//   {
//     method: 'get',
//     query: {
//       query: `
//               query Layout {
//                 menuNavbar: menus(where: {location: NAVBAR}) {
//                   nodes {
//                     menuItems {
//                       nodes {
//                         uri
//                         target
//                         label
//                         childItems {
//                           nodes {
//                             target
//                             uri
//                             label
//                           }
//                         }
//                         parentId
//                       }
//                     }
//                   }
//                 }
//                 menuFooter: menus(where: {location: FOOTER}) {
//                   nodes {
//                     menuItems {
//                       nodes {
//                         uri
//                         target
//                         label
//                       }
//                     }
//                     name
//                   }
//                 }
//                 generals(where: {id: 62}) {
//                   nodes {
//                     general {
//                       button {
//                         text
//                         url
//                       }
//                       cookiesButton
//                       cookiesText
//                       email
//                       footerSubtext
//                       footerSubtitle
//                       social {
//                         url
//                         name
//                         icon {
//                           sourceUrl
//                         }
//                       }
//                       logoWhite {
//                         sourceUrl
//                       }
//                       logo {
//                         sourceUrl
//                       }
//                     }
//                   }
//                 }
//                 generalSettings {
//                   title
//                 }
//                 contact: page(id: "297", idType: DATABASE_ID) {
//                   title
//                 }
//                 privacy: page(id: "275", idType: DATABASE_ID) {
//                   title
//                 }
//                 terms: page(id: "321", idType: DATABASE_ID) {
//                   title
//                 }
//               }
//     `
//   }, 
//   transform(data) { return data.data }
// })
</script>

<template>
  <div>
    <!-- <LayoutNav
      :logo="data.generals.nodes[0].general.logo.sourceUrl"
      :logoWhite="data.generals.nodes[0].general.logoWhite.sourceUrl"
      :name="data.generalSettings.title"
      :menu="data.menuNavbar.nodes[0].menuItems.nodes"
      :button="data.generals.nodes[0].general.button.text"
      :url="data.generals.nodes[0].general.button.url"
    /> -->
    <LayoutNav
      logo="/temp/logo.svg"
      logoWhite="/temp/logo-white.svg"
      name="Lógicos"
      :menu="[
        {
          uri: '/solutions',
          target: '',
          label: 'Solutions',
          parentId: '',
          childItems: {
            nodes: [
              {
                uri: '/solutions/amazon',
                target: '',
                label: 'Amazon',
              },
              {
                uri: '/solutions/b2b-retail',
                target: '',
                label: 'B2B & Retail',
              },
              {
                uri: '/solutions/e-commerce',
                target: '',
                label: 'E-commerce',
              },
              {
                uri: '/solutions/order-to-cash',
                target: '',
                label: 'Order to Cash',
              },
              {
                uri: '/solutions/shipping',
                target: '',
                label: 'Shipping',
              },
              {
                uri: '/solutions/subscription-boxes',
                target: '',
                label: 'Subscription Boxes',
              }
            ]
          }
        },
        {
          uri: '/why-logicos',
          target: '',
          label: 'Why Lógicos',
          parentId: '',
          childItems: {
            nodes: []
          }
        },
        {
          uri: '/integrations',
          target: '',
          label: 'Integrations',
          parentId: '',
          childItems: {
            nodes: []
          }
        }
      ]"
      button="Contact us"
      url="/contact"
    />
    <slot />
    <!-- <LayoutFooter
      :logo="data.generals.nodes[0].general.logo.sourceUrl"
      :name="data.generalSettings.title"
      :socials="data.generals.nodes[0].general.social"
      :subtext="data.generals.nodes[0].general.footerSubtext"
      :menu="data.menuFooter.nodes[0]"
      :subtitle="data.generals.nodes[0].general.footerSubtitle"
      :email="data.generals.nodes[0].general.email"
      :contact="data.contact.title"
      :privacy="data.privacy.title"
      :terms="data.terms.title"
    /> -->
    <!-- <LayoutCookies
      :text="data.generals.nodes[0].general.cookiesText"
      :button="data.generals.nodes[0].general.cookiesButton"
    /> -->
    <LayoutFooter
      logo="/temp/logo.svg"
      name="Lógicos"
      :socials="[{ url: 'https://link.com.br', name: 'Linkedin', icon: { sourceUrl: '/temp/linkedin.svg' } }]"
      subtext="Logistics, storage and shipping services for B2B businesses and online stores."
      :menu="{
        name: 'Navigation',
        menuItems: {
          nodes: [
            {
              uri: '/solutions',
              target: '',
              label: 'Solutions'
            },
            {
              uri: '/why-logicos',
              target: '',
              label: 'Why Logicos'
            },
            {
              uri: '/integrations',
              target: '',
              label: 'Integrations'
            },
            {
              uri: '/contact',
              target: '',
              label: 'Contact us'
            }
          ]
        }
      }"
      subtitle="How can we help? <br /> Let's talk!"
      email="contact@logicos3pl.com"
      contact="Contact us"
      privacy="Policy of Privacy"
      terms="Terms of Use"
    />
    <LayoutCookies
      text="This website stores cookies to collect information and improve your browsing experience. <br /> Check out our <a href='/policy-privacy' target='_blank'>Privacy Policy</a>."
      button="Accept and close"
    />
  </div>
</template>