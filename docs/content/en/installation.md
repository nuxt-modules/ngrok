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

Add `@nuxtjs/ngrok` to the modules section of your `nuxt.config.js`

```js{}[nuxt.config.js]
 modules: [
    '@nuxtjs/ngrok',
  ]
```

## Adding an authtoken

You can create a basic http-https-tcp tunnel without an authtoken. For custom subdomains and more you should obtain an authtoken by signing up at [ngrok.com](ngrok.com).

```js{}[nuxt.config.js]
 modules: [
    [ '@nuxtjs/ngrok',
     { authtoken: 'my-ngrok-authtoken' }
    ],
  ]
```
