<template>
  <div class="main row h-100 d-flex justify-content-center">
    <div class="col-md-6 my-auto">
      <canvas ref="canvas"></canvas>
      <h1 class="text-center">{{ ssid }}</h1>
      <h1 class="text-center">{{ password }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import { toCanvas, QRCodeRenderersOptions } from 'qrcode';
import config from '../store/config';

export default {
  setup() {
    const { security, ssid, password } = config.wifi;
    const qrcodeText = `WIFI:T:${security};S:${ssid};P:${password};;`;

    const options: QRCodeRenderersOptions = {
      width: 540,
      errorCorrectionLevel: 'high',
      color: {
        dark: '#ffffff',
        light: '#000000',
      },
    };

    const canvas = ref(null);

    onMounted(() => {
      toCanvas(canvas.value, qrcodeText, options);
    });

    return { ...config.wifi, canvas };
  },
};
</script>
