const { v4: uuidv4 } = require("uuid");
const { blogs, writers } = require("../mockData");

const withWriterDetails = (blog) => {
  if (!blog) return null;
  const writer = writers.find((item) => item._id === blog.writer);
  if (!writer) return { ...blog };
  return {
    ...blog,
    writer: {
      _id: writer._id,
      name: writer.name,
      email: writer.email,
      bio: writer.bio,
    },
  };
};

const findBlogIndex = (id) => blogs.findIndex((blog) => blog._id === id);

const createBlog = (data) => {
  if (!data.title || !data.content || !data.writer) {
    throw new Error("title, content and writer are required");
  }

  const writer = writers.find((item) => item._id === data.writer);
  if (!writer) {
    throw new Error("Writer not found");
  }

  const timestamp = new Date().toISOString();
  const blog = {
    _id: uuidv4(),
    title: data.title,
    content: data.content,
    writer: writer._id,
    tags: data.tags || [],
    publishedAt: data.publishedAt || timestamp,
    createdAt: timestamp,
    updatedAt: timestamp,
  };

  blogs.push(blog);
  return withWriterDetails(blog);
};

const getAllBlogs = () => blogs.map(withWriterDetails);

const getBlogById = (id) => withWriterDetails(blogs.find((blog) => blog._id === id));

const updateBlog = (id, data) => {
  const index = findBlogIndex(id);
  if (index === -1) return null;

  if (data.writer) {
    const writerExists = writers.some((writer) => writer._id === data.writer);
    if (!writerExists) {
      throw new Error("Writer not found");
    }
  }

  const updated = {
    ...blogs[index],
    ...data,
    writer: data.writer || blogs[index].writer,
    updatedAt: new Date().toISOString(),
  };

  blogs[index] = updated;
  return withWriterDetails(updated);
};

const deleteBlog = (id) => {
  const index = findBlogIndex(id);
  if (index === -1) return null;

  const [removed] = blogs.splice(index, 1);
  return removed;
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
