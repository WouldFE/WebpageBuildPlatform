import type { component } from '@/types'

interface canvasStore {
  // 配置项
  config: {
    width: number
    height: number
    bgColor: string
  }
  // 添加更多模式
  mode: 'edit' | 'view'
  // 组件数据
  data: component[]
  // 当前聚焦组件
  currComp: component | undefined
  // 当前聚焦组件 idx
  currCompIndex: number
  // 右键菜单配置
  contextmenu: {
    show: boolean
    top: number
    left: number
  }
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
          bgColor: '#ffcc66'
        },
        mode: 'edit',
        data: [],
        currComp: undefined,
        currCompIndex: -1,
        contextmenu: {
          show: false,
          top: 0,
          left: 0
        }
      }
    },
    persist: {
      enabled: true
    },
    actions: {
      addComponent(component: component) {
        this.data.push(component)
      }
    }
  })

// export const useCanvasStore = defineStore('canvas', () => {
//   const config = reactive({
//     width: 1280,
//     height: 720,
//     bgColor: '#fc6'
//   })
//   const data = reactive<component[]>([])
//   const mode = ref('edit')
//   const currComp = ref()

//   const addComponent = (component: component) => {
//     data.push(component)
//   }

//   return {
//     config, data, mode, currComp, addComponent
//   }
// })
