import { connect } from '@ngrok/ngrok'
import { colors } from 'consola/utils'
import { consola } from 'consola'

import type { ModuleOptions } from './module'

export function createNgrokConnection(options: ModuleOptions) {
  connect({
    ...options,
  }).then((listener) => {
    consola.success(colors.green('Ngrok connected at'), colors.blue(listener.url() ?? 'undefined'))
  }).catch((error) => {
    consola.error(colors.red('Ngrok connection error:'), error)
  })
}
