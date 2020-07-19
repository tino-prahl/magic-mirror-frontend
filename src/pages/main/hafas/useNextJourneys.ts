import { computed } from 'vue';
import store from '../../../store/hafas';
import moment from 'moment';

const toClockTime = (d: Date) => moment(d).format('HH:mm');

const useNextJoureys = () =>
  computed(() => {
    return store.state.journeys
      .filter((j: any) => j && j.legs && j.legs.length)
      .map((j: any) => {
        const legs = j.legs;
        const first = legs[0];
        const last = legs.slice(-1)[0];

        const lines = legs.map((l: any) => l.line.name).join(', ');

        const departure = toClockTime(first.departure);
        const plannedDeparture = toClockTime(first.plannedDeparture);
        const departureDelay =
          first.departureDelay > 0
            ? `+${Math.ceil(first.departureDelay / 60)}`
            : '';

        const arrival = toClockTime(last.arrival);
        const plannedArrival = toClockTime(last.plannedArrival);
        const arrivalDelay =
          last.arrivalDelay > 0 ? `+${Math.ceil(last.arrivalDelay / 60)}` : '';

        return {
          departure,
          plannedDeparture,
          departureDelay,
          arrival,
          plannedArrival,
          arrivalDelay,
          lines,
        };
      });
  });

export default useNextJoureys;
