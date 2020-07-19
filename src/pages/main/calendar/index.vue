<template>
  <table class="table">
    <tr :key="event.id" v-for="event in events">
      <td class="symbol">
        <i :class="event.symbolClass" class="fas" />
      </td>
      <td>
        <span>{{ event.text }}</span>
      </td>
      <td class="time light normal">
        {{ event.time }}
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
import store from '../../../store/calendar';

export default {
  setup() {
    return {
      events: store.state,
    };
  },
};
</script>

<style scoped>
.symbol {
  vertical-align: top;
}

.time {
  text-align: right;
  vertical-align: top;
  white-space: nowrap;
}
</style>
