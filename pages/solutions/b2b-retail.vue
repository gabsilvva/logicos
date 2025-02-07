<script setup>
useHead({
  titleTemplate: title => `B2B & Retail | ${title}`
})
</script>

<template>
    <div>
        <PagesSolutionsB2bRetailHeader
            icon="/temp/b2bi.svg"
            title="B2B & Retail"
            text="Delivery to independent stores and large retailers"
            button="Get started"
            url="/contact"
        />
        <UiTabs
            :tabs="[
                {
                    name: 'Storage',
                    icon: '/temp/storage.svg',
                    title: 'Outsource Your Warehouse Management ',
                    text: 'Save time and costs: we have strategically designed our storage system to assign each customer a designated area. This optimizes storage locations and reduces costs for you.',
                    bullets: ['Separate spaces for each client depending on their needs', 'Security and video surveillance control.', 'Thermal insulation for cosmetics and products sensitive to cold and heat'],
                    button: '',
                    url: ''
                },
                {
                    name: 'Order Preparation',
                    icon: '/temp/order.svg',
                    title: 'Lorem ipsum dolor amets',
                    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since.',
                    bullets: [],
                    button: 'Get started',
                    url: '/contact'
                },
                {
                    name: 'Manipulated',
                    icon: '/temp/manipulated.svg',
                    title: 'Lorem Ipsum is simply',
                    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since.',
                    bullets: [],
                    button: 'Get started',
                    url: '/contact'
                },
                {
                    name: 'Shipping Management',
                    icon: '/temp/shipping.svg',
                    title: 'Lorem Ipsum is simply',
                    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since.',
                    bullets: [],
                    button: 'Get started',
                    url: '/contact'
                }
            ]"
        />
        <PagesSolutionsB2bRetailSection
            title="We manage your operations and work flexibly to adapt to your logistics needs"
            image="/temp/b2b.png"
            text="Logistics for promotional campaigns, FSDUs, CTUs, merchandising services and POS. We also take care of customs management for importers."
            button="Get started"
            url="/contact"
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