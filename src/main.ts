import ElementPlus from 'element-plus'
import { createApp } from 'vue'
import App from './App.vue'
import 'uno.css'
import '@/styles/index.scss'
import router from './router'
import pinia from './store'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(ElementPlus)

app.mount('#app')

export default app
