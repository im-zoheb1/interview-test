<template>
  <div class="sp-card">
    <div class="sp-card-header">
      <div class="sp-card-img">
        <img :src="require(`@/assets/img/${specialist.image}`)" />
      </div>
      <div class="sp-card-text">
        <div class="sp-card-title">{{ specialist.name }}</div>
        <div class="sp-card-subtitle">{{ specialist.speciality }}</div>
      </div>
    </div>
    <div class="sp-card-body">
      <div class="sp-card-location">
        <span class="sp-card-body-icon blue"
          ><font-awesome-icon class="button-icon-icon" icon="map-marker-alt"
        /></span>
        <span class="sp-card-body-text">{{ specialist.location }}</span>
      </div>
      <div class="sp-card-timing">
        <div class="sp-card-date">
          <span class="sp-card-body-icon">
            <font-awesome-icon class="button-icon-icon" icon="calendar-alt" />
          </span>
          <span class="sp-card-body-text">{{ specialist.date }}</span>
        </div>
        <div class="sp-card-time">
          <span class="sp-card-body-icon">
            <font-awesome-icon class="button-icon-icon" icon="clock" />
          </span>
          <span class="sp-card-body-text">{{ specialist.time }}</span>
        </div>
      </div>
    </div>
    <div class="sp-card-footer">
      <button class="btn btn-sm btn-primary-light">
        <div class="btn-icon">
          <font-awesome-icon class="btn-icon-icon" icon="check" />
        </div>
        <div class="btn-text">Confirm</div>
      </button>
      <button class="btn btn-sm btn-danger-light">
        <div class="btn-icon">
          <font-awesome-icon class="btn-icon-icon" icon="times" />
        </div>
        <div class="btn-text">Cancel</div>
      </button>
    </div>
  </div>
</template>

<script>
import AButton from '@/components/button/AButton.vue';
export default {
  props: {
    components: {
      aButton: AButton,
    },
    specialist: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.sp-card {
  background-color: var(--white-color);
  padding: 1.5rem;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius-small);
  display: flex;
  flex-direction: column;
  &-header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  &-img {
    width: 6rem;
    height: 6rem;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    margin-right: 1.5rem;
    img {
      width: 130%;
      height: 100%;
      margin-left: -5px;
      object-fit: cover;
    }
  }
  &-title {
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: var(--font-color);
    margin-bottom: 0.3rem;
  }
  &-subtitle {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--icon-color);
  }
  &-body {
    padding: 0 1rem;
  }
  &-location {
    margin-top: 2.5rem;
    line-height: 1.5;
  }
  &-timing {
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
  }
  &-location,
  &-time,
  &-date {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  &-location {
    align-items: flex-start;
  }
  &-date {
    margin-right: 1.5rem;
  }
  &-body-icon {
    font-size: 1.6rem;
    margin-right: 1rem;
    color: var(--icon-color);
    &.blue {
      color: var(--blue-gradient-2);
    }
  }
  &-body-text {
    color: var(--font-color);
    font-size: 1.4rem;
    font-weight: 500;
  }
  &-footer {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
  }
}
.btn {
  display: flex;
  align-items: center;
  padding: 0.5rem;
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
  &-danger-light {
    background: #ffdee5;
    color: #ea2f2f;
  }
  &-icon {
    background-color: var(--white-color);
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    font-size: 1.2rem;
    display: grid;
    &-icon {
      margin: auto;
    }
  }
  &-text {
    padding: 0 0.7rem;
  }
}
</style>
