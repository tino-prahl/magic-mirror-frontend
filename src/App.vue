<template>
  <div :key="page" v-for="(page, index) in pages">
    <transition :name="transitionName">
      <div class="page" v-if="currentPage === index">
        <component :is="page" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { ref, watch } from 'vue';
import sensor from './middleware/sensor';

import MainPage from './pages/main/index.vue';
import DummyPage from './pages/DummyPage.vue';

export default {
  components: {
    MainPage,
    DummyPage,
  },
  setup: function () {
    const pages = ['MainPage', 'DummyPage'];

    const maxPagePosition = pages.length - 1;

    const currentPage = ref(0);
    const transitionName = ref('');

    const watchSensorRight = watch(sensor.right, (newVal) => {
      if (newVal) {
        transitionName.value = 'slide-left';
        if (currentPage.value >= maxPagePosition) {
          currentPage.value = 0;
        } else {
          currentPage.value++;
        }
      }
    });

    const watchSensorLeft = watch(sensor.left, (newVal) => {
      if (newVal) {
        transitionName.value = 'slide-right';
        if (currentPage.value <= 0) {
          currentPage.value = maxPagePosition;
        } else {
          currentPage.value--;
        }
      }
    });

    return {
      watchSensorLeft,
      watchSensorRight,
      pages,
      currentPage,
      transitionName,
    };
  },
};
</script>

<style>
@import '~@fortawesome/fontawesome-free/css/all.min.css';
@import '~roboto-fontface/css/roboto/roboto-fontface.css';
@import '~weathericons/css/weather-icons.min.css';
@import '~magicmirror/css/main.css';

html {
  overflow: hidden;
}

body {
  margin: 0;
  color: #fff;
}
</style>

<style scoped>
.page {
  position: fixed;
  width: 100%;
  height: 100%;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 1s ease-out;
}

.slide-left-enter-from,
.slide-right-leave-to {
  transform: translateX(1080px);
  opacity: 0;
  will-change: transform, opacity;
}

.slide-left-leave-to,
.slide-right-enter-from {
  transform: translateX(-1080px);
  opacity: 0;
  will-change: transform, opacity;
}
</style>
