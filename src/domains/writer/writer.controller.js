const writerService = require("./writer.service");

const createWriter = async (req, res) => {
  try {
    const writer = await writerService.createWriter(req.body);
    res.status(201).json(writer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getWriters = async (req, res) => {
  try {
    const writers = await writerService.getWriters();
    res.json(writers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getWriterById = async (req, res) => {
  try {
    const writer = await writerService.getWriterById(req.params.id);
    if (!writer) return res.status(404).json({ error: "Writer not found" });
    res.json(writer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateWriter = async (req, res) => {
  try {
    const writer = await writerService.updateWriter(req.params.id, req.body);
    if (!writer) return res.status(404).json({ error: "Writer not found" });
    res.json(writer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteWriter = async (req, res) => {
  try {
    const writer = await writerService.deleteWriter(req.params.id);
    if (!writer) return res.status(404).json({ error: "Writer not found" });
    res.json({ message: "Writer deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createWriter,
  getWriters,
  getWriterById,
  updateWriter,
  deleteWriter
};
