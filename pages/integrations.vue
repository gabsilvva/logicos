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
            }
          ]"
        />
        <UiLogos
          title="Marketplace Integrations"
          :items="[
            {
              name: 'Amazon',
              logo: '/temp/logos/amazon.png',
              url: '',
            },
            {
              name: 'Argos',
              logo: '/temp/argos.png',
              url: '',
            },
            {
              name: 'Wayfair',
              logo: '/temp/wayfair.png',
              url: '',
            },
            {
              name: 'Mirakl',
              logo: '/temp/mirakl.png',
              url: '',
            },
            {
              name: 'Cdiscount',
              logo: '/temp/cdiscount.png',
              url: '',
            },
            {
              name: 'ebay',
              logo: '/temp/logos/ebay.png',
              url: '',
            },
            {
              name: 'Not on the high street',
              logo: '/temp/not.png',
              url: '',
            },
            {
              name: 'Yumbles',
              logo: '/temp/yumbles.png',
              url: '',
            },
            {
              name: 'Groupon',
              logo: '/temp/groupon.png',
              url: '',
            },
            {
              name: 'Wowcher',
              logo: '/temp/wowcher.png',
              url: '',
            },
            {
              name: 'Sellercloud',
              logo: '/temp/sellercloud.png',
              url: '',
            },
            {
              name: 'hardtofind',
              logo: '/temp/hardtofind.png',
              url: '',
            },
            {
              name: 'thehutgroup',
              logo: '/temp/hut.png',
              url: '',
            },
            {
              name: 'fruugo',
              logo: '/temp/fruugo.png',
              url: '',
            },
            {
              name: 'onbuy.com',
              logo: '/temp/onbuy.png',
              url: '',
            },
            {
              name: 'bandcamp',
              logo: '/temp/bandcamp.png',
              url: '',
            },
            {
              name: 'real.de',
              logo: '/temp/real.png',
              url: '',
            },
            {
              name: 'next',
              logo: '/temp/next.png',
              url: '',
            },
            {
              name: 'the range',
              logo: '/temp/range.png',
              url: '',
            },
            {
              name: 'gifts',
              logo: '/temp/gifts.png',
              url: '',
            },
            {
              name: 'manomano',
              logo: '/temp/mano.png',
              url: '',
            },
            {
              name: 'TikTok',
              logo: '/temp/ttk.png',
              url: '',
            },
            {
              name: 'wish',
              logo: '/temp/wish2.png',
              url: '',
            }
          ]"
        />
        <UiLogos
          title="Shopping cart integrations"
          :items="[
            {
              name: 'xcart',
              logo: '/temp/xcart.png',
              url: '',
            },
            {
              name: 'bluepark',
              logo: '/temp/bluepark.png',
              url: '',
            },
            {
              name: 'magento',
              logo: '/temp/logos/magento.png',
              url: '',
            },
            {
              name: 'woo',
              logo: '/temp/logos/woo.png',
              url: '',
            },
            {
              name: 'shopify',
              logo: '/temp/logos/shopify.png',
              url: '',
            },
            {
              name: 'ecwid',
              logo: '/temp/ecwid.png',
              url: '',
            },
            {
              name: 'squarespace',
              logo: '/temp/squarespace.png',
              url: '',
            },
            {
              name: 'pretashop',
              logo: '/temp/logos/prestashop.png',
              url: '',
            },
            {
              name: 'cs cart',
              logo: '/temp/cs-cart-logo.png',
              url: '',
            },
            {
              name: 'shopwired',
              logo: '/temp/shopwired-logo.png',
              url: '',
            },
            {
              name: '3dcart',
              logo: '/temp/3dcart.png',
              url: '',
            },
            {
              name: 'weebly',
              logo: '/temp/weebly.png',
              url: '',
            },
            {
              name: 'volusion',
              logo: '/temp/volusion.png',
              url: '',
            },
            {
              name: 'bigcommerce',
              logo: '/temp/bigcommerce.png',
              url: '',
            },
            {
              name: 'easy',
              logo: '/temp/easy.png',
              url: '',
            },
            {
              name: 'visualsoft',
              logo: '/temp/visualsoft.png',
              url: '',
            },
            {
              name: 'vend',
              logo: '/temp/vend.png',
              url: '',
            },
            {
              name: 'km',
              logo: '/temp/km.png',
              url: '',
            },
            {
              name: 'goflow',
              logo: '/temp/goflow.png',
              url: '',
            },
            {
              name: 'lightspeed',
              logo: '/temp/light.png',
              url: '',
            },
            {
              name: 'lime',
              logo: '/temp/lime.png',
              url: '',
            },
            {
              name: 'product cart',
              logo: '/temp/pcart.png',
              url: '',
            },
            {
              name: 'salla',
              logo: '/temp/salla.png',
              url: '',
            }
          ]"
        />
        <UiLogos
          title="Courier and multi-carrier integrations"
          :items="[
            {
              name: 'add your own',
              logo: '/temp/add-your-own.png',
              url: '',
            },
            {
              name: 'royal mail',
              logo: '/temp/royal-mail-logo.png',
              url: '',
            },
            {
              name: 'aramex-logo',
              logo: '/temp/courier/aramex-logo.png',
              url: '',
            },
            {
              name: 'boxberry-logo',
              logo: '/temp/courier/boxberry-logo.png',
              url: '',
            },
            {
              name: 'lanmdark-global-logo',
              logo: '/temp/courier/lanmdark-global-logo.png',
              url: '',
            },
            {
              name: 'couriers-please-logo',
              logo: '/temp/courier/couriers-please-logo.png',
              url: '',
            },
            {
              name: 'gba-logo',
              logo: '/temp/courier/gba-logo.png',
              url: '',
            },
            {
              name: 'gest-stocks-logo',
              logo: '/temp/courier/gest-stocks-logo.png',
              url: '',
            },
            {
              name: 'gsit-logo',
              logo: '/temp/courier/gsit-logo.png',
              url: '',
            },
            {
              name: 'furdeco-logo',
              logo: '/temp/courier/furdeco-logo.png',
              url: '',
            },
            {
              name: 'stream-logo',
              logo: '/temp/courier/stream-logo.png',
              url: '',
            },
            {
              name: 'journease-logo',
              logo: '/temp/courier/journease-logo.png',
              url: '',
            },
            {
              name: 'mhi',
              logo: '/temp/courier/mhi.png',
              url: '',
            },
            {
              name: 'uds-logo',
              logo: '/temp/courier/uds-logo.png',
              url: '',
            },
            {
              name: 'agl_integration',
              logo: '/temp/courier/agl_integration.png',
              url: '',
            },
            {
              name: 'amazon-shipping-logo',
              logo: '/temp/courier/amazon-shipping-logo.png',
              url: '',
            },
            {
              name: 'apc-logo',
              logo: '/temp/courier/apc-logo.png',
              url: '',
            },
            {
              name: 'asda-shipping-logo',
              logo: '/temp/courier/asda-shipping-logo.png',
              url: '',
            },
            {
              name: 'asendia-logo',
              logo: '/temp/courier/asendia-logo.png',
              url: '',
            },
            {
              name: 'australia-post-logo',
              logo: '/temp/courier/australia-post-logo.png',
              url: '',
            },
            {
              name: 'bpost_integration',
              logo: '/temp/courier/bpost_integration.png',
              url: '',
            },
            {
              name: 'cae-delivers-logo',
              logo: '/temp/courier/cae-delivers-logo.png',
              url: '',
            },
            {
              name: 'caribou-logo',
              logo: '/temp/courier/caribou-logo.png',
              url: '',
            },
            {
              name: 'ccl_integration',
              logo: '/temp/courier/ccl_integration.png',
              url: '',
            },
            {
              name: 'city-sprint-logo',
              logo: '/temp/courier/city-sprint-logo.png',
              url: '',
            },
            {
              name: 'csm-logo',
              logo: '/temp/courier/csm-logo.png',
              url: '',
            },
            {
              name: 'db-schenker-logo',
              logo: '/temp/courier/db-schenker-logo.png',
              url: '',
            },
            {
              name: 'despatch-bay-logo',
              logo: '/temp/courier/despatch-bay-logo.png',
              url: '',
            },
            {
              name: 'deutsche-post-logo',
              logo: '/temp/courier/deutsche-post-logo.png',
              url: '',
            },
            {
              name: 'dg-logo',
              logo: '/temp/courier/dg-logo.png',
              url: '',
            },
            {
              name: 'dhl-logo',
              logo: '/temp/courier/dhl-logo.png',
              url: '',
            },
            {
              name: 'dhl-ecommerce-logo',
              logo: '/temp/courier/dhl-ecommerce-logo.png',
              url: '',
            },
            {
              name: 'dpd-logo',
              logo: '/temp/courier/dpd-logo.png',
              url: '',
            },
            {
              name: 'dpd-local-logo',
              logo: '/temp/courier/dpd-local-logo.png',
              url: '',
            },
            {
              name: 'dx-local-logo',
              logo: '/temp/courier/dx-local-logo.png',
              url: '',
            },
            {
              name: 'easy-post-logo',
              logo: '/temp/courier/easy-post-logo.png',
              url: '',
            },
            {
              name: 'evri_integration',
              logo: '/temp/courier/evri_integration.png',
              url: '',
            },
            {
              name: 'ezi-returns-logo',
              logo: '/temp/courier/ezi-returns-logo.png',
              url: '',
            },
            {
              name: 'fast_despatch_logistics_integration',
              logo: '/temp/courier/fast_despatch_logistics_integration.png',
              url: '',
            },
            {
              name: 'fedex-logo',
              logo: '/temp/courier/fedex-logo.png',
              url: '',
            },
            {
              name: 'fortec-logo',
              logo: '/temp/courier/fortec-logo.png',
              url: '',
            },
            {
              name: 'gfs-logo-integration',
              logo: '/temp/courier/gfs-logo-integration.png',
              url: '',
            },
            {
              name: 'gloabl-e-logo',
              logo: '/temp/courier/gloabl-e-logo.png',
              url: '',
            },
            {
              name: 'gls-logo',
              logo: '/temp/courier/gls-logo.png',
              url: '',
            },
            {
              name: 'hermes-logo',
              logo: '/temp/courier/hermes-logo.png',
              url: '',
            },
            {
              name: 'hived_integration',
              logo: '/temp/courier/hived_integration.png',
              url: '',
            },
            {
              name: 'huxloe-logo',
              logo: '/temp/courier/huxloe-logo.png',
              url: '',
            },
            {
              name: 'instadispatch-logo',
              logo: '/temp/courier/instadispatch-logo.png',
              url: '',
            },
            {
              name: 'low-cost-parcels-logo',
              logo: '/temp/courier/low-cost-parcels-logo.png',
              url: '',
            },
            {
              name: 'mainfreight-logo',
              logo: '/temp/courier/mainfreight-logo.png',
              url: '',
            },
            {
              name: 'myparcel-com-logo',
              logo: '/temp/courier/myparcel-com-logo.png',
              url: '',
            },
            {
              name: 'newzealand-post-logo',
              logo: '/temp/courier/newzealand-post-logo.png',
              url: '',
            },
            {
              name: 'ninja-van-logo',
              logo: '/temp/courier/ninja-van-logo.png',
              url: '',
            },
            {
              name: 'norsk-logo',
              logo: '/temp/courier/norsk-logo.png',
              url: '',
            },
            {
              name: 'nshift_integration',
              logo: '/temp/courier/nshift_integration.png',
              url: '',
            },
            {
              name: 'ocs-logo',
              logo: '/temp/courier/ocs-logo.png',
              url: '',
            },
            {
              name: 'p2p-logo',
              logo: '/temp/courier/p2p-logo.png',
              url: '',
            },
            {
              name: 'packfleet_integration',
              logo: '/temp/courier/packfleet_integration.png',
              url: '',
            },
            {
              name: 'palletways-logo',
              logo: '/temp/courier/palletways-logo.png',
              url: '',
            },
            {
              name: 'pallex-logo',
              logo: '/temp/courier/pallex-logo.png',
              url: '',
            },
            {
              name: 'panther-logo',
              logo: '/temp/courier/panther-logo.png',
              url: '',
            },
            {
              name: 'parcel-force-logo',
              logo: '/temp/courier/parcel-force-logo.png',
              url: '',
            },
            {
              name: 'parcel-hub-243-x-84-logo',
              logo: '/temp/courier/parcel-hub-243-x-84-logo.png',
              url: '',
            },
            {
              name: 'parcel-pakket-logo',
              logo: '/temp/courier/parcel-pakket-logo.png',
              url: '',
            },
            {
              name: 'b2c-europe-logo',
              logo: '/temp/courier/b2c-europe-logo.png',
              url: '',
            },
            {
              name: 'scurri-logo',
              logo: '/temp/courier/scurri-logo.png',
              url: '',
            },
            {
              name: 'seko-logo',
              logo: '/temp/courier/seko-logo.png',
              url: '',
            },
            {
              name: 'spring-logo',
              logo: '/temp/courier/spring-logo.png',
              url: '',
            },
            {
              name: 'starlinks_integration',
              logo: '/temp/courier/starlinks_integration.png',
              url: '',
            },
            {
              name: 'star-trak-logo',
              logo: '/temp/courier/star-trak-logo.png',
              url: '',
            },
            {
              name: 'tnt-logo',
              logo: '/temp/courier/tnt-logo.png',
              url: '',
            },
            {
              name: 'the-delivery-group-logo',
              logo: '/temp/courier/the-delivery-group-logo.png',
              url: '',
            },
            {
              name: 'tpn-logo',
              logo: '/temp/courier/tpn-logo.png',
              url: '',
            },
            {
              name: 'tuffnells-logo',
              logo: '/temp/courier/tuffnells-logo.png',
              url: '',
            },
            {
              name: 'uk-mail-logo',
              logo: '/temp/courier/uk-mail-logo.png',
              url: '',
            },
            {
              name: 'ups-logo',
              logo: '/temp/courier/ups-logo.png',
              url: '',
            },
            {
              name: 'ups-iparcel-logo',
              logo: '/temp/courier/ups-iparcel-logo.png',
              url: '',
            },
            {
              name: 'us-postal-service-logo',
              logo: '/temp/courier/us-postal-service-logo.png',
              url: '',
            },
            {
              name: 'whistl-logo',
              logo: '/temp/courier/whistl-logo.png',
              url: '',
            },
            {
              name: 'wn-direct-logo',
              logo: '/temp/courier/wn-direct-logo.png',
              url: '',
            },
            {
              name: 'xdp-logo',
              logo: '/temp/courier/xdp-logo.png',
              url: '',
            },
            {
              name: 'samos-logo_final_hi-01',
              logo: '/temp/courier/samos-logo_final_hi-01.png',
              url: '',
            },
            {
              name: 'yodel-logo',
              logo: '/temp/courier/yodel-logo.png',
              url: '',
            },
            {
              name: '13ten-parcels-logo',
              logo: '/temp/courier/13ten-parcels-logo.png',
              url: '',
            },
            {
              name: 'shipstation-integration-logo',
              logo: '/temp/courier/shipstation-integration-logo.png',
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