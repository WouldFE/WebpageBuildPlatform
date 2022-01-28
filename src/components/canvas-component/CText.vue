<template>
  <ElInput resize="none" type="textarea" :value="props.text" />
</template>

<script setup lang="ts">
type propsType = {
  text: string
  number?: number
}

const props = withDefaults(defineProps<propsType>(), {
  text: 'xxx'
})
</script>

<style scoped>

</style>
