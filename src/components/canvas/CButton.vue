<template>
  <div
    class="flex justify-center align-center"
    :style="{width: `${elem.style.width}px`, height: `${elem.style.height}px` , backgroundColor: `${elem.style.backgroundColor}`, color: `${elem.style.color}`}"
  >
    <el-button :type="elem.propValue.type.value" :size="elem.propValue.size.value" @click="mode === 'view' ? elem.events['click'].event(elem.events.click.param) : () => {}">
      {{ elem.propValue.msg.value }}
    </el-button>
  </div>
</template>

<script setup lang="ts">
import type { CButton } from '@/types'

defineProps<{
  elem: CButton
  mode: 'edit' | 'view'
}>()

</script>

<style scoped>

</style>
