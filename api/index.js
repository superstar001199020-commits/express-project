const createApp = require("../src/app");

// Create the Express app instance
const app = createApp();

// Export the app for Vercel Serverless Functions
module.exports = app;


