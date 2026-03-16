import { addServerPlugin, createResolver, defineNuxtModule } from '@nuxt/kit'
import type { Config } from '@ngrok/ngrok'
import { defu } from 'defu'
import { connect } from '@ngrok/ngrok'
import { colors } from 'consola/utils'
import { consola } from 'consola'

export interface ModuleOptions extends Config {
  /**
   * Port, network address, url, or named pipe. Defaults to nuxt devServer
   * Examples: "3000", "localhost:3000", "https://192.168.1.100:8443", "unix:/tmp/my.sock", "pipe://./my-pipe"
   */
  addr?: number | string

  /**
   * enable ngrok in production mode
   * @default false
   */
  production?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-ngrok',
    configKey: 'ngrok',
  },
  defaults: {},
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    const ngrokConfig = defu(nuxt.options.runtimeConfig.ngrok as ModuleOptions || {}, options,
      {
        addr: nuxt.options.devServer.port,
        production: false,
      },
    )

    nuxt.options.runtimeConfig.ngrok = ngrokConfig

    if (nuxt.options.dev) {
      const allowedHost = ngrokConfig.domain || ngrokConfig.hostname || '.ngrok-free.app'

      nuxt.options.vite = defu(nuxt.options.vite, {
        server: {
          allowedHosts: [allowedHost],
        },
      })

      nuxt.hook('listen', () => createNgrokConnection(ngrokConfig))
    }
    else if (ngrokConfig.production) {
      addServerPlugin(resolve('./runtime/server/plugins/ngrok'))
    }
  },
})

export async function createNgrokConnection(options: ModuleOptions) {
  try {
    const listener = await connect(options)
    consola.success(colors.green('Ngrok connected at'), colors.blue(listener.url() ?? 'undefined'))
  }
  catch (error) {
    consola.error(colors.red('Ngrok connection error:'), error)
  }
}
