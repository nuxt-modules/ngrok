import { getNuxt, setupTest } from '@nuxt/test-utils'
import ngrok from 'ngrok'

jest.mock('ngrok', () => ({
  connect: jest.fn().mockImplementation(() => Promise.resolve('https://example.com')),
  authtoken: jest.fn().mockImplementation(() => Promise.resolve()),
  disconnect: jest.fn()
}))

describe('module', () => {
  setupTest({
    testDir: __dirname,
    fixture: '../example',
    server: true,
    config: {
      dev: true,
      ngrok: {
        token: '1234'
      }
    }
  })

  test('checks if url exists', () => {
    expect(ngrok.connect).toHaveBeenCalled()
    const { url } = getNuxt().options.publicRuntimeConfig

    expect(url).toBeDefined()
  })

  test('checks if url displays in cli', () => {
    const nuxt = getNuxt()
    const { url } = nuxt.options.publicRuntimeConfig
    const { badgeMessages } = nuxt.options.cli

    expect(badgeMessages).toContainEqual(expect.stringContaining(url))
  })
})
