<script lang="ts" setup>
import Contextmenu from '@/components/Contextmenu.vue'
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
  <div
    class="relative overflow-hidden"
    :style="style"
    @contextmenu.prevent.stop
  >
    <Shape
      v-for="(item, index) in componentData"
      :key="item.id"
      :is-layout="false"
      :element="item"
      h-0
      :index="index"
    >
      <component
        :is="item.component"
        :cstyle="item.style"
        :props="item.propValue"
        :style="{position: 'absolute' , ...getComponentStyle(item.style)}"
      />
    </Shape>
    <Contextmenu />
  </div>
</template>
