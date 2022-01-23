<template>
  <div id="editor" class="editor" :class="{edit: isEdit}"
       style="width: 1280px; height: 720px"
       @contextmenu.prevent="handleContextMenu"
  >

  </div>
</template>

<script setup lang="ts">

defineProps({
  isEdit: {
    type: Boolean,
    default: true
  }
})

const handleContextMenu = (e: DragEvent) => {
  e.stopPropagation()
}
</script>

<style scoped>
.editor {
  background-color: #fc6;
}
</style>
