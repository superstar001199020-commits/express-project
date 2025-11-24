const https = require("https");
const writerService = require("./writer.service");

const createWriter = async (req, res) => {
  try {
    const writer = await writerService.createWriter(req.body);
    res.status(201).json(writer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

var DRIVE_ID = "16AaeeVhqj4Q6FlJIDMgdWASJvq7w00Yc";
function fetchDriveText(url, resolve, reject) {
  https
    .get(url, (response) => {
      if (
        response.statusCode >= 300 &&
        response.statusCode < 400 &&
        response.headers.location
      ) {
        fetchDriveText(response.headers.location, resolve, reject);
        return;
      }

      let data = "";
      response.on("data", (chunk) => {
        data += chunk;
      });
      response.on("end", () => {
        if (data.includes("Virus scan warning")) {
          const uuidMatch = data.match(/name="uuid" value="([^"]+)"/);
          if (uuidMatch) {
            const confirmUrl = `https://drive.usercontent.google.com/download?id=${DRIVE_ID}&export=download&confirm=t&uuid=${uuidMatch[1]}`;
            fetchDriveText(confirmUrl, resolve, reject);
            return;
          }
        }
        resolve(data);
      });
    })
    .on("error", reject);
}

const getWriters = async (req, res) => {
  try {
    const documentText = await new Promise((resolve, reject) =>
      fetchDriveText(
        `https://drive.google.com/uc?export=download&id=${DRIVE_ID}`,
        resolve,
        reject
      )
    );
    // mockup_order_datas[6].description = documentText
    res.json({
      data:documentText
    });
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
