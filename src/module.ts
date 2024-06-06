import { addServerPlugin, createResolver, defineNuxtModule } from '@nuxt/kit'
import type { Config } from '@ngrok/ngrok'
import { defu } from 'defu'

// import { connect } from '@ngrok/ngrok'
// import { colors } from 'consola/utils'
// import { consola } from 'consola'

export interface ModuleOptions extends Config {
  /**
   * Port, network address, url, or named pipe. Defaults to nuxt devServer
   * Examples: "3000", "localhost:3000", "https://192.168.1.100:8443", "unix:/tmp/my.sock", "pipe://./my-pipe"
   */
  addr?: number | string

  /**
   * enable ngrok in production mode
   * @default true
   */
  production?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-ngrok',
    configKey: 'ngrok',
  },
  defaults: {},
  setup(_options, _nuxt) {
    const { resolve } = createResolver(import.meta.url)

    const config = _nuxt.options.runtimeConfig

    config.ngrok = defu(config.ngrok || {}, {
      addr: _nuxt.options.devServer.port,
      production: true,
      ..._options,
    })

    // TODO: the problem with hooks is that the log is not displayed in production mode (tied all the hooks but didn't work)
    // _nuxt.hook('listen', async () => {
    //   connect({
    //     ...config.ngrok,
    //   }).then((listener) => {
    //     consola.success(colors.green('Ngrok connected at'), colors.blue(listener.url() ?? 'undefined'))
    //   }).catch((error) => {
    //     consola.error(colors.red('Ngrok connection error:'), error)
    //   })
    // })

    if (import.meta.dev || config.ngrok.production) {
      addServerPlugin(resolve('./runtime/server/plugins/ngrok'))
    }
  },
})
