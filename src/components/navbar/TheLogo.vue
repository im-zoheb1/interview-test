<template>
  <div class="nav-logo">
    <div class="nav-logo-item"></div>
  </div>
</template>

<style lang="scss" scoped>
.nav-logo {
  padding: var(--padding-normal);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  &-item {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: var(--border-radius-normal);
    background: linear-gradient(
      to right bottom,
      var(--blue-gradient-1),
      var(--blue-gradient-2)
    );
  }
}
</style>
