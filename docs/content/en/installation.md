---
title: Installation
description: 'ngrok exposes your localhost to the world for easy testing and sharing! No need to mess with DNS or deploy just to have others test out your changes'
category: Guide
position: 1

---

Add `@nuxtjs/ngrok` dependency using yarn or npm to your project

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add @nuxtjs/ngrok
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  npm install @nuxtjs/ngrok
  ```

  </code-block>
</code-group>

Add `@nuxtjs/ngrok` to the buildModules section of your `nuxt.config.js`

```js{}[nuxt.config.js]
 buildModules: [
    '@nuxtjs/ngrok',
  ]
```

