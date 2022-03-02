<template>
  <div class="c-layout" @drop.stop.prevent="handleDrop" @dragover.prevent="handleDragOver">
    <div v-for="i in getRow" :key="i" class="row-layout">
      <div v-for="j in getCol" :key="j" class="col-layout" :style="mode === 'edit' ? {outline: '1px dashed #4400ee'} : {}">
        <div class="sub-comp">
          <component
            :is="getMode"
            v-if="getComp((i - 1) * getCol + (j - 1)) !== undefined"
            :element="getComp((i - 1) * getCol + (j - 1))"
            :index="(i - 1) * getCol + (j - 1)"
            class="shape"
            style="width: 100%"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { generateComp } from '@/config'
import { useCanvasStore } from '@/store/canvas'
import type { CLayout, commonStyle } from '@/types'

const props = defineProps<{
  elem: CLayout
}>()

const canvasStore = useCanvasStore()
const { mode } = storeToRefs(canvasStore)

const { row, col, subComp } = toRefs(props.elem.propValue)

const getMode = computed(() => mode.value === 'edit' ? 'Shape' : 'Wrapper')
const getRow = computed(() => Number(row.value.value))
const getCol = computed(() => Number(col.value.value))
const getComp = (idx: number) => subComp.value.value[idx]

const handleDrop = (e: DragEvent) => {
  const component = generateComp(Number(e.dataTransfer?.getData('index')))
  subComp.value.value.push(component)
}

const handleDragOver = (e: DragEvent) => {
  (e as any).dataTransfer.dropEffect = 'copy'
}

function getComponentStyle(style: commonStyle) {
  const result: { [key: string]: string } = {}
  Object.keys(style).forEach((value) => {
    if (!isNaN(Number(style[value])))
      result[value] = `${style[value]}px`
    else
      result[value] = style[value] as string
  })
  return result
}

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

      .sub-comp {
        position: relative;
        width: 100%;
        height: 100%;

        .shape {
          display: flex;
          justify-content: center;
          align-content: center;
        }
      }
    }
  }
}
</style>
