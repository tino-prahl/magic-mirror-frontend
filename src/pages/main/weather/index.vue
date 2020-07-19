<template>
  <div>
    <div class="large light">
      <span class="wi weathericon" :class="weather.weathericonClass"></span>
      <span> {{ weather.temperature }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';
import ICON_TABLE from './iconTable';
import store from '../../../store/weather';

export default {
  setup() {
    const weather = computed(() => {
      const data: any = store.state;
      if (!data.weather || !data.main) {
        return {};
      }

      const icon: string = data.weather[0].icon;

      return {
        weathericonClass: ICON_TABLE[icon],
        temperature: parseFloat(data.main.temp).toFixed(1) + '°C',
      };
    });

    return {
      weather,
    };
  },
};
</script>

<style scoped></style>
