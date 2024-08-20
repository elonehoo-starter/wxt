import { createShadowRootUi } from 'wxt/client'
import { createApp } from 'vue'
import App from './view/App.vue'
import { setupApp } from '@/hooks/common-setup'

export default defineContentScript({
  matches: ['*://*/*'],
  // 2. Set cssInjectionMode
  cssInjectionMode: 'ui',

  async main(ctx) {
    // 3. Define your UI
    const ui = await createShadowRootUi(ctx, {
      name: 'overlay-ui',
      position: 'inline',
      onMount(container) {
        // Define how your UI will be mounted inside the container
        const app = createApp(App)
        setupApp(app)
        app.mount(container)
        return app
      },
      onRemove(app) {
        app?.unmount()
      },
    })

    // 4. Mount the UI
    ui.mount()
  },
})
