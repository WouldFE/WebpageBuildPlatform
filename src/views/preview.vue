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
import { usePreviewStore } from '@/store/preview'
import type { component } from '@/types'

const { config, mode } = storeToRefs(useCanvasStore())
const { previewData } = storeToRefs(usePreviewStore())

const data = ref<component[]>([])
const router = useRouter()
const route = useRoute()

const style = computed(() => ({
  width: `${config.value.width}px`,
  height: `${config.value.height}px`,
  backgroundColor: `${config.value.bgColor}`
}))
const goBack = () => router.back()

onMounted(() => {
  mode.value = 'view'
  data.value = previewData.value[typeof route.name === 'string' ? route.name : '']
})

onUpdated(() => {
  data.value = previewData.value[typeof route.name === 'string' ? route.name : '']
})

</script>

<style scoped>

</style>
