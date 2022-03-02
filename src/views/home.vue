<script lang="ts" setup>
import AttrBar from '@/components/AttrBar.vue'
import Toolbar from '@/components/Toolbar.vue'
import ComponentList from '@/components/ComponentList.vue'
import Editor from '@/components/Editor.vue'
import { generateComp } from '@/config'
import { useCanvasStore } from '@/store/canvas'

const canvasStore = useCanvasStore()
const { mode, currComp } = storeToRefs(canvasStore)

// @todo: drag & drop 需要重构 使用 @vueuse/gesture

function handleDrop(e: DragEvent) {
  const idx = Number(e.dataTransfer?.getData('index'))
  if (idx < 0) return
  const component = generateComp(idx)
  component.style = {
    ...component.style,
    top: e.offsetY,
    left: e.offsetX
  }
  canvasStore.addComponent(component)
}

const containerStyle = computed(() => ({
  height: `${document.documentElement.clientHeight - 50}px`
}))

const handleClick = () => {
  canvasStore.$patch({
    contextmenu: { show: false },
    currComp: undefined,
    currCompIndex: -1
  })
}

onMounted(() => {
  mode.value = 'edit'
})

</script>

<template>
  <el-container>
    <el-header class="!h-fit !p-0">
      <Toolbar />
    </el-header>
    <el-container :style="containerStyle">
      <el-aside>
        <ComponentList />
      </el-aside>
      <el-main overflow-hidden>
        <Editor @drop.stop.prevent="handleDrop" @dragover.prevent="" @click.prevent.stop="handleClick" />
      </el-main>
      <el-aside v-if="currComp !== undefined">
        <AttrBar />
      </el-aside>
    </el-container>
  </el-container>
</template>
