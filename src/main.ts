import { createApp } from 'vue';
import App from './App.vue';
import moment from 'moment';
import { startCronJobs } from './cron';
import { loadConfig } from './store/config';
import config from './store/config';

const bootstrap = async () => {
  await loadConfig();
  moment.locale(config.locale);
  startCronJobs();
  createApp(App).mount('#app');
};

bootstrap();
