<template>
  <div class="appt-right">
    <google-map class="appt-map"></google-map>
    <appointments-card class="appt-appointments"></appointments-card>
  </div>
</template>

<script>
import GoogleMap from '@/components/googleMap/GoogleMap.vue';
import AppointmentsCard from '@/components/appointmentsCard/AppointmentsCard.vue';
export default {
  components: {
    googleMap: GoogleMap,
    appointmentsCard: AppointmentsCard,
  },
};
</script>

<style lang="scss" scoped>
.appt-right {
  flex: 6;
  display: flex;
  flex-direction: column;
}
.appt {
  &-map {
    flex: 6;
    background-color: white;
    margin-bottom: 1.5rem;
    border-radius: var(--border-radius-small);
  }
  &-appointments {
    background-color: white;
    flex: 10;
    border-radius: var(--border-radius-small);
  }
}
</style>
