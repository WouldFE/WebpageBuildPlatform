<script setup lang="ts">
import { useCanvasStore } from '@/store/canvas'
import type { compStyle, prop } from '@/types'

type propsType = {
  props: {
    text: prop
  }
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
    v-model="text"
    overflow-hidden
    resize="none"
    type="textarea"
    :input-style="{backgroundColor: 'rgba(0,0,0,0)', border: 'none', borderRadius: '0', ...getComponentStyle(props.cstyle)}"
  />
</template>
