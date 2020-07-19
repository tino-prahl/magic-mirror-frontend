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
import WifiPage from './pages/WifiPage.vue';

export default {
  components: {
    MainPage,
    WifiPage,
  },
  setup: function () {
    const pages = ['MainPage', 'WifiPage'];

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
@import '~bootstrap/dist/css/bootstrap.css';

html {
  overflow: hidden;
}

body {
  margin: 0;
  font-family: 'roboto_condensedregular', arial, serif;
  font-size: 20px;
  background: black;
  color: white;
}

.dimmed {
  color: #555;
}
.normal {
  color: #999;
}
.bright {
  color: #fff;
}

.xsmall {
  font-size: 15px;
  line-height: 20px;
}
.small {
  font-size: 20px;
  line-height: 25px;
}
.medium {
  font-size: 30px;
  line-height: 35px;
}
.large {
  font-size: 65px;
  line-height: 65px;
}
.xlarge {
  font-size: 75px;
  line-height: 75px;
  letter-spacing: -3px;
}

.thin {
  font-family: 'robotothin', serif;
}
.light {
  font-family: 'roboto_condensedlight', serif;
}
.regular {
  font-family: 'roboto_condensedregular', serif;
}
.bold {
  font-family: 'roboto_condensedbold', serif;
}

.table {
  color: white;
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
  transform: translateX(100%);
  opacity: 0;
  will-change: transform, opacity;
}

.slide-left-leave-to,
.slide-right-enter-from {
  transform: translateX(-100%);
  opacity: 0;
  will-change: transform, opacity;
}
</style>
