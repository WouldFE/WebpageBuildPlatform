import type { component } from '@/types'

type canvasStore = {
  canvasSetting: {
    width: number
    height: number
  }
  editMode: string
  componentData: component[]
}

export const useCanvasStore = defineStore<string, canvasStore>('canvas', {
  state: () => {
    return {
      canvasSetting: {
        width: 1280,
        height: 720
      },
      editMode: 'edit',
      componentData: []
    }
  },
  actions: {
    addComponent(component: component) {
      this.componentData.push(component)
    }
  },
  getters: {}
})
