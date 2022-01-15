<template>
  <main>
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'" mode="out-in">
        <!-- <keep-alive> -->
        <component :is="Component" :key="route.name" />
        <!-- </keep-alive> -->
      </transition>
    </router-view>
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
