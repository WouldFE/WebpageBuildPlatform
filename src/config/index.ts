import { deepClone } from '@chris-zhu/utils'
import type { component } from '@/types'

const generateId = () => Math.floor(Math.random() * 1e4)

export const componentList: component[] = [
  {
    id: generateId(),
    component: 'CText',
    label: '文本',
    propValue: { text: { display: '文本', value: '点击此处输入文字' } },
    icon: 'string-text',
    style: {
      width: 200,
      height: 0,
      top: 0,
      left: 0,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 14,
      letterSpacing: 0,
      textAlign: 'left',
      color: '#000',
      backgroundColor: 'rgba(0,0,0,0)'
    }
  },
  {
    component: 'CLayout',
    icon: 'data-vis-4',
    id: generateId(),
    label: '布局',
    propValue: {
      col: { value: '2', display: '列数' },
      row: { value: '2', display: '行数' }
    },
    style: {
      width: 600,
      height: 600,
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
