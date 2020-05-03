<template>
  <table class="small">
    <tr :key="event.id" v-for="event in events">
      <td class="symbol">
        <i :class="event.symbolClass" class="fas" />
      </td>
      <td class="title bright">
        <span>{{ event.text }}</span>
      </td>
      <td class="time light normal">
        {{ event.time }}
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
import { onBeforeUnmount, ref } from 'vue';
import axios from 'axios';
import convertDateToText from './convertDateToText';

export default {
  setup() {
    const events = ref([]);

    const fetchEventList = async () => {
      const response = await axios.get('/calendar/list?maxResults=20');
      events.value = response.data.map((ev: any, index: number) => {
        const isBirthday = ev.id.includes('BIRTHDAY');

        const symbolClass = isBirthday ? 'fa-birthday-cake' : 'fa-calendar-alt';

        const text = isBirthday
          ? ev.summary.replace('hat Geburtstag', '').trim()
          : ev.summary.trim();

        return {
          id: ev.id || index,
          symbolClass,
          text,
          time: convertDateToText(ev.start),
        };
      });
    };

    fetchEventList();
    let interval = setInterval(fetchEventList, 5 * 60 * 1000);

    onBeforeUnmount(() => {
      clearInterval(interval);
    });

    return {
      events,
    };
  },
};
</script>

<style scoped>
table {
  width: 100%;
}

td {
  padding: 3px 0;
}

.symbol {
  padding-right: 10px;
  vertical-align: top;
}

.symbol i {
  display: inline-block;
}

.time {
  padding-left: 30px;
  text-align: right;
  vertical-align: top;
  white-space: nowrap;
}
</style>
