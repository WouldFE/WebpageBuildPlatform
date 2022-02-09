<template>
  <div>
    <div />
  </div>
</template>

<script setup lang="ts">
import type { compStyle } from '@/types'

type propsType = {
  props: {
    col: number
    row: number
  }
  cstyle: compStyle
}

const props = defineProps<propsType>()
</script>

<style scoped>

</style>
