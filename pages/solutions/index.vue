<script setup>
useHead({
  titleTemplate: title => `Solutions | ${title}`
})
</script>

<template>
    <div>
        <PagesSolutionsHeader
            title="What we do?"
            text="The deal is simple. You handle the sales, and we take care of the rest: storing, preparing, and shipping your orders."
            button="Get started"
            url="/contact"
            image="/temp/solutions.png"
        />
        <PagesSolutionsAttributes
            title="Integrate with Plug&Sell and start managing your operations in real-time."
            text="Our system is designed for your operations, whether you’re a startup e-commerce venture or an established B2B or B2C brand. We are the logistics partner you’ve been searching for. It’s that simple: plug in and start selling!"
            button="Get started"
            url="/contact"
            mockup="/temp/transparent.png"
            :ballons="['/img/attr1.png', '/img/attr2.png', '/img/attr3.png']"
            :cards="[
                {
                    title: 'Stock Sync',
                    text: 'We connect with your system, syncing orders and stock.',
                    icon: '/temp/stock.svg'
                },
                {
                    title: 'Data Export',
                    text: 'We like it modern, but if you need it we have reports as an Excel file.',
                    icon: '/temp/data.svg'
                },
                {
                    title: 'Notifications',
                    text: 'Get notified about transactions, courier incidences and order status.',
                    icon: '/temp/notifications.svg'
                },
                {
                    title: 'Omnichannel',
                    text: 'And cross-platform. We adapt to your enviroment to make logistics easier for you.',
                    icon: '/temp/omnichannel2.svg'
                }
            ]"
        />
        <PagesSolutionsTabs
            title="Our Solutions"
            :tabs="[
                {
                    name: 'E-Commerce',
                    icon: '/temp/iecommerce.svg',
                    description: 'We seamlessly integrate with your e-commerce platform to  fetch orders, customer details, and product data, while keeping stock updated and sending order notifications in real-time. A breeze.',
                    image: '/temp/ecommerce-note.png',
                    button: 'Learn more',
                    url: '/solutions/e-commerce'
                },
                {
                    name: 'B2B & Retail',
                    icon: '/temp/ib2b.svg',
                    description: 'Delivery to independent stores and large retailers',
                    image: '/temp/b2b.png',
                    button: 'Learn more',
                    url: '/solutions/b2b-retail'
                },
                {
                    name: 'Amazon',
                    icon: '/temp/iamazon.png',
                    description: 'Whether you use FBA, FBM or SFP, we can offer a solution for your business.',
                    image: '/temp/amazon-img.jpg',
                    button: 'Learn more',
                    url: '/solutions/amazon'
                },
                {
                    name: 'Shipping',
                    icon: '/temp/ishipping.svg',
                    description: 'We have a wide range of transportation services to cover the needs of your business. We collaborate with different partners to find the transportation service that meets the characteristics of your shipments. Thanks to our extensive network, we can ship your products to any part of the world with competitive prices.',
                    image: '/temp/shipping.png',
                    button: 'Learn more',
                    url: '/solutions/shipping'
                },
                {
                    name: 'Order to Cash',
                    icon: '/temp/iorder.svg',
                    description: 'If you want to start selling in Spain but you dont have a company here, we can help you by managing everything from order to delivery and billing.',
                    image: '/temp/order.png',
                    button: 'Learn more',
                    url: '/solutions/order-to-cash'
                },
                {
                    name: 'Subscription Boxes',
                    icon: '/temp/isubscription.svg',
                    description: 'Be part of your customers lives with your subscription boxes.',
                    image: '/temp/subscription.png',
                    button: 'Learn more',
                    url: '/solutions/subscription-boxes'
                }
            ]"
        />
    </div>
</template>