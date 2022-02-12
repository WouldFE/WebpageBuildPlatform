<script setup lang="ts">
import { useCanvasStore } from '@/store/canvas'
import type { compStyle, prop } from '@/types'

type propsType = {
  props: {
    text: prop
  }
  mode: 'edit' | 'view'
  cstyle: compStyle
}

const { mode } = storeToRefs(useCanvasStore())
const props = defineProps<propsType>()

const text = computed({
  get: () => {
    return props.props.text.value
  },
  set: (val) => {
    props.props.text.value = val
  }
})

const getComponentStyle = (style: compStyle) => {
  const result: {[key: string]: string} = {}
  Object.keys(style).forEach((value) => {
    if (!isNaN(Number(style[value])) && value !== 'fontWeight') result[value] = `${style[value]}px`
    else result[value] = style[value] as string
  })
  return result
}
</script>

<template>
  <ElInput
    v-if="props.mode === 'edit'"
    v-model="text"
    overflow-hidden
    resize="none"
    type="textarea"
    :input-style="{backgroundColor: 'rgba(0,0,0,0)', border: 'none', padding: 0, borderRadius: '0', ...getComponentStyle(props.cstyle)}"
  />
  <div v-else :style="getComponentStyle(props.cstyle)">
    <div v-for="(t, index) in props.props.text.value.split('\n')" :key="index" :style="{...getComponentStyle(props.cstyle), height: `${props.cstyle.lineHeight}px`}">
      {{ t }}
    </div>
  </div>
</template>
