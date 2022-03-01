<script lang="ts" setup>
import Contextmenu from '@/components/Contextmenu.vue'
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
  <div
    class="relative overflow-hidden"
    :style="style"
    @contextmenu.prevent.stop
  >
    <Shape
      v-for="(item, index) in componentData"
      :key="item.id"
      :element="item"
      :index="index"
    />
    <Contextmenu />
  </div>
</template>
