<template>
  <div v-show="contextmenu.show" :style="{zIndex: '10000', position: 'absolute', top: `${contextmenu.top}px`, left: `${contextmenu.left}px`}" @blur="handleBlur">
    <ul>
      <li @click="upComp">
        上移
      </li>
      <li @click="downComp">
        下移
      </li>
      <li @click="topComp">
        置顶
      </li>
      <li @click="botComp">
        置底
      </li>
      <li @click="delComp">
        删除
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useCanvasStore } from '@/store/canvas'
import type { component } from '@/types'

const canvasStore = useCanvasStore()
const { contextmenu } = storeToRefs(canvasStore)

const swap = (arr: component[], i: number, j: number) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
const closeContextmenu = () => {
  contextmenu.value.show = false
}
const handleBlur = () => {
  closeContextmenu()
}
const upComp = () => {
  canvasStore.$patch((state) => {
    if (state.currCompIndex < state.data.length - 1)
      swap(state.data, state.currCompIndex, state.currCompIndex + 1)
  })
  closeContextmenu()
}
const downComp = () => {
  canvasStore.$patch((state) => {
    if (state.currCompIndex > 0)
      swap(state.data, state.currCompIndex, state.currCompIndex - 1)
  })
  closeContextmenu()
}
const topComp = () => {
  canvasStore.$patch((state) => {
    if (state.currCompIndex < state.data.length - 1)
      swap(state.data, state.currCompIndex, state.data.length - 1)
  })
  closeContextmenu()
}
const botComp = () => {
  canvasStore.$patch((state) => {
    if (state.currCompIndex > 0)
      swap(state.data, state.currCompIndex, 0)
  })
  closeContextmenu()
}
const delComp = () => {
  canvasStore.$patch((state) => {
    state.data.splice(state.currCompIndex, 1)
  })
  closeContextmenu()
}
</script>

<style scoped>

</style>
