<script lang="ts" setup>
import SideBar from '@/components/SideBar.vue'
import { generateComp } from '@/config'
import { useCanvasStore } from '@/store/canvas'

const canvasStore = useCanvasStore()

function handleDrop(e: DragEvent) {
  const component = generateComp(Number(e.dataTransfer?.getData('index')))
  component.style = { ...component.style, top: `${e.offsetY}px`, left: `${e.offsetX}px` }
  canvasStore.addComponent(component)
}

function handleDragOver(e: DragEvent) {
  (e as any).dataTransfer.dropEffect = 'copy'
}
</script>

<template>
  <el-container class="root">
    <el-header class="!h-fit !p-0">
      <Toolbar />
    </el-header>
    <el-container>
      <el-aside width="200px">
        <ComponentList />
      </el-aside>
      <el-main overflow-hidden @drop.stop.prevent="handleDrop" @dragover.prevent="handleDragOver">
        <Editor :is-edit="true" />
      </el-main>
      <el-aside width="350px" style="background-color: #6cf;">
        <SideBar />
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
