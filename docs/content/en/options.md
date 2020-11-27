---
title: Options
description: 'ngrok exposes your localhost to the world for easy testing and sharing! No need to mess with DNS or deploy just to have others test out your changes'
category: Guide
position: 2

---

## Adding an authtoken

You can create a basic http-https-tcp tunnel without an authtoken. For custom subdomains and more you should obtain an authtoken by signing up at [ngrok.com](ngrok.com).

Once you have your token you can add it to your `.env` file with the key `NGROK_AUTHTOKEN`.

```bash{}[.env]
NGROK_AUTHTOKEN='your-authtoken-from-ngrok'

```

```js{}[nuxt.config.js]
export default {
 ngrok: {
    // module options
    authtoken: process.env.NGROK_AUTHTOKEN
  }
}
```

<alert type="warning">

Don't forget to make sure your `.env`file has been added to your `.gitignore`.

</alert>

## Adding Authorization

If you don't want your Dev server to be exposed to the internet then you should consider password protection! You can set this up by using the option `ngrok.auth` and passing in a username and password separated by a colon `user:pwd`. To keep the user and password values a secret you should add them to your `.env` file with the key `NGROK_AUTH`.

```bash{}[.env]
NGROK_AUTH='user:pwd'
```

```js{}[nuxt.config.js]
export default {
 ngrok: {
    // module options
    auth: process.env.NGROK_AUTH // http basic authentication for tunnel
  }
}
```

<alert type="warning">

Don't forget to make sure your `.env`file has been added to your `.gitignore`.

</alert>

## Adding a Port

You can specify a different port or network address by using the `ngrok.addr` option. The default address is 80.

```js{}[nuxt.config.js]
export default {
 ngrok: {
    // module options
    addr: 8080 // port or network address, defaults to 80
  }
}
```

## Adding a Subdomain

You can specify a different port or network address by using the `ngrok.addr` option. The default address is 80.

```js{}[nuxt.config.js]
export default {
 ngrok: {
    // module options
    subdomain: 'nuxt' // reserved tunnel name https://nuxt.ngrok.io
  }
}
```

<alert>

Adding a subdomain requires a paid account

</alert>

## Changing the Region

You can specify a different ngrok region by using the `ngrok.region` option. The default region is `us`.

```js{}[nuxt.config.js]
export default {
 ngrok: {
    // module options
    region: 'us', // one of ngrok regions (us, eu, au, ap, sa, jp, in), defaults to us
  }
}
```

## Changing the Protocol

You can specify a different ngrok region by using the `ngrok.proto` option. The default protocol is `http`.

```js{}[nuxt.config.js]
export default {
 ngrok: {
    // module options
    proto: 'tcp', // http|tcp|tls, defaults to http
  }
}
```
