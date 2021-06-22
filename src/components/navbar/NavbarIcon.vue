<template>
  <div class="nav-item">
    <div class="nav-item-inner">
      <div class="nav-item-icon">
        <div v-if="notifications" class="nav-item-nots">
          <div class="nav-item-nots-inner">
            {{ notifications }}
          </div>
        </div>
        <font-awesome-icon class="nav-icon" :icon="icon" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
    },
    active: {
      type: Boolean,
    },
    notifications: {
      type: Number,
    },
  },
};
</script>

<style lang="scss">
.nav-item {
  cursor: pointer;
  &-inner {
    position: relative;
  }
  &-nots {
    background: linear-gradient(to right bottom, #f73f7f, #e52956);
    width: 16px;
    height: 16px;
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--white-color);
    display: grid;
    border-radius: 50%;
    &-inner {
      margin: auto;
    }
  }
  &.active {
    background-color: var(--white-color);
    box-shadow: var(--box-shadow-small);
    border-radius: var(--border-radius-normal);
    & .nav-icon {
      color: var(--blue-gradient-2);
    }
  }
}

// ICON
.nav-icon {
  font-size: 2.5rem;
  color: var(--icon-color);
}
</style>
