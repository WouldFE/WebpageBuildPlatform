<script setup lang="ts">
const menuList = [
  { id: 'save', name: '保存' },
  { id: 'clear', name: '清空画布' },
  { id: 'setting', name: '画布设置' }
]

const operation = (id: string) => {
  // console.log(id)
}
</script>

<template>
  <div border="~ transparent b-#ccc">
    <div flex items-center px-6 py-2>
      <el-button v-for="menuItem in menuList" :key="menuItem.id" mr-5 @click="operation(menuItem.id)">
        {{ menuItem.name }}
      </el-button>
    </div>
  </div>
</template>
