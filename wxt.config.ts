import { defineConfig } from 'wxt'
import UnoCSS from 'unocss/vite'
import DevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

// See https://wxt.dev/api/config.html
export default defineConfig({
  entrypointLoader: 'jiti',
  modules: ['@wxt-dev/module-vue'],
  manifest: {
    action: {},
    permissions: [
      'tabs',
      'storage',
      'activeTab',
      'sidePanel',
    ],
  },
  vite: () => ({
    plugins: [
      DevTools({
        appendTo: '/entrypoints/options/main.ts',
      }),
      UnoCSS(),
      AutoImport({
        imports: [
          'vue',
          '@vueuse/core',
        ],
      }),
      Components({
        dirs: ['components'],
      }),
    ],
  }),
})
