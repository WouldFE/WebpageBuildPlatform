import { deepClone } from '@chris-zhu/utils'
import type { CButton, component } from '@/types'

const generateId = () => Math.floor(Math.random() * 1e4)

export const componentList: Array<component> = [
  {
    id: generateId(),
    component: 'CPicture',
    label: '图片',
    propValue: {
      src: { display: '图片地址', value: 'https://images.pexels.com/photos/4937641/pexels-photo-4937641.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
      preview: { display: '预览放大', value: 'true' },
      fit: { display: '适应', value: 'cover' }
    },
    icon: 'image',
    style: {
      width: 200,
      height: 200,
      top: 0,
      left: 0,
      color: '#000',
      backgroundColor: 'rgba(0,0,0,0)'
    }
  },
  {
    id: generateId(),
    component: 'CButton',
    label: '按钮',
    propValue: {
      msg: { display: '文字', value: '按钮' },
      type: { display: '类型', value: 'primary' },
      size: { display: '尺寸', value: 'default' }
    },
    icon: 'cursor-1',
    style: {
      top: 0,
      left: 0
    },
    events: {}
  },
  {
    component: 'CLayout',
    icon: 'data-vis-4',
    id: generateId(),
    label: '布局',
    propValue: {
      row: { value: '2', display: '行数' },
      col: { value: '2', display: '列数' },
      subComp: { value: [], display: '内含组件' }
    },
    style: {
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      color: '#000',
      backgroundColor: 'rgba(0,0,0,0)'
    }
  }
]

export const generateComp = (idx: number): component => {
  const c = deepClone(componentList[idx]) as component
  c.id = generateId()
  return c
}
