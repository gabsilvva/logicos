<script setup>
useHead({
  titleTemplate: title => `Subscription Boxes | ${title}`
})
</script>

<template>
  <div>
      <PagesSolutionsSBoxesHeader
    title="Subscription Boxes"
    text="Be part of your customers' lives with your subscription boxes."
    button="Get started"
    url="/contact"
  />
  <PagesSolutionsSBoxesTimeline
    subtitle="Only 3 steps"
    :items="[
      {
        title: 'Before Starting',
        text: 'We understand the vital role subscription boxes play for both your business and customers. That’s why we take the time to fully grasp your products and box design. <br /><br /> Before we start working on a new subscription box, we conduct thorough training with our team to ensure they capture your vision and what you want to convey. <br /><br /> Before shipping, we provide detailed photographs of the final product for your approval. This ensures that everything meets your expectations and is ready for a successful launch.'
      },
      {
        title: 'Packaging <br /> and Assembly',
        text: 'We know that unboxing a subscription box should be a delightful experience for customers. That’s why we prioritize flexibility in packaging and handling to effectively convey your brand’s values. Share your vision with us, and we’ll make it happen. <br /><br /> With 7 years of experience in assembling and handling a diverse range of products—from cosmetics and electronics to supplements, accessories, books, and clothing—we’re well-equipped to meet your needs. Additionally, our network of packaging suppliers ensures we can find the perfect packaging for a wide variety of products.'
      },
      {
        title: 'Systems <br /> Integrations',
        text: 'We integrate our software with your e-commerce platform, providing 360º real-time visibility of your orders, operations, billing, and payments. This integration ensures efficiency and accuracy in order preparation while optimizing delivery and collection times. <br /><br /> At Lógicos, we understand that growing e-commerce businesses require extra attention and support to reach their full potential. That’s why we assign a Customer Success Manager to each client, guiding you through every step of your growth journey.'
      }
    ]"
  />
  </div>
</template>