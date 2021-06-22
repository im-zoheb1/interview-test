<template>
  <div class="calendar">
    <v-date-picker
      :value="null"
      color="indigo"
      v-model="range"
      is-range
      is-expanded
      style="height: 100%"
      show-weeknumbers
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      range: {
        start: new Date(2021, 0, 17),
        end: new Date(2021, 0, 20),
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.calendar {
  border-radius: var(--border-radius-small);
}
</style>
