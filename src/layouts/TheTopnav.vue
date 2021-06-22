<template>
  <div class="topnav">
    <nav-button></nav-button>
    <div class="topnav-nav">
      <nav-icon
        :notifications="2"
        class="topnav-icon"
        icon="headphones"
      ></nav-icon>
      <nav-icon :notifications="8" class="topnav-icon" icon="bell"></nav-icon>
      <div class="topnav-notifications"></div>
      <the-user
        :name="'Katty Zaytseva'"
        :image="'katty.png'"
        :active="true"
      ></the-user>
    </div>
  </div>
</template>

<script>
import NavButton from '@/components/navbar/NavButton.vue';
import TheUser from '@/components/navbar/TheUser.vue';
import NavIcon from '@/components/navbar/NavbarIcon.vue';
export default {
  components: {
    navButton: NavButton,
    theUser: TheUser,
    navIcon: NavIcon,
  },
};
</script>

<style lang="scss" scoped>
.topnav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.8rem 1.5rem;
  background-color: var(--white-color);
  align-items: center;
  &-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  &-icon {
    margin-right: 2rem;
  }
}
</style>
