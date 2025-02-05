<script setup>
const config = useRuntimeConfig()
const { data, refresh, pending } = await useFetch(
  config.public.apiBase,
  {
    method: 'get',
    query: {
      query: `
              query Layout {
                menuNavbar: menus(where: {location: NAVBAR}) {
                  nodes {
                    menuItems {
                      nodes {
                        uri
                        target
                        label
                        childItems {
                          nodes {
                            target
                            uri
                            label
                          }
                        }
                        parentId
                      }
                    }
                  }
                }
                menuFooter: menus(where: {location: FOOTER}) {
                  nodes {
                    menuItems {
                      nodes {
                        uri
                        target
                        label
                      }
                    }
                    name
                  }
                }
                generals(where: {id: 62}) {
                  nodes {
                    general {
                      button {
                        text
                        url
                      }
                      cookiesButton
                      cookiesText
                      email
                      footerSubtext
                      footerSubtitle
                      social {
                        url
                        name
                        icon {
                          sourceUrl
                        }
                      }
                      logoWhite {
                        sourceUrl
                      }
                      logo {
                        sourceUrl
                      }
                    }
                  }
                }
                generalSettings {
                  title
                }
                contact: page(id: "297", idType: DATABASE_ID) {
                  title
                }
                privacy: page(id: "275", idType: DATABASE_ID) {
                  title
                }
                terms: page(id: "321", idType: DATABASE_ID) {
                  title
                }
              }
    `
  }, 
  transform(data) { return data.data }
})
</script>

<template>
  <div>
    <LayoutNav
      :logo="data.generals.nodes[0].general.logo.sourceUrl"
      :logoWhite="data.generals.nodes[0].general.logoWhite.sourceUrl"
      :name="data.generalSettings.title"
      :menu="data.menuNavbar.nodes[0].menuItems.nodes"
      :button="data.generals.nodes[0].general.button.text"
      :url="data.generals.nodes[0].general.button.url"
    />
    <slot />
    <LayoutFooter
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
    />
    <LayoutCookies
      :text="data.generals.nodes[0].general.cookiesText"
      :button="data.generals.nodes[0].general.cookiesButton"
    />
  </div>
</template>