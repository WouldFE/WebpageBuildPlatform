<template>
  <div
    class="shape"
    @click.stop="handleClick"
    @mousedown.stop="handleMouseDownOnShape"
    @contextmenu.prevent.stop="handleContextmenu"
  >
    <component
      :is="element.component"
      :elem="element"
      :mode="mode"
      :style="{position: 'absolute' , ...getComponentStyle(element.style)}"
    />
  </div>
</template>

<script lang="ts" setup>
import { useCanvasStore } from '@/store/canvas'
import type { commonStyle, component } from '@/types'

const canvasStore = useCanvasStore()
const {
  currComp,
  contextmenu,
  mode
} = storeToRefs(canvasStore)

const props = defineProps<{
  element: component
  index: number
}>()

const handleClick = () => {
  canvasStore.$patch({
    currComp: props.element,
    currCompIndex: props.index,
    contextmenu: { show: false }
  })
}

const handleMouseDownOnShape = (e: MouseEvent) => {
  handleClick()
  const comp = currComp.value as component
  const startY = e.clientY
  const startX = e.clientX
  const startTop = comp.style.top
  const startLeft = comp.style.left

  const move = (e: MouseEvent) => {
    const currY = e.clientY
    const currX = e.clientX
    comp.style.top = Number(currY - startY + Number(startTop)) < 0 ? 0 : Number(currY - startY + Number(startTop))
    comp.style.left = Number(currX - startX + Number(startLeft)) < 0 ? 0 : Number(currX - startX + Number(startLeft))
  }

  const up = () => {
    document.removeEventListener('mousemove', move)
    document.removeEventListener('mouseup', up)
  }

  useEventListener(document, 'mousemove', move)
  useEventListener(document, 'mouseup', up)
}

const getComponentStyle = (style: commonStyle) => {
  const result: {[key: string]: string} = {}
  Object.keys(style).forEach((value) => {
    if (!isNaN(Number(style[value]))) result[value] = `${style[value]}px`
    else result[value] = style[value] as string
  })
  return result
}

const handleContextmenu = (e: MouseEvent) => {
  contextmenu.value.left = e.clientX - e.offsetX
  contextmenu.value.top = e.clientY - e.offsetY
  contextmenu.value.show = true
}
</script>
<style>
.shape {
  cursor: move;
}
</style>
