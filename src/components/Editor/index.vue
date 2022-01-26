<template>
  <div
    id="editor"
    class="editor"
    :class="{edit: isEdit}"
    :style="canvasStyle"
    @contextmenu.prevent="handleContextMenu"
  >
    <CanvasComponent>
      <div v-for="{item} in componentData" :key="item.id">
        {{ item.id }}
      </div>
    </CanvasComponent>
  </div>
</template>

<script setup lang="ts">
import { useCanvasStore } from '@/store/canvas'
import CanvasComponent from './CanvasComponent.vue'

const canvasStore = storeToRefs(useCanvasStore())

const {
  canvasSetting,
  componentData
} = canvasStore

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
