<template>
  <div class="a-card">
    <appointment-card-header></appointment-card-header>
  </div>
</template>

<script>
import AppointmentCardHeader from '@/components/appointmentsCard/AppointmentCardHeader.vue';
export default {
  components: {
    appointmentCardHeader: AppointmentCardHeader,
  },
};
</script>

<style lang="scss" scoped>
.a-card {
  background-color: var(--white-color-2);
  padding: 1.5rem 2rem;
}
</style>
