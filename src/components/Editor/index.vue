<template>
  <div
    id="editor"
    class="editor"
    :class="{edit: isEdit}"
    :style="canvasStyle"
    @contextmenu.prevent="handleContextMenu"
  >
    <CanvasComponent v-for="item in componentData" :key="item.id">
      <component :is="item.component" :props="item.propValue" />
    </CanvasComponent>
  </div>
</template>

<script setup lang="ts">
import { useCanvasStore } from '@/store/canvas'
import CanvasComponent from './CanvasComponent.vue'

const { canvasSetting, componentData } = storeToRefs(useCanvasStore())

const canvasStyle = {
  width: `${canvasSetting.value.width}px`,
  height: `${canvasSetting.value.height}px`
}

defineProps({
  isEdit: {
    type: Boolean,
    default: true
  }
})

const handleContextMenu = (e: DragEvent) => {
  e.stopPropagation()
}
</script>

<style scoped>
.editor {
  background-color: #fc6;
}
</style>
