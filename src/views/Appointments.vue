<template>
  <div class="appt">
    <appointments-left></appointments-left>
    <appointments-right></appointments-right>
  </div>
</template>

<script>
import AppointmentsLeft from '@/views/appointments/AppointmentsLeft.vue';
import AppointmentsRight from '@/views/appointments/AppointmentsRight.vue';
export default {
  components: {
    appointmentsLeft: AppointmentsLeft,
    appointmentsRight: AppointmentsRight,
  },
};
</script>

<style lang="scss" scoped>
.appt {
  padding: 1.5rem;
  display: flex;
  flex-direction: row;
  flex: 1;
}
</style>
