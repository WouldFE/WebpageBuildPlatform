<script lang="ts" setup>
import AttrBar from '@/components/AttrBar.vue'
import { generateComp } from '@/config'
import { useCanvasStore } from '@/store/canvas'

const canvasStore = useCanvasStore()
const { mode, currComp } = storeToRefs(canvasStore)

function handleDrop(e: DragEvent) {
  const component = generateComp(Number(e.dataTransfer?.getData('index')))
  component.style = {
    ...component.style,
    top: e.offsetY,
    left: e.offsetX
  }
  canvasStore.addComponent(component)
}

function handleDragOver(e: DragEvent) {
  (e as any).dataTransfer.dropEffect = 'copy'
}

const containerStyle = computed(() => ({
  height: `${document.documentElement.clientHeight - 50}px`
}))

</script>

<template>
  <el-container class="root">
    <el-header class="!h-fit !p-0">
      <Toolbar />
    </el-header>
    <el-container :style="containerStyle">
      <el-aside width="200px">
        <ComponentList />
      </el-aside>
      <el-main overflow-hidden>
        <Editor @drop.stop.prevent="handleDrop" @dragover.prevent="handleDragOver" />
      </el-main>
      <el-aside v-if="currComp !== undefined">
        <AttrBar />
      </el-aside>
    </el-container>
  </el-container>
</template>

<style scoped>
.root * {
  padding: 0;
  margin: 0;
}
</style>
