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
const canvasStore = useCanvasStore()
const operation = (id: menuID) => {
  if (id === menuID.clear) {
    canvasStore.$patch({
      data: [],
      currComp: undefined,
      currCompIndex: -1,
      contextmenu: { show: false }
    })
  } else if (id === menuID.save) {
    // Todo: save
    ElMessage.success('保存成功！')
  } else if (id === menuID.setting) {
    settingModal.value = true
  }
}
</script>

<template>
  <div border="~ transparent b-#ccc">
    <div flex justify-between items-center px-6 py-2>
      <div>
        <el-button v-for="menuItem in menuList" :key="menuItem.id" mr-5 @click="operation(menuItem.id)">
          {{ menuItem.name }}
        </el-button>
      </div>
      <div>
        <a
          title="项目地址"
          cursor-pointer
          text-black-500
          class="hover:text-[#409EFF]"
          href="https://github.com/WouldFe/client"
          target="_blank"
        >
          <span class="iconify text-xl" data-icon="carbon:logo-github" />
        </a>
      </div>
    </div>
  </div>
  <el-dialog v-model="settingModal" :modal="false" width="30%">
    <template #title>
      <div>画布设置</div>
    </template>
    <template #default>
      <el-form label-position="top" label-width="120px">
        <el-form-item label="画布尺寸">
          <div w-full inline-flex justify-between>
            <el-input v-model="config.width" class="w-45%" placeholder="宽度" />
            <span>&times;</span>
            <el-input v-model="config.height" class="w-45%" placeholder="高度" />
          </div>
        </el-form-item>
        <el-form-item label="画布背景色">
          <div w-full inline-flex justify-between>
            <el-input v-model="config.bgColor" class="w-45%" />
            <el-color-picker v-model="config.bgColor" />
            <div class="w-45%" />
          </div>
        </el-form-item>
      </el-form>
    </template>
  </el-dialog>
</template>
