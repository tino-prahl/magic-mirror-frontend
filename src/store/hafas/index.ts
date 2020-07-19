import { reactive, readonly } from 'vue';
import axios from 'axios';
import { Journey } from './journey';
import config from '../config';

type State = { journeys: Journey[] };

const state = reactive<State>({
  journeys: [],
});

const actions = {
  async fetchJourneys() {
    const { from, to, results } = config.hafas;
    const response = await axios.get<Journey[]>(
      `/hafas/journeys?from=${from}&to=${to}&results=${results}`,
    );
    state.journeys = response.data;
  },
};

export default { state: readonly(state), actions };
