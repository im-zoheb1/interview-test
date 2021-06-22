<template>
  <div class="a-card-actions">
    <div class="a-card-buttons">
      <a-button class="a-card-btn btn-sm btn-primary">Upcoming</a-button>
      <a-button class="a-card-btn btn-sm btn-primary-light">Past</a-button>
    </div>
    <div class="a-card-mov">
      <a href="#" class="a-card-mov-item enable">
        <font-awesome-icon class="a-card-mov-icon" icon="angle-left" />
      </a>
      <a href="#" class="a-card-mov-item disable">
        <font-awesome-icon class="a-card-mov-icon" icon="angle-right" />
      </a>
    </div>
    <div class="a-card-sort">
      <span class="a-card-sort-light">Sort by</span>
      <span class="a-card-sort-dark">Date</span>
      <span class="a-card-sort-caret">
        <font-awesome-icon class="button-icon-icon" icon="caret-down" />
      </span>
    </div>
  </div>
</template>

<script>
import AButton from '@/components/button/AButton.vue';
export default {
  components: {
    aButton: AButton,
  },
};
</script>

<style lang="scss" scoped>
.a-card {
  &-actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
  }
  &-btn:not(:last-child) {
    margin-right: 1.5rem;
  }
  &-mov {
    display: flex;
    flex-direction: row;
    &-item {
      background-color: red;
      height: 3.5rem;
      width: 3.5rem;
      border-radius: 50%;
      background-color: var(--white-color);
      display: grid;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
      &:first-child {
        margin-right: 1.5rem;
      }
      &.disable {
        background: #dee2ff;
      }
    }
    &-icon {
      font-size: 2.3rem;
      margin: auto;
      color: var(--blue-color-1);
    }
  }
  &-sort {
    display: flex;
    flex-direction: row;
    font-size: 1.5rem;
    font-weight: 600;
    &-light {
      color: var(--icon-color);
      margin-right: 1.5rem;
    }
    &-dark {
      color: var(--font-color);
      margin-right: 1rem;
    }
    &-caret {
      font-size: 1.6rem;
      color: var(--font-color);
      cursor: pointer;
    }
  }
}
</style>
