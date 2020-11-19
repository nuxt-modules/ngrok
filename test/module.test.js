import { getNuxt, setupTest } from '@nuxt/test-utils'

describe('module', () => {
  setupTest({
    testDir: __dirname,
    fixture: '../example',
    config: {
      ngrok: {
        test: 123
      }
    }
  })

  test('should inject plugin', () => {
    const nuxt = getNuxt()
    const url = nuxt.options.publicRuntimeConfig.url
  })
})
