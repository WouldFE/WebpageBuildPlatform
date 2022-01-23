import type { component } from '@/types'

type canvasStore = {
  canvasSetting: {}
  editMode: string
  componentData: component[]
}

export const useCanvasStore = defineStore('canvas', {
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
      // @ts-ignore
      this.componentData.push(component)
    }
  },
  getters: {}
})
