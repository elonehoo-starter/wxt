import { createApp } from 'vue'
import '@/styles'
import Popup from './Popup.vue'
import { setupApp } from '@/hooks/common-setup'

const app = createApp(Popup)

setupApp(app)

app.mount('#app')
