import { createApp } from 'vue'
import '@/styles'
import Options from './Options.vue'
import { setupApp } from '@/hooks/common-setup'

const app = createApp(Options)

setupApp(app)

app.mount('#app')
