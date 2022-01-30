<template>
  <div
    :class="isEdit && 'bg-#fc6'"
    :style="{width: `${config.width}px`, height: `${config.height}px`}"
    @contextmenu.prevent="handleContextMenu"
  >
    <component :is="item.component" v-for="item in componentData" :key="item.id" :props="item.propValue" />
  </div>
</template>

<script setup lang="ts">
import { useCanvasStore } from '@/store/canvas'

withDefaults(defineProps<{
  isEdit?: Boolean
}>(), { isEdit: true })

const { config, data: componentData } = storeToRefs(useCanvasStore())

const handleContextMenu = (e: DragEvent) => {
  e.stopPropagation()
}
</script>
