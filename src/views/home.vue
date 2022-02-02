<script lang="ts" setup>
import { generateId } from 'element-plus/lib/utils/util'
import ToolBar from '@/components/Toolbar.vue'
import Editor from '@/components/Editor/index.vue'
import ComponentList from '@/components/ComponentList.vue'
import CanvasComponentList from '@/components/canvas-component/canvas-component-list'
import { useCanvasStore } from '@/store/canvas'
import type { component } from '@/types'

const canvasStore = useCanvasStore()

function handleDrop(e: DragEvent) {
  e.preventDefault()
  e.stopPropagation()
  const component = {} as component
  // @Todo: deep copy
  Object.assign(component, CanvasComponentList[Number(e.dataTransfer?.getData('index'))])
  component.style = { ...component.style, top: e.offsetY, left: e.offsetX }
  component.id = generateId()
  // @Todo: store.$patch
  canvasStore.addComponent(component)
}

function handleDragOver(e: DragEvent) {
  e.preventDefault()
}
</script>

<template>
  <el-container class="root">
    <el-header class="header">
      <ToolBar />
    </el-header>
    <el-container class="asideMain">
      <el-aside width="200px">
        <ComponentList />
      </el-aside>
      <el-main class="main" @drop="handleDrop" @dragover="handleDragOver">
        <Editor is-edit />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.root *{
  padding: 0;
  margin: 0;
}

.asideMain {
  margin-top: 4px;
}

.main {
  overflow: hidden;
}

.header {
  height: 40px;
  border-bottom: #ccc 1px solid;
}

</style>
