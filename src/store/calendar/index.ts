import { ref, readonly } from 'vue';
import axios from 'axios';
import config from '../config';
import convertDateToText from './convertDateToText';

const state = ref([]);

const actions = {
  async fetchNextEvents() {
    const { maxResults } = config.calendar;

    const response = await axios.get(`/calendar/list?maxResults=${maxResults}`);
    state.value = response.data.map((ev: any, index: number) => {
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
  },
};

export default { state: readonly(state), actions };
