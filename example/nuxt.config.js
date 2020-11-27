export default {
  modules: ['../src/module.ts'],

  ngrok: {
    auth: process.env.NGROK_AUTH || 'nuxt:rocks',
    authtoken: process.env.NGROK_AUTHTOKEN,
    addr: 8080,
    region: 'eu'
  }
}
