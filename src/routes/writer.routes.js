const express = require("express");
const router = express.Router();

const writerController = require("../domains/writer/writer.controller");

// Create a writer
router.post("/", writerController.createWriter);

// Get all writers
router.get("/", writerController.getWriters);

// Get writer by ID
router.get("/:id", writerController.getWriterById);

// Update writer
router.put("/:id", writerController.updateWriter);

// Delete writer
router.delete("/:id", writerController.deleteWriter);

module.exports = router;
