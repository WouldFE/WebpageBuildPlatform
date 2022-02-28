<template>
  <div v-if="mode === 'edit'">
    <el-image
      :src="elem.propValue.src.value"
      :fit="elem.propValue.fit.value"
      :draggable="false"
      :style="{width: `${elem.style.width}px`, height: `${elem.style.height}px`}"
      @error="imgerr"
    >
      <template #placeholder>
        <div class="image-slot">
          Loading<span class="dot">...</span>
        </div>
      </template>
    </el-image>
  </div>
  <div v-else>
    <el-image
      :src="elem.propValue.src.value"
      :fit="elem.propValue.fit.value"
      :draggable="false"
      :style="{width: `${elem.style.width}px`, height: `${elem.style.height}px`}"
      :preview-src-list="elem.propValue.preview.value === 'true' ? [elem.propValue.src.value] : []"
    />
  </div>
</template>

<script setup lang="ts">
import { ElMessageBox } from 'element-plus'
import type { CPicture } from '@/types'

defineProps<{
  elem: CPicture
  mode: 'edit' | 'view'
}>()

const imgerr = () => {
  ElMessageBox({
    message: '请检查图片地址！'
  })
}
</script>

<style scoped>
.image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #f5f7fa;
  color: var(--el-text-color-secondary);
  font-size: 14px;
}

.dot {
  animation: dot 2s infinite steps(3, start);
  overflow: hidden;
}
</style>
