<script lang="ts" setup>
import Shape from '@/components/Shape.vue'
import { useCanvasStore } from '@/store/canvas'

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

</script>

<template>
  <!-- todo event name -->
  <div
    relative
    overflow-hidden
    :style="style"
  >
    <Shape v-for="item in componentData" :key="item.id" :element="item">
      <component :is="item.component" :props="item.propValue" :style="{ position: 'absolute', ...item.style}" />
    </Shape>
  </div>
</template>
