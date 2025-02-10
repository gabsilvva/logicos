<script setup>
useHead({
  titleTemplate: title => `Amazon | ${title}`
})
</script>

<template>
  <div>
    <PagesSolutionsAmazonHeader
      title="Amazon"
      text="Whether you use FBA, FBM or SFP, we can offer a solution for your business."
      image="/temp/amazon2.jpg"
      icon1="/temp/a.png"
      icon2="/temp/li.svg"
    />
    <!-- <PagesSolutionsAmazonServices
      :items="[
        {
          name: 'Fulfilled by Amazon',
          description:
            'We understand the importance of complying with the requirements that Amazon requests for the reception of your products in its warehouses. <br /><br /> We know that a small mistake can have big consequences for your seller account.However, thanks to our experience with a wide variety of products for delivery on Amazon, we can guarantee our clients compliance with the marketplace requirements.',
          button: 'Get started',
          url: '/contact',
        },
        {
          name: 'Fulfilled by Merchant',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
          button: 'Get started',
          url: '/contact',
        },
        {
          name: 'Seller Fulfilled Prime',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
          button: 'Get started',
          url: '/contact',
        },
      ]"
    /> -->
    <PagesSolutionsAmazonAbout
      :items="[
        {
          image: '/temp/prime.webp',
          title: 'Fulfilled by Amazon',
          text: 'We understand the importance of complying with the requirements that Amazon requests for the reception of your products in its warehouses. <br /><br /> We know that a small mistake can have big consequences for your seller account. However, thanks to our experience with a wide variety of products for delivery on Amazon, we can guarantee our clients compliance with the marketplace requirements.',
          button: 'Get started',
          url: '/contact'
        },
        {
          image: '/temp/amazon-img2.png',
          title: 'Fulfilled by Merchant',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
          button: 'Get started',
          url: '/contact'
        },
        {
          image: '/temp/amazon3.webp',
          title: 'Seller Fullfilled Prime',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
          button: 'Get started',
          url: '/contact'
        }
      ]"
    />
    <PagesSolutionsAmazonLogos
      title="Expand beyond Amazon"
      text="Other platforms like Aliexpress, eBay, and Walmart offer untapped profit potential. <br /> Let us help you conquer them all. Contact us to explore seamless marketplace integrations!"
      :logos="[
        {
          name: 'AliExpress',
          logo: '/temp/logos/aliexpress.png',
          url: 'https://link.com.br',
        },
        {
          name: 'ebay',
          logo: '/temp/logos/ebay.png',
          url: '',
        },
        {
          name: 'Walmart',
          logo: '/temp/logos/walmart.png',
          url: '',
        },
        {
          name: 'Miravia',
          logo: '/temp/logos/miravia.png',
          url: '',
        },
        {
          name: 'Wish',
          logo: '/temp/logos/wish.png',
          url: '',
        },
      ]"
    />
  </div>
</template>
