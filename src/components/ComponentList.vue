<script lang="ts" setup>
import { componentList } from '@/config'

const handleDragStart = (e: DragEvent) => {
  e.dataTransfer?.setData('index', (e.target as any).dataset.index)
}
</script>

<template>
  <div
    flex
    flex-wrap
    justify-around
    p-10px
    @dragstart="handleDragStart"
  >
    <ElCard
      v-for="(item, index) in componentList"
      :key="index"
      :body-style="{ display: 'flex', flexDirection: 'column', alignItems: 'center'}"
      :data-index="index"
      :draggable="true"
      class="w-45% text-center"
    >
      <span class="iconify text-xl" :data-icon="`carbon:${item.icon}`" />
      <span>{{ item.label }}</span>
    </ElCard>
  </div>
</template>
