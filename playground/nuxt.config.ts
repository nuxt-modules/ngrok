export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['../src/module'],

  ngrok: {
    // set NGROK_AUTHTOKEN in your environment variables or use the authtoken option
    authtoken_from_env: true,
    // authtoken: 'your_auth_token',
    domain: 'mutual-moose-generous.ngrok-free.app', // optional, you can use a custom domain
  },
})
