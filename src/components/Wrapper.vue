<template>
  <div :id="`${element.component}${element.id}`">
    <component
      :is="element.component"
      :cstyle="element.style"
      :props="element.propValue"
      :style="{position: 'absolute', ...getComponentStyle(element.style)}"
    />
  </div>
</template>

<script setup lang="ts">
import type { compStyle, component } from '@/types'
const props = defineProps<{element: component}>()

const getComponentStyle = (style: compStyle) => {
  const result: {[key: string]: string} = {}
  Object.keys(style).forEach((value) => {
    if (!isNaN(Number(style[value]))) result[value] = `${style[value]}px`
    else result[value] = style[value] as string
  })
  return result
}

Object.keys(props.element.events as {}).forEach((value) => {
  const event = (props.element.events as any)[value]
  useEventListener(document.getElementById(`${props.element.component}${props.element.id}`), value, event.event(event.param))
}
)
</script>

<style scoped>

</style>
