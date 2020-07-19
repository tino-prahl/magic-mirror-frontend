import { CronJob } from 'cron';
import hafas from './store/hafas';
import calendar from './store/calendar';
import weather from './store/weather';
import config from './store/config';

export function startCronJobs() {
  calendar.actions.fetchNextEvents();
  hafas.actions.fetchJourneys();
  weather.actions.fetchCurrentWeather();

  const jobs = [
    ...config.calendar.cronTimes.map(
      (t) => new CronJob(t, calendar.actions.fetchNextEvents),
    ),
    ...config.hafas.cronTimes.map(
      (t) => new CronJob(t, hafas.actions.fetchJourneys),
    ),
    ...config.weather.cronTimes.map(
      (t) => new CronJob(t, weather.actions.fetchCurrentWeather),
    ),
  ];

  jobs.forEach((j) => j.start());
}
