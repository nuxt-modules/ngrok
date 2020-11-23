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

Once you have your token you can add it to our `.env` file with the key `NGROK_TOKEN`.

```bash{}[.env]
NGROK_TOKEN=my-authtoken-from-ngrok
```

```js{}[nuxt.config.js]
 ngrok: {
   authtoken: 'my-ngrok-authtoken'
 }
```

<base-alert type="warning">

Don't forget to make sure your `.env`file has been added to your `.gitignore`.

</base-alert>
