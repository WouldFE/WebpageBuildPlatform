<script lang="ts" setup>
import { useCanvasStore } from '@/store/canvas'
import EventsManage from './EventsManage.vue'

const { currComp } = storeToRefs(useCanvasStore())
const keydownEsc = new Event('escDown', { bubbles: false })

useEventListener(document, 'escDown', () => currComp.value = undefined)
useEventListener(document, 'keydown', (e) => {
  e.stopPropagation()
  if (e.key === 'Escape') document.dispatchEvent(keydownEsc)
})

const styleKeys = computed(() => {
  return currComp.value ? Object.keys(currComp.value.style) : []
})

const map = {
  left: 'x 坐标',
  top: 'y 坐标',
  height: '高',
  width: '宽',
  color: '颜色',
  backgroundColor: '背景色',
  fontSize: '字体大小',
  fontWeight: '字体粗细',
  lineHeight: '行高',
  letterSpacing: '字间距',
  textAlign: '对齐方式'
}

const typeOptions = ['primary', 'success', 'warning', 'danger', 'info', 'text']
const sizeOptions = ['large', 'default', 'small']
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
    <el-card class="h-full rounded-0 b-t-0" header="组件设置" shadow="never">
      <section>
        <h5>组件属性</h5>
        <el-form label-position="top" @submit.prevent.stop>
          <div v-for="(val, key, index) in currComp.propValue" :key="index">
            <!--   @todo: 需要重构 每个单独写个组件 defineComponent() 然后使用 map 映射      -->
            <el-form-item v-if="key === 'subComp'" class="hidden" />
            <el-form-item v-else-if="key === 'preview'" :label="val.display">
              <el-radio v-model="val.value" label="true">
                是
              </el-radio>
              <el-radio v-model="val.value" label="false">
                否
              </el-radio>
            </el-form-item>
            <el-form-item v-else-if="key === 'fit'" :label="val.display">
              <el-select v-model="val.value" class="w-full">
                <el-option label="fill" value="fill" />
                <el-option label="contain" value="contain" />
                <el-option label="cover" value="cover" />
                <el-option label="none" value="none" />
                <el-option label="scale-down" value="scale-down" />
              </el-select>
            </el-form-item>
            <el-form-item v-else-if="key === 'type'" :label="val.display">
              <el-select v-model="val.value" class="w-full">
                <el-option v-for="(op, i) in typeOptions" :key="i" :label="op" :value="op" />
              </el-select>
            </el-form-item>
            <el-form-item v-else-if="key === 'size'" :label="val.display">
              <el-select v-model="val.value" class="w-full">
                <el-option v-for="(op, i) in sizeOptions" :key="i" :label="op" :value="op" />
              </el-select>
            </el-form-item>
            <el-form-item v-else :label="val.display">
              <el-input v-model="val.value" :type="key === 'text' ? 'textarea': ''" />
            </el-form-item>
          </div>
        </el-form>
      </section>
      <el-divider />
      <section>
        <h5>组件样式</h5>
        <el-form label-position="top" @submit.prevent.stop>
          <div v-for="(key, index) in styleKeys" :key="index">
            <el-form-item v-if="key === 'textAlign'" :label="map[key]">
              <el-select v-model="currComp.style[key]" class="w-full">
                <el-option label="居左对齐" value="left" />
                <el-option label="居中对齐" value="center" />
                <el-option label="居右对齐" value="right" />
              </el-select>
            </el-form-item>
            <el-form-item v-else-if="key === 'color' || key === 'backgroundColor'" :label="map[key]">
              <div w-full inline-flex justify-between>
                <el-input v-model="currComp.style[key]" class="w-80%" />
                <el-color-picker v-model="currComp.style[key]" show-alpha="show-alpha" />
              </div>
            </el-form-item>
            <el-form-item v-else :label="map[key]">
              <el-input v-model="currComp.style[key]" />
            </el-form-item>
          </div>
        </el-form>
      </section>
      <el-divider />
      <section v-if="currComp.events !== undefined">
        <h5>事件管理</h5>
        <EventsManage />
      </section>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>

.root {
  position: relative;

  .close-icon {
    position: absolute;
    right: 5%;
    top: 14px;
    cursor: pointer;
  }
}
section h5 {
  margin-bottom: 4px;
}
</style>
