<template>
  <div class="card-header-outer">
    <div class="card-header">
      <div class="card-title">{{ title }}</div>
      <div class="card-icon">
        <font-awesome-icon class="card-icon-ellipsis" icon="ellipsis-h" />
      </div>
    </div>
    <div class="card-subtitle">{{ subtitle }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  &-header {
    &-outer {
      display: flex;
      flex-direction: column;
    }
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: 600;
    font-size: 1.4rem;
    color: var(--white-color);
    letter-spacing: 0.8px;
  }
  &-icon {
    font-size: 2rem;
    color: #c39df2;
    cursor: pointer;
  }
  &-subtitle {
    font-size: 1.4rem;
    color: #d1b0f6;
    font-weight: 300;
    letter-spacing: 0.5px;
  }
}
</style>
