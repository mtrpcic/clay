import Engine from './src/Engine.mjs';
import config from './config.json';

const activeConfig = config[process.env.NODE_ENV || 'development'];
const engine = new Engine(activeConfig);

engine.start();
