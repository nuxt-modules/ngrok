import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin } from '@nuxt/kit'
import ngrok from 'ngrok'

export interface ModuleOptions {
  addPlugin: boolean,
  token: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'ngrok-module',
    configKey: 'ngrok'
  },
  defaults: {
    addPlugin: true,
    token: ''
  },
  setup (options, nuxt) {
    if (options.addPlugin) {
      const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
      nuxt.options.build.transpile.push(runtimeDir)
      addPlugin(resolve(runtimeDir, 'plugin'))
    }

    if (nuxt.options.dev === false) return;

    if (!options.token) {
      throw new Error('Ngrok token not provided')
    }

    let url: string;

    nuxt.hook('listen', async () => {
      await ngrok.authtoken(options.token)

      url = await ngrok.connect(3000)

      console.log(`Public URL: ${url}`)
    })

    nuxt.hook('close', async () => {
      await ngrok.disconnect(url)
    })
  }
})
