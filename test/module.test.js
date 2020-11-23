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
    const { url } = getNuxt().options.publicRuntimeConfig

    expect(ngrok.connect).toHaveBeenCalled()
    expect(ngrok.authtoken).toHaveBeenCalledWith('1234')
    expect(url).toBeDefined()
  })

  test('checks if url displays in cli', () => {
    const nuxt = getNuxt()
    const { url } = nuxt.options.publicRuntimeConfig.ngrok
    const { badgeMessages } = nuxt.options.cli

    expect(badgeMessages).toContainEqual(expect.stringContaining(url))
  })
})
