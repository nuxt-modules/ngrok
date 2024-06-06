/**
 * Due to an upstream bug in Nuxt 3 we need to stub the plugin here, track:https://github.com/nuxt/nuxt/issues/18556
 */
import type { NitroApp } from 'nitropack'

import { connect } from '@ngrok/ngrok'
import { colors } from 'consola/utils'
import { consola } from 'consola'

import { useRuntimeConfig } from '#imports'
import type { ModuleOptions } from '~/src/module'

type NitroAppPlugin = (nitro: NitroApp) => void

function defineNitroPlugin(def: NitroAppPlugin): NitroAppPlugin {
  return def
}

export default defineNitroPlugin((_nitro) => {
  const ngrok = useRuntimeConfig().ngrok as ModuleOptions

  connect({
    ...ngrok,
  }).then((listener) => {
    consola.success(`${colors.green('Ngrok connected at')} ${colors.blue(listener.url() ?? 'undefined')}`)
  }).catch((error) => {
    consola.error(colors.red('Ngrok connection error:'), error)
  })
})
