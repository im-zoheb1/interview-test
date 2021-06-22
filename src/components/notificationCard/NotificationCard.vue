<template>
  <div class="card">
    <div
      class="card-bg-primary"
      :class="{ 'card-bg-secondary': secondary }"
    ></div>
    <div class="card-bg-img">
      <img :src="require(`@/assets/img/${image}`)" />
    </div>
    <div class="card-content">
      <notification-card-header
        :title="title"
        :subtitle="subtitle"
        class="card-header"
      ></notification-card-header>
      <div class="card-list">
        <div class="card-list-item">
          <span class="card-list-icon"></span>
          <span class="card-list-text">Dr. Veronica Hops</span>
          <span class="card-list-light">pediatrician</span>
        </div>
        <div class="card-list-item">
          <span class="card-list-icon"></span>
          <span class="card-list-text">Dr. Albert Novikov</span>
          <span class="card-list-light">dermatologist</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NotificationCardHeader from '@/components/notificationCard/NotificationCardHeader.vue';
export default {
  props: {
    secondary: {
      type: Boolean,
    },
    image: {
      type: String,
    },
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
  },
  components: {
    notificationCardHeader: NotificationCardHeader,
  },
};
</script>

<style lang="scss" scoped>
.card {
  padding: 1.5rem;
  border-radius: var(--border-radius-small);
  position: relative;
  overflow: hidden;
  z-index: 1;
  &-bg-img {
    position: absolute;
    right: 0;
    bottom: 0;
    img {
      max-height: 12rem;
      z-index: -1;
    }
  }
  &-bg-primary,
  &-bg-secondary {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    z-index: 1;
  }
  &-bg-primary {
    background: linear-gradient(
      to right bottom,
      rgba(#a86af9, 0.8),
      rgba(#4338dd, 0.8)
    );
  }
  &-bg-secondary {
    background: linear-gradient(
      to right bottom,
      rgba(#f69062, 0.9),
      rgba(#d64a4a, 0.9)
    );
  }
  &-content {
    position: relative;
    z-index: 2;
  }

  &-list {
    font-size: 1.3rem;
    color: var(--white-color-2);
    margin-top: 1.3rem;
    &-item {
      margin-top: 1rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 1.4rem;
    }
    &-icon {
      width: 7px;
      border-radius: 50%;
      height: 7px;
      background-color: #ffc71d;
      margin-right: 1rem;
    }
    &-text {
      font-weight: 500;
      margin-right: 2rem;
    }
    &-light {
      color: #d1b0f6;
    }
  }
}
</style>
