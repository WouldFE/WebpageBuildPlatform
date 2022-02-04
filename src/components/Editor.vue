<template>
  <!-- todo event name -->
  <div
    :class="isEdit"
    :style="{width: `${config.width}px`, height: `${config.height}px`, backgroundColor: `${config.bgColor}`}"
    class="editor"
    @contextmenu.prevent="handleContextMenu"
  >
    <div v-for="item in componentData" :key="item.id">
      <component :is="item.component" :props="item.propValue" :style="{ position: 'absolute', ...item.style}" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCanvasStore } from '@/store/canvas'

withDefaults(defineProps<{
  isEdit?: boolean
}>(), { isEdit: true })

const {
  config,
  data: componentData
} = storeToRefs(useCanvasStore())

const handleContextMenu = (e: DragEvent) => {
  e.stopPropagation()
}

</script>

<style scoped>
.editor {
  position: relative;
  overflow: hidden;
}

</style>
