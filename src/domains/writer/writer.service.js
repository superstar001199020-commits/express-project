const { v4: uuidv4 } = require("uuid");
const { writers } = require("../mockData");

const findWriterIndex = (id) => writers.findIndex((writer) => writer._id === id);

const createWriter = (data) => {
  if (!data.name || !data.email) {
    throw new Error("name and email are required");
  }

  const emailExists = writers.some(
    (writer) => writer.email.toLowerCase() === data.email.toLowerCase()
  );

  if (emailExists) {
    throw new Error("Writer with this email already exists");
  }

  const timestamp = new Date().toISOString();
  const writer = {
    _id: uuidv4(),
    name: data.name,
    email: data.email.toLowerCase(),
    bio: data.bio || "",
    createdAt: timestamp,
    updatedAt: timestamp,
  };

  writers.push(writer);
  return writer;
};

const getWriters = () => writers;

const getWriterById = (id) => writers.find((writer) => writer._id === id) || null;

const updateWriter = (id, data) => {
  const index = findWriterIndex(id);
  if (index === -1) return null;

  if (data.email) {
    const duplicateEmail = writers.some(
      (writer, idx) =>
        idx !== index && writer.email.toLowerCase() === data.email.toLowerCase()
    );
    if (duplicateEmail) {
      throw new Error("Another writer already uses this email");
    }
  }

  const updated = {
    ...writers[index],
    ...data,
    email: data.email ? data.email.toLowerCase() : writers[index].email,
    updatedAt: new Date().toISOString(),
  };

  writers[index] = updated;
  return updated;
};

const deleteWriter = (id) => {
  const index = findWriterIndex(id);
  if (index === -1) return null;

  const [removed] = writers.splice(index, 1);
  return removed;
};

module.exports = {
  createWriter,
  getWriters,
  getWriterById,
  updateWriter,
  deleteWriter,
};
