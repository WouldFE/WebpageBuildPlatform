<template>
  <div class="component-list" @dragstart="handleDragStart">
    <ElCard
      v-for="(item, index) in componentList"
      :key="index"
      draggable="true"
      :data-index="index"
      class="component-item"
    >
      <span>{{ item.label }}</span>
    </ElCard>
  </div>
</template>

<script setup lang="ts">
import componentList from '@/components/canvas-component/canvas-component-list'

const handleDragStart = (e: DragEvent) => {
  (e as any).dataTransfer.setData('index', (e as any).target.dataset.index)
}
</script>

<style scoped lang="scss">
.component-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  .component-item {
    width: 45%;
    text-align: center;
  }
}
</style>
