<template>
  <div
    class="flex justify-center align-center"
    :style="{width: `${props.cstyle.width}px`, height: `${props.cstyle.height}px` , backgroundColor: `${props.cstyle.backgroundColor}`, color: `${props.cstyle.color}`}"
  >
    <el-button :type="props.props.type.value" :size="props.props.size.value">
      {{ props.props.msg.value }}
    </el-button>
  </div>
</template>

<script setup lang="ts">
import type { compStyle, prop } from '@/types'

type propsType = {
  props: {
    type: prop
    msg: prop
    size: prop
  }
  cstyle: compStyle
}
const props = defineProps<propsType>()

</script>

<style scoped>

</style>
