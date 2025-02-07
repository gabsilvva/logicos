<script setup>
const { $recaptcha } = useNuxtApp()

const nameValue = ref('')
const emailValue = ref('')
const phoneValue = ref('')
const messageValue = ref('')
const error = ref(false)

const submitForm = () => {
  if(!nameValue.value || !emailValue.value) error.value = true
  else error.value = false
}

onMounted(() => $recaptcha.render('recaptcha'))

defineProps({
  name: String,
  email: String,
  phone: String,
  message: String,
  checkbox: String,
  text: String,
  button: String
})
</script>

<template>
  <form method="POST" action="" @submit.prevent="submitForm" class="max-w-[540px] w-full">
    <fieldset v-if="name" class="mb-6">
      <label for="name">{{ name }}<span class="text-[#FF0000]">*</span></label>
      <input id="name" name="name" type="text" v-model="nameValue" required>
    </fieldset>
    <div class="mb-6 flex gap-6 sm:flex-col">
      <fieldset v-if="email">
        <label for="email">{{ email }}<span class="text-[#FF0000]">*</span></label>
        <input id="email" name="email" type="email" v-model="emailValue" required>
      </fieldset>
      <fieldset v-if="phone">
        <label for="phone">{{ phone }}</label>
        <input id="phone" name="phone" type="tel" v-model="phoneValue">
      </fieldset>
    </div>
    <fieldset class="mb-6" v-if="message">
      <label for="message">{{ message }}</label>
      <textarea id="message" name="message" v-model="messageValue"></textarea>
    </fieldset>
    <label for="communication" class="flex  items-start gap-3 mb-4">
      <input id="communication" name="communication" type="checkbox" class="block mt-0.5">
      <p class="text-sm">{{ checkbox }}</p>
    </label>
    <p v-html="text" class="mb-6 sm:mb-4 text-xs"></p>
    <div id="recaptcha"></div>
    <UiButton class="mt-10 sm:mt-6" full>{{ button }}</UiButton>
    <p v-if="error"></p>
  </form>
</template>