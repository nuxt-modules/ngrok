export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['../src/module'],

  ngrok: {
    // you can use authtoken from env NGROK_AUTHTOKEN
    // authtoken_from_env: true,
    // or set it directly
    authtoken: '2hMFv8LJoGamqABwJprpDNywqrV_5MLxuYUxG7werCgWvQ4y5',
    production: false,
  },
})
