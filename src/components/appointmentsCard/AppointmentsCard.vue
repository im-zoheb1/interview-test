<template>
  <div class="a-card">
    <appointment-card-header></appointment-card-header>
    <appointment-card-actions></appointment-card-actions>
    <div class="a-card-specialists">
      <specialist-card
        v-for="(specialist, index) in specialists"
        :specialist="specialist"
        :key="index"
        class="a-card-specialist"
      ></specialist-card>
    </div>
  </div>
</template>

<script>
import AppointmentCardHeader from '@/components/appointmentsCard/AppointmentCardHeader.vue';
import AppointmentCardActions from '@/components/appointmentsCard/AppointmentCardActions.vue';
import SpecialistCard from '@/components/specialistCard/SpecialistCard.vue';
export default {
  components: {
    appointmentCardHeader: AppointmentCardHeader,
    appointmentCardActions: AppointmentCardActions,
    specialistCard: SpecialistCard,
  },
  props: {
    specialists: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.a-card {
  background-color: #f4faff !important;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  &-specialists {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    flex: 1;
  }
  &-specialist {
    flex: 1;
    &:not(:last-child) {
      margin-right: 2rem;
    }
  }
}
</style>
