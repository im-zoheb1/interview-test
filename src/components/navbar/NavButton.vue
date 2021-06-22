<template>
  <button class="button">
    <span class="button-text">Make an appointment</span>
    <span class="button-icon">
      <font-awesome-icon class="button-icon-icon" icon="angle-right" />
    </span>
  </button>
</template>

<style lang="scss" scoped>
.button {
  background: linear-gradient(
    to right bottom,
    var(--green-gradient-1),
    var(--green-gradient-2)
  );
  cursor: pointer;
  padding: 1.45rem;
  border: none;
  outline: none;
  border-radius: 5px;
  font-weight: 600;
  color: var(--white-color);
  font-size: 1.4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05);
  &-text {
    margin-right: 1rem;
  }
  &-icon {
    background-color: var(--white-color);
    color: var(--green-gradient-2);
    font-size: 1.5rem;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    position: relative;
    display: grid;
    &-icon {
      margin: auto;
    }
  }
}
</style>
