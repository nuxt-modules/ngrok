![@nuxtjs/ngrok](https://raw.githubusercontent.com/nuxt-modules/ngrok/main/docs/public/cover.jpg)

# Nuxt ngrok

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Easily expose your Nuxt application to the internet with [ngrok](https://ngrok.com/).

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [📖 &nbsp;Documentation](https://ngrok.nuxtjs.org)

## Features

- **Effortless Integration**: Set up ngrok with just one line of configuration.

## Setup

1. Install `@nuxtjs/ngrok`:

```bash
npx nuxi@latest module add ngrok
```

2. Add `@nuxtjs/ngrok` to the `modules` section of `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/ngrok',
  ],

  ngrok: {
    // module options
  },
})
```
That's it! You can now use `ngrok` in your Nuxt app ✨

> for Nuxt 2 support, please use `@nuxtjs/ngrok@2.0.0` and follow the instructions at [v2.nuxtjs.org](https://v2.nuxtjs.org)

## Options

Add authorization and more using the module options:

```ts
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/ngrok',
  ],

  ngrok: {
    authtoken_from_env: true, // Use NGROK_AUTHTOKEN environment variable
    // authtoken: 'your_ngrok_authtoken', // Or use this option
    auth: 'username:password',
    domain: 'your_custom_domain',
    production: true,
  },

})
```

learn more about the [module options](https://ngrok.nuxtjs.org/options).

## Usage

Now if you run your Nuxt application, you should see a message in your console that shows the ngrok URL.

```bash
✔ Ngrok connected at https://your_ngrok_url
```


## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint

  # Release new version
  npm run release
  ```

</details>


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nuxtjs/ngrok/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@nuxtjs/ngrok

[npm-downloads-src]: https://img.shields.io/npm/dm/@nuxtjs/ngrok.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/ngrok

[license-src]: https://img.shields.io/npm/l/@nuxtjs/ngrok.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/@nuxtjs/ngrok

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
