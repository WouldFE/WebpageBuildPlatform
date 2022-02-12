<template>
  <div @click="handleClick">
    <component
      :is="element.component"
      :cstyle="element.style"
      :props="element.propValue"
      :mode="'view'"
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

// Object.keys(props.element.events === undefined ? {} : props.element.events).forEach((value) => {
//   const event = (props.element.events as any)[value]
//   useEventListener(this, value, event.event(event.param))
// })

const handleClick = () => {
  const events
      = props.element.events === undefined
        ? {}
        : props.element.events
  events.click.event(events.click.param)
}

</script>

<style scoped>

</style>
