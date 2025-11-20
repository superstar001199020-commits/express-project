const dotenv = require('dotenv');
const path = require('path');

const envFound = dotenv.config({ path: path.resolve(process.cwd(), '.env') });
if (!envFound) {
  console.warn('.env file not found, relying on process.env');
}

module.exports = {
  port: process.env.PORT || 4000,
  mongoURI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/blog-api',
  nodeEnv: process.env.NODE_ENV || 'development',
};
