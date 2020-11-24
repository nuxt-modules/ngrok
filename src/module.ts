import defu from 'defu'
import { Module } from '@nuxt/types'
import ngrok from 'ngrok'
import chalk from 'chalk'

// https://github.com/bubenshchykov/ngrok

export interface ModuleOptions {
  authtoken?: string,
  subdomain?: string,
  region?: string,
  addr?: number,
  auth?: string,
  proto?: string
}
const DEFAULTS: ModuleOptions = {}
const CONFIG_KEY = 'ngrok'

const nuxtModule: Module<ModuleOptions> = function (moduleOptions) {
  const { nuxt } = this
  // Don't start NGROK in production mode
  if (nuxt.options.dev === false) {
    return
  }

  const options = defu<ModuleOptions>(this.options[CONFIG_KEY], moduleOptions, DEFAULTS)

  // Start NGROK when Nuxt server is listening
  let url: string

  nuxt.hook('listen', async function (_server: any, { port }: { port: number }) {
    const token = process.env.NGROK_TOKEN || options.authtoken
    await ngrok.authtoken(token || '')

    url = await ngrok.connect(port)

    nuxt.options.publicRuntimeConfig.ngrok = { url }
    nuxt.options.cli.badgeMessages.push(
      `Public URL: ${chalk.underline.yellow(url)}`
    )
  })

  // Disconnect ngrok connection when closing nuxt
  nuxt.hook('close', function () {
    url && ngrok.disconnect(url)
  })
}

;(nuxtModule as any).meta = require('../package.json')

declare module '@nuxt/types' {
  interface NuxtConfig { [CONFIG_KEY]?: ModuleOptions } // Nuxt 2.14+
  interface Configuration { [CONFIG_KEY]?: ModuleOptions } // Nuxt 2.9 - 2.13
}

export default nuxtModule
