<script setup lang="ts">
import { useCanvasStore } from '@/store/canvas'
import type { prop } from '@/types'

type propsType = {
  props: {
    text: prop
  }
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
</script>

<template>
  <ElInput
    v-if="mode === 'edit'"
    v-model="text"
    overflow-hidden
    resize="none"
    type="textarea"
    :input-style="{backgroundColor: 'rgba(0,0,0,0)', border: 'none'}"
  />
  <div v-for="(val, index) in props.text.split('\n')" v-else :key="index">
    {{ val }}
  </div>
</template>
