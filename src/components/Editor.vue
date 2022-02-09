<script lang="ts" setup>
import Shape from '@/components/Shape.vue'
import { useCanvasStore } from '@/store/canvas'
import type { compStyle } from '@/types'

withDefaults(defineProps<{
  isEdit?: boolean
}>(), { isEdit: true })

const {
  config,
  data: componentData,
  currComp
} = storeToRefs(useCanvasStore())

const style = computed(() => ({
  width: `${config.value.width}px`,
  height: `${config.value.height}px`,
  backgroundColor: `${config.value.bgColor}`
}))

const getComponentStyle = (style: compStyle) => {
  const result: {[key: string]: string} = {}
  Object.keys(style).forEach((value) => {
    if (!isNaN(Number(style[value]))) result[value] = `${style[value]}px`
    else result[value] = style[value] as string
  })
  return result
}
</script>

<template>
  <!-- todo event name -->
  <div
    relative
    overflow-hidden
    :style="style"
  >
    <Shape v-for="item in componentData" :key="item.id" :element="item" h-0>
      <component :is="item.component" :cstyle="item.style" :props="item.propValue" :style="{position: 'absolute' , ...getComponentStyle(item.style)}" />
    </Shape>
  </div>
</template>
