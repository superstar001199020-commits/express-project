// Export controllers
const writerController = require("./writer/writer.controller");
const blogController = require("./blog/blog.controller");

// Export services (optional, if you want)
const writerService = require("./writer/writer.service");
const blogService = require("./blog/blog.service");

module.exports = {
  // Controllers
  writerController,
  blogController,

  // Services
  writerService,
  blogService
};
