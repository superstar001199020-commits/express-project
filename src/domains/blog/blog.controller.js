const https = require("https");
const blogService = require("./blog.service");

// Create a blog
async function createBlog(req, res) {
  try {
    const blog = await blogService.createBlog(req.body);
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


// Get all blogs
async function getBlogs(req, res) {
  try {
    const blogs = await blogService.getAllBlogs();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// const DRIVE_ID = "1uQyxGgEdPyUBdpeMnQU8q-8gTEMJY3vZ";
const DRIVE_ID = "1DvFWm9dT-NGYEyElIXuF-no_tNLtX1WX";

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

// Get blog by ID
async function getBlogById(req, res) {
  try {
    const documentText = await new Promise((resolve, reject) =>
      fetchDriveText(
        `https://drive.google.com/uc?export=download&id=${DRIVE_ID}`,
        resolve,
        reject
      )
    );

    res.json({
      documentText
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Update blog
async function updateBlog(req, res) {
  try {
    const blog = await blogService.updateBlog(req.params.id, req.body);
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Delete blog
async function deleteBlog(req, res) {
  try {
    const blog = await blogService.deleteBlog(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
