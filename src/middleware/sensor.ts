import io from 'socket.io-client';
import { ref } from 'vue';

const socket = io(':4001', {
  path: '/sensor',
});

const left = ref(0);
socket.on('sensor-left-changed', (value: number) => (left.value = value));

const right = ref(0);
socket.on('sensor-right-changed', (value: number) => (right.value = value));

const down = ref(0);
socket.on('sensor-down-changed', (value: number) => (down.value = value));

const up = ref(0);
socket.on('sensor-up-changed', (value: number) => (up.value = value));

const sensor = {
  left,
  right,
  down,
  up,
};

export default sensor;
