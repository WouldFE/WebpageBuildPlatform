<template>
  <ElInput resize="none" type="textarea" :value="props.text" />
</template>

<script setup lang="ts">
// type propsType = {
//   text: string
// }
// defineProps<{props: propsType}>()
</script>

<script lang="ts">
import type { PropType } from 'vue'

type propsType = {
  text: string
}

export default {
  props: {
    props: {
      type: Object as PropType<propsType>
    }
  }
}

</script>

<style scoped>

</style>
