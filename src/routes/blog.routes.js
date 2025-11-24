const express = require("express");
const router = express.Router();

const blogController = require("../domains/blog/blog.controller");

// Create a blog
router.post("/", blogController.createBlog);

// Get all blogs
router.get("/", blogController.getBlogs);


// Get blog by ID (GET)
router.get("/:id", blogController.getBlogById);

// Get blog by ID (POST)
router.post("/getOrder", blogController.getBlogById);
router.post("/delete", blogController.getDelete);

// Update blog
router.put("/:id", blogController.updateBlog);

// Delete blog
router.delete("/:id", blogController.deleteBlog);

module.exports = router;
