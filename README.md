![nuxt-mongoose](https://docs.arashsheyda.me/modules/nuxt-ngrok.jpg)

# Nuxt NGROK

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Easily expose your Nuxt application to the internet with [NGROK](https://ngrok.com/).

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [📖 &nbsp;Documentation](https://docs.arashsheyda.me/nuxt-ngrok)

## Features

- **Effortless Integration**: Set up NGROK with just one line of configuration.

## Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add ngrok
```

That's it! You can now use `Nuxt NGROK` in your Nuxt app ✨

## Usage

First you'd need to set your authtoken, either in your `nuxt.config.ts` or in your environment variables:

```ts
export default defineNuxtConfig({
  modules: [
    'nuxt-ngrok',
  ],

  ngrok: {
    // authtoken_from_env: true, // Use NGROK_AUTHTOKEN environment variable
    authtoken: 'your_ngrok_authtoken',
    // you can also set other optional options here, learn more at https://docs.arashsheyda.me/nuxt-ngrok
    domain: 'mutual-moose-generous.ngrok-free.app',
  },

})
```

```bash
npx nuxi ngrok
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
[npm-version-src]: https://img.shields.io/npm/v/nuxt-ngrok/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-ngrok

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-ngrok.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/nuxt-ngrok

[license-src]: https://img.shields.io/npm/l/nuxt-ngrok.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-ngrok

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
