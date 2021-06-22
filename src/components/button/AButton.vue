<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.btn {
  padding: 1.2rem 2rem;
  cursor: pointer;
  font-weight: 600;
  outline: none;
  border: none;
  border-radius: 50px;
  letter-spacing: 0.5px;
  &-sm {
    font-size: 1.4rem;
  }
  &-primary {
    background: linear-gradient(
      to right,
      var(--blue-gradient-1),
      var(--blue-gradient-2)
    );
    color: var(--white-color-2);
  }
  &-primary-light {
    background: #dee2ff;
    color: var(--blue-gradient-2);
  }
}
</style>
