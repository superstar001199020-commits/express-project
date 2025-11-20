const express = require("express");
const cors = require("cors");

function createApp() {
  const app = express();

  // Global middleware
  app.use(cors());
  app.use(express.json());

  // Mount all API routes
  const routes = require("./routes");
  app.use("/api", routes);

  // Test route
  app.get("/", (req, res) => {
    res.send("API is running...");
  });

  return app;
}

module.exports = createApp;
