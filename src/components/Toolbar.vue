<script lang="ts" setup>
import { deepClone } from '@chris-zhu/utils'
import { useCanvasStore } from '@/store/canvas'
import { usePreviewStore } from '@/store/preview'
import type { component } from '@/types'

enum menuID {
  clear,
  setting,
  view,
  route,
  help
}

const menuList = [
  {
    id: menuID.view,
    name: '预览'
  },
  {
    id: menuID.clear,
    name: '清空画布'
  },
  {
    id: menuID.setting,
    name: '画布设置'
  },
  {
    id: menuID.route,
    name: '查看已存在路由'
  },
  {
    id: menuID.help,
    name: '查看帮助'
  }
]

const previewURL = ref('/preview')
const router = useRouter()
const settingModal = ref(false)
const previewModal = ref(false)
const routeModal = ref(false)
const helpModal = ref(false)
const canvasStore = useCanvasStore()
const previewStore = usePreviewStore()
const { previewData } = storeToRefs(previewStore)
const { config, mode, data } = storeToRefs(canvasStore)
const paths = Object.keys(previewData.value)
const operation = (id: menuID) => {
  if (id === menuID.clear) {
    canvasStore.$patch({
      data: [],
      currComp: undefined,
      currCompIndex: -1,
      contextmenu: { show: false }
    })
  } else if (id === menuID.setting) {
    settingModal.value = true
  } else if (id === menuID.view) {
    previewModal.value = true
  } else if (id === menuID.route) {
    routeModal.value = true
  } else if (id === menuID.help) {
    helpModal.value = true
  }
}

const previewUpdate = () => {
  previewStore.$patch((state) => {
    state.previewData[previewURL.value.substring(1)] = deepClone(data.value) as component[]
  })
  router.addRoute({
    name: previewURL.value.substring(1),
    path: previewURL.value,
    component: () => import('@v/preview.vue')
  })
  router.push({
    path: previewURL.value
  })
}

const jumpPath = (path: string) => {
  router.push({
    path
  })
}
</script>

<template>
  <div border="~ transparent b-#ccc">
    <div class="flex justify-between items-center px-6 py-2">
      <div>
        <el-button v-for="menuItem in menuList" :key="menuItem.id" mr-5 @click="operation(menuItem.id)">
          {{ menuItem.name }}
        </el-button>
      </div>
      <div>
        <a href="" class="align-top pr-20px" title="演示文稿">
          <img alt="slidev" width="20" src="https://d33wubrfki0l68.cloudfront.net/273aa82ec83b3e4357492a201fb68048af1c3e6a/8f657/logo.svg">
        </a>
        <a
          title="项目地址"
          class="hover:text-[#409EFF] cursor-pointer text-black-500"
          href="https://github.com/WouldFe/client"
          target="_blank"
        >
          <span class="iconify text-xl" data-icon="carbon:logo-github" />
        </a>
      </div>
    </div>
  </div>
  <el-dialog v-model="settingModal" :modal="false" width="30%" title="画布设置">
    <el-form label-position="top" label-width="120px">
      <el-form-item label="画布尺寸">
        <div class="w-full flex justify-between">
          <div class="w-45%">
            <el-input v-model="config.width" placeholder="宽度" />
          </div>
          <span>&times;</span>
          <div class="w-45%">
            <el-input v-model="config.height" placeholder="高度" />
          </div>
        </div>
      </el-form-item>
      <el-form-item label="画布背景色">
        <div class="w-full flex justify-between">
          <div class="w-45%">
            <el-input v-model="config.bgColor" />
          </div>
          <el-color-picker v-model="config.bgColor" />
          <div class="w-45%" />
        </div>
      </el-form-item>
    </el-form>
  </el-dialog>
  <el-dialog v-model="previewModal" :modal="false" width="30%" title="预览配置">
    <el-form label-width="120px">
      <el-form-item label="预览URL">
        <div class="w-full inline-flex justify-around">
          <div class="w-50%">
            <el-input v-model="previewURL" placeholder="宽度" />
          </div>
          <el-button type="primary" @click="previewUpdate">
            预览
          </el-button>
        </div>
      </el-form-item>
    </el-form>
  </el-dialog>
  <el-dialog v-model="routeModal" :modal="false" width="30%" title="预览路由">
    <div class="flex justify-center">
      <el-button v-for="item in paths" :key="item" class="text-xl" @click="jumpPath(item)">
        {{ item }}
      </el-button>
    </div>
  </el-dialog>
  <el-dialog v-model="helpModal" width="30%" title="使用说明" center>
    <ul class="text-16px list-circle ml-15px">
      <li>点击预览可以配置指定页面的路由</li>
      <li>所以清空画布就是清空画布</li>
      <li>画布设置可以设置画布尺寸 & 背景色</li>
      <li>查看已存在路由可以看到已经配置好的页面，点击就跳转过去了</li>
      <li>当然，查看帮助就是看看我</li>
      <li>拖动左侧小方块到画布上就可以生成这个组件啦！</li>
      <li>在画布上拖动组件就可以移动位置</li>
      <li>点击画布中的组件就可以配置一下属性</li>
      <li>按钮可以配置点击事件也是理所应当的（虽然目前它还不算很棒）</li>
      <li>布局组件可以嵌套布局组件，还蛮有意思的（虽然目前它也不算很棒）</li>
      <li>这个小项目目前还有大大小小的一些小问题，我会持续更新他的</li>
      <li>感兴趣的大家可以来提PR</li>
      <li>感谢你看完我的介绍</li>
    </ul>
  </el-dialog>
</template>
