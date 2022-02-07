<script setup lang="ts">
import { useCanvasStore } from '@/store/canvas'

type propsType = {
  props: {
    text: string
  }
}

const { mode } = storeToRefs(useCanvasStore())
defineProps<propsType>()
</script>

<template>
  <!--  Fixme v-model error -->
  <ElInput v-if="mode === 'edit'" v-model:value="props.text" resize="none" type="textarea" :input-style="{backgroundColor: 'rgba(0,0,0,0)', border: 'none'}" />
  <div v-for="(val, index) in props.text.split('\n')" v-else :key="index">
    {{ val }}
  </div>
</template>
