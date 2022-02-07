import { createApp } from 'vue'
import canvasCompList from '@/components/canvas'
import router from './router'
import pinia from './store'
import App from './App.vue'
import 'uno.css'
import '@/styles/index.scss'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(canvasCompList)

app.mount('#app')
