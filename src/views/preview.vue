<template>
  <el-container>
    <el-header class="!h-fit !p-0">
      <div border="~ transparent b-#ccc" class=" px-6 py-2">
        <el-button @click="goBack">
          返回编辑
        </el-button>
      </div>
    </el-header>
    <el-main>
      <div id="canvas-preview" class="flex justify-center overflow-hidden">
        <div :style="{ position: 'relative', ...style}">
          <Wrapper
            v-for="(item, index) in data"
            :key="item.id"
            :element="item"
            :index="index"
          />
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import Wrapper from '@/components/canvas/Wrapper.vue'
import { useCanvasStore } from '@/store/canvas'

const { data, config, mode } = storeToRefs(useCanvasStore())
const router = useRouter()

const style = computed(() => ({
  width: `${config.value.width}px`,
  height: `${config.value.height}px`,
  backgroundColor: `${config.value.bgColor}`
}))
const goBack = () => router.back()

onMounted(() => {
  mode.value = 'view'
})

</script>

<style scoped>

</style>
