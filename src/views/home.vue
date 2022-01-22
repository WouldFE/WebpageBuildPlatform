<script lang="ts" setup>
import {} from 'pinia'
import { useUserStore } from '@/store/user'

const { name } = storeToRefs(useUserStore())
</script>

<template>
  <div>
    <HelloWorld msg="123" />
    <p text-center>
      type change:
      <input v-model="name">
      <p>
       pinia user store name: {{name}}
      </p>
    </p>
  </div>
</template>
