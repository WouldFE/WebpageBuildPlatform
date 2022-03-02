<template>
  <div>
    <component
      :is="element.component"
      :elem="element"
      :mode="'view'"
      :style="{position: 'absolute', ...getComponentStyle(element.style)}"
    />
  </div>
</template>

<script setup lang="ts">
import type { commonStyle, component } from '@/types'
defineProps<{ element: component }>()
const getComponentStyle = (style: commonStyle) => {
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
