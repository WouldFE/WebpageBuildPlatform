import { createApp } from 'vue'
import App from './App.vue'
import 'uno.css'
import '@/styles/index.scss'
import router from './router'
import pinia from './store'

const app = createApp(App)
app.use(router)
app.use(pinia)

app.mount('#app')
