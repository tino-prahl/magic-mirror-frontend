<template>
  <div class="clock-container">
    <Clock />
  </div>

  <div class="weather-container">
    <Weather />
  </div>

  <div class="hafas-container">
    <Hafas />
  </div>

  <div class="calendar-container">
    <Calendar />
  </div>
</template>

<script lang="ts">
import Calendar from './calendar/index.vue';
import Clock from './Clock.vue';
import Weather from './weather/index.vue';
import Hafas from './hafas/index.vue';

export default {
  components: {
    Calendar,
    Clock,
    Hafas,
    Weather,
  },
};
</script>

<style scoped>
.weather-container {
  position: absolute;
  top: 30%;
  right: 0;
}

.hafas-container {
  position: absolute;
  width: 45%;
  height: 20%;
  bottom: 0;
  left: 0;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left 60%,
    left bottom,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0))
  );
}

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
