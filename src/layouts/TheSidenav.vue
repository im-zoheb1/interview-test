<template>
  <nav class="nav">
    <div class="nav-inner">
      <nav-logo></nav-logo>
      <div class="nav-items">
        <nav-icon class="nav-link" :icon="'home'"></nav-icon>
        <nav-icon
          class="nav-link active"
          :icon="'folder-open'"
          :active="true"
        ></nav-icon>
        <nav-icon class="nav-link" :icon="'heartbeat'"></nav-icon>
        <nav-icon class="nav-link" :icon="'briefcase-medical'"></nav-icon>
        <nav-icon
          class="nav-link"
          :icon="'envelope'"
          :notifications="3"
        ></nav-icon>
      </div>
      <div class="nav-footer">
        <nav-icon :icon="'sign-out-alt'"></nav-icon>
      </div>
    </div>
  </nav>
</template>

<script>
import NavLogo from '@/components/navbar/TheLogo.vue';
import NavIcon from '@/components/navbar/NavbarIcon.vue';
export default {
  components: {
    navLogo: NavLogo,
    navIcon: NavIcon,
  },
};
</script>

<style lang="scss" scoped>
.nav {
  background-color: var(--white-color);
  &-inner {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  &-items {
    flex: 1;
    background-color: var(--white-color-2);
    text-align: center;
    padding-top: 3rem;
  }
  &-link {
    margin: 1rem;
    padding: 1rem;
    padding-top: 1.3rem;
    padding-bottom: 1.3rem;
    cursor: pointer;
  }
  &-footer {
    background-color: var(--white-color-2);
    margin-top: auto;
    padding: var(--padding-normal);
    text-align: center;
    padding-bottom: 2.5rem;
  }
}
</style>
