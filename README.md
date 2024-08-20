# WXT Starter Template

A [WXT](https://wxt.dev/) powered WebExtension ([Chrome](https://developer.chrome.com/docs/extensions/reference/), [FireFox](https://addons.mozilla.org/en-US/developers/), etc.) starter template.

## Features

- ⚡️ **Instant HMR** - use **Vite** on dev (no more refresh!)
- 🥝 Vue 3 - Composition API, [`<script setup>` syntax](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md) and more!
- 🌈 [UnoCSS](https://github.com/unocss/unocss) - The instant on-demand Atomic CSS engine.
- 🦾 [TypeScript](https://www.typescriptlang.org/) - type safe
- 📦 [Components auto importing](./src/components)

## Pre-packed

### WebExtension Libraries

- [`wxt`](https://github.com/wxt-dev/wxt) - Next-gen Web Extension Framework

### Vite Plugins

- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use `browser` and Vue Composition API without importing
- [`unplugin-vue-components`](https://github.com/antfu/vite-plugin-components) - components auto import
- [`vite-plugin-vue-devtools`](https://github.com/vuejs/devtools-next) - Unleash Vue Developer Experience

### Vue Plugins

- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs

### UI Frameworks

- [UnoCSS](https://github.com/unocss/unocss) - the instant on-demand Atomic CSS engine

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/) with [@antfu/eslint-config](https://github.com/antfu/eslint-config), single quotes, no semi

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.js.org/) - fast, disk space efficient package manager

## Use the Template

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/elonehoo/starter-wxt/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

> If you don't have pnpm installed, run: npm install -g pnpm

```bash
npx degit elonehoo/starter-wxt my-webext
cd my-webext
pnpm i
```

### Development

```bash
pnpm dev
```

For Firefox developers, you can run the following command instead:

```bash
pnpm dev:firefox
```

### Build

To build the extension, run

```bash
pnpm build
```

## Credits

This template is originally made for the [antfu/vitesse-webext](https://github.com/antfu-collective/vitesse-webext) browser extension.
