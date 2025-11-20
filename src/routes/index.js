const express = require("express");
const router = express.Router();

// Writer routes
const writerRoutes = require("./writer.routes");
router.use("/writers", writerRoutes);

// Blog routes
const blogRoutes = require("./blog.routes");
router.use("/blogs", blogRoutes);

module.exports = router;
