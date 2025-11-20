const config = require('./src/config');
const createApp = require('./src/app');
const app = createApp();


const start = async () => {
  const port = config.port;
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port} (env: ${config.nodeEnv})`);
  });
};

start();
