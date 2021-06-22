<template>
  <div class="appt-left">
    <calendar class="appt-item-calender">calender</calendar>
    <notification-card
      image="notifications-bg.png"
      title="Notifications"
      subtitle="You have 2 visits today"
      class="appt-item-notif"
    ></notification-card>
    <notification-card
      image="cancelled-bg.png"
      title="Cancelled visits"
      subtitle="You have 1 cancelled visits"
      class="appt-item-notif"
      secondary
    ></notification-card>
  </div>
</template>

<script>
import Calendar from '@/components/calendar/Calendar.vue';
import NotificationCard from '@/components/notificationCard/NotificationCard.vue';
export default {
  components: {
    calendar: Calendar,
    notificationCard: NotificationCard,
  },
};
</script>

<style lang="scss" scoped>
.appt-left {
  margin-right: 1.5rem;
  flex: 3;
  display: flex;
  flex-direction: column;
}
.appt-item {
  &-calender {
    background-color: white;
    flex: 3;
  }
  &-notif {
    background-color: white;
    margin-top: 1.5rem;
    flex: 2;
  }
}
</style>
