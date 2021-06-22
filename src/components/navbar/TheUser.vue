<template>
  <div class="user">
    <div class="user-img-outer">
      <div class="user-img">
        <img :src="require(`@/assets/img/${image}`)" />
      </div>
    </div>
    <div class="user-name">{{ name }}</div>
    <div class="user-caret">
      <font-awesome-icon class="user-caret-icon" icon="caret-down" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    active: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  flex-direction: row;
  align-items: center;
  &-img {
    &-outer {
      cursor: pointer;
      padding: 0.47rem;
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.1);
      background-color: var(--white-color-2);
      margin-right: 1rem;
    }
    height: 4.8rem;
    width: 4.8rem;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid var(--white-color);
    img {
      width: 115%;
      height: 100%;
      margin-left: -0.5rem;
      object-fit: cover;
    }
  }
  &-name {
    margin-right: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--font-color);
    cursor: pointer;
  }
  &-caret {
    cursor: pointer;
    font-size: 1.5rem;
    color: var(--icon-color);
  }
}
</style>
