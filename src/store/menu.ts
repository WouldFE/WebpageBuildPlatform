export const useMenuStore = defineStore('menu', {
  state: () => {
    return {
      menuItemList: [
        {
          id: 'save',
          name: '保存',
          operation: () => {}
        },
        {
          id: 'clear',
          name: '清空画布',
          operation: () => {}
        },
        {
          id: 'setting',
          name: '画布设置',
          operation: () => {}
        }
      ]
    }
  }
})
