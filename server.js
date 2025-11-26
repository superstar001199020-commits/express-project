const config = require('./src/config');
const createApp = require('./src/app');
const app = createApp();

// Prefer Fly's PORT env var but fall back to our config/default
const PORT = process.env.PORT || config.port || 4000;

const start = async () => {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(
      `Server listening on port ${PORT} (bound to 0.0.0.0, env: ${config.nodeEnv})`
    );
  });
};

start();
