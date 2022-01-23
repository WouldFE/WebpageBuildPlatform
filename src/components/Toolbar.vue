<template>
  <div class="menuItemContainer">
    <div v-for="menuItem in menuItemList" :key="menuItem.id" class="menuItem">
      <ElButton @click="menuItem.operation">
        {{ menuItem.name }}
      </ElButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMenuStore } from '@/store/menu'
type menuItemListType = [{
  name: string
  operation: () => void
}]
const { menuItemList } = storeToRefs(useMenuStore())

</script>

<style scoped>
.menuItemContainer {
  height: 100%;
}

.menuItem {
  height: 100%;
  display: inline-block;
  padding: 4px 8px;
}
</style>
