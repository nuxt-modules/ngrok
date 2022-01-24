import defu from 'defu'
import { Module } from '@nuxt/types'
import ngrok, { INgrokOptions } from 'ngrok'
import chalk from 'chalk'

// https://github.com/bubenshchykov/ngrok

export interface ModuleOptions extends Partial<INgrokOptions> {}

const CONFIG_KEY = 'ngrok'

const nuxtModule: Module<ModuleOptions> = function(moduleOptions) {
  const { nuxt } = this

  // Don't start NGROK in production mode
  if (nuxt.options.dev === false) {
    return
  }

  const defaults: ModuleOptions = {
    authtoken: process.env.NGROK_TOKEN,
    auth: process.env.NGROK_AUTH
  }

  const options = defu<ModuleOptions>(
    this.options[CONFIG_KEY],
    moduleOptions,
    defaults
  )

  if (!options.auth) {
    // eslint-disable-next-line no-console
    console.warn(
      '[ngrok] Dev server exposed to internet without password protection! Consider using `ngrok.auth` options'
    )
  }

  // Start NGROK when Nuxt server is listening
  let url: string

  nuxt.hook('listen', async (_server: any, { port }: { port: number }) => {
    if (options.authtoken) {
      await ngrok.authtoken(options.authtoken)
    }

    let addr = port
    if(options.addr){
      addr = options.addr
    }

    url = await ngrok.connect({ ...options, addr } as INgrokOptions)

    nuxt.options.publicRuntimeConfig.ngrok = { url }
    nuxt.options.cli.badgeMessages.push(
      `Public URL: ${chalk.underline.yellow(url)}`
    )
  })

  // Disconnect ngrok connection when closing nuxt
  nuxt.hook('close', () => {
    url && ngrok.disconnect()
  })
}
;(nuxtModule as any).meta = require('../package.json')

declare module '@nuxt/types' {
  interface NuxtConfig {
    [CONFIG_KEY]?: ModuleOptions
  } // Nuxt 2.14+
  interface Configuration {
    [CONFIG_KEY]?: ModuleOptions
  } // Nuxt 2.9 - 2.13
}

export default nuxtModule
