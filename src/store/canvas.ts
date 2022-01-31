import type { component } from '@/types'

interface canvasStore {
  config: { // 配置项
    width: number
    height: number
  }
  mode: 'edit' | 'xxx' // 添加更多模式
  data: component[] // 组件数据
}

interface canvasAction {
  addComponent: () => void
}

export const useCanvasStore = defineStore<string, canvasStore>('canvas', {
  state: () => {
    return {
      config: {
        width: 1280,
        height: 720
      },
      mode: 'edit',
      data: []
    }
  },
  actions: {
    addComponent(component: component) {
      this.data.push(component)
    }
  }
})
