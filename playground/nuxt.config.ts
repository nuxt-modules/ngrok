export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },

  ngrok: {
    authtoken_from_env: true, // use NGROK_AUTHTOKEN from environment variables
    // authtoken: 'your_auth_token', // or use authtoken
    domain: 'mutual-moose-generous.ngrok-free.app', // optional, you can use a custom domain
    production: true, // enable ngrok in production mode
  },
})
