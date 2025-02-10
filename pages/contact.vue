<script setup>
useHead({
  titleTemplate: title => `Contact | ${title}`
})
</script>

<template>
  <div class="pt-top sm:pt-topm pb-top sm:pb-20 bg-light-green">
    <LayoutContainer>
      <div class="flex items-start justify-between sm:flex-col gap-8">
        <PagesContactInfos
          title="Contact us"
          text="We help you with whatever you need"
          email="hi@logicos3pl.com"
          phone="+34 911 724 516"
          address="Andrés Álvarez Caballero, 22​ P.I. <br /> Valdonaire​ Humanes, Madrid"
        />
        <PagesContactForm
          name="First Name"
          email="Your Best E-mail"
          phone="Phone Number"
          message="Message"
          checkbox="I agree to receive communications from Lógicos 3PL."
          text="You can unsubscribe from these communications at any time. For more information, consult our <a href='https://link.com.br' target='_blank'>Privacy Policy</a>. <br /> By clicking Submit, you agree that Lógicos 3PL will store and process the personal information you provide to provide you with the requested content."
          button="Send"
        />
      </div>
    </LayoutContainer>
  </div>
</template>