export default defineNuxtPlugin((nuxtApp) => {
  const siteKey = '6Lcvbs4qAAAAAEz0fLOPHTIxsjhsiphLtA9DwVE2'

  function loadRecaptchaScript() {
    return new Promise((resolve, reject) => {
      if (document.getElementById('recaptcha-script')) {
        return resolve(window.grecaptcha)
      }

      const script = document.createElement('script')
      script.id = 'recaptcha-script'
      script.src = 'https://www.google.com/recaptcha/api.js?render=explicit'
      script.async = true
      script.defer = true

      script.onload = () => {
        if (window.grecaptcha) {
          resolve(window.grecaptcha)
        } else {
          reject(new Error('reCAPTCHA failed to load.'))
        }
      }

      script.onerror = () => reject(new Error('Failed to load reCAPTCHA script.'))

      document.head.appendChild(script)
    })
  }

  loadRecaptchaScript()
    .then((grecaptcha) => {
      nuxtApp.provide('recaptcha', {
        render: (elementId, callback) => {
          grecaptcha.ready(() => {
            grecaptcha.render(elementId, {
              sitekey: siteKey,
              callback,
            })
          })
        },
        execute: (action, callback) => {
          grecaptcha.ready(() => {
            grecaptcha.execute(siteKey, { action }).then((token) => {
              callback(token)
            })
          })
        },
      })
    })
    .catch((error) => {
      console.error('Error loading reCAPTCHA:', error)
    })
})