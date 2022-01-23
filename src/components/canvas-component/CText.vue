<template>
  <ElInput resize="none" type="textarea" :value="text" />
</template>

<script setup lang="ts">
defineProps({
  text: String
})
</script>

<style scoped>

</style>
