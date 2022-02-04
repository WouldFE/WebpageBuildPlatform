<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import { useCanvasStore } from '@/store/canvas'

enum menuID {
  save,
  clear,
  setting
}

const menuList = [
  {
    id: menuID.save,
    name: '保存'
  },
  {
    id: menuID.clear,
    name: '清空画布'
  },
  {
    id: menuID.setting,
    name: '画布设置'
  }
]
const settingModal = ref(false)
const { config, data } = storeToRefs(useCanvasStore())
const operation = (id: menuID) => {
  if (id === menuID.clear) {
    data.value = []
  } else if (id === menuID.save) {
    // Todo: save
    ElMessage({
      type: 'success',
      message: '保存成功！'
    })
  } else if (id === menuID.setting) {
    settingModal.value = true
  }
}
</script>

<template>
  <div border="~ transparent b-#ccc">
    <div flex items-center px-6 py-2>
      <el-button v-for="menuItem in menuList" :key="menuItem.id" mr-5 @click="operation(menuItem.id)">
        {{ menuItem.name }}
      </el-button>
      <el-dialog v-model="settingModal" :modal="false" width="30%">
        <template #title>
          <div>画布设置</div>
        </template>
        <template #default>
          <el-form label-position="top" label-width="120px">
            <el-form-item label="画布尺寸">
              <div class="s-container">
                <el-input v-model="config.width" class="setting-item" placeholder="宽度" />
                <span>&times;</span>
                <el-input v-model="config.height" class="setting-item" placeholder="高度" />
              </div>
            </el-form-item>
            <el-form-item label="画布背景色">
              <div class="s-container">
                <el-input v-model="config.bgColor" class="setting-item" />
                <el-color-picker v-model="config.bgColor" />
                <div class="setting-item" />
              </div>
            </el-form-item>
          </el-form>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<style scoped>
.s-container {
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
}

.setting-item {
  width: 45%;
}
</style>
