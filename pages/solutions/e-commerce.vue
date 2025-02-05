<template>
    <div>
        <PagesSolutionsEcommerceHeader
            icon="/temp/iecommerce.svg"
            title="E-Commerce"
            text="Online stores and marketplaces"
            button="Get started"
            url="/contact"
            image="/temp/ecommerce-page.png"
        />
        <UiTabs
            :tabs="[
                {
                    name: 'Storage',
                    icon: '/temp/storage.svg',
                    title: 'A Home For Your Products',
                    text: 'Our warehouses are strategically designed so that each client has their space. This helps us get the most out of our space and reduce costs for you.',
                    bullets: ['Independent spaces for each client based on their needs.', 'Security and control by video surveillance.', 'Thermal insulation for cosmetics and products sensitive to cold/heat.'],
                    button: 'Get started',
                    url: '/contact'
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
                    name: 'Reception',
                    icon: '/temp/reception.svg',
                    title: 'Lorem Ipsum is simply',
                    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since.',
                    bullets: [],
                    button: 'Get started',
                    url: '/contact'
                },
                {
                    name: 'Shipping',
                    icon: '/temp/shipping.svg',
                    title: 'Lorem Ipsum is simply',
                    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since.',
                    bullets: [],
                    button: 'Get started',
                    url: '/contact'
                },
                {
                    name: 'Exchanges and Returns',
                    icon: '/temp/exchanges.svg',
                    title: 'Lorem Ipsum is simply',
                    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since.',
                    bullets: [],
                    button: 'Get started',
                    url: '/contact'
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
        <PagesSolutionsEcommerceMockup
            title="Auto real-time <br /> synchronization"
            button="Get started"
            url="/contact"
            mockup="/temp/transparent.png"
            :ballons="['/img/attr1.png', '/img/attr2.png', '/img/attr3.png']"
        />
    </div>
</template>