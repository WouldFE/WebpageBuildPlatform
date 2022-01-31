<script lang="ts" setup>
import { componentList, generateComp } from '@/config'
import { useCanvasStore } from '@/store/canvas'

const canvasStore = useCanvasStore()

function handleDrop(e: DragEvent) {
  const component = generateComp(Number(e.dataTransfer?.getData('index')))
  component.style = { ...component.style, top: e.offsetY, left: e.offsetX }
  canvasStore.addComponent(component)
}

function handleDragOver(e: DragEvent) {
  e.preventDefault();
  (e as any).dataTransfer.dropEffect = 'copy'
}
</script>

<template>
  <el-container>
    <el-header class="!h-fit !p-0">
      <Toolbar />
    </el-header>
    <el-container mt-4px>
      <el-aside width="200px">
        <ComponentList />
      </el-aside>
      <el-main overflow-hidden @drop.stop.prevent="handleDrop" @dragover="handleDragOver">
        <Editor :is-edit="true" />
      </el-main>
    </el-container>
  </el-container>
</template>
