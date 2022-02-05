<template>
  <!--  Fixme v-model error -->
  <ElInput v-if="mode === 'edit'" v-model="props.text" resize="none" type="textarea" :input-style="{backgroundColor: 'rgba(0,0,0,0)', border: 'none'}" />
  <div v-else>
    <div v-for="(text, index) in props.text.split('\n')" :key="index">
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCanvasStore } from '@/store/canvas'

const { mode } = storeToRefs(useCanvasStore())
type propsType = {
  text: string
}
defineProps<{ props: propsType }>()
</script>

<style scoped>

</style>
