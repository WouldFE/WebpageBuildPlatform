<template>
  <div v-if="Object.keys(currCompEvents).length !== 0">
    <el-card class="relative">
      <el-tag
        v-for="(event, index) in Object.keys(currCompEvents)"
        :key="index"
        style="height: 40px; font-size: 15px"
        class="cursor-pointer w-full"
        closable
        @click="editEvent(event)"
        @close="removeEvent(event)"
      >
        {{ event }}
      </el-tag>
      <el-button type="primary" size="small" class="absolute bottom-0 p-5px rounded-full " style="left: 50%; transform: translateX(-50%)" @click="openDrawer">
        <span class="iconify text-xl" :data-icon="'carbon:add'" />
      </el-button>
    </el-card>
  </div>
  <el-button v-else type="primary" style="width: 100%; padding: 20px 0; font-size: 15px; font-weight: 500; letter-spacing: 4px" @click="openDrawer">
    添加事件
  </el-button>
  <el-drawer :model-value="drawer" direction="ltr" :destroy-on-close="true" @close="drawer = false">
    <el-form label-position="top" @submit.prevent.stop>
      <el-form-item label="添加的事件类型">
        <el-cascader
          v-model="eventChoice"
          :options="eventOptions"
        />
      </el-form-item>
      <el-form-item v-if="eventChoice[1] === 'alert'" label="弹窗消息">
        <el-input v-model="eventParam.msg" type="textarea" placeholder="弹窗消息" />
      </el-form-item>
      <el-form-item v-if="eventChoice[1] === 'redirection'" label="跳转路径">
        <el-input v-model="eventParam.path" placeholder="跳转路径" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="confirmEvent">
          确定
        </el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<script lang="ts" setup>
import { deepClone2 } from '@chris-zhu/utils'
import { useCanvasStore } from '@/store/canvas'
import { eventsList } from '@/events'

const { currComp } = storeToRefs(useCanvasStore())
const currCompEvents = currComp.value?.events

const drawer = ref(false)
const eventChoice = ref<string[]>([])
const eventParam = ref({})
const eventOptions = [
  {
    value: 'click',
    label: '点击',
    children: [
      {
        value: 'alert',
        label: '弹窗'
      },
      {
        value: 'redirection',
        disabled: true,
        label: '跳转'
      }
    ]
  }
]
const openDrawer = () => {
  drawer.value = true
  eventChoice.value = []
  eventParam.value = {}
}
const editEvent = (event: string) => {
  const e = (currCompEvents as any)[event]
  eventChoice.value = [event, e.type]
  eventParam.value = e.param
  drawer.value = true
}
const removeEvent = (event: string) => {
  delete (currCompEvents as any)[event]
}

const confirmEvent = () => {
  const eventType = eventChoice.value[0]
  const event = eventChoice.value[1]
  if (currComp.value?.events !== undefined)
    currComp.value.events[eventType] = { event: deepClone2(eventsList[event]), param: eventParam.value, type: event }
  drawer.value = false
}

</script>

<style scoped>

</style>
