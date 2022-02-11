<template>
  <div
    v-if="!isLayout"
    class="shape"
    @click.stop="handleClick"
    @mousedown.stop="handleMouseDownOnShape"
    @contextmenu.prevent.stop="handleContextmenu"
  >
    <slot />
  </div>
  <div v-else class="shape" @click.stop="handleClick">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useCanvasStore } from '@/store/canvas'
import type { component } from '@/types'

const canvasStore = useCanvasStore()
const {
  currComp,
  contextmenu,
  mode
} = storeToRefs(canvasStore)

const props = withDefaults(defineProps<{
  element: component
  index: number
  isLayout: boolean
}>(), { isLayout: false })

const handleClick = () => {
  canvasStore.$patch({
    currComp: props.element,
    currCompIndex: props.index
  })
  contextmenu.value.show = false
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
