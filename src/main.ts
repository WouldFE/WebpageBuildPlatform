import ElementPlus from 'element-plus'
import { createApp } from 'vue'
import * as canvasComponentList from '@/components/canvas-component'
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

// eslint-disable-next-line no-restricted-syntax
for (const key in canvasComponentList)
  app.component(key, (canvasComponentList as any)[key])

app.mount('#app')
