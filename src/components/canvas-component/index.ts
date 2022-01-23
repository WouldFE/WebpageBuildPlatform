import app from '@/main'

const canvasComponentList = [
  'CText'
]

canvasComponentList.forEach((key) => {
  app.component(key, () => import(`@/components/canvas-component/${key}.vue`))
})
