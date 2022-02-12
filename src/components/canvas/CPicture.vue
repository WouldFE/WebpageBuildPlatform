<template>
  <div v-if="mode === 'edit'">
    <el-image
      :src="props.props.src.value"
      :fit="props.props.fit.value"
      :draggable="false"
      :style="{width: `${props.cstyle.width}px`, height: `${props.cstyle.height}px`}"
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
    <div v-if="props.props.preview.value === 'true'">
      <el-image
        :src="props.props.src.value"
        :fit="props.props.fit.value"
        :draggable="false"
        :style="{width: `${props.cstyle.width}px`, height: `${props.cstyle.height}px`}"
        :preview-src-list="[props.props.src.value]"
      />
    </div>
    <div v-else>
      <el-image
        :src="props.props.src.value"
        :fit="props.props.fit.value"
        :style="{width: `${props.cstyle.width}px`, height: `${props.cstyle.height}px`}"
        :draggable="false"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElMessageBox } from 'element-plus'
import { useCanvasStore } from '@/store/canvas'
import type { compStyle, prop } from '@/types'

type propsType = {
  props: {
    src: prop
    preview: prop
    fit: prop
  }
  cstyle: compStyle
}
const props = defineProps<propsType>()

const { mode } = storeToRefs(useCanvasStore())

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
