<template>
  <main>
    <router-view />
    <!--      <transition :name="route.meta.transition || 'fade'" mode="out-in">-->
    <!--        &lt;!&ndash; <keep-alive> &ndash;&gt;-->
    <!--        <component :is="Component" :key="route.name" />-->
    <!--        &lt;!&ndash; </keep-alive> &ndash;&gt;-->
    <!--      </transition>-->
    <!--    </router-view>-->
  </main>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
