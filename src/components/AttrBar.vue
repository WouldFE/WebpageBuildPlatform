<script lang="ts" setup>
import { useCanvasStore } from '@/store/canvas'

const show = ref(true)
const { currComp } = storeToRefs(useCanvasStore())
const keydownEsc = new Event('escDown', { bubbles: false })

useEventListener(document, 'escDown', () => currComp.value = undefined)
useEventListener(document, 'keydown', (e) => {
  e.stopPropagation()
  if (e.key === 'Escape') document.dispatchEvent(keydownEsc)
})
</script>

<template>
  <div class="root">
    <div class="close-icon" @click="currComp = undefined">
      <svg class="icon" height="30" viewBox="0 0 1024 1024" width="30" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M764.288 214.592L512 466.88 259.712 214.592a31.936 31.936 0 00-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1045.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0045.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 10-45.12-45.184z"
          fill="currentColor"
        />
      </svg>
    </div>
    <el-card class="h-full rounded-0 b-t-0" header="组件属性" shadow="never">
      <div> {{ currComp.propValue }}</div>
      <div> {{ currComp.style }}</div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>

.root {
  position: relative;

  .close-icon {
    position: absolute;
    right: 5%;
    top: 6%;
    cursor: pointer;
  }
}
</style>
