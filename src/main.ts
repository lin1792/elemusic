import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.ts'
import '../src/assets/index.css'
import { createPinia } from 'pinia'


const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
