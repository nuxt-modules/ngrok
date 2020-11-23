---
title: Usage
description: 'ngrok exposes your localhost to the world for easy testing and sharing! No need to mess with DNS or deploy just to have others test out your changes'
category: Guide
position: 2

---

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn dev
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  npm run dev
  ```

  </code-block>
</code-group>

When running Nuxt in dev mode you will now see a Public Url in the Nuxt CLI that you can copy and share with anyone. They will then be able to see your localhost and watch your live changes while working in de mode.

<alert type="warning">

Note This module is only enabled in dev mode.

</alert>

<img src="/cli.png" alt="Nuxt cli" />

