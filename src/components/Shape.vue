<template>
  <div @mousedown="handleMouseDownOnShape" @click="currComp = element">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useCanvasStore } from '@/store/canvas'
import type { component } from '@/types'

const { currComp } = storeToRefs(useCanvasStore())

defineProps<{element: component}>()

const handleMouseDownOnShape = (e: MouseEvent) => {
  console.log(e)
}
</script>

<style scoped>

</style>
