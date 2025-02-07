<script setup>
useHead({
  titleTemplate: title => `Integrations | ${title}`
})
</script>

<template>
  <div>
    <PagesIntegrationsHeader
      title="One-click integrations ready to use"
      number="+58"
      text="Integrations"
    />
    <PagesIntegrationsPrincipals
      title="Featured partner integrations"
      text="With our software Plug&Sell you can connect to the leading ecommerce platforms or ERPs you use. And if you work with your own built system, you can integrate with our API. All in one place."
      :items="[
        {
          icon: '/temp/facebookc.svg',
          title: 'Facebook',
          text: 'Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industrys.'
        },
        {
          icon: '/temp/shopifyc.svg',
          title: 'Shopify',
          text: 'Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industrys.'
        },
        {
          icon: '/temp/amazonc.svg',
          title: 'Amazon',
          text: 'Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industrys.'
        }
      ]"
    />
    <section class="pt-32 sm:pt-20">
      <LayoutContainer>
        <h3 class="mb-16 sm:mb-10">E-commerce platforms <br /> & marketplaces</h3>
      </LayoutContainer>
      <div class="flex flex-col gap-16">
        <UiLogos
          title="E-commerce platforms"
          :items="[
            {
              name: 'Amazon',
              logo: '/temp/logos/amazon.png',
              url: '',
            },
            {
              name: 'Woo',
              logo: '/temp/logos/woo.png',
              url: '',
            },
            {
              name: 'Shopify',
              logo: '/temp/logos/shopify.png',
              url: '',
            },
            {
              name: 'Wix',
              logo: '/temp/logos/wix.png',
              url: '',
            },
            {
              name: 'PrestaShop',
              logo: '/temp/logos/prestashop.png',
              url: '',
            },
            {
              name: 'Miravia',
              logo: '/temp/logos/miravia.png',
              url: '',
            },
            {
              name: 'Magento',
              logo: '/temp/logos/magento.png',
              url: '',
            },
            {
              name: 'Wish',
              logo: '/temp/logos/wish.png',
              url: '',
            },
          ]"
        />
        <UiLogos
          title="Social media"
          :items="[
            {
              name: 'Facebook',
              logo: '/temp/fb.png',
              url: '',
            },
            {
              name: 'Instagram',
              logo: '/temp/insta.png',
              url: '',
            },
            {
              name: 'TikTok',
              logo: '/temp/ttk.png',
              url: '',
            },
          ]"
        />
        <UiLogos
          title="Others"
          :items="[
            {
              name: 'Sendcloud',
              logo: '/temp/logos/sendcloud.png',
              url: '',
            },
            {
              name: 'Zoho Inventory',
              logo: '/temp/logos/zoho.png',
              url: '',
            },
            {
              name: 'SFTP',
              logo: '/temp/logos/sftp.svg',
              url: '',
            },
            {
              name: 'SAP',
              logo: '/temp/logos/sap.png',
              url: '',
            },
          ]"
        />
      </div>
    </section>
  </div>
</template>