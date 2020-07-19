import { readonly } from 'vue';
import { Config } from './config';

const config: Config | {} = {};

export async function loadConfig() {
  const response = await fetch('config/config.json');
  Object.assign(config, await response.json());
}

export default readonly(config) as Config;
