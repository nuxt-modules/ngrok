import { getNuxt, setupTest } from '@nuxt/test-utils'

describe('module', () => {
  setupTest({
    testDir: __dirname,
    fixture: '../example',
    config: {
      ngrok: {
        token: '1234'
      }
    }
  })

  test('checks if url exists', () => {
    const nuxt = getNuxt()
    const url = nuxt.options.publicRuntimeConfig.url
    expect(url).toExist()
  })

  test('checks if url displays in cli', () => {
    const nuxt = getNuxt()
    const url = nuxt.options.publicRuntimeConfig.url
    const cli = nuxt.options.cli.badgeMessages
    expect(cli).toContain(url)
  })

  test('checks if there is a token', () => {
    const nuxt = getNuxt()
    const token = nuxt.options.publicRuntimeConfig.token
    expect(token).toExist()
  })
})
