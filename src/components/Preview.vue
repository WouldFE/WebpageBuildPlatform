<template>
  <el-dialog :model-value="show" :fullscreen="true" :center="true" @close="mode = 'edit'">
    <template #title>
      <el-button @click="showCode">
        显示代码
      </el-button>
    </template>
    <div id="canvas-preview" class="flex justify-center">
      <div :style="{ position: 'relative', ...style}">
        <Wrapper
          v-for="(item, index) in data"
          :key="index"
          :element="item"
        />
      </div>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { ElMessageBox } from 'element-plus'
import Wrapper from '@/components/Wrapper.vue'
import { useCanvasStore } from '@/store/canvas'

defineProps<{show: boolean}>()

const { data, config, mode } = storeToRefs(useCanvasStore())

const style = computed(() => ({
  width: `${config.value.width}px`,
  height: `${config.value.height}px`,
  backgroundColor: `${config.value.bgColor}`
}))

const showCode = () => {
  const canvas = document.getElementById('canvas-preview')
  ElMessageBox({
    message: canvas?.innerHTML
  })
}
</script>

<style scoped>

</style>
