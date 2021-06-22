<template>
  <div class="a-card-header">
    <div class="a-card-header-title">Appointments</div>
    <div class="a-card-header-icon">
      <font-awesome-icon class="card-icon-ellipsis" icon="ellipsis-h" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.a-card-header {
  display: flex;
  justify-content: space-between;
  &-title {
    font-size: 1.7rem;
    font-weight: 600;
    color: var(--font-color);
  }
  &-icon {
    font-size: 2.2rem;
    cursor: pointer;
    color: var(--icon-color);
  }
}
</style>
