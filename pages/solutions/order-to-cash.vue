<script setup>
useHead({
  titleTemplate: title => `Order to Cash | ${title}`
})
</script>

<template>
    <div>
        <PagesSolutionsOrderCashHeader
          title="We reduce time and resources with order to cash processes"
          text="If you want to start selling in Spain but you don't have a company here, we can help you by managing everything from order to delivery and billing."
          button="Get started"
          url="/contact"
          :bullets="['Purchase order management', 'Billing', 'Preparation and shipping of orders', 'Cash Collection']"
        />
        <PagesSolutionsOrderCashAbout
          subtitle="Customer service"
          title="Support, returns... <br /> A team at your disposal"
          text="Lógicos goal is to provide your clients with a complete and personalized service. We can provide the following services:"
        />  
        <UiTabs
            :tabs="[
                {
                    name: 'Support queries about orders',
                    icon: '/temp/b2b.svg',
                    title: 'Support queries <br /> about orders',
                    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since.',
                    bullets: [],
                    button: 'Get started',
                    url: '/contact'
                },
                {
                    name: 'Collection management',
                    icon: '/temp/storage.svg',
                    title: 'Collection management',
                    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since.',
                    bullets: [],
                    button: 'Get started',
                    url: '/contact'
                },
                {
                    name: 'Resolution of incidents',
                    icon: '/temp/reports.svg',
                    title: 'Resolution of incidents',
                    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since.',
                    bullets: [],
                    button: 'Get started',
                    url: '/contact'
                },
                {
                    name: 'Billing',
                    icon: '/temp/money.svg',
                    title: 'Billing',
                    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since.',
                    bullets: [],
                    button: 'Get started',
                    url: '/contact'
                },
                {
                    name: 'Returns',
                    icon: '/temp/transportation.svg',
                    title: 'Returns',
                    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since.',
                    bullets: [],
                    button: 'Get started',
                    url: '/contact'
                },
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