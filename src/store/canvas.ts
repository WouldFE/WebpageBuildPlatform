import type { component } from '@/types'

interface canvasStore {
  // 配置项
  config: {
    width: number
    height: number
    bgColor: string
  }
  // 添加更多模式
  mode: 'edit' | 'xxx'
  // 组件数据
  data: component[]
  currComp: component | undefined
}

interface canvasAction {
  addComponent: (component: component) => void
}
export const useCanvasStore = defineStore<string, canvasStore, {}, canvasAction>(
  'canvas',
  {
    state: () => {
      return {
        config: {
          width: 1280,
          height: 720,
          bgColor: '#fc6'
        },
        mode: 'edit',
        data: [],
        currComp: undefined
      }
    },
    actions: {
      addComponent(component: component) {
        this.data.push(component)
      }
    }
  })
