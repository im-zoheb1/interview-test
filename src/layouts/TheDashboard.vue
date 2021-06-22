<template>
  <div class="dashboard">
    <div class="dashboard-inner">
      <router-view name="sidenav"></router-view>
      <div class="dashboard-right">
        <router-view name="topnav"></router-view>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.dashboard {
  background-color: var(--bg-color);
  width: 100%;
  height: 100vh;
  &-inner {
    height: 100%;
    display: flex;
    flex-direction: row;
  }
  &-left {
  }
  &-right {
    flex: 4;
    display: flex;
    flex-direction: column;
  }
}
.fade-enter-active {
  transition: opacity 0.3s ease;
}
.fade-leave-active {
  transition: opacity 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
