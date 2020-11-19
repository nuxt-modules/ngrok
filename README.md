# @nuxtjs/ngrok

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `@nuxtjs/ngrok` dependency to your project

```bash
yarn add @nuxtjs/ngrok # or npm install @nuxtjs/ngrok
```

2. Add `@nuxtjs/ngrok` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    '@nuxtjs/ngrok',
  ],
  ngrok: {
    // module options
  }
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install`
3. Start development server using `yarn dev`

## License

[MIT License](./LICENSE)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nuxtjs/ngrok/latest.svg
[npm-version-href]: https://npmjs.com/package/@nuxtjs/ngrok

[npm-downloads-src]: https://img.shields.io/npm/dm/@nuxtjs/ngrok.svg
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/ngrok

[github-actions-ci-src]: https://github.com/nuxt-community/ngrok-module/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/nuxt-community/ngrok-module/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/ngrok-module.svg
[codecov-href]: https://codecov.io/gh/nuxt-community/ngrok-module

[license-src]: https://img.shields.io/npm/l/@nuxtjs/ngrok.svg
[license-href]: https://npmjs.com/package/@nuxtjs/ngrok
