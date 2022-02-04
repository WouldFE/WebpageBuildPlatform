import { deepClone } from '@chris-zhu/utils'
import type { component } from '@/types'

const generateId = () => Math.floor(Math.random() * 1e4)

export const componentList: component[] = [
  {
    id: generateId(),
    component: 'CText',
    label: '文本',
    propValue: { text: '请在此处输入文字' },
    icon: '',
    style: {
      width: '200px',
      height: '200px',
      top: '0px',
      left: '0px',
      fontSize: '14px',
      fontWeight: '500px',
      lineHeight: '',
      letterSpacing: '0px',
      textAlign: '',
      color: ''
    }
  }
]

export const generateComp = (idx: number): component => {
  const c = deepClone(componentList[idx]) as component
  c.id = generateId()
  return c
}
