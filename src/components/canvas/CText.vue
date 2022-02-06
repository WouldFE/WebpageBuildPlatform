<script setup lang="ts">
import { useCanvasStore } from '@/store/canvas'

type propsType = {
  text: string
}

const { mode } = storeToRefs(useCanvasStore())
defineProps<propsType>()
</script>

<template>
  <!--  Fixme v-model error -->
  <ElInput v-if="mode === 'edit'" v-model:value="text" resize="none" type="textarea" :input-style="{backgroundColor: 'rgba(0,0,0,0)', border: 'none'}" />
  <div v-else>
    <div v-for="(val, index) in text.split('\n')" :key="index">
      {{ val }}
    </div>
  </div>
</template>
