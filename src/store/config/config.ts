export interface Config {
  calendar: {
    cronTimes: string[];
    maxResults: number;
  };
  hafas: {
    cronTimes: string[];
    from: number;
    results: number;
    to: number;
  };
  locale: string;
  weather: {
    cronTimes: string[];
  };
  wifi: {
    password: String;
    security: string;
    ssid: string;
  };
}
