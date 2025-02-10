<script setup>
useHead({
  titleTemplate: title => `Shipping | ${title}`
})
</script>

<template>
  <div>
    <PagesSolutionsShippingBanner
      title="The Best Shipping For Your Products"
      button="Get started"
      url="/contact"
      image="/temp/shipping.jpg"
    />
    <PagesSolutionsShippingAbout
      title="Wide <br /> Transportation Offer"
      text="We have a wide range of transportation services to cover the needs of your business. We collaborate with different partners to find the transportation service that meets the characteristics of your shipments. Thanks to our extensive network, we can ship your products to any part of the world with competitive prices."
      :logos="[
        {
          logo: '/temp/correos.png',
          name: 'Correos Express'
        },
        {
          logo: '/temp/tipsa.png',
          name: 'Tipsa'
        },
        {
          logo: '/temp/ups.png',
          name: 'UPS'
        },
        {
          logo: '/temp/ctt.png',
          name: 'ctt'
        },
        {
          logo: '/temp/seur.png',
          name: 'Seur'
        },
        {
          logo: '/temp/amazon-shipping.png',
          name: 'Amazon Shipping'
        },
      ]"
      :bullets="['Shipments in 24 hours', 'Containers', 'Freight Forwarding']"
    />
    <PagesSolutionsShippingSolutions
      title="Other solutions"
      :items="[
        {
          title: 'Management of <br /> Incidents and Returns',
          bullets: ['Collection management', 'Return to stock', 'Quality control'],
          image: '/temp/solution1.png'
        },
        {
          title: 'Tracking and <br /> Traceability',
          bullets: ['Tracking Code and Customer Service', 'Delivery to collection points', 'Management of cash on delivery collections'],
          image: '/temp/solution2.png'
        }
      ]"
    />
  </div>
</template>