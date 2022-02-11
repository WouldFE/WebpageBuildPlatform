<template>
  <component
    :is="element.component"
    :cstyle="element.style"
    :props="element.propValue"
    :style="{position: 'absolute', ...getComponentStyle(element.style)}"
  />
</template>

<script setup lang="ts">
import type { compStyle, component } from '@/types'
defineProps<{element: component}>()

const getComponentStyle = (style: compStyle) => {
  const result: {[key: string]: string} = {}
  Object.keys(style).forEach((value) => {
    if (!isNaN(Number(style[value]))) result[value] = `${style[value]}px`
    else result[value] = style[value] as string
  })
  return result
}
</script>

<style scoped>

</style>
