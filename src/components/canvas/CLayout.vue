<template>
  <div class="c-layout">
    <div v-for="i in getNumber(props.props.row.value)" :key="i" class="row-layout">
      <div v-for="j in getNumber(props.props.col.value)" :key="j" class="col-layout">
        <div class="sub-comp">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { compStyle, prop } from '@/types'

type propsType = {
  props: {
    col: prop
    row: prop
  }
  cstyle: compStyle
}

const getNumber = (str: string) => Number(str)

const props = defineProps<propsType>()
</script>

<style lang="scss" scoped>
.c-layout {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .row-layout {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    .col-layout {
      width: 100%;
      border: 2px dashed #4400ee;
    }
  }
}
</style>
