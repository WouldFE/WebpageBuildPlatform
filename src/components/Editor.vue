<template>
  <!-- todo event name -->
  <div
    :class="isEdit && 'bg-#fc6'"
    class="editor"
    :style="{width: `${config.width}px`, height: `${config.height}px`}"
    @contextmenu.prevent="handleContextMenu"
  >
    <div v-for="item in componentData" :key="item.id">
      <component
        :is="item.component"
        v-if="item.component === 'CText'"
        :props="item.propValue"
        :style="{ position: 'absolute',...item.style}"
      />
      <component :is="item.component" v-else :props="item.propValue" :style="{ position: 'absolute', ...item.style}" />
    </div>
  </div>
</template>

<script setup lang="ts">
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
