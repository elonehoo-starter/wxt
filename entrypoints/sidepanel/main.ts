import { createApp } from 'vue'
import '@/styles'
import Sidepanel from './Sidepanel.vue'
import { setupApp } from '@/hooks/common-setup'

const app = createApp(Sidepanel)

setupApp(app)

app.mount('#app')
