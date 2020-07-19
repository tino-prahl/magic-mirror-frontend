import { reactive, readonly } from 'vue';
import axios from 'axios';

const state = reactive<Object>({});

const actions = {
  async fetchCurrentWeather() {
    const response = await axios.get('/weather/current');
    Object.assign(state, response.data);
  },
};

export default { state: readonly(state), actions };
