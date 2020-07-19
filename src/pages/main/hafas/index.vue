<template>
  <table class="table">
    <tr>
      <th>Abfahrt</th>
      <th>Ankunft</th>
      <th>Linien</th>
    </tr>
    <tr v-for="journey in journeys">
      <td>
        <span>
          {{ journey.plannedDeparture }}
        </span>
        <span class="delay">{{ journey.departureDelay }}</span>
      </td>
      <td>
        <span>
          {{ journey.plannedArrival }}
        </span>
        <span class="delay">{{ journey.arrivalDelay }}</span>
      </td>
      <td>
        <span>{{ journey.lines }}</span>
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
import useNextJoureys from './useNextJourneys';

export default {
  setup() {
    const journeys = useNextJoureys();
    return {
      journeys,
    };
  },
};
</script>

<style scoped>
.delay {
  color: red;
}
</style>
