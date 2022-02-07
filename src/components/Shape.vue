<template>
  <div class="shape" @mousedown.stop="handleMouseDownOnShape" @click="currComp = element">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useCanvasStore } from '@/store/canvas'
import type { component } from '@/types'

const { currComp } = storeToRefs(useCanvasStore())

const props = defineProps<{element: component}>()

const handleMouseDownOnShape = (e: MouseEvent) => {
  currComp.value = props.element
  const comp = currComp.value
  const startY = e.clientY
  const startX = e.clientX
  const startTop = comp.style.top
  const startLeft = comp.style.left

  const move = (e: MouseEvent) => {
    const currY = e.clientY
    const currX = e.clientX
    comp.style.top = currY - startY + startTop
    comp.style.left = currX - startX + startLeft
  }

  const up = () => {
    document.removeEventListener('mousemove', move)
    document.removeEventListener('mouseup', up)
  }

  useEventListener(document, 'mousemove', move)
  useEventListener(document, 'mouseup', up)
}
</script>
