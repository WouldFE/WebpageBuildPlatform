<template>
  <el-button @click="goBack">
    返回编辑
  </el-button>
  <div id="canvas-preview" class="flex justify-center">
    <div :style="{ position: 'relative', ...style}">
      <Wrapper
        v-for="(item, index) in data"
        :key="index"
        :element="item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Wrapper from '@/components/Wrapper.vue'
import { useCanvasStore } from '@/store/canvas'

const { data, config, mode } = storeToRefs(useCanvasStore())
const router = useRouter()

const style = computed(() => ({
  width: `${config.value.width}px`,
  height: `${config.value.height}px`,
  backgroundColor: `${config.value.bgColor}`
}))
const goBack = () => router.back()

</script>

<style scoped>

</style>
