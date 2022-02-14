<h1 align="center">Client</h1>

<p align="center">这是我们前端的项目，采用 
<a href="https://vitejs.dev/"><img width="15" src="https://vitejs.dev/logo.svg" /></a>搭建</p>


# !注意

如果你是开发人员，您需要基于`main`创建新分支，在自己分支开发。

如果你有`commit`需要`merge`，请先然后合并到`dev`分支。

`dev`分支对成员开放所有权限，请保持所有分支的干净整洁（勿操作其他成员的分支以造成麻烦）

有问题请在`微信群`讨论

# 项目说明

该项目是低代码网页构建平台的前端实现Demo。

用户可以通过拖动左侧组件列表中的组件到中间编辑器画布上，画布即可渲染出真正的组件。

在画布中，用户可以通过点击选定的方式聚焦组件，选定组件后，右侧将会出现该组件的可配置属性。

点击顶部工具栏上预览按钮，即可跳转至预览页面查看页面效果。

![页面效果](https://user-images.githubusercontent.com/36471625/153819045-b5366fab-5ea8-4ef4-94ba-3426f794ad65.gif)

项目目前已实现一下功能：

- [x] 拖拽生成组件
- [x] 动态渲染组件
- [x] 画布中移动组件
- [ ] 放大缩小
- [ ] 吸附
- [x] 动态更改组件属性
- [x] 自定义右键菜单
- [x] 多组件的图层调整
- [x] 组件删除
- [x] 组件响应点击事件

项目中了通过拖拽生成组件的核心功能是利用`draggable`相关的`WebAPI`以及`Vue`动态组件功能实现的。

项目中自定义了 4 个可编辑组件，分别有：文本、图片、布局、按钮。

![文本](https://user-images.githubusercontent.com/36471625/153820425-3efb1994-d855-4bf2-9778-624467c75af1.gif)

![图片](https://user-images.githubusercontent.com/36471625/153820711-8aa0855b-13b2-4b85-9b7d-e038e52d6cf9.gif)

![布局](https://user-images.githubusercontent.com/36471625/153821653-7f2e0a4c-d2d5-4933-8572-02144688a1ed.gif)

![按钮](https://user-images.githubusercontent.com/36471625/153821912-dfcb6436-5c1d-48f0-9f10-19ab56312484.gif)


# Features

- vue3 setup 语法糖🍬，composition api 书写体验
- 完美的 [typescript](https://www.tslang.cn/docs/home.html) 支持
- 约定式路由 [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)
- 灵活的[unocss](https://github.com/antfu/unocss) <img width="15" src="https://raw.githubusercontent.com/antfu/unocss/main/playground/public/icon-gray.svg" />构建 (使用vscode，建议安装[unocss](https://marketplace.visualstudio.com/items?itemName=antfu.unocss) 扩展)
- 状态管理 [pinia](https://pinia.vuejs.org/) <img width="15" src="https://pinia.vuejs.org/logo.svg" />
- etc.

# Docs

提供以下文档学习，随时补充。

- [vue3](https://staging-cn.vuejs.org/)
- [vue-router@next](https://next.router.vuejs.org/zh/)
- [pinia](https://pinia.vuejs.org/)
- [unocss](https://github.com/antfu/unocss)
- [element-plus](https://element-plus.gitee.io/zh-CN/)
- [draggable API](https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#draggableattribute)
- [可视化拖拽组件库一些技术要点原理分析](https://github.com/woai3c/Front-end-articles/issues/19)
- etc.

# Install
 
使用 `pnpm` 进行安装

```bash
npm i -g pnpm
```

```bash
pnpm i
```

# Run

```bash
pnpm dev
```
