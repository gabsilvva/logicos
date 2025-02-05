<script setup>
useHead({
  titleTemplate: title => `${title} | Page not found`
})
</script>

<template>
  <main class="bg-green">
    <LayoutContainer>
      <div class="flex flex-col justify-center items-center h-screen">
        <VectorsError class="max-w-full sm:h-32" />
        <h1 class="text-white mt-[-32px] sm:mt-[-24px] text-center font-bold">Ops!</h1>
        <p class="text-white mt-2 mb-6 text-center">Something went wrong here :( <br /> We couldn't find the page you're looking for.</p>
        <UiButton white href="/">Back to home</UiButton>
      </div>
    </LayoutContainer>
  </main>
</template>