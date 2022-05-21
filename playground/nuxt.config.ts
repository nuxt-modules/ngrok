import { defineNuxtConfig } from 'nuxt'
import MyModule from '..'

export default defineNuxtConfig({
  modules: [
    MyModule
  ],
  ngrok: {
    addPlugin: true,
    token: process.env.NGROK_TOKEN
  }
})
