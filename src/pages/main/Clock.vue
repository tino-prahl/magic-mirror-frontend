<template>
  <div class="clock-date date normal medium">{{ date }}</div>
  <div class="clock-time time bright xlarge light">{{ time }}</div>
</template>

<script lang="ts">
import { onUnmounted, ref } from 'vue';
import moment from 'moment';

export default {
  setup() {
    const date = ref('');
    const time = ref('');

    const refreshDateAndTime = () => {
      const momentInstance = moment();
      date.value = momentInstance.format('dddd, LL');
      time.value = momentInstance.format('HH:mm');
    };

    const interval = setInterval(refreshDateAndTime, 1000);
    refreshDateAndTime();

    onUnmounted(() => {
      clearInterval(interval);
    });

    return {
      date,
      time,
    };
  },
};
</script>

<style scoped>
.clock-date,
.clock-time {
  margin: 10px;
  text-align: center;
}
</style>
