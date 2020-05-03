<template>
  <div class="clock-container">
    <Clock />
  </div>

  <div class="calendar-container">
    <Calendar />
  </div>
</template>

<script lang="ts">
import Calendar from './calendar/index.vue';
import Clock from './Clock.vue';

export default {
  components: {
    Calendar,
    Clock,
  },
};
</script>

<style scoped>
.calendar-container {
  position: absolute;
  width: 45%;
  height: 35%;
  bottom: 0;
  right: 0;
  overflow: hidden;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left 60%,
    left bottom,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0))
  );
}
</style>
